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

/* ---------- timeline links ---------- */
const LINK={H:['davy','payne','bohr'],He:['spectra','argon','payne'],Li:['battery'],B:['davy'],C:['kekule','vanthoff','keeling'],N:['haber'],O:['priestley','lavoisier','mass'],F:['pauling'],Ne:['argon'],Na:['davy','ions'],Mg:['davy'],P:['dna'],S:['acidrain'],Cl:['ions','ozone'],Ar:['argon'],K:['davy'],Ca:['davy'],Sc:['mendeleev'],Fe:['b2fh','haber'],Co:['battery'],Ni:['battery'],Cu:['volta'],Zn:['volta'],Ga:['mendeleev'],Ge:['mendeleev'],Kr:['argon'],Rb:['spectra'],Sr:['davy'],Zr:['holmes'],Tc:['moseley'],Pt:['catalyst'],In:['spectra'],Xe:['argon'],Cs:['spectra'],Ba:['davy'],Pm:['moseley'],Hf:['moseley'],Re:['moseley'],Ir:['alvarez'],Au:['rutherford'],Tl:['spectra'],Pb:['patterson'],Po:['curie'],Rn:['curie'],Ra:['curie'],U:['curie','holmes','fission'],Pu:['fission'],Cm:['curie'],Es:['relativity'],Fm:['fission'],Md:['mendeleev'],Bh:['bohr'],Rf:['rutherford'],Mt:['fission']};
const ALL=['mendeleev','moseley'];

/* ---------- state ---------- */
const st={mode:'cat',yi:null,q:'',hl:null};
const YRS=[...new Set(E.map(e=>e.yr))].sort((a,c)=>a-c);
let play=null,cur=null,anim=null;
const stopPlay=()=>{if(play){clearInterval(play);play=null}};
const host=()=>P.$('pages');
const main=()=>{let m=P.$('ptmain');if(!m){m=document.createElement('main');m.id='ptmain';m.className='ptpage';host().appendChild(m)}return m};

/* ---------- table page ---------- */
const yrNow=()=>YRS[st.yi??YRS.length-1];
const match=(e,q)=>{if(!q)return true;q=q.trim().toLowerCase();if(!q)return true;return String(e.Z)===q||e.sym.toLowerCase()===q||e.en.toLowerCase().startsWith(q)||e.zh.includes(q)};
const cellH=e=>`<a class="el" href="#el-${e.sym}" data-z="${e.Z}" style="grid-row:${e.row+1};grid-column:${e.col}" aria-label="${e.Z} ${e.sym} ${e.zh} ${e.en}"><small>${e.Z}</small><b>${e.sym}</b><span>${nm(e)}</span></a>`;
const prevH=e=>e?`<div class="pv" style="--c:${colorOf(e,st.mode)}"><div class="pvt"><small>${e.Z}</small><b>${e.sym}</b><span>${e.mass}</span></div><div class="pvi"><h3>${t(e.zh,e.en)}</h3>
 <p>${t(`${CAT[e.cat][0]} · 第 ${e.period} 週期${e.group?` · 第 ${e.group} 族`:''}`,`${CAT[e.cat][1]} · period ${e.period}${e.group?` · group ${e.group}`:''}`)}</p><p class="cfg">${e.cfg}</p>
 <p>${t(`發現：${yrTxt(e.yr)}${e.en_!=null?` · 電負度 ${e.en_}`:''}`,`Discovered: ${yrTxt(e.yr,'e')}${e.en_!=null?` · EN ${e.en_}`:''}`)}</p></div></div>`
 :`<div class="pv hint">${b('把滑鼠移到元素上看摘要，點一下打開它的介紹頁。','Hover over an element for a summary; click to open its page.')}</div>`;
