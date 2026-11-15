{const b=P.b;
P.reg('black',{html:P.build('black',{
 title:['布萊克：溫度和熱不是同一件事','Black: temperature and heat are not the same thing'],
 lede:['溫度計在 1700 年代已經很普遍，大家以為溫度計量的就是「熱有多少」。蘇格蘭化學家布萊克用冰和水做了幾個簡單的實驗，發現這兩件事必須分開。','By the 1700s thermometers were common, and people assumed they measured how much heat something had. The Scottish chemist Joseph Black ran a few simple experiments with ice and water and showed the two must be kept apart.'],
 old:{h:['溫度計量的就是熱','A thermometer measures heat'],p:[['溫度越高，熱就越多。兩樣東西混在一起，最後的溫度應該剛好在中間。冰到了 0°C，再加一點點熱就會全部融化。','Higher temperature means more heat. Mix two things and the final temperature should land halfway between. Ice at 0°C should melt completely with just a little more heat.']]},
 con:{h:['冰在融化時，溫度一動也不動','While ice melts, its temperature doesn\'t budge'],
  p:[['布萊克把一塊 0°C 的冰和一杯同樣重的水放在同一個溫暖的房間。水的溫度很快就上升，冰卻花了很長的時間融化，而且融化的過程中一直是 0°C。熱明明一直流進冰裡，溫度卻沒變。','Black set 0°C ice and an equal mass of water in the same warm room. The water warmed quickly, but the ice took a long time to melt and stayed at 0°C throughout. Heat kept flowing into the ice, yet its temperature didn\'t change.'],
   ['他也發現：把等重的熱水和冷的金屬混在一起，最後的溫度不在中間，而是很靠近水原來的溫度。不同的物質，升高 1 度需要的熱不一樣。','He also found that mixing hot water with an equal mass of cold metal didn\'t give a halfway temperature; it ended up close to the water\'s original temperature. Different substances need different amounts of heat to warm by one degree.']]},
 exps:[{h:['實驗一：用固定的火力加熱一塊冰','Experiment 1: heat a block of ice at a steady rate'],
  intro:[['1 kg 的冰從 −20°C 開始，每秒加入一樣多的熱。圖的橫軸是累積加入的熱，縱軸是溫度。','1 kg of ice starts at −20°C and receives the same amount of heat every second. The x-axis is total heat added; the y-axis is temperature.']],
  preds:[['bk1','預測 A：冰在融化的過程中，溫度會？','Prediction A: while the ice is melting, its temperature will?']],
  sim:`<div class="fig"><canvas id="bkc"></canvas></div><div class="ctrl"><button class="pri" id="bkgo"></button>${P.sl('bkp','火力','Heater power',20,100,10,60)}<span class="read" id="bkr"></span></div>`},
 {h:['實驗二：熱水和冷的東西混在一起','Experiment 2: mix hot water with something cold'],
  intro:[['1 kg、80°C 的水，和 1 kg、20°C 的另一種東西放在一起，等到兩者溫度一樣。','1 kg of water at 80°C is put in contact with 1 kg of something else at 20°C until both reach the same temperature.']],
  preds:[['bk2','預測 B：跟 1 kg 的鐵混合，最後溫度大約是？','Prediction B: mixed with 1 kg of iron, the final temperature is about?']],
  sim:`<div class="ctrl"><div class="seg" id="bkm"></div></div><div class="bars" id="bkb"></div>`}],
 idea:{h:['熱是能量的多少，溫度是冷熱的程度','Heat is an amount of energy; temperature is how hot'],
  p:[['熱（Q）是流進或流出的能量；溫度（T）是冷熱的程度。同樣的熱，加在比熱大的東西上，溫度只升一點點。','Heat (Q) is energy flowing in or out; temperature (T) measures how hot something is. The same heat added to a substance with a high specific heat raises its temperature only a little.'],
   ['冰在融化時吸收的熱，沒有讓分子變快，而是用來拆開冰的結構。布萊克叫它「潛熱」（藏起來的熱）。','The heat absorbed while ice melts doesn\'t speed up the molecules; it breaks apart the ice\'s structure. Black called it latent (hidden) heat.']],
  key:['Q = mcΔT','升溫需要的熱 = 質量 × 比熱 × 溫度變化。水的比熱 c = 4,186 J/(kg·°C)，鐵只有 450。融化或沸騰時：Q = mL。','Heat to warm = mass × specific heat × temperature change. Water: c = 4,186 J/(kg·°C); iron only 450. When melting or boiling: Q = mL.']},
 adv:[['混合後的溫度','The temperature after mixing',[
   ['熱水放出的熱 = 冷的東西吸收的熱：','Heat lost by the hot water = heat gained by the cold object:'],
   '=m₁c₁(T₁ − T) = m₂c₂(T − T₂)　⇒　T = (m₁c₁T₁ + m₂c₂T₂) / (m₁c₁ + m₂c₂)',
   '=水 + 鐵 water + iron：T = (4186×80 + 450×20) / (4186 + 450) ≈ 74.2°C']],
  ['整條加熱曲線要多少熱','Total heat for the whole heating curve',[
   '=冰升溫 ice warms：1 × 2,100 × 20 = 42 kJ　融化 melt：1 × 334 kJ = 334 kJ',
   '=水升溫 water warms：1 × 4,186 × 100 ≈ 419 kJ　沸騰 boil：1 × 2,260 kJ = 2,260 kJ',
   ['把水全部變成蒸氣，比把水從 0°C 加熱到 100°C 多花 5 倍以上的熱。','Turning all the water to steam takes over five times the heat of warming it from 0°C to 100°C.']]]],
 apply:{h:['用 Q = mcΔT 解題','Solve with Q = mcΔT'],q:[
  ['n','bk3','1. 把 2 kg 的水從 20°C 加熱到 70°C，需要多少 kJ？','1. How many kJ does it take to heat 2 kg of water from 20°C to 70°C?','kJ'],
  ['n','bk4','2. 融化 0.5 kg、0°C 的冰需要多少 kJ？（L = 334 kJ/kg）','2. How many kJ to melt 0.5 kg of ice at 0°C? (L = 334 kJ/kg)','kJ'],
  ['p','bk5','3. 為什麼海邊城市（例如舊金山）的夏天和冬天溫差比內陸小？','3. Why do coastal cities (like San Francisco) have smaller summer-winter swings than inland ones?']]},
 pencil:{h:['4. 拿紙筆：畫出冰從 −20°C 加熱到 120°C 蒸氣的溫度曲線','4. Pencil and paper: sketch the temperature curve as ice at −20°C is heated to steam at 120°C'],p:['標出兩段平的部分，並寫出那時候發生什麼事。','Mark the two flat parts and write what\'s happening during each.'],
  ans:`<p>${b('曲線：先斜升到 0°C → 一段平的（融化）→ 斜升到 100°C → 一段很長的平線（沸騰，比融化長約 7 倍）→ 再斜升。平的部分溫度不變，熱用來改變狀態。','The curve: slope up to 0°C → flat (melting) → slope up to 100°C → a long flat stretch (boiling, about seven times longer than melting) → slope up again. On the flat parts the temperature doesn\'t change; the heat changes the state.')}</p>`},
 next:['熱可以讓蒸汽推動機器。一台蒸汽機最多能把多少的熱變成有用的功？','Heat can make steam drive machines. At most, how much of the heat can a steam engine turn into useful work?','一位法國年輕工程師，用一個跟水車有關的比喻找到了答案。','A young French engineer found the answer using a comparison with a water wheel.'],
 std:['表現預期 HS-PS3-4（規劃並進行調查：溫度不同的兩個物體在封閉系統中接觸，熱能會轉移到兩者溫度一致）、HS-PS3-1。科學實踐：SEP 3 規劃與執行調查、SEP 5 數學與計算思維。跨科概念：能量與物質。','Performance expectations HS-PS3-4 (plan and conduct an investigation showing that combining two components at different temperatures in a closed system results in a more uniform energy distribution), HS-PS3-1. Practices: SEP 3 Planning and Carrying Out Investigations, SEP 5 Mathematical and Computational Thinking. Crosscutting concepts: Energy and Matter.']
}),init(){
const {t,tp,css,fit,$}=P;
const ci=2100,cw=4186,cs=2010,Lf=334e3,Lv=2260e3,Qs=[20*ci,Lf,100*cw,Lv,20*cs],QT=Qs.reduce((a,b)=>a+b);
let pw=60,Q=0,stop=()=>{},mat='iron';
const T=q=>{let s=q;if(s<Qs[0])return -20+s/ci;s-=Qs[0];if(s<Qs[1])return 0;s-=Qs[1];if(s<Qs[2])return s/cw;s-=Qs[2];if(s<Qs[3])return 100;s-=Qs[3];return 100+s/cs};
const ph=q=>{const t_=T(q);return t_<0?tp('冰在變暖','Ice warming'):t_===0?tp('融化中（冰水混合）','Melting (ice + water)'):t_<100?tp('水在變熱','Water warming'):t_===100&&q<QT-Qs[4]?tp('沸騰中','Boiling'):tp('蒸氣變熱','Steam warming')};
const draw=()=>{const[x,W,H]=fit($('bkc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const L=50,R=W-14,Tp=14,B=H-34,X=q=>L+(R-L)*q/QT,Y=v=>B-(B-Tp)*(v+20)/140,ink=css('--ink'),mute=css('--mute');
 x.strokeStyle=mute;x.lineWidth=1;[-20,0,50,100,120].forEach(v=>{x.globalAlpha=.3;x.beginPath();x.moveTo(L,Y(v));x.lineTo(R,Y(v));x.stroke();x.globalAlpha=1;x.fillStyle=mute;x.font='11px Archivo';x.textAlign='right';x.fillText(v+'°C',L-6,Y(v)+4)});
 x.strokeStyle=css('--cu');x.lineWidth=3;x.beginPath();for(let q=0;q<=Q;q+=QT/600){const p=[X(q),Y(T(q))];q?x.lineTo(...p):x.moveTo(...p)}x.stroke();
 x.fillStyle=ink;x.textAlign='center';x.font='600 12px "Noto Sans TC",Archivo';x.fillText(tp('加入的熱 →','Heat added →'),(L+R)/2,H-8);
 $('bkr').textContent=`${(Q/1000).toFixed(0)} kJ · ${T(Q).toFixed(1)}°C · ${ph(Q)}`};
P.gate('bkgo',[],()=>t('開始加熱','Start heating'));
$('bkgo').onclick=()=>{stop();Q=0;stop=P.run(dt=>{Q=Math.min(QT,Q+pw*1000*dt*4);if(Q>Qs[0]+Qs[1]*.5)P.reveal('bk1');draw();return Q<QT})};
P.slider('bkp',v=>v+'%',v=>pw=v);
const mats={water:[tp('水','Water'),4186],iron:['鐵',450],alu:['鋁',900],copper:['銅',385]};
const mix=()=>{const c=mats[mat][1],Tf=(cw*80+c*20)/(cw+c);
 $('bkb').innerHTML=[[t('熱水（開始 80°C）','Hot water (starts 80°C)'),80,'var(--bad)'],[t('冷的東西（開始 20°C）','Cold object (starts 20°C)'),20,'var(--mo)'],[t('最後的溫度','Final temperature'),Tf,'var(--ink)']].map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${r[1]}%;background:${r[2]}"></div></div><span class="v">${r[1].toFixed(1)}°C</span></div>`).join('')+`<p class="std">${t(`比熱：水 4,186，這種東西 ${c} J/(kg·°C)`,`Specific heat: water 4,186; this material ${c} J/(kg·°C)`)}</p>`;
 if(mat==='iron')P.reveal('bk2')};
P.seg('bkm',[['water','水','Water'],['iron','鐵','Iron'],['alu','鋁','Aluminum'],['copper','銅','Copper']],()=>mat,v=>{mat=v;mix()});
P.pred('bk1',{c:1,o:[['一直上升','Keeps rising'],['停在 0°C，直到全部融化','Stays at 0°C until it\'s all melted'],['先下降再上升','Drops, then rises']],f:[['開始加熱，看曲線。','Start heating and watch the curve.'],['開始加熱驗證。','Start heating to check.'],['開始加熱看看。','Start heating and see.']]});
P.pred('bk2',{c:2,o:[['50°C，剛好在中間','50°C, right in the middle'],['大約 26°C，靠近鐵','About 26°C, near the iron'],['大約 74°C，靠近水','About 74°C, near the water']],f:[['選「鐵」看看。','Choose Iron and see.'],['選「鐵」看看。','Choose Iron and see.'],['選「鐵」驗證。','Choose Iron to check.']]});
P.num('bk3',418.6,['對。Q = 2 × 4186 × 50 = 418,600 J ≈ 419 kJ。','Right. Q = 2 × 4186 × 50 = 418,600 J ≈ 419 kJ.'],['提示：Q = m × c × ΔT，ΔT = 50。','Hint: Q = m × c × ΔT, with ΔT = 50.'],2);
P.num('bk4',167,['對。Q = mL = 0.5 × 334 = 167 kJ。','Right. Q = mL = 0.5 × 334 = 167 kJ.'],['提示：融化時溫度不變，用 Q = mL。','Hint: temperature stays fixed while melting, so use Q = mL.'],1);
P.pred('bk5',{now:1,c:0,o:[['海水比熱很大，吸收或放出很多熱，溫度都變化不大','Seawater\'s high specific heat lets it absorb or release lots of heat with little temperature change'],['海邊的風比較多','There\'s more wind at the coast'],['海邊的陽光比較弱','Sunlight is weaker at the coast']],f:[['對。海洋像一個巨大的熱量緩衝器，夏天吸熱，冬天放熱。','Right. The ocean acts as a huge heat buffer, absorbing heat in summer and releasing it in winter.'],['風是一部分，但真正的原因是水的比熱。','Wind plays a part, but the real cause is water\'s specific heat.'],['海邊陽光並沒有比較弱。','Coastal sunlight isn\'t weaker.']]});
mix();P.watch($('bkc'),draw);P.onLang(mix);
}});}
