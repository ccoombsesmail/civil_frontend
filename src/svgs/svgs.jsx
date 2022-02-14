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
    style={{ cursor: 'pointer' }}
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
  <svg width="24" height="24" viewBox="143.048 196.071 22.546 22" xmlns="http://www.w3.org/2000/svg">
    <path
      className="st0"
      d="M11,24V14H5v12h6v-2.4l0,0c1.5,1.6,4.1,2.4,6.2,2.4h6.5c1.1,0,2.1-0.8,2.3-2l1.5-8.6c0.3-1.5-0.9-2.4-2.3-2.4 H20V6.4C20,5.1,18.7,4,17.4,4h0C16.1,4,15,5.1,15,6.4v0c0,1.6-0.5,3.1-1.4,4.4L11,13.8"
      transform="matrix(1, 0, 0, 1, 138.047791, 192.070709)"
      style={{
        stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeWidth: '1.5px', fillRule: 'evenodd', fill: 'none',
      }}
    />
  </svg>
)

export const LikeClickedSvg = () => (
  <svg width="24" height="24" viewBox="143.048 196.071 22.546 22" xmlns="http://www.w3.org/2000/svg">
    <path
      className="st0"
      d="M11,24V14H5v12h6v-2.4l0,0c1.5,1.6,4.1,2.4,6.2,2.4h6.5c1.1,0,2.1-0.8,2.3-2l1.5-8.6c0.3-1.5-0.9-2.4-2.3-2.4 H20V6.4C20,5.1,18.7,4,17.4,4h0C16.1,4,15,5.1,15,6.4v0c0,1.6-0.5,3.1-1.4,4.4L11,13.8"
      transform="matrix(1, 0, 0, 1, 138.047791, 192.070709)"
      style={{
        stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeWidth: '1.5px', fillRule: 'evenodd', fill: 'rgb(255, 0, 0)',
      }}
    />
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
  <svg style={{ marginLeft: '10px' }} width="11px" height="14px" viewBox="0 0 11 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>play_arrow</title>
    <desc>Created with Sketch.</desc>
    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Rounded" transform="translate(-753.000000, -955.000000)">
        <g id="AV" transform="translate(100.000000, 852.000000)">
          <g id="-Round-/-AV-/-play_arrow" transform="translate(646.000000, 98.000000)">
            <g>
              <rect id="Rectangle-Copy-50" x="0" y="0" width="24" height="24" />
              <path d="M7,6.82 L7,17.18 C7,17.97 7.87,18.45 8.54,18.02 L16.68,12.84 C17.3,12.45 17.3,11.55 16.68,11.15 L8.54,5.98 C7.87,5.55 7,6.03 7,6.82 Z" id="🔹Icon-Color" fill="white" />
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

export const VideoSvg = () => (
  <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-video">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
)

export const ImageSvg = () => (
  <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 48">
    <title>Asset 69</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path className="cls-1" d="M56,0H8A8,8,0,0,0,0,8V40a7.27,7.27,0,0,0,.48,2.64A8.05,8.05,0,0,0,4,46.91,8.1,8.1,0,0,0,8,48H56a8.08,8.08,0,0,0,6.72-3.65A8.18,8.18,0,0,0,64,40V8A8,8,0,0,0,56,0ZM33,42.67H8a2.35,2.35,0,0,1-.83-.16L21.65,22.75,33.52,34.61l3.76,3.76,4.27,4.3ZM58.67,40A2.68,2.68,0,0,1,56,42.67H49.12l-8-8.06,6.82-6.74,10.78,12Zm0-8.13L50,22.21a2.72,2.72,0,0,0-1.89-.88,2.53,2.53,0,0,0-1.95.78l-8.82,8.74L23.23,16.77A2.84,2.84,0,0,0,21.12,16a2.76,2.76,0,0,0-1.95,1.09L5.33,36V8A2.68,2.68,0,0,1,8,5.33H56A2.68,2.68,0,0,1,58.67,8Z" />
        <circle className="cls-1" cx="37.33" cy="18.67" r="5.33" />
      </g>
    </g>
  </svg>
)

export const AddFriendSvg = () => (
  <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 73.82c-100.613 0-182.18 81.571-182.18 182.171C73.82 356.61 155.387 438.18 256 438.18c100.608 0 182.18-81.57 182.18-182.188 0-100.608-81.572-182.17-182.18-182.17zm0 71.833a55.05 55.05 0 1 1-55.055 55.055A55.053 55.053 0 0 1 256 145.653zm22.703 186.328v22.386h-103.03c0-54.255 29.518-73.555 48.88-90.888a65.738 65.738 0 0 0 62.886 0c8.674 7.761 19.37 15.926 28.555 27.449h-8.837v28.45h-28.454zm89.437 19.934h-28.455v28.441h-19.929v-28.44h-28.45V331.98h28.45v-28.45h19.929v28.45h28.446v19.934z" data-name="Profile Add Friend" />
  </svg>
)

export const RemoveFriendSvg = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 368.373 368.373"
    // style="enable-background:new 0 0 368.373 368.373;"
    xmlSpace="preserve"
  >
    <g id="XMLID_107_">
      <path
        id="XMLID_108_"
        d="M368.373,241.936c0-57.897-47.102-105-105-105c-34.485,0-65.14,16.713-84.293,42.463
      c-7.653-1.61-15.582-2.463-23.707-2.463c-8.643,0-17.064,0.965-25.165,2.781c-38.121,8.543-69.149,36.066-82.606,72.092
      c-4.669,12.5-7.229,26.02-7.229,40.127c0,8.284,6.716,15,15,15h125.596c19.246,24.348,49.03,40,82.404,40
      C321.271,346.936,368.373,299.834,368.373,241.936z M188.373,241.936c0-20.01,7.892-38.199,20.708-51.662
      c13.67-14.359,32.946-23.338,54.292-23.338c41.355,0,75,33.645,75,75s-33.645,75-75,75c-13.592,0-26.339-3.652-37.344-10
      C203.549,293.97,188.373,269.7,188.373,241.936z"
      />
      <path
        id="XMLID_138_"
        d="M32.622,84.187c0,23.666,18.367,43.109,41.594,44.857c-7.382-13.302-11.594-28.596-11.594-44.857 s4.212-31.556,11.594-44.857C50.989,41.077,32.622,60.521,32.622,84.187z"
      />
      <path
        id="XMLID_169_"
        d="M15,251.809h1.025c11.601-40.229,40.192-73.322,77.464-90.984c-5.17-1.077-10.482-1.639-15.867-1.639 C34.821,159.186,0,194.008,0,236.809C0,245.094,6.716,251.809,15,251.809z"
      />
      <path
        id="XMLID_197_"
        d="M218.123,84.187c0-34.601-28.149-62.75-62.75-62.75c-21.093,0-39.774,10.473-51.157,26.479
      c-7.289,10.25-11.594,22.764-11.594,36.271s4.305,26.021,11.594,36.271c11.383,16.006,30.065,26.478,51.157,26.478
      C189.974,146.936,218.123,118.787,218.123,84.187z"
      />
      <path
        id="XMLID_221_"
        d="M293.373,256.936c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-43.2h-16.8c-8.284,0-15,6.716-15,15 c0,8.284,6.716,15,15,15h31.546H293.373z"
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