const legendH=()=>{const m=st.mode;
 if(m==='cat')return Object.entries(CAT).map(([k,v])=>`<button class="lg ${st.hl===k?'on':''}" data-hl="${k}" style="--c:${v[2]}" aria-pressed="${st.hl===k}">${t(v[0],v[1])}</button>`).join('');
 if(m==='state')return Object.values(STC).map(v=>`<span class="lg" style="--c:${v[2]}">${t(v[0],v[1])}</span>`).join('')+`<span class="lgn">${t('25 °C、1 大氣壓。汞和溴是液體；鎵和銫放在溫暖的手上也會融化。','At 25 °C and 1 atm. Mercury and bromine are liquids; gallium and cesium melt in a warm hand.')}</span>`;
 if(m==='en')return `<span class="lgbar"><i>0.7</i><span style="background:linear-gradient(90deg,${[0,.25,.5,.75,1].map(k=>enCol(.7+3.3*k)).join(',')})"></span><i>4.0</i></span><span class="lg" style="--c:#868e96">${t('沒有數值','No value')}</span><span class="lgn">${t('越往右上越高（氟最高）。差距大的兩個原子容易形成離子鍵。','Rises toward the upper right (fluorine is highest). A large difference between two atoms favors an ionic bond.')}</span>`;
 return ERA.map((r,i)=>`<span class="lg" style="--c:${ERAC[i]}">${t(r[2],r[3])}</span>`).join('')};
const PRE=[[0,'古代','Antiquity'],[1789,'1789 拉瓦節','1789 Lavoisier'],[1869,'1869 門得列夫','1869 Mendeleev'],[1913,'1913 莫塞萊','1913 Moseley'],[1945,'1945','1945'],[3000,'今天','Today']];
const timeTxt=()=>{const y=st.py&&st.py<3000?st.py:yrNow(),n=E.filter(e=>e.yr<=y).length,nw=E.filter(e=>e.yr===yrNow()&&e.yr===y);
 const last=st.yi==null||st.yi===YRS.length-1;
 return (last?t(`今天已知 ${n} 種元素，週期表前 7 個週期全部填滿。`,`Today ${n} elements are known, filling all seven periods.`):
  y===0?t(`古代已知 ${n} 種：七種金屬（金、銀、銅、鐵、錫、鉛、汞）加上碳、硫、銻。`,`${n} were known in antiquity: seven metals (gold, silver, copper, iron, tin, lead, mercury) plus carbon, sulfur, and antimony.`):
  t(`到 ${y} 年，已知 ${n} 種元素。`,`By ${y}, ${n} elements were known.`))
  +(y===1869?t(' 門得列夫排表時用了其中 63 種（氦當時只在太陽光譜裡看到）。',' Mendeleev\'s table used 63 of them (helium had only been seen in the Sun\'s spectrum).'):'')
  +(!last&&y>0&&nw.length?` <b>${t('這一年發現：','Found this year: ')}${nw.map(e=>`${e.sym} ${tp(e.zh,e.en)}`).join('、')}</b>`:'')};
const paint=()=>{const m=main();if(!m.querySelector('.pt'))return;const y=yrNow(),last=st.yi==null||st.yi===YRS.length-1;
 m.querySelectorAll('.el').forEach(a=>{const e=E[a.dataset.z-1];a.style.setProperty('--c',colorOf(e,st.mode));
  a.classList.toggle('fut',e.yr>y);a.classList.toggle('new',!last&&!st.py&&e.yr===y);a.classList.toggle('dim',(st.hl&&e.cat!==st.hl)||!match(e,st.q))});
 P.$('ptlg').innerHTML=legendH();P.$('pttx').innerHTML=timeTxt();P.$('ptyr').value=st.yi??YRS.length-1;
 const dy=st.py&&st.py<3000?st.py:y;P.$('ptyv').textContent=last?tp('今天','Today'):tp(yrTxt(dy),yrTxt(dy,'e'));P.$('ptplay').innerHTML=play?b('暫停','Pause'):b('播放','Play')};
