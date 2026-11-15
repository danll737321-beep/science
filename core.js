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
P.lines=[{id:'mech',z:'力學',e:'Mechanics',c:'#b8532a'},{id:'thermo',z:'熱學',e:'Heat',c:'#c2410c'},{id:'em',z:'電與磁',e:'Electricity & Magnetism',c:'#2160d8'},{id:'waves',z:'波與光',e:'Waves & Light',c:'#0f8a8a'},{id:'modern',z:'近代物理',e:'Modern Physics',c:'#7b4b6a'}];
const N=(id,l,yr,z,e,yz,ye,qz,qe)=>({id,l,yr,z,e,yz,ye,q:[qz,qe]});
P.nodes=[
 N('aristotle','mech',-350,'亞里斯多德','Aristotle','約前 350','c. 350 BCE','東西為什麼會動、為什麼會掉？','Why do things move, and why do they fall?'),
 N('galileo','mech',1604,'伽利略的斜坡','Galileo\'s ramp','1604–1638','1604–1638','掉落真的跟重量有關嗎？','Does falling really depend on weight?'),
 N('kepler','mech',1609,'克卜勒的軌道','Kepler\'s orbits','1609–1619','1609–1619','行星的軌道是什麼形狀？','What shape are the planets\' orbits?'),
 N('cannon','mech',1687,'牛頓的砲彈','Newton\'s cannon','1687','1687','丟出去的石頭跟月亮有什麼關係？','What does a thrown stone have to do with the Moon?'),
 N('gravity','mech',1687,'萬有引力','Universal gravity','1687','1687','離地球越遠，引力怎麼變？','How does gravity change with distance?'),
 N('fma','mech',1687,'F = ma','F = ma','1687','1687','力、質量和加速度是什麼關係？','How are force, mass, and acceleration related?'),
 N('momentum','mech',1668,'動量守恆','Momentum','1668–1687','1668–1687','碰撞的時候，什麼東西前後不變？','In a collision, what stays the same?'),
 N('energy','mech',1845,'能量守恆','Conservation of energy','1840 年代','1840s','東西停下來時，它的運動跑去哪裡了？','When something stops, where did its motion go?'),
 N('satellite','mech',1957,'設計一顆衛星','Design a satellite','1957–今天','1957–today','要多快、多高才能一直繞著地球轉？','How fast and how high to keep circling Earth?'),
 N('black','thermo',1761,'溫度和熱','Temperature vs. heat','1761','1761','溫度和熱是同一件事嗎？','Are temperature and heat the same thing?'),
 N('carnot','thermo',1824,'熱機的極限','The limit of heat engines','1824','1824','蒸汽機的效率可以到 100% 嗎？','Can a steam engine reach 100% efficiency?'),
 N('clausius','thermo',1850,'熵','Entropy','1850–1865','1850–1865','熱為什麼只會從熱流到冷？','Why does heat only flow from hot to cold?'),
 N('kinetic','thermo',1860,'分子運動論','Kinetic theory','1857–1877','1857–1877','溫度到底是什麼在動？','What is actually moving when something is hot?'),
 N('gilbert','em',1600,'地球是一塊磁鐵','Earth is a magnet','1600','1600','指南針為什麼會指北？','Why does a compass point north?'),
 N('franklin','em',1752,'電荷','Electric charge','1745–1752','1745–1752','電是什麼？摩擦起電和閃電是同一件事嗎？','What is electricity? Are static sparks and lightning the same thing?'),
 N('coulomb','em',1785,'庫侖定律','Coulomb\'s law','1785','1785','電力有多強？距離變遠會怎樣？','How strong is the electric force, and how does it change with distance?'),
 N('volta','em',1800,'電池與電流','Batteries and current','1800–1827','1800–1827','能不能讓電一直流？','Can electricity be made to flow continuously?'),
 N('oersted','em',1820,'電流生磁','Current makes magnetism','1820','1820','電和磁之間有關係嗎？','Are electricity and magnetism connected?'),
 N('faraday','em',1831,'電磁感應','Electromagnetic induction','1831','1831','既然電能生磁，磁能不能生電？','If current makes magnetism, can magnetism make current?'),
 N('maxwell','em',1865,'電磁波','Electromagnetic waves','1865','1865','光到底是什麼？','What is light, really?'),
 N('huygens','waves',1678,'光是粒子還是波？','Particle or wave?','1678–1704','1678–1704','光是一顆一顆的粒子，還是一種波？','Is light made of particles or is it a wave?'),
 N('young','waves',1801,'雙狹縫','The double slit','1801','1801','怎麼證明光是波？','How can you prove light is a wave?'),
 N('doppler','waves',1842,'都卜勒效應','The Doppler effect','1842','1842','救護車經過時，聲音為什麼會變？','Why does a siren\'s pitch change as it passes?'),
 N('hertz','waves',1887,'看不見的光','Invisible light','1887','1887','電磁波真的存在嗎？','Do electromagnetic waves really exist?'),
 N('michelson','modern',1887,'找不到的以太','The missing ether','1887','1887','光在什麼東西裡傳播？','What does light travel through?'),
 N('relativity','modern',1905,'相對論','Relativity','1905','1905','如果光速對每個人都一樣，會發生什麼事？','If light\'s speed is the same for everyone, what follows?'),
 N('photon','modern',1905,'光子','The photon','1905','1905','為什麼紅光再亮也打不出電子？','Why can\'t even bright red light knock out electrons?'),
 N('rutherford','modern',1911,'原子核','The nucleus','1911','1911','原子裡面長什麼樣子？','What does the inside of an atom look like?'),
 N('bohr','modern',1913,'波耳的原子','Bohr\'s atom','1913','1913','為什麼每種元素只發出特定顏色的光？','Why does each element glow only in certain colors?'),
 N('hubble','modern',1929,'膨脹的宇宙','The expanding universe','1929','1929','宇宙是靜止的嗎？','Is the universe standing still?'),
 N('fission','modern',1938,'核分裂','Nuclear fission','1938','1938','原子核裡藏了多少能量？','How much energy is hidden in a nucleus?')];
