import{n as b,s as p}from"./scheduler.c0a1a04b.js";const e=[];function g(i,a=b){let o;const n=new Set;function r(t){if(p(i,t)&&(i=t,o)){const c=!e.length;for(const s of n)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(i))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(o=a(r,f)||b),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:f,subscribe:_}}var l;const d=((l=globalThis.__sveltekit_1mwjid8)==null?void 0:l.base)??"/slick-portfolio-svelte";var u;const m=((u=globalThis.__sveltekit_1mwjid8)==null?void 0:u.assets)??d;export{m as a,d as b,g as w};
