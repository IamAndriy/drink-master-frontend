import{r as e,j as s}from"./index-8d8c1de9.js";import{N as x,D as h,P as j,o as k}from"./Paginator-2f7ecfe7.js";const f=({drinks:a,emptyMessage:c})=>{const[o,D]=e.useState(a.length),[i,l]=e.useState([]),[r,u]=e.useState(1),[t]=e.useState(window.innerWidth>=1280?9:10);e.useEffect(()=>{const n=(r-1)*t,g=n+t,p=a.slice(n,g);l(p)},[r,t]);const m=({selected:n})=>{k(o,n,t,u)};return s.jsxs(s.Fragment,{children:[a.length===0?s.jsx(x,{text:c}):s.jsx(h,{location:"own",drinkItems:i}),s.jsx(j,{pageCount:Math.ceil(o/t),handlePageClick:m})]})};export{f as M};
