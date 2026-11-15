{const b=P.b;
P.reg('relativity',{html:P.build('relativity',{
 title:['相對論：光速不變，時間就會變','Relativity: if light\'s speed can\'t change, time must'],
 lede:['麥克生－莫雷實驗說，光速在每個方向都一樣。1905 年，愛因斯坦把它當成出發點：光速對每一個觀察者都一樣。從這一個假設，推出了一連串違反直覺、但後來都被證實的結論。','The Michelson–Morley experiment said light\'s speed is the same in every direction. In 1905 Einstein took that as his starting point: light\'s speed is the same for every observer. From that one assumption followed a chain of counterintuitive conclusions, all later confirmed.'],
 old:{h:['時間對每個人都一樣','Time is the same for everyone'],p:[['從牛頓開始，時間被當成絕對的：宇宙裡有一個共同的時鐘，不管你在做什麼、跑多快，一秒就是一秒。速度則是可以相加的：在每小時 100 公里的火車上往前丟球，球速就是火車速度加上丟出的速度。','Since Newton, time was absolute: one shared clock for the universe, so a second is a second no matter what you\'re doing or how fast you go. Speeds simply add: throw a ball forward on a 100 km/h train and its speed is the train\'s plus the throw.']]},
 con:{h:['速度相加和光速不變，不能同時成立','Adding speeds and a fixed light speed can\'t both be true'],
  p:[['在火車上往前打開手電筒，如果速度可以相加，地面上的人會量到光速 = c + 火車速度。但實驗說，誰量都是 c。','Switch on a flashlight pointing forward on a train. If speeds add, someone on the ground measures c + the train\'s speed. Experiments say everyone measures c.'],
   ['愛因斯坦選擇相信實驗：光速不變。那麼，速度 = 距離 ÷ 時間，要讓 c 不變，「距離」和「時間」就必須依觀察者而改變。他用一個最簡單的時鐘來想：光在兩面鏡子之間上下彈跳，彈一次就是一個「滴答」。','Einstein trusted the experiments: light\'s speed is fixed. Since speed = distance ÷ time, keeping c fixed means distance and time must depend on the observer. He reasoned with the simplest clock: light bouncing between two mirrors, each bounce one "tick."']]},
 exps:[{h:['實驗：光鐘','Experiment: the light clock'],
  intro:[['左邊是放在地面上的光鐘。右邊是放在火車上的光鐘，但是從地面上看。光速對兩個人都一樣。調整火車速度（以光速為 1）。','On the left is a light clock on the ground. On the right is a light clock on a train, as seen from the ground. Light\'s speed is the same for both. Set the train\'s speed (with light speed = 1).']],
  preds:[['re1','預測 A：從地面看，火車上的光鐘？','Prediction A: seen from the ground, the clock on the train?']],
  sim:`<div class="fig"><canvas id="rec"></canvas></div><div class="ctrl">${P.sl('rev','火車速度','Train speed',0,.95,.05,.6)}</div><div class="bars" id="reb"></div>`},
 {h:['真實證據：從高空落下的緲子','Real evidence: muons from the upper atmosphere'],chip:['真實數據','Real data'],
  intro:[['宇宙射線在 15 km 高空撞出緲子，以 0.995c 往地面飛。緲子的壽命只有 2.2 微秒，就算以光速飛，也只能飛 660 m 就衰變了。','Cosmic rays create muons about 15 km up, flying toward the ground at 0.995c. A muon lives only 2.2 microseconds; even at light speed, it would travel just 660 m before decaying.']],
  preds:[['re2','預測 B：地面上偵測得到大量的緲子嗎？','Prediction B: do detectors on the ground find lots of muons?']],
  sim:`<div class="ctrl"><button id="remu">${b('看緲子的計算','See the muon numbers')}</button></div><div id="remr"></div>`}],
 idea:{h:['移動的時鐘走得比較慢','Moving clocks run slow'],
  p:[['從地面看，火車上的光要走斜線，路比較長。光速不變，所以每一次滴答要花更久的時間：火車上的時間變慢了。火車上的人自己不會感覺到，他看自己的錶一切正常。','Seen from the ground, light on the train travels a diagonal, which is longer. With light\'s speed fixed, each tick takes longer: time on the train runs slow. The passenger feels nothing; their own watch looks normal.'],
   ['緲子就是這樣到達地面的：從地面看，它們的「時鐘」慢了大約 10 倍，壽命變成 22 微秒，夠飛 6.6 km 以上。這個效應每天都在 GPS 衛星上被修正。','That\'s how muons reach the ground: from our view their clocks run about 10 times slow, stretching their life to 22 microseconds, enough to fly over 6.6 km. GPS satellites correct for this effect every day.']],
  key:['γ = 1 / √(1 − v²/c²)','移動中的時間會慢 γ 倍。速度越接近光速，γ 越大。同一套推理也導出了最有名的式子：E = mc²，質量本身就是一種能量。','Moving time slows by a factor of γ. The closer to light speed, the bigger γ. The same reasoning led to the most famous equation, E = mc²: mass is itself a form of energy.']},
 adv:[['用畢氏定理推出 γ','Deriving γ with the Pythagorean theorem',[
   ['鏡子相距 L。火車上的人看，光上下一次的時間 t₀ = 2L/c。地面上的人看，一次滴答的時間 t 裡，火車往前走了 vt，光走的斜邊是 ct：','The mirrors are L apart. To the passenger, one up-and-down takes t₀ = 2L/c. To the ground observer, during one tick t the train moves vt, and the light travels the hypotenuse ct:'],
   '=(ct/2)² = L² + (vt/2)²　⇒　t = (2L/c) / √(1 − v²/c²) = γ·t₀']],
  ['E = mc²','E = mc²',[
   ['1 公克的質量完全變成能量：','One gram of mass converted entirely to energy:'],
   '=E = 0.001 × (3×10⁸)² = 9 × 10¹³ J',
   ['大約是一座大型發電廠一天的發電量。在近代物理線的「核分裂」，你會看到這些能量怎麼被釋放出來。','About what a large power plant produces in a day. In the fission node of this timeline, you\'ll see how that energy gets released.']]]],
 apply:{h:['用 γ 解題','Solve with γ'],q:[
  ['n','re3','1. 速度 0.6c 時，γ 是多少？','1. What is γ at 0.6c?',''],
  ['n','re4','2. 太空船以 0.8c 飛行。船上過了 1 秒，地面上看過了幾秒？','2. A spaceship flies at 0.8c. When 1 second passes on board, how many seconds pass as seen from the ground?','s'],
  ['p','re5','3. GPS 衛星以每秒約 3.9 km 飛行。為什麼 GPS 要考慮相對論？','3. GPS satellites move at about 3.9 km/s. Why must GPS account for relativity?']]},
 pencil:{h:['4. 拿紙筆：畫出火車上的光鐘，分別從火車上和從地面看的光路','4. Pencil and paper: draw the light path in the train\'s light clock, as seen from the train and from the ground'],p:['哪一條路比較長？','Which path is longer?'],
  ans:`<p>${b('從火車上看：光直直地上下。從地面看：光走成「之」字形的斜線，比較長。兩個人量到的光速一樣，所以地面上的人量到的滴答時間比較長。','From the train: light goes straight up and down. From the ground: it zigzags along diagonals, a longer path. Both measure the same light speed, so the ground observer times a longer tick.')}</p>`},
 next:['同一年，愛因斯坦還發表了另一篇論文：光有時候不像波，像一顆一顆的粒子。','The same year, Einstein published another paper: sometimes light acts not like a wave but like individual particles.','他用這個想法解釋了赫茲發現的那個怪現象，並因此得到諾貝爾獎。','He used it to explain the odd effect Hertz had noticed, and won the Nobel Prize for it.'],
 std:['延伸 HS-PS4-3 與 HS-PS1-8（E = mc² 為核能做準備）；超出 NGSS 核心的延伸內容。科學實踐：SEP 2 建立與使用模型、SEP 5 數學與計算思維、SEP 7 以證據進行論證。跨科概念：尺度、比例與數量。','Extends HS-PS4-3 and HS-PS1-8 (E = mc² sets up nuclear energy); enrichment beyond the core NGSS. Practices: SEP 2 Developing and Using Models, SEP 5 Mathematical and Computational Thinking, SEP 7 Engaging in Argument from Evidence. Crosscutting concepts: Scale, Proportion, and Quantity.']
}),init(){
const {t,tp,css,fit,$}=P;let v=.6,tt=0,mu=0;const g=()=>1/Math.sqrt(1-v*v);
const draw=()=>{const[x,W,H]=fit($('rec'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const Lp=H-80,top=40,ink=css('--ink'),lc='#e8b923',P0=2*Lp,tick=2;
 const half=W/2;x.strokeStyle=css('--line');x.beginPath();x.moveTo(half,10);x.lineTo(half,H-10);x.stroke();
 const cx=half*.5,ph=(tt%tick)/tick,y=ph<.5?top+Lp*ph*2:top+Lp*(2-ph*2);
 x.fillStyle=ink;x.fillRect(cx-30,top-6,60,6);x.fillRect(cx-30,top+Lp,60,6);x.fillStyle=lc;x.beginPath();x.arc(cx,y,7,0,7);x.fill();
 const gt=tick*g(),ph2=(tt%gt)/gt,trainW=half-60,sp=v*Lp*2/(tick)*0.5,xs=half+30+((tt*sp)%trainW),y2=ph2<.5?top+Lp*ph2*2:top+Lp*(2-ph2*2);
 x.fillStyle=ink;x.fillRect(xs-30,top-6,60,6);x.fillRect(xs-30,top+Lp,60,6);
 x.strokeStyle=lc;x.globalAlpha=.4;x.lineWidth=2;x.beginPath();const startX=xs-sp*(tt%gt);x.moveTo(Math.max(half+4,startX),top+Lp);x.lineTo(Math.max(half+4,startX+sp*gt/2),top);x.lineTo(Math.max(half+4,startX+sp*gt),top+Lp);x.stroke();x.globalAlpha=1;
 x.fillStyle=lc;x.beginPath();x.arc(xs,y2,7,0,7);x.fill();
 x.fillStyle=ink;x.font='600 13px "Noto Sans TC",Archivo';x.textAlign='center';x.fillText(tp('地面上的光鐘','Clock on the ground'),cx,22);x.fillText(tp('火車上的光鐘（從地面看）','Clock on the train (seen from the ground)'),half*1.5,22);
 x.font='700 14px Archivo';x.fillText(tp(`滴答 ${Math.floor(tt/tick)}`,`Ticks ${Math.floor(tt/tick)}`),cx,H-14);x.fillText(tp(`滴答 ${Math.floor(tt/gt)}`,`Ticks ${Math.floor(tt/gt)}`),half*1.5,H-14)};
const bars=()=>{$('reb').innerHTML=`<div class="br"><span>γ</span><div class="tr"><div class="fl" style="width:${Math.min(100,(g()-1)/2.3*100)}%;background:var(--cu)"></div></div><span class="v">${g().toFixed(3)}</span></div><p class="std">${t(`地面上 ${g().toFixed(2)} 秒，火車上的時鐘只走 1 秒。`,`For every ${g().toFixed(2)} s on the ground, the train\'s clock advances only 1 s.`)}</p>`;if(v>=.5&&tt>4)P.reveal('re1')};
P.slider('rev',x=>x.toFixed(2)+' c',x=>{v=x;tt=0;bars()});
P.run(dt=>{if(!$('rec').isConnected)return false;if(document.querySelector('main.lesson[data-id=relativity]')?.hidden)return;tt+=dt;draw();if(tt>4&&v>=.5)P.reveal('re1')});
const mr=()=>{if(!mu)return;const G=1/Math.sqrt(1-.995**2);$('remr').innerHTML=`<div class="bars">${[[t('不考慮相對論能飛的距離','Range without relativity'),.66],[t('考慮時間變慢（γ ≈ 10）','With time dilation (γ ≈ 10)'),.66*G],[t('需要飛的距離','Distance to the ground'),15]].map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${r[1]/15*100}%;background:var(--mo)"></div></div><span class="v">${r[1].toFixed(1)} km</span></div>`).join('')}</div><p class="std">${t('緲子是隨機衰變的，所以「平均」只能飛這麼遠，但有相當多可以飛更遠。不考慮相對論，到達地面的緲子應該少到幾乎量不到；考慮之後，跟實際偵測到的數量吻合。','Muons decay randomly, so this is an average range; a good fraction go farther. Without relativity, almost none should reach the ground; with it, the predicted count matches what detectors see.')}</p>`};
$('remu').onclick=()=>{mu=1;P.reveal('re2');mr()};
P.pred('re1',{c:1,o:[['跟地面上的一樣快','Ticks at the same rate as the ground clock'],['走得比較慢','Ticks more slowly'],['走得比較快','Ticks faster']],f:[['把速度調到 0.6 以上，比較兩邊的滴答數。','Set the speed above 0.6 and compare the tick counts.'],['把速度調到 0.6 以上驗證。','Set the speed above 0.6 to check.'],['比較兩邊的滴答數看看。','Compare the two tick counts.']]});
P.pred('re2',{c:0,o:[['有，大量偵測到','Yes, lots of them'],['幾乎沒有，因為它們早就衰變了','Almost none; they decayed long before'],['剛好一半','Exactly half']],f:[['按「看緲子的計算」驗證。','Press "See the muon numbers" to check.'],['按「看緲子的計算」看看。','Press "See the muon numbers" and see.'],['按「看緲子的計算」看看。','Press "See the muon numbers" and see.']]});
P.num('re3',1.25,['對。√(1 − 0.36) = 0.8，γ = 1/0.8 = 1.25。','Right. √(1 − 0.36) = 0.8, so γ = 1/0.8 = 1.25.'],['提示：先算 1 − 0.6²，再開根號、取倒數。','Hint: compute 1 − 0.6², take the square root, then the reciprocal.'],.01);
P.num('re4',1.667,['對。γ = 1/√(1 − 0.64) = 1/0.6 ≈ 1.67 秒。','Right. γ = 1/√(1 − 0.64) = 1/0.6 ≈ 1.67 s.'],['提示：地面時間 = γ × 船上時間。','Hint: ground time = γ × ship time.'],.02);
P.pred('re5',{now:1,c:1,o:[['衛星太重','The satellites are too heavy'],['衛星上的時鐘每天會差大約 38 微秒，換成距離誤差會累積到每天 10 km 以上','Satellite clocks drift by about 38 microseconds a day, which would grow into position errors of over 10 km a day'],['因為訊號是光','Because the signal is light']],f:[['重量跟這個無關。','Weight has nothing to do with it.'],['對。GPS 用光速 × 時間算距離，時間差 38 μs，距離就差 3×10⁸ × 38×10⁻⁶ ≈ 11 km。（這 38 μs 包含速度造成的變慢，和重力較弱造成的變快，後者來自廣義相對論。）','Right. GPS computes distance as light speed × time, so a 38 μs error means 3×10⁸ × 38×10⁻⁶ ≈ 11 km. (The 38 μs combines slowing from speed and speeding up from weaker gravity, the latter from general relativity.)'],['訊號是電磁波沒錯，但重點是衛星上的時鐘。','The signal is electromagnetic, but the key is the satellite\'s clock.']]});
bars();P.watch($('rec'),draw);P.onLang(()=>{bars();mr()});
}});}
