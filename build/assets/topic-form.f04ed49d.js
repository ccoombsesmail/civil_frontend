(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{175:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(1);const l=Object(r.b)("div")`
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

`;t.a=({width:e,children:t})=>o.a.createElement(l,{width:e},o.a.createElement("span",null,t))},184:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(49),l=e=>e?`${e[0].toUpperCase()}${e.slice(1)}`:"",i=a(1);const c=Object(i.b)("div")`
  position: relative;
  margin: 1.3em;
  font-family: 'Ubuntu', sans-serif;
`,s=Object(i.b)("label")`
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

`,d=Object(i.b)("input")`
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
`;var m=a(175);t.a=({width:e,field:t,form:a,placeholder:n,onBlur:i,...u})=>{const b=a.getFieldMeta(t.name),p=b.error&&b.touched,h="function"==typeof i?i:()=>{};return o.a.createElement(c,null,o.a.createElement(d,{width:e,...t,type:"text",id:t.name,placeholder:n||"Enter A "+l(t.name),...u,showError:p,onBlur:h}),o.a.createElement(s,{htmlFor:t.name},l(t.name)),o.a.createElement(r.a,{width:e,name:t.name,component:m.a}))}},185:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(186),l=a.n(r);const i=a(1).b.div`
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

`;t.a=({content:e,setContent:t,setRawText:a,setToxicityScore:r})=>{const c=Object(n.useCallback)((e,n,o,l)=>{t(e),a&&a(l.getText()),r&&r(null)},[]);return o.a.createElement(i,{className:"text-editor"},o.a.createElement(l.a,{value:e,onChange:c,modules:{toolbar:[[{font:[]},{header:[]}],["bold","italic","underline","strike","blockquote","code-block"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],[{align:[]}],["link","image"],["clean"]]},formats:["font","header","bold","italic","underline","strike","blockquote","code-block","color","background","list","indent","align","link","image","clean","emoji"],placeholder:"Say something..."}))}},306:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(45),l=a(49),i=a(40),c=a(115),s=a(20),d=a(3),m=a(26);const u=new RegExp(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/gm),b=new RegExp(/http(?:s)?:\/\/(?:www)?twitter\.com\/([a-zA-Z0-9_]+)/gm);var p=()=>{const{createTopic:e,uploadTopicMedia:t}=Object(s.a)(m.a),a=Object(d.c)(e=>e.session.currentUser);return Object(n.useCallback)((n,{setSubmitting:o,resetForm:r},l)=>{const i=Object.entries(n).map(([e,t])=>e.includes("Evidence")?t:null).filter(Boolean),c=(e=>{const t=-1===e.search(u)?null:"ytUrl",a=-1===e.search(b)?null:"tweetUrl";return t||a})(n.contentUrl),s={...n,description:l,createdBy:a.username,evidenceLinks:i,[c]:n.contentUrl};if(n.file instanceof File){const[a,o]=n.file.type.split("/"),r=new FormData;r.append("image",n.file),t(r,a,o).then(t=>e({...s,...t.data}))}else e(s);o(!1),r({})},[])},h=e=>e+" is required",f=e=>`Must be at least ${e} characters`;const v=new Map([["REQUIRED",e=>e.value?null:h(e.field)],["MIN_LENGTH",e=>e.value&&e.value.length<e.errorValue?f(e.errorValue):null]]);var E=e=>Object(n.useCallback)(t=>{const a=Object.entries(e).reduce((e,[a,n])=>(e[a]=((e,t,a)=>{let n=null;return Object.entries(t).forEach(([t,o])=>{const r=v.get(t)({field:e,value:a,errorValue:o});r&&(n=r)}),n})(a,n,t[a]),e),{});return Object.fromEntries(Object.entries(a).filter(([,e])=>null!=e))},[]),g=a(11),w=a(10),y=a(184),x=a(1);const j=Object(x.b)("label")` 
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 10%;
  img {
    width: 100%;
    height: auto;
  }
`,k=Object(x.b)("input")` 
  position: absolute; 
  left: -99999rem;
`;var O=({field:e,onChange:t,icon:a,fileType:n,disabled:r})=>o.a.createElement(j,null,a,o.a.createElement(k,{"data-filetype":n,type:"file",...e,id:e.name,onChange:t,disabled:r}));const T=Object(x.b)("div")`
  position: relative;
  margin: 0 1.3em;
  font-family: 'Ubuntu', sans-serif;
`,C=Object(x.b)("label")`
  display: flex;
  justify-content: flex-start;
  color: var(--m-trim-color);
  font-size: .5em;
  font-weight: bold;

`,S=Object(x.b)("select")`
  display: block;
  margin: 0;
  padding: .5em;
  color: black;
  width: ${e=>e.width||"30%"};
  height: 3.5em;
  font-size: .8em;
  font-weight: bold;
  line-height: var(--inputLineHeight);
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
    box-shadow:  5px 5px 8px #ffffff,
             -5px -5px 8px #ffffff;
  }

  :not(:placeholder-shown) + ${C},
  :focus:not(:placeholder-shown) + ${C} {
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

  option {
    color: var(--m-trim-color);
    font-size: .8em;
    cursor: pointer;
  }
}
`;var D=a(175);var F=({width:e,field:t,form:a,placeholder:r,setFieldValue:c,setFieldTouched:s,...m})=>{const[u,b]=Object(n.useState)(!1),[p,h]=Object(n.useState)(""),f=a.getFieldMeta(t.name),v=f.error&&f.touched,E=Object(d.c)(e=>e.enums.topicCategories),g=Object(n.useCallback)((e,a)=>{a(t.name,e.target.value),h(e.target.value)},[]);return o.a.createElement(T,null,o.a.createElement(i.a,{in:u},o.a.createElement("div",null,o.a.createElement(C,{htmlFor:t.name},"Select A Category"))),o.a.createElement(S,{...m,width:e,...t,id:t.name,showError:v,value:p,onChange:e=>g(e,c),onFocus:()=>b(!0),onBlur:()=>b(!1)},o.a.createElement("option",{value:""},"Select A Category"),null==E?void 0:E.map(e=>o.a.createElement("option",{key:e,value:e},e))),o.a.createElement(l.a,{width:e,name:t.name,component:D.a}))},$=a(185),U=a(44),z=a(114),L=a(156),A=a(5),B=a.n(A),R=a(68),H=a(8),I=a(2);const M=n.forwardRef(({as:e,bsPrefix:t,variant:a,size:n,active:o,className:r,...l},i)=>{const c=Object(H.a)(t,"btn"),[s,{tagName:d}]=Object(R.b)({tagName:e,...l}),m=d;return Object(I.jsx)(m,{...l,...s,ref:i,className:B()(r,c,o&&"active",a&&`${c}-${a}`,n&&`${c}-${n}`,l.href&&l.disabled&&"disabled")})});M.displayName="Button",M.defaultProps={variant:"primary",active:!1,disabled:!1};var N=M;const P=Object(x.b)(N)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .2vw;
  background: none;
  border: none;
