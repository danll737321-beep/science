{const b=P.b;
P.reg('photon',{html:P.build('photon',{
 title:['光子：光是一份一份的能量','The Photon: light comes in packets of energy'],
 lede:['楊的雙狹縫和馬克士威的方程式已經證明光是波。但光照在金屬上打出電子的現象（光電效應），用波怎麼都解釋不了。1905 年，愛因斯坦提出：光的能量是一份一份的，每一份叫做一個光子。','Young\'s double slit and Maxwell\'s equations had proven light is a wave. But the way light knocks electrons out of metal (the photoelectric effect) defied every wave explanation. In 1905 Einstein proposed that light\'s energy comes in packets, each one a photon.'],
 old:{h:['光是波，越亮能量越多','Light is a wave; brighter means more energy'],p:[['波的能量看振幅：海浪越大，打在岸上的力量越大。所以照在金屬上的光越亮，應該越容易把電子打出來；就算是很暗的光，照久一點，電子累積夠了能量，也應該會跑出來。顏色（頻率）應該不太重要。','A wave\'s energy depends on its amplitude: bigger ocean waves hit the shore harder. So brighter light should knock electrons out more easily, and even dim light, given time, should let electrons build up enough energy to escape. Color (frequency) shouldn\'t matter much.']]},
 con:{h:['再亮的紅光都打不出電子，很暗的紫外線卻可以','Bright red light can\'t free electrons, but dim ultraviolet can'],
  p:[['1902 年，雷納德仔細量了光電效應：每一種金屬都有一個頻率門檻。低於門檻，不管光多亮、照多久，一個電子都沒有。高於門檻，就算光很暗，電子也是立刻跑出來。','In 1902 Lenard measured the effect carefully: each metal has a frequency threshold. Below it, no electrons come out however bright the light or however long it shines. Above it, even dim light frees electrons instantly.'],
   ['而且跑出來的電子，最快的速度只跟光的頻率有關，跟亮度無關。亮度只決定電子的「數量」。','And the fastest electrons\' speed depends only on frequency, not brightness. Brightness only sets how many electrons come out.']]},
 exps:[{h:['實驗：用不同顏色和亮度的光照金屬','Experiment: shine light of different colors and brightness on a metal'],
  intro:[['選一種金屬，調整光的波長和亮度。黃點是被打出來的電子，飛得越快代表動能越大。','Pick a metal and set the light\'s wavelength and brightness. Yellow dots are freed electrons; faster means more kinetic energy.']],
  preds:[['ph1','預測 A：照在鈉金屬上，哪一種光能打出電子？','Prediction A: shining on sodium, which light frees electrons?'],['ph2','預測 B：已經有電子跑出來時，把光調得更亮，會？','Prediction B: with electrons already coming out, making the light brighter will?']],
  sim:`<div class="ctrl"><span>${b('金屬','Metal')}</span><div class="seg" id="phm"></div></div><div class="fig"><canvas id="phc"></canvas></div><div class="ctrl">${P.sl('phl','波長','Wavelength',200,700,10,550)}${P.sl('phbr','亮度','Brightness',10,100,10,50)}</div><div class="bars" id="phb"></div>`}],
 idea:{h:['光子：每一份光的能量 E = hf','Photons: each packet of light carries E = hf'],
  p:[['想像光是一顆一顆的光子，每一顆的能量由頻率決定。一個電子一次只能吃掉一個光子。光子能量不夠大，吃再多顆也沒用，因為不能累積；夠大，就立刻跑出來，多出來的能量變成動能。','Picture light as individual photons, each with energy set by its frequency. An electron absorbs one photon at a time. If a photon\'s energy is too small, more photons don\'t help, because it can\'t store them up; if it\'s big enough, the electron leaves at once, and the leftover energy becomes kinetic energy.'],
   ['亮度代表每秒有多少顆光子，所以只影響電子的數量。這也解釋了為什麼紫外線會曬傷皮膚、讓相片褪色，可見光卻不會：紫外線的每一顆光子能量大到能打斷分子的化學鍵。','Brightness is how many photons arrive per second, so it only changes the number of electrons. It also explains why ultraviolet causes sunburn and fades photos while visible light doesn\'t: each UV photon has enough energy to break chemical bonds.']],
  key:['E = hf','h = 6.63 × 10⁻³⁴ J·s（普朗克常數）。光既像波（干涉）又像粒子（光電效應），叫做波粒二象性。愛因斯坦因為這篇論文得到 1921 年諾貝爾獎。','h = 6.63 × 10⁻³⁴ J·s (Planck\'s constant). Light behaves like a wave (interference) and like a particle (the photoelectric effect): wave-particle duality. Einstein won the 1921 Nobel Prize for this paper.']},
 adv:[['愛因斯坦的光電方程式','Einstein\'s photoelectric equation',[
   ['光子能量減掉把電子拉出金屬需要的最少能量（功函數 φ），剩下的就是電子的最大動能：','Photon energy minus the minimum energy to pull an electron out (the work function φ) leaves the electron\'s maximum kinetic energy:'],
   '=KE_max = hf − φ',
   ['用電子伏特（eV）和奈米（nm）計算很方便：光子能量 E(eV) ≈ 1240 / λ(nm)。','Electron-volts and nanometers make this convenient: photon energy E(eV) ≈ 1240 / λ(nm).']]],
  ['門檻波長','The threshold wavelength',[
   '=λ_門檻 threshold = 1240 / φ(eV)',
   ['鈉 φ ≈ 2.3 eV → 539 nm（綠光）。比綠光更紅的光，再亮都打不出電子。','Sodium, φ ≈ 2.3 eV → 539 nm (green). Any light redder than that can\'t free electrons, however bright.']]]],
 apply:{h:['用 E = hf 解題','Solve with E = hf'],q:[
  ['n','ph3','1. 波長 400 nm 的紫光，每個光子的能量是幾 eV？（E ≈ 1240/λ）','1. How many eV does each photon of 400 nm violet light carry? (E ≈ 1240/λ)','eV'],
  ['n','ph4','2. 這個光照在鈉（φ = 2.3 eV）上，打出來的電子最大動能是幾 eV？','2. Shining that light on sodium (φ = 2.3 eV), what is the electrons\' maximum kinetic energy in eV?','eV'],
  ['p','ph5','3. 為什麼在大太陽下會被紫外線曬傷，在很亮的紅色燈光下卻不會？','3. Why does ultraviolet sunlight cause sunburn while very bright red lamplight doesn\'t?']]},
 pencil:{h:['4. 拿紙筆：畫出光電效應的能量圖','4. Pencil and paper: draw an energy diagram for the photoelectric effect'],p:['畫一個光子能量的長條，分成「拉出電子需要的 φ」和「剩下的動能」。','Draw a bar for the photon\'s energy, split into "φ to pull the electron out" and "leftover kinetic energy."'],
  ans:`<p>${b('長條的總長是 hf。下面一段是 φ（每種金屬固定），上面一段是 KE_max。如果 hf 比 φ 短，就沒有上面那一段，電子出不來。光變亮只是多畫幾根同樣的長條，每一根的長度不變。','The bar\'s total length is hf. The lower part is φ (fixed for each metal); the upper part is KE_max. If hf is shorter than φ, there\'s no upper part and no electron escapes. Brighter light just means more identical bars, each the same length.')}</p>`},
 next:['光是一份一份的。那原子裡的電子，能量是不是也是一份一份的？原子內部到底長什麼樣子？','Light comes in packets. Could the energy of electrons inside atoms come in packets too? What does an atom\'s inside look like?','1911 年，拉塞福用一張比頭髮還薄的金箔，看到了原子的內部。','In 1911 Rutherford used gold foil thinner than a hair to look inside the atom.'],
 std:['表現預期 HS-PS4-3（評估電磁輻射可以用波動模型或粒子模型描述的論點，並說明哪種模型更能解釋某些現象）、HS-PS4-4（評估不同頻率的電磁輻射被物質吸收時的影響）。科學實踐：SEP 7 以證據進行論證、SEP 4 分析與詮釋數據。跨科概念：因果；能量與物質。','Performance expectations HS-PS4-3 (evaluate claims that electromagnetic radiation can be described by a wave model or a particle model, and that for some situations one model is more useful), HS-PS4-4 (evaluate the effects of different frequencies of electromagnetic radiation absorbed by matter). Practices: SEP 7 Engaging in Argument from Evidence, SEP 4 Analyzing and Interpreting Data. Crosscutting concepts: Cause and Effect; Energy and Matter.']
}),init(){
const {t,tp,css,fit,$}=P;let met='Na',lam=550,I=50,es=[],ph=[],acc=0,seenUV=0,seenRed=0,lastI=50;
const mets={Na:['鈉','Sodium',2.3],Zn:['鋅','Zinc',4.3],Cs:['銫','Cesium',2.1]};
const E=()=>1240/lam,phi=()=>mets[met][2],KE=()=>Math.max(0,E()-phi());
const col=l=>l<380?'#9b59ff':`hsl(${l<440?270-(l-380):l<490?210-(l-440)*.6:l<580?180-(l-490)*1.5:Math.max(0,45-(l-580)*.375)},90%,55%)`;
const bars=()=>{$('phb').innerHTML=[[t('光子能量 hf','Photon energy hf'),E(),'var(--cu)'],[t('功函數 φ','Work function φ'),phi(),'var(--mute)'],[t('電子最大動能','Max electron KE'),KE(),'var(--ok)']].map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${r[1]/6.5*100}%;background:${r[2]}"></div></div><span class="v">${r[1].toFixed(2)} eV</span></div>`).join('')+`<p class="verdict ${KE()>0?'ok':'no'}">${KE()>0?t('有電子跑出來','Electrons are emitted'):t('沒有電子，不管多亮','No electrons, however bright')}</p>`};
const draw=()=>{const[x,W,H]=fit($('phc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const px=W*.62,ink=css('--ink');x.fillStyle='#8a96a3';x.fillRect(px,20,16,H-40);x.fillStyle=ink;x.font='600 12px "Noto Sans TC",Archivo';x.textAlign='center';x.fillText(tp(mets[met][0],mets[met][1]),px+8,14);
 x.fillStyle=col(lam);ph.forEach(p=>{x.beginPath();x.arc(p.x*W,p.y,3,0,7);x.fill()});
 x.fillStyle='#e8b923';es.forEach(e=>{x.beginPath();x.arc(e.x,e.y,4,0,7);x.fill()})};
P.seg('phm',Object.entries(mets).map(([k,v])=>[k,`${v[0]}（φ = ${v[2]} eV）`,`${v[1]} (φ = ${v[2]} eV)`]),()=>met,v=>{met=v;bars()});
P.slider('phl',v=>v+' nm',v=>{lam=v;bars()});P.slider('phbr',v=>v+'%',v=>{if(KE()>0&&Math.abs(v-lastI)>=30)P.reveal('ph2');I=v;bars()});$('phbr').addEventListener('change',()=>{lastI=I});
P.run(dt=>{if(!$('phc').isConnected)return false;if(document.querySelector('main.lesson[data-id=photon]')?.hidden)return;const W=$('phc').clientWidth,H=$('phc').clientHeight,px=W*.62;
 acc+=dt*I*.6;while(acc>1){acc--;ph.push({x:0,y:20+Math.random()*(H-40)})}
 ph.forEach(p=>p.x+=dt*.5);ph=ph.filter(p=>{if(p.x*W>=px){if(KE()>0&&Math.random()<.5){const s=60+Math.sqrt(KE())*110,a=(Math.random()-.5)*1.6;es.push({x:px+16,y:p.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s})}return false}return true});
 es.forEach(e=>{e.x+=e.vx*dt;e.y+=e.vy*dt});es=es.filter(e=>e.x<W&&e.y>0&&e.y<H);
 if(met==='Na'){if(lam<=320&&KE()>0)seenUV=1;if(lam>=620&&I>=80)seenRed=1;if(seenUV&&seenRed)P.reveal('ph1')}draw()});
P.pred('ph1',{c:1,o:[['非常亮的紅光（650 nm）','Very bright red light (650 nm)'],['很暗的紫外線（250 nm）','Dim ultraviolet (250 nm)'],['兩種都可以','Both']],f:[['選鈉，先試亮度 100% 的 650 nm，再試很暗的 250 nm。','Choose sodium, try 650 nm at 100%, then dim 250 nm.'],['選鈉，先試亮度 100% 的 650 nm，再試很暗的 250 nm 驗證。','Choose sodium, try 650 nm at 100%, then dim 250 nm to check.'],['選鈉，兩種都試試看。','Choose sodium and try both.']]});
P.pred('ph2',{c:2,o:[['電子跑得更快','Electrons fly out faster'],['電子變少','Fewer electrons'],['電子變多，但最快的速度不變','More electrons, but the top speed doesn\'t change']],f:[['在有電子的情況下，把亮度從 20% 拉到 100%，看電子的數量和速度。','With electrons flowing, raise brightness from 20% to 100% and watch the number and speed.'],['在有電子的情況下，把亮度拉大看看。','With electrons flowing, turn up the brightness and see.'],['在有電子的情況下，把亮度拉大驗證。','With electrons flowing, turn up the brightness to check.']]});
P.num('ph3',3.1,['對。1240 ÷ 400 = 3.1 eV。','Right. 1240 ÷ 400 = 3.1 eV.'],['提示：E = 1240 ÷ λ(nm)。','Hint: E = 1240 ÷ λ(nm).'],.03);
P.num('ph4',.8,['對。KE = 3.1 − 2.3 = 0.8 eV。','Right. KE = 3.1 − 2.3 = 0.8 eV.'],['提示：KE_max = hf − φ。','Hint: KE_max = hf − φ.'],.03);
P.pred('ph5',{now:1,c:1,o:[['紫外線比較熱','Ultraviolet is hotter'],['每一顆紫外線光子的能量夠大，能打斷皮膚細胞的分子；紅光的光子再多都不夠','Each UV photon has enough energy to break molecules in skin cells; red photons never do, however many'],['紅光被皮膚反射掉了','Red light bounces off the skin']],f:[['溫度不是重點，重點是每一顆光子的能量。','Temperature isn\'t the point; each photon\'s energy is.'],['對。跟光電效應一樣：重要的是單一光子的能量，不是光子的總數。','Right. Just like the photoelectric effect: what matters is each photon\'s energy, not the total number.'],['紅光也會被吸收（所以會覺得溫暖），但每顆光子能量太小。','Red light is absorbed too (that\'s the warmth), but each photon carries too little energy.']]});
bars();P.watch($('phc'),draw);P.onLang(bars);
}});}
