import{u as x,g as o,r as l,j as s,B as m}from"./index-DjclXjCC.js";import{a as j,S as p}from"./scroll-area-8p7Dl7xe.js";import{b as i,C as u,a as f,c as b,d as v}from"./card-D4tgQzaz.js";import{T as C,a as g,b as r,c}from"./tabs-BYHnFnNZ.js";const E="https://schoolhouse.hnhexpresssolutions.com/Content/Images/Exhibits/",L=()=>{const{isAuthenticated:a}=x(),{toast:n}=o(),[t,h]=l.useState([]);l.useEffect(()=>{d()},[]);const d=()=>{a&&j("/exhibits",a).then(e=>{h(e)}).catch(e=>{n({variant:"destructive",description:`${e}`})})};return s.jsx("div",{className:"overflow-hidden flex flex-row h-full w-full",children:s.jsxs(C,{defaultValue:"List",className:"w-full",children:[s.jsxs(g,{children:[s.jsx(r,{value:"List",children:"List"}),s.jsx(r,{value:"Create",children:"Create"})]}),s.jsxs(c,{value:"List",children:[s.jsx("div",{className:"p-4",children:s.jsx(i,{className:"mb-4",children:"Exhibits"})}),s.jsx(p,{className:"overflow-hidden flex-1 h-full w-full overflow-auto max-h-screen",children:s.jsx("div",{className:"flex flex-wrap gap-y-4 px-4 gap-x-4",children:t.length===0?s.jsx("p",{children:"No exhibits available"}):t.map(e=>s.jsxs(u,{className:"w-[420px]",children:[s.jsxs(f,{className:"flex-row justify-between items-top",children:[s.jsxs("div",{children:[s.jsx(i,{children:e.Title}),s.jsxs(b,{children:["Exhibit Id: ",e.ExhibitId]})]}),s.jsx(m,{style:{margin:0},variant:"orange",size:"sm",children:"Update"})]}),s.jsxs(v,{children:[s.jsx("img",{src:`${E}/${e.ExhibitImageName}`,alt:e.Title,style:{maxWidth:"370px"}}),s.jsxs("p",{children:[s.jsx("strong",{children:"Description:"})," ",e.Description]})]})]},e.ExhibitId))})})]}),s.jsx(c,{value:"Create",children:s.jsx("div",{className:"p-4",children:s.jsx(i,{className:"mb-4",children:"Create exhibit"})})})]})})};export{L as default};
