import{u as f,a as v,r,j as e,B as n}from"./index-BXjIrL1U.js";import{a as i}from"./apiClient-D5JhjSvK.js";import"./scroll-area-C9u3ILJG.js";import{L as j}from"./label-jx94DjbD.js";import"./tabs-BMRpIXxN.js";import{P as y,a as S,f as m,b as C,C as D}from"./popover-CydNnV0A.js";import"./Combination-7JF_Quob.js";import"./index-B75h8jgb.js";const T=()=>{const{isAuthenticated:d}=f(),{toast:l}=v(),[p,u]=r.useState([]),[t,o]=r.useState(null);r.useState(""),r.useState(null),r.useEffect(()=>{c()},[]);const c=()=>{d&&i("/admin/closed-dates",d).then(s=>{u(s)}).catch(s=>{u(["No records found"])})},h=()=>{if(!t)return;const s=m(t,"MM-dd-yyyy");i(`/admin/events/${s}/closed`,d,{method:"POST"}).then(a=>{l({variant:"success",description:"Closed date saved successfully!"}),c(),o(null)}).catch(a=>{l({variant:"destructive",description:`Error: ${a}`})})},x=()=>{if(!t)return;const s=m(t,"MM-dd-yyyy");i(`/admin/events/${s}/open`,d,{method:"POST"}).then(a=>{l({variant:"success",description:"Open date deleted successfully!"}),c(),o(null)}).catch(a=>{l({variant:"destructive",description:`Error: ${a}`})})};return e.jsxs("div",{className:"overflow-hidden flex flex-col gap-y-10 h-full w-full p-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h3",{className:"text-xl",children:"Seved closed dates:"}),e.jsx("div",{className:"flex gap-3",children:p.map((s,a)=>e.jsxs("span",{className:"text-xl",children:[s,","]},a))})]}),e.jsxs("div",{className:"flex gap-5 items-center w-[550px]",children:[e.jsx(j,{htmlFor:"closed",className:"w-full",children:"Select Date"}),e.jsxs(y,{children:[e.jsx(S,{asChild:!0,children:e.jsx(n,{variant:"outline",children:t?m(t,"MM-dd-yyyy"):"Pick a date"})}),e.jsx(C,{className:"w-auto p-0",children:e.jsx(D,{mode:"single",selected:t,onSelect:o,className:"rounded-md border"})})]}),e.jsx(n,{size:"sm",onClick:h,children:"Save closed date"}),e.jsx(n,{size:"sm",variant:"red",onClick:x,children:"Delete closed date"})]})]})};export{T as default};
