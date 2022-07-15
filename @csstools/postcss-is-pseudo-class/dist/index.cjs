"use strict";var e=require("postcss-selector-parser"),s=require("@csstools/selector-specificity");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e);function t(e,s){return n.default.isPseudoElement(e)?d.pseudoElement:d[s]}const d={universal:0,tag:1,pseudoElement:2,id:3,class:4,attribute:5,pseudo:6,selector:7,string:8,root:9,comment:10};function r(e,s,o,d){return e.flatMap((e=>{if(-1===e.indexOf(":-csstools-matches")&&-1===e.indexOf(":is"))return e;const r=n.default().astSync(e);return r.walkPseudos((e=>{if(":is"===e.value&&e.nodes&&e.nodes.length&&"selector"===e.nodes[0].type&&0===e.nodes[0].nodes.length)return e.value=":not",void e.nodes[0].append(n.default.universal());if(":-csstools-matches"===e.value)if(!e.nodes||e.nodes.length){if(e.walkPseudos((e=>{if(n.default.isPseudoElement(e)){let s=e.value;if(s.startsWith("::-csstools-invalid-"))return;for(;s.startsWith(":");)s=s.slice(1);e.value=`::-csstools-invalid-${s}`,d()}})),1===e.nodes.length&&"selector"===e.nodes[0].type){if(1===e.nodes[0].nodes.length)return void e.replaceWith(e.nodes[0].nodes[0]);if(!e.nodes[0].some((e=>"combinator"===e.type)))return void e.replaceWith(...e.nodes[0].nodes)}1!==r.nodes.length||"selector"!==r.nodes[0].type||1!==r.nodes[0].nodes.length||r.nodes[0].nodes[0]!==e?function(e){return!(!e||!e.nodes||"selector"!==e.type||3!==e.nodes.length||!e.nodes[0]||"pseudo"!==e.nodes[0].type||":-csstools-matches"!==e.nodes[0].value||!e.nodes[1]||"combinator"!==e.nodes[1].type||"+"!==e.nodes[1].value||!e.nodes[2]||"pseudo"!==e.nodes[2].type||":-csstools-matches"!==e.nodes[2].value||!e.nodes[0].nodes||1!==e.nodes[0].nodes.length||"selector"!==e.nodes[0].nodes[0].type||!e.nodes[0].nodes[0].nodes||3!==e.nodes[0].nodes[0].nodes.length||!e.nodes[0].nodes[0].nodes||"combinator"!==e.nodes[0].nodes[0].nodes[1].type||">"!==e.nodes[0].nodes[0].nodes[1].value||!e.nodes[2].nodes||1!==e.nodes[2].nodes.length||"selector"!==e.nodes[2].nodes[0].type||!e.nodes[2].nodes[0].nodes||3!==e.nodes[2].nodes[0].nodes.length||!e.nodes[2].nodes[0].nodes||"combinator"!==e.nodes[2].nodes[0].nodes[1].type||">"!==e.nodes[2].nodes[0].nodes[1].value||(e.nodes[0].nodes[0].insertAfter(e.nodes[0].nodes[0].nodes[0],e.nodes[2].nodes[0].nodes[0].clone()),e.nodes[2].nodes[0].nodes[1].remove(),e.nodes[2].nodes[0].nodes[0].remove(),e.nodes[0].replaceWith(e.nodes[0].nodes[0]),e.nodes[2].replaceWith(e.nodes[2].nodes[0]),0))}(e.parent)||function(e){if(!e||!e.nodes)return!1;if("selector"!==e.type)return!1;if(2!==e.nodes.length)return!1;let s,o;return e.nodes[0]&&"pseudo"===e.nodes[0].type&&":-csstools-matches"===e.nodes[0].value?(s=0,o=1):e.nodes[1]&&"pseudo"===e.nodes[1].type&&":-csstools-matches"===e.nodes[1].value&&(s=1,o=0),!(!s||!e.nodes[o]||"selector"===e.nodes[o].type&&e.nodes[o].some((e=>"combinator"===e.type||n.default.isPseudoElement(e)))||(e.nodes[s].append(e.nodes[o].clone()),e.nodes[s].replaceWith(...e.nodes[s].nodes),e.nodes[o].remove(),0))}(e.parent)||("warning"===s.onComplexSelector&&o(),e.value=":is"):e.replaceWith(...e.nodes[0].nodes)}else e.remove()})),r.walk((e=>{"selector"===e.type&&"nodes"in e&&1===e.nodes.length&&"selector"===e.nodes[0].type&&e.replaceWith(e.nodes[0])})),r.walk((e=>{"nodes"in e&&function(e){if(!e||!e.nodes)return;const s=[];let o=[];for(let t=0;t<e.nodes.length;t++)"combinator"!==e.nodes[t].type?n.default.isPseudoElement(e.nodes[t])?(s.push(o),o=[e.nodes[t]]):o.push(e.nodes[t]):(s.push(o),s.push([e.nodes[t]]),o=[]);s.push(o);const d=[];for(let e=0;e<s.length;e++){const o=s[e];o.sort(((e,s)=>"selector"===e.type&&"selector"===s.type&&e.nodes.length&&s.nodes.length?t(e.nodes[0],e.nodes[0].type)-t(s.nodes[0],s.nodes[0].type):"selector"===e.type&&e.nodes.length?t(e.nodes[0],e.nodes[0].type)-t(s,s.type):"selector"===s.type&&s.nodes.length?t(e,e.type)-t(s.nodes[0],s.nodes[0].type):t(e,e.type)-t(s,s.type)));for(let e=0;e<o.length;e++)d.push(o[e])}for(let s=d.length-1;s>=0;s--)d[s].remove(),e.prepend(d[s])}(e)})),r.toString()})).filter((e=>!!e))}function l(e,o,t=0){const d=":not(#"+o.specificityMatchingName+")",r=":not(."+o.specificityMatchingName+")",c=":not("+o.specificityMatchingName+")";return e.flatMap((e=>{if(-1===e.indexOf(":is"))return e;let i=!1;const a=[];if(n.default().astSync(e).walkPseudos((e=>{if(":is"!==e.value||!e.nodes||!e.nodes.length)return;if("selector"===e.nodes[0].type&&0===e.nodes[0].nodes.length)return;let o=e.parent;for(;o;){if(":is"===o.value&&"pseudo"===o.type)return void(i=!0);o=o.parent}const n=s.selectorSpecificity(e),t=e.sourceIndex,l=t+e.toString().length,u=[];e.nodes.forEach((e=>{const o={start:t,end:l,option:""},i=s.selectorSpecificity(e);let a=e.toString().trim();const p=Math.max(0,n.a-i.a),f=Math.max(0,n.b-i.b),h=Math.max(0,n.c-i.c);for(let e=0;e<p;e++)a+=d;for(let e=0;e<f;e++)a+=r;for(let e=0;e<h;e++)a+=c;o.option=a,u.push(o)})),a.push(u)})),!a.length)return[e];let u=[];return function(...e){const s=[],o=e.length-1;function n(t,d){for(let r=0,l=e[d].length;r<l;r++){const l=t.slice(0);l.push(e[d][r]),d==o?s.push(l):n(l,d+1)}}return n([],0),s}(...a).forEach((s=>{let o="";for(let t=0;t<s.length;t++){var n;const d=s[t];o+=e.substring((null==(n=s[t-1])?void 0:n.end)||0,s[t].start),o+=":-csstools-matches("+d.option+")",t===s.length-1&&(o+=e.substring(s[t].end))}u.push(o)})),i&&t<10&&(u=l(u,o,t+1)),u})).filter((e=>!!e))}const c=e=>{const s={specificityMatchingName:"does-not-exist",...e||{}};return{postcssPlugin:"postcss-is-pseudo-class",Rule(e,{result:o}){if(!e.selector)return;if(-1===e.selector.indexOf(":is"))return;let n=!1;const t=()=>{"warning"===s.onComplexSelector&&(n||(n=!0,e.warn(o,`Complex selectors in '${e.selector}' can not be transformed to an equivalent selector without ':is()'.`)))};let d=!1;const c=()=>{"warning"===s.onPseudoElement&&(d||(d=!0,e.warn(o,`Pseudo elements are not allowed in ':is()', unable to transform '${e.selector}'`)))};try{let o=!1;const n=[],d=r(l(e.selectors,{specificityMatchingName:s.specificityMatchingName}),{onComplexSelector:s.onComplexSelector},t,c);if(Array.from(new Set(d)).forEach((s=>{e.selectors.indexOf(s)>-1?n.push(s):(e.cloneBefore({selector:s}),o=!0)})),n.length&&o&&e.cloneBefore({selectors:n}),!s.preserve){if(!o)return;e.remove()}}catch(s){if(s.message.indexOf("call stack size exceeded")>-1)throw s;e.warn(o,`Failed to parse selector "${e.selector}"`)}}}};c.postcss=!0,module.exports=c;