import{r as n,l as N,c as A,a as B,b as H,j as u,P as x,d as T,f as g}from"./index-DK2cnkCl.js";function _(e){const[t,r]=n.useState(void 0);return N(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const c=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const d=o[0];let i,s;if("borderBoxSize"in d){const a=d.borderBoxSize,l=Array.isArray(a)?a[0]:a;i=l.inlineSize,s=l.blockSize}else i=e.offsetWidth,s=e.offsetHeight;r({width:i,height:s})});return c.observe(e,{box:"border-box"}),()=>c.unobserve(e)}else r(void 0)},[e]),t}function M(e){const t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var S="Switch",[I,U]=A(S),[O,W]=I(S),m=n.forwardRef((e,t)=>{const{__scopeSwitch:r,name:c,checked:o,defaultChecked:d,required:i,disabled:s,value:a="on",onCheckedChange:l,...k}=e,[f,b]=n.useState(null),E=B(t,p=>b(p)),v=n.useRef(!1),w=f?!!f.closest("form"):!0,[h=!1,R]=H({prop:o,defaultProp:d,onChange:l});return u.jsxs(O,{scope:r,checked:h,disabled:s,children:[u.jsx(x.button,{type:"button",role:"switch","aria-checked":h,"aria-required":i,"data-state":P(h),"data-disabled":s?"":void 0,disabled:s,value:a,...k,ref:E,onClick:T(e.onClick,p=>{R(j=>!j),w&&(v.current=p.isPropagationStopped(),v.current||p.stopPropagation())})}),w&&u.jsx(q,{control:f,bubbles:!v.current,name:c,value:a,checked:h,required:i,disabled:s,style:{transform:"translateX(-100%)"}})]})});m.displayName=S;var y="SwitchThumb",C=n.forwardRef((e,t)=>{const{__scopeSwitch:r,...c}=e,o=W(y,r);return u.jsx(x.span,{"data-state":P(o.checked),"data-disabled":o.disabled?"":void 0,...c,ref:t})});C.displayName=y;var q=e=>{const{control:t,checked:r,bubbles:c=!0,...o}=e,d=n.useRef(null),i=M(r),s=_(t);return n.useEffect(()=>{const a=d.current,l=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(l,"checked").set;if(i!==r&&f){const b=new Event("click",{bubbles:c});f.call(a,r),a.dispatchEvent(b)}},[i,r,c]),u.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...o,tabIndex:-1,ref:d,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function P(e){return e?"checked":"unchecked"}var z=m,L=C;const D=n.forwardRef(({className:e,...t},r)=>u.jsx(z,{className:g("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...t,ref:r,children:u.jsx(L,{className:g("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));D.displayName=z.displayName;export{D as S,_ as a,M as u};
