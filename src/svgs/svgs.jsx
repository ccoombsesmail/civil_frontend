/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

export const NotificationSvg = () => (
  <svg
    version="1.1"
    id="Icons"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
  >
    <g>
      <path d="M26.8,25H5.2c-0.8,0-1.5-0.4-1.9-1.1c-0.4-0.7-0.3-1.5,0.1-2.2L4.5,20c1.8-2.7,2.7-5.8,2.7-9c0-3.7,2.4-7.1,5.9-8.3
C13.7,1.6,14.8,1,16,1s2.3,0.6,2.9,1.7c3.5,1.2,5.9,4.6,5.9,8.3c0,3.2,0.9,6.3,2.7,9l1.1,1.7c0.4,0.7,0.5,1.5,0.1,2.2
C28.4,24.6,27.6,25,26.8,25z"
      />
    </g>
    <path d="M11.1,27c0.5,2.3,2.5,4,4.9,4s4.4-1.7,4.9-4H11.1z" />
  </svg>
)

export const UserIconSvg = () => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 53 53"
    xmlSpace="preserve"
    width="24"
    height="24"
    style={{cursor: 'pointer' }}
  >
    <path
      style={{ fill: '#000000' }}
      d="M18.613,41.552l-7.907,4.313c-0.464,0.253-0.881,0.564-1.269,0.903C14.047,50.655,19.998,53,26.5,53
c6.454,0,12.367-2.31,16.964-6.144c-0.424-0.358-0.884-0.68-1.394-0.934l-8.467-4.233c-1.094-0.547-1.785-1.665-1.785-2.888v-3.322
c0.238-0.271,0.51-0.619,0.801-1.03c1.154-1.63,2.027-3.423,2.632-5.304c1.086-0.335,1.886-1.338,1.886-2.53v-3.546
c0-0.78-0.347-1.477-0.886-1.965v-5.126c0,0,1.053-7.977-9.75-7.977s-9.75,7.977-9.75,7.977v5.126
c-0.54,0.488-0.886,1.185-0.886,1.965v3.546c0,0.934,0.491,1.756,1.226,2.231c0.886,3.857,3.206,6.633,3.206,6.633v3.24
C20.296,39.899,19.65,40.986,18.613,41.552z"
    />
    <g>
      <path
        style={{ fill: '#556080' }}
        d="M26.953,0.004C12.32-0.246,0.254,11.414,0.004,26.047C-0.138,34.344,3.56,41.801,9.448,46.76
c0.385-0.336,0.798-0.644,1.257-0.894l7.907-4.313c1.037-0.566,1.683-1.653,1.683-2.835v-3.24c0,0-2.321-2.776-3.206-6.633
c-0.734-0.475-1.226-1.296-1.226-2.231v-3.546c0-0.78,0.347-1.477,0.886-1.965v-5.126c0,0-1.053-7.977,9.75-7.977
s9.75,7.977,9.75,7.977v5.126c0.54,0.488,0.886,1.185,0.886,1.965v3.546c0,1.192-0.8,2.195-1.886,2.53
c-0.605,1.881-1.478,3.674-2.632,5.304c-0.291,0.411-0.563,0.759-0.801,1.03V38.8c0,1.223,0.691,2.342,1.785,2.888l8.467,4.233
c0.508,0.254,0.967,0.575,1.39,0.932c5.71-4.762,9.399-11.882,9.536-19.9C53.246,12.32,41.587,0.254,26.953,0.004z"
      />
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
)

export const ArrowRightSvg = ({ onClick }) => (
  <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export const ArrowLeftSvg = ({ onClick }) => (
  <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

export const CommentSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" />
  </svg>
)

export const LikeSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.4568 4.04112C13.9465 3.89532 13.4071 4.14932 13.1944 4.63551L11.4182 8.6953C11.1189 9.37937 10.6332 10.0666 10.0591 10.6315C9.73613 10.9494 9.36405 11.2492 8.95658 11.4895C8.98513 11.6556 9 11.8262 9 12V18.7208C10.9662 19.2191 12.4652 19.4974 13.8747 19.5744C15.4555 19.6609 16.9683 19.4962 18.9391 19.0527C19.666 18.8891 20.238 18.2957 20.3907 17.5321L21.541 11.781C21.6647 11.1622 21.1914 10.5849 20.5604 10.5849H16.6805C15.4446 10.5849 14.5045 9.47514 14.7077 8.25607L15.2112 5.23469C15.2999 4.70287 14.9752 4.18923 14.4568 4.04112ZM8.50064 20.6575C10.5273 21.1716 12.1718 21.4844 13.7655 21.5715C15.5816 21.6707 17.2858 21.4748 19.3783 21.0039C20.9084 20.6595 22.0509 19.4293 22.3519 17.9244L23.5021 12.1732C23.8734 10.3168 22.4535 8.58487 20.5604 8.58487L16.6805 8.58487L17.184 5.56349C17.4399 4.02832 16.5027 2.54563 15.0062 2.11807C13.5333 1.69722 11.9761 2.4304 11.362 3.83387L9.58589 7.89366C9.39928 8.3202 9.0685 8.80035 8.65628 9.20602C8.43074 9.42798 8.20006 9.6089 7.97781 9.74442C7.45036 9.28166 6.75828 9 6 9H3C1.34315 9 0 10.3431 0 12V19C0 20.6569 1.34315 22 3 22H6C7.04478 22 7.96357 21.4664 8.50064 20.6575ZM3 11C2.44772 11 2 11.4477 2 12V19C2 19.5523 2.44772 20 3 20H6C6.46838 20 6.86381 19.677 6.97116 19.2404C6.98984 19.1644 7 19.0841 7 19V12C7 11.8064 6.946 11.6286 6.85273 11.4771C6.67511 11.1887 6.35916 11 6 11H3Z" fill="#293644" />
  </svg>
)

