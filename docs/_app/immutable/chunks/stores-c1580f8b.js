import{O as e}from"./index-e92758bc.js";const t=()=>{const s=e("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},get session(){return r(),{}},updated:s.updated}},n={subscribe(s){return t().page.subscribe(s)}};function r(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}export{n as p};
