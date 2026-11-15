/* core: language, routing, home timeline, prediction + quiz engines, canvas helpers */
{
const R=document.documentElement;
const P=window.P={L:'both',lessons:{},cb:[],preds:{},picked:{},revealed:{},hooks:[],nums:{},qres:{}};
P.b=(z,e)=>`<span class="zh">${z}</span><span class="en">${e}</span>`;
P.t=(z,e)=>P.L==='both'?P.b(z,e):P.L==='zh'?z:e;
P.tp=(z,e)=>P.L==='en'?e:z;
P.ty=(z,e)=>P.L==='zh'?z:e;
let probe;
P.css=n=>{if(!probe){probe=document.createElement('i');probe.style.display='none';document.body.appendChild(probe)}probe.style.color=`var(${n})`;return getComputedStyle(probe).color};
P.fit=c=>{const r=c.getBoundingClientRect(),d=devicePixelRatio||1;c.width=Math.max(1,r.width*d);c.height=Math.max(1,r.height*d);const x=c.getContext('2d');x.setTransform(d,0,0,d,0,0);return[x,r.width,r.height]};
P.watch=(el,fn)=>{new ResizeObserver(()=>fn()).observe(el);P.onLang(fn)};
P.onLang=f=>P.cb.push(f);
P.$=id=>document.getElementById(id);
P.show=id=>{const e=P.$(id);if(e){e.classList.remove('lock');e.classList.remove('hide')}};
/* animation: returns a stopper; step(dt) returns false to stop */
P.run=step=>{let last=performance.now(),alive=true;const f=now=>{if(!alive)return;const dt=Math.min(.05,(now-last)/1000);last=now;if(step(dt)===false){alive=false;return}requestAnimationFrame(f)};requestAnimationFrame(f);return()=>{alive=false}};
P.say=(who,z,e)=>`<div class="say"><div class="av ${who==='M'?'m':'l'}">${who}</div><div class="bub">${P.b(z,e)}</div></div>`;

/* predictions: <div class="opts" id="p{k}"></div><div id="f{k}"></div> */
P.pred=(k,def)=>{P.preds[k]=def;P.drawPred(k)};
P.drawPred=k=>{const p=P.preds[k],el=P.$('p'+k);if(!p||!el)return;const done=P.picked[k]!==undefined,mark=done&&(p.now||P.revealed[k]);
 el.innerHTML=p.o.map((o,i)=>`<button data-k="${k}" data-i="${i}" class="${P.picked[k]===i?'pick':''} ${mark&&i===p.c?'right':''}">${P.t(o[0],o[1])}</button>`).join('');
 const fb=P.$('f'+k);if(!fb)return;let h=done?`<div class="fb ${p.now&&P.picked[k]===p.c?'ok':''}">${P.t(...p.f[P.picked[k]])}</div>`:'';
 if(!p.now&&P.revealed[k])h+=`<div class="fb ok">${P.t('答案：','Answer: ')}${P.t(...p.o[p.c])}${done?(P.picked[k]===p.c?P.t('（你預測對了）',' (your prediction was right)'):P.t('（跟你的預測不同，想想看差在哪裡）',' (different from your prediction; think about why)')):''}</div>`;
 else if(!p.now)h+=`<button class="ansb" data-rv="${k}">${P.t('直接看答案','Show the answer')}</button>`;
 fb.innerHTML=h};
P.reveal=(...ks)=>ks.forEach(k=>{P.revealed[k]=1;P.drawPred(k)});
P.onPick=f=>P.hooks.push(f);
P.has=(...ks)=>ks.every(k=>P.picked[k]!==undefined);
/* gate a release button until predictions are made */
P.gate=(btn,keys,label)=>{const upd=()=>{const b=P.$(btn);if(!b)return;b.disabled=false;b.innerHTML=label()};P.onPick(upd);P.onLang(upd);upd();return upd};
/* numeric questions: <input id="q{k}"> <button data-q="{k}"> <div id="a{k}"> */
P.num=(k,ans,ok,hint,tol)=>{P.nums[k]={ans,ok,hint,tol:tol??Math.max(.01,Math.abs(ans)*.02)};P.drawQ(k)};
P.drawQ=k=>{const r=P.qres[k],el=P.$('a'+k),n=P.nums[k];if(!el)return;
 if(r==='show'){el.innerHTML=`<div class="fb ok">${P.t('答案：'+n.ans+'。'+n.ok[0].replace(/^對。/,''),'Answer: '+n.ans+'. '+n.ok[1].replace(/^Right\. /,''))}</div>`;return}
 el.innerHTML=(r===undefined?'':`<div class="fb ${r?'ok':''}">${P.t(...(r?n.ok:n.hint))}</div>`)+(r?'':`<button class="ansb" data-qa="${k}">${P.t('看答案','Show the answer')}</button>`)};
P.qhtml=(k,z,e,unit)=>`<div class="q"><h3>${P.b(z,e)}</h3><div class="row"><input type="number" step="any" id="q${k}" inputmode="decimal" aria-label="answer"> <span>${unit}</span><button data-q="${k}">${P.b('檢查','Check')}</button></div><div id="a${k}"></div></div>`;
P.phtml=(k,z,e)=>`<div class="q"><h3>${P.b(z,e)}</h3><div class="opts" id="p${k}"></div><div id="f${k}"></div></div>`;
document.addEventListener('click',e=>{
 const b=e.target.closest('.opts button');if(b){const k=b.dataset.k;P.picked[k]=+b.dataset.i;P.drawPred(k);P.hooks.forEach(f=>f(k));return}
 const rv=e.target.closest('[data-rv]');if(rv){P.reveal(rv.dataset.rv);return}
 const qa=e.target.closest('[data-qa]');if(qa){P.qres[qa.dataset.qa]='show';P.drawQ(qa.dataset.qa);return}
 const s=e.target.closest('[data-show]');if(s){P.show(s.dataset.show);return}
 const q=e.target.closest('[data-q]');if(q){const k=q.dataset.q,n=P.nums[k],v=parseFloat(P.$('q'+k).value);P.qres[k]=Math.abs(v-n.ans)<=n.tol;P.drawQ(k)}});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.matches('.q input')){const k=e.target.id.slice(1);document.querySelector(`[data-q="${k}"]`)?.click()}});

