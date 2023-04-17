import{r as k,m as U,n as q,s as V,_ as v,o as Z,p as Q,i as X,j as a,k as Y,V as b,W as B,l as J,a as h,B as C,X as ee,L as te,d as re,b as ie}from"./index-26b06c8c.js";import{T as w,i as ne,W as oe,u as T,a as se,c as ae,d as ce,e as le,w as ue,C as pe}from"./WeatherInfo-5e0b91a4.js";import{r as de,i as fe,a as me,P as D,u as he,I as P,W as ge}from"./weatherServices-2cdce398.js";import{u as xe}from"./useTheme-38307380.js";const ve=k.createContext(),R=ve;function $e(e){return U("MuiGrid",e)}const Se=[0,1,2,3,4,5,6,7,8,9,10],we=["column-reverse","column","row-reverse","row"],Ce=["nowrap","wrap-reverse","wrap"],x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],$=q("MuiGrid",["root","container","item","zeroMinWidth",...Se.map(e=>`spacing-xs-${e}`),...we.map(e=>`direction-xs-${e}`),...Ce.map(e=>`wrap-xs-${e}`),...x.map(e=>`grid-xs-${e}`),...x.map(e=>`grid-sm-${e}`),...x.map(e=>`grid-md-${e}`),...x.map(e=>`grid-lg-${e}`),...x.map(e=>`grid-xl-${e}`)]),be=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function g(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function ye({theme:e,ownerState:t}){let o;return e.breakpoints.keys.reduce((i,r)=>{let n={};if(t[r]&&(o=t[r]),!o)return i;if(o===!0)n={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=b({values:t.columns,breakpoints:e.breakpoints.values}),l=typeof c=="object"?c[r]:c;if(l==null)return i;const u=`${Math.round(o/l*1e8)/1e6}%`;let p={};if(t.container&&t.item&&t.columnSpacing!==0){const s=e.spacing(t.columnSpacing);if(s!=="0px"){const d=`calc(${u} + ${g(s)})`;p={flexBasis:d,maxWidth:d}}}n=v({flexBasis:u,flexGrow:0,maxWidth:u},p)}return e.breakpoints.values[r]===0?Object.assign(i,n):i[e.breakpoints.up(r)]=n,i},{})}function We({theme:e,ownerState:t}){const o=b({values:t.direction,breakpoints:e.breakpoints.values});return B({theme:e},o,i=>{const r={flexDirection:i};return i.indexOf("column")===0&&(r[`& > .${$.item}`]={maxWidth:"none"}),r})}function I({breakpoints:e,values:t}){let o="";Object.keys(t).forEach(r=>{o===""&&t[r]!==0&&(o=r)});const i=Object.keys(e).sort((r,n)=>e[r]-e[n]);return i.slice(0,i.indexOf(o))}function ke({theme:e,ownerState:t}){const{container:o,rowSpacing:i}=t;let r={};if(o&&i!==0){const n=b({values:i,breakpoints:e.breakpoints.values});let c;typeof n=="object"&&(c=I({breakpoints:e.breakpoints.values,values:n})),r=B({theme:e},n,(l,u)=>{var p;const s=e.spacing(l);return s!=="0px"?{marginTop:`-${g(s)}`,[`& > .${$.item}`]:{paddingTop:g(s)}}:(p=c)!=null&&p.includes(u)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}})}return r}function Be({theme:e,ownerState:t}){const{container:o,columnSpacing:i}=t;let r={};if(o&&i!==0){const n=b({values:i,breakpoints:e.breakpoints.values});let c;typeof n=="object"&&(c=I({breakpoints:e.breakpoints.values,values:n})),r=B({theme:e},n,(l,u)=>{var p;const s=e.spacing(l);return s!=="0px"?{width:`calc(100% + ${g(s)})`,marginLeft:`-${g(s)}`,[`& > .${$.item}`]:{paddingLeft:g(s)}}:(p=c)!=null&&p.includes(u)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}})}return r}function Ge(e,t,o={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[o[`spacing-xs-${String(e)}`]];const i=[];return t.forEach(r=>{const n=e[r];Number(n)>0&&i.push(o[`spacing-${r}-${String(n)}`])}),i}const ze=V("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{container:i,direction:r,item:n,spacing:c,wrap:l,zeroMinWidth:u,breakpoints:p}=o;let s=[];i&&(s=Ge(c,p,t));const d=[];return p.forEach(f=>{const m=o[f];m&&d.push(t[`grid-${f}-${String(m)}`])}),[t.root,i&&t.container,n&&t.item,u&&t.zeroMinWidth,...s,r!=="row"&&t[`direction-xs-${String(r)}`],l!=="wrap"&&t[`wrap-xs-${String(l)}`],...d]}})(({ownerState:e})=>v({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),We,ke,Be,ye);function _e(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const o=[];return t.forEach(i=>{const r=e[i];if(Number(r)>0){const n=`spacing-${i}-${String(r)}`;o.push(n)}}),o}const Ne=e=>{const{classes:t,container:o,direction:i,item:r,spacing:n,wrap:c,zeroMinWidth:l,breakpoints:u}=e;let p=[];o&&(p=_e(n,u));const s=[];u.forEach(f=>{const m=e[f];m&&s.push(`grid-${f}-${String(m)}`)});const d={root:["root",o&&"container",r&&"item",l&&"zeroMinWidth",...p,i!=="row"&&`direction-xs-${String(i)}`,c!=="wrap"&&`wrap-xs-${String(c)}`,...s]};return J(d,$e,t)},Me=k.forwardRef(function(t,o){const i=Z({props:t,name:"MuiGrid"}),{breakpoints:r}=xe(),n=Q(i),{className:c,columns:l,columnSpacing:u,component:p="div",container:s=!1,direction:d="row",item:f=!1,rowSpacing:m,spacing:y=0,wrap:L="wrap",zeroMinWidth:O=!1}=n,W=X(n,be),F=m||y,K=u||y,A=k.useContext(R),z=s?l||12:A,_={},N=v({},W);r.keys.forEach(S=>{W[S]!=null&&(_[S]=W[S],delete N[S])});const M=v({},n,{columns:z,container:s,direction:d,item:f,rowSpacing:F,columnSpacing:K,wrap:L,zeroMinWidth:O,spacing:y},_,{breakpoints:r.keys}),H=Ne(M);return a(R.Provider,{value:z,children:a(ze,v({ownerState:M,className:Y(H.root,c),as:p,ref:o},N))})}),j=Me;var G={},Pe=fe;Object.defineProperty(G,"__esModule",{value:!0});var E=G.default=void 0,Re=Pe(de()),je=me,Ve=(0,Re.default)((0,je.jsx)("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}),"Cached");E=G.default=Ve;const Te=V("div")(()=>({position:"absolute",opacity:"0",top:0,borderRadius:"4px",width:"100%",height:"100%",backgroundColor:"rgba(156, 157, 157, 0.25)","&:hover":{opacity:"1","@media (hover: none)":{opacity:0}},transition:"all 0.2s"}));function De({data:e,...t}){const{name:o,country:i,icon:r,temp:n,humidity:c,speed:l,feels_like:u}=e;return h(D,{sx:{position:"relative",height:"320px",display:"flex",flexDirection:"column",alignItems:"center",p:"5px"},...t,children:[h(w,{maxWidth:"140px",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",textTransform:"capitalize",children:[o,", ",i]}),a("img",{src:ne(r),alt:"",width:"100"}),h(C,{alignSelf:"start",px:"15px",width:"100%",children:[a(w,{borderBottom:"1px solid #D3D3D3",children:`${e.details}`}),a(w,{fontSize:48,children:`${n.toFixed()}°C`}),a(oe,{humidity:c,speed:l,feels_like:u})]})]})}const Ie=({lat:e,lon:t})=>{const o=ee(),i=T(s=>se(s,e,t)),r=ae(),{data:n,isRefetching:c,refetch:l}=he(`WeatherLat:${e}Lon:${t}`,()=>ge.getWeather({lat:e,lon:t,units:"metric"}));return n==null||c?a(D,{sx:{display:"flex",height:"320px"},children:a(te,{})}):h(C,{position:"relative",children:[a(De,{data:n}),h(Te,{onClick:()=>o(`/${n.name}`,{state:{lat:e,lon:t}}),children:[a(P,{disableTouchRipple:!0,sx:{position:"absolute",left:"0"},onClick:s=>{if(s.stopPropagation(),i){r(re({lat:e,lon:t}));return}r(ie({lat:e,lon:t}))},children:i?a(ce,{}):a(le,{})}),a(P,{disableTouchRipple:!0,sx:{position:"absolute",right:"0"},onClick:s=>{s.stopPropagation(),l()},children:a(E,{})})]})]})};function Ee(){const e=T(ue);return a(C,{sx:{maxWidth:1145,width:"100%",minHeight:650,height:"auto",margin:"10px auto 5px",p:"10px"},children:h(j,{container:!0,rowSpacing:2,columnSpacing:{xs:3,md:6},children:[e.length===0&&a(C,{display:"flex",width:"100%",justifyContent:"center",children:a(w,{color:"lightgrey",children:"You have no cities added, try to use search"})}),e.map(t=>a(j,{item:!0,xs:"auto",sm:4,md:3,children:a(Ie,{lat:t.lat,lon:t.lon})},`${t.lat}-${t.lon}`))]})})}function Ae(){return a(pe,{maxWidth:"lg",children:a(Ee,{})})}export{Ae as default};