P.nodes.sort((a,b)=>{const la=P.lines.findIndex(l=>l.id===a.l),lb=P.lines.findIndex(l=>l.id===b.l);return la-lb||(a.id==='momentum'?1687.5:a.yr)-(b.id==='momentum'?1687.5:b.yr)});
P.lineNodes=l=>P.nodes.filter(n=>n.l===l);
P.node=id=>P.nodes.find(n=>n.id===id);
const eras=[
 {z:'古希臘',e:'Ancient Greece',r:[-500,-146],y:['前 500','前 146'],ye:['500 BCE','146 BCE'],c:'#8a6a3a',
  w2:[['約前 335','c. 335 BCE','亞里斯多德在雅典開設學校「呂克昂」','Aristotle opens his school, the Lyceum, in Athens'],['前 323','323 BCE','亞歷山大大帝去世，希臘文化傳遍地中海','Alexander the Great dies; Greek culture has spread across the Mediterranean']]},
 {z:'中世紀',e:'Middle Ages',r:[500,1400],y:['500','1400'],ye:['500','1400'],c:'#5b6475',
  nt:['亞里斯多德的物理在大學裡被當成標準答案，教了將近兩千年，幾乎沒有人去量。','Aristotle\'s physics was taught in universities as the answer for nearly two thousand years. Almost nobody measured it.'],
  w2:[['1088','1088','歐洲第一所大學在義大利波隆那成立','Europe\'s first university is founded in Bologna, Italy']]},
 {z:'文藝復興',e:'Renaissance',r:[1400,1600],y:['1400','1600'],ye:['1400','1600'],c:'#2a7f9e',
  nt:['哥白尼在 1543 年提出地球繞太陽轉，天文學開始動搖。','In 1543 Copernicus proposed that Earth orbits the Sun, and astronomy started to shift.'],
  w2:[['約 1440','c. 1440','古騰堡印刷術，書和想法傳得更快','Gutenberg\'s printing press: books and ideas spread faster'],['1492','1492','哥倫布橫越大西洋','Columbus crosses the Atlantic']]},
 {z:'科學革命',e:'Scientific Revolution',r:[1600,1700],y:['1600','1700'],ye:['1600','1700'],c:'#b8532a',
  w2:[['1607','1607','英國在北美建立詹姆斯鎮殖民地','England founds the Jamestown colony in North America'],['1620','1620','五月花號抵達麻州','The Mayflower arrives in Massachusetts'],['1665','1665','倫敦大瘟疫，劍橋大學關閉，牛頓回老家自己研究','The Great Plague closes Cambridge; Newton goes home and works on his own',1]]},
 {z:'啟蒙時代',e:'Enlightenment',r:[1700,1780],y:['1700','1780'],ye:['1700','1780'],c:'#9a6b1f',
  w2:[['1751','1751','法國《百科全書》開始出版','The French Encyclopédie begins publication'],['1769','1769','瓦特改良蒸汽機，熱可以變成運動','Watt improves the steam engine: heat can become motion',1],['1776','1776','美國《獨立宣言》','The U.S. Declaration of Independence']]},
 {z:'工業革命',e:'Industrial Revolution',r:[1780,1900],y:['1780','1900'],ye:['1780','1900'],c:'#7b4b6a',
  w2:[['1789','1789','法國大革命','The French Revolution'],['1825','1825','英國第一條公共蒸汽鐵路通車','Britain\'s first public steam railway opens',1],['1848','1848','加州發現金礦，淘金熱開始','Gold is found in California; the Gold Rush begins'],['1861–1865','1861–1865','美國南北戰爭','The U.S. Civil War'],['1876','1876','貝爾取得電話專利','Bell patents the telephone',1],['1879','1879','愛迪生做出實用的電燈泡','Edison builds a practical light bulb',1]]},
 {z:'二十世紀前半',e:'Early 20th century',r:[1900,1950],y:['1900','1950'],ye:['1900','1950'],c:'#3d4f7a',
  w2:[['1903','1903','萊特兄弟第一次動力飛行','The Wright brothers make the first powered flight'],['1914–1918','1914–1918','第一次世界大戰','World War I'],['1939–1945','1939–1945','第二次世界大戰；1945 年原子彈在日本投下','World War II; atomic bombs are dropped on Japan in 1945',1]]},
 {z:'太空時代',e:'Space Age',r:[1950,2100],y:['1950','今天'],ye:['1950','today'],c:'#1f4a8a',
  w2:[['1957','1957','蘇聯發射第一顆人造衛星史普尼克','The Soviet Union launches Sputnik, the first artificial satellite',1],['1969','1969','阿波羅 11 號登陸月球','Apollo 11 lands on the Moon'],['1990','1990','哈伯太空望遠鏡發射','The Hubble Space Telescope is launched',1]]}];
