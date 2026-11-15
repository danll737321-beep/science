{const b=P.b;
P.reg('bohr',{html:P.build('bohr',{
 title:['波耳的原子：電子只能待在特定的能階','Bohr\'s Atom: electrons live only on certain energy levels'],
 lede:['把氫氣通電，它會發光。用三稜鏡把這道光分開，看到的不是彩虹，而是四條細細的彩色亮線。每一種元素都有自己的一組亮線，像指紋一樣。1913 年，波耳用這些亮線解決了拉塞福原子的問題。','Pass electricity through hydrogen gas and it glows. Split that glow with a prism and you don\'t get a rainbow but four thin colored lines. Every element has its own set of lines, like a fingerprint. In 1913 Niels Bohr used these lines to fix the problem with Rutherford\'s atom.'],
 old:{h:['電子像行星一樣繞著原子核轉','Electrons orbit the nucleus like planets'],p:[['拉塞福的模型裡，電子繞著原子核轉，就像行星繞太陽。電子可以在任何距離、任何能量上繞。','In Rutherford\'s model, electrons circle the nucleus as planets circle the Sun, at any distance and with any energy.']]},
 con:{h:['兩個大問題：原子會塌掉，光譜應該是連續的','Two big problems: atoms should collapse, and spectra should be continuous'],
  p:[['馬克士威的電磁學說：繞圈的電荷會一直放出電磁波、失去能量。電子應該在一億分之一秒內螺旋掉進原子核，但原子明明很穩定。','Maxwell\'s electromagnetism says a circling charge continuously radiates and loses energy. The electron should spiral into the nucleus within a hundred-millionth of a second, yet atoms are stable.'],
   ['而且如果電子可以有任何能量，螺旋下降時會放出各種顏色的光，光譜應該是連續的彩虹。實際上只有幾條特定的線。1885 年，瑞士的高中老師巴耳末已經找到這幾條線的數學規律，但沒有人知道原因。','And if electrons could have any energy, a spiraling electron would give off every color, a continuous rainbow. In reality there are just a few specific lines. In 1885 Johann Balmer, a Swiss schoolteacher, had found a formula for them, but nobody knew why it worked.']]},
 exps:[{h:['實驗：讓電子在能階之間跳躍','Experiment: make the electron jump between levels'],
  intro:[['波耳的假設：電子只能在幾個特定的能階上，在能階上不會放光。從高能階跳到低能階時，放出一個光子，能量剛好等於兩個能階的差。選起點和終點，按「跳下來」。','Bohr\'s assumptions: the electron can occupy only certain energy levels and doesn\'t radiate while on one. When it drops from a higher level to a lower one, it emits a single photon whose energy equals the gap. Pick a start and an end, then press Drop.']],
  preds:[['bo1','預測 A：從 n = 3 跳到 n = 2，放出來的光大約是什麼顏色？','Prediction A: dropping from n = 3 to n = 2, about what color is the light?'],['bo2','預測 B：從 n = 4 跳到 n = 2（落差比較大），光的波長會？','Prediction B: dropping from n = 4 to n = 2 (a bigger gap), the wavelength will?']],
  sim:`<div class="ctrl"><span>${b('從','From')}</span><div class="seg" id="bof"></div><span>${b('跳到','To')}</span><div class="seg" id="bot"></div><button class="pri" id="bogo"></button></div><div class="fig"><canvas id="boc"></canvas></div><p class="read" id="bor" style="white-space:normal"></p><div id="botbl"></div>`}],
 idea:{h:['能量是量子化的：只能是特定的值','Energy is quantized: only certain values are allowed'],
  p:[['電子只能在 n = 1, 2, 3… 這些能階上，不能停在中間。每一次跳下來，放出的光子能量都是固定的，所以只會有幾條特定顏色的線。你剛才算出的波長，跟實驗量到的氫光譜吻合到小數點後一位。','Electrons can only sit on levels n = 1, 2, 3, … and never in between. Each drop releases a photon of a fixed energy, so only a few specific colors appear. The wavelengths you just calculated match hydrogen\'s measured spectrum to a fraction of a nanometer.'],
   ['波耳沒有解釋「為什麼」只能在這些能階，這要等到 1920 年代的量子力學。但他的模型第一次把原子結構、光譜和光子連在一起。','Bohr didn\'t explain why only those levels are allowed; that had to wait for 1920s quantum mechanics. But his model was the first to tie atomic structure, spectra, and photons together.']],
  key:['E_n = −13.6 eV / n²','氫原子第 n 個能階的能量。光子能量 = 兩個能階的差。每一種元素的能階不同，所以光譜就像元素的指紋。','The energy of hydrogen\'s n-th level. Photon energy = the gap between two levels. Each element has different levels, so its spectrum acts as a fingerprint.'],
  after:[['天文學家就是用這種指紋知道恆星由什麼組成。1868 年，科學家在太陽光譜裡發現一條地球上沒見過的線，命名為「氦」（helium，來自希臘文的太陽），27 年後才在地球上找到它。','Astronomers use these fingerprints to learn what stars are made of. In 1868 scientists found a line in the Sun\'s spectrum seen nowhere on Earth and named the element helium (from the Greek for Sun); it was found on Earth 27 years later.']]},
 adv:[['從能階算出波長','From energy levels to wavelength',[
   '=ΔE = 13.6 × (1/n_低² − 1/n_高²) eV　　λ(nm) = 1240 / ΔE(eV)',
   '=3 → 2：ΔE = 13.6 × (1/4 − 1/9) = 1.89 eV　⇒　λ = 656 nm（紅 red）']],
  ['里德伯公式','The Rydberg formula',[
   ['把上面兩條合起來，就是巴耳末在 1885 年從數據中找到的規律（推廣版）：','Combined, they give the pattern Balmer found in data in 1885 (generalized):'],
   '=1/λ = R × (1/n_低² − 1/n_高²)　　R = 1.097 × 10⁷ m⁻¹',
   ['跳到 n = 1 的線都在紫外線（萊曼系），跳到 n = 3 的都在紅外線（帕申系），只有跳到 n = 2 的落在可見光。','Lines ending at n = 1 are all ultraviolet (Lyman series), those ending at n = 3 are infrared (Paschen series), and only those ending at n = 2 fall in the visible range.']]]],
 apply:{h:['用能階解題','Solve with energy levels'],q:[
  ['n','bo3','1. 氫原子的電子從 n = 4 跳到 n = 2，放出的光子能量是幾 eV？','1. Hydrogen\'s electron drops from n = 4 to n = 2. What is the photon energy in eV?','eV'],
  ['n','bo4','2. 這個光子的波長是幾 nm？','2. What is that photon\'s wavelength in nm?','nm'],
  ['p','bo5','3. 天文學家怎麼知道一顆幾百光年外的恆星含有鈉？','3. How do astronomers know a star hundreds of light-years away contains sodium?']]},
 pencil:{h:['4. 拿紙筆：畫出氫原子 n = 1 到 4 的能階圖，以及會放出可見光的跳躍','4. Pencil and paper: draw hydrogen\'s energy levels n = 1 to 4 and the jumps that give visible light'],p:['能階之間的距離要越來越近。','The levels should get closer together as n increases.'],
  ans:`<p>${b('n = 1 在最下面（−13.6 eV），n = 2（−3.4）、n = 3（−1.51）、n = 4（−0.85）越往上越擠。可見光的跳躍是終點在 n = 2 的那些：3→2（紅）、4→2（藍綠）。跳到 n = 1 的落差太大，是紫外線。','n = 1 at the bottom (−13.6 eV), then n = 2 (−3.4), n = 3 (−1.51), n = 4 (−0.85), crowding closer going up. Visible light comes from jumps ending at n = 2: 3→2 (red), 4→2 (blue-green). Jumps to n = 1 are too big: ultraviolet.')}</p>`},
 next:['用光譜看原子，可以看到一個原子；用光譜看星系，能看到什麼？','Spectra reveal what\'s inside an atom. What do they reveal when you point them at galaxies?','1929 年，哈伯發現幾乎所有星系的光譜都偏紅，而且越遠偏得越多。','In 1929 Edwin Hubble found that nearly every galaxy\'s spectrum is shifted red, and the farther the galaxy, the bigger the shift.'],
 std:['表現預期 HS-PS4-3（光的粒子模型）、HS-ESS1-2（光譜證據）、為 HS-PS1-1 打基礎。科學實踐：SEP 2 建立與使用模型、SEP 5 數學與計算思維。跨科概念：模式；結構與功能。氫光譜數據：656.3、486.1、434.0、410.2 nm。','Performance expectations HS-PS4-3 (particle model of light), HS-ESS1-2 (spectral evidence), groundwork for HS-PS1-1. Practices: SEP 2 Developing and Using Models, SEP 5 Mathematical and Computational Thinking. Crosscutting concepts: Patterns; Structure and Function. Hydrogen spectrum data: 656.3, 486.1, 434.0, 410.2 nm.']
}),init(){
const {t,tp,css,fit,$}=P;let hi=3,lo=2,anim=-1,stop=()=>{},done=new Set(),photon=null;
const En=n=>-13.6/n/n,lam=()=>1240/(En(hi)-En(lo));
const col=l=>l<380?'#9b59ff':l>700?'#7a2020':`hsl(${l<440?270-(l-380):l<490?210-(l-440)*.6:l<580?180-(l-490)*1.5:Math.max(0,45-(l-580)*.375)},90%,55%)`;
const meas=[[3,656.3],[4,486.1],[5,434.0],[6,410.2]];
const segs=()=>{P.$('bof').innerHTML=[2,3,4,5,6].map(n=>`<button aria-pressed="${hi===n}" data-n="${n}">n = ${n}</button>`).join('');P.$('bot').innerHTML=[1,2,3].map(n=>`<button aria-pressed="${lo===n}" data-n="${n}" ${n>=hi?'disabled':''}>n = ${n}</button>`).join('')};
$('bof').onclick=e=>{const bt=e.target.closest('button');if(!bt)return;hi=+bt.dataset.n;if(lo>=hi)lo=hi-1;segs();info();draw()};
$('bot').onclick=e=>{const bt=e.target.closest('button');if(!bt||bt.disabled)return;lo=+bt.dataset.n;segs();info();draw()};
const info=()=>{const L=lam(),reg=L<380?t('紫外線','ultraviolet'):L>700?t('紅外線','infrared'):t('可見光','visible');$('bor').innerHTML=t(`ΔE = ${(En(hi)-En(lo)).toFixed(2)} eV → λ = ${L.toFixed(1)} nm（${reg}）`,`ΔE = ${(En(hi)-En(lo)).toFixed(2)} eV → λ = ${L.toFixed(1)} nm (${reg})`)};
const tbl=()=>{$('botbl').innerHTML=`<div class="scroll"><table><thead><tr><th>${t('跳躍','Jump')}</th><th>${t('實驗量到（nm）','Measured (nm)')}</th><th>${t('你算出來的','You calculated')}</th></tr></thead><tbody>${meas.map(([n,m])=>`<tr><td>${n} → 2</td><td><span style="display:inline-block;width:10px;height:10px;background:${col(m)};margin-right:6px"></span>${m}</td><td>${done.has(n+'-2')?(1240/(En(n)-En(2))).toFixed(1):'—'}</td></tr>`).join('')}</tbody></table></div>`};
const draw=()=>{const[x,W,H]=fit($('boc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const L=90,R=W*.55,Y=e=>20+(H-50)*(e/-13.6),ink=css('--ink');
 for(let n=1;n<=6;n++){const y=Y(En(n));x.strokeStyle=n===hi||n===lo?css('--cu'):css('--mute');x.lineWidth=n===hi||n===lo?3:1.5;x.beginPath();x.moveTo(L,y);x.lineTo(R,y);x.stroke();
  if(n<=4||n===hi||n===lo){x.fillStyle=ink;x.font='600 12px Archivo';x.textAlign='right';x.fillText(`n=${n}  ${En(n).toFixed(2)} eV`,L-6,y+(n===4&&hi>4?8:4))}}
 const yh=Y(En(hi)),yl=Y(En(lo)),ey=anim<0?yh:yh+(yl-yh)*Math.min(1,anim);x.fillStyle='#2160d8';x.beginPath();x.arc((L+R)/2,ey,8,0,7);x.fill();
 if(photon){const c=col(photon.l);x.strokeStyle=c;x.lineWidth=3;x.beginPath();for(let s=0;s<80;s++){const X=R+20+photon.p*W*.35+s*1.5,Yv=yl+Math.sin(s*.4)*6;s?x.lineTo(X,Yv):x.moveTo(X,Yv)}x.stroke()}
 x.fillStyle=css('--panel');x.fillRect(R+20,H-36,W-R-40,22);meas.forEach(([n,m])=>{const X=R+20+(m-380)/(720-380)*(W-R-40);x.fillStyle=done.has(n+'-2')?col(m):'rgba(128,128,128,.25)';x.fillRect(X-2,H-36,4,22)});
 x.fillStyle=ink;x.font='11px "Noto Sans TC",Archivo';x.textAlign='left';x.fillText(tp('氫光譜（你做出來的線會亮起）','Hydrogen spectrum (lines light up as you make them)'),R+20,H-42)};
P.gate('bogo',[],()=>t('跳下來','Drop'));
$('bogo').onclick=()=>{stop();anim=0;photon=null;stop=P.run(dt=>{if(anim<1){anim+=dt*2}else{if(!photon){photon={l:lam(),p:0};done.add(hi+'-'+lo);tbl();if(hi===3&&lo===2)P.reveal('bo1');if(hi===4&&lo===2)P.reveal('bo2')}photon.p+=dt*.8}draw();if(photon&&photon.p>1){anim=-1;photon=null;draw();return false}})};
P.pred('bo1',{c:0,o:[['紅色','Red'],['綠色','Green'],['看不見的紫外線','Invisible ultraviolet']],f:[['選 3 → 2，按跳下來驗證。','Pick 3 → 2 and press Drop to check.'],['選 3 → 2，按跳下來看看。','Pick 3 → 2 and press Drop.'],['選 3 → 2，按跳下來看看。','Pick 3 → 2 and press Drop.']]});
P.pred('bo2',{c:1,o:[['變長（更紅）','Get longer (redder)'],['變短（更藍）','Get shorter (bluer)'],['一樣','Stay the same']],f:[['選 4 → 2 看看。','Pick 4 → 2 and see.'],['選 4 → 2 驗證。','Pick 4 → 2 to check.'],['選 4 → 2 看看。','Pick 4 → 2 and see.']]});
P.num('bo3',2.55,['對。13.6 × (1/4 − 1/16) = 13.6 × 0.1875 = 2.55 eV。','Right. 13.6 × (1/4 − 1/16) = 13.6 × 0.1875 = 2.55 eV.'],['提示：ΔE = 13.6 × (1/2² − 1/4²)。','Hint: ΔE = 13.6 × (1/2² − 1/4²).'],.03);
P.num('bo4',486,['對。1240 ÷ 2.55 ≈ 486 nm，藍綠色，就是氫光譜的第二條線。','Right. 1240 ÷ 2.55 ≈ 486 nm, blue-green: hydrogen\'s second line.'],['提示：λ = 1240 ÷ ΔE。','Hint: λ = 1240 ÷ ΔE.'],2);
P.pred('bo5',{now:1,c:1,o:[['派太空船去取樣','A spacecraft collected a sample'],['在恆星的光譜裡找到鈉特有的那組譜線','They find sodium\'s characteristic lines in the star\'s spectrum'],['從恆星的亮度推算','They work it out from the star\'s brightness']],f:[['太空船到不了幾百光年外。','No spacecraft can reach hundreds of light-years away.'],['對。每一種元素的能階不同，譜線位置也不同，就像條碼一樣。','Right. Each element has different energy levels and therefore different line positions, like a barcode.'],['亮度跟距離、大小有關，看不出成分。','Brightness depends on distance and size; it can\'t reveal composition.']]});
segs();info();tbl();P.watch($('boc'),draw);P.onLang(()=>{info();tbl()});
}});}
