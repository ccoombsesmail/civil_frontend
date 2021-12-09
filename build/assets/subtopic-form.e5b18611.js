(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{175:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1);const o=Object(r.b)("div")`
  position: relative;
  padding: .5em;
  color: var(--m-danger-color);
  width: ${e=>e.width||"30%"};
  background-color: var(--m-danger-color);
  background-color: transparent;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  height: .8em;
  span {
    font-size: .65em;
  }
`;Object(r.b)("input")`

`;t.a=({width:e,children:t})=>i.a.createElement(o,{width:e},i.a.createElement("span",null,t))},184:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(49),o=e=>e?`${e[0].toUpperCase()}${e.slice(1)}`:"",l=a(1);const c=Object(l.b)("div")`
  position: relative;
  margin: 1.3em;
  font-family: 'Ubuntu', sans-serif;
`,s=Object(l.b)("label")`
  display: block;
  position: absolute;
  bottom: 50%;
  left: .8rem;
  color: var(--m-trim-color);
  font-size: .7em;
  font-weight: bold;
  line-height: var(--inputLineHeight);
  opacity: 0;
  transform: 
    translate3d(0, var(--labelDefaultPosY), 0)
    scale(1);
  transform-origin: 0 0;
  transition:
    opacity var(--inputTransitionDuration) var(--inputTransitionTF),
    transform var(--inputTransitionDuration) var(--inputTransitionTF),
    visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF),
    z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF);

  :placeholder-shown + .Input-label {
    visibility: hidden;
    z-index: -1;
  }

`,d=Object(l.b)("input")`
  display: block;
  margin: 1.2em 0 0 0;
  padding: .5em;
  color: black;
  width: ${e=>e.width||"30%"};
  height: 4vh;
  font-size: .8em;
  font-weight: bold;
  line-height: var(--inputLineHeight);
  border: none;
  outline:none;
  background: #E5E5E5;
  border: ${e=>e.showError?"1px solid var(--m-danger-color)":"1px solid var(--bg)"};
  border-radius: 0.4rem;
  transition: box-shadow var(--transitionDuration);
  ::placeholder {
    color: var(--m-trim-color);
  }
  :focus {
    outline: none;
    box-shadow:  5px 5px 8px #ffffff, -5px -5px 8px #ffffff;
  }

  :not(:placeholder-shown) + ${s},
  :focus:not(:placeholder-shown) + ${s} {
    visibility: visible;
    z-index: 1;
    opacity: 1;
    transform:
      translate3d(0, var(--labelTransformedPosY), 0)
      scale(var(--labelScaleFactor));
    transition:
      transform var(--inputTransitionDuration),
      visibility 0ms,
      z-index 0ms;
}
`;var m=a(175);t.a=({width:e,field:t,form:a,placeholder:n,onBlur:l,...u})=>{const b=a.getFieldMeta(t.name),p=b.error&&b.touched,f="function"==typeof l?l:()=>{};return i.a.createElement(c,null,i.a.createElement(d,{width:e,...t,type:"text",id:t.name,placeholder:n||"Enter A "+o(t.name),...u,showError:p,onBlur:f}),i.a.createElement(s,{htmlFor:t.name},o(t.name)),i.a.createElement(r.a,{width:e,name:t.name,component:m.a}))}},309:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(45),o=a(3),l=a(4),c=a(49),s=a(20),d=a(184),m=a(44),u=a(69),b=a(11),p=a(26),f=a(1);const h=Object(f.b)(c.c)`
  margin-top: 1em;
`,v=Object(f.b)("div")`
  display: flex;
  flex-direction: column;
`,g=Object(f.b)("div")`
  h1 {
    width: 100%;
    margin: 0;
    text-align: center;
    padding-bottom: .5em;
    border-bottom: 1px solid black;
  }
 `,w=new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g);t.default=()=>{var e;const{pathname:t}=Object(l.f)(),[a]=t.match(w),{createSubTopic:f,getTopic:E,closeModal:x}=Object(s.a)(u.a,b.b,p.a),T=Object(o.c)(e=>e.session.currentUser),y=null===(e=Object(o.c)(e=>e.topics.list))||void 0===e?void 0:e.find(e=>e.id===a);return Object(n.useEffect)(()=>{E(a,null==T?void 0:T.id)},[]),i.a.createElement(g,null,i.a.createElement(c.d,{initialValues:{title:""},validate:e=>{const t={};return e.title||(t.title="Title Is Required"),t},onSubmit:(e,{setSubmitting:t})=>{f({...e,topicId:a,createdBy:T.username}),t(!1)}},({isSubmitting:e})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a.Header,{closeButton:!0},i.a.createElement(r.a.Title,null,"Create Sub Topic Regarding The Topic"," ",`"${null==y?void 0:y.title}"`)),i.a.createElement(h,null,i.a.createElement(r.a.Body,null,i.a.createElement(v,null,i.a.createElement(c.b,{type:"text",name:"title",component:d.a}))),i.a.createElement(r.a.Footer,null,i.a.createElement(m.a,{type:"submit",disabled:e,onClick:x},"Cancel"),i.a.createElement(m.a,{type:"submit",disabled:e},"Submit"))))))}}}]);