const drawTable=()=>{const m=main();cur='table';
 let g=E.map(cellH).join('')+`<div class="ph" style="grid-row:7;grid-column:3;--c:${CAT.lan[2]}">57–71</div><div class="ph" style="grid-row:8;grid-column:3;--c:${CAT.act[2]}">89–103</div>`;
 for(let i=1;i<=18;i++)g+=`<div class="gn" style="grid-row:1;grid-column:${i}">${i}</div>`;
 g+=`<div class="pvbox" id="ptpv">${prevH(null)}</div>`;
 const lk=id=>P.node(id)&&P.lessons[id]?`<a class="btn" href="#${id}">${b(P.node(id).z+' →',P.node(id).e+' →')}</a>`:'';
 m.innerHTML=`<section class="band"><div class="wrap"><span class="chip">${b('化學 · 互動週期表','Chemistry · Interactive periodic table')}</span><h1>${b('週期表：118 個元素','The periodic table: 118 elements')}</h1>
 <p class="lede" style="margin-top:12px">${b('每一格都是一種元素，點進去可以看到它名字的由來、誰發現的、電子怎麼排，以及生活中哪裡用得到。換個上色方式看看規律；拉動時光機，看人類在每個年代知道哪些元素。','Every square is an element. Open one to see where its name came from, who found it, how its electrons are arranged, and where you meet it in daily life. Change the coloring to look for patterns, and drag the time machine to see which elements people knew in each era.')}</p></div></section>
 <div class="ptbar"><div class="wrap"><div class="seg" id="ptmode"></div><label class="ptq"><span class="sr">${b('搜尋','Search')}</span><input id="ptq" type="search" value="${st.q.replace(/"/g,'')}" placeholder="${tp('搜尋：Fe、鐵、26','Search: Fe, iron, 26')}" autocomplete="off"></label></div></div>
 <section class="band ptband"><div class="ptw"><div class="pt" id="pt">${g}</div></div><div class="ptlg" id="ptlg"></div>
 <div class="ptime"><div class="ptt"><b>${b('時光機','Time machine')}</b><span class="read" id="ptyv"></span></div>
  <input type="range" id="ptyr" min="0" max="${YRS.length-1}" step="1" aria-label="year">
  <div class="ptpre">${PRE.map(p=>`<button data-yr="${p[0]}">${t(p[1],p[2])}</button>`).join('')}<button class="pri" id="ptplay"></button></div>
  <p id="pttx"></p></div></section>
 <section class="band"><div class="wrap"><span class="chip">${b('怎麼讀週期表','How to read the table')}</span><h2>${b('位置就是性質','Position tells you properties')}</h2>
 <div class="mis" style="margin-top:0"><div class="mc"><h3>${b('週期（橫列）','Periods (rows)')}</h3><p style="margin:0">${b('第幾週期，就有幾層電子殼層。往右走，原子核的正電越多，電子被拉得越緊。','The period number is the number of electron shells. Moving right, the nucleus has more positive charge and holds its electrons tighter.')}</p></div>
 <div class="mc"><h3>${b('族（直行）','Groups (columns)')}</h3><p style="margin:0">${b('同一族的最外層電子數一樣，所以化學性質很像：第 1 族都會跟水劇烈反應，第 18 族幾乎不反應。','Elements in a group have the same number of outer electrons, so they behave alike: group 1 metals all react violently with water, and group 18 barely reacts at all.')}</p></div>
 <div class="mc"><h3>${b('左邊金屬，右邊非金屬','Metals left, nonmetals right')}</h3><p style="margin:0">${b('左邊的元素容易失去電子變成正離子；右上角的容易得到電子。兩邊相遇，就是離子鍵。','Elements on the left lose electrons easily and become positive ions; those at the upper right gain electrons. When the two meet, you get an ionic bond.')}</p></div></div>
 <p style="margin-top:16px">${b('這張表是怎麼來的？時間軸上有完整的故事：','How did this table come about? The timeline tells the full story:')}</p><div class="ctrl">${lk('mendeleev')}${lk('moseley')}</div></div></section>
 ${P.std('HS-PS1-1：用週期表當模型，根據最外層電子的規律預測元素的相對性質。HS-PS1-2：用最外層電子和週期表的趨勢解釋簡單化學反應的結果。','HS-PS1-1: Use the periodic table as a model to predict the relative properties of elements based on the patterns of electrons in the outermost energy level. HS-PS1-2: Explain the outcome of a simple chemical reaction from the outermost electron states of atoms and trends in the periodic table.')}`;
 const sg=P.$('ptmode'),dsg=()=>{sg.innerHTML=MODES.map(o=>`<button aria-pressed="${st.mode===o[0]}" data-v="${o[0]}">${t(o[1],o[2])}</button>`).join('')};dsg();
 sg.onclick=ev=>{const x=ev.target.closest('button');if(!x)return;st.mode=x.dataset.v;st.hl=null;dsg();paint()};
 const q=P.$('ptq');q.oninput=()=>{st.q=q.value;paint()};q.onkeydown=ev=>{if(ev.key==='Enter'){const f=E.find(e=>match(e,st.q));if(f&&st.q.trim())location.hash='el-'+f.sym}};
 P.$('ptyr').oninput=ev=>{stopPlay();st.py=null;st.yi=+ev.target.value;paint()};
 const pt=P.$('pt');
 pt.addEventListener('mouseover',ev=>{const a=ev.target.closest('.el');if(a)P.$('ptpv').innerHTML=prevH(E[a.dataset.z-1])});
 pt.addEventListener('focusin',ev=>{const a=ev.target.closest('.el');if(a)P.$('ptpv').innerHTML=prevH(E[a.dataset.z-1])});
 pt.addEventListener('mouseleave',()=>{P.$('ptpv').innerHTML=prevH(null)});
 paint()};
