import{e as B,r as n,f as M,h as O,j as a,P as j,i as E,k as A,l as P}from"./index-BXjIrL1U.js";import{u as H}from"./index-D3oRHOE7.js";import{u as K}from"./index-B75h8jgb.js";import{C as L}from"./check-nXb_93g6.js";var v="Checkbox",[q,V]=B(v),[z,T]=q(v),R=n.forwardRef((e,c)=>{const{__scopeCheckbox:t,name:d,checked:p,defaultChecked:s,required:h,disabled:u,value:l="on",onCheckedChange:m,...y}=e,[r,k]=n.useState(null),_=M(c,o=>k(o)),x=n.useRef(!1),g=r?!!r.closest("form"):!0,[f=!1,C]=O({prop:p,defaultProp:s,onChange:m}),D=n.useRef(f);return n.useEffect(()=>{const o=r==null?void 0:r.form;if(o){const b=()=>C(D.current);return o.addEventListener("reset",b),()=>o.removeEventListener("reset",b)}},[r,C]),a.jsxs(z,{scope:t,state:f,disabled:u,children:[a.jsx(j.button,{type:"button",role:"checkbox","aria-checked":i(f)?"mixed":f,"aria-required":h,"data-state":S(f),"data-disabled":u?"":void 0,disabled:u,value:l,...y,ref:_,onKeyDown:E(e.onKeyDown,o=>{o.key==="Enter"&&o.preventDefault()}),onClick:E(e.onClick,o=>{C(b=>i(b)?!0:!b),g&&(x.current=o.isPropagationStopped(),x.current||o.stopPropagation())})}),g&&a.jsx(X,{control:r,bubbles:!x.current,name:d,value:l,checked:f,required:h,disabled:u,style:{transform:"translateX(-100%)"}})]})});R.displayName=v;var w="CheckboxIndicator",N=n.forwardRef((e,c)=>{const{__scopeCheckbox:t,forceMount:d,...p}=e,s=T(w,t);return a.jsx(A,{present:d||i(s.state)||s.state===!0,children:a.jsx(j.span,{"data-state":S(s.state),"data-disabled":s.disabled?"":void 0,...p,ref:c,style:{pointerEvents:"none",...e.style}})})});N.displayName=w;var X=e=>{const{control:c,checked:t,bubbles:d=!0,...p}=e,s=n.useRef(null),h=H(t),u=K(c);return n.useEffect(()=>{const l=s.current,m=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(m,"checked").set;if(h!==t&&r){const k=new Event("click",{bubbles:d});l.indeterminate=i(t),r.call(l,i(t)?!1:t),l.dispatchEvent(k)}},[h,t,d]),a.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:i(t)?!1:t,...p,tabIndex:-1,ref:s,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function i(e){return e==="indeterminate"}function S(e){return i(e)?"indeterminate":e?"checked":"unchecked"}var I=R,F=N;const $=n.forwardRef(({className:e,...c},t)=>a.jsx(I,{ref:t,className:P("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...c,children:a.jsx(F,{className:P("flex items-center justify-center text-current"),children:a.jsx(L,{className:"h-4 w-4"})})}));$.displayName=I.displayName;export{$ as C};