const t=(...a)=>P.t(...a),ty=(...a)=>P.ty(...a);
const lnum=n=>P.lineNodes(n.l).indexOf(n)+1;
const card=n=>{const on=!!P.lessons[n.id],L=P.lines.find(l=>l.id===n.l),tag=on?'a':'div';
 return `<${tag} class="pc ${on?'':'off'}" style="--ec:${L.c}" ${on?`href="#${n.id}"`:''}><span class="n">${lnum(n)}</span><span class="y">${ty(n.yz,n.ye)}</span><b>${t(n.z,n.e)}</b><q>${t(...n.q)}</q><span class="go">${on?t('進入 →','Open →'):t('即將推出','Coming soon')}</span></${tag}>`};
const drawHome=()=>{const cols=eras.length;let h=`<div class="gl" style="grid-template-columns:var(--labw) repeat(${cols},max-content)">`;
 h+=`<div class="lh sticky"></div>`+eras.map(e=>`<div class="eh" style="--ec:${e.c}"><b>${t(e.z,e.e)}</b><small>${ty(e.y[0],e.ye[0])} – ${ty(e.y[1],e.ye[1])}</small></div>`).join('');
 P.lines.forEach(L=>{h+=`<div class="lh sticky" style="--ec:${L.c}"><b>${t(L.z,L.e)}</b></div>`;
  eras.forEach(e=>{const ns=P.lineNodes(L.id).filter(n=>n.yr>=e.r[0]&&n.yr<e.r[1]);
   h+=`<div class="cell">${ns.map(card).join('')}${(!ns.length&&e.nt&&L.id==='mech')?`<div class="note">${t(...e.nt)}</div>`:''}</div>`})});
 h+=`<div class="lh sticky"></div>`+eras.map(e=>`<div class="ax" style="--ec:${e.c}"><span>${ty(e.y[0],e.ye[0])}</span><span>${ty(e.y[1],e.ye[1])}</span></div>`).join('');
 h+=`<div class="lh sticky"><b>${t('同時期的世界','Meanwhile in the world')}</b></div>`+eras.map(e=>`<div class="cell wcell" style="--ec:${e.c}">${e.w2.map(w=>`<div class="wc ${w[4]?'link':''}"><b>${ty(w[0],w[1])}</b>${t(w[2],w[3])}</div>`).join('')}</div>`).join('');
 P.$('track').innerHTML=h+'</div>'};
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
