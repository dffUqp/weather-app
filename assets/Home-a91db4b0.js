import{r as h,p as Z,q as Y,t as M,_ as w,v as X,w as J,m as q,a as d,n as ee,X as b,Y as B,o as te,Z as ne,a0 as re,O as ie,j as g,B as y,a1 as oe,c as se,u as E,i as ae,d as ce,e as ue,L as le,a2 as de}from"./index-ee43d8ef.js";import{b as pe,P as T,r as fe,i as me,a as he,I as L,u as ge,W as xe}from"./weatherServices-df2c9b88.js";import{T as C,i as ve,W as we,d as Se,a as $e,C as Ce}from"./WeatherInfoBlock-3667bdd5.js";import{u as D}from"./useTheme-a0ef1072.js";const ye=h.createContext(),P=ye;function be(e){return Z("MuiGrid",e)}const ke=[0,1,2,3,4,5,6,7,8,9,10],We=["column-reverse","column","row-reverse","row"],Me=["nowrap","wrap-reverse","wrap"],v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],S=Y("MuiGrid",["root","container","item","zeroMinWidth",...ke.map(e=>`spacing-xs-${e}`),...We.map(e=>`direction-xs-${e}`),...Me.map(e=>`wrap-xs-${e}`),...v.map(e=>`grid-xs-${e}`),...v.map(e=>`grid-sm-${e}`),...v.map(e=>`grid-md-${e}`),...v.map(e=>`grid-lg-${e}`),...v.map(e=>`grid-xl-${e}`)]),Be=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function x(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function ze({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce((i,r)=>{let o={};if(t[r]&&(n=t[r]),!n)return i;if(n===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=b({values:t.columns,breakpoints:e.breakpoints.values}),u=typeof c=="object"?c[r]:c;if(u==null)return i;const l=`${Math.round(n/u*1e8)/1e6}%`;let a={};if(t.container&&t.item&&t.columnSpacing!==0){const s=e.spacing(t.columnSpacing);if(s!=="0px"){const p=`calc(${l} + ${x(s)})`;a={flexBasis:p,maxWidth:p}}}o=w({flexBasis:l,flexGrow:0,maxWidth:l},a)}return e.breakpoints.values[r]===0?Object.assign(i,o):i[e.breakpoints.up(r)]=o,i},{})}function Ge({theme:e,ownerState:t}){const n=b({values:t.direction,breakpoints:e.breakpoints.values});return B({theme:e},n,i=>{const r={flexDirection:i};return i.indexOf("column")===0&&(r[`& > .${S.item}`]={maxWidth:"none"}),r})}function I({breakpoints:e,values:t}){let n="";Object.keys(t).forEach(r=>{n===""&&t[r]!==0&&(n=r)});const i=Object.keys(e).sort((r,o)=>e[r]-e[o]);return i.slice(0,i.indexOf(n))}function Ne({theme:e,ownerState:t}){const{container:n,rowSpacing:i}=t;let r={};if(n&&i!==0){const o=b({values:i,breakpoints:e.breakpoints.values});let c;typeof o=="object"&&(c=I({breakpoints:e.breakpoints.values,values:o})),r=B({theme:e},o,(u,l)=>{var a;const s=e.spacing(u);return s!=="0px"?{marginTop:`-${x(s)}`,[`& > .${S.item}`]:{paddingTop:x(s)}}:(a=c)!=null&&a.includes(l)?{}:{marginTop:0,[`& > .${S.item}`]:{paddingTop:0}}})}return r}function _e({theme:e,ownerState:t}){const{container:n,columnSpacing:i}=t;let r={};if(n&&i!==0){const o=b({values:i,breakpoints:e.breakpoints.values});let c;typeof o=="object"&&(c=I({breakpoints:e.breakpoints.values,values:o})),r=B({theme:e},o,(u,l)=>{var a;const s=e.spacing(u);return s!=="0px"?{width:`calc(100% + ${x(s)})`,marginLeft:`-${x(s)}`,[`& > .${S.item}`]:{paddingLeft:x(s)}}:(a=c)!=null&&a.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${S.item}`]:{paddingLeft:0}}})}return r}function Re(e,t,n={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[n[`spacing-xs-${String(e)}`]];const i=[];return t.forEach(r=>{const o=e[r];Number(o)>0&&i.push(n[`spacing-${r}-${String(o)}`])}),i}const Le=M("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:i,direction:r,item:o,spacing:c,wrap:u,zeroMinWidth:l,breakpoints:a}=n;let s=[];i&&(s=Re(c,a,t));const p=[];return a.forEach(f=>{const m=n[f];m&&p.push(t[`grid-${f}-${String(m)}`])}),[t.root,i&&t.container,o&&t.item,l&&t.zeroMinWidth,...s,r!=="row"&&t[`direction-xs-${String(r)}`],u!=="wrap"&&t[`wrap-xs-${String(u)}`],...p]}})(({ownerState:e})=>w({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Ge,Ne,_e,ze);function Pe(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const n=[];return t.forEach(i=>{const r=e[i];if(Number(r)>0){const o=`spacing-${i}-${String(r)}`;n.push(o)}}),n}const je=e=>{const{classes:t,container:n,direction:i,item:r,spacing:o,wrap:c,zeroMinWidth:u,breakpoints:l}=e;let a=[];n&&(a=Pe(o,l));const s=[];l.forEach(f=>{const m=e[f];m&&s.push(`grid-${f}-${String(m)}`)});const p={root:["root",n&&"container",r&&"item",u&&"zeroMinWidth",...a,i!=="row"&&`direction-xs-${String(i)}`,c!=="wrap"&&`wrap-xs-${String(c)}`,...s]};return te(p,be,t)},Ee=h.forwardRef(function(t,n){const i=X({props:t,name:"MuiGrid"}),{breakpoints:r}=D(),o=J(i),{className:c,columns:u,columnSpacing:l,component:a="div",container:s=!1,direction:p="row",item:f=!1,rowSpacing:m,spacing:k=0,wrap:F="wrap",zeroMinWidth:Q=!1}=o,W=q(o,Be),A=m||k,H=l||k,K=h.useContext(P),G=s?u||12:K,N={},_=w({},W);r.keys.forEach($=>{W[$]!=null&&(N[$]=W[$],delete _[$])});const R=w({},o,{columns:G,container:s,direction:p,item:f,rowSpacing:A,columnSpacing:H,wrap:F,zeroMinWidth:Q,spacing:k},N,{breakpoints:r.keys}),U=je(R);return d(P.Provider,{value:G,children:d(Le,w({ownerState:R,className:ee(U.root,c),as:a,ref:n},_))})}),j=Ee;function Te(e,t,n,i,r){const o=typeof window<"u"&&typeof window.matchMedia<"u",[c,u]=h.useState(()=>r&&o?n(e).matches:i?i(e).matches:t);return pe(()=>{let l=!0;if(!o)return;const a=n(e),s=()=>{l&&u(a.matches)};return s(),a.addListener(s),()=>{l=!1,a.removeListener(s)}},[e,n,o]),c}const V=ie["useSyncExternalStore"];function De(e,t,n,i){const r=h.useCallback(()=>t,[t]),o=h.useMemo(()=>{if(i!==null){const{matches:a}=i(e);return()=>a}return r},[r,e,i]),[c,u]=h.useMemo(()=>{if(n===null)return[r,()=>()=>{}];const a=n(e);return[()=>a.matches,s=>(a.addListener(s),()=>{a.removeListener(s)})]},[r,n,e]);return V(u,c,o)}function Ie(e,t={}){const n=ne(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:r=!1,matchMedia:o=i?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:u}=re({name:"MuiUseMediaQuery",props:t,theme:n});let l=typeof e=="function"?e(n):e;return l=l.replace(/^@media( ?)/m,""),(V!==void 0?De:Te)(l,r,o,c,u)}function Ve({data:e,centredView:t=!1,...n}){const{name:i,country:r,icon:o,temp:c,humidity:u,speed:l,feels_like:a}=e;return g(T,{sx:{position:"relative",height:"320px",display:"flex",flexDirection:"column",alignItems:"center",p:"5px"},...n,children:[g(C,{maxWidth:"140px",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",textTransform:"capitalize",children:[i,", ",r]}),d("img",{src:ve(o),alt:"weather icon",width:"100",height:"100"}),g(y,{display:"flex",flexDirection:"column",px:"15px",width:"100%",sx:{alignItems:t?"center":"flex-start"},children:[d(C,{children:`${e.details}`}),d(y,{width:"100%",marginY:"5px",height:"0.5px",sx:{backgroundColor:"#D3D3D3"}}),d(C,{fontSize:48,children:`${c.toFixed()}°C`}),d(we,{humidity:u,speed:l,feels_like:a})]})]})}var z={},Oe=me;Object.defineProperty(z,"__esModule",{value:!0});var O=z.default=void 0,Fe=Oe(fe()),Qe=he,Ae=(0,Fe.default)((0,Qe.jsx)("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}),"Cached");O=z.default=Ae;const He=M("div")(()=>({position:"relative"})),Ke=M("div")(({theme:e})=>({position:"absolute",opacity:"0",top:0,borderRadius:"4px",width:"100%",height:"100%",zIndex:10,backgroundColor:"rgba(156, 157, 157, 0.25)",transition:"all 0.2s","&:hover":{opacity:"1"},[e.breakpoints.down("md")]:{opacity:"1",backgroundColor:"transparent"}})),Ue=({lat:e,lon:t,refetch:n,name:i,children:r})=>{const o=oe(),c=se(),u=E(s=>ae(s,e,t));return g(He,{onClick:()=>o(`/${i}`,{state:{lat:e,lon:t}}),children:[g(Ke,{children:[d(L,{disableTouchRipple:!0,sx:{position:"absolute",left:"0"},onClick:s=>{if(s.stopPropagation(),u){c(ce({lat:e,lon:t}));return}c(ue({lat:e,lon:t}))},children:u?d(Se,{}):d($e,{})}),d(L,{disableTouchRipple:!0,sx:{position:"absolute",right:"0"},onClick:s=>{s.stopPropagation(),n()},children:d(O,{})})]}),r]})},Ze=({lat:e,lon:t})=>{const{data:n,isRefetching:i,refetch:r}=ge(`WeatherLat:${e}Lon:${t}`,()=>xe.getWeather({lat:e,lon:t,units:"metric"})),o=D(),c=Ie(o.breakpoints.down("sm"));return n==null||i?d(T,{sx:{display:"flex",height:"320px"},children:d(le,{})}):d(Ue,{lat:e,lon:t,refetch:r,name:n.name,children:d(Ve,{data:n,centredView:c})})};function Ye(){const e=E(de);return d(y,{sx:{maxWidth:1145,width:"100%",minHeight:650,height:"auto",margin:"10px auto 5px",p:"10px"},children:g(j,{container:!0,rowSpacing:2,columnSpacing:{xs:3,md:6},children:[e.length===0&&d(y,{display:"flex",width:"100%",justifyContent:"center",children:d(C,{color:"lightgrey",children:"You have no cities added, try to use search"})}),e.map(t=>d(j,{item:!0,xs:12,sm:6,md:4,lg:3,children:d(Ze,{lat:t.lat,lon:t.lon})},`${t.lat}-${t.lon}`))]})})}function tt(){return d(Ce,{maxWidth:"lg",children:d(Ye,{})})}export{tt as default};