import{e as T,r as s,f as _,h as B,j as r,P as g,i as H,l as S}from"./index-BXjIrL1U.js";import{u as I}from"./index-D3oRHOE7.js";import{u as M}from"./index-B75h8jgb.js";var k="Switch",[q,X]=T(k),[z,A]=q(k),x=s.forwardRef((e,o)=>{const{__scopeSwitch:t,name:n,checked:a,defaultChecked:l,required:d,disabled:c,value:u="on",onCheckedChange:f,...v}=e,[i,b]=s.useState(null),E=_(o,h=>b(h)),m=s.useRef(!1),w=i?!!i.closest("form"):!0,[p=!1,R]=B({prop:a,defaultProp:l,onChange:f});return r.jsxs(z,{scope:t,checked:p,disabled:c,children:[r.jsx(g.button,{type:"button",role:"switch","aria-checked":p,"aria-required":d,"data-state":P(p),"data-disabled":c?"":void 0,disabled:c,value:u,...v,ref:E,onClick:H(e.onClick,h=>{R(N=>!N),w&&(m.current=h.isPropagationStopped(),m.current||h.stopPropagation())})}),w&&r.jsx(O,{control:i,bubbles:!m.current,name:n,value:u,checked:p,required:d,disabled:c,style:{transform:"translateX(-100%)"}})]})});x.displayName=k;var C="SwitchThumb",y=s.forwardRef((e,o)=>{const{__scopeSwitch:t,...n}=e,a=A(C,t);return r.jsx(g.span,{"data-state":P(a.checked),"data-disabled":a.disabled?"":void 0,...n,ref:o})});y.displayName=C;var O=e=>{const{control:o,checked:t,bubbles:n=!0,...a}=e,l=s.useRef(null),d=I(t),c=M(o);return s.useEffect(()=>{const u=l.current,f=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(f,"checked").set;if(d!==t&&i){const b=new Event("click",{bubbles:n});i.call(u,t),u.dispatchEvent(b)}},[d,t,n]),r.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:t,...a,tabIndex:-1,ref:l,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function P(e){return e?"checked":"unchecked"}var j=x,D=y;const F=s.forwardRef(({className:e,...o},t)=>r.jsx(j,{className:S("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...o,ref:t,children:r.jsx(D,{className:S("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));F.displayName=j.displayName;export{F as S};