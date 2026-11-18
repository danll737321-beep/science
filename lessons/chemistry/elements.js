/* Interactive periodic table (#elements) and one page per element (#el-Fe).
   Data: data/elements.js (P.EL). Positions, categories, and electron configurations are computed here. */
{
const b=P.b,t=(...a)=>P.t(...a),tp=(...a)=>P.tp(...a);
const E=P.EL.map((r,i)=>({Z:i+1,sym:r[0],zh:r[1],en:r[2],mass:r[3],st:r[4],en_:r[5],yr:r[6],wz:r[7],we:r[8],dz:r[9],de:r[10]}));
const bySym={};E.forEach(e=>bySym[e.sym]=e);

/* ---------- position ---------- */
const PS=[0,2,10,18,36,54,86,118];
E.forEach(e=>{const Z=e.Z;let p=1;while(Z>PS[p])p++;const i=Z-PS[p-1]-1;e.period=p;
 if(p===1){e.group=Z===1?1:18}
 else if(p<=3){e.group=i<2?i+1:i+11}
 else if(p<=5){e.group=i+1}
 else{if(i<2)e.group=i+1;else if(i<=16){e.group=null;e.frow=p===6?'lan':'act';e.fi=i-2}else e.group=i-13}
 if(e.group){e.row=p;e.col=e.group}else{e.row=p===6?9:10;e.col=e.fi+3}
 e.block=!e.group?'f':(e.group<=2||e.Z===2)?'s':e.group>=13?'p':'d'});

/* ---------- category ---------- */
const CAT={alkali:['鹼金屬','Alkali metal','#e03131'],alkaline:['鹼土金屬','Alkaline earth metal','#f76707'],transition:['過渡金屬','Transition metal','#1c7ed6'],post:['貧金屬','Post-transition metal','#74b816'],metalloid:['類金屬','Metalloid','#0ca678'],nonmetal:['非金屬','Nonmetal','#e8a30c'],halogen:['鹵素','Halogen','#e64980'],noble:['惰性氣體','Noble gas','#7048e8'],lan:['鑭系元素','Lanthanide','#15aabf'],act:['錒系元素','Actinide','#a0522d'],unk:['性質未知','Properties unknown','#868e96']};
const inS=(Z,s)=>s.includes(Z);
E.forEach(e=>{const Z=e.Z;e.cat=
 inS(Z,[3,11,19,37,55,87])?'alkali':inS(Z,[4,12,20,38,56,88])?'alkaline':inS(Z,[1,6,7,8,15,16,34])?'nonmetal':inS(Z,[9,17,35,53,85])?'halogen':
 inS(Z,[2,10,18,36,54,86])?'noble':inS(Z,[5,14,32,33,51,52])?'metalloid':inS(Z,[13,31,49,50,81,82,83,84])?'post':
 e.frow==='lan'?'lan':e.frow==='act'?'act':Z>=109?'unk':'transition'});

/* ---------- electron configuration ---------- */
const ORD=[[1,'s'],[2,'s'],[2,'p'],[3,'s'],[3,'p'],[4,'s'],[3,'d'],[4,'p'],[5,'s'],[4,'d'],[5,'p'],[6,'s'],[4,'f'],[5,'d'],[6,'p'],[7,'s'],[5,'f'],[6,'d'],[7,'p']],CAP={s:2,p:6,d:10,f:14};
const fill=Z=>{const o=[];let r=Z;for(const[n,l]of ORD){if(r<=0)break;const c=Math.min(r,CAP[l]);o.push([n,l,c]);r-=c}return o};
const EXC={24:'3d5 4s1',29:'3d10 4s1',41:'4d4 5s1',42:'4d5 5s1',44:'4d7 5s1',45:'4d8 5s1',46:'4d10',47:'4d10 5s1',57:'5d1 6s2',58:'4f1 5d1 6s2',64:'4f7 5d1 6s2',78:'4f14 5d9 6s1',79:'4f14 5d10 6s1',89:'6d1 7s2',90:'6d2 7s2',91:'5f2 6d1 7s2',92:'5f3 6d1 7s2',93:'5f4 6d1 7s2',96:'5f7 6d1 7s2',103:'5f14 7s2 7p1'};
const NOB=[[86,'Rn'],[54,'Xe'],[36,'Kr'],[18,'Ar'],[10,'Ne'],[2,'He']];
const SUP='⁰¹²³⁴⁵⁶⁷⁸⁹',sup=n=>String(n).split('').map(d=>SUP[d]).join('');
const fmt=a=>a.map(([n,l,c])=>`${n}${l}${sup(c)}`).join(' ');
E.forEach(e=>{const Z=e.Z,core=NOB.find(x=>x[0]<Z);let val,full;
 if(EXC[Z]){val=EXC[Z].split(' ').map(s=>{const m=s.match(/(\d)([spdf])(\d+)/);return[+m[1],m[2],+m[3]]});full=[...fill(core[0]),...val]}
 else{full=fill(Z);val=core?full.slice(fill(core[0]).length):full}
 e.cfgFull=fmt(full);e.cfg=(core?`[${core[1]}] `:'')+fmt(val);
 const sh=[];full.forEach(([n,,c])=>sh[n-1]=(sh[n-1]||0)+c);e.shells=sh;
 e.val=e.block==='s'||e.block==='p'?(Z===2?2:e.group<=2?e.group:e.group-10):null});

/* ---------- modes + colours ---------- */
const ERA=[[0,1,'古代','Antiquity'],[1,1700,'1700 年前','Before 1700'],[1700,1800,'1700 年代','1700s'],[1800,1850,'1800–1849','1800–1849'],[1850,1900,'1850–1899','1850–1899'],[1900,1950,'1900–1949','1900–1949'],[1950,3000,'1950 以後','1950 on']];
const ERAC=['#6d4c41','#9c36b5','#4263eb','#1098ad','#2b8a3e','#e8a30c','#e8590c'];
const eraOf=y=>ERA.findIndex(r=>y>=r[0]&&y<r[1]);
const STC={s:['固體','Solid','#4c6ef5'],l:['液體','Liquid','#12b886'],g:['氣體','Gas','#f06595'],u:['未知','Unknown','#868e96']};
const enCol=v=>{if(v==null)return '#868e96';const k=Math.max(0,Math.min(1,(v-.7)/3.3));return `hsl(${Math.round(225-225*k)} 75% 50%)`};
const MODES=[['cat','類別','Category'],['state','室溫狀態','State at 25 °C'],['en','電負度','Electronegativity'],['era','發現年代','When discovered']];
const colorOf=(e,m)=>m==='cat'?CAT[e.cat][2]:m==='state'?STC[e.st][2]:m==='en'?enCol(e.en_):ERAC[eraOf(e.yr)];
const yrTxt=(y,lang)=>y===0?(lang==='e'?'Antiquity':'古代'):lang==='e'?String(y):y+' 年';
const nm=e=>tp(e.zh,e.en);


/* ---------- state ---------- */
const st={mode:'cat',yi:null,q:'',hl:null};
let play=null,cur=null,anim=null;
const stopPlay=()=>{if(play){clearInterval(play);play=null}};
const host=()=>P.$('pages');
const main=()=>{let m=P.$('ptmain');if(!m){m=document.createElement('main');m.id='ptmain';m.className='ptpage';host().appendChild(m)}return m};

/* ---------- table page ---------- */
const match=(e,q)=>{if(!q)return true;q=q.trim().toLowerCase();if(!q)return true;return String(e.Z)===q||e.sym.toLowerCase()===q||e.en.toLowerCase().startsWith(q)||e.zh.includes(q)};
const cellH=e=>`<a class="el" href="#el-${e.sym}" data-z="${e.Z}" style="grid-row:${e.row+1};grid-column:${e.col}" aria-label="${e.Z} ${e.sym} ${e.zh} ${e.en}"><small>${e.Z}</small><b>${e.sym}</b><span>${nm(e)}</span></a>`;
const prevH=e=>e?`<div class="pv" style="--c:${colorOf(e,st.mode)}"><div class="pvt"><small>${e.Z}</small><b>${e.sym}</b><span>${e.mass}</span></div><div class="pvi"><h3>${t(e.zh,e.en)}</h3>
 <p>${t(`${CAT[e.cat][0]} · 第 ${e.period} 週期${e.group?` · 第 ${e.group} 族`:''}`,`${CAT[e.cat][1]} · period ${e.period}${e.group?` · group ${e.group}`:''}`)}</p><p class="cfg">${e.cfg}</p>
 <p>${t(`發現：${yrTxt(e.yr)}${e.en_!=null?` · 電負度 ${e.en_}`:''}`,`Discovered: ${yrTxt(e.yr,'e')}${e.en_!=null?` · EN ${e.en_}`:''}`)}</p></div></div>`
 :`<div class="pv hint">${b('把滑鼠移到元素上看摘要，點一下打開它的介紹頁。','Hover over an element for a summary; click to open its page.')}</div>`;
const legendH=()=>Object.values(CAT).map(v=>`<span class="lg" style="--c:${v[2]}">${t(v[0],v[1])}</span>`).join('');
const drawTable=()=>{const m=main();cur='table';
 let g=E.map(cellH).join('')+`<div class="ph" style="grid-row:7;grid-column:3;--c:${CAT.lan[2]}">57–71</div><div class="ph" style="grid-row:8;grid-column:3;--c:${CAT.act[2]}">89–103</div>`;
 for(let i=1;i<=18;i++)g+=`<div class="gn" style="grid-row:1;grid-column:${i}">${i}</div>`;
 g+=`<div class="pvbox" id="ptpv">${prevH(null)}</div>`;
 m.innerHTML=`<nav class="subj" aria-label="Subjects">${P.subjNav('elements')}</nav>
 <section class="band hb"><div class="wrap"><h1>${b('元素週期表','The periodic table of elements')}</h1>
 <p class="lede" style="margin:12px 0 0">${b('118 個元素，每一格都可以點開：名字的由來、誰發現的、電子怎麼排，以及生活中哪裡用得到。','118 elements, each one clickable: where its name came from, who found it, how its electrons are arranged, and where you meet it in daily life.')}</p></div></section>
 <section class="band ptband"><div class="ptw"><div class="pt" id="pt">${g}</div></div><div class="ptlg">${legendH()}</div></section>
 <section class="band"><div class="wrap"><h2>${b('怎麼讀週期表','How to read the table')}</h2>
 <div class="mis" style="margin-top:0"><div class="mc"><h3>${b('週期（橫列）','Periods (rows)')}</h3><p style="margin:0">${b('第幾週期，就有幾層電子殼層。往右走，原子核的正電越多，電子被拉得越緊。','The period number is the number of electron shells. Moving right, the nucleus has more positive charge and holds its electrons tighter.')}</p></div>
 <div class="mc"><h3>${b('族（直行）','Groups (columns)')}</h3><p style="margin:0">${b('同一族的最外層電子數一樣，所以化學性質很像：第 1 族都會跟水劇烈反應，第 18 族幾乎不反應。','Elements in a group have the same number of outer electrons, so they behave alike: group 1 metals all react violently with water, and group 18 barely reacts at all.')}</p></div>
 <div class="mc"><h3>${b('左邊金屬，右邊非金屬','Metals left, nonmetals right')}</h3><p style="margin:0">${b('左邊的元素容易失去電子變成正離子；右上角的容易得到電子。兩邊相遇，就是離子鍵。','Elements on the left lose electrons easily and become positive ions; those at the upper right gain electrons. When the two meet, you get an ionic bond.')}</p></div></div></div></section>
 ${P.std('HS-PS1-1：用週期表當模型，根據最外層電子的規律預測元素的相對性質。','HS-PS1-1: Use the periodic table as a model to predict the relative properties of elements based on the patterns of electrons in the outermost energy level.')}`;
 m.querySelectorAll('.el').forEach(a=>a.style.setProperty('--c',CAT[E[a.dataset.z-1].cat][2]));
 const pt=P.$('pt'),pv=e=>{P.$('ptpv').innerHTML=prevH(e)};
 pt.addEventListener('mouseover',ev=>{const a=ev.target.closest('.el');if(a)pv(E[a.dataset.z-1])});
 pt.addEventListener('focusin',ev=>{const a=ev.target.closest('.el');if(a)pv(E[a.dataset.z-1])});
 pt.addEventListener('mouseleave',()=>pv(null))};

/* ---------- element page ---------- */
const tile=(e,cls='')=>`<a class="el ${cls}" href="#el-${e.sym}" style="--c:${CAT[e.cat][2]}"><small>${e.Z}</small><b>${e.sym}</b><span>${nm(e)}</span></a>`;
const fact=(z,en,v)=>`<div class="fc"><small>${t(z,en)}</small><div>${v}</div></div>`;
const isSyn=e=>e.Z===43||e.Z===61||e.Z===85||e.Z>=93;
const isRad=e=>e.Z===43||e.Z===61||e.Z>=84;
const drawEl=sym=>{const e=bySym[sym],m=main();cur='el';if(!e){location.hash='elements';return}
 const c=CAT[e.cat][2],prev=E[e.Z-2],next=E[e.Z];
 const fam=e.group?E.filter(x=>x.group===e.group):E.filter(x=>x.frow===e.frow);
 const mini=E.map(x=>`<i style="grid-row:${x.row};grid-column:${x.col}" class="${x.Z===e.Z?'on':''}"></i>`).join('');
 const sp=e.val!=null;
 m.innerHTML=`<nav class="subj" aria-label="Subjects">${P.subjNav('elements')}</nav><section class="band"><div class="wrap"><div class="elnav"><a class="btn" href="#elements">${b('← 週期表','← Periodic table')}</a><span>${prev?`<a class="btn" href="#el-${prev.sym}">← ${prev.sym}</a>`:''}${next?`<a class="btn" href="#el-${next.sym}">${next.sym} →</a>`:''}</span></div>
 <div class="elhero"><div class="big" style="--c:${c}"><small>${e.Z}</small><b>${e.sym}</b><span>${e.mass}</span></div>
 <div><span class="chip" style="color:${c};background:color-mix(in srgb,${c} 14%,var(--bg))">${b(`${CAT[e.cat][0]} · 第 ${e.Z} 號`,`${CAT[e.cat][1]} · element ${e.Z}`)}</span><h1>${b(e.zh,e.en)}</h1><p class="lede" style="margin-top:14px">${b(e.dz,e.de)}</p></div></div></div></section>
 <section class="band"><div class="wrap"><span class="chip">${b('基本資料','Key facts')}</span><div class="facts">
 ${fact('原子序','Atomic number',`${e.Z} <small>${tp(`（${e.Z} 個質子）`,`(${e.Z} protons)`)}</small>`)}
 ${fact('原子量','Atomic mass',e.mass+(e.mass.startsWith('[')?` <small>${t('最穩定同位素的質量數','mass number of the most stable isotope')}</small>`:''))}
 ${fact('位置','Position',t(`第 ${e.period} 週期 · ${e.group?`第 ${e.group} 族`:e.frow==='lan'?'鑭系':'錒系'} · ${e.block} 區`,`Period ${e.period} · ${e.group?`group ${e.group}`:e.frow==='lan'?'lanthanide series':'actinide series'} · ${e.block} block`))}
 ${fact('室溫狀態','State at 25 °C',t(STC[e.st][0],STC[e.st][1]))}
 ${fact('電負度','Electronegativity',e.en_!=null?e.en_:t('沒有數值','no value'))}
 ${fact('發現','Discovered',e.yr?t(`${e.yr} 年 · ${e.wz}`,`${e.yr} · ${e.we}`):t('古代就已知道','Known since antiquity'))}
 ${fact('來源','Origin',isSyn(e)?t('最早是人工合成的','first made artificially'):t('自然界存在','found in nature'))+(isRad(e)?` <small>${t('· 所有同位素都有放射性','· every isotope is radioactive')}</small>`:'')}
 ${fact('電子排布','Electron configuration',`<span class="cfg">${e.cfg}</span>${e.Z>2?`<br><small class="cfg">${e.cfgFull}</small>`:''}${e.Z>=104?` <small>${t('（理論預測）','(predicted)')}</small>`:''}`)}
 </div></div></section>
 <section class="band"><div class="wrap two"><div><span class="chip">${b('原子模型','Atom model')}</span><h2>${b('電子一層一層排','Electrons fill shell by shell')}</h2>
 <p>${b(`${e.zh}有 ${e.shells.length} 層電子：${e.shells.join('、')}。`,`${e.en} has ${e.shells.length} electron shells: ${e.shells.join(', ')}.`)}${sp?b(` 最外層有 ${e.val} 個電子，這決定了它的化學性質。`,` Its outer shell holds ${e.val} electrons, which sets its chemistry.`):b(' 它的外層電子填在 d 或 f 軌域，所以同一列的性質比較相近。',' Its outer electrons go into d or f orbitals, so neighbors in its row behave similarly.')}</p>
 <p class="note">${b('這是簡化的波耳模型：真正的電子是一團機率雲，不是在軌道上繞圈。','This is a simplified Bohr model: real electrons are probability clouds, not little planets on orbits.')}</p>
 <h3 style="margin-top:18px">${b('在週期表的位置','Where it sits')}</h3><div class="mini">${mini}</div></div>
 <div class="fig" style="min-height:320px"><canvas id="elc"></canvas></div></div></section>
 <section class="band"><div class="wrap"><span class="chip">${b(e.group?'同一族':'同一系列',e.group?'Same group':'Same series')}</span><h2>${b(e.group?`第 ${e.group} 族`:e.frow==='lan'?'鑭系元素':'錒系元素',e.group?`Group ${e.group}`:e.frow==='lan'?'The lanthanides':'The actinides')}</h2>
 <div class="fam">${fam.map(x=>tile(x,x.Z===e.Z?'on':'')).join('')}</div>
</div></section>
 ${P.std('HS-PS1-1：用週期表當模型，根據最外層電子的規律預測元素的相對性質。','HS-PS1-1: Use the periodic table as a model to predict the relative properties of elements based on the patterns of electrons in the outermost energy level.')}`;
 bohr(e)};

/* Bohr-model canvas */
const RM=matchMedia('(prefers-reduced-motion: reduce)');
const bohr=e=>{if(anim)anim();const c=P.$('elc');if(!c)return;let ph=0;
 const draw=()=>{if(!c.isConnected)return;const[x,W,H]=P.fit(c);if(W<10)return;x.clearRect(0,0,W,H);
  const cx=W/2,cy=H/2,R=Math.min(W,H)/2-14,n=e.shells.length,r0=Math.max(16,R*.16),col=CAT[e.cat][2],ink=P.css('--ink'),mu=P.css('--line');
  for(let i=0;i<n;i++){const r=r0+(R-r0)*(i+1)/n;x.strokeStyle=mu;x.lineWidth=1.5;x.beginPath();x.arc(cx,cy,r,0,7);x.stroke();
   const k=e.shells[i],sp=(RM.matches?0:ph)*(.9/(i+1)),dot=Math.max(2.2,Math.min(5,r*Math.PI/k*.32));
   x.fillStyle=P.css('--mo');for(let j=0;j<k;j++){const a=sp+j*2*Math.PI/k+i*.4;x.beginPath();x.arc(cx+r*Math.cos(a),cy+r*Math.sin(a),dot,0,7);x.fill()}}
  x.fillStyle=col;x.beginPath();x.arc(cx,cy,r0,0,7);x.fill();x.fillStyle='#fff';x.textAlign='center';x.textBaseline='middle';
  x.font=`800 ${Math.round(r0*.62)}px Archivo`;x.fillText(e.sym,cx,cy-r0*.12);x.font=`600 ${Math.round(r0*.34)}px Archivo`;x.fillText('+'+e.Z,cx,cy+r0*.45)};
 const ro=new ResizeObserver(draw);ro.observe(c);draw();
 let alive=true;anim=()=>{alive=false;ro.disconnect()};
 P.run(dt=>{if(!alive||!c.isConnected){ro.disconnect();return false}if(RM.matches)return;if(main().hidden)return;ph+=dt;draw()})};

/* ---------- page registration ---------- */
let curId=null;
P.pages.push({match:id=>id==='elements'||/^el-[A-Za-z]{1,2}$/.test(id),
 show:id=>{const m=main();m.hidden=false;curId=id;if(id==='elements')drawTable();else{stopPlay();drawEl(id.slice(3))}},
 hide:()=>{const m=P.$('ptmain');if(m)m.hidden=true;stopPlay();if(anim)anim();cur=null;curId=null}});
P.onLang(()=>{if(!curId)return;const y=scrollY;if(curId==='elements')drawTable();else drawEl(curId.slice(3));scrollTo(0,y)});

/* its own tab next to the subjects */
P.tabs.push({id:'elements',z:'週期表',e:'Periodic Table',c:'#2160d8'});
}
