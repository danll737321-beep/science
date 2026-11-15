{const b=P.b;
P.reg('fma',{html:`
<section class="band"><div class="wrap hero">
 <div>
  <span class="chip">${b('節點 6 · 1687','Node 6 · 1687')}</span>
  <h1>${b('F = ma：力改變的是速度，不是位置','F = ma: force changes velocity, not position')}</h1>
  <p class="lede" style="margin-top:14px">${b('伽利略證明了「維持運動不需要力」。那力到底在做什麼？這一課你要自己收集數據，畫出圖，找出力、質量和加速度之間的關係。','Galileo showed that keeping motion going takes no force. So what does force actually do? In this lesson you collect your own data, plot it, and find how force, mass, and acceleration relate.')}</p>
 </div>
 </div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('舊觀念 → 線索','Old idea → clue')}</span>
 <h2>${b('從「力造成速度」到「力造成速度的改變」','From "force causes speed" to "force causes change in speed"')}</h2>
 <div class="two">
  <div class="card"><h3>${b('亞里斯多德','Aristotle')}</h3><p style="margin:0">${b('速度跟推力成正比：推力 2 倍，速度 2 倍；不推就停。','Speed is proportional to the push: double the push, double the speed; stop pushing and it stops.')}</p></div>
  <div class="card"><h3>${b('伽利略的慣性','Galileo\'s inertia')}</h3><p style="margin:0">${b('沒有外力時，速度保持不變。那如果有力，力一定是讓速度「改變」。','With no outside force, velocity stays the same. So when there is a force, it must change the velocity.')}</p></div>
 </div>
 <p style="margin-top:14px">${b('速度每秒改變多少，叫做加速度 a（單位 m/s²）。剩下的問題：a 跟推力 F、物體質量 m 有什麼關係？','How much velocity changes per second is called acceleration a (units m/s²). The remaining question: how does a depend on the push F and the object\'s mass m?')}</p>
 <div class="two" style="margin-top:8px">
  <div><h3>${b('預測 A：同一台車，推力變 2 倍，加速度？','Prediction A: same cart, double the force. Acceleration?')}</h3><div class="opts" id="pf1"></div><div id="ff1"></div></div>
  <div><h3>${b('預測 B：推力一樣，車子質量變 2 倍，加速度？','Prediction B: same force, double the cart\'s mass. Acceleration?')}</h3><div class="opts" id="pf2"></div><div id="ff2"></div></div>
 </div>
</div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('實驗','Test it')}</span>
 <h2>${b('實驗：無摩擦軌道上的實驗車','Experiment: a lab cart on a frictionless track')}</h2>
 <p>${b('用固定大小的力推車子，量它從靜止跑完 4 m 要多久（光電閘計時）。用伽利略的方法算加速度：d = ½at²，所以 a = 2d ÷ t²。每跑一次，數據就會記到表格和圖上。','Push the cart with a steady force and time how long it takes to cover 4 m from rest (photogate timer). Use Galileo\'s method for acceleration: d = ½at², so a = 2d ÷ t². Each run is added to the table and the graph.')}</p>
 <div class="fig"><canvas id="fc"></canvas></div>
 <div class="ctrl"><button class="pri" id="fgo" disabled></button>
  <label>${b('推力 F','Force F')} <input type="range" id="fF" min="1" max="20" step="1" value="6"> <span class="read" id="fFv">6 N</span></label>
  <label>${b('質量 m','Mass m')} <input type="range" id="fm" min="1" max="5" step="0.5" value="2"> <span class="read" id="fmv">2.0 kg</span></label></div>
 <p class="read" id="fr"></p>
 <p class="std">${b('至少跑 4 次：固定質量換幾種力，再換一個質量。真實的測量會有一點誤差，模擬也加了 ±2% 的誤差。','Do at least 4 runs: a few forces at one mass, then another mass. Real measurements have small errors, so the simulation adds ±2% noise.')}</p>
 <div class="two">
  <div><div class="ctrl" style="margin-top:0"><span>${b('橫軸','x-axis')}</span><div class="seg" id="fx"></div></div><div class="chart" id="fch"><svg id="fsv"></svg></div></div>
  <div id="ftbl"></div>
 </div>
</div></section>

<section class="band lock" id="f-idea"><div class="wrap">
 <span class="chip">${b('新想法','The new idea')}</span>
 <h2>${b('看圖說話：a = F ÷ m','Read the graph: a = F ÷ m')}</h2>
 <div class="two">
  <div>
   <p>${b('橫軸用 F 時，每種質量各自排成一條通過原點的直線：推力 2 倍，加速度 2 倍。質量越大，線越平：同樣的力，加速度比較小。','With F on the x-axis, each mass forms its own straight line through the origin: double the force, double the acceleration. Heavier masses give flatter lines: same force, less acceleration.')}</p>
   <p>${b('把橫軸換成 F ÷ m，所有的點都落在同一條斜率 1 的直線上。這就是 a = F/m。','Switch the x-axis to F ÷ m and every point falls on one line with slope 1. That is a = F/m.')}</p>
  </div>
  <div class="key" style="margin-top:0"><div class="big">F = ma</div>
   <p style="margin:6px 0 0">${b('合力 = 質量 × 加速度。力的單位「牛頓」N 就是這樣定義的：讓 1 kg 產生 1 m/s² 加速度的力。注意 F 是「合力」：所有的力（推力、摩擦力、重力……）加起來之後剩下的那個。','Net force = mass × acceleration. The unit newton (N) is defined this way: the force that gives 1 kg an acceleration of 1 m/s². F is the net force: what\'s left after adding every force (push, friction, gravity...).')}</p></div>
 </div>
 <p style="margin-top:14px">${b('這也解釋了伽利略的觀察：所有東西掉得一樣快。重的東西受到的重力比較大，但它的質量也比較大，兩個一除，加速度都是 9.8 m/s²。','This also explains Galileo\'s observation that everything falls equally fast. A heavier object feels more gravity, but it also has more mass. Divide one by the other and the acceleration is 9.8 m/s² for all.')}</p>
</div></section>

${P.adv([["從兩條直線合成一條式子", "Combining two straight-line results into one law", [["數據告訴我們：m 固定時 a ∝ F；F 固定時 a ∝ 1/m。兩個合起來：", "The data say: at fixed m, a ∝ F; at fixed F, a ∝ 1/m. Combined:"], "=a = k·F/m", ["選擇力的單位讓 k = 1：1 N 定義為讓 1 kg 產生 1 m/s² 的力。所以 F = ma，1 N = 1 kg·m/s²。", "Choose the force unit so k = 1: 1 N is defined as the force that gives 1 kg an acceleration of 1 m/s². Hence F = ma and 1 N = 1 kg·m/s²."]]], ["為什麼所有東西掉得一樣快", "Why everything falls at the same rate", [["重力 W = mg，代入 a = F/m：", "Weight W = mg; substitute into a = F/m:"], "=a = mg / m = g", ["同一個 m 同時出現在「被拉多用力」和「多難推動」兩個地方，所以消掉了。", "The same m appears both in \"how hard it's pulled\" and \"how hard it is to accelerate,\" so it cancels."]]], ["兩個物體一起被推", "Two objects pushed together", [["用 F 推兩個並排的箱子 m₁ 和 m₂。把它們當成一個系統：a = F/(m₁ + m₂)。後面的箱子只被前面的箱子推，那個接觸力是：", "Push two touching boxes m₁ and m₂ with force F. Treat them as one system: a = F/(m₁ + m₂). The rear box is pushed only by the front box, with contact force:"], "=F_接觸 contact = m₂·a = F·m₂ / (m₁ + m₂)", ["前面的箱子也被後面的箱子以同樣大小反推回來，這就是牛頓第三定律。", "The rear box pushes back on the front box with the same size force. That's Newton's third law."]]]])}
<section class="band lock" id="f-apply"><div class="wrap">
 <span class="chip">${b('拿來用','Use it')}</span>
 <h2>${b('用 F = ma 解題','Solve with F = ma')}</h2>
 ${P.qhtml('f3','1. 一台 1,200 kg 的車，合力是 3,000 N。加速度是多少？','1. A 1,200 kg car has a net force of 3,000 N. What is its acceleration?','m/s²')}
 ${P.qhtml('f4','2. 一顆 0.5 kg 的足球被踢的時候，加速度是 20 m/s²。腳對球的力是多少？','2. A 0.5 kg soccer ball accelerates at 20 m/s² while being kicked. What force does the foot apply?','N')}
 ${P.phtml('f5','3. 實驗車在無摩擦軌道上，以固定 3 m/s 往前滑。它受到的合力是？','3. A cart glides at a constant 3 m/s on a frictionless track. What is the net force on it?')}
 <div class="q" style="border:0">
  <h3>${b('4. 拿紙筆：畫出在地板上被等速推動的箱子受到的所有力','4. Pencil and paper: draw every force on a box pushed across the floor at constant speed')}</h3>
  <p>${b('地板有摩擦。用箭頭長短表示大小。','The floor has friction. Use arrow length to show size.')}</p>
  <button data-show="f-ans">${b('我畫好了，看答案','I\'ve drawn it, show me')}</button>
  <div id="f-ans" class="hide" style="margin-top:14px"><div class="two">
   <svg class="ill" viewBox="0 0 320 230" role="img" aria-label="Free body diagram of box"><rect width="320" height="230" rx="14" fill="var(--panel)"/>
    <rect x="20" y="160" width="280" height="8" fill="var(--mute)"/><rect x="120" y="100" width="80" height="60" rx="4" fill="#c79a5d"/>
    <line x1="60" y1="130" x2="118" y2="130" stroke="var(--mo)" stroke-width="4"/><path d="M110 122 L124 130 L110 138Z" fill="var(--mo)"/>
    <line x1="202" y1="150" x2="262" y2="150" stroke="var(--bad)" stroke-width="4"/><path d="M210 142 L196 150 L210 158Z" fill="var(--bad)"/>
    <line x1="160" y1="98" x2="160" y2="40" stroke="var(--ok)" stroke-width="4"/><path d="M152 48 L160 34 L168 48Z" fill="var(--ok)"/>
    <line x1="160" y1="162" x2="160" y2="212" stroke="var(--ink)" stroke-width="4"/><path d="M152 204 L160 218 L168 204Z" fill="var(--ink)"/>
    <g font-size="12" font-weight="700"><text x="34" y="122" fill="var(--mo)">推 push</text><text x="226" y="142" fill="var(--bad)">摩擦 friction</text><text x="170" y="50" fill="var(--ok)">N</text><text x="170" y="210" fill="var(--ink)">mg</text></g></svg>
   <div><p>${b('推力和摩擦力一樣長，支撐力和重力一樣長，合力是 0。合力為 0，加速度就是 0，所以等速。','The push and friction arrows are equal, and so are the normal force and weight. Net force is 0, so acceleration is 0: constant speed.')}</p>
   <p>${b('常見的錯誤是把推力畫得比摩擦力長，因為「它在往前動」。那是亞里斯多德的想法。','A common mistake is drawing the push longer than friction because "it\'s moving forward." That\'s Aristotle\'s idea.')}</p></div>
  </div></div>
 </div>
</div></section>
${P.nextBand('fma','兩台車相撞的時候，誰推誰、推多久都很難量。有沒有什麼東西，在碰撞前後保持不變？','When two carts collide, who pushes whom and for how long is hard to measure. Is there anything that stays the same before and after?','其實牛頓寫下 F = ma 之前，英國皇家學會已經用碰撞實驗找到答案了。','In fact, before Newton wrote F = ma, the Royal Society had already found the answer with collision experiments.')}
${P.std('表現預期 HS-PS2-1（分析數據，支持牛頓第二定律描述的合力、質量與加速度的數學關係）。科學實踐：SEP 3 規劃與執行調查、SEP 4 分析與詮釋數據。跨科概念：因果、模式。','Performance expectation HS-PS2-1 (analyze data to support the claim that Newton\'s second law describes the mathematical relationship among net force, mass, and acceleration). Practices: SEP 3 Planning and Carrying Out Investigations, SEP 4 Analyzing and Interpreting Data. Crosscutting concepts: Cause and Effect, Patterns.')}
`,init(){
const {t,tp,css,fit,$}=P,D=4,TR=6;
let F=6,m=2,s=0,v=0,tt=0,runs=[],stop=()=>{},xm='F',busy=false;
const draw=()=>{const[x,W,H]=fit($('fc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const gy=H-70,x0=60,k=(W-120)/TR,ink=css('--ink'),mute=css('--mute'),cu=css('--cu');
 x.fillStyle=mute;x.fillRect(x0-20,gy,W-80,6);
 const gx=x0+D*k;x.strokeStyle=css('--mo');x.lineWidth=3;x.beginPath();x.moveTo(gx,gy-90);x.lineTo(gx,gy);x.stroke();
 x.fillStyle=css('--mo');x.font='600 12px "Noto Sans TC",Archivo';x.textAlign='center';x.fillText(tp('光電閘 4 m','Photogate 4 m'),gx,gy-98);
 for(let i=0;i<=TR;i++){x.fillStyle=mute;x.fillRect(x0+i*k,gy+8,1.5,6);x.font='11px Archivo';x.fillText(i+' m',x0+i*k,gy+28)}
 const cw=70,ch=26+m*6,cx=x0+Math.min(s,TR)*k;
 x.fillStyle=cu;x.fillRect(cx-cw,gy-ch-12,cw,ch);x.fillStyle=ink;[cx-cw+14,cx-14].forEach(w=>{x.beginPath();x.arc(w,gy-6,7,0,7);x.fill()});
 x.fillStyle='#fff';x.font='700 13px Archivo';x.fillText(m.toFixed(1)+' kg',cx-cw/2,gy-12-ch/2+5);
 const al=12+F*4;x.strokeStyle=ink;x.lineWidth=4;x.beginPath();x.moveTo(cx-cw-al-4,gy-ch/2-12);x.lineTo(cx-cw-6,gy-ch/2-12);x.stroke();
 x.fillStyle=ink;x.beginPath();x.moveTo(cx-cw-4,gy-ch/2-12);x.lineTo(cx-cw-14,gy-ch/2-19);x.lineTo(cx-cw-14,gy-ch/2-5);x.fill();
 x.textAlign='right';x.fillText(F+' N',cx-cw-al-8,gy-ch/2-8);
 x.textAlign='left';x.font='600 13px Archivo';x.fillStyle=ink;x.fillText(`t = ${tt.toFixed(2)} s   v = ${v.toFixed(2)} m/s`,14,22)};
const cols=['#2160d8','#b8532a','#2a9d8f','#7b4b6a','#c99a1e','#56616d','#d1495b','#1f4a8a','#8a6a3a'];
const mc=mm=>cols[Math.round((mm-1)*2)%cols.length];
const chart=()=>{const sv=$('fsv'),W=sv.clientWidth,H=sv.clientHeight;if(W<10)return;
 const px=r=>xm==='F'?r.F:r.F/r.m,maxX=Math.ceil(Math.max(xm==='F'?20:8,...runs.map(px))/4)*4,maxY=Math.ceil(Math.max(8,...runs.map(r=>r.a))*1.05/4)*4,L=46,B=H-38,Tp=14,Rr=W-14;
 const X=v=>L+(Rr-L)*v/maxX,Y=v=>B-(B-Tp)*v/maxY,ink=css('--ink'),mute=css('--mute');let g='';
 for(let i=0;i<=4;i++){const vy=maxY*i/4,vx=maxX*i/4;g+=`<line x1="${L}" x2="${Rr}" y1="${Y(vy)}" y2="${Y(vy)}" stroke="${mute}" stroke-opacity=".25"/><text x="${L-6}" y="${Y(vy)+4}" font-size="11" text-anchor="end" fill="${mute}">${vy.toFixed(0)}</text><text x="${X(vx)}" y="${B+16}" font-size="11" text-anchor="middle" fill="${mute}">${vx.toFixed(0)}</text>`}
 if(xm==='Fm'&&runs.length)g+=`<line x1="${X(0)}" y1="${Y(0)}" x2="${X(Math.min(maxX,maxY))}" y2="${Y(Math.min(maxX,maxY))}" stroke="${css('--cu')}" stroke-width="2" stroke-dasharray="6 5"/>`;
 runs.forEach(r=>{g+=`<circle cx="${X(px(r))}" cy="${Y(r.a)}" r="6" fill="${mc(r.m)}" stroke="#fff" stroke-width="1.5"/>`});
 g+=`<text x="${(L+Rr)/2}" y="${H-6}" font-size="12" text-anchor="middle" fill="${ink}" font-weight="600">${xm==='F'?tp('推力 F (N)','Force F (N)'):tp('F ÷ m (N/kg)','F ÷ m (N/kg)')}</text><text x="12" y="${(Tp+B)/2}" font-size="12" fill="${ink}" font-weight="600" transform="rotate(-90 12 ${(Tp+B)/2})" text-anchor="middle">a (m/s²)</text>`;
 if(!runs.length)g+=`<text x="${(L+Rr)/2}" y="${(Tp+B)/2}" text-anchor="middle" font-size="13" fill="${mute}">${tp('還沒有數據，先跑一次','No data yet. Do a run.')}</text>`;
 sv.innerHTML=g};
const tbl=()=>{$('fx').innerHTML=[['F','F','F'],['Fm','F ÷ m','F ÷ m']].map(o=>`<button aria-pressed="${xm===o[0]}" data-x="${o[0]}">${o[1]}</button>`).join('');
 $('ftbl').innerHTML=runs.length?`<div class="scroll"><table><thead><tr><th>#</th><th>F (N)</th><th>m (kg)</th><th>${t('4 m 時間','4 m time')}</th><th>a = 2d/t²</th></tr></thead><tbody>${runs.map((r,i)=>`<tr><td><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${mc(r.m)};margin-right:6px"></span>${i+1}</td><td>${r.F}</td><td>${r.m.toFixed(1)}</td><td>${r.t.toFixed(3)} s</td><td>${r.a.toFixed(2)}</td></tr>`).join('')}</tbody></table></div>`:'';chart()};
$('fx').onclick=e=>{const bt=e.target.closest('button');if(!bt)return;xm=bt.dataset.x;tbl()};
const lab=()=>t('推車子','Push the cart');
P.gate('fgo',['f1','f2'],lab);
$('fgo').onclick=()=>{stop();s=0;v=0;tt=0;const a=F/m;let hit=0;$('fr').textContent='';
 stop=P.run(dt=>{tt+=dt;v=a*tt;s=.5*a*tt*tt;draw();
  if(!hit&&s>=D){hit=1;const tm=Math.sqrt(2*D/a)*(1+(Math.random()-.5)*.02);const am=2*D/tm/tm;runs.push({F,m,t:tm,a:am});if(runs.length>16)runs.shift();tbl();
   $('fr').textContent=tp(`光電閘：${tm.toFixed(3)} s → a = 2 × 4 ÷ ${tm.toFixed(3)}² = ${am.toFixed(2)} m/s²`,`Photogate: ${tm.toFixed(3)} s → a = 2 × 4 ÷ ${tm.toFixed(3)}² = ${am.toFixed(2)} m/s²`);
   const ms=new Set(runs.map(r=>r.m)),fs=new Set(runs.map(r=>r.F));if(runs.length>=4&&ms.size>=2&&fs.size>=2){P.reveal('f1','f2');P.show('f-idea');P.show('f-apply');P.show('fma-next')}}
  if(s>=TR){return false}})};
$('fF').oninput=e=>{F=+e.target.value;$('fFv').textContent=F+' N';stop();s=0;v=0;tt=0;draw()};
$('fm').oninput=e=>{m=+e.target.value;$('fmv').textContent=m.toFixed(1)+' kg';stop();s=0;v=0;tt=0;draw()};
P.pred('f1',{c:1,o:[['一樣','The same'],['變 2 倍','Doubles'],['變 4 倍','Quadruples']],f:[['跑兩次比較看看。','Do two runs and compare.'],['跑兩次比較看看。','Do two runs and compare.'],['跑兩次比較看看。','Do two runs and compare.']]});
P.pred('f2',{c:0,o:[['變一半','Halves'],['一樣','The same'],['變 1/4','A quarter']],f:[['換質量再跑一次，看看圖。','Change the mass, run again, and check the graph.'],['換質量再跑一次，看看圖。','Change the mass, run again, and check the graph.'],['換質量再跑一次，看看圖。','Change the mass, run again, and check the graph.']]});
P.num('f3',2.5,['對。a = F/m = 3000 ÷ 1200 = 2.5 m/s²。','Right. a = F/m = 3000 ÷ 1200 = 2.5 m/s².'],['提示：a = F ÷ m。','Hint: a = F ÷ m.'],.05);
P.num('f4',10,['對。F = ma = 0.5 × 20 = 10 N。','Right. F = ma = 0.5 × 20 = 10 N.'],['提示：F = m × a。','Hint: F = m × a.'],.1);
P.pred('f5',{now:1,c:0,o:[['0','Zero'],['往前，大約 3 N','Forward, about 3 N'],['往前，要看車子多重','Forward, depends on the cart\'s mass']],f:[['對。速度沒變，a = 0，所以合力 F = m × 0 = 0。','Right. The speed isn\'t changing, so a = 0 and net force F = m × 0 = 0.'],['速度不變代表加速度是 0。合力會是多少？','Constant speed means zero acceleration. So what is the net force?'],['速度不變代表加速度是 0，不管多重，合力都是 0。','Constant speed means zero acceleration, so the net force is 0 whatever the mass.']]});
P.watch($('fc'),draw);new ResizeObserver(chart).observe($('fch'));P.onLang(tbl);tbl();
}});}
