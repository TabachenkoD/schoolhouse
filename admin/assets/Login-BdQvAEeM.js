import{u as p,r as a,j as e,B as j}from"./index-CATiRmyn.js";import{C as f,a as w,b as C,c as N,d as v,L as n,I as o,e as y}from"./label-BvntCbO8.js";const L=()=>{const{login:c}=p(),[r,d]=a.useState(""),[l,m]=a.useState(""),[x,t]=a.useState(!1),[i,u]=a.useState(""),h=async s=>{s.preventDefault(),t(!0);try{await c(r,l),t(!1)}catch(g){u(g.message),t(!1)}};return e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("img",{src:"admin/logo.png",alt:"Logo",className:"mb-4"}),e.jsxs(f,{className:"w-full max-w-sm",children:[e.jsxs(w,{children:[e.jsx(C,{className:"text-2xl",children:"Login"}),e.jsx(N,{children:"Enter your email below to login to your account."})]}),e.jsxs(v,{className:"grid gap-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(n,{htmlFor:"email",children:"Email"}),e.jsx(o,{id:"email",type:"email",placeholder:"example@example.com",required:!0,value:r,onChange:s=>d(s.target.value)})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(n,{htmlFor:"password",children:"Password"}),e.jsx(o,{id:"password",type:"password",required:!0,value:l,onChange:s=>m(s.target.value)})]}),i&&e.jsx("p",{className:"text-red",children:i}),e.jsx(y,{className:"p-0",children:e.jsx(j,{className:"w-full",onClick:h,disabled:r.length===0||l.length===0||x,children:"Sign in"})})]})]})]})})};export{L as default};
