import{j as e,F,B as r,a,L as w,d as C,b as S,u as W,N as v}from"./index-26b06c8c.js";import{P as c,u as p,t as x,W as m,I as z}from"./weatherServices-2cdce398.js";import{T as n,i as u,u as h,a as L,b as I,c as $,d as b,e as _,W as A,C as H}from"./WeatherInfo-5e0b91a4.js";const j=()=>e(F,{children:[...new Array(8)].map((s,i)=>e(c,{sx:{width:"100px",height:"105px",background:"transparent",textAlign:"center",p:"10px"}},i))});function k({lat:s,lon:i,timezone:l}){const{data:o,isRefetching:d}=p("hourlyForecast",()=>m.getHourlyForecast({lat:s,lon:i,units:"metric"}));return e(r,{display:"flex",gap:"10px",width:"320px",flexWrap:"wrap",justifyContent:{sm:"flex-end",xs:"flex-start"},children:d||o==null?e(j,{}):o.map(t=>a(c,{sx:{maxWidth:"100px",width:"100%",height:"105px",background:"transparent",textAlign:"center",p:"10px"},children:[e(n,{children:`${x(t.dt,l,"h:mm a")}`}),a(r,{display:"flex",alignItems:"center",children:[e("img",{src:u(t.icon),alt:"",width:40}),e(n,{children:`${t.temp.toFixed()}°C`})]}),e(n,{fontSize:14,children:t.details})]},t.dt))})}const T=({pathname:s,coord:i})=>{const l=h(y=>L(y,i.lat,i.lon)),o=h(I),d=$(),{data:t,isRefetching:f}=p(["city",s],()=>m.getWeather({units:"metric",...i})),g=()=>{if(l){d(C(i));return}d(S(i))};return f||t==null?e(r,{height:"95vh",children:e(w,{})}):a(c,{sx:{marginTop:"24px",p:"20px",display:"flex",width:"100%",alignItems:"flex-start",flexWrap:"wrap",justifyContent:"space-between",gap:"25px",minHeight:"375px"},elevation:2,children:[a(r,{children:[a(r,{display:"flex",alignItems:"start",children:[a(r,{children:[e("img",{src:u(t.icon),alt:"",width:115}),a(r,{display:"flex",borderBottom:"1px solid #D3D3D3",children:[a(n,{fontSize:"24px",maxWidth:"140px",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",textTransform:"capitalize",marginRight:1,children:[t.name,","]}),e(n,{fontSize:"24px",children:t.country})]}),e(n,{fontSize:"48px",children:`${t.temp.toFixed()}°C`}),a(r,{display:"flex",columnGap:"5px",color:"white",children:[e(n,{children:`High: ${t.temp_max.toFixed()}°C`}),"|",e(n,{children:`Low: ${t.temp_min.toFixed()}°C`})]})]}),e(z,{onClick:g,disabled:o&&!l,children:l?e(b,{}):e(_,{})})]}),e(A,{mt:2,humidity:t.humidity,speed:t.speed,feels_like:t.feels_like})]}),e(r,{order:{md:0,xs:3},children:a(n,{fontSize:18,children:["Local time: ",`${x(t.dt,t.timezone,"dddd, h:mm a")}`]})}),a(r,{textAlign:{sm:"end",xs:"start"},order:{md:0,xs:2},children:[e(n,{fontSize:18,children:"Hourly Forecast"}),e(k,{lat:t.lat,lon:t.lon,timezone:t.timezone})]})]})},B=T;function P(){const s=W(),i=s.state;return i?e(H,{maxWidth:"xl",children:e(B,{pathname:s.pathname,coord:i})}):e(v,{to:"/"})}export{P as default};