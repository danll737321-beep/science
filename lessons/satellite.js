{const b=P.b;
const chain=[['亞里斯多德','Aristotle','規律被阻力蓋住了，要先拿掉干擾','The law was hidden under resistance; remove the noise first'],
 ['伽利略','Galileo','d ∝ t²；沒有外力，運動就一直保持','d ∝ t²; with no force, motion just continues'],
 ['克卜勒','Kepler','橢圓、等面積、T² ∝ a³','Ellipses, equal areas, T² ∝ a³'],
 ['牛頓的砲彈','Newton\'s cannon','繞行 = 一直在掉，但一直掉不到地面','Orbiting = always falling, always missing'],
 ['萬有引力','Gravity','F = Gm₁m₂/r²，距離 2 倍，引力 1/4','F = Gm₁m₂/r²; twice as far, a quarter of the pull'],
 ['F = ma','F = ma','合力決定加速度：a = F/m','Net force sets acceleration: a = F/m'],
 ['能量守恆','Energy','能量只會轉換，不會消失','Energy changes form, never disappears'],
 ['衛星','Satellite','v = √(GM/r)，T² ∝ r³：全部接在一起','v = √(GM/r), T² ∝ r³: everything connects']];
P.reg('satellite',{html:`
<section class="band"><div class="wrap hero">
 <div>
  <span class="chip">${b('節點 8 · 1957–今天','Node 8 · 1957–today')}</span>
  <h1>${b('設計一顆衛星：把前面七個節點全部用上','Design a Satellite: put all seven nodes to work')}</h1>
  <p class="lede" style="margin-top:14px">${b('1957 年，史普尼克一號上了太空，牛頓的砲彈終於真的發射了。今天天上有上萬顆衛星，每一顆的高度都是根據任務算出來的。這一課你要自己算，並完成三個任務。','In 1957 Sputnik 1 reached orbit, and Newton\'s cannonball was finally fired for real. Today there are over ten thousand satellites, each at an altitude chosen for its job. In this lesson you do the math yourself and complete three missions.')}</p>
 </div>
 </div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('推理','The reasoning')}</span>
 <h2>${b('三步推出衛星的速度和週期','Three steps to a satellite\'s speed and period')}</h2>
 <div class="mis" style="margin-top:0">
  <div class="mc"><h3>${b('步驟 1：繞圓需要多少「掉落」','Step 1: how much falling a circle needs')}</h3><p style="margin:0">${b('砲彈那一課：在時間 t 內往前走 d = vt，地面彎下去 d²/(2r)。同時掉落 ½at²。兩者相等：½at² = v²t²/(2r)，所以 a = v²/r。','From the cannon lesson: in time t you move d = vt, and the ground curves down d²/(2r). You fall ½at² in the same time. Set equal: ½at² = v²t²/(2r), so a = v²/r.')}</p></div>
  <div class="mc"><h3>${b('步驟 2：引力提供這個加速度','Step 2: gravity supplies that acceleration')}</h3><p style="margin:0">${b('萬有引力加上 F = ma：a = GM/r²。兩個 a 相等：v²/r = GM/r²，所以 v = √(GM/r)。地球的 GM = 3.986 × 10¹⁴ m³/s²。','Gravity plus F = ma: a = GM/r². Set the two equal: v²/r = GM/r², so v = √(GM/r). For Earth, GM = 3.986 × 10¹⁴ m³/s².')}</p></div>
  <div class="mc"><h3>${b('步驟 3：繞一圈要多久','Step 3: how long one lap takes')}</h3><p style="margin:0">${b('一圈長 2πr，所以 T = 2πr/v。代進去整理：T² = (4π²/GM) r³。這就是克卜勒第三定律，現在有了原因。','One lap is 2πr, so T = 2πr/v. Substitute and tidy up: T² = (4π²/GM) r³. That\'s Kepler\'s third law, now with a reason behind it.')}</p></div>
 </div>
 <p class="std" style="margin-top:12px">${b('注意 r 是到地心的距離 = 地球半徑 6,371 km + 高度。','Note that r is the distance to Earth\'s center = Earth\'s radius 6,371 km + altitude.')}</p>
 <h3 style="margin-top:14px">${b('預測：衛星放到更高的軌道，速度會？','Prediction: put a satellite in a higher orbit. Its speed will?')}</h3>
 <div class="opts" id="ps1"></div><div id="fs1"></div>
</div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('任務','Missions')}</span>
 <h2>${b('軌道設計器','Orbit designer')}</h2>
 <div class="fig tall"><canvas id="sc"></canvas></div>
 <div class="ctrl">
  <label>${b('高度','Altitude')} <input type="range" id="sh" min="0" max="1000" step="1" value="282"></label>
  <input class="num-in" type="number" id="shn" min="160" max="40000" step="10" aria-label="altitude km"> <span>km</span>
  <span class="read" id="sr"></span>
 </div>
 <p class="std">${b('畫面中 1 天 = 12 秒。地球上的紅點是加州的經度，用來看衛星是不是一直停在同一個地方上空。','On screen, 1 day = 12 seconds. The red dot on Earth marks California\'s longitude, so you can see whether a satellite stays above the same spot.')}</p>
 <div class="mis" id="smis"></div>
</div></section>

<section class="band lock" id="s-idea"><div class="wrap">
 <span class="chip">${b('新想法','The new idea')}</span>
 <h2>${b('八個節點，一條問題接力','Eight nodes, one relay of questions')}</h2>
 <p>${b('每一個答案都是下一個問題的起點。你剛才用到的每一條式子，都可以追溯到前面某個節點的觀察和推理：','Every answer started the next question. Every formula you just used traces back to an observation and argument in an earlier node:')}</p>
 <div class="chain">${chain.map((c,i)=>`<div class="cl"><span class="n">${i+1}</span><b>${b(c[0],c[1])}</b><span>${b(c[2],c[3])}</span></div>`).join('')}</div>
 <p style="margin-top:14px">${b('還有一個反直覺的地方：越高的軌道速度越慢，但要把衛星送上去，反而要點火加速。多出來的能量會變成高度能，到了高處速度就降下來了，跟能量守恆那一課一樣。','One counterintuitive point: higher orbits are slower, yet to raise a satellite you fire the engine to speed up. The extra energy becomes height energy, and by the time it\'s up high it has slowed down, just as in the energy lesson.')}</p>
</div></section>

${P.adv([["同步衛星要多高", "How high a geostationary satellite must be", [["從 T² = 4π²r³/GM 解出 r：", "Solve T² = 4π²r³/GM for r:"], "=r = (GM·T² / 4π²)^(1/3) = (3.986×10¹⁴ × 86,164² / 4π²)^(1/3) ≈ 42,164 km", ["減去地球半徑 6,371 km，高度 ≈ 35,786 km。T 用恆星日 86,164 s，不是 86,400 s。", "Subtract Earth's radius, 6,371 km: altitude ≈ 35,786 km. Use the sidereal day, 86,164 s, not 86,400 s."]]], ["軌道的總能量", "The total energy of an orbit", [["動能 ½mv² = GMm/(2r)。引力位能（把無限遠當成 0）是 −GMm/r。總能量：", "Kinetic energy ½mv² = GMm/(2r). Gravitational potential energy (zero at infinity) is −GMm/r. Total:"], "=E = GMm/(2r) − GMm/r = −GMm / (2r)", ["r 變大，E 變大（比較不負），但動能變小。所以送到高軌道要加能量，到了以後速度反而比較慢。", "As r grows, E rises (less negative) but kinetic energy falls. That's why raising an orbit takes energy, yet the satellite ends up slower."]]], ["逃逸速度", "Escape speed", [["要逃離地球，總能量至少要是 0：½mv² − GMm/r = 0：", "To escape, the total energy must reach at least 0: ½mv² − GMm/r = 0:"], "=v_逃逸 escape = √(2GM/r) = √2 · v_圓 circular", ["在地面附近是 √2 × 7.9 ≈ 11.2 km/s，就是砲彈模擬裡「飛離地球」的門檻。", "Near the surface that's √2 × 7.9 ≈ 11.2 km/s, the threshold for escaping in the cannon simulation."]]]])}
<section class="band lock" id="s-apply"><div class="wrap">
 <span class="chip">${b('拿來用','Use it')}</span>
 <h2>${b('用 T² ∝ r³ 和 v = √(GM/r) 解題','Solve with T² ∝ r³ and v = √(GM/r)')}</h2>
 ${P.qhtml('s3','1. 同步衛星離地心 42,164 km，週期 1 天。月球離地心 384,400 km。用 T² ∝ r³ 估計月球繞地球一圈幾天？','1. A geostationary satellite is 42,164 km from Earth\'s center with a 1-day period. The Moon is 384,400 km away. Use T² ∝ r³ to estimate how many days the Moon takes to orbit.','天 days')}
 ${P.phtml('s4','2. 要把衛星從低軌道送到高軌道，引擎要怎麼點火？','2. To move a satellite from a low orbit to a higher one, how should the engine fire?')}
 ${P.qhtml('s5','3. 國際太空站在 400 km 高（r = 6,771 km）。它的速度大約幾 km/s？','3. The ISS is 400 km up (r = 6,771 km). About how fast does it move, in km/s?','km/s')}
 <div class="q" style="border:0">
  <h3>${b('4. 拿紙筆：照比例畫出地球和三個任務的軌道','4. Pencil and paper: draw Earth and the three mission orbits to scale')}</h3>
  <p>${b('地球半徑畫 1 公分，再算出另外三個圓要畫多大。','Draw Earth with a 1 cm radius, then work out how big the other three circles should be.')}</p>
  <button data-show="s-ans">${b('我畫好了，看答案','I\'ve drawn it, show me')}</button>
  <div id="s-ans" class="hide" style="margin-top:14px"><p>${b('地球 1 cm；觀測衛星約 1.06 cm（幾乎貼著地球）；GPS 約 4.2 cm；同步衛星約 6.6 cm。大部分人會把低軌道畫得太高。太空站其實就在地球表面上方一點點。','Earth 1 cm; observation satellite about 1.06 cm (nearly touching Earth); GPS about 4.2 cm; geostationary about 6.6 cm. Most people draw low orbits far too high. The ISS is barely above Earth\'s surface.')}</p></div>
 </div>
</div></section>

<section class="band next lock" id="satellite-next"><div class="wrap">
 <span class="chip">${b('力學解決不了的問題','A problem mechanics couldn\'t solve')}</span>
 <h2>${b('力學到這裡就完整了嗎？','Is mechanics complete?')}</h2>
 <p>${b('1859 年，勒維耶發現水星的軌道每 100 年會多轉 43 角秒，用牛頓的引力怎麼算都差這一點點。這跟克卜勒的 8 弧分很像：一個很小、但量得很準的誤差。1915 年，愛因斯坦的廣義相對論剛好算出了這 43 角秒。','In 1859, Le Verrier found that Mercury\'s orbit shifts an extra 43 arcseconds per century, a tiny gap Newton\'s gravity could never close. It\'s just like Kepler\'s 8 arcminutes: a small but precisely measured error. In 1915, Einstein\'s general relativity predicted exactly those 43 arcseconds.')}</p>
 <p style="margin:0"><b>${b('下一條時間軸：相對論（即將推出）','Next timeline: relativity (coming soon)')}</b></p>
</div></section>
${P.std('表現預期 HS-ESS1-4（用數學或計算模型預測軌道運動）、HS-PS2-4（萬有引力定律）。科學實踐：SEP 5 數學與計算思維、SEP 6 建構解釋。跨科概念：系統與系統模型；尺度、比例與數量。數據：地球 GM = 3.986 × 10¹⁴ m³/s²，半徑 6,371 km，恆星日 23.93 小時。','Performance expectations HS-ESS1-4 (mathematical or computational representations to predict orbital motion), HS-PS2-4 (law of gravitation). Practices: SEP 5 Mathematical and Computational Thinking, SEP 6 Constructing Explanations. Crosscutting concepts: Systems and System Models; Scale, Proportion, and Quantity. Data: Earth GM = 3.986 × 10¹⁴ m³/s², radius 6,371 km, sidereal day 23.93 h.')}
`,init(){
const {t,tp,css,fit,$}=P,GM=3.986e14,RE=6371,DAY=23.934;
let alt=400,ang=0,earth=0,trail=[];
const s2a=v=>Math.round(200*200**(v/1000)),a2s=a=>Math.round(1000*Math.log(a/200)/Math.log(200));
const orb=a=>{const r=(RE+a)*1e3,v=Math.sqrt(GM/r),T=2*Math.PI*r/v/3600;return{v:v/1e3,T,g:GM/r/r}};
const fmtT=(T,en)=>T<2?(en?`${(T*60).toFixed(1)} min`:`${(T*60).toFixed(1)} 分鐘`):(en?`${T.toFixed(2)} h`:`${T.toFixed(2)} 小時`);
const read=()=>{const o=orb(alt);$('shn').value=alt;$('sr').textContent=tp(`速度 ${o.v.toFixed(2)} km/s · 週期 ${fmtT(o.T)} · 重力 ${o.g.toFixed(2)} m/s²`,`Speed ${o.v.toFixed(2)} km/s · Period ${fmtT(o.T,1)} · Gravity ${o.g.toFixed(2)} m/s²`)};
const draw=()=>{const[x,W,H]=fit($('sc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const cx=W/2,cy=H/2,rr=RE+alt,sc=Math.min(W,H)*.44/Math.max(rr,RE*1.6),ink=css('--ink'),mo=css('--mo');
 x.strokeStyle=css('--line');x.lineWidth=1;x.beginPath();x.arc(cx,cy,rr*sc,0,7);x.stroke();
 x.fillStyle='#4f8fbf';x.beginPath();x.arc(cx,cy,RE*sc,0,7);x.fill();
 x.strokeStyle='rgba(255,255,255,.35)';x.beginPath();for(let i=0;i<6;i++){const a=earth+i*Math.PI/3;x.moveTo(cx,cy);x.lineTo(cx+Math.cos(a)*RE*sc,cy-Math.sin(a)*RE*sc)}x.stroke();
 x.fillStyle='#d1495b';x.beginPath();x.arc(cx+Math.cos(earth)*RE*sc,cy-Math.sin(earth)*RE*sc,6,0,7);x.fill();
 x.strokeStyle=mo;x.globalAlpha=.4;x.lineWidth=3;x.beginPath();trail.forEach((a,i)=>{const p=[cx+Math.cos(a)*rr*sc,cy-Math.sin(a)*rr*sc];i?x.lineTo(...p):x.moveTo(...p)});x.stroke();x.globalAlpha=1;
 const sx=cx+Math.cos(ang)*rr*sc,sy=cy-Math.sin(ang)*rr*sc;x.fillStyle=mo;x.fillRect(sx-6,sy-4,12,8);x.fillStyle=ink;x.fillRect(sx-14,sy-1.5,28,3);
 const diff=Math.abs(((ang-earth)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI);
 x.fillStyle=ink;x.font='600 13px "Noto Sans TC",Archivo';x.textAlign='left';
 x.fillText(tp(`高度 ${alt.toLocaleString()} km`,`Altitude ${alt.toLocaleString()} km`),12,22)};
P.run(dt=>{const o=orb(alt),T=o.T;earth+=dt*2*Math.PI/12;ang+=dt*2*Math.PI/(12*T/DAY);trail.push(ang);if(trail.length>40)trail.shift();
 if(!$('sc').isConnected)return false;if(document.querySelector('main.lesson[data-id=satellite]')?.hidden)return;draw()});
const setAlt=a=>{alt=Math.max(160,Math.min(40000,Math.round(a)));$('sh').value=a2s(alt);trail=[];ang=earth;read();draw()};
$('sh').oninput=e=>setAlt(s2a(+e.target.value));
$('shn').onchange=e=>{const v=+e.target.value;if(v)setAlt(v)};
const ms=[{z:'地球觀測衛星',e:'Earth-observation satellite',dz:'要拍清楚地面，又不能低到被大氣拖下來：高度 300–600 km，像太空站一樣。',de:'Low enough for sharp photos, high enough to avoid being dragged down by the atmosphere: 300–600 km, like the ISS.',ok:a=>a>=300&&a<=600,hint:a=>a<300?['太低了，大氣阻力會讓它很快掉下來。','Too low: atmospheric drag will bring it down quickly.']:['太高了，照片會不清楚。目標 300–600 km。','Too high for sharp photos. Aim for 300–600 km.']},
 {z:'GPS 導航衛星',e:'GPS navigation satellite',dz:'每天繞地球剛好 2 圈（週期 11.97 小時），讓訊號每天在同樣的時間經過同樣的地方。',de:'Exactly 2 laps per day (period 11.97 h), so signals pass over the same places at the same times every day.',ok:a=>Math.abs(orb(a).T-DAY/2)<.25,hint:a=>orb(a).T<DAY/2?['週期太短，要更高。','Period too short: go higher.']:['週期太長，要低一點。','Period too long: go lower.']},
 {z:'電視衛星',e:'TV broadcast satellite',dz:'要一直停在同一個地方的上空，屋頂的天線才不用轉動：週期要跟地球自轉一樣，23.93 小時。',de:'Must hover over the same spot so rooftop dishes never move: its period must match Earth\'s rotation, 23.93 h.',ok:a=>Math.abs(orb(a).T-DAY)<.25,hint:a=>orb(a).T<DAY?['週期太短，紅點會被衛星超過。要更高。','Period too short: the satellite laps the red dot. Go higher.']:['週期太長，衛星會落後紅點。要低一點。','Period too long: the satellite falls behind the red dot. Go lower.']}];
const res={};
const mis=()=>{$('smis').innerHTML=ms.map((m,i)=>`<div class="mc ${res[i]?.ok?'done':''}"><h3>${t(m.z,m.e)}</h3><p>${t(m.dz,m.de)}</p><button data-m="${i}">${t('用目前的高度檢查','Check current altitude')}</button>${res[i]?`<div class="fb ${res[i].ok?'ok':''}">${res[i].ok?t(`成功！高度 ${res[i].a.toLocaleString()} km，週期 ${fmtT(orb(res[i].a).T)}。`,`Success! Altitude ${res[i].a.toLocaleString()} km, period ${fmtT(orb(res[i].a).T,1)}.`):t(...m.hint(res[i].a))}</div>`:''}</div>`).join('')};
$('smis').onclick=e=>{const bt=e.target.closest('[data-m]');if(!bt)return;const i=+bt.dataset.m;res[i]={a:alt,ok:ms[i].ok(alt)};mis();
 const n=Object.values(res).filter(r=>r.ok).length;if(n>=1){P.reveal('s1');P.show('s-idea')}if(n>=3){P.show('s-apply');P.show('satellite-next')}};
P.pred('s1',{c:1,o:[['變快','Faster'],['變慢','Slower'],['一樣','The same']],f:[['看 v = √(GM/r)：r 變大，v 會怎樣？用設計器驗證。','Look at v = √(GM/r): what happens to v as r grows? Check with the designer.'],['用設計器驗證：把高度拉高，看速度讀數。','Check with the designer: raise the altitude and watch the speed.'],['用設計器驗證：把高度拉高，看速度讀數。','Check with the designer: raise the altitude and watch the speed.']]});
P.num('s3',27.5,['對。r 比 = 384,400 ÷ 42,164 ≈ 9.12，T = 9.12^1.5 ≈ 27.5 天。實際是 27.3 天。','Right. Distance ratio = 384,400 ÷ 42,164 ≈ 9.12, so T = 9.12^1.5 ≈ 27.5 days. The real value is 27.3 days.'],['提示：先算距離比，再算 (距離比)^1.5。','Hint: find the distance ratio, then raise it to the 1.5 power.'],.5);
P.pred('s4',{now:1,c:0,o:[['朝前進方向點火，加速','Fire forward-pushing, to speed up'],['朝反方向點火，減速','Fire backward-pushing, to slow down'],['不用點火，等它自己飄上去','No burn; let it drift up']],f:[['對。加速讓軌道變成橢圓、遠端變高；到了遠端再加速一次，就變成更高的圓軌道。最後的速度反而比較慢。','Right. Speeding up stretches the orbit into an ellipse with a higher far end; a second burn there makes a higher circular orbit, which ends up slower.'],['減速會讓它往下掉到更低的軌道。','Slowing down drops it to a lower orbit.'],['沒有力就不會改變運動，這是慣性。','Without a force, motion doesn\'t change. That\'s inertia.']]});
P.num('s5',7.67,['對。v = √(3.986 × 10¹⁴ ÷ 6,771,000) ≈ 7,670 m/s，大約 92 分鐘繞地球一圈。','Right. v = √(3.986 × 10¹⁴ ÷ 6,771,000) ≈ 7,670 m/s, about one lap every 92 minutes.'],['提示：r 要換成公尺：6,771,000 m。v = √(GM/r)，再除以 1000 換成 km/s。','Hint: convert r to meters, 6,771,000 m. v = √(GM/r), then divide by 1000 for km/s.'],.05);
P.watch($('sc'),draw);P.onLang(()=>{mis();read()});setAlt(400);mis();
}});}
