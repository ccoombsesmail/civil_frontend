const n=o=>{let t,e="m";const r=Date.now(),a=new Date(o);return t=Math.floor((r-a)/6e4),t>60&&(t=Math.floor(t/60),e="h"),t>60&&(t=Math.floor(t/24),e="d"),`${t}${e}`};export{n as g};