/* ---------- nodes + home ---------- */
P.nodes=[
 {id:'aristotle',z:'亞里斯多德',e:'Aristotle',yz:'約前 350',ye:'c. 350 BCE',q:['東西為什麼會動、為什麼會掉？','Why do things move, and why do they fall?']},
 {id:'galileo',z:'伽利略的斜坡',e:'Galileo\'s ramp',yz:'1604–1638',ye:'1604–1638',q:['掉落真的跟重量有關嗎？','Does falling really depend on weight?']},
 {id:'kepler',z:'克卜勒的軌道',e:'Kepler\'s orbits',yz:'1609–1619',ye:'1609–1619',q:['行星的軌道是什麼形狀？','What shape are the planets\' orbits?']},
 {id:'cannon',z:'牛頓的砲彈',e:'Newton\'s cannon',yz:'1687',ye:'1687',q:['丟出去的石頭跟月亮有什麼關係？','What does a thrown stone have to do with the Moon?']},
 {id:'gravity',z:'萬有引力',e:'Universal gravity',yz:'1687',ye:'1687',q:['離地球越遠，引力怎麼變？','How does gravity change with distance?']},
 {id:'fma',z:'F = ma',e:'F = ma',yz:'1687',ye:'1687',q:['力、質量和加速度是什麼關係？','How are force, mass, and acceleration related?']},
 {id:'energy',z:'能量守恆',e:'Conservation of energy',yz:'1840 年代',ye:'1840s',q:['東西停下來時，它的運動跑去哪裡了？','When something stops, where did its motion go?']},
 {id:'satellite',z:'設計一顆衛星',e:'Design a satellite',yz:'1957–今天',ye:'1957–today',q:['要多快、多高才能一直繞著地球轉？','How fast and how high to keep circling Earth?']}];
