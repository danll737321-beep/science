{const b=P.b;
P.reg('maxwell',{html:P.build('maxwell',{
 title:['馬克士威：光是電磁波','Maxwell: light is an electromagnetic wave'],
 lede:['到了 1860 年代，電和磁的定律已經有好幾條：庫侖、安培、法拉第。馬克士威想把它們寫成一套完整的方程式。寫完之後，方程式算出了一種會自己往前跑的波，速度剛好等於光速。','By the 1860s there were several laws of electricity and magnetism: Coulomb\'s, Ampère\'s, Faraday\'s. James Clerk Maxwell set out to write them as one complete set of equations. When he did, the equations predicted a self-propagating wave whose speed matched the speed of light.'],
 old:{h:['光是光，電磁是電磁','Light is light; electromagnetism is something else'],
  p:[['楊和菲涅耳已經證明光是一種波（會在「波與光」那條時間軸看到），但大家認為它是另一種東西，跟電、磁沒有關係。光速也已經用旋轉齒輪和鏡子量出來了：1849 年斐佐量到大約 3.13 × 10⁸ m/s。','Young and Fresnel had shown that light is a wave (see the Waves & Light timeline), but it was considered a separate thing, unrelated to electricity or magnetism. Its speed had been measured with spinning cogwheels and mirrors: Fizeau got about 3.13 × 10⁸ m/s in 1849.']]},
 con:{h:['方程式少了一塊','The equations were missing a piece'],
  p:[['馬克士威發現，安培定律在電容器充電時會出問題：電流流進電容器的一片金屬板，兩片板子之間卻沒有電流，磁場好像突然斷掉。','Maxwell found that Ampère\'s law broke down when a capacitor charges: current flows onto one plate, but there\'s no current in the gap between the plates, as if the magnetic field suddenly stopped.'],
   ['他補上一項：兩片板子之間的「電場在變化」，也會產生磁場。這讓方程式變得對稱：','He added a term: the changing electric field between the plates also produces a magnetic field. That made the equations symmetric:'],
   ['法拉第：變化的磁場 → 產生電場。馬克士威：變化的電場 → 產生磁場。','Faraday: a changing magnetic field → makes an electric field. Maxwell: a changing electric field → makes a magnetic field.'],
   ['推論：電場的變化產生磁場，磁場的變化又產生電場，兩者可以互相推著往前跑，不需要電線，也不需要任何東西承載。','The consequence: a changing electric field makes a magnetic field, whose change makes an electric field, and so on. They can carry each other forward with no wire and nothing to travel through.']]},
 exps:[{h:['實驗一：用實驗室量到的兩個常數，算出波速','Experiment 1: compute the wave\'s speed from two lab constants'],
  intro:[['方程式說這種波的速度 = 1 / √(μ₀ ε₀)。ε₀ 可以用電容器在實驗室量，μ₀ 可以用線圈的磁力量，兩個都跟光完全無關。','The equations say this wave\'s speed = 1 / √(μ₀ ε₀). ε₀ can be measured with capacitors in the lab and μ₀ with the forces between coils; neither has anything to do with light.']],
  preds:[['mx1','預測 A：算出來的速度大約是？','Prediction A: roughly what speed will the calculation give?']],
  sim:`<div class="card"><p style="margin:0"><b>ε₀</b> = 8.854 × 10⁻¹² C²/(N·m²)　<b>μ₀</b> = 4π × 10⁻⁷ = 1.257 × 10⁻⁶ T·m/A</p></div><div class="ctrl"><button class="pri" id="mxgo"></button></div><div class="bars" id="mxb"></div><p class="verdict" id="mxv"></p>`},
 {h:['實驗二：電磁波長什麼樣子','Experiment 2: what an electromagnetic wave looks like'],chip:['動手玩','Explore'],
  intro:[['紅色是電場（上下振動），藍色是磁場（前後振動），兩者互相垂直，一起往右跑。改變頻率，看波長怎麼變。','Red is the electric field (oscillating up and down), blue is the magnetic field (oscillating front to back). They\'re perpendicular and travel right together. Change the frequency and watch the wavelength.']],
  preds:[['mx2','預測 B：無線電波和可見光都是電磁波。它們的差別是？','Prediction B: radio waves and visible light are both electromagnetic waves. What\'s the difference between them?']],
  sim:`<div class="fig"><canvas id="mxc"></canvas></div><div class="ctrl">${P.sl('mxf','頻率','Frequency',1,6,.5,2)}</div>
   <div class="scroll"><table><thead><tr><th>${b('種類','Type')}</th><th>${b('波長','Wavelength')}</th><th>${b('例子','Example')}</th></tr></thead><tbody>
   <tr><td>${b('無線電波','Radio')}</td><td>1 m – 1 km</td><td>${b('FM、AM 廣播','FM and AM radio')}</td></tr><tr><td>${b('微波','Microwave')}</td><td>1 mm – 1 m</td><td>${b('Wi-Fi、微波爐','Wi-Fi, microwave ovens')}</td></tr>
   <tr><td>${b('紅外線','Infrared')}</td><td>700 nm – 1 mm</td><td>${b('遙控器、熱','Remote controls, heat')}</td></tr><tr><td>${b('可見光','Visible')}</td><td>400 – 700 nm</td><td>${b('彩虹','A rainbow')}</td></tr>
   <tr><td>${b('紫外線','Ultraviolet')}</td><td>10 – 400 nm</td><td>${b('曬傷','Sunburn')}</td></tr><tr><td>${b('X 射線','X-ray')}</td><td>0.01 – 10 nm</td><td>${b('醫院照 X 光','Medical X-rays')}</td></tr></tbody></table></div>`}],
 idea:{h:['光就是電磁波','Light is an electromagnetic wave'],
  p:[['用兩個跟光毫無關係的實驗室常數，算出來的速度跟量到的光速幾乎一樣。馬克士威在 1865 年寫道：光本身就是一種依照電磁定律傳播的擾動。','Two lab constants with nothing to do with light give a speed almost identical to light\'s measured speed. In 1865 Maxwell wrote that light itself is a disturbance propagating according to the laws of electromagnetism.'],
   ['他也預測：一定還有其他波長的電磁波，人眼看不到。22 年後，赫茲在實驗室做出了無線電波，證明他是對的。','He also predicted electromagnetic waves of other wavelengths, invisible to the eye. Twenty-two years later Hertz produced radio waves in the lab and proved him right.']],
  key:['c = 1/√(μ₀ε₀)','電、磁、光三件事被同一組方程式統一了。無線電、微波、紅外線、可見光、紫外線、X 射線，都是同一種波，只差在波長和頻率。','Electricity, magnetism, and light were unified by one set of equations. Radio, microwaves, infrared, visible light, ultraviolet, and X-rays are all the same kind of wave, differing only in wavelength and frequency.']},
 adv:[['算出光速','Calculating the speed of light',[
   '=c = 1 / √(1.257×10⁻⁶ × 8.854×10⁻¹²) = 1 / √(1.113×10⁻¹⁷) = 2.998 × 10⁸ m/s']],
  ['波速、頻率和波長','Wave speed, frequency, and wavelength',[
   ['每秒振動 f 次，每次往前推進一個波長 λ，所以：','The wave vibrates f times per second and advances one wavelength λ each time, so:'],
   '=c = f · λ　⇒　λ = c / f',
   ['所有電磁波在真空中的 c 都一樣，所以頻率越高，波長越短。','Every electromagnetic wave has the same c in a vacuum, so higher frequency means shorter wavelength.']]],
  ['電場和磁場的大小關係','How E and B compare',[
   '=E / B = c',
   ['電場和磁場同時達到最大、同時變成 0，方向互相垂直，也都垂直於前進方向（橫波）。','E and B peak together and hit zero together; they\'re perpendicular to each other and to the direction of travel (a transverse wave).']]]],
 apply:{h:['用 c = fλ 解題','Solve with c = fλ'],q:[
  ['n','mx3','1. FM 電台的頻率是 100 MHz（10⁸ Hz）。它的波長是幾公尺？','1. An FM station broadcasts at 100 MHz (10⁸ Hz). What is its wavelength in meters?','m'],
  ['n','mx4','2. Wi-Fi 用 2.4 GHz（2.4 × 10⁹ Hz）。波長是幾公分？','2. Wi-Fi uses 2.4 GHz (2.4 × 10⁹ Hz). What is the wavelength in centimeters?','cm'],
  ['p','mx5','3. 在真空中，下面哪些以光速前進？','3. In a vacuum, which of these travel at the speed of light?']]},
 pencil:{h:['4. 拿紙筆：畫出一段往右前進的電磁波','4. Pencil and paper: draw an electromagnetic wave traveling to the right'],p:['標出電場、磁場、前進方向和一個波長。','Label the electric field, the magnetic field, the direction of travel, and one wavelength.'],
  ans:`<p>${b('電場畫成上下的正弦波，磁場畫成前後（斜的透視方向）的正弦波，兩者的波峰在同一個位置。前進方向跟兩者都垂直。兩個相鄰波峰之間的距離就是一個波長 λ。可以對照上面的動畫。','Draw E as an up-down sine wave and B as a front-back (drawn on a slant) sine wave, with peaks lined up. The direction of travel is perpendicular to both. The distance between neighboring peaks is one wavelength λ. Compare with the animation above.')}</p>`},
 finale:`<section class="band next" id="maxwell-next"><div class="wrap"><span class="chip">${b('這個答案帶出的新問題','The new question this answer creates')}</span>
  <h2>${b('光速是 c，但這是「相對於什麼」的速度？','Light travels at c, but c relative to what?')}</h2>
  <p>${b('聲波在空氣裡傳，水波在水裡傳。如果光是波，它是在什麼東西裡傳的？這個問題引出了兩條路：赫茲去找看不見的電磁波，麥克生去找承載光的「以太」。','Sound travels through air, water waves through water. If light is a wave, what does it travel through? This question led two ways: Hertz went looking for invisible electromagnetic waves, and Michelson went looking for the "ether" that carries light.')}</p>
  <div class="row"><a class="btn pri" href="#hertz">${b('波與光：看不見的光 →','Waves & Light: invisible light →')}</a><a class="btn pri" href="#michelson">${b('近代物理：找不到的以太 →','Modern Physics: the missing ether →')}</a></div></div></section>`,
 std:['表現預期 HS-PS4-1（用數學表示法描述波的頻率、波長和速度的關係）、HS-PS4-3（評估電磁輻射可以用波動模型描述的論點）、HS-PS2-5。科學實踐：SEP 5 數學與計算思維、SEP 7 以證據進行論證。跨科概念：模式；系統與系統模型。','Performance expectations HS-PS4-1 (mathematical representations of the relationship among frequency, wavelength, and speed of waves), HS-PS4-3 (evaluate claims that electromagnetic radiation can be described by a wave model), HS-PS2-5. Practices: SEP 5 Mathematical and Computational Thinking, SEP 7 Engaging in Argument from Evidence. Crosscutting concepts: Patterns; Systems and System Models.']
}),init(){
const {t,tp,css,fit,$}=P;
let done=0,f=2,ph=0,moved=0;
const bars=()=>{if(!done){$('mxb').innerHTML='';$('mxv').textContent='';return}
 const rows=[[t('馬克士威方程式算出來','Maxwell\'s equations (calculated)'),2.998,'var(--cu)'],[t('斐佐 1849（齒輪）','Fizeau 1849 (cogwheel)'),3.13,'var(--mo)'],[t('傅科 1862（旋轉鏡）','Foucault 1862 (rotating mirror)'),2.98,'var(--mo)'],[t('聲音（比較用）','Sound (for comparison)'),0.00000343,'var(--mute)']];
 $('mxb').innerHTML=rows.map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${r[1]/3.3*100}%;background:${r[2]}"></div></div><span class="v">${r[1]<1?'343 m/s':r[1].toFixed(3)+'×10⁸'}</span></div>`).join('');
 $('mxv').className='verdict ok';$('mxv').innerHTML=t('算出來的速度，跟量到的光速相差不到 5%！','The calculated speed is within 5% of the measured speed of light!')};
P.gate('mxgo',[],()=>t('計算 1/√(μ₀ε₀)','Compute 1/√(μ₀ε₀)'));
$('mxgo').onclick=()=>{done=1;P.reveal('mx1');bars()};
const draw=()=>{const[x,W,H]=fit($('mxc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const cy=H/2,x0=30,x1=W-20,A=H*.3,lam=(x1-x0)/f,ink=css('--ink');
 x.strokeStyle=css('--mute');x.lineWidth=1.5;x.beginPath();x.moveTo(x0,cy);x.lineTo(x1,cy);x.stroke();
 const E=X=>Math.sin(2*Math.PI*(X-x0)/lam-ph);
 x.strokeStyle='#d1495b';x.lineWidth=2.5;x.beginPath();for(let X=x0;X<=x1;X+=3){const Y=cy-A*E(X);X===x0?x.moveTo(X,Y):x.lineTo(X,Y)}x.stroke();
 x.globalAlpha=.25;for(let X=x0;X<=x1;X+=12){x.strokeStyle='#d1495b';x.beginPath();x.moveTo(X,cy);x.lineTo(X,cy-A*E(X));x.stroke();x.strokeStyle='#2160d8';x.beginPath();x.moveTo(X,cy);x.lineTo(X-A*.5*E(X),cy+A*.45*E(X));x.stroke()}x.globalAlpha=1;
 x.strokeStyle='#2160d8';x.lineWidth=2.5;x.beginPath();for(let X=x0;X<=x1;X+=3){const e=E(X),px=X-A*.5*e,py=cy+A*.45*e;X===x0?x.moveTo(px,py):x.lineTo(px,py)}x.stroke();
 x.font='700 13px Archivo';x.fillStyle='#d1495b';x.fillText('E',x0,cy-A-6);x.fillStyle='#2160d8';x.fillText('B',x0-14,cy+A*.6);
 P.arrow(x,0,x1-60,22,x1-4,22,ink,2.5);x.fillStyle=ink;x.font='600 12px "Noto Sans TC",Archivo';x.textAlign='right';x.fillText(tp('前進方向','Direction of travel'),x1-66,26);x.textAlign='left';
 const lx=x0+lam*.25,ly=H-14;x.strokeStyle=ink;x.lineWidth=1.5;x.beginPath();x.moveTo(lx,ly);x.lineTo(lx+lam,ly);x.stroke();x.fillText('λ',lx+lam/2-3,ly-6)};
P.slider('mxf',v=>v+' ×',v=>{f=v;moved++;if(moved>1)P.reveal('mx2')});
P.run(dt=>{if(!$('mxc').isConnected)return false;ph+=dt*4;if(document.querySelector('main.lesson[data-id=maxwell]')?.hidden)return;draw()});
P.pred('mx1',{c:1,o:[['很慢，大約跟聲音一樣（340 m/s）','Slow, about the speed of sound (340 m/s)'],['大約 3 × 10⁸ m/s，跟光一樣','About 3 × 10⁸ m/s, like light'],['無限快','Infinitely fast']],f:[['按下計算看看。','Press compute and see.'],['按下計算驗證。','Press compute to check.'],['按下計算看看。','Press compute and see.']]});
P.pred('mx2',{c:2,o:[['速度不同','Their speeds'],['一個是電，一個是磁','One is electric, the other magnetic'],['只有頻率和波長不同','Only their frequency and wavelength']],f:[['在真空中，所有電磁波的速度都是 c。','In a vacuum, every electromagnetic wave travels at c.'],['每一種電磁波都同時有電場和磁場。','Every electromagnetic wave has both electric and magnetic fields.'],['拉動頻率滑桿，看哪些東西變了、哪些沒變。','Drag the frequency slider and see what changes and what doesn\'t.']]});
P.num('mx3',3,['對。λ = c/f = 3×10⁸ ÷ 10⁸ = 3 m。','Right. λ = c/f = 3×10⁸ ÷ 10⁸ = 3 m.'],['提示：λ = c ÷ f。','Hint: λ = c ÷ f.'],.05);
P.num('mx4',12.5,['對。λ = 3×10⁸ ÷ 2.4×10⁹ = 0.125 m = 12.5 cm。微波爐也用大約 2.45 GHz。','Right. λ = 3×10⁸ ÷ 2.4×10⁹ = 0.125 m = 12.5 cm. Microwave ovens use about 2.45 GHz too.'],['提示：先算出公尺，再乘 100。','Hint: get meters first, then multiply by 100.'],.2);
P.pred('mx5',{now:1,c:2,o:[['只有可見光','Only visible light'],['只有可見光和無線電波','Only visible light and radio waves'],['無線電波、可見光、X 射線全部都是','Radio, visible light, and X-rays, all of them']],f:[['無線電波、X 射線也是電磁波。','Radio waves and X-rays are electromagnetic waves too.'],['X 射線也是電磁波，也以光速前進。（聲音不是電磁波，所以不算。）','X-rays are electromagnetic too and also travel at c. (Sound isn\'t electromagnetic, so it doesn\'t count.)'],['對。所有電磁波在真空中都以 c 前進。','Right. Every electromagnetic wave travels at c in a vacuum.']]});
bars();P.watch($('mxc'),draw);P.onLang(bars);
}});}
