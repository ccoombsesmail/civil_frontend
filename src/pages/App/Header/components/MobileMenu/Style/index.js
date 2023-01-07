import styled from 'styled-components'
// credit Max Misnikov (@maxim) from codepen

export const NotificationMarkMenu = styled('mark')` 
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  z-index: 9999999999;
  height: 22px;
  width: 22px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  font-size: clamp(10px, .67vw, 20px);
  transform-origin: center bottom;
  animation-duration: 1s;
  animation-fill-mode: both;   
  animation-iteration-count: 1;  
`

export const Container = styled('div')`
  display: block;
   .nav-links {
    display: block;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    // Dark overlay on open nav
    &::before {
      background: rgba(0, 0, 0, .5);
      content: '';
      height: 100vh;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      width: 100%;
      transition: all .3s;
    }
    li {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ddd;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: all .3s;
      background: #fff;
      padding-left: 50px;
      a {
        background: #fff;
        color: #404040;
        display: block;
        font-size: 18px;
        font-weight: 700;
        padding: 12px 20px;
        text-align: left;
        transition: all .3s;
        &:hover {
          color: var(--m-primary-btn-color);
        }
      }

    }
  }

  input[type="checkbox"] {
  z-index: 99999999999;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  // Nav open styling - achieved with ':checked' selector
  &:checked + label {
    border: 4px solid silver;
    border-radius: 50%;
    height: 28px;
    top: 16px;
    right: 18px;
    width: 28px;
    transform: rotate(-135deg);
    &::before {
      background: silver;
      top: 8px;
      right: 4px;
      width: 12px;
    }
    &::after {
      background: silver;
      opacity: 1;
      top: 8px;
      right: 4px;
      visibility: visible;
      width: 12px;
    }
    &:hover {
      border-color: var(--m-primary-btn-color);
      &::before,
      &::after {
        background: var(--m-primary-btn-color);
      }
    }
  }
  &:checked ~ .nav-links {
    z-index: 999999;
    &::before {
      opacity: 1;
      visibility: visible;
    }
    li {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      &:nth-child(1) {
        transition-delay: 100ms;
      }
      &:nth-child(2) {
        transition-delay: 200ms;
      }
      &:nth-child(3) {
        transition-delay: 300ms;
      }
      &:nth-child(4) {
        transition-delay: 400ms;
      }
      /* @for $i from 1 through length($nav-links) {
        &:nth-child(#{$i}) {
          transition-delay: ($i - 1)/10+s;
        }
      } */
    }
  }
}

// Styling of the linked label element
label {
  z-index: 99999999999;

  background: none transparent;
  border: 4px solid var(--m-primary-btn-color);
  border-left: 0 solid transparent;
  border-right: 0 solid transparent;
  cursor: pointer;
  display: block;
  height: 24px;
  position: absolute;
  top: 18px;
  right: 20px;
  width: 24px;
  transition: all .2s;
  &::before {
    background: var(--m-primary-btn-color);
    content: '';
    height: 4px;
    position: absolute;
    top: 6px;
    width: 24px;
    transition: all .2s;
  }
  &::after {
    background: var(--m-primary-btn-color);
    content: '';
    height: 4px;
    position: absolute;
    top: 6px;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    transform: rotate(90deg);
    transition: all .2s;
  }
}
`