host().addEventListener('click',ev=>{
 const h=ev.target.closest('[data-hl]');if(h){st.hl=st.hl===h.dataset.hl?null:h.dataset.hl;paint();return}
 const y=ev.target.closest('[data-yr]');if(y){stopPlay();const v=+y.dataset.yr;let i=0;YRS.forEach((x,j)=>{if(x<=v)i=j});st.yi=i;st.py=v;paint();return}
 if(ev.target.closest('#ptplay')){if(play){stopPlay();paint();return}
  st.py=null;if(st.yi==null||st.yi>=YRS.length-1)st.yi=0;
  play=setInterval(()=>{if(cur!=='table'){stopPlay();return}st.yi++;if(st.yi>=YRS.length-1){st.yi=YRS.length-1;stopPlay()}paint()},420);paint()}});

/* ---------- element page ---------- */
const tile=(e,cls='')=>`<a class="el ${cls}" href="#el-${e.sym}" style="--c:${CAT[e.cat][2]}"><small>${e.Z}</small><b>${e.sym}</b><span>${nm(e)}</span></a>`;
const fact=(z,en,v)=>`<div class="fc"><small>${t(z,en)}</small><div>${v}</div></div>`;
const isSyn=e=>e.Z===43||e.Z===61||e.Z===85||e.Z>=93;
const isRad=e=>e.Z===43||e.Z===61||e.Z>=84;
const drawEl=sym=>{const e=bySym[sym],m=main();cur='el';if(!e){location.hash='elements';return}
 const c=CAT[e.cat][2],prev=E[e.Z-2],next=E[e.Z];
 const fam=e.group?E.filter(x=>x.group===e.group):E.filter(x=>x.frow===e.frow);
 const ids=[...new Set([...(LINK[e.sym]||[]),...ALL])].filter(id=>P.node(id)&&P.lessons[id]);
 const nodeLk=id=>{const n=P.node(id),L=P.lines.find(l=>l.id===n.l);return `<a class="vc" href="#${id}" style="--ec:${L.c}"><span class="vtag">${t(L.z,L.e)}</span><b>${t(n.z,n.e)}</b><span class="vq">${t(...n.q)}</span></a>`};
 const mini=E.map(x=>`<i style="grid-row:${x.row};grid-column:${x.col}" class="${x.Z===e.Z?'on':''}"></i>`).join('');
 const sp=e.val!=null;
 m.innerHTML=`<section class="band"><div class="wrap"><div class="elnav"><a class="btn" href="#elements">${b('← 週期表','← Periodic table')}</a><span>${prev?`<a class="btn" href="#el-${prev.sym}">← ${prev.sym}</a>`:''}${next?`<a class="btn" href="#el-${next.sym}">${next.sym} →</a>`:''}</span></div>
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
 <p class="note">${b('這是簡化的波耳模型：真正的電子是一團機率雲，不是在軌道上繞圈（物理線的波耳一課有講）。','This is a simplified Bohr model: real electrons are probability clouds, not little planets on orbits (see the Bohr lesson in physics).')}</p>
 <h3 style="margin-top:18px">${b('在週期表的位置','Where it sits')}</h3><div class="mini">${mini}</div></div>
 <div class="fig" style="min-height:320px"><canvas id="elc"></canvas></div></div></section>
 <section class="band"><div class="wrap"><span class="chip">${b('想一想','Think')}</span>${P.phtml('el'+e.Z,...qText(e))}</div></section>
 <section class="band"><div class="wrap"><span class="chip">${b(e.group?'同一族':'同一系列',e.group?'Same group':'Same series')}</span><h2>${b(e.group?`第 ${e.group} 族`:e.frow==='lan'?'鑭系元素':'錒系元素',e.group?`Group ${e.group}`:e.frow==='lan'?'The lanthanides':'The actinides')}</h2>
 <div class="fam">${fam.map(x=>tile(x,x.Z===e.Z?'on':'')).join('')}</div>
 ${ids.length?`<h3 style="margin-top:26px">${b('時間軸上的相關節點','Related nodes on the timeline')}</h3><div class="ellinks">${ids.map(nodeLk).join('')}</div>`:''}</div></section>
 ${P.std('HS-PS1-1：用週期表當模型，根據最外層電子的規律預測元素的相對性質。','HS-PS1-1: Use the periodic table as a model to predict the relative properties of elements based on the patterns of electrons in the outermost energy level.')}`;
 P.pred('el'+e.Z,qDef(e));bohr(e)};

