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
P.reveal=(...ks)=>ks.forEach(k=>{if(P.revealed[k])return;P.revealed[k]=1;P.drawPred(k)});
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
P.lines=[];P.nodes=[];P.subjects=P.subjects||[];
/* standalone pages (e.g. the periodic table): {match(id), show(id), hide()}; homeExtra[subject]() adds html above that subject's timeline */
P.pages=[];P.homeExtra={};P.tabs=[];
P.subjNav=act=>P.subjects.map(s=>`<button aria-pressed="${s.id===act}" data-s="${s.id}" style="--ec:${s.c}">${P.t(s.z,s.e)}${s.ready?'':`<small>${P.t('即將推出','soon')}</small>`}</button>`).join('')+P.tabs.map(x=>`<button aria-pressed="${x.id===act}" data-go="${x.id}" style="--ec:${x.c}">${P.t(x.z,x.e)}</button>`).join('');
P.addSubject=(sid,d)=>{d.lines.forEach(l=>l.s=sid);P.lines.push(...d.lines);P.nodes.push(...d.nodes);
 const li=id=>P.lines.findIndex(l=>l.id===id);P.nodes.sort((a,b)=>li(a.l)-li(b.l)||(a.ord??a.yr)-(b.ord??b.yr))};
P.lineNodes=l=>P.nodes.filter(n=>n.l===l);
P.node=id=>P.nodes.find(n=>n.id===id);
const t=(...a)=>P.t(...a),ty=(...a)=>P.ty(...a);
const lnum=n=>P.lineNodes(n.l).indexOf(n)+1;
const st={sub:'physics',view:'topic',topic:'all'};try{Object.assign(st,JSON.parse(localStorage.getItem('tl-state')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('tl-state',JSON.stringify(st))}catch(e){}};
const LN=id=>P.lines.find(l=>l.id===id);
const card=(n,tag)=>{const on=!!P.lessons[n.id],L=LN(n.l),T=on?'a':'div';
 return `<${T} class="vc ${on?'':'off'}" style="--ec:${L.c}" ${on?`href="#${n.id}"`:''}>${tag?`<span class="vtag">${t(L.z,L.e)} ${lnum(n)}</span>`:`<span class="vnum">${lnum(n)}</span>`}<b>${t(n.z,n.e)}</b><span class="vq">${t(...n.q)}</span><span class="vgo">${on?t('進入 →','Open →'):t('即將推出','Coming soon')}</span></${T}>`};
const row=(yr,body,cls='',c)=>`<div class="vr ${cls}" ${c?`style="--ec:${c}"`:''}><div class="vy">${yr}</div><div class="vd"><i></i></div><div class="vb">${body}</div></div>`;
const drawHome=()=>{const S=P.subjects.find(s=>s.id===st.sub)||P.subjects[0];
 P.$('subj').innerHTML=P.subjNav(S.id);
 P.$('sh1').innerHTML=t(...S.title);P.$('slede').innerHTML=t(...S.lede);
 const lines=P.lines.filter(l=>l.s===S.id);
 if(!S.ready){P.$('ctl').hidden=true;P.$('vt').innerHTML=`<div class="soon"><p>${t(...S.plan)}</p></div>`;return}
 P.$('ctl').hidden=false;if(st.topic!=='all'&&!lines.find(l=>l.id===st.topic))st.topic='all';
 P.$('vsw').innerHTML=[['topic','依主題','By topic'],['era','依年代','By era']].map(v=>`<button aria-pressed="${st.view===v[0]}" data-v="${v[0]}">${t(v[1],v[2])}</button>`).join('');
 P.$('tchips').innerHTML=[{id:'all',z:'全部',e:'All',c:'var(--ink)'},...lines].map(l=>`<button aria-pressed="${st.topic===l.id}" data-t="${l.id}" style="--ec:${l.c}">${t(l.z,l.e)}</button>`).join('');
 const sel=st.topic==='all'?lines:lines.filter(l=>l.id===st.topic);let h='';
 if(st.view==='topic'){sel.forEach(L=>{const ns=P.lineNodes(L.id);
  h+=`<section class="vs"><header class="vh" style="--ec:${L.c}"><h2>${t(L.z,L.e)}</h2><p>${t(...L.d)}</p><small>${t(`${ns.length} 個節點 · ${ns[0].yz} → ${ns[ns.length-1].yz}`,`${ns.length} nodes · ${ns[0].ye} → ${ns[ns.length-1].ye}`)}</small></header><div class="vl">`+ns.map(n=>row(ty(n.yz,n.ye),card(n),'',L.c)).join('')+`</div></section>`})}
 else{const ids=new Set(sel.map(l=>l.id));P.eras.forEach(E=>{const ns=P.nodes.filter(n=>ids.has(n.l)&&n.yr>=E.r[0]&&n.yr<E.r[1]).map(n=>({y:n.yr,h:row(ty(n.yz,n.ye),card(n,1),'',LN(n.l).c)}));
  const ws=E.w2.map(w=>({y:(+String(w[1]).match(/\d+/)[0])*(String(w[1]).includes('BCE')?-1:1)+.1,h:row(ty(w[0],w[1]),`<div class="vw ${w[4]?'link':''}">${t(w[2],w[3])}</div>`,'w')}));
  const nt=E.nt&&!Array.isArray(E.nt)?E.nt[S.id]:E.nt;if(!ns.length&&!nt)return;
  const items=[...ns,...ws].sort((a,b)=>a.y-b.y).map(x=>x.h).join('');
  h+=`<section class="vs"><header class="vh era" style="--ec:${E.c}"><h2>${t(E.z,E.e)}</h2><small>${ty(E.y[0],E.ye[0])} – ${ty(E.y[1],E.ye[1])}</small>${nt?`<p>${t(...nt)}</p>`:''}</header><div class="vl">${items}</div></section>`})}
 P.$('vt').innerHTML=(P.homeExtra[S.id]?P.homeExtra[S.id]():'')+h};
document.addEventListener('click',e=>{const g=e.target.closest('.subj [data-go]');if(g){location.hash=g.dataset.go;return}
 const s=e.target.closest('.subj [data-s]');if(s){st.sub=s.dataset.s;st.topic='all';save();drawHome();if(location.hash.slice(1)&&location.hash!=='#home')location.hash='home';return}
 const v=e.target.closest('#vsw button');if(v){st.view=v.dataset.v;save();drawHome();return}
 const tp=e.target.closest('#tchips button');if(tp){st.topic=tp.dataset.t;save();drawHome();P.$('ctl').scrollIntoView({block:'start'})}});
const drawRail=()=>{const cur=P.node(P.cur);if(!cur)return;const L=P.lines.find(l=>l.id===cur.l);
 P.$('rail').innerHTML=`<div class="rl" style="--ec:${L.c}"><b>${t(L.z,L.e)}</b></div>`+P.lineNodes(cur.l).map(n=>{const on=!!P.lessons[n.id];return `<${on?'a':'div'} class="node ${n.id===P.cur?'on':''} ${on?'':'off'}" ${on?`href="#${n.id}"`:''}><small>${lnum(n)} · ${ty(n.yz,n.ye)}</small><b>${t(n.z,n.e)}</b></${on?'a':'div'}>`}).join('');
 const on=P.$('rail').querySelector('.on');if(on)on.scrollIntoView({block:'nearest',inline:'center'})};
P.reg=(id,def)=>{P.lessons[id]=def};
/* standard lesson shell pieces */
P.nextBand=(id,zq,eq,zp,ep)=>{const n0=P.node(id),ln=P.lineNodes(n0.l),n=ln[ln.indexOf(n0)+1];return `<section class="band next" id="${id}-next"><div class="wrap">
 <span class="chip">${P.b('這個答案帶出的新問題','The new question this answer creates')}</span>
 <h2>${P.b(zq,eq)}</h2><p>${P.b(zp,ep)}</p>
 ${n?`<a class="btn pri" href="#${n.id}">${P.b('下一個節點：'+n.z+' →','Next node: '+n.e+' →')}</a>`:''}</div></section>`};
P.adv=items=>`<section class="band adv"><div class="wrap"><details><summary><span class="chip">${P.b('進階','Advanced')}</span> <b>${P.b('代數推導：給想知道「為什麼」的人','Algebraic derivations: for anyone who wants the why')}</b></summary>
 ${items.map(it=>`<div class="advi"><h3>${P.b(it[0],it[1])}</h3>${it[2].map(x=>typeof x==='string'?`<div class="eq">${x.slice(1)}</div>`:`<p>${P.b(x[0],x[1])}</p>`).join('')}</div>`).join('')}</details></div></section>`;
P.std=(z,e)=>`<footer class="band"><div class="wrap std"><p style="margin:0"><b>${P.b('加州 NGSS 對應','California NGSS alignment')}</b><br>${P.b(z,e)}</p></div></footer>`;

P.bars=(id,rows)=>{P.$(id).innerHTML=rows.map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${Math.max(0,Math.min(100,r[1]/r[2]*100))}%;background:${r[4]||'var(--mo)'}"></div></div><span class="v">${r[3]}</span></div>`).join('')};
P.anim=(cid,fn)=>P.run(dt=>{const c=P.$(cid);if(!c||!c.isConnected)return false;if(c.closest('main.lesson')?.hidden)return;return fn(dt)});
P.cv=(id,fn)=>{const c=P.$(id);const d=()=>{const[x,W,H]=P.fit(c);if(W<10||H<60)return;x.clearRect(0,0,W,H);fn(x,W,H)};P.watch(c,d);return d};
/* lesson builder: data -> standard lesson html */
P.ps=a=>(a||[]).map(p=>typeof p==='string'?p:`<p>${P.b(p[0],p[1])}</p>`).join('');
P.build=(id,d)=>{const b=P.b,n=P.node(id),L=P.lines.find(l=>l.id===n.l),i=P.lineNodes(n.l).indexOf(n)+1;
 const pred=([k,z,e])=>`<div><h3>${b(z,e)}</h3><div class="opts" id="p${k}"></div><div id="f${k}"></div></div>`;
 const cards=cs=>`<div class="${cs.length>2?'mis':'two'}" style="margin-top:0">${cs.map(c=>`<div class="${cs.length>2?'mc':'card'}"><h3>${b(c[0],c[1])}</h3><p style="margin:0">${b(c[2],c[3])}</p></div>`).join('')}</div>`;
 const sec=(chip,h,body,extra='')=>`<section class="band" ${extra}><div class="wrap"><span class="chip">${b(...chip)}</span><h2>${b(...h)}</h2>${body}</div></section>`;
 let h=`<section class="band"><div class="wrap hero"><div><span class="chip">${b(`${L.z} ${i} · ${n.yz}`,`${L.e} ${i} · ${n.ye}`)}</span><h1>${b(...d.title)}</h1><p class="lede" style="margin-top:14px">${b(...d.lede)}</p></div></div></section>`;
 h+=sec(['舊觀念','The old idea'],d.old.h,(d.old.cards?cards(d.old.cards):'')+(d.old.p?`<div style="margin-top:14px">${P.ps(d.old.p)}</div>`:''));
 h+=sec(['對不上的地方','The contradiction'],d.con.h,d.con.svg?`<div class="two"><div>${P.ps(d.con.p)}</div><div>${d.con.svg}</div></div>`:P.ps(d.con.p));
 d.exps.forEach((x,j)=>{h+=sec(x.chip||['先預測，再實驗','Predict, then test'],x.h,P.ps(x.intro)+(x.preds?`<div class="${x.preds.length>1?'two':''}">${x.preds.map(pred).join('')}</div>`:'')+x.sim+P.ps(x.after),`id="${id}-x${j}"`)});
 h+=sec(['新想法','The new idea'],d.idea.h,`<div class="two"><div>${P.ps(d.idea.p)}</div><div class="key" style="margin-top:0"><div class="big">${typeof d.idea.key[0]==='string'&&d.idea.key.length===3?d.idea.key[0]:b(d.idea.key[0],d.idea.key[1])}</div><p style="margin:6px 0 0">${d.idea.key.length===3?b(d.idea.key[1],d.idea.key[2]):b(d.idea.key[2],d.idea.key[3])}</p></div></div>${P.ps(d.idea.after)}`,`id="${id}-idea"`);
 h+=P.adv(d.adv);
 h+=sec(['拿來用','Use it'],d.apply.h,d.apply.q.map(q=>q[0]==='n'?P.qhtml(q[1],q[2],q[3],q[4]):P.phtml(q[1],q[2],q[3])).join('')+
  `<div class="q" style="border:0"><h3>${b(...d.pencil.h)}</h3><p>${b(...d.pencil.p)}</p><button data-show="${id}-pans">${b('我畫好了，看答案','I\'ve drawn it, show me')}</button><div id="${id}-pans" class="hide" style="margin-top:14px">${d.pencil.ans}</div></div>`,`id="${id}-apply"`);
 h+=d.next?P.nextBand(id,...d.next):(d.finale||'');
 h+=P.std(...d.std);return h};
/* small canvas helpers */
P.arrow=(x,_,x1,y1,x2,y2,c,w=3)=>{const a=Math.atan2(y2-y1,x2-x1),L=Math.hypot(x2-x1,y2-y1);if(L<2)return;x.strokeStyle=c;x.fillStyle=c;x.lineWidth=w;x.beginPath();x.moveTo(x1,y1);x.lineTo(x2-Math.cos(a)*8,y2-Math.sin(a)*8);x.stroke();x.beginPath();x.moveTo(x2,y2);x.lineTo(x2-Math.cos(a-.45)*12,y2-Math.sin(a-.45)*12);x.lineTo(x2-Math.cos(a+.45)*12,y2-Math.sin(a+.45)*12);x.fill()};
P.seg=(el,opts,cur,on)=>{const r=()=>{P.$(el).innerHTML=opts.map(o=>`<button aria-pressed="${cur()===o[0]}" data-v="${o[0]}">${P.t(o[1],o[2])}</button>`).join('')};P.$(el).onclick=e=>{const bt=e.target.closest('button');if(!bt)return;on(bt.dataset.v);r()};P.onLang(r);r();return r};
P.slider=(id,fmt,on)=>{const el=P.$(id),out=P.$(id+'v'),f=()=>{if(out)out.textContent=fmt(+el.value)};el.oninput=()=>{f();on(+el.value)};f()};
P.sl=(id,z,e,min,max,step,val)=>`<label>${P.b(z,e)} <input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}"> <span class="read" id="${id}v"></span></label>`;
const route=()=>{const id=location.hash.slice(1),les=P.lessons[id],pg=!les&&P.pages.find(p=>p.match(id));
 P.$('home').hidden=!!(les||pg);P.$('rail').hidden=!les;R.classList.toggle('inlesson',!!(les||pg));
 document.querySelectorAll('main.lesson').forEach(m=>m.hidden=m.dataset.id!==id);
 P.pages.forEach(p=>{if(p!==pg)p.hide()});if(pg)pg.show(id);
 if(les){P.cur=id;if(!les.root){const m=document.createElement('main');m.className='lesson';m.dataset.id=id;m.innerHTML=les.html;const nd=P.nodes.find(n=>n.id===id),hd=m.querySelector('.hero>div');if(nd&&hd)hd.insertAdjacentHTML('beforeend',`<p class="dq">${P.b('核心問題：'+nd.q[0],'Driving question: '+nd.q[1])}</p>`);P.$('lessons').appendChild(m);les.root=m;les.init&&les.init(m)}drawRail()}
 scrollTo(0,0)};
const setLang=l=>{P.L=l;R.dataset.lang=l;R.lang=l==='en'?'en':'zh-Hant';
 ['both','zh','en'].forEach(k=>P.$('b'+k).setAttribute('aria-pressed',l===k));
 try{localStorage.setItem('phys-lang2',l)}catch(e){}
 drawHome();drawRail();Object.keys(P.preds).forEach(P.drawPred);Object.keys(P.qres).forEach(P.drawQ);P.cb.forEach(f=>{try{f()}catch(e){console.error(e)}})};
P.start=()=>{const hh=()=>R.style.setProperty('--hh',document.querySelector('.top').offsetHeight+'px');hh();addEventListener('resize',hh);['both','zh','en'].forEach(k=>P.$('b'+k).onclick=()=>setLang(k));
 let s='both';try{s=localStorage.getItem('phys-lang2')||'both'}catch(e){}
 addEventListener('hashchange',route);setLang(s);route()};
}
