/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as React from 'react';

type DropDownContextType = {
  registerItem: (ref: React.RefObject<HTMLButtonElement>) => void;
  onClose: () => void
};

const DropDownContext = React.createContext<DropDownContextType | null>(null);

export function DropDownItem({
  children,
  className,
  onClick,
  title,
  disabled = false
}: {
  children: React.ReactNode;
  className: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  disabled?: boolean
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const dropDownContext = React.useContext(DropDownContext);

  if (dropDownContext === null) {
    throw new Error('DropDownItem must be used within a DropDown');
  }

  const {registerItem, onClose } = dropDownContext;

  const handleOnClick = useCallback((e) => {
    onClick(e)
    onClose()
  }, [onClose, onClick])

  useEffect(() => {
    if (ref && ref.current) {
      registerItem(ref);
    }
  }, [ref, registerItem]);

  return (
    <button
      disabled={disabled}
      className={className}
      onClick={ disabled ? (e) => e.stopPropagation() : handleOnClick}
      ref={ref}
      title={title}
      type="button">
      {children}
    </button>
  );
}

function DropDownItems({
  children,
  dropDownRef,
  onClose,
  dropdownLeft
}: {
  children: React.ReactNode;
  dropDownRef: React.Ref<HTMLDivElement>;
  onClose: () => void;
  dropdownLeft: number
}) {
  const [items, setItems] = useState<React.RefObject<HTMLButtonElement>[]>();
  const [highlightedItem, setHighlightedItem] =
    useState<React.RefObject<HTMLButtonElement>>();

  const registerItem = useCallback(
    (itemRef: React.RefObject<HTMLButtonElement>) => {
      setItems((prev) => (prev ? [...prev, itemRef] : [itemRef]));
    },
    [setItems],
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!items) return;

    const key = event.key;

    if (['Escape', 'ArrowUp', 'ArrowDown', 'Tab'].includes(key)) {
      event.preventDefault();
    }

    if (key === 'Escape' || key === 'Tab') {
      onClose();
    } else if (key === 'ArrowUp') {
      setHighlightedItem((prev) => {
        if (!prev) return items[0];
        const index = items.indexOf(prev) - 1;
        return items[index === -1 ? items.length - 1 : index];
      });
    } else if (key === 'ArrowDown') {
      setHighlightedItem((prev) => {
        if (!prev) return items[0];
        return items[items.indexOf(prev) + 1];
      });
    }
  };

  const contextValue = useMemo(
    () => ({
      registerItem,
      onClose
    }),
    [registerItem, onClose],
  );

  useEffect(() => {
    if (items && !highlightedItem) {
      setHighlightedItem(items[0]);
    }

    if (highlightedItem && highlightedItem.current) {
      highlightedItem.current.focus();
    }
  }, [items, highlightedItem, dropDownRef]);

  return (
    <DropDownContext.Provider value={contextValue}>
      <div style={{left: `${dropdownLeft}px`, top: "40px"}} className="dropdown" ref={dropDownRef} onKeyDown={handleKeyDown}>
        {children}
      </div>
    </DropDownContext.Provider>
  );
}

export default function DropDown({
  disabled = false,
  buttonLabel,
  buttonAriaLabel,
  buttonClassName,
  buttonIconClassName,
  children,
  stopCloseOnClickSelf
}: {
  disabled?: boolean;
  buttonAriaLabel?: string;
  buttonClassName: string;
  buttonIconClassName?: string;
  buttonLabel?: string;
  children: ReactNode;
  stopCloseOnClickSelf?: boolean;
}): JSX.Element {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownLeft, setDropdownLeft] = useState(0)
  const [showDropDown, setShowDropDown] = useState(false)

  const handleClose = () => {
    setShowDropDown(false);
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  useEffect(() => {
    const button = buttonRef.current;
    const toolbar = document.getElementsByClassName('editor-toolbar')[0]

    const headerRect = toolbar.getBoundingClientRect();
    const button1Rect = button.getBoundingClientRect();

    const button1Pos = button1Rect.left - headerRect.left;

    setDropdownLeft(button1Pos)
  }, [dropDownRef, buttonRef, showDropDown, stopCloseOnClickSelf]);

  return (
    <>
    <div 
    id='toolbar-overlay' 
    style={{display: showDropDown ? 'block' : 'none', zIndex: 9999999999}} 
    className='absolute top-0 bottom-0 left-0 right-0' 
    onClick={() => setShowDropDown(false)}
    />
      <button
        type='button'
        disabled={disabled}
        aria-label={buttonAriaLabel || buttonLabel}
        className={buttonClassName}
        onClick={() => {
          setShowDropDown(!showDropDown)
        }}
        ref={buttonRef}>
        {buttonIconClassName && <span className={buttonIconClassName} />}
        {buttonLabel && (
          <span className="text dropdown-button-text">{buttonLabel}</span>
        )}
        <i className="chevron-down" />
      </button>
      {showDropDown && <DropDownItems dropdownLeft={dropdownLeft} dropDownRef={dropDownRef} onClose={handleClose}>
            {children}
      </DropDownItems>
    }   
    </>
  );
}


export function DropDownFromExternal({
  disabled = false,
  buttonLabel,
  buttonAriaLabel,
  buttonClassName,
  buttonIconClassName,
  children,
  stopCloseOnClickSelf,
  showDropDown,
  setShowDropDown
}: {
  disabled?: boolean;
  buttonAriaLabel?: string;
  buttonClassName: string;
  buttonIconClassName?: string;
  buttonLabel?: string;
  children: ReactNode;
  stopCloseOnClickSelf?: boolean;
  showDropDown: boolean;
  setShowDropDown: (b: boolean) => void
}): JSX.Element {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    setShowDropDown(false);
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  useEffect(() => {
    const button = buttonRef.current;

    if (button !== null && showDropDown) {
      const handle = (event: MouseEvent) => {
        const target = event.target;
        if (stopCloseOnClickSelf) {
          if (
            dropDownRef.current &&
            dropDownRef.current.contains(target as Node)
          )
            return;
        }
        if (!button.contains(target as Node)) {
          setShowDropDown(false);
        }
      };
      document.addEventListener('click', handle);

      return () => {
        document.removeEventListener('click', handle);
      };
    }
  }, [dropDownRef, buttonRef, showDropDown, stopCloseOnClickSelf]);

  return (
    <>
      <button
        type='button'
        disabled={disabled}
        aria-label={buttonAriaLabel || buttonLabel}
        className={buttonClassName}
        onClick={() => setShowDropDown(!showDropDown)}
        ref={buttonRef}>
        {buttonIconClassName && <span className={buttonIconClassName} />}
        {buttonLabel && (
          <span className="text dropdown-button-text">{buttonLabel}</span>
        )}
        <i className="chevron-down" />
      </button>
      {showDropDown && <DropDownItems dropdownLeft={0} dropDownRef={dropDownRef} onClose={handleClose}>
            {children}
      </DropDownItems>
    }   
    </>
  );
}