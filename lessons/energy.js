{const b=P.b;
P.reg('energy',{html:`
<section class="band"><div class="wrap hero">
 <div>
  <span class="chip">${b('節點 7 · 1840 年代','Node 7 · 1840s')}</span>
  <h1>${b('能量守恆：運動不會消失，只會換形式','Conservation of Energy: motion doesn\'t vanish, it changes form')}</h1>
  <p class="lede" style="margin-top:14px">${b('伽利略的球總是爬回出發的高度，好像有什麼東西被保存下來。但現實中東西會停下來。這一課要找出：停下來的運動跑去哪裡了。','Galileo\'s ball always climbed back to its starting height, as if something were being saved. Yet real things stop. In this lesson you track down where the motion goes when they stop.')}</p>
 </div>
 </div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('舊觀念','The old idea')}</span>
 <h2>${b('熱是一種看不見的流體','Heat is an invisible fluid')}</h2>
 <div class="two">
  <div class="card"><h3>${b('熱質說','The caloric theory')}</h3><p style="margin:0">${b('熱是一種叫「熱質」的流體，會從熱的地方流到冷的地方，不能被創造也不能被消滅。物體變熱，是因為有熱質流進去。','Heat is a fluid called caloric. It flows from hot to cold and can be neither created nor destroyed. Things get hot because caloric flows into them.')}</p></div>
  <div class="card"><h3>${b('運動會被摩擦消滅','Friction destroys motion')}</h3><p style="margin:0">${b('東西因摩擦停下來，運動就沒了。熱和運動是兩件無關的事。','When friction stops something, its motion is simply gone. Heat and motion are unrelated.')}</p></div>
 </div>
</div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('對不上的地方','The contradiction')}</span>
 <h2>${b('摩擦可以生出用不完的熱','Friction makes endless heat')}</h2>
 <div class="two">
  <div><h3>${b('倫福德伯爵，1798 年','Count Rumford, 1798')}</h3><p>${b('他在慕尼黑監督鑽砲管。鑽頭跟金屬摩擦，泡在水裡的砲管把水煮滾了，現場沒有火。只要馬一直轉動鑽頭，熱就一直出來。如果熱是砲管裡儲存的流體，總會有用完的時候。','He supervised cannon boring in Munich. The drill rubbing the metal boiled the water around the barrel, with no fire present. As long as horses kept turning the drill, heat kept coming. If heat were a fluid stored in the metal, it should have run out.')}</p></div>
  <div><h3>${b('焦耳，1840 年代','James Joule, 1840s')}</h3><p>${b('他讓重物落下，帶動水裡的槳葉攪水，再量水溫上升多少。每次重物下降做的功一樣，水升的溫度就一樣。運動和熱之間有固定的換算比例：大約 4.2 焦耳換 1 卡。','He let falling weights turn a paddle wheel in water and measured how much the water warmed. The same drop of the weights always gave the same temperature rise. Motion and heat convert at a fixed rate: about 4.2 joules per calorie.')}</p></div>
 </div>
 <p>${b('再加上伽利略的雙斜坡：沒有摩擦時球一定回到原來的高度。好像有一個總量，在「高度」和「速度」之間來回交換。','Add Galileo\'s double ramp: without friction the ball always returns to its height. It looks like a fixed total trading back and forth between height and speed.')}</p>
 <div class="two" style="margin-top:8px">
  <div><h3>${b('預測 A：沒有摩擦，雲霄飛車從 2.5 m 高放開，會爬到另一邊多高？','Prediction A: no friction, a coaster car released from 2.5 m. How high does it climb on the other side?')}</h3><div class="opts" id="pe1"></div><div id="fe1"></div></div>
  <div><h3>${b('預測 B：有摩擦，車子最後停在底部。高度能 + 動能 + 熱，總和會？','Prediction B: with friction, the car ends up stopped at the bottom. Height energy + motion energy + heat: the total does what?')}</h3><div class="opts" id="pe2"></div><div id="fe2"></div></div>
 </div>
</div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('實驗','Test it')}</span>
 <h2>${b('實驗：雲霄飛車的能量帳本','Experiment: a roller coaster\'s energy ledger')}</h2>
 <p>${b('車子 100 kg。高度能 = mgh，動能 = ½mv²，摩擦把一部分變成熱。','The car is 100 kg. Height (potential) energy = mgh, motion (kinetic) energy = ½mv², and friction turns some into heat.')}</p>
 <div class="fig mid"><canvas id="ec"></canvas></div>
 <div class="ctrl"><button class="pri" id="ego" disabled></button>
  <label>${b('出發高度','Start height')} <input type="range" id="eh" min="0.5" max="3" step="0.1" value="2.5"> <span class="read" id="ehv">2.5 m</span></label>
  <label>${b('摩擦','Friction')} <input type="range" id="emu" min="0" max="0.2" step="0.01" value="0"> <span class="read" id="emuv">0</span></label></div>
 <div class="bars" id="ebars"></div>
 <p class="std">${b('先用摩擦 0 跑一次，再把摩擦調大跑一次。','Run once with friction at 0, then once with friction turned up.')}</p>
</div></section>

<section class="band lock" id="e-idea"><div class="wrap">
 <span class="chip">${b('新想法','The new idea')}</span>
 <h2>${b('能量不會被創造或消滅，只會轉換形式','Energy is never created or destroyed, only converted')}</h2>
 <div class="two">
  <div class="key" style="margin-top:0"><div class="big">mgh + ½mv² + ${b('熱','heat')} = ${b('常數','constant')}</div>
   <p style="margin:6px 0 0">${b('總和那一條長條從頭到尾都沒變。沒有摩擦時，能量只在高度和速度之間交換；有摩擦時，一部分變成熱，但沒有不見。','The total bar never changed. Without friction, energy just trades between height and speed; with friction, some becomes heat, but none disappears.')}</p></div>
  <div><p>${b('這把前面的節點串起來了：伽利略的球爬回同樣高度，是因為能量守恆；亞里斯多德看到「東西會停」，是因為能量變成了熱，不是因為運動被消滅。','This ties the earlier nodes together: Galileo\'s ball climbs back to the same height because energy is conserved; Aristotle saw things stop because energy turned into heat, not because motion was destroyed.')}</p>
  <p>${b('邁爾（1842）、焦耳（1840 年代）、亥姆霍茲（1847）各自提出了這個想法。蒸汽機正好是反過來：把熱變成運動。','Mayer (1842), Joule (1840s), and Helmholtz (1847) each reached this idea. A steam engine runs it in reverse: turning heat into motion.')}</p></div>
 </div>
</div></section>

${P.adv([["從 F = ma 推出動能 ½mv²", "Deriving kinetic energy ½mv² from F = ma", [["用固定的力 F 推一段距離 d，做的功 W = Fd。等加速度時 v² = 2ad（伽利略那一課），所以 d = v²/(2a)：", "Push with a steady force F over a distance d: work W = Fd. With uniform acceleration v² = 2ad (from the Galileo lesson), so d = v²/(2a):"], "=W = F·d = ma · v²/(2a) = ½mv²", ["做的功全部變成了 ½mv²，所以把它叫做動能。", "All the work became ½mv², which we call kinetic energy."]]], ["高度能 mgh", "Potential energy mgh", [["等速把 m 舉高 h，需要的力等於重量 mg，做的功是 mg·h。這些功存成了高度能。從高處落下：", "Lifting m by h at constant speed takes a force equal to its weight mg, so the work is mg·h. That work is stored as potential energy. Falling back down:"], "=mgh = ½mv²　⇒　v = √(2gh)", ["跟伽利略雙斜坡進階推導的 v² = 2gh 一樣，只是換了一種說法。", "The same v² = 2gh as in the Galileo double-ramp derivation, said a different way."]]], ["摩擦變成多少熱", "How much heat friction makes", [["摩擦力 f = μN，在斜面上 N = mg·cosθ。走過距離 s，變成熱的能量：", "Friction f = μN, and on a slope N = mg·cosθ. Over a distance s the energy turned to heat is:"], "=Q = μ·mg·cosθ·s", ["模擬就是用這條式子計算「熱」那一條。總和 mgh + ½mv² + Q 保持不變。", "The simulation uses this to compute the Heat bar. The total mgh + ½mv² + Q stays constant."]]]])}
<section class="band lock" id="e-apply"><div class="wrap">
 <span class="chip">${b('拿來用','Use it')}</span>
 <h2>${b('用能量帳本解題，不用算加速度','Solve with the energy ledger, no acceleration needed')}</h2>
 ${P.qhtml('e3','1. 雲霄飛車從 45 m 高的地方由靜止滑下，忽略摩擦。到最底部時速度是多少？','1. A coaster starts from rest 45 m up and rolls down, ignoring friction. How fast is it going at the bottom?','m/s')}
 ${P.qhtml('e4','2. 焦耳的實驗：10 kg 的重物下降 2 m，放出多少能量？','2. Joule\'s experiment: a 10 kg weight drops 2 m. How much energy does it release?','J')}
 ${P.qhtml('e5','3. 這些能量全部用來加熱 1 kg 的水（每升高 1°C 需要 4,186 J）。水溫升高多少？','3. All that energy heats 1 kg of water (4,186 J raises it by 1°C). How much does the temperature rise?','°C')}
 <div class="q" style="border:0">
  <h3>${b('4. 拿紙筆：畫出往上丟的球在三個位置的能量長條圖','4. Pencil and paper: draw energy bar charts for a ball thrown upward at three points')}</h3>
  <p>${b('剛離手、上升到一半、最高點。忽略空氣。','Just after release, halfway up, and at the top. Ignore air.')}</p>
  <button data-show="e-ans">${b('我畫好了，看答案','I\'ve drawn it, show me')}</button>
  <div id="e-ans" class="hide" style="margin-top:14px"><div class="two">
   <svg class="ill" viewBox="0 0 330 210" role="img" aria-label="Energy bar charts"><rect width="330" height="210" rx="14" fill="var(--panel)"/>
    <g font-size="11" fill="var(--ink)" text-anchor="middle">
    <rect x="30" y="40" width="22" height="120" fill="var(--mo)"/><rect x="56" y="158" width="22" height="2" fill="var(--cu)"/><text x="55" y="182">${'離手 start'}</text>
    <rect x="130" y="100" width="22" height="60" fill="var(--mo)"/><rect x="156" y="100" width="22" height="60" fill="var(--cu)"/><text x="155" y="182">${'一半 half'}</text>
    <rect x="230" y="158" width="22" height="2" fill="var(--mo)"/><rect x="256" y="40" width="22" height="120" fill="var(--cu)"/><text x="255" y="182">${'最高 top'}</text>
    <text x="80" y="24" fill="var(--mo)" font-weight="700">${'藍 = 動能 KE'}</text><text x="230" y="24" fill="var(--cu)" font-weight="700">${'橙 = 高度能 PE'}</text></g></svg>
   <div><p>${b('三個位置的總高度都一樣。離手時全部是動能，最高點時全部是高度能，中間各一半。','The total is the same at all three points. All kinetic at release, all potential at the top, half and half in between.')}</p></div>
  </div></div>
 </div>
</div></section>
${P.nextBand(6,'引力、運動、能量都有了。能不能用它們設計一顆真正能用的衛星？','We have gravity, motion, and energy. Can we use them to design a satellite that actually works?','最後一個節點不需要新的物理，只需要把前面七個節點組合起來。','The last node needs no new physics, only the seven nodes before it put together.')}
${P.std('表現預期 HS-PS3-1（建立計算模型，在已知其他部分能量與能量流動時，計算系統中某一部分的能量變化）、HS-PS3-2（在宏觀尺度上，能量可以用動能和位能來解釋）。科學實踐：SEP 2 建立與使用模型、SEP 5 數學與計算思維。跨科概念：能量與物質、系統與系統模型。','Performance expectations HS-PS3-1 (create a computational model to calculate the change in the energy of one component of a system when the change in energy of the other components and energy flows are known), HS-PS3-2 (energy at the macroscopic scale can be accounted for as kinetic and potential energy). Practices: SEP 2 Developing and Using Models, SEP 5 Mathematical and Computational Thinking. Crosscutting concepts: Energy and Matter, Systems and System Models.')}
`,init(){
const {t,tp,css,fit,$}=P,G=9.8,M=100,XM=3,K=1/3;
const yf=x=>K*x*x,sl=x=>2*K*x;
let h0=2.5,mu=0,x=-Math.sqrt(h0/K),dir=1,th=0,E0=M*G*h0,stop=()=>{},runT=0,done0=0,done1=0,peak=0;
const reset=()=>{stop();x=-Math.sqrt(h0/K);dir=1;th=0;E0=M*G*h0;peak=0;draw();bars()};
const draw=()=>{const[c,W,H]=fit($('ec'));if(W<10||H<120)return;c.clearRect(0,0,W,H);
 const k=Math.min((W-60)/(2*XM),(H-60)/3.2),cx=W/2,gy=H-26,X=v=>cx+v*k,Y=v=>gy-v*k,ink=css('--ink'),mute=css('--mute');
 c.fillStyle=css('--cusoft');c.beginPath();c.moveTo(X(-XM),Y(0));for(let v=-XM;v<=XM+1e-9;v+=.05)c.lineTo(X(v),Y(yf(v)));c.lineTo(X(XM),Y(0));c.fill();
 c.strokeStyle=css('--cu');c.lineWidth=4;c.beginPath();for(let v=-XM;v<=XM+1e-9;v+=.05){v===-XM?c.moveTo(X(v),Y(yf(v))):c.lineTo(X(v),Y(yf(v)))}c.stroke();
 c.setLineDash([6,6]);c.strokeStyle=css('--mo');c.lineWidth=1.5;c.beginPath();c.moveTo(X(-XM),Y(h0));c.lineTo(X(XM),Y(h0));c.stroke();c.setLineDash([]);
 c.fillStyle=css('--mo');c.font='600 13px "Noto Sans TC",Archivo';c.textAlign='left';c.fillText(tp('出發高度','Start height'),X(-XM)+4,Y(h0)-8);
 for(let m=0;m<=3;m++){c.fillStyle=mute;c.font='11px Archivo';c.fillText(m+' m',6,Y(m)+4)}
 const th2=Math.atan(sl(x)),px=X(x)-Math.sin(th2)*12,py=Y(yf(x))-Math.cos(th2)*12;
 c.save();c.translate(px,py);c.rotate(-th2);c.fillStyle=ink;c.fillRect(-18,-10,36,20);c.restore();
 if(peak>0){c.fillStyle=ink;c.textAlign='center';c.fillText(tp(`這次最高爬到 ${peak.toFixed(2)} m`,`Highest point this swing: ${peak.toFixed(2)} m`),W/2,20)}};
const bars=()=>{const pe=M*G*yf(x),ke=Math.max(0,E0-pe-th),tot=pe+ke+th,w=v=>Math.max(0,v/E0*100);
 $('ebars').innerHTML=[[t('高度能 mgh','Potential mgh'),pe,'var(--cu)'],[t('動能 ½mv²','Kinetic ½mv²'),ke,'var(--mo)'],[t('熱','Heat'),th,'var(--bad)'],[t('總和','Total'),tot,'var(--ink)']].map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${w(r[1])}%;background:${r[2]}"></div></div><span class="v">${Math.round(r[1]).toLocaleString()} J</span></div>`).join('')};
const lab=()=>t('放開車子','Release the car');
P.gate('ego',['e1','e2'],lab);
$('ego').onclick=()=>{reset();runT=0;let still=0;
 stop=P.run(dt=>{runT+=dt;const n=40,h=dt/n;
  for(let i=0;i<n;i++){const y=yf(x),ke=E0-M*G*y-th,v=Math.sqrt(Math.max(0,2*ke/M)),an=Math.atan(sl(x));
   if(v<.02){const down=-Math.sign(x)||1;if(Math.abs(Math.tan(an))<=mu+1e-6&&mu>0){still+=h;continue}dir=down}
   const ds=Math.max(v,.02)*h,nx=x+dir*ds*Math.cos(an),nth=th+mu*M*G*Math.cos(an)*ds;
   if(E0-M*G*yf(nx)-nth<0){peak=yf(x);dir=-dir;continue}
   x=Math.max(-XM,Math.min(XM,nx));th=nth}
  draw();bars();
  if(runT>3){if(mu===0){done0=1;P.reveal('e1')}else{done1=1;P.reveal('e2')}if(done0&&done1){P.show('e-idea');P.show('e-apply');P.show('energy-next')}}
  if(still>.5||runT>25)return false})};
$('eh').oninput=e=>{h0=+e.target.value;$('ehv').textContent=h0.toFixed(1)+' m';reset()};
$('emu').oninput=e=>{mu=+e.target.value;$('emuv').textContent=mu.toFixed(2);reset()};
P.pred('e1',{c:1,o:[['比 2.5 m 低一點','A bit lower than 2.5 m'],['剛好 2.5 m','Exactly 2.5 m'],['比 2.5 m 高','Higher than 2.5 m']],f:[['沒有摩擦，能量跑去哪裡了？放開看看。','With no friction, where would energy go? Release and see.'],['摩擦設 0，放開驗證。','Set friction to 0 and release to check.'],['多出來的能量要從哪裡來？放開看看。','Where would the extra energy come from? Release and see.']]});
P.pred('e2',{c:1,o:[['變少，因為摩擦消耗了','Decreases, because friction used it up'],['保持不變','Stays the same'],['變多','Increases']],f:[['把摩擦調大，盯著「總和」那一條。','Turn friction up and watch the Total bar.'],['把摩擦調大，盯著「總和」那一條驗證。','Turn friction up and watch the Total bar to check.'],['把摩擦調大，盯著「總和」那一條。','Turn friction up and watch the Total bar.']]});
P.num('e3',29.7,['對。mgh = ½mv²，質量消掉：v = √(2 × 9.8 × 45) ≈ 29.7 m/s，大約時速 107 公里。','Right. mgh = ½mv², and mass cancels: v = √(2 × 9.8 × 45) ≈ 29.7 m/s, about 107 km/h.'],['提示：高度能全部變成動能，mgh = ½mv²。','Hint: all the potential energy becomes kinetic, mgh = ½mv².'],.3);
P.num('e4',196,['對。mgh = 10 × 9.8 × 2 = 196 J。','Right. mgh = 10 × 9.8 × 2 = 196 J.'],['提示：mgh。','Hint: mgh.'],1);
P.num('e5',.047,['對。196 ÷ 4186 ≈ 0.047°C。溫度變化這麼小，所以焦耳需要非常精密的溫度計，也要重複很多次。','Right. 196 ÷ 4186 ≈ 0.047°C. The change is so small that Joule needed an extremely precise thermometer and many repeats.'],['提示：溫度上升 = 能量 ÷ 4186。','Hint: temperature rise = energy ÷ 4186.'],.003);
P.watch($('ec'),draw);P.onLang(bars);bars();
}});}