const eras=[
 {z:'古希臘',e:'Ancient Greece',y:['前 500','前 146'],ye:['500 BCE','146 BCE'],c:'#8a6a3a',w:250,p:[0],
  w2:[['約前 335','c. 335 BCE','亞里斯多德在雅典開設學校「呂克昂」','Aristotle opens his school, the Lyceum, in Athens'],['前 323','323 BCE','亞歷山大大帝去世，希臘文化傳遍地中海','Alexander the Great dies; Greek culture has spread across the Mediterranean']]},
 {z:'中世紀',e:'Middle Ages',y:['500','1400'],ye:['500','1400'],c:'#5b6475',w:210,p:[],
  nt:['亞里斯多德的物理在大學裡被當成標準答案，教了將近兩千年，幾乎沒有人去量。','Aristotle\'s physics was taught in universities as the answer for nearly two thousand years. Almost nobody measured it.'],
  w2:[['1088','1088','歐洲第一所大學在義大利波隆那成立','Europe\'s first university is founded in Bologna, Italy']]},
 {z:'文藝復興',e:'Renaissance',y:['1400','1600'],ye:['1400','1600'],c:'#2a7f9e',w:220,p:[],
  nt:['哥白尼在 1543 年提出地球繞太陽轉，天文學開始動搖。','In 1543 Copernicus proposed that Earth orbits the Sun, and astronomy started to shift.'],
  w2:[['約 1440','c. 1440','古騰堡印刷術，書和想法傳得更快','Gutenberg\'s printing press: books and ideas spread faster'],['1492','1492','哥倫布橫越大西洋','Columbus crosses the Atlantic']]},
 {z:'科學革命',e:'Scientific Revolution',y:['1600','1700'],ye:['1600','1700'],c:'#b8532a',w:780,cols:3,p:[1,2,3,4,5],
  w2:[['1607','1607','英國在北美建立詹姆斯鎮殖民地','England founds the Jamestown colony in North America'],['1620','1620','五月花號抵達麻州','The Mayflower arrives in Massachusetts'],['1665','1665','倫敦大瘟疫，劍橋大學關閉，牛頓回老家自己研究','The Great Plague closes Cambridge; Newton goes home and works on his own',1]]},
 {z:'工業革命',e:'Industrial Revolution',y:['1760','1900'],ye:['1760','1900'],c:'#7b4b6a',w:260,p:[6],
  w2:[['1769','1769','瓦特改良蒸汽機，熱可以變成運動','Watt improves the steam engine: heat can become motion',1],['1776','1776','美國《獨立宣言》','The U.S. Declaration of Independence'],['1848','1848','加州發現金礦，淘金熱開始','Gold is found in California; the Gold Rush begins']]},
 {z:'太空時代',e:'Space Age',y:['1950','今天'],ye:['1950','today'],c:'#1f4a8a',w:250,p:[7],
  w2:[['1957','1957','蘇聯發射第一顆人造衛星史普尼克','The Soviet Union launches Sputnik, the first artificial satellite',1],['1969','1969','阿波羅 11 號登陸月球','Apollo 11 lands on the Moon']]}];
const t=(...a)=>P.t(...a),ty=(...a)=>P.ty(...a);
const drawHome=()=>{P.$('track').innerHTML=eras.map(e=>{
 const pcs=e.p.map(i=>{const n=P.nodes[i];
  return `<a class="pc" href="#${n.id}"><span class="n">${i+1}</span><span class="y">${ty(n.yz,n.ye)}</span><b>${t(n.z,n.e)}</b><q>${t(...n.q)}</q><span class="go">${t('進入這一課 →','Start this lesson →')}</span></a>`}).join('')
  +(e.nt?`<div class="note">${t(...e.nt)}</div>`:'');
 const wcs=e.w2.map(w=>`<div class="wc ${w[4]?'link':''}"><b>${ty(w[0],w[1])}</b>${t(w[2],w[3])}</div>`).join('');
 return `<div class="era" style="--ec:${e.c};--w:${e.w}px"><div class="eh"><b>${t(e.z,e.e)}</b><small>${ty(e.y[0],e.ye[0])} – ${ty(e.y[1],e.ye[1])}</small></div><div class="lane" style="--cols:${e.cols||1}"><span class="lab">${t('物理','Physics')}</span>${pcs}</div><div class="ax"><span>${ty(e.y[0],e.ye[0])}</span><span>${ty(e.y[1],e.ye[1])}</span></div><div class="lane"><span class="lab">${t('同時期的世界','Meanwhile in the world')}</span>${wcs}</div></div>`}).join('')};
