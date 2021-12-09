(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{185:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(186),i=n.n(r);const l=n(1).b.div`
  background-color: white;
  border-radius: .5em;
  margin-bottom: 1em;
  .ql-toolbar {
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
  }

  .ql-container {
    border-bottom-left-radius: .5em;
    border-bottom-right-radius: .5em;
  }

`;t.a=({content:e,setContent:t,setRawText:n,setToxicityScore:r})=>{const c=Object(a.useCallback)((e,a,o,i)=>{t(e),n&&n(i.getText()),r&&r(null)},[]);return o.a.createElement(l,{className:"text-editor"},o.a.createElement(i.a,{value:e,onChange:c,modules:{toolbar:[[{font:[]},{header:[]}],["bold","italic","underline","strike","blockquote","code-block"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],[{align:[]}],["link","image"],["clean"]]},formats:["font","header","bold","italic","underline","strike","blockquote","code-block","color","background","list","indent","align","link","image","clean","emoji"],placeholder:"Say something..."}))}},308:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),i=n(45),l=n(49),c=n(44),s=n(104),d=n(1);const p=Object(d.b)("div")`
  position: relative;
  width: 24px;
  height: 24px;
  color: ${e=>e.color};
  /* transform: scale(3); */
  span {
    margin-left: .5vw;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border: 2px solid #bfbfc0;
    border-radius: 50%;
    z-index: 9999999999;

  }

  label {
    z-index: 999999999;
    width: 24px;
    height: 24px;
    background: none;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-filter: url(#goo);
    filter: url(#goo);
    transform: translate3d(0,0,0);
    /* pointer-events: none; */
  }

  svg {
    position: absolute;
    top: 5px;
    left: 4px;
    z-index: 99999999999;
    pointer-events: none;
    path {
      stroke: white;
      stroke-width: 3;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 19;
      stroke-dashoffset: 19;
      transition: stroke-dashoffset .3s ease;
      transition-delay: .2s;
    }
  }

  input:checked {
    border: none;
  }
  input:checked + label {
      animation: ${e=>{return t=e.color,d.c`
  40% {
    background: ${t};
    box-shadow: 0 -18px 0 -8px ${t}, 16px -8px 0 -8px ${t}, 16px 8px 0 -8px ${t}, 0 18px 0 -8px ${t}, -16px 8px 0 -8px ${t}, -16px -8px 0 -8px ${t};
  }

  100% {
    background: ${t};
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
  

`;var t}} .6s ease forwards;
      border: 2px solid ${e=>e.color};

      + svg path {
        stroke-dashoffset: 0
      }
  }

`,u=Object(d.b)("input")`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    margin: 0;
    &:focus {
      outline: 0;
    }
`;var m=({toxicityScore:e})=>{let t,n;return e<.6&&(t="green",n="Great!"),e>=.6&&e<=.9&&(t="var(--m-danger-color)",n="You are OK but getting close"),e>.9&&(t="red",n="You are being toxic"),o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{color:t},o.a.createElement(u,{readOnly:!0,disabled:!0,checked:Boolean(e),type:"checkbox"}),o.a.createElement("label",null),o.a.createElement("svg",{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none"},o.a.createElement("path",{d:"M2 8.36364L6.23077 12L13 2"}))),e&&o.a.createElement("span",{style:{marginLeft:"0.5vw"}},n),o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{width:0,height:0}},o.a.createElement("defs",null,o.a.createElement("filter",{id:"goo"},o.a.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"4",result:"blur"}),o.a.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7",result:"goo"}),o.a.createElement("feBlend",{in:"SourceGraphic",in2:"goo"})))))},b=n(185),x=n(27),f=n(3);var g=(e,t,n)=>{var o,r;const i=Object(f.c)(e=>e.session.currentUser),l=null===(o=Object(f.c)(e=>e.topics.list))||void 0===o?void 0:o.find(t=>t.id===e),c=null===(r=Object(f.c)(e=>e.comments.list))||void 0===r?void 0:r.find(e=>{var t;return(null===(t=e.data)||void 0===t?void 0:t.id)===(null==n?void 0:n.rootParentCommentId)});return Object(a.useMemo)(()=>{const e="TOPIC_REPLY"!==(null==n?void 0:n.replyType)?((e,t)=>{const n=new Set,a=[e];for(;0!==a.length;){const e=a.shift();if(n.add(e.data.id),e.data.id===t)return e.data.content;e.children.forEach(e=>{n.has(e.data.id)||a.push(e)})}return""})(c,null==n?void 0:n.commentId):null==l?void 0:l.description;return{subtopicId:t,createdByIconSrc:(null==c?void 0:c.iconSrc)||(null==l?void 0:l.createdByIconSrc),username:null==i?void 0:i.username,createdBy:(null==c?void 0:c.createdBy)||(null==l?void 0:l.createdBy),time:(null==c?void 0:c.createdAt)||(null==l?void 0:l.createdAt),htmlContent:e,rootParentCommentId:(null==n?void 0:n.rootParentCommentId)||null,type:null==n?void 0:n.replyType}},[l,i,c,t,n])},h=n(55),v=n(20),w=n(51),E=n(59),k=n(28);const y=Object(d.b)(l.c)`
  margin-top: 0;
  border-radius: .5em;
  position: relative;

`,j=Object(d.b)("p")` 
  width: 90%;
  padding: .5em 0;
  margin-bottom: 2em;
  font-size: .85em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  color: black;
`,O=Object(d.b)("div")`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  section {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 30vw;
    position: absolute;
    bottom: 0;
      padding: .2em .5em;
    background: #e0e5ec;
    border-radius: .4em;
    box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001,
   inset 0px 0px 0px 0px #fff9,
   inset 0px 0px 0px 0px #0001,
   inset 0px 0px 0px 0px #fff9,
   inset 0px 0px 0px 0px #0001;
  }
`,S=Object(d.b)("div")`
  position: relative;
  h1 {
    width: 100%;
    margin: 0;
    text-align: center;
    padding-bottom: .5em;
    border-bottom: 1px solid black;
  }
 `,C=Object(d.b)("div")`
  flex-grow: 1;
  display: flex;
  align-items: center;
  > div {
    margin-left: 1vw;
  }

  p {
    margin: 0 1em;
    color: #979cb0;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: .1vw;  
  }

`,I=new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g);t.default=({modalProps:e})=>{const t=Object(a.useRef)(null),[n,d]=Object(a.useState)(""),[p,u]=Object(a.useState)(""),[f,B]=Object(a.useState)(null),{pathname:T}=Object(r.f)(),$=T.match(I)[0],P=T.match(I)[1],z=g($,P,e),F=((e,t,n,o,r)=>{const{createComment:i}=Object(v.a)(w.a);return Object(a.useCallback)((a,{setSubmitting:l,resetForm:c})=>{var s,d;h.c.promise(Promise.all([(s=1500,new Promise((e,t)=>{!0===d&&t(),setTimeout(e.bind(null,d),s)})),Object(E.a)({content:n})]),{pending:"Analyzing Comment...",success:"Thanks For Being Civil!",error:"Promise rejected 🤯"}).then(()=>{i({...a,content:t,memeFlag:!1,parentId:(null==o?void 0:o.commentId)||null,subtopicId:r,createdBy:e.username,rootId:e.rootParentCommentId,rawText:n})}),l(!1),c({})},[e,t,n,o,r])})(z,n,p,e,P);return Object(x.a)(t,z.htmlContent),o.a.createElement(S,null,o.a.createElement(l.d,{initialValues:{content:"",positive:"",negative:"",neutral:""},validate:()=>{const e={};return 0===n.length&&(e.content="Write Something"),e},onSubmit:F},({isSubmitting:e})=>o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a.Header,{closeButton:!0},o.a.createElement(i.a.Title,null,"Write Your Reply")),o.a.createElement(y,null,o.a.createElement(i.a.Body,null,o.a.createElement(s.a,{iconSrc:z.createdByIconSrc,username:z.createdBy,time:Object(k.a)(z.time)}),o.a.createElement(j,null,o.a.createElement("span",{ref:t})),o.a.createElement(O,null,o.a.createElement(b.a,{content:n,setContent:d,setRawText:u,setToxicityScore:B}))),o.a.createElement(i.a.Footer,null,o.a.createElement(C,null,o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(c.a,{type:"button",onClick:()=>Object(E.a)({content:p}).then(e=>{B(e.data.SEVERE_TOXICITY.toFixed(2))})},"Check Toxicity Score"),o.a.createElement(m,{toxicityScore:f})),o.a.createElement("p",null,f&&"Your toxicity score is "+f))),o.a.createElement(c.a,{type:"submit",disabled:e},"Submit"))))))}}}]);