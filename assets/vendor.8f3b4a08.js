var e,n,t,_,l={},o=[],r=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function i(e,n){for(var t in n)e[t]=n[t];return e}function u(e){var n=e.parentNode;n&&n.removeChild(e)}function s(e,n,t){var _,l,o,r=arguments,i={};for(o in n)"key"==o?_=n[o]:"ref"==o?l=n[o]:i[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(r[o]);if(null!=t&&(i.children=t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return c(e,i,_,l,null)}function c(n,t,_,l,o){var r={type:n,props:t,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(r),r}function f(e){return e.children}function p(e,n){this.props=e,this.context=n}function a(e,n){if(null==n)return e.__?a(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?a(e):null}function d(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return d(e)}}function h(l){(!l.__d&&(l.__d=!0)&&n.push(l)&&!v.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||t)(v)}function v(){for(var e;v.__r=n.length;)e=n.sort((function(e,n){return e.__v.__b-n.__v.__b})),n=[],e.some((function(e){var n,t,_,l,o,r;e.__d&&(o=(l=(n=e).__v).__e,(r=n.__P)&&(t=[],(_=i({},l)).__v=l.__v+1,C(r,l,_,n.__n,void 0!==r.ownerSVGElement,null!=l.__h?[o]:null,t,null==o?a(l):o,l.__h),S(t,l),l.__e!=o&&d(l)))}))}function y(e,n,t,_,r,i,u,s,p,d){var h,v,y,g,b,w,x,S=_&&_.__k||o,E=S.length;for(t.__k=[],h=0;h<n.length;h++)if(null!=(g=t.__k[h]=null==(g=n[h])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?c(null,g,null,null,g):Array.isArray(g)?c(f,{children:g},null,null,null):g.__b>0?c(g.type,g.props,g.key,null,g.__v):g)){if(g.__=t,g.__b=t.__b+1,null===(y=S[h])||y&&g.key==y.key&&g.type===y.type)S[h]=void 0;else for(v=0;v<E;v++){if((y=S[v])&&g.key==y.key&&g.type===y.type){S[v]=void 0;break}y=null}C(e,g,y=y||l,r,i,u,s,p,d),b=g.__e,(v=g.ref)&&y.ref!=v&&(x||(x=[]),y.ref&&x.push(y.ref,null,g),x.push(v,g.__c||b,g)),null!=b?(null==w&&(w=b),"function"==typeof g.type&&null!=g.__k&&g.__k===y.__k?g.__d=p=m(g,p,e):p=k(e,g,y,S,b,p),d||"option"!==t.type?"function"==typeof t.type&&(t.__d=p):e.value=""):p&&y.__e==p&&p.parentNode!=e&&(p=a(y))}for(t.__e=w,h=E;h--;)null!=S[h]&&("function"==typeof t.type&&null!=S[h].__e&&S[h].__e==t.__d&&(t.__d=a(_,h+1)),D(S[h],S[h]));if(x)for(h=0;h<x.length;h++)P(x[h],x[++h],x[++h])}function m(e,n,t){var _,l;for(_=0;_<e.__k.length;_++)(l=e.__k[_])&&(l.__=e,n="function"==typeof l.type?m(l,n,t):k(t,l,l,e.__k,l.__e,n));return n}function k(e,n,t,_,l,o){var r,i,u;if(void 0!==n.__d)r=n.__d,n.__d=void 0;else if(null==t||l!=o||null==l.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(l),r=null;else{for(i=o,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==l)break e;e.insertBefore(l,o),r=o}return void 0!==r?r:l.nextSibling}function g(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||r.test(n)?t:t+"px"}function b(e,n,t,_,l){var o;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||g(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||g(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?_||e.addEventListener(n,o?x:w,o):e.removeEventListener(n,o?x:w,o);else if("dangerouslySetInnerHTML"!==n){if(l)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(r){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function w(n){this.l[n.type+!1](e.event?e.event(n):n)}function x(n){this.l[n.type+!0](e.event?e.event(n):n)}function C(n,t,_,r,s,c,a,d,h){var v,m,k,g,w,x,C,S,P,D,T,U=t.type;if(void 0!==t.constructor)return null;null!=_.__h&&(h=_.__h,d=t.__e=_.__e,t.__h=null,c=[d]),(v=e.__b)&&v(t);try{e:if("function"==typeof U){if(S=t.props,P=(v=U.contextType)&&r[v.__c],D=v?P?P.props.value:v.__:r,_.__c?C=(m=t.__c=_.__c).__=m.__E:("prototype"in U&&U.prototype.render?t.__c=m=new U(S,D):(t.__c=m=new p(S,D),m.constructor=U,m.render=E),P&&P.sub(m),m.props=S,m.state||(m.state={}),m.context=D,m.__n=r,k=m.__d=!0,m.__h=[]),null==m.__s&&(m.__s=m.state),null!=U.getDerivedStateFromProps&&(m.__s==m.state&&(m.__s=i({},m.__s)),i(m.__s,U.getDerivedStateFromProps(S,m.__s))),g=m.props,w=m.state,k)null==U.getDerivedStateFromProps&&null!=m.componentWillMount&&m.componentWillMount(),null!=m.componentDidMount&&m.__h.push(m.componentDidMount);else{if(null==U.getDerivedStateFromProps&&S!==g&&null!=m.componentWillReceiveProps&&m.componentWillReceiveProps(S,D),!m.__e&&null!=m.shouldComponentUpdate&&!1===m.shouldComponentUpdate(S,m.__s,D)||t.__v===_.__v){m.props=S,m.state=m.__s,t.__v!==_.__v&&(m.__d=!1),m.__v=t,t.__e=_.__e,t.__k=_.__k,t.__k.forEach((function(e){e&&(e.__=t)})),m.__h.length&&a.push(m);break e}null!=m.componentWillUpdate&&m.componentWillUpdate(S,m.__s,D),null!=m.componentDidUpdate&&m.__h.push((function(){m.componentDidUpdate(g,w,x)}))}m.context=D,m.props=S,m.state=m.__s,(v=e.__r)&&v(t),m.__d=!1,m.__v=t,m.__P=n,v=m.render(m.props,m.state,m.context),m.state=m.__s,null!=m.getChildContext&&(r=i(i({},r),m.getChildContext())),k||null==m.getSnapshotBeforeUpdate||(x=m.getSnapshotBeforeUpdate(g,w)),T=null!=v&&v.type===f&&null==v.key?v.props.children:v,y(n,Array.isArray(T)?T:[T],t,_,r,s,c,a,d,h),m.base=t.__e,t.__h=null,m.__h.length&&a.push(m),C&&(m.__E=m.__=null),m.__e=!1}else null==c&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=function(e,n,t,_,r,i,s,c){var f,p,a,d,h=t.props,v=n.props,m=n.type,k=0;if("svg"===m&&(r=!0),null!=i)for(;k<i.length;k++)if((f=i[k])&&(f===e||(m?f.localName==m:3==f.nodeType))){e=f,i[k]=null;break}if(null==e){if(null===m)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),i=null,c=!1}if(null===m)h===v||c&&e.data===v||(e.data=v);else{if(i=i&&o.slice.call(e.childNodes),p=(h=t.props||l).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!c){if(null!=i)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||p)&&(a&&(p&&a.__html==p.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(function(e,n,t,_,l){var o;for(o in t)"children"===o||"key"===o||o in n||b(e,o,null,t[o],_);for(o in n)l&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||b(e,o,n[o],t[o],_)}(e,v,h,r,c),a)n.__k=[];else if(k=n.props.children,y(e,Array.isArray(k)?k:[k],n,t,_,r&&"foreignObject"!==m,i,s,e.firstChild,c),null!=i)for(k=i.length;k--;)null!=i[k]&&u(i[k]);c||("value"in v&&void 0!==(k=v.value)&&(k!==e.value||"progress"===m&&!k)&&b(e,"value",k,h.value,!1),"checked"in v&&void 0!==(k=v.checked)&&k!==e.checked&&b(e,"checked",k,h.checked,!1))}return e}(_.__e,t,_,r,s,c,a,h);(v=e.diffed)&&v(t)}catch(N){t.__v=null,(h||null!=c)&&(t.__e=d,t.__h=!!h,c[c.indexOf(d)]=null),e.__e(N,t,_)}}function S(n,t){e.__c&&e.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(e){e.call(t)}))}catch(_){e.__e(_,t.__v)}}))}function P(n,t,_){try{"function"==typeof n?n(t):n.current=t}catch(l){e.__e(l,_)}}function D(n,t,_){var l,o,r;if(e.unmount&&e.unmount(n),(l=n.ref)&&(l.current&&l.current!==n.__e||P(l,null,t)),_||"function"==typeof n.type||(_=null!=(o=n.__e)),n.__e=n.__d=void 0,null!=(l=n.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(i){e.__e(i,t)}l.base=l.__P=null}if(l=n.__k)for(r=0;r<l.length;r++)l[r]&&D(l[r],t,_);null!=o&&u(o)}function E(e,n,t){return this.constructor(e,t)}function T(n,t,_){var r,i,u;e.__&&e.__(n,t),i=(r="function"==typeof _)?null:_&&_.__k||t.__k,u=[],C(t,n=(!r&&_||t).__k=s(f,null,[n]),i||l,l,void 0!==t.ownerSVGElement,!r&&_?[_]:i?null:t.firstChild?o.slice.call(t.childNodes):null,u,!r&&_?_:i?i.__e:t.firstChild,r),S(u,n)}e={__e:function(e,n){for(var t,_,l;n=n.__;)if((t=n.__c)&&!t.__)try{if((_=t.constructor)&&null!=_.getDerivedStateFromError&&(t.setState(_.getDerivedStateFromError(e)),l=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(o){e=o}throw e},__v:0},p.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=i({},this.state),"function"==typeof e&&(e=e(i({},t),this.props)),e&&i(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),h(this))},p.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),h(this))},p.prototype.render=f,n=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v.__r=0;const U=e=>{const n=e.color||"currentColor",t=e.size||24;return delete e.color,delete e.size,s("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e),s("polyline",{points:"7 13 12 18 17 13"}),s("polyline",{points:"7 6 12 11 17 6"}))};export{U as C,T as N,s as a,f as y};
