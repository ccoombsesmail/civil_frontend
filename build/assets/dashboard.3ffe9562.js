(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{307:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),l=a(18),c=a(1);Object(c.b)("label")` 
  background-image: url('https://civil-dev.s3.us-west-1.amazonaws.com/profile_images/64_1.png');
  background-size: cover;
  height: 4em;
  width: 4em;
  border-radius: 50%;
  cursor: pointer;
`,Object(c.b)("input")` 
  position: absolute; 
  left: -99999rem;
`;const o=Object(c.b)("div")` 
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1em;
`;var s=a(61),d=a(20);const u=Object(c.b)("div")` 
  background: white;
  border: 1px solid black;
  justify-content: flex-start;
  border-radius: 1em;
  align-items: center;
  position: relative;
  /* padding: 0 .2em; */
  display: flex;
  height: 2vh;
  width: 10vw;

`,b=Object(c.b)("div")` 
  animation: ${e=>{return t=e.ratio,c.c`
  0% { max-width: 0; }
  100% { max-width: ${100*t}%; }
`;var t}} 1s ease-out normal forwards;
  animation-delay: 1.5s;
  border-radius: 1em;
  background: #47DDA6;
  height: 1.8vh;
  width: 10vw;
  max-width: 0;
`;var m=({value:e,maxValue:t})=>r.a.createElement(u,null,r.a.createElement(b,{ratio:e/t})),v=a(14),h=a(11),g=a(29);const w=Object(c.b)("header")`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  h1 {
    color: var(--bg-accent);
    font-size: 1.4em;
    font-weight: bold;
  }
`,p=Object(c.b)("div")`
  display: flex;
  align-items: center;

`,f=Object(c.b)("img")`  
  margin-right: 1vw;
  height: 2vw;
  width: 2vw;
  border-radius: 50%;

`;var j=({user:e})=>{const t=(e=>{const t=Object(i.b)(),{openModal:a}=Object(v.b)(h.b,t);return Object(n.useCallback)(()=>{a(e)},[])})(g.c);return r.a.createElement(w,null,r.a.createElement("h1",null,null==e?void 0:e.username),r.a.createElement(p,null,r.a.createElement(f,{src:null==e?void 0:e.iconSrc,onClick:t}),r.a.createElement(m,{value:null==e?void 0:e.civility,maxValue:20})))},x=a(103);t.default=()=>{const{getCurrentUser:e}=Object(d.a)(s.b),t=Object(i.c)(e=>e.session.currentUser);return Object(n.useEffect)(()=>{t&&e(null==t?void 0:t.id)},[]),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(o,null,r.a.createElement(j,{user:t}),r.a.createElement(x.a,null),r.a.createElement(l.g,null)))}}}]);