(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3509],{674434:function(d,f,n){"use strict";Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;const s=a(n(918781));function a(r){return r&&r.__esModule?r:{default:r}}const i=s;f.default=i,d.exports=i},929975:function(d,f,n){"use strict";n.r(f);var s=n(667294),a=n(639389),i=n.n(a),r=n(216906),g=n(941346),v=n(385956),P=n(472638),y=n(373638),O=n(785893),M={"docs/spec/download":"docs/resources","docs/spec/work-with-us":"docs/resources"},m=function(T){var L=T.router,I=(0,v.useLocation)(),c=I.pathname,u=y.KE(c);return(0,s.useEffect)(function(){for(var p=Object.keys(M),e=0;e<p.length;e+=1){var l=p[e];c.includes(l)&&L.replace(y.J1("/".concat(M[l]),u).pathname)}var o=window,x=o.yuyanMonitor;x==null||x.log({code:11,msg:"Page not found: ".concat(location.href,"; Source: ").concat(document.referrer)})},[]),(0,O.jsx)(r.ZP,{status:"404",title:"404",subTitle:u?"\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u8C8C\u4F3C\u4E0D\u5B58\u5728\uFF1F":"Sorry, the page you visited does not exist.",extra:(0,O.jsx)(P.Z,{to:y.J1("/",u),children:(0,O.jsx)(g.ZP,{type:"primary",icon:(0,O.jsx)(a.HomeOutlined,{}),children:u?"\u8FD4\u56DE Ant Design \u9996\u9875":"Back to home page"})})})};f.default=m},373638:function(d,f,n){"use strict";n.d(f,{J1:function(){return M},Is:function(){return I},Fy:function(){return _},KE:function(){return O},qE:function(){return m}});var s=n(661227),a=n(805574),i=n(97857),r=n(385564),g=n(842348),v=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),P={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":v?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function y(c,u,p,e){var l=c.map(function(t){return t.meta}).filter(function(t){return!t.skip}),o=[],x=function(h,D){return(h.order||0)-(D.order||0)};l.sort(x).forEach(function(t){if(t.category&&(t.category=t.category[u]||t.category),t.type&&(t.type=t.type[u]||t.type),t!=null&&t.title&&(t.title=t.title[u]||t.title),!t.category){o.push(t);return}if(t.category==="Components"&&t.type){var h=o.find(function(E){return(E==null?void 0:E.title)===t.type});h||(h={type:"type",title:t.type,children:[],order:e[t.type]},o.push(h)),h.children=h.children||[],h.children.push(t);return}var D=o.find(function(E){return(E==null?void 0:E.title)===t.category});if(D||(D={type:"category",title:t.category,children:[],order:p[t.category]},o.push(D)),D.children=D.children||[],t.type){var A=D.children.filter(function(E){return(E==null?void 0:E.title)===t.type})[0];A||(A={type:"type",title:t.type,children:[],order:e[t.type]},D.children.push(A)),A.children=A.children||[],A.children.push(t)}else D.children.push(t)});function C(t){return t.sort(x).map(function(h){return h.children?_objectSpread(_objectSpread({},h),{},{children:C(h.children)}):h})}return C(o)}function O(c){return/-cn\/?$/.test(c)}function M(c,u,p,e){var l=c.startsWith("/")?c:"/".concat(c),o;if(u?l==="/"?o="/index-cn":l.endsWith("/")?o=l.replace(/\/$/,"-cn/"):(o="".concat(l,"-cn"),o=o.replace(/(-cn)+/,"-cn")):o=/\/?index-cn/.test(l)?"/":l.replace("-cn",""),e){var x=e[u?"zhCN":"enUS"];o+="#".concat(x)}return{pathname:o,search:p}}function m(c){var u="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",p=new Image,e,l=function(x){e||(e=!0,p.src="",c(x))};return p.onload=function(){return l("responded")},p.onerror=function(){return l("error")},p.src=u,setTimeout(function(){return l("timeout")},1500)}function _(){var c="test",u=window.localStorage;try{return u.setItem(c,"1"),u.removeItem(c),!0}catch(p){return!1}}function T(c){return new Promise(function(u,p){var e=document.createElement("script");e.type="text/javascript",e.src=c,e.onload=u,e.onerror=p,document.head.appendChild(e)})}function L(c){var u=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(c))return"";var p=flattenDeep(c.filter(function(e){if(Array.isArray(e)){var l=_slicedToArray(e,1),o=l[0];return o==="p"}return!1}).map(function(e){var l=flatten(e),o=_toArray(l),x=o[0],C=o.slice(1),t=C.filter(function(h){return typeof h=="string"&&!u.includes(h)}).join("");return[x,t]})).find(function(e){return e&&typeof e=="string"&&!u.includes(e)});return p}var I=function(){return P}},862488:function(d){function f(n,s){for(var a=-1,i=s.length,r=n.length;++a<i;)n[r+a]=s[a];return n}d.exports=f},121078:function(d,f,n){var s=n(862488),a=n(137285);function i(r,g,v,P,y){var O=-1,M=r.length;for(v||(v=a),y||(y=[]);++O<M;){var m=r[O];g>0&&v(m)?g>1?i(m,g-1,v,P,y):s(y,m):P||(y[y.length]=m)}return y}d.exports=i},909454:function(d,f,n){var s=n(644239),a=n(637005),i="[object Arguments]";function r(g){return a(g)&&s(g)==i}d.exports=r},137285:function(d,f,n){var s=n(562705),a=n(135694),i=n(701469),r=s?s.isConcatSpreadable:void 0;function g(v){return i(v)||a(v)||!!(r&&v&&v[r])}d.exports=g},385564:function(d,f,n){var s=n(121078);function a(i){var r=i==null?0:i.length;return r?s(i,1):[]}d.exports=a},842348:function(d,f,n){var s=n(121078),a=1/0;function i(r){var g=r==null?0:r.length;return g?s(r,a):[]}d.exports=i},135694:function(d,f,n){var s=n(909454),a=n(637005),i=Object.prototype,r=i.hasOwnProperty,g=i.propertyIsEnumerable,v=s(function(){return arguments}())?s:function(P){return a(P)&&r.call(P,"callee")&&!g.call(P,"callee")};d.exports=v}}]);