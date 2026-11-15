{const b=P.b;
P.reg('gravity',{html:`
<section class="band"><div class="wrap hero">
 <div>
  <span class="chip">${b('節點 5 · 1687','Node 5 · 1687')}</span>
  <h1>${b('萬有引力：用月亮檢驗一個猜想','Universal Gravitation: testing a guess with the Moon')}</h1>
  <p class="lede" style="margin-top:14px">${b('如果月亮跟蘋果被同一個力拉著，那這個力離地球越遠就要越弱。弱多少？牛頓先猜，再用月亮的軌道來對答案。','If the Moon and an apple feel the same pull, that pull must weaken with distance. By how much? Newton made a guess, then checked it against the Moon\'s orbit.')}</p>
 </div>
 </div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('舊觀念','The old idea')}</span>
 <h2>${b('重力只是「地上的東西往下掉」','Gravity is just "things fall down here"')}</h2>
 <p>${b('在牛頓之前，重量被當成物體本身的性質，只在地球附近才有意義。克卜勒猜過太陽會用某種力推動行星，但沒有人寫出一個能同時算出蘋果和行星的規則。','Before Newton, weight was seen as a property of objects that only mattered near Earth. Kepler guessed the Sun moved the planets with some force, but nobody had written one rule that worked for both apples and planets.')}</p>
</div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('推理','The reasoning')}</span>
 <h2>${b('一個力往四面八方散開，會怎麼變弱？','How does something weaken as it spreads out in every direction?')}</h2>
 <div class="two">
  <div>
   <p>${b('想像噴漆罐往前噴。距離 1 m 時，漆蓋住 1 格；距離 2 m 時，同樣的漆要蓋住 2 × 2 = 4 格；3 m 時蓋住 9 格。每一格分到的漆變成 1/4、1/9。','Picture a spray can. At 1 m the paint covers 1 square; at 2 m the same paint covers 2 × 2 = 4 squares; at 3 m, 9 squares. Each square gets 1/4, then 1/9 as much.')}</p>
   <p>${b('光、聲音都是這樣。牛頓和同時代的虎克等人都猜：引力也是從地球往四面八方散出去，所以應該跟距離的平方成反比。','Light and sound work this way. Newton and contemporaries such as Hooke suspected gravity also spreads out from Earth in every direction, so it should fall off with the square of the distance.')}</p>
  </div>
  <svg class="ill" viewBox="0 0 360 230" role="img" aria-label="Inverse square spreading"><rect width="360" height="230" rx="14" fill="var(--panel)"/>
   <circle cx="34" cy="115" r="10" fill="var(--cu)"/>
   <path d="M44 115 L340 66 M44 115 L340 164" stroke="var(--mute)" stroke-dasharray="4 5"/>
   <g fill="var(--mo)" opacity=".9"><rect x="101" y="101" width="28" height="28"/></g><g fill="var(--mo)" opacity=".55"><rect x="161" y="86" width="28" height="28"/><rect x="191" y="86" width="28" height="28"/><rect x="161" y="116" width="28" height="28"/><rect x="191" y="116" width="28" height="28"/></g><g fill="var(--mo)" opacity=".3"><rect x="251" y="71" width="28" height="28"/><rect x="281" y="71" width="28" height="28"/><rect x="311" y="71" width="28" height="28"/><rect x="251" y="101" width="28" height="28"/><rect x="281" y="101" width="28" height="28"/><rect x="311" y="101" width="28" height="28"/><rect x="251" y="131" width="28" height="28"/><rect x="281" y="131" width="28" height="28"/><rect x="311" y="131" width="28" height="28"/></g>
   <g font-size="13" font-weight="700" fill="var(--ink)" text-anchor="middle"><text x="115" y="196">1 m · 1</text><text x="190" y="196">2 m · 4</text><text x="295" y="196">3 m · 9</text></g></svg>
 </div>
 <h3 style="margin-top:16px">${b('預測 A：月亮離地心的距離是蘋果的 60 倍。地球拉月亮（每公斤）的力，比拉蘋果弱多少？','Prediction A: the Moon is 60 times farther from Earth\'s center than the apple. How much weaker is Earth\'s pull per kilogram on the Moon?')}</h3>
 <div class="opts" id="pg1"></div><div id="fg1"></div>
</div></section>

<section class="band lock" id="g-test"><div class="wrap">
 <span class="chip">${b('實驗','Test it')}</span>
 <h2>${b('月亮檢驗：月亮 1 分鐘掉多少？','The Moon test: how far does the Moon fall in 1 minute?')}</h2>
 <div class="two">
  <div>
   <p><b>${b('實際測量（從月亮的軌道算出來）','Measured (from the Moon\'s orbit)')}</b></p>
   <p>${b('月亮離地心 384,000 km，27.3 天繞一圈，所以每秒走約 1.02 km，1 分鐘走約 61 km。','The Moon is 384,000 km from Earth\'s center and circles once in 27.3 days, so it moves about 1.02 km per second, about 61 km per minute.')}</p>
   <p>${b('跟砲彈那一課一樣：沿著圓走 d，偏離直線的距離是 d² ÷ (2r) = 61,000² ÷ (2 × 384,000,000) ≈ 4.9 m。','Same geometry as the cannon lesson: travel d along a circle and you drop d² ÷ (2r) below the straight line = 61,000² ÷ (2 × 384,000,000) ≈ 4.9 m.')}</p>
   <p>${b('也就是說，月亮每分鐘往地球掉 4.9 m。','So the Moon falls 4.9 m toward Earth every minute.')}</p>
  </div>
  <div>
   <p><b>${b('你的預測：選一種變弱的方式','Your prediction: pick how the pull weakens')}</b></p>
   <div class="seg" id="glaw"></div>
   <div class="bars" id="gbars"></div>
   <p class="verdict" id="gv"></p>
  </div>
 </div>
 <p class="std">${b('蘋果 1 秒掉 4.9 m。如果引力弱 3600 倍，同樣 4.9 m 就要花 60 倍的時間，也就是 1 分鐘。','An apple falls 4.9 m in 1 second. If the pull is 3600 times weaker, falling the same 4.9 m takes 60 times as long: one minute.')}</p>
</div></section>

<section class="band lock" id="g-idea"><div class="wrap">
 <span class="chip">${b('新想法','The new idea')}</span>
 <h2>${b('萬有引力定律','The law of universal gravitation')}</h2>
 <div class="two">
  <div class="key" style="margin-top:0"><div class="big">F = G m₁m₂ / r²</div>
   <p style="margin:6px 0 0">${b('任何兩個有質量的東西都互相吸引。力跟兩者質量的乘積成正比，跟距離的平方成反比。G 非常小（6.67 × 10⁻¹¹），直到 1798 年才由卡文迪許在實驗室量出來。','Any two masses attract each other. The force is proportional to the product of their masses and inversely proportional to the square of the distance. G is tiny (6.67 × 10⁻¹¹); Cavendish first measured it in a lab in 1798.')}</p></div>
  <div><p>${b('「萬有」的意思是：蘋果、月亮、行星、太陽，用的都是同一條。牛頓接著用數學證明，平方反比的引力剛好會產生克卜勒的三條定律：橢圓、等面積、T² ∝ a³。','"Universal" means the same law covers apples, the Moon, planets, and the Sun. Newton then proved mathematically that an inverse-square force produces exactly Kepler\'s three laws: ellipses, equal areas, and T² ∝ a³.')}</p>
  <p>${b('克卜勒問「為什麼靠近太陽會變快」：因為越近，引力越強，拉得越用力。','Kepler\'s question "why faster near the Sun?" now has an answer: closer means stronger gravity pulling harder.')}</p></div>
 </div>
 <h3 style="margin-top:18px">${b('預測 B：國際太空站在 400 km 高。那裡的重力大約是地面的多少？','Prediction B: the International Space Station is 400 km up. About how strong is gravity there compared with the ground?')}</h3>
 <div class="opts" id="pg2"></div><div id="fg2"></div>
 <div class="lock" id="g-alt">
  <div class="ctrl"><div class="seg" id="gpre"></div></div>
  <div class="ctrl"><label>${b('高度','Altitude')} <input type="range" id="gh" min="0" max="40000" step="100" value="400"></label><span class="read" id="ghv"></span></div>
  <div class="bars" id="gab"></div>
 </div>
</div></section>

${P.adv([["月亮檢驗的代數", "The algebra of the Moon test", [["等速圓周運動的加速度是 a = v²/r（衛星那一課會推導）。用 v = 2πr/T 代入：", "Uniform circular motion has acceleration a = v²/r (derived in the satellite lesson). Substitute v = 2πr/T:"], "=a = 4π²r / T² = 4π² × 3.844×10⁸ / (2.36×10⁶)² ≈ 0.00272 m/s²", "=g / a = 9.8 / 0.00272 ≈ 3600 = 60²"]], ["秤出地球的質量", "Weighing the Earth", [["地面上 g = GM/R²，所以 M = gR²/G。卡文迪許量出 G 之後，就可以算出地球的質量：", "At the surface g = GM/R², so M = gR²/G. Once Cavendish measured G, Earth's mass followed:"], "=M = 9.8 × (6.371×10⁶)² / 6.67×10⁻¹¹ ≈ 5.97×10²⁴ kg"]], ["從引力推出克卜勒第三定律", "Deriving Kepler's third law from gravity", [["引力提供繞圓需要的加速度：GM/r² = 4π²r/T²。整理：", "Gravity supplies the acceleration a circle needs: GM/r² = 4π²r/T². Rearrange:"], "=T² = (4π² / GM)·r³", ["括號裡只跟太陽的質量有關，所以每顆行星的 T²/r³ 都一樣。", "The bracket depends only on the Sun's mass, so T²/r³ is the same for every planet."]]]])}
<section class="band lock" id="g-apply"><div class="wrap">
 <span class="chip">${b('拿來用','Use it')}</span>
 <h2>${b('用平方反比解題','Solve with the inverse square')}</h2>
 ${P.qhtml('g3','1. 在離地心 2 倍地球半徑的地方（大約離地 6,400 km），重力加速度是多少？地面是 9.8 m/s²。','1. At twice Earth\'s radius from its center (about 6,400 km up), what is the acceleration due to gravity? Ground level is 9.8 m/s².','m/s²')}
 ${P.qhtml('g4','2. 在 3 倍地球半徑的地方呢？','2. What about at 3 Earth radii?','m/s²')}
 ${P.phtml('g5','3. 如果地球的質量變成 2 倍（大小不變），你的體重會？','3. If Earth\'s mass doubled (same size), your weight would?')}
 <div class="q" style="border:0">
  <h3>${b('4. 拿紙筆：向同學解釋為什麼是「平方」反比','4. Pencil and paper: explain to a classmate why it\'s inverse square')}</h3>
  <p>${b('畫出距離 1、2、3 時，同一份「引力」要分散到多大的面積上。','Sketch how the same amount of "pull" spreads over a bigger area at distances 1, 2, and 3.')}</p>
  <button data-show="g-ans">${b('我畫好了，看答案','I\'ve drawn it, show me')}</button>
  <div id="g-ans" class="hide" style="margin-top:14px"><p>${b('面積隨距離的平方變大（1、4、9），所以每單位面積分到的量變成 1、1/4、1/9。你的圖應該像上面噴漆的圖。重點是：散開的是「面」，面積是長 × 寬，所以是平方。','Area grows with the square of distance (1, 4, 9), so the share per unit area becomes 1, 1/4, 1/9. Your drawing should look like the spray-paint picture above. The key point: the pull spreads over a surface, and area is length × width, hence the square.')}</p></div>
 </div>
</div></section>
${P.nextBand('gravity','知道了力有多大，那力到底怎麼改變運動？同樣的力推汽車和推腳踏車，結果為什麼不同？','We know how strong the force is. But how exactly does a force change motion? Why does the same push do different things to a car and a bicycle?','下一課自己做實驗車，量出力、質量和加速度的關係。','Next lesson you run a lab cart and measure how force, mass, and acceleration relate.')}
${P.std('表現預期 HS-PS2-4（用數學表示法預測物體間的重力）。科學實踐：SEP 5 數學與計算思維、SEP 6 建構解釋。跨科概念：模式；尺度、比例與數量。月球資料：平均距離 384,400 km，恆星月 27.32 天。','Performance expectation HS-PS2-4 (use mathematical representations of Newton\'s law of gravitation to predict gravitational forces). Practices: SEP 5 Mathematical and Computational Thinking, SEP 6 Constructing Explanations. Crosscutting concepts: Patterns; Scale, Proportion, and Quantity. Moon data: mean distance 384,400 km, sidereal month 27.32 days.')}
`,init(){
const {t,tp,$}=P;
const laws=[['1/r','1/r',1],['1/r²','1/r²',2],['1/r³','1/r³',3]];let li=-1;
const law=()=>{$('glaw').innerHTML=laws.map((l,i)=>`<button aria-pressed="${li===i}" data-l="${i}">${t('弱成 '+l[0],'Falls off as '+l[1])}</button>`).join('');
 if(li<0){$('gbars').innerHTML='';$('gv').textContent='';return}
 const n=laws[li][2],pred=4.9*3600/60**n,meas=4.9,w=v=>Math.max(2,Math.min(100,(Math.log10(v)+2)/(Math.log10(300)+2)*100));
 $('gbars').innerHTML=[[t('預測','Predicted'),pred,'var(--cu)'],[t('實際','Measured'),meas,'var(--mo)']].map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${w(r[1])}%;background:${r[2]}"></div></div><span class="v">${r[1]<.1?r[1].toFixed(3):r[1].toFixed(1)} m</span></div>`).join('')+`<p class="std" style="margin:0">${t(`計算：4.9 m × 3600 × (1/60)<sup>${n}</sup>（長條是對數刻度）`,`Calculation: 4.9 m × 3600 × (1/60)<sup>${n}</sup> (bars use a log scale)`)}</p>`;
 const ok=n===2,v=$('gv');v.className='verdict '+(ok?'ok':'no');
 v.innerHTML=ok?t('吻合！平方反比剛好預測出月亮每分鐘掉 4.9 m。','A match! The inverse square predicts exactly 4.9 m per minute.'):t(`差了 ${pred>meas?(pred/meas).toFixed(0):(meas/pred).toFixed(0)} 倍，這個猜想被月亮否決了。`,`Off by a factor of ${pred>meas?(pred/meas).toFixed(0):(meas/pred).toFixed(0)}. The Moon rules this guess out.`);
 if(ok){P.reveal('g1');P.show('g-idea')}};
$('glaw').onclick=e=>{const bt=e.target.closest('button');if(!bt)return;li=+bt.dataset.l;law()};
P.pred('g1',{c:1,o:[['弱 60 倍','60 times weaker'],['弱 3600 倍（60 × 60）','3600 times weaker (60 × 60)'],['一樣強','Equally strong']],f:[['用月亮的真實軌道檢驗看看。','Test it against the Moon\'s real orbit.'],['用月亮的真實軌道檢驗看看。','Test it against the Moon\'s real orbit.'],['那月亮應該掉得跟蘋果一樣快。用軌道檢驗看看。','Then the Moon would fall as fast as an apple. Test it against the orbit.']]});
P.onPick(k=>{if(k==='g1')P.show('g-test');if(k==='g2')P.show('g-alt')});
const RE=6371;let h=400;
const pres=[['地面','Ground',0],['太空站','ISS',400],['GPS 衛星','GPS satellites',20200],['同步衛星','Geostationary',35786],['月球的距離','Moon\'s distance',378029]];
const alt=()=>{$('gpre').innerHTML=pres.map(p=>`<button aria-pressed="${h===p[2]}" data-h="${p[2]}">${t(p[0],p[1])}</button>`).join('');
 const g=9.8*(RE/(RE+h))**2;$('ghv').textContent=`${h.toLocaleString()} km`;
 $('gab').innerHTML=`<div class="br"><span>${t('重力加速度','Gravity')}</span><div class="tr"><div class="fl" style="width:${g/9.8*100}%;background:var(--mo)"></div></div><span class="v">${g<.1?g.toFixed(4):g.toFixed(2)} m/s²</span></div><div class="br"><span>${t('地面的百分比','% of ground')}</span><div class="tr"><div class="fl" style="width:${g/9.8*100}%;background:var(--cu)"></div></div><span class="v">${(g/9.8*100).toFixed(g<.098?3:1)}%</span></div>`;
 if(h===400&&P.picked.g2!==undefined)P.reveal('g2')};
$('gpre').onclick=e=>{const bt=e.target.closest('button');if(!bt)return;h=+bt.dataset.h;if(h<=40000)$('gh').value=h;alt();if(h>=400){P.show('g-apply');P.show('gravity-next')}};
$('gh').oninput=e=>{h=+e.target.value;alt();P.show('g-apply');P.show('gravity-next')};
P.pred('g2',{c:1,o:[['幾乎是 0','Almost zero'],['大約 90%','About 90%'],['大約一半','About half']],f:[['用下面的工具算算看。','Calculate it with the tool below.'],['用下面的工具驗證。','Check it with the tool below.'],['用下面的工具算算看。','Calculate it with the tool below.']]});
P.num('g3',2.45,['對。距離 2 倍，引力變 1/4：9.8 ÷ 4 = 2.45 m/s²。','Right. Twice the distance, a quarter of the pull: 9.8 ÷ 4 = 2.45 m/s².'],['提示：距離變 2 倍，引力變成 1/(2²)。','Hint: twice the distance means 1/(2²) of the pull.'],.05);
P.num('g4',1.09,['對。9.8 ÷ 9 ≈ 1.09 m/s²。','Right. 9.8 ÷ 9 ≈ 1.09 m/s².'],['提示：3 倍距離，引力變成 1/9。','Hint: 3 times the distance means 1/9 of the pull.'],.03);
P.pred('g5',{now:1,c:0,o:[['變成 2 倍','It doubles'],['變成 4 倍','It quadruples'],['不變','It stays the same']],f:[['對。F 跟質量成正比，距離沒變，所以力變 2 倍。','Right. F is proportional to mass, and the distance didn\'t change, so the force doubles.'],['平方只跟距離有關。質量是一次方。','The square applies to distance only. Mass appears to the first power.'],['F = Gm₁m₂/r²，地球質量 m₁ 變了，力就會變。','F = Gm₁m₂/r². Earth\'s mass m₁ changed, so the force changes.']]});
P.onLang(()=>{law();alt()});law();alt();
}});}
