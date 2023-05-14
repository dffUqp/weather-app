import{j as a,a as e,B as r,F,u as p,i as C,b,c as W,L as S,d as v,e as z,s as k,f as L,N as B}from"./index-0300325d.js";import{P as h,u as m,t as u,W as f,I}from"./weatherServices-4765fbb7.js";import{T as n,i as g,d as _,a as $,W as A,C as H}from"./WeatherInfoBlock-d59ecd77.js";const x={Clear:[{r:0,g:151,b:167},{r:33,g:150,b:243}],Clouds:[{r:61,g:122,b:129},{r:130,g:165,b:193}],Rain:[{r:50,g:73,b:136},{r:19,g:105,b:173}],Snow:[{r:78,g:157,b:221},{r:90,g:179,b:251}],default:[{r:0,g:151,b:167},{r:33,g:150,b:243}]},T=({time:s,icon:i,temp:l,details:o})=>a(h,{sx:{maxWidth:"100px",width:"100%",height:"105px",background:"transparent",textAlign:"center",p:"10px"},children:[e(n,{children:s}),a(r,{display:"flex",alignItems:"center",children:[e("img",{src:g(i),alt:"weather icon",width:40}),e(n,{children:`${l.toFixed()}°C`})]}),e(n,{fontSize:14,children:o})]}),j=()=>e(F,{children:[...new Array(8)].map((s,i)=>e(h,{sx:{width:"100px",height:"105px",background:"transparent",textAlign:"center",p:"10px"}},i))});function D({lat:s,lon:i,timezone:l}){const{data:o,isRefetching:d}=m("hourlyForecast",()=>f.getHourlyForecast({lat:s,lon:i,units:"metric"}));return e(r,{display:"flex",gap:"10px",maxWidth:"320px",minWidth:"280px",width:"100%",flexWrap:"wrap",justifyContent:{sm:"flex-end",xs:"flex-start"},children:d||o==null?e(j,{}):o.map(t=>e(T,{time:u(t.dt,l,"h:mm a"),icon:t.icon,temp:t.temp,details:t.details},t.dt))})}const R=({pathname:s,coord:i})=>{const l=p(c=>C(c,i.lat,i.lon)),o=p(b),d=W(),{data:t,isRefetching:y}=m(["city",s],()=>f.getWeather({units:"metric",...i}),{onSuccess:c=>{d(k(x[c.details]??x.default))}}),w=()=>{if(l){d(v(i));return}d(z(i))};return y||t==null?e(r,{height:"95vh",children:e(S,{})}):a(h,{sx:{marginTop:"24px",p:"20px",display:"flex",width:"100%",alignItems:"flex-start",flexWrap:"wrap",justifyContent:"space-between",gap:"25px",minHeight:"375px"},elevation:2,children:[a(r,{children:[a(r,{display:"flex",alignItems:"start",children:[a(r,{children:[e("img",{src:g(t.icon),alt:"weather icon",width:115}),a(r,{display:"flex",borderBottom:"1px solid #D3D3D3",children:[a(n,{fontSize:"24px",maxWidth:"140px",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",textTransform:"capitalize",marginRight:1,children:[t.name,","]}),e(n,{fontSize:"24px",children:t.country})]}),e(n,{fontSize:"48px",children:`${t.temp.toFixed()}°C`}),a(r,{display:"flex",columnGap:"5px",color:"white",children:[e(n,{children:`High: ${t.temp_max.toFixed()}°C`}),"|",e(n,{children:`Low: ${t.temp_min.toFixed()}°C`})]})]}),e(I,{onClick:w,disabled:o&&!l,children:l?e(_,{}):e($,{})})]}),e(A,{mt:2,humidity:t.humidity,speed:t.speed,feels_like:t.feels_like})]}),e(r,{order:{md:0,xs:3},children:a(n,{fontSize:18,children:["Local time: ",`${u(t.dt,t.timezone,"dddd, h:mm a")}`]})}),a(r,{textAlign:{sm:"end",xs:"start"},order:{md:0,xs:2},children:[e(n,{fontSize:18,children:"Hourly Forecast"}),e(D,{lat:t.lat,lon:t.lon,timezone:t.timezone})]})]})},N=R;function O(){const s=L(),i=s.state;return i?e(H,{maxWidth:"xl",children:e(N,{pathname:s.pathname,coord:i})}):e(B,{to:"/"})}export{O as default};
