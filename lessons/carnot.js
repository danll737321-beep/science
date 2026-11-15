{const b=P.b;
P.reg('carnot',{html:P.build('carnot',{
 title:['卡諾：熱機永遠到不了 100%','Carnot: no heat engine can reach 100%'],
 lede:['1824 年，蒸汽機已經在推動火車和工廠，但效率很低：燒掉的煤，只有大約 5% 變成有用的功。28 歲的法國工程師卡諾想知道：效率的上限到底在哪裡？','By 1824 steam engines drove trains and factories, but poorly: only about 5% of the coal\'s energy became useful work. The 28-year-old French engineer Sadi Carnot wanted to know the upper limit.'],
 old:{h:['只要機器做得夠好，就能接近 100%','A good enough machine could approach 100%'],p:[['工程師一直在改良活塞、閥門、減少漏氣。大家認為效率低只是技術問題：摩擦少一點、漏氣少一點，效率就會一直往上，最後接近 100%。','Engineers kept improving pistons and valves and cutting leaks. Low efficiency was seen as a technical problem: less friction, fewer leaks, and efficiency would keep climbing toward 100%.']]},
 con:{h:['水車要靠「落差」才能轉','A water wheel turns only because water falls'],
  p:[['卡諾用水車做比喻：水從高處流到低處，才能推動水車。水車沒有用掉水，只是利用了高度差。落差越大，能做的功越多；高處和低處一樣高，水車就完全不轉。','Carnot compared it to a water wheel: water must flow from high to low to turn the wheel. The wheel doesn\'t use up the water, only the drop in height. The bigger the drop, the more work; if top and bottom are level, the wheel doesn\'t turn at all.'],
   ['他推論：熱機也是一樣。熱從高溫處（鍋爐）流到低溫處（冷卻水）時，才能推動機器。一定要有一部分熱流到低溫處，不可能全部變成功。效率的上限只跟兩邊的溫度有關，跟用蒸汽還是空氣、機器怎麼設計都無關。','He reasoned that a heat engine is the same: it does work only as heat flows from hot (the boiler) to cold (the cooling water). Some heat must always reach the cold side; it can\'t all become work. The efficiency limit depends only on the two temperatures, not on whether you use steam or air or how the machine is built.']]},
 exps:[{h:['實驗：調整高溫和低溫','Experiment: set the hot and cold temperatures'],
  intro:[['每一輪從高溫處拿 100 J 的熱。最好的引擎（卡諾引擎）能把多少變成功？溫度要用絕對溫標 K（0°C = 273 K）。','Each cycle takes 100 J of heat from the hot side. How much can the best possible engine (a Carnot engine) turn into work? Temperatures must be on the absolute Kelvin scale (0°C = 273 K).']],
  preds:[['ca1','預測 A：如果高溫和低溫一樣，引擎能做多少功？','Prediction A: if the hot and cold sides are at the same temperature, how much work can the engine do?'],['ca2','預測 B：汽車引擎燃燒的溫度大約 800 K，外面空氣 300 K。效率上限大約是？','Prediction B: a car engine burns at about 800 K; the outside air is 300 K. The maximum efficiency is about?']],
  sim:`<div class="fig"><canvas id="cac"></canvas></div><div class="ctrl">${P.sl('cah','高溫 T_h','Hot T_h',300,1200,25,600)}${P.sl('cacl','低溫 T_c','Cold T_c',250,600,25,300)}</div><div class="bars" id="cab"></div>`}],
 idea:{h:['卡諾效率：上限只看兩邊的溫度','Carnot efficiency: the limit depends only on the two temperatures'],
  p:[['溫差越大，效率上限越高；兩邊一樣溫度，效率是 0。就算完全沒有摩擦、沒有漏氣，也一定有一部分熱要排到低溫處。','The bigger the temperature difference, the higher the limit; equal temperatures give zero. Even with no friction and no leaks, some heat must go to the cold side.'],
   ['這也是為什麼發電廠要蓋在河邊或海邊（冷卻水讓 T_c 低），也是為什麼汽車引擎的效率很難超過 40%。','That\'s why power plants are built by rivers or the sea (cooling water keeps T_c low), and why car engines rarely exceed about 40%.']],
  key:['η = 1 − T_c / T_h','效率上限 = 1 − 低溫 ÷ 高溫（用 K）。真實的引擎因為摩擦、漏熱，效率一定比這個低。','Maximum efficiency = 1 − cold ÷ hot (in K). Real engines, with friction and heat leaks, always do worse.'],
  after:[['有趣的是，卡諾當時還相信熱是一種流體（熱質），但他的推理結論是對的。25 年後，克勞修斯和克耳文用能量守恆重新推導，得到同一條式子。','Interestingly, Carnot still believed heat was a fluid (caloric), yet his conclusion was right. Twenty-five years later Clausius and Kelvin rederived it using energy conservation and got the same formula.']]},
 adv:[['為什麼一定要用絕對溫度','Why it must be absolute temperature',[
   ['如果用攝氏，0°C 的冷卻水會讓 T_c/T_h = 0，算出 100%，這顯然不對。克耳文在 1848 年根據卡諾的理論定義了絕對溫標：0 K 是溫度可能的最低點。','In Celsius, 0°C cooling water would make T_c/T_h = 0 and give 100%, which is clearly wrong. In 1848 Kelvin used Carnot\'s theory to define the absolute scale: 0 K is the lowest possible temperature.'],
   '=T(K) = T(°C) + 273.15']],
  ['冰箱和熱泵：反過來的熱機','Refrigerators and heat pumps: engines in reverse',[
   ['花功 W 把熱從低溫搬到高溫。最好的冰箱，每花 1 J 的功能搬走的熱是：','Spend work W to move heat from cold to hot. The best refrigerator moves this much heat per joule of work:'],
   '=COP = T_c / (T_h − T_c)',
   ['冰箱內 270 K、廚房 300 K：COP = 270/30 = 9。溫差越小，搬熱越省力。','Inside 270 K, kitchen 300 K: COP = 270/30 = 9. The smaller the difference, the cheaper it is to move heat.']]]],
 apply:{h:['用卡諾效率解題','Solve with Carnot efficiency'],q:[
  ['n','ca3','1. 高溫 600 K、低溫 300 K，效率上限是多少 %？','1. Hot side 600 K, cold side 300 K. What is the maximum efficiency in %?','%'],
  ['n','ca4','2. 發電廠的蒸汽 800 K，河水 300 K。效率上限是多少 %？','2. A power plant\'s steam is at 800 K and the river at 300 K. What is the maximum efficiency in %?','%'],
  ['p','ca5','3. 想提高發電廠的效率上限，下面哪一個方法有效？','3. Which of these raises a power plant\'s maximum efficiency?']]},
 pencil:{h:['4. 拿紙筆：畫出一台熱機的能量流向圖','4. Pencil and paper: draw an energy-flow diagram for a heat engine'],p:['標出 Q_h、W、Q_c，並寫出它們的關係。','Label Q_h, W, and Q_c, and write how they\'re related.'],
  ans:`<p>${b('上面一個方塊是高溫 T_h，下面一個方塊是低溫 T_c，中間一個圓是引擎。Q_h 從上面流進引擎，W 從旁邊出來，Q_c 流到下面。能量守恆：Q_h = W + Q_c，而 Q_c 永遠不能是 0。','A box at the top for T_h, a box at the bottom for T_c, and a circle in between for the engine. Q_h flows down into the engine, W comes out the side, Q_c flows down to the cold box. Energy conservation: Q_h = W + Q_c, and Q_c can never be zero.')}</p>`},
 next:['熱一定要從高溫流到低溫，反過來就不行。可是能量守恆並沒有禁止反過來。到底是什麼在決定方向？','Heat must flow from hot to cold, never the reverse. But energy conservation doesn\'t forbid the reverse. So what sets the direction?','克勞修斯為這個方向取了一個名字：熵。','Clausius gave that direction a name: entropy.'],
 std:['表現預期 HS-PS3-4（熱能在系統中的轉移與分布）、HS-PS3-3（設計並改良把一種能量轉換成另一種的裝置，並考慮限制條件）。科學實踐：SEP 5 數學與計算思維、SEP 6 建構解釋。跨科概念：能量與物質；系統與系統模型。','Performance expectations HS-PS3-4 (transfer and distribution of thermal energy), HS-PS3-3 (design and refine a device that converts energy, considering constraints). Practices: SEP 5 Mathematical and Computational Thinking, SEP 6 Constructing Explanations. Crosscutting concepts: Energy and Matter; Systems and System Models.']
}),init(){
const {t,tp,css,fit,$}=P;let Th=600,Tc=300,ph=0;
const eff=()=>Math.max(0,1-Tc/Th);
const bars=()=>{const e=eff();$('cab').innerHTML=[[t('從高溫拿的熱 Q_h','Heat in Q_h'),100,'var(--bad)'],[t('變成功 W','Work out W'),e*100,'var(--ok)'],[t('排到低溫 Q_c','Heat out Q_c'),100-e*100,'var(--mo)']].map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${r[1]}%;background:${r[2]}"></div></div><span class="v">${r[1].toFixed(1)} J</span></div>`).join('')+`<p class="verdict">${t(`效率上限 η = 1 − ${Tc}/${Th} = ${(e*100).toFixed(1)}%`,`Maximum efficiency η = 1 − ${Tc}/${Th} = ${(e*100).toFixed(1)}%`)}</p>`;
 if(Th<=Tc)P.reveal('ca1');if(Th>=775&&Th<=825&&Tc===300)P.reveal('ca2')};
const draw=()=>{const[x,W,H]=fit($('cac'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const cx=W/2,e=eff(),ink=css('--ink');
 x.fillStyle='#d1495b';x.fillRect(cx-110,10,220,44);x.fillStyle='#2160d8';x.fillRect(cx-110,H-54,220,44);x.fillStyle='#fff';x.font='700 14px Archivo';x.textAlign='center';
 x.fillText(tp(`高溫 ${Th} K`,`Hot ${Th} K`),cx,38);x.fillText(tp(`低溫 ${Tc} K`,`Cold ${Tc} K`),cx,H-26);
 x.fillStyle=css('--panel');x.strokeStyle=ink;x.lineWidth=2.5;x.beginPath();x.arc(cx,H/2,34,0,7);x.fill();x.stroke();
 x.save();x.translate(cx,H/2);x.rotate(ph*e*3);x.strokeStyle=ink;x.beginPath();for(let k=0;k<4;k++){x.moveTo(0,0);x.lineTo(Math.cos(k*Math.PI/2)*26,Math.sin(k*Math.PI/2)*26)}x.stroke();x.restore();
 const w=v=>2+v*.22;x.strokeStyle='#d1495b';x.lineWidth=w(100);x.beginPath();x.moveTo(cx,56);x.lineTo(cx,H/2-36);x.stroke();
 if(e<1){x.strokeStyle='#2160d8';x.lineWidth=w(100-e*100);x.beginPath();x.moveTo(cx,H/2+36);x.lineTo(cx,H-56);x.stroke()}
 if(e>0){x.strokeStyle='#1f7a5a';x.lineWidth=w(e*100);x.beginPath();x.moveTo(cx+36,H/2);x.lineTo(cx+120,H/2);x.stroke();x.fillStyle=ink;x.textAlign='left';x.font='600 13px Archivo';x.fillText(`W = ${(e*100).toFixed(0)} J`,cx+128,H/2+5)}};
P.slider('cah',v=>v+' K',v=>{Th=v;bars();draw()});P.slider('cacl',v=>v+' K',v=>{Tc=v;bars();draw()});
P.run(dt=>{if(!$('cac').isConnected)return false;ph+=dt;if(document.querySelector('main.lesson[data-id=carnot]')?.hidden)return;draw()});
P.pred('ca1',{c:0,o:[['0，完全不能做功','Zero work'],['一點點','A little'],['跟高溫一樣多','As much as with a big difference']],f:[['把 T_h 拉到跟 T_c 一樣驗證。','Drag T_h down to T_c to check.'],['把 T_h 拉到跟 T_c 一樣看看。','Drag T_h down to T_c and see.'],['把 T_h 拉到跟 T_c 一樣看看。','Drag T_h down to T_c and see.']]});
P.pred('ca2',{c:1,o:[['接近 100%','Close to 100%'],['大約 63%','About 63%'],['大約 27%','About 27%']],f:[['把 T_h 設 800 K、T_c 設 300 K 看看。','Set T_h = 800 K and T_c = 300 K and see.'],['把 T_h 設 800 K、T_c 設 300 K 驗證。','Set T_h = 800 K and T_c = 300 K to check.'],['這比較接近真實汽車的效率。上限是多少？設 800 K、300 K 看看。','That\'s closer to what real cars achieve. What\'s the limit? Set 800 K and 300 K.']]});
P.num('ca3',50,['對。1 − 300/600 = 0.5 = 50%。','Right. 1 − 300/600 = 0.5 = 50%.'],['提示：η = 1 − T_c/T_h。','Hint: η = 1 − T_c/T_h.'],.5);
P.num('ca4',62.5,['對。1 − 300/800 = 0.625 = 62.5%。真實的火力發電廠大約 33–45%。','Right. 1 − 300/800 = 0.625 = 62.5%. Real fossil-fuel plants manage about 33–45%.'],['提示：η = 1 − 300/800。','Hint: η = 1 − 300/800.'],.5);
P.pred('ca5',{now:1,c:1,o:[['把發電機的線圈繞多一點','Wind more turns on the generator'],['提高蒸汽溫度，或讓冷卻水更冷','Raise the steam temperature or make the cooling water colder'],['把蒸汽換成空氣','Use air instead of steam']],f:[['這跟熱機的上限無關。上限只跟哪兩個數字有關？','That doesn\'t affect the heat-engine limit. Which two numbers set the limit?'],['對。η = 1 − T_c/T_h，T_h 越高或 T_c 越低，上限越高。','Right. η = 1 − T_c/T_h, so higher T_h or lower T_c raises the limit.'],['卡諾證明：用什麼工作物質都一樣。','Carnot proved the working substance doesn\'t matter.']]});
bars();P.watch($('cac'),draw);P.onLang(bars);
}});}
