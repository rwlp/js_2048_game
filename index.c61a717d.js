const t=new class{#t=4;#e=0;#s=[];#i="";#a=void 0;constructor(t){if(t)this.#s=this.#l(t),this.#a=this.#l();else{for(let t in this.#s=Array(this.#t).fill(0),this.#s)this.#s[t]=Array(this.#t).fill(0);this.#a=this.#l()}this.#i="idle"}moveLeft(){this.#h()}moveRight(){this.#o(),this.#h(),this.#o()}moveUp(){this.#n(),this.#h(),this.#n()}moveDown(){this.#n(),this.#o(),this.#h(),this.#o(),this.#n()}getScore(){return this.#e}getState(){return this.#l()}getStatus(){return this.#i}setStatus(t){this.#i=t}start(){this.#e=0,this.#i="playing",this.#s=this.#l(this.#a),this.#r(),this.#r()}restart(){this.#e=0,this.#i="playing",this.#s=this.#l(this.#a),this.#i="idle"}#r(){let t;let e=[];for(let t=0;t<this.#t;t++)for(let s=0;s<this.#t;s++)0===this.#s[t][s]&&e.push([t,s]);e.length>0&&(t=Math.floor(Math.random()*e.length),this.#s[e[t][0]][e[t][1]]=9>Math.floor(10*Math.random())?2:4)}#n(){let t;for(let e=0;e<this.#t;e++)for(let s=e;s<this.#t;s++)t=this.#s[e][s],this.#s[e][s]=this.#s[s][e],this.#s[s][e]=t}#o(){this.#s.forEach((t,e,s)=>s[e].reverse())}#d(){let t=[];for(let e=0;e<this.#t;e++)for(let s=0;s<this.#t;s++){if(0===this.#s[s][e]||(t.push(void 0!==this.#s[s-1]?this.#s[s-1][e]:void 0),t.push(void 0!==this.#s[s+1]?this.#s[s+1][e]:void 0),t.push(this.#s[s][e+1]),t.push(this.#s[s][e-1]),t.includes(0)||t.includes(this.#s[s][e])))return!1;t=[]}return!0}#l(t=this.#s){return t.map(t=>[...t])}#h(){if("playing"===this.#i){let t=this.#l().flat();for(let t in this.#s){let e=this.#s[t].filter(t=>0!==t),s=0;for(;s<e.length;){if(e[s+1]===e[s]){e[s+1]=0,e[s]*=2,this.#e+=e[s],2048===e[s]&&(this.#i="win"),s+=2;continue}s++}e=e.filter(t=>0!==t),this.#s[t]=[...e,...Array(this.#t-e.length).fill(0)]}this.#s.flat().some((e,s)=>e!==t[s])&&this.#r()}this.#i=this.#d()?"lose":this.#i}},e=document.getElementsByClassName("field-cell"),s=document.getElementsByClassName("game-score")[0],i=document.getElementsByClassName("button")[0],a=document.getElementsByClassName("message"),l={2:"field-cell--2",4:"field-cell--4",8:"field-cell--8",16:"field-cell--16",32:"field-cell--32",64:"field-cell--64",128:"field-cell--128",256:"field-cell--256",512:"field-cell--512",1024:"field-cell--1024",2048:"field-cell--2048"},h={idle:()=>{t.setStatus("playing"),h.playing(),a[0].classList.add("hidden"),a[1].classList.add("hidden"),a[2].classList.add("hidden"),a[3].classList.remove("hidden")},playing:()=>{for(let s=0;s<4;s++)for(let i=0;i<4;i++)e[4*s+i].textContent=t.getState()[s][i]||"";o(),s.textContent=t.getScore()},win:()=>{h.playing(),a[0].classList.add("hidden"),a[1].classList.remove("hidden"),a[2].classList.add("hidden"),a[3].classList.add("hidden")},lose:()=>{h.playing(),a[0].classList.remove("hidden"),a[1].classList.add("hidden"),a[2].classList.add("hidden"),a[3].classList.add("hidden")}},o=()=>{for(let t of e)t.className=l[t.textContent]?"field-cell "+l[t.textContent]:"field-cell"};document.addEventListener("keydown",e=>{"playing"===t.getStatus()&&("ArrowDown"===e.key?(t.moveDown(),function(t){h[t]()}(t.getStatus())):"ArrowUp"===e.key?(t.moveUp(),function(t){h[t]()}(t.getStatus())):"ArrowRight"===e.key?(t.moveRight(),function(t){h[t]()}(t.getStatus())):"ArrowLeft"===e.key&&(t.moveLeft(),function(t){h[t]()}(t.getStatus())))}),i.addEventListener("click",e=>{t.start(),function(t){h[t]()}(t.getStatus()),o(),i.classList.add("restart")});
//# sourceMappingURL=index.c61a717d.js.map
