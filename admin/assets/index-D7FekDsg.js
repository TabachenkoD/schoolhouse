import{r as a}from"./index-DfPXLp6k.js";async function p(o,e,n={}){const i="https://schoolhouse.hnhexpresssolutions.com",s={...n.headers,"Content-Type":"application/json"};e&&(s["X-API-KEY"]=e);const l={method:n.method||"GET",headers:s,...n};return fetch(`${i}${o}`,l).then(async r=>{if(!r.ok){const t=await r.json();throw console.log(t,"err res"),t.Message?new Error(t.Message):new Error(t)}const c=r.headers.get("content-type");if(c&&c.includes("application/json")){const t=await r.json();return console.log(t),t}else return null})}var h=a.createContext(void 0);function f(o){const e=a.useContext(h);return o||e||"ltr"}function m(o,[e,n]){return Math.min(n,Math.max(e,o))}export{p as a,m as c,f as u};