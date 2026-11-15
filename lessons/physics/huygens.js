{const b=P.b;
P.reg('huygens',{html:P.build('huygens',{
 title:['光是粒子，還是波？','Is light a particle or a wave?'],
 lede:['17 世紀末，兩位大科學家對光提出了完全不同的模型。牛頓說光是一顆一顆的小粒子，惠更斯說光是一種波。兩個模型都能解釋反射和折射，卻對一件事做出相反的預測。這個預測要等 150 年才有人量得出來。','In the late 1600s two great scientists offered opposite models of light. Newton said light is a stream of tiny particles; Huygens said it is a wave. Both explained reflection and refraction, yet they made opposite predictions about one thing, which took 150 years to measure.'],
 old:{h:['兩個模型，各有道理','Two models, each reasonable'],
  cards:[['牛頓的粒子說（1704）','Newton\'s particles (1704)','光沿直線前進、會留下清楚的影子，就像丟出去的小球。進入水裡時，水把粒子往下「拉」，所以會轉彎，而且在水裡會變快。','Light travels in straight lines and casts sharp shadows, like thrown balls. Entering water, the water pulls the particles down, so they bend and speed up.'],['惠更斯的波動說（1678）','Huygens\'s waves (1678)','波前上的每一點都會發出新的小波，連起來就是下一個波前。進入水裡時波變慢，波前的一側先慢下來，所以會轉彎。','Every point on a wavefront sends out new wavelets that form the next wavefront. Entering water, the wave slows; one side of the front slows first, so it turns.']]},
 con:{h:['同樣的轉彎，相反的速度','The same bending, opposite speeds'],
  p:[['兩個模型都能解釋光從空氣進水時，會往法線（垂直於水面的線）偏折。但要做到這一點，粒子說需要光在水裡比較快，波動說需要光在水裡比較慢。','Both models explain why light entering water bends toward the normal (the line perpendicular to the surface). But to do it, the particle model needs light to go faster in water, and the wave model needs it to go slower.'],
   ['光速太快了，17 世紀沒有人能量，只好看名氣：牛頓的威望讓粒子說主導了一百多年。1850 年，傅科用旋轉鏡在實驗室裡直接比較了光在空氣和水裡的速度。','Light was far too fast to measure in the 1600s, so reputation decided: Newton\'s prestige kept the particle model dominant for over a century. In 1850 Foucault used a rotating mirror to compare light\'s speed in air and water directly in the lab.']]},
 exps:[{h:['實驗：光從空氣射進另一種物質','Experiment: light passing from air into another material'],
  intro:[['改變入射角和下面物質的折射率 n（空氣 1.00、水 1.33、玻璃 1.5、鑽石 2.42）。細線是波前，間距就是波長。','Change the incident angle and the lower material\'s refractive index n (air 1.00, water 1.33, glass 1.5, diamond 2.42). The thin lines are wavefronts, spaced one wavelength apart.']],
  preds:[['hu1','預測 A：傅科 1850 年量到，光在水裡比在空氣裡？','Prediction A: what did Foucault find in 1850? Light in water travels?'],['hu2','預測 B：光以 30° 從空氣射進水裡，折射角大約是？','Prediction B: light enters water from air at 30°. The refraction angle is about?']],
  sim:`<div class="fig"><canvas id="huc"></canvas></div><div class="ctrl">${P.sl('hua','入射角','Incident angle',0,80,5,30)}${P.sl('hun','折射率 n','Index n',1,2.42,.01,1.33)}<button id="hufo">${b('看傅科 1850 的結果','See Foucault\'s 1850 result')}</button></div><p class="read" id="hur" style="white-space:normal"></p><div id="hufr"></div>`}],
 idea:{h:['光在介質裡變慢，所以會折射：波動說贏了這一回合','Light slows in a medium and so bends: the wave model wins this round'],
  p:[['傅科量到：光在水裡比較慢，大約是空氣中的 3/4。這正好是波動說的預測，粒子說的預測錯了。','Foucault found light slower in water, about 3/4 of its speed in air: exactly the wave prediction. The particle prediction was wrong.'],
   ['折射率 n 就是光速變慢的倍數。從快的地方進入慢的地方，往法線偏；從慢的地方出來，遠離法線。','The refractive index n is how many times slower light gets. Going from fast to slow, it bends toward the normal; coming out from slow to fast, it bends away.']],
  key:['n₁ sinθ₁ = n₂ sinθ₂','司乃耳定律。n = c / v：折射率是真空光速除以在介質裡的光速。','Snell\'s law. n = c / v: the index is the speed of light in vacuum divided by its speed in the material.'],
  after:[['不過故事還沒結束。在近代物理那條線，你會看到光在某些實驗裡又表現得像粒子。','But the story isn\'t over. On the Modern Physics timeline you\'ll see light behaving like particles again in certain experiments.']]},
 adv:[['用惠更斯原理推出司乃耳定律','Deriving Snell\'s law from Huygens\'s principle',[
   ['波前的一端碰到水面後，在時間 t 內於水中走了 v₂t；另一端還在空氣中走了 v₁t 才到水面。兩端之間沿水面的距離 d 相同：','After one edge of a wavefront reaches the water, it travels v₂t in water while the other edge travels v₁t through air to reach the surface. The distance d along the surface is shared:'],
   '=sinθ₁ = v₁t / d　　sinθ₂ = v₂t / d　⇒　sinθ₁ / v₁ = sinθ₂ / v₂',
   ['用 v = c/n 代入，就得到 n₁ sinθ₁ = n₂ sinθ₂。','Substitute v = c/n to get n₁ sinθ₁ = n₂ sinθ₂.']]],
  ['全反射','Total internal reflection',[
   ['光從慢的介質出來時，入射角大於臨界角就完全出不去：','Coming out of a slow medium, light can\'t escape at all beyond the critical angle:'],
   '=sinθ_c = n₂ / n₁',
   ['玻璃到空氣：sinθ_c = 1/1.5，θ_c ≈ 42°。光纖就是靠全反射把光困在玻璃裡傳送網路訊號。','Glass to air: sinθ_c = 1/1.5, θ_c ≈ 42°. Optical fibers trap light inside glass this way to carry internet signals.']]]],
 apply:{h:['用司乃耳定律解題','Solve with Snell\'s law'],q:[
  ['n','hu3','1. 水的折射率 1.33。光在水裡的速度是多少？用 ×10⁸ m/s 為單位。','1. Water\'s index is 1.33. What is light\'s speed in water, in units of ×10⁸ m/s?','×10⁸ m/s'],
  ['n','hu4','2. 光以 45° 從空氣射進玻璃（n = 1.5），折射角是幾度？','2. Light enters glass (n = 1.5) from air at 45°. What is the refraction angle in degrees?','°'],
  ['p','hu5','3. 吸管插在水杯裡，看起來好像在水面「折斷」了。為什麼？','3. A straw in a glass of water looks "broken" at the surface. Why?']]},
 pencil:{h:['4. 拿紙筆：畫出波前從空氣進入水中的樣子','4. Pencil and paper: draw wavefronts passing from air into water'],p:['水中的波前間距要比空氣中短多少？','How much closer should the wavefronts be in the water?'],
  ans:`<p>${b('水中的波前間距是空氣中的 1/1.33 ≈ 0.75 倍（波長變短，頻率不變）。波前在水面處「折」一下，前進方向往法線偏。可以對照模擬裡的細線。','In water the wavefronts are 1/1.33 ≈ 0.75 times as far apart (shorter wavelength, same frequency). They kink at the surface, and the direction of travel bends toward the normal. Compare with the thin lines in the simulation.')}</p>`},
 next:['傅科的實驗要到 1850 年才做出來。在那之前，有沒有更直接的方法證明光是波？','Foucault\'s experiment came only in 1850. Before that, was there a more direct way to prove light is a wave?','1801 年，一位英國醫生只用兩條細縫就做到了。','In 1801 an English physician did it with just two narrow slits.'],
 std:['表現預期 HS-PS4-1（用數學表示法描述波在不同介質中的頻率、波長和速度）、HS-PS4-3（評估光可以用波動模型或粒子模型描述的論點與證據）。科學實踐：SEP 7 以證據進行論證、SEP 5 數學與計算思維。跨科概念：模式；系統與系統模型。','Performance expectations HS-PS4-1 (mathematical representations of frequency, wavelength, and speed of waves in various media), HS-PS4-3 (evaluate the claims and evidence for describing light with a wave model or a particle model). Practices: SEP 7 Engaging in Argument from Evidence, SEP 5 Mathematical and Computational Thinking. Crosscutting concepts: Patterns; Systems and System Models.']
}),init(){
const {t,tp,css,fit,$}=P;let a=30,n=1.33,ph=0,fo=0;
const draw=()=>{const[x,W,H]=fit($('huc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const cx=W/2,cy=H/2,th1=a*Math.PI/180,s2=Math.sin(th1)/n,th2=Math.asin(s2),ink=css('--ink'),R=Math.min(W,H)*.48;
 x.fillStyle=css('--mosoft');x.globalAlpha=.4+Math.min(.5,(n-1)*.4);x.fillRect(0,cy,W,H-cy);x.globalAlpha=1;
 x.strokeStyle=css('--mute');x.setLineDash([5,5]);x.beginPath();x.moveTo(cx,10);x.lineTo(cx,H-10);x.stroke();x.setLineDash([]);
 const dx1=Math.sin(th1),dy1=Math.cos(th1),dx2=Math.sin(th2),dy2=Math.cos(th2),lam=26;
 x.strokeStyle='#e8a33a';x.lineWidth=3;x.beginPath();x.moveTo(cx-dx1*R,cy-dy1*R);x.lineTo(cx,cy);x.lineTo(cx+dx2*R,cy+dy2*R);x.stroke();
 x.strokeStyle='#e8a33a';x.lineWidth=1.5;x.globalAlpha=.7;const off=(ph%1)*lam;
 for(let s=off;s<R;s+=lam){const px=cx-dx1*s,py=cy-dy1*s;x.beginPath();x.moveTo(px-dy1*22,py+dx1*22);x.lineTo(px+dy1*22,py-dx1*22);x.stroke()}
 for(let s=off/n;s<R;s+=lam/n){const px=cx+dx2*s,py=cy+dy2*s;x.beginPath();x.moveTo(px-dy2*22,py+dx2*22);x.lineTo(px+dy2*22,py-dx2*22);x.stroke()}x.globalAlpha=1;
 x.fillStyle=ink;x.font='600 13px "Noto Sans TC",Archivo';x.textAlign='left';x.fillText(tp('空氣 n = 1.00','Air n = 1.00'),10,22);x.fillText(tp(`n = ${n.toFixed(2)}`,`n = ${n.toFixed(2)}`),10,cy+22);
 $('hur').textContent=tp(`入射角 ${a}° → 折射角 ${(th2*180/Math.PI).toFixed(1)}° · 光速變成 ${(3/n).toFixed(2)}×10⁸ m/s（波動說）`,`Incident ${a}° → refracted ${(th2*180/Math.PI).toFixed(1)}° · light speed ${(3/n).toFixed(2)}×10⁸ m/s (wave model)`);
};const chk=()=>{if(a===30&&Math.abs(n-1.33)<.015)P.reveal('hu2')};
P.slider('hua',v=>v+'°',v=>{a=v;chk();draw()});P.slider('hun',v=>v.toFixed(2),v=>{n=v;chk();draw()});
const fr=()=>{if(!fo)return;$('hufr').innerHTML=`<div class="bars">${[[t('粒子說預測（水中）','Particle model (in water)'),3*1.33,'var(--mute)'],[t('波動說預測（水中）','Wave model (in water)'),3/1.33,'var(--mo)'],[t('傅科 1850 實際量到','Foucault 1850, measured'),3/1.33,'var(--ok)']].map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${r[1]/4.2*100}%;background:${r[2]}"></div></div><span class="v">${r[1].toFixed(2)}×10⁸</span></div>`).join('')}</div>`};
$('hufo').onclick=()=>{fo=1;P.reveal('hu1');fr()};
P.run(dt=>{if(!$('huc').isConnected)return false;ph+=dt*.8;if(document.querySelector('main.lesson[data-id=huygens]')?.hidden)return;draw()});
P.pred('hu1',{c:1,o:[['比較快（粒子說對了）','Faster (the particle model is right)'],['比較慢（波動說對了）','Slower (the wave model is right)'],['一樣快','The same']],f:[['按「看傅科 1850 的結果」。','Press "See Foucault\'s 1850 result."'],['按「看傅科 1850 的結果」驗證。','Press "See Foucault\'s 1850 result" to check.'],['那就不會折射了。按按鈕看結果。','Then it wouldn\'t bend. Press the button to see.']]});
P.pred('hu2',{c:1,o:[['還是 30°','Still 30°'],['大約 22°，往法線偏','About 22°, toward the normal'],['大約 42°，遠離法線','About 42°, away from the normal']],f:[['入射角設 30°、n 設 1.33 看看。','Set 30° and n = 1.33 and see.'],['入射角設 30°、n 設 1.33 驗證。','Set 30° and n = 1.33 to check.'],['入射角設 30°、n 設 1.33 看看。','Set 30° and n = 1.33 and see.']]});
P.num('hu3',2.26,['對。v = c/n = 3 ÷ 1.33 ≈ 2.26 × 10⁸ m/s。','Right. v = c/n = 3 ÷ 1.33 ≈ 2.26 × 10⁸ m/s.'],['提示：v = c ÷ n，c = 3 × 10⁸。','Hint: v = c ÷ n with c = 3 × 10⁸.'],.02);
P.num('hu4',28.1,['對。sinθ₂ = sin45° ÷ 1.5 = 0.471，θ₂ ≈ 28.1°。','Right. sinθ₂ = sin45° ÷ 1.5 = 0.471, so θ₂ ≈ 28.1°.'],['提示：sinθ₂ = sinθ₁ ÷ n。','Hint: sinθ₂ = sinθ₁ ÷ n.'],.4);
P.pred('hu5',{now:1,c:1,o:[['水把吸管壓彎了','The water bends the straw'],['水下部分射出的光在水面折射，眼睛把它看在錯的位置','Light from the underwater part refracts at the surface, so your eye places it in the wrong spot'],['水會放大東西','Water magnifies things']],f:[['把吸管拿出來，它還是直的。','Take the straw out and it\'s still straight.'],['對。大腦假設光走直線，所以把水下的吸管看在比實際更淺的地方。','Right. Your brain assumes light travels straight, so it places the underwater part shallower than it really is.'],['放大是曲面造成的，跟這裡的「折斷」不同。','Magnification comes from curved surfaces; that\'s different from this "break."']]});
P.watch($('huc'),draw);P.onLang(fr);
}});}