export const LikeClickedSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#F44336" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.4568 4.04112C13.9465 3.89532 13.4071 4.14932 13.1944 4.63551L11.4182 8.6953C11.1189 9.37937 10.6332 10.0666 10.0591 10.6315C9.73613 10.9494 9.36405 11.2492 8.95658 11.4895C8.98513 11.6556 9 11.8262 9 12V18.7208C10.9662 19.2191 12.4652 19.4974 13.8747 19.5744C15.4555 19.6609 16.9683 19.4962 18.9391 19.0527C19.666 18.8891 20.238 18.2957 20.3907 17.5321L21.541 11.781C21.6647 11.1622 21.1914 10.5849 20.5604 10.5849H16.6805C15.4446 10.5849 14.5045 9.47514 14.7077 8.25607L15.2112 5.23469C15.2999 4.70287 14.9752 4.18923 14.4568 4.04112ZM8.50064 20.6575C10.5273 21.1716 12.1718 21.4844 13.7655 21.5715C15.5816 21.6707 17.2858 21.4748 19.3783 21.0039C20.9084 20.6595 22.0509 19.4293 22.3519 17.9244L23.5021 12.1732C23.8734 10.3168 22.4535 8.58487 20.5604 8.58487L16.6805 8.58487L17.184 5.56349C17.4399 4.02832 16.5027 2.54563 15.0062 2.11807C13.5333 1.69722 11.9761 2.4304 11.362 3.83387L9.58589 7.89366C9.39928 8.3202 9.0685 8.80035 8.65628 9.20602C8.43074 9.42798 8.20006 9.6089 7.97781 9.74442C7.45036 9.28166 6.75828 9 6 9H3C1.34315 9 0 10.3431 0 12V19C0 20.6569 1.34315 22 3 22H6C7.04478 22 7.96357 21.4664 8.50064 20.6575ZM3 11C2.44772 11 2 11.4477 2 12V19C2 19.5523 2.44772 20 3 20H6C6.46838 20 6.86381 19.677 6.97116 19.2404C6.98984 19.1644 7 19.0841 7 19V12C7 11.8064 6.946 11.6286 6.85273 11.4771C6.67511 11.1887 6.35916 11 6 11H3Z" fill="#F44336" />
  </svg>
)

export const InfoIconSvg = () => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>info</title>
    <desc>Created with Sketch.</desc>
    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Outlined" transform="translate(-442.000000, -288.000000)">
        <g id="Action" transform="translate(100.000000, 100.000000)">
          <g id="Outlined-/-Action-/-info" transform="translate(340.000000, 186.000000)">
            <g>
              <polygon id="Path" points="0 0 24 0 24 24 0 24" />
              <path d="M11,7 L13,7 L13,9 L11,9 L11,7 Z M11,11 L13,11 L13,17 L11,17 L11,11 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z" id="🔹-Icon-Color" fill="#1D1D1D" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export const RightTriangleArrowFillSvg = () => (
  <svg width="11px" height="14px" viewBox="0 0 11 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>play_arrow</title>
    <desc>Created with Sketch.</desc>
    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Rounded" transform="translate(-753.000000, -955.000000)">
        <g id="AV" transform="translate(100.000000, 852.000000)">
          <g id="-Round-/-AV-/-play_arrow" transform="translate(646.000000, 98.000000)">
            <g>
              <rect id="Rectangle-Copy-50" x="0" y="0" width="24" height="24" />
              <path d="M7,6.82 L7,17.18 C7,17.97 7.87,18.45 8.54,18.02 L16.68,12.84 C17.3,12.45 17.3,11.55 16.68,11.15 L8.54,5.98 C7.87,5.55 7,6.03 7,6.82 Z" id="🔹Icon-Color" fill="#1D1D1D" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export const DownArrowSvg = () => (
  <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export const UpArrowSvg = () => (
  <svg width="24px" height="24px" style={{ transform: 'rotate(180deg)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export const DownArrowCircleSvg = () => (
  <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down-circle">
    <g>
      <circle cx="12" cy="12" r="10" />
      <polyline points="8 12 12 16 16 12" />
      <line x1="12" y1="8" x2="12" y2="16" />
    </g>
  </svg>
)

export const LoginSvg = () => (
  <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)