`,V=Object(x.b)("div")`
  font-size: .6vw;

`;var q=({tooltipText:e,tooltipHeader:t})=>{const a=o.a.createElement(z.a,{id:"popover"},o.a.createElement(z.a.Header,{as:"h3"},t),o.a.createElement(z.a.Body,null,o.a.createElement(V,null,e)));return o.a.createElement(L.a,{placement:"top",delay:{show:250,hide:250},overlay:a},o.a.createElement(P,{variant:"light"},o.a.createElement(w.f,{size:22})))};const Y=Object(x.b)("div")` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,Q=Object(x.b)(l.c)`
  /* display: flex;
  align-items: flex-start; */
  margin-top: 1em;
   h2 {
    font-size: 1em;
    margin: 0 1em;
  }
 
`,G=Object(x.b)("span")`
    transition: transform .5s ease-in-out;
    transform: ${e=>`rotate(${e.rotate}deg)`};
    cursor: pointer;
`,_=Object(x.b)("div")`
  display: flex;
  width: 100%;
`,J=Object(x.b)("div")`
  display: flex;
  display: inline-block;
  flex-direction: column;
  width: 50%;
  border-right: 1px solid black;
`,Z=Object(x.b)("div")`
  display: flex;
  display: inline-block;
  flex-direction: column;
  width: 50%;
`,K=(Object(x.b)("section")`

`,Object(x.b)("div")`
  display: flex;
  flex-direction: column;
`,Object(x.b)("div")`
  overflow-y: scroll;
  height: 90vh;
  background: white;
  
  border-radius: 1em;
  /* box-shadow: var(--m-primary-box-shadow); */
  box-shadow:  5px 5px 5px -3px #000000;

  h1 {
    width: 100%;
    margin: 0;
    text-align: center;
    padding-bottom: .5em;
    border-bottom: 1px solid black;
  }
 `),W=Object(x.b)("hr")` 
  width: 90%;
  margin: 2em 1.3em;
  background-color: rgb(48,48,50);
  height: .5px;
  border: none;
`,X=Object(x.b)("div")` 
  margin-left: 1.3em;
  padding: .5em;
  border-radius: .5em;
  display: flex;
  box-shadow:  5px 5px 5px -3px #AAAAAA;
  background: #E5E5E5;

;

`,ee={title:"",description:"",contentUrl:"",summary:"",category:"",tweetUrl:"",ytUrl:null};var te=a(42),ae=a(105);const ne={title:{REQUIRED:!0},summary:{REQUIRED:!0,MIN_LENGTH:10},category:{REQUIRED:!0}};t.default=()=>{const[e,t]=Object(n.useState)(!1),[a,d]=Object(n.useState)(null),[m,u]=Object(n.useState)(null),[b,h]=Object(n.useState)(0),[f,v]=Object(n.useState)(""),x=E(ne),j=Object(n.useCallback)((e,t,a)=>{t(e.target.dataset.filetype,e.currentTarget.files[0]);const n=new FileReader,o=e.target.files[0];n.onloadend=()=>{a(n.result)},n.readAsDataURL(o)},[]),k=p(),{metaData:T,getLinkMetaDataOnBlur:C}=(()=>{const[e,t]=Object(n.useState)(null);return{metaData:e,getLinkMetaDataOnBlur:Object(n.useCallback)(e=>{Object(te.c)(e.currentTarget.value).then(({data:e})=>{t(e)})},[])}})(),{closeModal:S}=Object(s.a)(g.b);return o.a.createElement(K,null,o.a.createElement(l.d,{initialValues:ee,validate:x,onSubmit:(e,t)=>k(e,t,f)},({isSubmitting:n,setFieldValue:s,setFieldTouched:p})=>o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a.Header,{closeButton:!0},o.a.createElement(r.a.Title,null,"Create Topic")),o.a.createElement(Q,null,o.a.createElement(r.a.Body,null,o.a.createElement(_,null,o.a.createElement(J,null,o.a.createElement(Y,null,o.a.createElement("h2",null," Topic Description "),o.a.createElement(q,{tooltipHeader:"Topic Description",tooltipText:"Provide information about the topic you would like to discuss"})),o.a.createElement(l.b,{type:"text",name:"title",component:y.a,width:"100%",placeholder:"Enter A Topic Title"}),o.a.createElement(l.b,{type:"text",name:"summary",component:y.a,width:"100%",placeholder:"Give A Short Opinion Or Point"}),o.a.createElement(l.b,{type:"text",name:"category",component:F,setFieldValue:s,setFieldTouched:p,width:"100%"})),o.a.createElement(Z,null,o.a.createElement(Y,null,o.a.createElement("h2",null," Link to what you want to discuss here... "),o.a.createElement(q,{tooltipHeader:"Discussed Content",tooltipText:"Add a link to the external content you would like to discuss ( e.g a YouTube video, Tweet, publication, or anything else)"})),o.a.createElement(l.b,{type:"url",name:"contentUrl",placeholder:"Link To Content",component:y.a,width:"100%",onBlur:C}),o.a.createElement(W,null),o.a.createElement(Y,null,o.a.createElement("h2",null," Add your own media content "),o.a.createElement(q,{tooltipHeader:"User Provided Content",tooltipText:"This could be an image, graphic, or video pertaining to the topic you would like to discuss"})),o.a.createElement(X,null,o.a.createElement(l.b,{fileType:"file",name:"topicImage",disabled:Boolean(m),file:a,component:O,onChange:e=>j(e,s,d),icon:o.a.createElement(w.d,null)}),o.a.createElement(l.b,{fileType:"file",name:"topicVideo",disabled:Boolean(a),file:m,component:O,onChange:e=>j(e,s,u),icon:o.a.createElement(w.d,null)})))),o.a.createElement(W,null),T&&o.a.createElement(ae.a,{metaData:T}),a&&o.a.createElement("img",{src:a,alt:""}),m&&o.a.createElement("video",{controls:!0},o.a.createElement("track",{default:!0,kind:"captions",srcLang:"en"}),o.a.createElement("source",{src:m,type:"video/mp4"}),"Your browser does not support the video tag."),o.a.createElement($.a,{content:f,setContent:v}),o.a.createElement(G,{rotate:b,onClick:()=>{t(!e),h(b+(e?-180:180))}},o.a.createElement(w.d,null)),o.a.createElement(i.a,{in:!e},o.a.createElement("div",null,"Enter Supplemental Information")),o.a.createElement(_,null,o.a.createElement(c.a,{in:e},o.a.createElement("div",{style:{whiteSpace:"nowrap",width:"100%"}},o.a.createElement(Y,null,o.a.createElement("h2",null," Enter Links To Supplemental Evidence... "),o.a.createElement(q,{tooltipText:"Provide links to additional reading or evidence etc...",tooltipHeader:"Supplemental Information"})),o.a.createElement(l.b,{type:"url",name:"Evidence Link 1",component:y.a,width:"100%"}),o.a.createElement(l.b,{type:"url",name:"Evidence Link 2",component:y.a,width:"100%"}),o.a.createElement(l.b,{type:"url",name:"Evidence Link 3",component:y.a,width:"100%"}))))),o.a.createElement(r.a.Footer,null,o.a.createElement(U.a,{type:"submit",disabled:n,onClick:S},"Cancel"),o.a.createElement(U.a,{type:"submit",disabled:n},"Submit"))))))}}}]);