const drawRail=()=>{P.$('rail').innerHTML=P.nodes.map((n,i)=>`<a class="node ${n.id===P.cur?'on':''}" href="#${n.id}"><small>${i+1} · ${ty(n.yz,n.ye)}</small><b>${t(n.z,n.e)}</b></a>`).join('');
 const on=P.$('rail').querySelector('.on');if(on)on.scrollIntoView({block:'nearest',inline:'center'})};
P.reg=(id,def)=>{P.lessons[id]=def};
/* standard lesson shell pieces */
P.nextBand=(i,zq,eq,zp,ep)=>{const n=P.nodes[i+1];return `<section class="band next lock" id="${P.nodes[i].id}-next"><div class="wrap">
 <span class="chip">${P.b('這個答案帶出的新問題','The new question this answer creates')}</span>
 <h2>${P.b(zq,eq)}</h2><p>${P.b(zp,ep)}</p>
 ${n?`<a class="btn pri" href="#${n.id}">${P.b('下一個節點：'+n.z+' →','Next node: '+n.e+' →')}</a>`:''}</div></section>`};
P.adv=items=>`<section class="band adv"><div class="wrap"><details><summary><span class="chip">${P.b('進階','Advanced')}</span> <b>${P.b('代數推導：給想知道「為什麼」的人','Algebraic derivations: for anyone who wants the why')}</b></summary>
 ${items.map(it=>`<div class="advi"><h3>${P.b(it[0],it[1])}</h3>${it[2].map(x=>typeof x==='string'?`<div class="eq">${x.slice(1)}</div>`:`<p>${P.b(x[0],x[1])}</p>`).join('')}</div>`).join('')}</details></div></section>`;
P.std=(z,e)=>`<footer class="band"><div class="wrap std"><p style="margin:0"><b>${P.b('加州 NGSS 對應','California NGSS alignment')}</b><br>${P.b(z,e)}</p></div></footer>`;
const route=()=>{const id=location.hash.slice(1),les=P.lessons[id];
 P.$('home').hidden=!!les;P.$('rail').hidden=!les;R.classList.toggle('inlesson',!!les);
 document.querySelectorAll('main.lesson').forEach(m=>m.hidden=m.dataset.id!==id);
 if(les){P.cur=id;if(!les.root){const m=document.createElement('main');m.className='lesson';m.dataset.id=id;m.innerHTML=les.html;const nd=P.nodes.find(n=>n.id===id),hd=m.querySelector('.hero>div');if(nd&&hd)hd.insertAdjacentHTML('beforeend',`<p class="dq">${P.b('核心問題：'+nd.q[0],'Driving question: '+nd.q[1])}</p>`);P.$('lessons').appendChild(m);les.root=m;les.init&&les.init(m)}drawRail()}
 scrollTo(0,0)};
const setLang=l=>{P.L=l;R.dataset.lang=l;R.lang=l==='en'?'en':'zh-Hant';
 ['both','zh','en'].forEach(k=>P.$('b'+k).setAttribute('aria-pressed',l===k));
 try{localStorage.setItem('phys-lang2',l)}catch(e){}
 drawHome();drawRail();Object.keys(P.preds).forEach(P.drawPred);Object.keys(P.qres).forEach(P.drawQ);P.cb.forEach(f=>{try{f()}catch(e){console.error(e)}})};
P.start=()=>{['both','zh','en'].forEach(k=>P.$('b'+k).onclick=()=>setLang(k));
 let s='both';try{s=localStorage.getItem('phys-lang2')||'both'}catch(e){}
 addEventListener('hashchange',route);setLang(s);route()};
}
