import React, { useMemo, useState } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { INSERT_EMBED_COMMAND } from '@lexical/react/LexicalAutoEmbedPlugin'
import { DropDownFromExternal, DropDownItem } from '../../../CommonComponents/Lexical/ui/DropDown.tsx'
import { TwitterEmbedConfigTopic, YoutubeEmbedConfigTopic, ExternalLinkConfigTopic } from '../../../CommonComponents/Lexical/plugins/AutoEmbedPlugin/index.tsx'
import { StyledDropDown } from './Style'

function EmbedDropdown() {
  const [editor] = useLexicalComposerContext()
  const EmbedConfigs = useMemo(() => {
    const yt = YoutubeEmbedConfigTopic()
    const tw = TwitterEmbedConfigTopic()
    const el = ExternalLinkConfigTopic()
    return [yt, tw, el]
  }, [])
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <DropDownFromExternal
      buttonClassName="toolbar-item spaced"
      buttonLabel="Insert Link Or Embed (YouTube, Twitter, etc...)"
      buttonAriaLabel="Insert specialized editor node"
      buttonIconClassName="icon plus"
      showDropDown={showDropDown}
      setShowDropDown={setShowDropDown}
    >
      {EmbedConfigs.map((embedConfig) => (
        <DropDownItem
          key={embedConfig.type}
          onClick={() => {
            setShowDropDown(false)
            editor.dispatchCommand(
              INSERT_EMBED_COMMAND,
              embedConfig.type,
            )
          }}
          className="item"
        >
          {embedConfig.icon}
          <span className="text">{embedConfig.contentName}</span>
        </DropDownItem>

      ))}

    </DropDownFromExternal>
  )
}

export default EmbedDropdown
