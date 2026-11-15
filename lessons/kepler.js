{const b=P.b;
P.reg('kepler',{html:`
<section class="band"><div class="wrap hero">
 <div>
  <span class="chip">${b('節點 3 · 1609–1619','Node 3 · 1609–1619')}</span>
  <h1>${b('克卜勒：不肯放過的 8 弧分','Kepler: the 8 arcminutes he refused to ignore')}</h1>
  <p class="lede" style="margin-top:14px">${b('兩千年來，天文學家都用圓形描述行星的軌道。克卜勒手上有當時最精確的觀測資料，而資料和圓形就是差了一點點。這一課要看他怎麼從那一點點誤差，找出行星運動的三條規律。','For two thousand years astronomers described planetary orbits with circles. Kepler had the most precise observations of his time, and the data disagreed with circles by just a little. This lesson follows how that small gap led him to three laws of planetary motion.')}</p>
 </div>
 </div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('舊觀念','The old idea')}</span>
 <h2>${b('天上的運動一定是完美的圓','Motion in the heavens must be perfect circles')}</h2>
 <div class="two">
  <div class="card"><h3>${b('托勒密（約 150 年）','Ptolemy (c. 150 CE)')}</h3><p style="margin:0">${b('地球在中心，行星在「圓上的圓」（本輪）上轉，才能解釋行星有時候看起來會倒退。','Earth at the center; planets ride on circles riding on circles (epicycles) to explain why planets sometimes seem to move backward.')}</p></div>
  <div class="card"><h3>${b('哥白尼（1543 年）','Copernicus (1543)')}</h3><p style="margin:0">${b('改成太陽在中心，簡化了很多，但他還是堅持用圓形，所以還是需要本輪，預測也沒有比較準。','Moved the Sun to the center, which simplified a lot, but he kept circles, so he still needed epicycles and his predictions weren\'t more accurate.')}</p></div>
 </div>
</div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('對不上的地方','The contradiction')}</span>
 <h2>${b('資料比美感重要','Data beats beauty')}</h2>
 <div class="two">
  <div>
   <p>${b('第谷・布拉赫用肉眼和巨大的儀器，花了二十多年記錄行星位置，精確度大約 1 到 2 弧分，是望遠鏡發明前最好的資料。','Tycho Brahe spent over twenty years recording planet positions with his naked eye and huge instruments, accurate to about 1 to 2 arcminutes, the best data before the telescope.')}</p>
   <p>${b('克卜勒的推理：如果第谷的誤差只有 2 弧分，那 8 弧分的差距就不可能是測量誤差，一定是模型錯了。他放棄圓形，改試其他形狀，最後發現橢圓完全吻合。','Kepler\'s reasoning: if Tycho\'s error was only 2 arcminutes, then an 8-arcminute gap couldn\'t be measurement error. The model had to be wrong. He dropped circles, tried other shapes, and found that an ellipse fit perfectly.')}</p>
  </div>
  <div class="card">
   <h3>${b('橢圓是什麼？','What is an ellipse?')}</h3>
   <p style="margin:0">${b('在紙上釘兩根圖釘，套一條繩圈，用筆把繩子拉緊畫一圈，就是橢圓。兩根圖釘叫「焦點」。兩根圖釘越近，越接近圓；越遠，越扁。太陽就在其中一個焦點上。','Push two pins into paper, loop a string around them, pull it tight with a pencil, and draw. That\'s an ellipse. The pins are the foci. The closer the pins, the rounder it is; the farther apart, the flatter. The Sun sits at one focus.')}</p>
  </div>
 </div>
</div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('先預測，再實驗','Predict, then test')}</span>
 <h2>${b('實驗一：行星在橢圓上怎麼跑？','Experiment 1: how does a planet move along an ellipse?')}</h2>
 <h3>${b('預測 A：行星在軌道上哪裡跑得最快？','Prediction A: where on its orbit does the planet move fastest?')}</h3>
 <div class="opts" id="pk1"></div><div id="fk1"></div>
 <div class="fig tall"><canvas id="kc"></canvas></div>
 <div class="ctrl"><button class="pri" id="kgo" disabled></button>
  <label>${b('扁的程度（離心率 e）','Flatness (eccentricity e)')} <input type="range" id="ke" min="0" max="0.8" step="0.05" value="0.5"> <span class="read" id="kev">0.50</span></label>
  <span class="read" id="kr"></span></div>
 <p class="std">${b('每過一樣長的時間（一年的 1/12），就把太陽到行星掃過的區域塗一塊顏色。','Every equal stretch of time (1/12 of a year), the area swept from the Sun to the planet gets a new color.')}</p>
</div></section>

<section class="band lock" id="k-idea1"><div class="wrap">
 <span class="chip">${b('新想法','The new idea')}</span>
 <h2>${b('第一定律和第二定律','The first and second laws')}</h2>
 <div class="two">
  <div class="key" style="margin-top:0"><div class="big">${b('第一定律','Law 1')}</div><p style="margin:6px 0 0">${b('行星的軌道是橢圓，太陽在其中一個焦點上。','Planets move on ellipses with the Sun at one focus.')}</p></div>
  <div class="key" style="margin-top:0"><div class="big">${b('第二定律','Law 2')}</div><p style="margin:6px 0 0">${b('相同的時間內，太陽到行星的連線掃過相同的面積。','In equal times, the line from the Sun to the planet sweeps out equal areas.')}</p></div>
 </div>
 <p style="margin-top:14px">${b('為什麼面積相等就代表靠近太陽時比較快？靠近太陽時，扇形又短又胖；離得遠時，扇形又長又瘦。面積要一樣，靠近時那一塊的弧就要比較長，也就是同樣時間內走了比較遠的路。','Why do equal areas mean faster near the Sun? Near the Sun the slices are short and wide; far away they\'re long and thin. For the areas to match, the near slice needs a longer arc, so the planet covers more distance in the same time.')}</p>
 <p>${b('克卜勒描述了「怎麼跑」，但說不出「為什麼」靠近太陽就會變快。這個問題留給了牛頓。','Kepler described how planets move but couldn\'t explain why they speed up near the Sun. That question was left for Newton.')}</p>
</div></section>

<section class="band lock" id="k-exp2"><div class="wrap">
 <span class="chip">${b('先預測，再實驗','Predict, then test')}</span>
 <h2>${b('實驗二：越遠的行星，一年有多長？','Experiment 2: how long is a year for a more distant planet?')}</h2>
 <h3>${b('預測 B：土星離太陽大約是地球的 9.5 倍遠。土星的一年大約是多久？','Prediction B: Saturn is about 9.5 times farther from the Sun than Earth. About how long is Saturn\'s year?')}</h3>
 <div class="opts" id="pk2"></div><div id="fk2"></div>
 <div class="lock" id="k-data">
  <p>${b('克卜勒花了十年找距離和週期的關係。下面是真實資料（距離以地球為 1，週期以地球年為單位）。試試哪一種組合會讓每個行星算出同一個數字：','Kepler spent ten years hunting for the link between distance and period. Here is the real data (distance with Earth = 1, period in Earth years). Try which combination gives every planet the same number:')}</p>
  <div class="seg" id="kf"></div>
  <div id="ktbl"></div>
  <p class="verdict" id="kv"></p>
 </div>
</div></section>

<section class="band lock" id="k-idea2"><div class="wrap">
 <span class="chip">${b('新想法','The new idea')}</span>
 <h2>${b('第三定律：T² = a³','The third law: T² = a³')}</h2>
 <div class="two">
  <div class="key" style="margin-top:0"><div class="big">T² ∝ a³</div><p style="margin:6px 0 0">${b('週期的平方和距離的立方成正比。用地球年和地球距離當單位時，T² = a³。','The square of the period is proportional to the cube of the distance. In Earth years and Earth distances, T² = a³.')}</p></div>
  <div><p>${b('土星：a = 9.54，a³ = 868，T = √868 ≈ 29.5 年。不是 9.5 年，因為越遠的行星不只路程比較長，速度也比較慢。','Saturn: a = 9.54, a³ = 868, T = √868 ≈ 29.5 years. Not 9.5 years, because a distant planet not only has a longer path but also moves more slowly.')}</p>
  <p>${b('三條定律都是從資料裡找出的規律，克卜勒並不知道背後的原因。80 年後，牛頓用引力把三條定律全部推了出來。','All three laws are patterns found in data. Kepler didn\'t know the cause. Eighty years later, Newton derived all three from gravity.')}</p></div>
 </div>
</div></section>

${P.adv([["橢圓的幾何", "The geometry of an ellipse", [["到兩個焦點的距離和固定：r₁ + r₂ = 2a（a 是半長軸）。焦點離中心 c，離心率 e = c/a，半短軸 b：", "The sum of distances to the two foci is fixed: r₁ + r₂ = 2a (a is the semi-major axis). The foci sit c from the center; eccentricity e = c/a; semi-minor axis b:"], "=b = a·√(1 − e²)　近日點 perihelion = a(1 − e)　遠日點 aphelion = a(1 + e)"]], ["從等面積推出速度比", "Speed ratio from equal areas", [["很短的時間 Δt 內，掃過的三角形面積 ≈ ½·r·(vΔt)（在近日點和遠日點，速度垂直於半徑）。面積相等：", "In a short time Δt, the swept triangle has area ≈ ½·r·(vΔt) (at perihelion and aphelion the velocity is perpendicular to the radius). Equal areas give:"], "=r_近·v_近 = r_遠·v_遠　⇒　v_近 / v_遠 = (1 + e) / (1 − e)", ["這就是模擬裡「最快 ÷ 最慢」的數字。地球的 e = 0.017，所以 1 月只比 7 月快約 3.4%。", "That's the \"fastest ÷ slowest\" figure in the simulation. Earth's e = 0.017, so it's only about 3.4% faster in January than in July."]]], ["用對數找出 1.5 次方", "Finding the 1.5 power with logarithms", [["如果 T = a^n，兩邊取對數：log T = n·log a。把行星的 (log a, log T) 畫成點，會是一條直線，斜率就是 n：", "If T = a^n, take logs: log T = n·log a. Plot the planets as (log a, log T) and you get a straight line whose slope is n:"], "=土星 Saturn: log 29.46 / log 9.537 = 1.469 / 0.979 ≈ 1.50", ["n = 1.5，所以 T = a^1.5，也就是 T² = a³。", "n = 1.5, so T = a^1.5, i.e. T² = a³."]]]])}
<section class="band lock" id="k-apply"><div class="wrap">
 <span class="chip">${b('拿來用','Use it')}</span>
 <h2>${b('用三條定律解題','Solve with the three laws')}</h2>
 ${P.qhtml('k3','1. 一顆小行星離太陽 4 倍地球距離。它繞太陽一圈要幾年？','1. An asteroid orbits at 4 times Earth\'s distance from the Sun. How many years does one orbit take?','年 years')}
 ${P.qhtml('k4','2. 哈雷彗星大約每 76 年回來一次。它軌道的平均距離 a 大約是地球距離的幾倍？','2. Halley\'s Comet returns about every 76 years. Its orbit\'s average distance a is about how many times Earth\'s?','AU')}
 ${P.phtml('k5','3. 地球在 1 月初最靠近太陽。地球在哪個月繞太陽跑得最快？','3. Earth is closest to the Sun in early January. In which month does Earth move fastest around the Sun?')}
 <div class="q" style="border:0">
  <h3>${b('4. 拿紙筆：用兩根圖釘和一條繩子畫一個橢圓','4. Pencil and paper: draw an ellipse with two pins and a loop of string')}</h3>
  <p>${b('選一個焦點當太陽，標出行星最快和最慢的位置，再畫兩塊面積差不多、時間相同的扇形。','Pick one focus as the Sun. Mark where the planet is fastest and slowest, then sketch two equal-time slices with about the same area.')}</p>
  <button data-show="k-ans">${b('我畫好了，看答案','I\'ve drawn it, show me')}</button>
  <div id="k-ans" class="hide" style="margin-top:14px"><div class="two">
   <svg class="ill" viewBox="0 0 340 220" role="img" aria-label="Ellipse with equal areas"><rect width="340" height="220" rx="14" fill="var(--panel)"/>
    <ellipse cx="170" cy="110" rx="140" ry="84" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <path d="M254 110 L310 110 A140 84 0 0 0 296 72 Z" fill="var(--mo)" opacity=".5"/>
    <path d="M254 110 L58 60 A140 84 0 0 0 30 110 Z" fill="var(--cu)" opacity=".5"/>
    <circle cx="254" cy="110" r="10" fill="#e8a33a"/><circle cx="86" cy="110" r="3" fill="var(--mute)"/>
    <text x="268" y="150" font-size="13" font-weight="700" fill="var(--mo)">最快 fastest</text><text x="22" y="150" font-size="13" font-weight="700" fill="var(--cu)">最慢 slowest</text></svg>
   <div><p>${b('靠近太陽的扇形短而寬，遠的扇形長而窄，兩塊面積一樣。最快的點叫近日點，最慢的點叫遠日點。','The slice near the Sun is short and wide, the far slice long and thin, with equal areas. The fastest point is perihelion; the slowest is aphelion.')}</p></div>
  </div></div>
 </div>
</div></section>
${P.nextBand(2,'為什麼是橢圓？為什麼靠近太陽就變快？是什麼東西在拉行星？','Why ellipses? Why faster near the Sun? What is pulling on the planets?','牛頓想到的第一步很奇怪：從一座山上往外丟石頭。','Newton\'s first step was strange: throwing a stone off a mountain.')}
${P.std('表現預期 HS-ESS1-4（用數學或計算模型預測太陽系中天體的運動）。科學實踐：SEP 4 分析與詮釋數據、SEP 5 數學與計算思維。跨科概念：模式；尺度、比例與數量。行星資料：NASA 行星概況表（半長軸、公轉週期）。','Performance expectation HS-ESS1-4 (use mathematical or computational representations to predict the motion of orbiting objects in the solar system). Practices: SEP 4 Analyzing and Interpreting Data, SEP 5 Mathematical and Computational Thinking. Crosscutting concepts: Patterns; Scale, Proportion, and Quantity. Planet data: NASA planetary fact sheets (semi-major axis, orbital period).')}
`,init(){
const {t,tp,css,fit,$}=P;
let e=.5,ph=0,run=false,slices=[[]],cur=[],stop=()=>{},laps=0;const N=12,PER=9;
const solve=M=>{let E=M;for(let i=0;i<20;i++)E-=(E-e*Math.sin(E)-M)/(1-e*Math.cos(E));return E};
const reset=()=>{ph=0;slices=[];cur=[]};
const draw=()=>{const[x,W,H]=fit($('kc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const bb=Math.sqrt(1-e*e),a=Math.min(W*.44,(H-40)/2/bb),B=a*bb,cx=W/2-a*e*.5,cy=H/2,fx=cx+a*e;
 const ink=css('--ink'),mute=css('--mute'),cols=[css('--mo'),css('--cu')];
 const pt=M=>{const E=solve(M);return[cx+a*Math.cos(E),cy-B*Math.sin(E)]};
 slices.concat([cur]).forEach((s,i)=>{if(s.length<2)return;x.globalAlpha=.35;x.fillStyle=cols[i%2];x.beginPath();x.moveTo(fx,cy);s.forEach(p=>x.lineTo(p[0],p[1]));x.closePath();x.fill();x.globalAlpha=1});
 x.strokeStyle=ink;x.lineWidth=1.5;x.beginPath();x.ellipse(cx,cy,a,B,0,0,7);x.stroke();
 x.fillStyle=mute;x.beginPath();x.arc(cx-a*e,cy,3,0,7);x.fill();
 x.fillStyle='#e8a33a';x.beginPath();x.arc(fx,cy,13,0,7);x.fill();
 const [px,py]=pt(ph*2*Math.PI);x.strokeStyle=mute;x.setLineDash([4,4]);x.beginPath();x.moveTo(fx,cy);x.lineTo(px,py);x.stroke();x.setLineDash([]);
 x.fillStyle=css('--mo');x.beginPath();x.arc(px,py,8,0,7);x.fill();
 x.fillStyle=ink;x.font='600 13px "Noto Sans TC",Archivo';x.textAlign='center';x.fillText(tp('太陽','Sun'),fx,cy+30);
 const r=Math.hypot(px-fx,py-cy)/a,v=Math.sqrt(2/r-1);
 $('kr').textContent=tp(`速度 ${v.toFixed(2)}（以平均速度為 1）· 最快 ÷ 最慢 = ${((1+e)/(1-e)).toFixed(2)}`,`Speed ${v.toFixed(2)} (average = 1) · fastest ÷ slowest = ${((1+e)/(1-e)).toFixed(2)}`)};
const lab=()=>run?t('暫停','Pause'):t('開始繞行','Start orbit');
P.gate('kgo',['k1'],lab);
$('kgo').onclick=()=>{if(run){run=false;stop();$('kgo').innerHTML=lab();return}run=true;$('kgo').innerHTML=lab();
 const bb=()=>Math.sqrt(1-e*e);
 stop=P.run(dt=>{const W=$('kc').clientWidth,H=$('kc').clientHeight,a=Math.min(W*.44,(H-40)/2/bb()),cx=W/2-a*e*.5,cy=H/2;
  const n0=Math.floor(ph*N);ph+=dt/PER;const pt=M=>{const E=solve(M);return[cx+a*Math.cos(E),cy-a*bb()*Math.sin(E)]};
  if(Math.floor(ph*N)!==n0){cur.push(pt((n0+1)/N*2*Math.PI));slices.push(cur);cur=[cur[cur.length-1]];if(slices.length>=N){slices=[];laps++;P.reveal('k1');P.show('k-idea1');P.show('k-exp2')}}
  cur.push(pt(ph*2*Math.PI));if(ph>=1)ph-=1;draw()})};
$('ke').oninput=ev=>{e=+ev.target.value;$('kev').textContent=e.toFixed(2);reset();draw()};
P.pred('k1',{c:1,o:[['每個地方都一樣快','Same speed everywhere'],['靠近太陽的地方','Near the Sun'],['離太陽最遠的地方','Farthest from the Sun']],f:[['開始繞行，看速度讀數有沒有變。','Start the orbit and watch the speed reading.'],['開始繞行，看看你對不對，也注意每塊顏色的面積。','Start the orbit to check, and watch the area of each colored slice.'],['開始繞行，看速度讀數在哪裡最大。','Start the orbit and see where the speed reading peaks.']]});
P.pred('k2',{c:1,o:[['大約 9.5 年','About 9.5 years'],['大約 29 年','About 29 years'],['大約 90 年','About 90 years']],f:[['如果軌道長 9.5 倍、速度也一樣，才會是 9.5 年。速度真的一樣嗎？用下面的資料找找看。','That would need the same speed on a 9.5× longer path. Is the speed really the same? Use the data below.'],['用下面的資料檢驗你的答案。','Check your answer with the data below.'],['太多了。用下面的資料找出真正的關係。','Too long. Use the data below to find the real relationship.']]});
P.onPick(k=>{if(k==='k2')P.show('k-data')});
const pl=[['水星','Mercury',.387,.241],['金星','Venus',.723,.615],['地球','Earth',1,1],['火星','Mars',1.524,1.881],['木星','Jupiter',5.203,11.86],['土星','Saturn',9.537,29.46]];
const fs=[['T / a',(T,a)=>T/a],['T² / a',(T,a)=>T*T/a],['T² / a³',(T,a)=>T*T/a**3]];let fi=-1;
const tbl=()=>{$('kf').innerHTML=fs.map((f,i)=>`<button aria-pressed="${fi===i}" data-f="${i}">${f[0]}</button>`).join('');
 const v=fi<0?null:pl.map(p=>fs[fi][1](p[3],p[2]));
 $('ktbl').innerHTML=`<div class="scroll"><table><thead><tr><th>${t('行星','Planet')}</th><th>${t('距離 a','Distance a')}</th><th>${t('週期 T（年）','Period T (yr)')}</th><th>${fi<0?t('選一個組合','Pick a combination'):fs[fi][0]}</th></tr></thead><tbody>${pl.map((p,i)=>`<tr><td>${t(p[0],p[1])}</td><td>${p[2]}</td><td>${p[3]}</td><td>${v?v[i].toFixed(3):'—'}</td></tr>`).join('')}</tbody></table></div>`;
 const vr=$('kv');if(!v){vr.textContent='';return}const ok=Math.max(...v)/Math.min(...v)<1.02;vr.className='verdict '+(ok?'ok':'no');
 vr.innerHTML=ok?t('每個行星都是 1.00！找到規律了。','Every planet gives 1.00! You found the pattern.'):t('數字差很多，不是常數。換一個試試。','The numbers vary a lot, so it isn\'t a constant. Try another.');
 if(ok){P.reveal('k2');P.show('k-idea2');P.show('k-apply');P.show('kepler-next')}};
$('kf').onclick=ev=>{const bt=ev.target.closest('button');if(!bt)return;fi=+bt.dataset.f;tbl()};
P.num('k3',8,['對。a³ = 64，T = √64 = 8 年。','Right. a³ = 64, so T = √64 = 8 years.'],['提示：T² = a³。先算 4³，再開根號。','Hint: T² = a³. Compute 4³, then take the square root.'],.05);
P.num('k4',17.9,['對。a³ = 76² = 5776，a = 5776 的立方根 ≈ 17.9。哈雷彗星最遠會跑到海王星軌道外面。','Right. a³ = 76² = 5776, and the cube root of 5776 ≈ 17.9. At its farthest, Halley\'s Comet goes beyond Neptune\'s orbit.'],['提示：先算 T² = 76²，再開立方根（a³ = T²）。','Hint: compute T² = 76², then take the cube root (a³ = T²).'],.4);
P.pred('k5',{now:1,c:0,o:[['1 月','January'],['4 月','April'],['7 月','July']],f:[['對。最靠近太陽時跑最快。北半球的冬天，地球反而離太陽最近，季節是地軸傾斜造成的，不是距離。','Right. Closest means fastest. Northern winter is when Earth is nearest the Sun; seasons come from Earth\'s tilt, not distance.'],['第二定律：最靠近太陽的時候最快。','Law 2: fastest when closest to the Sun.'],['7 月地球離太陽最遠，所以是最慢的時候。','In July Earth is farthest from the Sun, so that\'s when it\'s slowest.']]});
P.watch($('kc'),draw);P.onLang(()=>{tbl();$('kgo').disabled||($('kgo').innerHTML=lab())});tbl();
}});}