/* one question per element */
const qText=e=>e.val!=null?[`預測：${e.zh}（第 ${e.group} 族）最外層有幾個電子？`,`Predict: how many outer-shell electrons does ${e.en} (group ${e.group}) have?`]:
 e.st==='u'?[`${e.zh}是怎麼得到的？`,`How was ${e.en} obtained?`]:[`預測：${e.zh}在室溫下是什麼狀態？`,`Predict: what state is ${e.en} in at room temperature?`];
const qDef=e=>{
 if(e.val!=null){const v=e.val,o=[];for(let d=0;o.length<4;d++){[v-d,v+d].forEach(x=>{if(x>=1&&x<=8&&!o.includes(x)&&o.length<4)o.push(x)})}o.sort((a,c)=>a-c);
  const ok=[`對。${e.zh}在第 ${e.group} 族，最外層有 ${v} 個電子。同一族的價電子數一樣，所以性質相似。`,`Right. ${e.en} is in group ${e.group}, with ${v} outer electrons. Elements in a group share this number, so they behave alike.`];
  const no=e.Z===2?['氦是例外：它只有一層，最多放 2 個電子，而且已經滿了，所以跟第 18 族一樣穩定。','Helium is the exception: its single shell holds at most 2 electrons and is full, so it is as stable as the rest of group 18.']:
   [`看它在第幾族：第 1、2 族的價電子數就是族數；第 13–18 族是族數減 10。${e.zh}有 ${v} 個。`,`Look at the group: in groups 1–2 the outer-electron count equals the group number; in groups 13–18 subtract 10. ${e.en} has ${v}.`];
  return {now:1,c:o.indexOf(v),o:o.map(x=>[String(x),String(x)]),f:o.map(x=>x===v?ok:no)}}
 if(e.st==='u'){const ok=[`對。${e.zh}在自然界不存在，是用加速器讓原子核對撞、或在核反應爐裡一次做出幾個原子，很快就衰變掉。`,`Right. ${e.en} does not exist in nature; a few atoms at a time are made by smashing nuclei in an accelerator or in a reactor, and they decay quickly.`],no=['不是。它的原子核太不穩定，地球上找不到，只能人工合成。','No. Its nucleus is too unstable to survive on Earth; it can only be made artificially.'];
  return {now:1,c:2,o:[['從礦石提煉','Refined from ore'],['從空氣分離','Separated from air'],['用加速器或核反應爐人工合成','Made artificially in an accelerator or reactor']],f:[no,no,ok]}}
 const k=['s','l','g'],c=k.indexOf(e.st);
 const ok=[`對。${e.zh}在室溫下是${STC[e.st][0]}。`,`Right. ${e.en} is a ${STC[e.st][1].toLowerCase()} at room temperature.`];
 const no=[`不是。${e.zh}在室溫下是${STC[e.st][0]}。大部分金屬都是固體，只有汞是液體。`,`No. ${e.en} is a ${STC[e.st][1].toLowerCase()} at room temperature. Almost all metals are solid; only mercury is liquid.`];
 return {now:1,c,o:[['固體','Solid'],['液體','Liquid'],['氣體','Gas']],f:k.map(x=>x===e.st?ok:no)}};

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

/* chemistry home: entry card */
P.homeExtra.chemistry=()=>`<a class="ptban" href="#elements"><div class="ptmini">${E.map(e=>`<i style="grid-row:${e.row};grid-column:${e.col};background:${CAT[e.cat][2]}"></i>`).join('')}</div>
 <div><span class="vtag" style="--ec:#2160d8">${t('互動週期表','Interactive periodic table')}</span><b>${t('118 個元素，每一個都能點開','118 elements, each with its own page')}</b>
 <span class="vq">${t('名字的由來、誰發現的、電子怎麼排、生活中哪裡用得到。還有時光機，看每個年代人類知道哪些元素。','Name origins, discoverers, electron arrangements, and everyday uses, plus a time machine showing which elements people knew in each era.')}</span><span class="vgo">${t('打開週期表 →','Open the table →')}</span></div></a>`;
}
