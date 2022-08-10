(()=>{var O={};(function v(f,u,y,h){var $=!!(f.Worker&&f.Blob&&f.Promise&&f.OffscreenCanvas&&f.OffscreenCanvasRenderingContext2D&&f.HTMLCanvasElement&&f.HTMLCanvasElement.prototype.transferControlToOffscreen&&f.URL&&f.URL.createObjectURL);function C(){}function i(e){var t=u.exports.Promise,n=t!==void 0?t:f.Promise;return typeof n=="function"?new n(e):(e(C,C),null)}var d=function(){var e=Math.floor(16.666666666666668),t,n,s={},l=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(a){var r=Math.random();return s[r]=requestAnimationFrame(function c(g){l===g||l+e-1<g?(l=g,delete s[r],a()):s[r]=requestAnimationFrame(c)}),r},n=function(a){s[a]&&cancelAnimationFrame(s[a])}):(t=function(a){return setTimeout(a,e)},n=function(a){return clearTimeout(a)}),{frame:t,cancel:n}}(),o=function(){var e,t,n={};function s(l){function a(r,c){l.postMessage({options:r||{},callback:c})}l.init=function(c){var g=c.transferControlToOffscreen();l.postMessage({canvas:g},[g])},l.fire=function(c,g,A){if(t)return a(c,null),t;var b=Math.random().toString(36).slice(2);return t=i(function(S){function w(p){p.data.callback===b&&(delete n[b],l.removeEventListener("message",w),t=null,A(),S())}l.addEventListener("message",w),a(c,b),n[b]=w.bind(null,{data:{callback:b}})}),t},l.reset=function(){l.postMessage({reset:!0});for(var c in n)n[c](),delete n[c]}}return function(){if(e)return e;if(!y&&$){var l=["var CONFETTI, SIZE = {}, module = {};","("+v.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{e=new Worker(URL.createObjectURL(new Blob([l])))}catch(a){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",a),null}s(e)}return e}}(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Y(e,t){return t?t(e):e}function Z(e){return e!=null}function m(e,t,n){return Y(e&&Z(e[t])?e[t]:M[t],n)}function _(e){return e<0?0:Math.floor(e)}function X(e,t){return Math.floor(Math.random()*(t-e))+e}function I(e){return parseInt(e,16)}function j(e){return e.map(J)}function J(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:I(t.substring(0,2)),g:I(t.substring(2,4)),b:I(t.substring(4,6))}}function G(e){var t=m(e,"origin",Object);return t.x=m(t,"x",Number),t.y=m(t,"y",Number),t}function K(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function Q(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function tt(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}function et(e,t,n,s,l,a,r,c,g){e.save(),e.translate(t,n),e.rotate(a),e.scale(s,l),e.arc(0,0,1,r,c,g),e.restore()}function it(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar}}function st(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,s=t.x+t.random*t.tiltCos,l=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,r=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),t.shape==="circle"?e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-s)*t.ovalScalar,Math.abs(r-l)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):et(e,t.x,t.y,Math.abs(a-s)*t.ovalScalar,Math.abs(r-l)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(l)),e.lineTo(Math.floor(a),Math.floor(r)),e.lineTo(Math.floor(s),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}function rt(e,t,n,s,l){var a=t.slice(),r=e.getContext("2d"),c,g,A=i(function(b){function S(){c=g=null,r.clearRect(0,0,s.width,s.height),l(),b()}function w(){y&&!(s.width===h.width&&s.height===h.height)&&(s.width=e.width=h.width,s.height=e.height=h.height),!s.width&&!s.height&&(n(e),s.width=e.width,s.height=e.height),r.clearRect(0,0,s.width,s.height),a=a.filter(function(p){return st(r,p)}),a.length?c=d.frame(w):S()}c=d.frame(w),g=S});return{addFettis:function(b){return a=a.concat(b),A},canvas:e,promise:A,reset:function(){c&&d.cancel(c),g&&g()}}}function P(e,t){var n=!e,s=!!m(t||{},"resize"),l=m(t,"disableForReducedMotion",Boolean),a=$&&!!m(t||{},"useWorker"),r=a?o():null,c=n?K:Q,g=e&&r?!!e.__confetti_initialized:!1,A=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,b;function S(p,D,R){for(var T=m(p,"particleCount",_),k=m(p,"angle",Number),E=m(p,"spread",Number),x=m(p,"startVelocity",Number),nt=m(p,"decay",Number),ot=m(p,"gravity",Number),at=m(p,"drift",Number),H=m(p,"colors",j),ht=m(p,"ticks",Number),W=m(p,"shapes"),lt=m(p,"scalar"),z=G(p),B=T,N=[],ut=e.width*z.x,ct=e.height*z.y;B--;)N.push(it({x:ut,y:ct,angle:k,spread:E,startVelocity:x,color:H[B%H.length],shape:W[X(0,W.length)],ticks:ht,decay:nt,gravity:ot,drift:at,scalar:lt}));return b?b.addFettis(N):(b=rt(e,N,c,D,R),b.promise)}function w(p){var D=l||m(p,"disableForReducedMotion",Boolean),R=m(p,"zIndex",Number);if(D&&A)return i(function(x){x()});n&&b?e=b.canvas:n&&!e&&(e=tt(R),document.body.appendChild(e)),s&&!g&&c(e);var T={width:e.width,height:e.height};r&&!g&&r.init(e),g=!0,r&&(e.__confetti_initialized=!0);function k(){if(r){var x={getBoundingClientRect:function(){if(!n)return e.getBoundingClientRect()}};c(x),r.postMessage({resize:{width:x.width,height:x.height}});return}T.width=T.height=null}function E(){b=null,s&&f.removeEventListener("resize",k),n&&e&&(document.body.removeChild(e),e=null,g=!1)}return s&&f.addEventListener("resize",k,!1),r?r.fire(p,T,E):S(p,T,E)}return w.reset=function(){r&&r.reset(),b&&b.reset()},w}var L;function q(){return L||(L=P(null,{useWorker:!0,resize:!0})),L}u.exports=function(){return q().apply(this,arguments)},u.exports.reset=function(){q().reset()},u.exports.create=P})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),O,!1);var V=O.exports,ft=O.exports.create;(function(v,f){var u,y="http://www.w3.org/2000/svg";function h(i){return i!==void 0}function $(i){return parseFloat(i,10)}function C(i){return h(i)&&(i===!0||i==="true")}(u=f.Donutty=function(i,d){return i&&typeof i=="string"?this.$wrapper=v.querySelectorAll(i)[0]:i instanceof window.HTMLElement?this.$wrapper=i:(this.$wrapper=v.body,d=i),this.$wrapper&&(h(d)||(d=this.getOptionsFromTag()),this.id=Math.random().toString(36).substr(2,5),this.state={},this.options=d||{},this.options.min=h(this.options.min)?$(this.options.min):0,this.options.max=h(this.options.max)?$(this.options.max):100,this.options.value=h(this.options.value)?$(this.options.value):50,this.options.round=!h(this.options.round)||C(this.options.round),this.options.circle=!h(this.options.circle)||C(this.options.circle),this.options.padding=h(this.options.padding)?$(this.options.padding):4,this.options.radius=$(this.options.radius)||50,this.options.thickness=$(this.options.thickness)||10,this.options.bg=this.options.bg||"rgba(70, 130, 180, 0.15)",this.options.color=this.options.color||"mediumslateblue",this.options.transition=this.options.transition||"all 1.2s cubic-bezier(0.57, 0.13, 0.18, 0.98)",this.options.text=!!h(this.options.text)&&this.options.text,this.options.title=h(this.options.title)?this.options.title:function(){return"Donut Chart Graphic"},this.options.desc=h(this.options.desc)?this.options.desc:function(o){return"A donut chart ranging from "+o.min+" to "+o.max+" with a current value of "+o.value+"."},this.options.dir=!!h(this.options.dir)&&this.options.dir,this.options.dir||(this.options.dir=this.$wrapper.dir),this.options.dir||(this.options.dir=document.body.parentElement.dir),this.init()),this}).prototype.getOptionsFromTag=function(){return JSON.parse(JSON.stringify(this.$wrapper.dataset))},u.prototype.init=function(){var i;return(this.$wrapper.donutty=this).createState(),i=this.getDashValues(),this.createSvg(),this.createBg(i),this.createDonut(i),this.createText(),this.createAccessibility(),this.insertFragments(i),this},u.prototype.createState=function(){return this.state.min=this.options.min,this.state.max=this.options.max,this.state.value=this.options.value,this.state.bg=this.options.bg,this.state.color=this.options.color,this},u.prototype.createText=function(){return typeof this.options.text=="function"&&(this.$text=v.createElement("span"),this.$text.setAttribute("class","donut-text"),this.$text.style.opacity=0,this.updateText()),this},u.prototype.createAccessibility=function(){return this.$title=v.createElementNS(y,"title"),this.$title.setAttribute("id","chartTitle-"+this.id),this.$title.setAttribute("class","donut-title"),this.$desc=v.createElementNS(y,"desc"),this.$desc.setAttribute("id","chartDesc-"+this.id),this.$desc.setAttribute("class","donut-desc"),this.updateAccessibility(),this},u.prototype.createBg=function(i){return this.$bg=v.createElementNS(y,"circle"),this.$bg.setAttribute("cx","50%"),this.$bg.setAttribute("cy","50%"),this.$bg.setAttribute("r",this.options.radius),this.$bg.setAttribute("fill","transparent"),this.$bg.setAttribute("stroke",this.state.bg),this.$bg.setAttribute("stroke-width",this.options.thickness+this.options.padding),this.$bg.setAttribute("stroke-dasharray",i.full*i.multiplier),this.$bg.setAttribute("class","donut-bg"),this.options.round&&this.$bg.setAttribute("stroke-linecap","round"),this},u.prototype.createDonut=function(i){return this.$donut=v.createElementNS(y,"circle"),this.$donut.setAttribute("fill","transparent"),this.$donut.setAttribute("cx","50%"),this.$donut.setAttribute("cy","50%"),this.$donut.setAttribute("r",this.options.radius),this.$donut.setAttribute("stroke",this.state.color),this.$donut.setAttribute("stroke-width",this.options.thickness),this.$donut.setAttribute("stroke-dashoffset",i.full),this.$donut.setAttribute("stroke-dasharray",i.full),this.$donut.setAttribute("class","donut-fill"),this.$donut.style.opacity=0,this.options.round&&this.$donut.setAttribute("stroke-linecap","round"),this},u.prototype.createSvg=function(){var i=2*this.options.radius+this.options.thickness+1,d=this.options.round?this.options.thickness/3:0,o=this.options.circle?90+d:-225,M=this.options.dir==="rtl"?"-1, 1":"1, 1";return 0<=this.options.padding&&(i+=this.options.padding),this.$html=v.createDocumentFragment(),this.$svg=v.createElementNS(y,"svg"),this.$svg.setAttribute("xmlns",y),this.$svg.setAttribute("viewbox","0 0 "+i+" "+i),this.$svg.setAttribute("width","100%"),this.$svg.setAttribute("style","transform: scale("+M+") rotate("+o+"deg)"),this.$svg.setAttribute("preserveAspectRatio","xMidYMid meet"),this.$svg.setAttribute("class","donut"),this.$svg.setAttribute("role","img"),this.$svg.setAttribute("aria-labelledby","chartTitle-"+this.id+" chartDesc-"+this.id),this.$svg.setAttribute("role","img"),this},u.prototype.insertFragments=function(i){this.$svg.appendChild(this.$title),this.$svg.appendChild(this.$desc),this.$svg.appendChild(this.$bg),this.$svg.appendChild(this.$donut),this.$html.appendChild(this.$svg),this.$text&&this.$html.appendChild(this.$text),this.$wrapper.appendChild(this.$html),this.$wrapper.innerHTML=this.$wrapper.innerHTML,this.$svg=this.$wrapper.querySelector(".donut"),this.$bg=this.$wrapper.querySelector(".donut-bg"),this.$donut=this.$wrapper.querySelector(".donut-fill"),this.$title=this.$wrapper.querySelector(".donut-title"),this.$desc=this.$wrapper.querySelector(".donut-desc"),this.$text&&(this.$text=this.$wrapper.querySelector(".donut-text")),this.animate(i.fill,i.full)},u.prototype.getDashValues=function(){var i,d,o,M;return M=this.options.circle?1:.75,o=(i=2*Math.PI*this.options.radius)-i*M/100*(d=(this.state.value-this.state.min)/(this.state.max-this.state.min)*100),this.options.round&&this.options.circle&&d<100&&o<this.options.thickness&&(o=this.options.thickness),{fill:o,full:i,multiplier:M}},u.prototype.animate=function(i,d){var o=this;this.$bg.style.transition=this.options.transition,this.$donut.style.transition=this.options.transition,this.$text&&(this.$text.style.transition=this.options.transition),window.setTimeout(function(){o.$bg.setAttribute("stroke",o.state.bg),o.$bg.style.opacity=1,o.$donut.setAttribute("stroke-dashoffset",i),o.$donut.setAttribute("stroke-dasharray",d),o.$donut.setAttribute("stroke",o.state.color),o.$donut.style.opacity=1,o.$text&&(o.$text.style.opacity=1)},16)},u.prototype.updateText=function(){return typeof this.options.text=="function"&&(this.$text.innerHTML=this.options.text(this.state)),this},u.prototype.updateAccessibility=function(){return typeof this.options.title=="function"?this.$title.innerHTML=this.options.title(this.state):this.$title.innerHTML=this.options.title,typeof this.options.desc=="function"?this.$desc.innerHTML=this.options.desc(this.state):this.$desc.innerHTML=this.options.desc,this},u.prototype.set=function(i,d){var o;return h(i)&&h(d)&&(this.state[i]=d,o=this.getDashValues(),this.updateText(),this.updateAccessibility(),this.animate(o.fill,o.full)),this},u.prototype.setState=function(i){var d;return h(i.value)&&(this.state.value=i.value),h(i.min)&&(this.state.min=i.min),h(i.max)&&(this.state.max=i.max),h(i.bg)&&(this.state.bg=i.bg),h(i.color)&&(this.state.color=i.color),d=this.getDashValues(),this.updateText(),this.updateAccessibility(),this.animate(d.fill,d.full),this}})(document,window),function(v){var f=document,u=function(){var y=document.querySelectorAll("[data-donutty]");Array.prototype.forEach.call(y,function(h){new v(h)})};f.readyState==="complete"||f.readyState!=="loading"&&!f.documentElement.doScroll?u():f.addEventListener("DOMContentLoaded",u)}(Donutty);var dt=v=>`hello there ${v}`;console.log(dt("Keegan"));var F=document.createElement("canvas");F.style.width="100vw";F.style.height="100vh";document.body.appendChild(F);var pt=V.create(F,{resize:!0,useWorker:!0});pt({particleCount:100,spread:160});var vt=new Donutty(document.getElementById("donut"),{min:-50,max:50,value:11}),U=document.querySelector("h1");U&&(U.textContent="This is a heading for v0.2.0");})();
/**
 * Donutty ~ Create SVG donut charts with Javascript
 * 7/12/2021
 * @author simeydotme <simey.me@gmail.com>
 * @version 2.3.1
 * @license ISC
 * @link http://simey.me
 * @preserve
 */
//# sourceMappingURL=index.js.map
