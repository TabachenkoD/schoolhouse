import{c as ce,r as a,a as le,b as ie,j as e,P as V,d as _,e as oe,f as L,g as W,B as N,u as de}from"./index-DPu2GB5o.js";import{a as U,S as ue}from"./scroll-area-Dqt0OvNV.js";import{L as p,I as H,b as Y,C as he,a as pe,c as xe,d as me}from"./label-Bz_draER.js";import{C as fe,T as ve,S as je,a as ge,b as ye,c as be,d as Ce}from"./textarea-CWOLddNQ.js";import{S as z}from"./switch--y5-4H15.js";import{P as q,a as M,b as I,f as w,C as K}from"./popover-BuwpXPb1.js";import{u as Ee}from"./index-C9cfdYd8.js";import{u as ke}from"./index-Ajvjsxf3.js";import"./Combination-Dk6KfFMq.js";var $="Checkbox",[Ne,He]=ce($),[Se,Re]=Ne($),X=a.forwardRef((t,x)=>{const{__scopeCheckbox:r,name:v,checked:o,defaultChecked:c,required:d,disabled:u,value:h="on",onCheckedChange:j,...n}=t,[l,b]=a.useState(null),y=le(x,i=>b(i)),C=a.useRef(!1),m=l?!!l.closest("form"):!0,[f=!1,E]=ie({prop:o,defaultProp:c,onChange:j}),S=a.useRef(f);return a.useEffect(()=>{const i=l==null?void 0:l.form;if(i){const g=()=>E(S.current);return i.addEventListener("reset",g),()=>i.removeEventListener("reset",g)}},[l,E]),e.jsxs(Se,{scope:r,state:f,disabled:u,children:[e.jsx(V.button,{type:"button",role:"checkbox","aria-checked":k(f)?"mixed":f,"aria-required":d,"data-state":Q(f),"data-disabled":u?"":void 0,disabled:u,value:h,...n,ref:y,onKeyDown:_(t.onKeyDown,i=>{i.key==="Enter"&&i.preventDefault()}),onClick:_(t.onClick,i=>{E(g=>k(g)?!0:!g),m&&(C.current=i.isPropagationStopped(),C.current||i.stopPropagation())})}),m&&e.jsx(we,{control:l,bubbles:!C.current,name:v,value:h,checked:f,required:d,disabled:u,style:{transform:"translateX(-100%)"}})]})});X.displayName=$;var J="CheckboxIndicator",G=a.forwardRef((t,x)=>{const{__scopeCheckbox:r,forceMount:v,...o}=t,c=Re(J,r);return e.jsx(oe,{present:v||k(c.state)||c.state===!0,children:e.jsx(V.span,{"data-state":Q(c.state),"data-disabled":c.disabled?"":void 0,...o,ref:x,style:{pointerEvents:"none",...t.style}})})});G.displayName=J;var we=t=>{const{control:x,checked:r,bubbles:v=!0,...o}=t,c=a.useRef(null),d=Ee(r),u=ke(x);return a.useEffect(()=>{const h=c.current,j=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(j,"checked").set;if(d!==r&&l){const b=new Event("click",{bubbles:v});h.indeterminate=k(r),l.call(h,k(r)?!1:r),h.dispatchEvent(b)}},[d,r,v]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:k(r)?!1:r,...o,tabIndex:-1,ref:c,style:{...t.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function k(t){return t==="indeterminate"}function Q(t){return k(t)?"indeterminate":t?"checked":"unchecked"}var Z=X,De=G;const ee=a.forwardRef(({className:t,...x},r)=>e.jsx(Z,{ref:r,className:L("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",t),...x,children:e.jsx(De,{className:L("flex items-center justify-center text-current"),children:e.jsx(fe,{className:"h-4 w-4"})})}));ee.displayName=Z.displayName;const Pe=[{label:"None",color:""},{label:"2 mo - 2 yrs",color:"#00BFFF"},{label:"15 mo - 2.5 yrs",color:"#3366CC"},{label:"18 mo & Up",color:"#800080"},{label:"2.5 yrs - 5 yrs",color:"#FFA500"},{label:"3 yrs & Up",color:"#FF69B4"},{label:"All Ages",color:"#32CD32"},{label:"Special Events",color:"#ba2c36"}],Fe=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ae=({selectedClassId:t,onClassUpdated:x,isAuthenticated:r,resetClassId:v})=>{const{toast:o}=W(),[c,d]=a.useState(""),[u,h]=a.useState(""),[j,n]=a.useState(""),[l,b]=a.useState(null),[y,C]=a.useState(null),[m,f]=a.useState([]),[E,S]=a.useState(!1),[i,g]=a.useState(""),[D,P]=a.useState(!0),[R,B]=a.useState(!1),se=c&&u&&j&&l&&y&&m&&i;a.useEffect(()=>{t?U(`/events/${t}/details`,r).then(s=>{d(s.Title),h(s.AgeRange),n(s.Description),b(new Date(s.EventStartDate)),C(new Date(s.EventEndDate)),f(s.EventRecurrency.split(", ")),S(s.RequirePayment),g(s.Capacity),P(s.IsEnabled),B(!0)}).catch(s=>{o({variant:"destructive",description:`${s}`})}):F()},[t]);const F=()=>{d(""),h(""),n(""),b(null),C(null),f([]),S(!1),g(""),P(!0),B(!1),v()},te=s=>{s.preventDefault();const A=l?w(l,"MM/dd/yyyy"):"",ae=y?w(y,"MM/dd/yyyy"):"",re=m.join(", "),O={Title:c,AgeRange:u,Category:"Class",Description:j,EventStartDate:A,EventEndDate:ae,EventRecurrency:re,Capacity:Number(i),RequirePayment:E,IsEnabled:D};R&&t&&(O.ClassEventId=t),U(R?"/events/update":"/events",r,{method:"POST",body:JSON.stringify(O)}).then(T=>{o({variant:"success",description:`${R?"Event updated successfully":`Event ${T} created successfully `}`}),F(),x()}).catch(T=>{o({variant:"destructive",description:`${T}`})})},ne=s=>{m.includes(s)?f(m.filter(A=>A!==s)):f([...m,s])};return e.jsxs("form",{onSubmit:te,className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(p,{htmlFor:"title",children:"Title"}),e.jsx(H,{id:"title",value:c,onChange:s=>d(s.target.value),required:!0})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(p,{htmlFor:"description",children:"Description"}),e.jsx(ve,{id:"description",value:j,onChange:s=>n(s.target.value),required:!0})]}),e.jsxs("div",{className:"flex gap-x-4",children:[e.jsxs("div",{className:"flex flex-col gap-2 w-1/3",children:[e.jsx(p,{children:"Event Recurrency"}),e.jsxs(q,{children:[e.jsx(M,{asChild:!0,children:e.jsx(N,{variant:"outline",className:"overflow-hidden text-ellipsis whitespace-nowrap max-w-full",children:m.length>0?m.join(", "):"Select days of the week"})}),e.jsx(I,{className:"p-2",children:e.jsx("div",{className:"grid gap-1",children:Fe.map(s=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(ee,{id:`day-${s}`,checked:m.includes(s),onCheckedChange:()=>ne(s),className:"data-[state=checked]:bg-dark-blue "}),e.jsx(p,{htmlFor:`day-${s}`,children:s})]},s))})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2 w-1/3",children:[e.jsx(p,{children:"Event Start Date"}),e.jsxs(q,{className:"p-0",children:[e.jsx(M,{asChild:!0,children:e.jsx(N,{variant:"outline",children:l?w(l,"MM/dd/yyyy"):"Pick a date"})}),e.jsx(I,{className:"p-0",children:e.jsx(K,{mode:"single",selected:l,onSelect:b,className:"rounded-md border"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2 w-1/3",children:[e.jsx(p,{children:"Event End Date"}),e.jsxs(q,{className:"p-0",children:[e.jsx(M,{asChild:!0,children:e.jsx(N,{variant:"outline",children:y?w(y,"MM/dd/yyyy"):"Pick a date"})}),e.jsx(I,{className:"p-0",children:e.jsx(K,{mode:"single",selected:y,onSelect:C,className:"rounded-md border"})})]})]})]}),e.jsxs("div",{className:"flex gap-x-4",children:[e.jsxs("div",{className:"w-2/4",children:[e.jsx(p,{htmlFor:"AgeRange",className:"mb-2",children:"Age Range"}),e.jsxs(je,{value:u,onValueChange:h,children:[e.jsx(ge,{id:"AgeRange",children:e.jsx(ye,{placeholder:"Select Age Range"})}),e.jsx(be,{children:Pe.map(s=>e.jsx(Ce,{value:s.label,children:e.jsxs("div",{className:"flex items-center gap-3 pl-3",children:[e.jsx("span",{className:"block w-3.5 h-3.5 rounded",style:{backgroundColor:s.color}}),s.label]})},s.label))})]})]}),e.jsxs("div",{className:"w-2/4",children:[e.jsx(p,{htmlFor:"capacity",children:"Capacity"}),e.jsx(H,{id:"capacity",value:i,type:"number",min:"0",onChange:s=>g(s.target.value),required:!0})]})]}),e.jsxs("div",{className:"flex gap-7",children:[e.jsxs("div",{className:"flex justify-center items-center gap-x-2",children:[e.jsx(p,{htmlFor:"require-payment",children:"Require Payment"}),e.jsx(z,{id:"require-payment",checked:E,onCheckedChange:S,className:"data-[state=checked]:bg-dark-blue"}),e.jsx(p,{htmlFor:"require-payment",children:E?"Yes":"No"})]}),e.jsxs("div",{className:"flex justify-center items-center gap-x-2",children:[e.jsx(p,{htmlFor:"is-enabled",children:"Is Enabled"}),e.jsx(z,{id:"is-enabled",checked:D,onCheckedChange:P,className:"data-[state=checked]:bg-dark-blue"}),e.jsx(p,{htmlFor:"is-enabled",children:D?"Yes":"No"})]})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(N,{type:"reset",variant:"secondary",onClick:F,children:"Reset"}),e.jsx(N,{type:"submit",disabled:!se,children:R?"Update Event":"Create Event"})]})]})},Ye=()=>{const{isAuthenticated:t}=de(),{toast:x}=W(),[r,v]=a.useState([]),[o,c]=a.useState(null);a.useEffect(()=>{d()},[]);const d=()=>{t&&U("/events",t).then(n=>{v(n)}).catch(n=>{x({variant:"destructive",description:`${n}`})})},u=n=>{c(n)},h=()=>{d(),c(null)},j=()=>c(null);return e.jsxs("div",{className:"overflow-hidden flex flex-row h-full w-full",children:[e.jsxs("div",{className:"w-[60%] p-4",children:[e.jsx(Y,{className:"mb-4",children:o?"Update class":"Create new class"}),e.jsx(Ae,{selectedClassId:o,onClassUpdated:h,isAuthenticated:t,resetClassId:j})]}),e.jsx(ue,{className:"border-l overflow-hidden flex-1 h-full w-[40%] overflow-auto max-h-screen",children:e.jsx("div",{className:"p-4 space-y-4",children:r.length===0?e.jsx("p",{children:"No events available"}):r.map(n=>e.jsxs(he,{children:[e.jsxs(pe,{className:"flex-row justify-between items-top",children:[e.jsxs("div",{children:[e.jsx(Y,{children:n.Title}),e.jsxs(xe,{children:["Event Id: ",n.ClassEventId]})]}),e.jsx(N,{style:{margin:0},variant:"orange",size:"sm",onClick:()=>u(n.ClassEventId),children:"Update"})]}),e.jsxs(me,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Caterory:"})," ",n.Category]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Age Range:"})," ",n.AgeRange]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Start Date:"})," ",n.EventStartDate]}),e.jsxs("p",{children:[e.jsx("strong",{children:"End Date:"})," ",n.EventEndDate]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Recurrency:"})," ",n.EventRecurrency]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Description:"})," ",n.Description]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Capacity:"})," ",n.Capacity]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Payment Required:"})," ",n.RequirePayment?"Yes":"No"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Enabled:"})," ",n.IsEnabled?"Yes":"No"]})]})]},n.ClassEventId))})})]})};export{Ye as default};
