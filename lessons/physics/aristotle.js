{const b=P.b;
P.reg('aristotle',{html:`
<section class="band"><div class="wrap hero">
 <div>
  <span class="chip">${b('節點 1 · 約前 350','Node 1 · c. 350 BCE')}</span>
  <h1>${b('亞里斯多德：一個很合理的錯誤','Aristotle: a very reasonable mistake')}</h1>
  <p class="lede" style="margin-top:14px">${b('亞里斯多德的物理被相信了將近兩千年，因為它跟大家每天看到的事完全吻合。這一課要找出：它為什麼看起來是對的，以及它漏掉了哪一個藏起來的變因。','Aristotle\'s physics was believed for almost two thousand years because it matched what everyone saw every day. In this lesson you find out why it looked right, and which hidden variable it missed.')}</p>
 </div>
 </div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('舊觀念','The old idea')}</span>
 <h2>${b('亞里斯多德的運動規則','Aristotle\'s rules of motion')}</h2>
 <div class="two">
  <div style="display:grid;gap:12px">
   <div class="card"><h3>${b('自然運動：回到自己的位置','Natural motion: going home')}</h3><p style="margin:0">${b('世界由土、水、空氣、火組成，每種東西都想回到自己那一層。石頭往下掉，是因為它「想」回到地面。','The world is made of earth, water, air, and fire, and each wants to return to its own layer. A stone falls because it "wants" to reach the ground.')}</p></div>
   <div class="card"><h3>${b('受迫運動：要一直推才會動','Forced motion: needs a constant push')}</h3><p style="margin:0">${b('推車、丟石頭這種不自然的運動，必須有東西一直推。推的東西一停，運動就停。','Unnatural motion, like a pushed cart or a thrown stone, needs something pushing the whole time. Stop pushing and the motion stops.')}</p></div>
   <div class="card"><h3>${b('速度規則','The speed rule')}</h3><p style="margin:0">${b('掉落速度 ∝ 重量 ÷ 介質的阻力。越重掉越快，在越稀薄的介質裡也掉越快。','Falling speed ∝ weight ÷ resistance of the medium. Heavier falls faster, and anything falls faster in a thinner medium.')}</p></div>
  </div>
  <svg class="ill" viewBox="0 0 360 300" role="img" aria-label="Aristotle's four layers">
   <rect width="360" height="300" rx="14" fill="var(--panel)"/>
   <rect x="20" y="20" width="320" height="56" rx="8" fill="#e8893a" opacity=".85"/>
   <rect x="20" y="82" width="320" height="64" rx="8" fill="#cfe6f3"/>
   <rect x="20" y="152" width="320" height="64" rx="8" fill="#4f8fbf" opacity=".85"/>
   <rect x="20" y="222" width="320" height="58" rx="8" fill="#8a6a3a"/>
   <g font-size="15" font-weight="700" fill="#fff"><text x="34" y="54">火 Fire</text><text x="34" y="190">水 Water</text><text x="34" y="256">土 Earth</text></g>
   <text x="34" y="120" font-size="15" font-weight="700" fill="#14202b">空氣 Air</text>
   <circle cx="250" cy="112" r="14" fill="#56616d"/><path d="M250 132 L250 206" stroke="#14202b" stroke-width="3"/><path d="M242 198 L250 214 L258 198Z" fill="#14202b"/>
   <circle cx="300" cy="186" r="10" fill="#bbb" opacity=".9"/><circle cx="306" cy="172" r="8" fill="#ccc" opacity=".9"/><path d="M300 160 L300 80" stroke="#fff" stroke-width="3"/><path d="M292 88 L300 72 L308 88Z" fill="#fff"/>
  </svg>
 </div>
 <p style="margin-top:16px">${b('這套規則能解釋幾乎所有日常現象：推車放手會停、羽毛飄得比石頭慢、石頭在水裡沉得比在空氣裡慢。所以它不是迷信，而是一個很努力的模型。','These rules explain nearly everything in daily life: a cart stops when you let go, a feather drifts slower than a stone, a stone sinks slower in water than it falls in air. It wasn\'t superstition. It was a serious model.')}</p>
</div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('對不上的地方','The contradiction')}</span>
 <h2>${b('他觀察的世界，到處都有阻力','The world he observed was full of resistance')}</h2>
 <p>${b('亞里斯多德看到的每一次掉落，都發生在空氣或水裡。如果「阻力」才是讓重的東西比較快的原因，那他的規則描述的就不是「掉落」本身，而是「掉落加上阻力」。','Every fall Aristotle watched happened in air or water. If resistance is what makes heavy things faster, then his rule describes not falling itself, but falling plus resistance.')}</p>
 <p>${b('要分辨這兩件事，就要控制變因：讓兩顆球大小、形狀完全一樣，只改重量，再一層一層改變介質，從蜂蜜到真空。古代做不出真空（第一台真空幫浦要到 1650 年），但我們可以用模擬做。','To tell the two apart, control the variables: two balls with exactly the same size and shape, different weights only, then change the medium step by step, from honey down to vacuum. Nobody could make a vacuum in ancient times (the first vacuum pump came in 1650), but we can simulate one.')}</p>
</div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('先預測，再實驗','Predict, then test')}</span>
 <h2>${b('實驗：鉛球和鋁球，放進不同的介質','Experiment: a lead ball and an aluminum ball in different media')}</h2>
 <p>${b('兩顆球一樣大，鉛球 1 kg，鋁球 0.24 kg（鉛的密度大約是鋁的 4.2 倍）。管子高 2 m。','Both balls are the same size. Lead ball 1 kg, aluminum ball 0.24 kg (lead is about 4.2 times denser). The tube is 2 m tall.')}</p>
 <div class="two">
  <div><h3>${b('預測 A：在蜂蜜裡，誰先到底？','Prediction A: in honey, which reaches the bottom first?')}</h3><div class="opts" id="pa1"></div><div id="fa1"></div></div>
  <div><h3>${b('預測 B：在真空裡（完全沒有阻力），誰先到底？','Prediction B: in a vacuum (no resistance at all), which reaches the bottom first?')}</h3><div class="opts" id="pa2"></div><div id="fa2"></div></div>
 </div>
 <div class="ctrl"><span>${b('介質','Medium')}</span><div class="seg" id="amed"></div></div>
 <div class="fig tall"><canvas id="ac"></canvas></div>
 <div class="ctrl"><button class="pri" id="ago" disabled></button><span class="read" id="ar"></span></div>
 <div id="atbl"></div>
 <p class="std">${b('四種介質都試試看。至少要跑過蜂蜜和真空，才能進到下一步。','Try all four media. You need at least honey and vacuum to move on.')}</p>
</div></section>

<section class="band lock" id="a-idea"><div class="wrap">
 <span class="chip">${b('新想法','The new idea')}</span>
 <h2>${b('亞里斯多德只對了一半','Aristotle was half right')}</h2>
 <div class="two">
  <div>
   <p>${b('看你的表格最後一欄：在蜂蜜裡，鋁球花的時間大約是鉛球的 4 倍，剛好接近重量比 4.2。亞里斯多德的「越重越快」在很黏的介質裡幾乎完全成立。','Look at the last column of your table. In honey, the aluminum ball takes about 4 times as long as the lead ball, close to the weight ratio of 4.2. In a thick medium, Aristotle\'s "heavier is faster" is almost exactly true.')}</p>
   <p>${b('介質越稀薄，比例越接近 1。到了真空，兩顆球同時到。所以重量本身不決定掉落快慢，是重量和阻力「一起」決定的。','The thinner the medium, the closer the ratio gets to 1. In a vacuum, both arrive together. So weight alone doesn\'t set how fast things fall. Weight and resistance decide it together.')}</p>
  </div>
  <div class="key" style="margin-top:0">
   <div class="big">${b('先拿掉干擾，再找規則','Remove the noise, then find the law')}</div>
   <p style="margin:6px 0 0">${b('物理學家找規律的方法：想像把阻力、摩擦這些干擾全部拿掉，看最簡單的情況長什麼樣子，再把干擾加回來。亞里斯多德研究的是「有干擾的版本」，所以規則被干擾蓋住了。','How physicists find laws: imagine removing every disturbance, like resistance and friction, study the simplest case, then add the disturbances back. Aristotle studied the noisy version, so the law was buried under the noise.')}</p>
  </div>
 </div>
</div></section>

${P.adv([["用方程式描述「重量 + 阻力」", "Writing \"weight + resistance\" as an equation", [["低速時，阻力大約和速度成正比：F阻 = kv。合力 = 重力 − 阻力：", "At low speed, drag is roughly proportional to speed: F_drag = kv. Net force = weight − drag:"], "=m·(dv/dt) = mg − kv", ["速度越快阻力越大，直到阻力等於重力，加速度變 0，速度不再增加。這個「終端速度」：", "The faster it goes, the bigger the drag, until drag equals weight. Acceleration hits zero and speed stops rising. This terminal velocity is:"], "=v_t = mg / k", ["v_t 和 m 成正比：同樣大小的球，重 4.2 倍，終端速度也快 4.2 倍。這就是蜂蜜實驗裡亞里斯多德「看起來對」的原因。", "v_t is proportional to m: for the same size ball, 4.2 times the mass means 4.2 times the terminal speed. That's why Aristotle looked right in the honey experiment."]]], ["阻力趨近 0 時", "When resistance goes to zero", [["完整的解是 v(t) = v_t(1 − e^(−t/τ))，其中 τ = m/k。當 k → 0，τ → ∞，用 e^(−x) ≈ 1 − x 展開：", "The full solution is v(t) = v_t(1 − e^(−t/τ)) with τ = m/k. As k → 0, τ → ∞; expand with e^(−x) ≈ 1 − x:"], "=v(t) ≈ v_t · t/τ = (mg/k)·(k/m)·t = gt", ["m 消掉了。沒有阻力時，速度只和時間有關，跟質量無關。", "The m cancels. Without resistance, speed depends only on time, not on mass."]]]])}
<section class="band lock" id="a-apply"><div class="wrap">
 <span class="chip">${b('拿來用','Use it')}</span>
 <h2>${b('用「重量 + 阻力」的想法解釋現象','Explain these with "weight + resistance"')}</h2>
 ${P.phtml('a3','1. 1971 年，太空人在月球上同時放開一根槌子和一根羽毛。月球沒有空氣。結果是？','1. In 1971, an astronaut on the Moon dropped a hammer and a feather at the same time. The Moon has no air. What happened?')}
 ${P.phtml('a4','2. 兩個體型、姿勢完全一樣的跳傘員，一個 60 kg，一個 90 kg。在空氣中，誰的最高速度比較大？','2. Two skydivers with the same body shape and position: one is 60 kg, the other 90 kg. In air, which one reaches the higher top speed?')}
 ${P.qhtml('a5','3. 在蜂蜜裡，鉛球最後的等速是 0.6 m/s。鋁球輕 4.2 倍，它的最後速度大約是多少？','3. In honey, the lead ball settles at 0.6 m/s. The aluminum ball is 4.2 times lighter. About what speed does it settle at?','m/s')}
 <div class="q" style="border:0">
  <h3>${b('4. 拿紙筆：畫出以固定速度下降的跳傘員受到的力','4. Pencil and paper: draw the forces on a skydiver falling at a constant speed')}</h3>
  <p>${b('用箭頭的長短表示力的大小。畫好再看答案。','Use arrow length to show how strong each force is. Then check.')}</p>
  <button data-show="a-ans">${b('我畫好了，看答案','I\'ve drawn it, show me')}</button>
  <div id="a-ans" class="hide" style="margin-top:14px"><div class="two">
   <svg class="ill" viewBox="0 0 300 240" role="img" aria-label="Skydiver forces"><rect width="300" height="240" rx="14" fill="var(--panel)"/>
    <ellipse cx="150" cy="120" rx="46" ry="14" fill="var(--ink)"/><circle cx="198" cy="116" r="11" fill="var(--ink)"/>
    <line x1="150" y1="104" x2="150" y2="34" stroke="var(--ok)" stroke-width="5"/><path d="M140 44 L150 24 L160 44Z" fill="var(--ok)"/>
    <line x1="150" y1="136" x2="150" y2="206" stroke="var(--bad)" stroke-width="5"/><path d="M140 196 L150 216 L160 196Z" fill="var(--bad)"/>
    <text x="164" y="46" font-size="14" font-weight="700" fill="var(--ok)">空氣阻力 Drag</text><text x="164" y="204" font-size="14" font-weight="700" fill="var(--bad)">重力 Weight</text></svg>
   <div><p>${b('兩個箭頭一樣長。速度固定代表沒有在加速，所以向上的空氣阻力剛好等於向下的重力。','The two arrows are the same length. Constant speed means no acceleration, so upward air drag exactly equals downward weight.')}</p>
   <p>${b('越重的跳傘員需要更大的阻力才能平衡，所以要掉得更快才會停止加速。這就是問題 2 的答案。','A heavier skydiver needs more drag to balance, so they must fall faster before they stop speeding up. That\'s the answer to question 2.')}</p></div>
  </div></div>
 </div>
</div></section>
${P.nextBand('aristotle','拿掉阻力之後，掉落跟重量真的完全無關嗎？在沒有真空機的年代，要怎麼證明？','Once resistance is gone, is falling truly independent of weight? How could anyone prove it before vacuum pumps existed?','伽利略想到兩個辦法：一個思想實驗，和一道把掉落放慢的斜坡。','Galileo came up with two tools: a thought experiment, and a ramp that slows a fall down.')}
${P.std('為 HS-PS2-1 打基礎（運動與力的關係）。科學實踐：SEP 2 建立與使用模型、SEP 3 規劃與執行調查（控制變因）。跨科概念：因果、系統與系統模型。模擬使用簡化的線性阻力模型，並忽略浮力。','Groundwork for HS-PS2-1 (relationship between force and motion). Practices: SEP 2 Developing and Using Models, SEP 3 Planning and Carrying Out Investigations (controlling variables). Crosscutting concepts: Cause and Effect, Systems and System Models. The simulation uses a simplified linear drag model and ignores buoyancy.')}
`,init(){
const {t,tp,css,fit,$}=P,G=9.8,LEN=2,M=[1,.24];
const meds=[{id:'honey',z:'蜂蜜',e:'Honey',k:16,c:'rgba(214,150,40,.45)'},{id:'water',z:'水',e:'Water',k:3.3,c:'rgba(70,140,210,.3)'},{id:'air',z:'空氣',e:'Air',k:.15,c:'rgba(150,170,190,.12)'},{id:'vac',z:'真空',e:'Vacuum',k:0,c:'rgba(0,0,0,0)'}];
let med=meds[0],st={t:0,run:0},res={},stop=()=>{};
const xt=(m,k,tt)=>{if(!k)return .5*G*tt*tt;const tau=m/k,vt=G*tau;return vt*(tt-tau*(1-Math.exp(-tt/tau)))};
const fin=(m,k)=>{let lo=0,hi=100;for(let i=0;i<60;i++){const mid=(lo+hi)/2;xt(m,k,mid)>=LEN?hi=mid:lo=mid}return hi};
const segs=()=>{$('amed').innerHTML=meds.map(m=>`<button aria-pressed="${m===med}" data-m="${m.id}">${t(m.z,m.e)}</button>`).join('')};
$('amed').onclick=e=>{const bt=e.target.closest('button');if(!bt)return;stop();med=meds.find(m=>m.id===bt.dataset.m);st.t=0;segs();draw();$('ar').textContent=''};
const draw=()=>{const[x,W,H]=fit($('ac'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const top=56,bot=H-50,tw=Math.min(110,W*.2),ink=css('--ink'),mute=css('--mute');
 const T=[fin(M[0],med.k),fin(M[1],med.k)];
 [W*.32,W*.68].forEach((cx,i)=>{x.fillStyle=med.c;x.fillRect(cx-tw/2,top,tw,bot-top);x.strokeStyle=mute;x.lineWidth=2;x.strokeRect(cx-tw/2,top,tw,bot-top);
  x.fillStyle=mute;x.font='11px Archivo';x.textAlign='right';for(let m=0;m<=LEN;m+=.5){const y=top+(bot-top)*m/LEN;x.fillRect(cx-tw/2-6,y,6,1.5);if(i===0)x.fillText(m+' m',cx-tw/2-10,y+4)}
  const tt=Math.min(st.t,T[i]),r=Math.min(18,tw*.2),y=top+r+(bot-top-2*r)*Math.min(1,xt(M[i],med.k,tt)/LEN);
  x.fillStyle=i?'#b9c2cc':'#4a5560';x.beginPath();x.arc(cx,y,r,0,7);x.fill();
  x.fillStyle=ink;x.textAlign='center';x.font='700 14px "Noto Sans TC",Archivo';x.fillText(i?tp('鋁球 0.24 kg','Aluminum 0.24 kg'):tp('鉛球 1 kg','Lead 1 kg'),cx,top-30);
  x.font='600 13px Archivo';x.fillText(`t = ${tt.toFixed(2)} s`,cx,top-12);
  if(st.t>=T[i]){x.fillStyle=css('--ok');x.fillText(tp('到底','Bottom'),cx,bot+22)}});
 x.textAlign='left';x.fillStyle=mute;x.font='600 13px "Noto Sans TC",Archivo';x.fillText(tp(med.z,med.e),10,22)};
const tbl=()=>{const rows=meds.filter(m=>res[m.id]).map(m=>{const r=res[m.id];return `<tr><td>${t(m.z,m.e)}</td><td>${r[0].toFixed(2)} s</td><td>${r[1].toFixed(2)} s</td><td><div class="barc"><div class="bar" style="width:${Math.min(r[1]/r[0],5)*24}px"></div>${(r[1]/r[0]).toFixed(2)}</div></td></tr>`}).join('');
 $('atbl').innerHTML=rows?`<div class="scroll"><table><thead><tr><th>${t('介質','Medium')}</th><th>${t('鉛球時間','Lead time')}</th><th>${t('鋁球時間','Aluminum time')}</th><th>${t('鋁 ÷ 鉛','Aluminum ÷ lead')}</th></tr></thead><tbody>${rows}</tbody></table></div>`:''};
const lab=()=>t('放球','Release');
P.pred('a1',{c:0,o:[['鉛球明顯比較快','Lead, clearly faster'],['幾乎同時到','Almost the same time'],['鋁球比較快','Aluminum is faster']],f:[['放球看看，再算一下快幾倍。','Release and see, then work out how many times faster.'],['放球看看蜂蜜裡是不是也一樣。','Release and see if that holds in honey too.'],['放球看看。','Release and see.']]});
P.pred('a2',{c:1,o:[['鉛球比較快','Lead is faster'],['同時到','They arrive together'],['鋁球比較快','Aluminum is faster']],f:[['切到真空再放一次看看。','Switch to vacuum and release again.'],['切到真空，放球驗證。','Switch to vacuum and release to check.'],['切到真空再放一次看看。','Switch to vacuum and release again.']]});
P.gate('ago',['a1','a2'],lab);
$('ago').onclick=()=>{stop();st.t=0;const T=[fin(M[0],med.k),fin(M[1],med.k)],end=Math.max(...T),sp=end/5;
 $('ar').textContent=sp<1?tp(`慢動作：真實速度的 ${(sp).toFixed(2)} 倍`,`Slow motion: ${sp.toFixed(2)}× real speed`):tp(`快轉：真實速度的 ${sp.toFixed(1)} 倍`,`Fast-forward: ${sp.toFixed(1)}× real speed`);
 stop=P.run(dt=>{st.t+=dt*sp;draw();if(st.t>=end){res[med.id]=T;tbl();if(med.id==='honey')P.reveal('a1');if(med.id==='vac')P.reveal('a2');if(res.honey&&res.vac){P.show('a-idea');P.show('a-apply');P.show('aristotle-next')}return false}})};
P.pred('a3',{now:1,c:1,o:[['槌子先落地','The hammer landed first'],['同時落地','They landed at the same time'],['羽毛飄著，很久才落地','The feather drifted down slowly']],f:[['沒有空氣就沒有阻力，重量不再造成差別。','No air means no resistance, so weight makes no difference.'],['對。這是 1971 年阿波羅 15 號的真實實驗，有影片可以看。','Right. This was a real demonstration on Apollo 15 in 1971, and there\'s video of it.'],['羽毛在地球上會飄，是因為空氣。月球上沒有空氣。','A feather drifts on Earth because of air. The Moon has none.']]});
P.pred('a4',{now:1,c:1,o:[['60 kg 的比較快','The 60 kg one'],['90 kg 的比較快','The 90 kg one'],['一樣快','The same']],f:[['想想蜂蜜實驗：形狀一樣時，重的那個最後速度比較大。','Think of the honey experiment: with the same shape, the heavier one reaches a higher final speed.'],['對。在有阻力的情況下，重的要掉得更快，阻力才大到能平衡它的重量。','Right. With resistance, the heavier one has to fall faster before drag grows big enough to balance its weight.'],['在真空裡才會一樣。空氣裡有阻力，就跟蜂蜜實驗一樣。','Only in a vacuum. Air has resistance, just like the honey experiment.']]});
P.num('a5',.143,['對。在很黏的介質裡，最後速度跟重量成正比：0.6 ÷ 4.2 ≈ 0.14 m/s。','Right. In a thick medium, final speed is proportional to weight: 0.6 ÷ 4.2 ≈ 0.14 m/s.'],['提示：看表格，蜂蜜裡時間比大約是 4。速度跟時間會怎麼對應？','Hint: in your table, the honey time ratio is about 4. How does speed relate to time?'],.02);
segs();P.watch($('ac'),draw);P.onLang(()=>{segs();tbl()});
}});}
