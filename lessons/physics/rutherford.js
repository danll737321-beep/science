{const b=P.b;
P.reg('rutherford',{html:P.build('rutherford',{
 title:['拉塞福：原子幾乎是空的','Rutherford: the atom is almost empty'],
 lede:['1897 年發現了電子，大家知道原子裡有帶負電的小粒子，也一定有正電讓它變成中性。但正電和負電怎麼排？1909 到 1911 年，拉塞福的團隊用 α 粒子射穿薄薄的金箔，結果讓拉塞福說：這就像用砲彈打一張衛生紙，砲彈卻彈回來打到你。','After the electron\'s discovery in 1897, everyone knew atoms contain tiny negative particles plus enough positive charge to make them neutral. But how were the charges arranged? From 1909 to 1911 Rutherford\'s team fired alpha particles through thin gold foil, with results Rutherford likened to firing a shell at tissue paper and having it bounce back and hit you.'],
 old:{h:['湯姆森的「葡萄乾布丁」模型','Thomson\'s "plum pudding" model'],p:[['發現電子的湯姆森認為：原子是一團均勻散開的正電，像布丁；電子像葡萄乾一樣嵌在裡面。正電散得很開，所以哪裡的電力都不強。','J. J. Thomson, who discovered the electron, pictured the atom as a uniform spread of positive charge, like a pudding, with electrons embedded like raisins. With the positive charge spread out, the electric force is weak everywhere.']]},
 con:{h:['八千個裡面，有一個彈了回來','One in eight thousand bounced back'],
  p:[['α 粒子是高速、帶正電、又重的粒子（後來知道是氦原子核）。如果正電是散開的布丁，α 粒子應該幾乎直直穿過去，最多偏一點點角度。','Alpha particles are fast, heavy, and positively charged (later identified as helium nuclei). If the positive charge were a spread-out pudding, they should pass almost straight through, deflecting only slightly at most.'],
   ['蓋革和馬斯登在螢光屏上一個一個數閃光。大部分的確直直穿過去，但大約每 8,000 個就有 1 個被彈回來，偏轉超過 90°。這需要一個非常強的力，只有正電集中在一個極小的點上才做得到。','Geiger and Marsden counted flashes on a fluorescent screen, one by one. Most did pass straight through, but about 1 in 8,000 bounced back by more than 90°. That needs an enormously strong force, possible only if the positive charge is packed into a tiny point.']]},
 exps:[{h:['實驗：用 α 粒子射金原子','Experiment: fire alpha particles at gold atoms'],
  intro:[['選一種原子模型，發射 α 粒子，看它們怎麼偏轉。右邊會統計偏轉的角度。（為了看得到，原子核的大小在畫面上放大了很多倍。）','Choose an atom model, fire alpha particles, and watch how they deflect. The counts on the right tally the angles. (The nucleus is drawn much larger than scale so you can see it.)']],
  preds:[['ru1','預測 A：如果葡萄乾布丁模型是對的，α 粒子會？','Prediction A: if the plum pudding model is right, the alpha particles will?'],['ru2','預測 B：蓋革和馬斯登實際看到的是？','Prediction B: what did Geiger and Marsden actually see?']],
  sim:`<div class="ctrl"><span>${b('模型','Model')}</span><div class="seg" id="rum"></div><button class="pri" id="rugo"></button><button id="rucl">${b('清除','Clear')}</button></div><div class="fig"><canvas id="ruc"></canvas></div><div class="bars" id="rub"></div>`}],
 idea:{h:['原子核：極小、極重、帶正電','The nucleus: tiny, heavy, positively charged'],
  p:[['原子幾乎所有的質量和全部的正電，都集中在中心一個極小的原子核裡，電子在外面很遠的地方。原子的直徑大約是原子核的 10 萬倍。','Almost all of an atom\'s mass and all its positive charge are packed into a tiny central nucleus, with electrons far outside. An atom is about 100,000 times wider than its nucleus.'],
   ['所以大部分 α 粒子穿過去什麼也沒碰到；只有極少數剛好正對原子核，被強大的電力彈回來。','So most alpha particles pass through without meeting anything; only the rare one aimed almost directly at a nucleus gets thrown back by its powerful electric force.']],
  key:['10⁻¹⁵ m vs. 10⁻¹⁰ m','原子核大約 10⁻¹⁵ m，原子大約 10⁻¹⁰ m。如果原子核是一顆彈珠，原子就像一座體育場，中間幾乎都是空的。','A nucleus is about 10⁻¹⁵ m across, an atom about 10⁻¹⁰ m. If the nucleus were a marble, the atom would be a stadium, and nearly all of it empty.'],
  after:[['但這個模型有一個大問題：繞著原子核轉的電子會一直放出電磁波、失去能量，不到一億分之一秒就應該掉進原子核。原子為什麼是穩定的？','But the model had a big problem: an electron circling the nucleus should keep radiating electromagnetic waves, lose energy, and spiral into the nucleus in less than a hundred-millionth of a second. Why are atoms stable?']]},
 adv:[['最接近原子核的距離','Distance of closest approach',[
   ['正面撞向原子核的 α 粒子，動能全部變成電位能時停下來。用 ke² = 1.44 MeV·fm：','An alpha particle heading straight at the nucleus stops when all its kinetic energy has become electric potential energy. With ke² = 1.44 MeV·fm:'],
   '=KE = k(2e)(79e) / d　⇒　d = 1.44 × 2 × 79 / KE(MeV) fm',
   '=5 MeV：d = 1.44 × 158 / 5 ≈ 45 fm = 4.5 × 10⁻¹⁴ m',
   ['金原子核的半徑大約 7 fm，所以 α 粒子還碰不到它就被推回去了。原子核一定比 45 fm 小。','A gold nucleus has a radius of about 7 fm, so the alpha is turned back before touching it. The nucleus must be smaller than 45 fm.']]]],
 apply:{h:['用原子核模型解題','Solve with the nuclear model'],q:[
  ['n','ru3','1. 原子直徑大約是原子核的 10 萬倍。如果原子核是 1 cm 的彈珠，原子的直徑是幾公里？','1. An atom is about 100,000 times wider than its nucleus. If the nucleus were a 1 cm marble, how many kilometers across would the atom be?','km'],
  ['n','ru4','2. 動能 5 MeV 的 α 粒子正面射向金原子核，最近能到幾 fm？（d = 1.44 × 158 / KE）','2. A 5 MeV alpha heads straight at a gold nucleus. How close does it get, in fm? (d = 1.44 × 158 / KE)','fm'],
  ['p','ru5','3. 為什麼大部分 α 粒子會直直穿過金箔？','3. Why do most alpha particles pass straight through the gold foil?']]},
 pencil:{h:['4. 拿紙筆：畫出五個 α 粒子經過原子核附近的路徑','4. Pencil and paper: draw the paths of five alpha particles passing near a nucleus'],p:['離原子核遠的、近的、正對的，路徑各是什麼樣子？','What do the paths look like for far, near, and head-on approaches?'],
  ans:`<p>${b('離得遠的幾乎直線；越靠近偏得越多，路徑是一條彎向外側的曲線（雙曲線）；正對的那一個直接被彈回原路。所有路徑都是被「推開」，因為兩者都帶正電。','Distant ones go nearly straight; closer ones bend more, curving away (hyperbolas); the head-on one bounces straight back. Every path bends away, because both are positive.')}</p>`},
 next:['電子為什麼不會掉進原子核？為什麼每種元素發出的光，都只有幾種特定的顏色？','Why don\'t electrons fall into the nucleus? And why does each element give off light in only a few specific colors?','拉塞福的學生波耳，把「能量一份一份」的想法用在電子身上。','Rutherford\'s student Niels Bohr applied the idea of energy in packets to the electron.'],
 std:['為 HS-PS1-1（用元素週期表與原子的電子排列預測性質）與 HS-PS1-8（核反應中原子核組成的變化）打基礎。科學實踐：SEP 2 建立與使用模型、SEP 7 以證據進行論證。跨科概念：尺度、比例與數量；結構與功能。','Groundwork for HS-PS1-1 (using atomic structure to predict properties) and HS-PS1-8 (changes in nuclear composition during nuclear processes). Practices: SEP 2 Developing and Using Models, SEP 7 Engaging in Argument from Evidence. Crosscutting concepts: Scale, Proportion, and Quantity; Structure and Function.']
}),init(){
const {t,tp,css,fit,$}=P;let mode='pud',tr=[],cnt={s:0,m:0,b:0},stop=()=>{},nP=0;
const fire=()=>{const H=$('ruc').clientHeight,W=$('ruc').clientWidth,cx=W*.55,cy=H/2;let y0=cy+(Math.random()-.5)*H*.9;if(mode==='nuc'&&Math.random()<.08)y0=cy+(Math.random()-.5)*12;
 const p={x:0,y:y0,vx:300,vy:0,path:[[0,y0]]};const K=mode==='nuc'?4e5:0;
 for(let i=0;i<900;i++){const dt=.004;let ax=0,ay=0;if(mode==='nuc'){const dx=p.x-cx,dy=p.y-cy,r=Math.max(4,Math.hypot(dx,dy));ax=K*dx/r**3;ay=K*dy/r**3}else{if(Math.abs(p.x-cx)<H*.4)ay=(Math.random()-.5)*400}
  p.vx+=ax*dt;p.vy+=ay*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;if(i%3===0)p.path.push([p.x,p.y]);if(p.x<-10||p.x>W+10||p.y<-10||p.y>H+10)break}
 const ang=Math.abs(Math.atan2(p.vy,p.vx))*180/Math.PI;ang<10?cnt.s++:ang<90?cnt.m++:cnt.b++;tr.push(p.path);if(tr.length>60)tr.shift();nP++;
 if(mode==='pud'&&nP>=40)P.reveal('ru1');if(mode==='nuc'&&cnt.b>0)P.reveal('ru2')};
const draw=()=>{const[x,W,H]=fit($('ruc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);const cx=W*.55,cy=H/2;
 if(mode==='pud'){x.fillStyle='rgba(209,73,91,.18)';x.beginPath();x.arc(cx,cy,H*.42,0,7);x.fill();x.fillStyle='#2160d8';for(let k=0;k<14;k++){const a=k*2.4,r=H*.36*Math.sqrt((k+1)/14);x.beginPath();x.arc(cx+Math.cos(a)*r,cy+Math.sin(a)*r,4,0,7);x.fill()}}
 else{x.fillStyle='#d1495b';x.beginPath();x.arc(cx,cy,6,0,7);x.fill();x.strokeStyle=css('--line');x.setLineDash([3,5]);x.beginPath();x.arc(cx,cy,H*.42,0,7);x.stroke();x.setLineDash([])}
 x.strokeStyle='#e8893a';x.lineWidth=1.3;x.globalAlpha=.7;tr.forEach(pt=>{x.beginPath();pt.forEach((q,i)=>i?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1]));x.stroke()});x.globalAlpha=1};
const bars=()=>{const n=cnt.s+cnt.m+cnt.b||1;$('rub').innerHTML=[[t('幾乎直直穿過（< 10°）','Nearly straight (< 10°)'),cnt.s],[t('偏轉（10–90°）','Deflected (10–90°)'),cnt.m],[t('彈回來（> 90°）','Bounced back (> 90°)'),cnt.b]].map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${r[1]/n*100}%;background:var(--cu)"></div></div><span class="v">${r[1]}</span></div>`).join('')};
P.seg('rum',[['pud','葡萄乾布丁','Plum pudding'],['nuc','原子核','Nucleus']],()=>mode,v=>{mode=v;tr=[];cnt={s:0,m:0,b:0};nP=0;draw();bars()});
P.gate('rugo',[],()=>t('發射 50 個','Fire 50'));
$('rugo').onclick=()=>{stop();let k=0,a=0;stop=P.run(dt=>{a+=dt;while(a>.04&&k<50){a-=.04;fire();k++}draw();bars();return k<50})};
$('rucl').onclick=()=>{tr=[];cnt={s:0,m:0,b:0};draw();bars()};
P.pred('ru1',{c:0,o:[['幾乎全部直直穿過，最多偏一點點','Almost all pass straight through, deflecting slightly at most'],['大部分被彈回來','Most bounce back'],['全部被擋住','All are stopped']],f:[['選「葡萄乾布丁」，發射看看。','Choose Plum pudding and fire.'],['選「葡萄乾布丁」，發射看看。','Choose Plum pudding and fire.'],['選「葡萄乾布丁」，發射驗證。','Choose Plum pudding and fire to check.']].map((f,i)=>i===0?['選「葡萄乾布丁」，發射驗證。','Choose Plum pudding and fire to check.']:f)});
P.pred('ru2',{c:1,o:[['跟布丁模型的預測一樣','Just what the pudding model predicts'],['大部分直直穿過，但有極少數被彈回來','Most pass straight, but a very few bounce back'],['大部分被彈回來','Most bounce back']],f:[['選「原子核」，多發射幾次看看。','Choose Nucleus and fire a few rounds.'],['選「原子核」，多發射幾次驗證。','Choose Nucleus and fire a few rounds to check.'],['選「原子核」，多發射幾次看看。','Choose Nucleus and fire a few rounds.']]});
P.num('ru3',1,['對。1 cm × 100,000 = 100,000 cm = 1 km。原子核在正中間，電子在 500 m 外。','Right. 1 cm × 100,000 = 100,000 cm = 1 km. The nucleus sits at the center with electrons 500 m away.'],['提示：100,000 cm 是幾公里？','Hint: how many kilometers is 100,000 cm?'],.02);
P.num('ru4',45.5,['對。1.44 × 158 ÷ 5 ≈ 45.5 fm。','Right. 1.44 × 158 ÷ 5 ≈ 45.5 fm.'],['提示：直接代入 d = 1.44 × 158 ÷ 5。','Hint: substitute into d = 1.44 × 158 ÷ 5.'],1);
P.pred('ru5',{now:1,c:1,o:[['金箔上有小洞','The foil has tiny holes'],['原子幾乎是空的，原子核太小，很少被正對到','Atoms are nearly empty and nuclei so small that a direct hit is rare'],['α 粒子太小，碰不到任何東西','Alpha particles are too small to touch anything']],f:[['金箔大約有幾百層原子，沒有洞。','The foil is a few hundred atoms thick, with no holes.'],['對。','Right.'],['α 粒子的確會被少數原子核彈回來，所以它碰得到。','Some alphas do bounce off nuclei, so they can interact.']]});
bars();P.watch($('ruc'),draw);P.onLang(bars);
}});}
