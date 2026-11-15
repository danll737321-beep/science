{const b=P.b;
P.reg('kinetic',{html:P.build('kinetic',{
 title:['分子運動論：溫度就是分子在動','Kinetic Theory: temperature is molecules in motion'],
 lede:['熱是能量，熵跟排法有關。但「熱」在微觀上到底是什麼？1857 到 1877 年間，克勞修斯、馬克士威和波茲曼把氣體想成一大群高速亂飛的小球，用牛頓力學算出了壓力和溫度。','Heat is energy, and entropy counts arrangements. But what is heat at the microscopic level? Between 1857 and 1877, Clausius, Maxwell, and Boltzmann pictured a gas as a swarm of tiny, fast, randomly flying balls and used Newton\'s mechanics to calculate pressure and temperature.'],
 old:{h:['氣體分子靜靜地互相推開','Gas molecules sit still and push each other apart'],p:[['牛頓曾經提出：氣體的分子是靜止的，彼此之間有排斥力，所以氣體會撐滿容器、產生壓力。熱質說則認為，加熱是把熱質塞進分子之間，讓它們撐得更開。','Newton once suggested that gas molecules sit still and repel one another, so a gas fills its container and exerts pressure. The caloric theory said heating stuffs caloric between molecules, pushing them farther apart.']]},
 con:{h:['如果熱是能量，熱的東西裡一定有東西在動','If heat is energy, something in a hot object must be moving'],
  p:[['焦耳證明了熱和功可以互換：攪拌水會讓水變熱。功是讓東西動起來，所以水變熱，代表水裡面有什麼東西動得更快了。','Joule showed heat and work are interchangeable: stirring water warms it. Work sets things in motion, so warmer water must mean something inside it is moving faster.'],
   ['1827 年，植物學家布朗在顯微鏡下看到花粉裡的小顆粒在水中不停地亂跳，沒有生命也一樣。分子在亂撞，可以解釋這個現象（1905 年愛因斯坦算出了細節）。','In 1827 the botanist Robert Brown saw tiny particles from pollen jittering endlessly in water under a microscope, even non-living ones. Molecules constantly colliding could explain it (Einstein worked out the details in 1905).']]},
 exps:[{h:['實驗：盒子裡的氣體','Experiment: a gas in a box'],
  intro:[['每個小球代表一個分子。改變溫度（K）和盒子的寬度（體積），看撞牆的次數和壓力。下面的長條圖是分子速度的分布。','Each ball is a molecule. Change the temperature (K) and the box width (volume), and watch the wall hits and the pressure. The histogram below shows the spread of molecular speeds.']],
  preds:[['kt1','預測 A：體積不變，溫度從 300 K 變成 600 K，壓力變成？','Prediction A: same volume, temperature from 300 K to 600 K. The pressure becomes?'],['kt2','預測 B：溫度不變，體積變成一半，壓力變成？','Prediction B: same temperature, volume halved. The pressure becomes?']],
  sim:`<div class="fig"><canvas id="ktc"></canvas></div><div class="ctrl">${P.sl('ktT','溫度','Temperature',100,600,50,300)}${P.sl('ktV','體積','Volume',.5,1,.1,1)}</div><div class="bars" id="ktb"></div><div class="fig" style="min-height:140px"><canvas id="kth"></canvas></div>`}],
 idea:{h:['溫度是分子平均動能的量度','Temperature measures the average kinetic energy of molecules'],
  p:[['壓力 = 分子不停撞牆造成的推力。溫度越高，分子越快，撞得越用力也越頻繁；體積越小，撞牆越頻繁。所以 P 跟 T 成正比、跟 V 成反比。','Pressure is the push from molecules constantly hitting the walls. Higher temperature means faster molecules hitting harder and more often; smaller volume means more frequent hits. So P is proportional to T and inversely proportional to V.'],
   ['分子的速度不是全部一樣，而是有一個分布（馬克士威分布）。溫度越高，分布越寬，平均越快。','Molecules don\'t all move at one speed; they follow a spread (the Maxwell distribution). Higher temperature widens the spread and raises the average.']],
  key:['PV = NkT','壓力 × 體積 = 分子數 × 波茲曼常數 × 溫度。每個分子的平均動能 = (3/2)kT。0 K 時，分子的運動降到最低。','Pressure × volume = number of molecules × Boltzmann\'s constant × temperature. Each molecule\'s average kinetic energy = (3/2)kT. At 0 K, molecular motion drops to its minimum.'],
  after:[['熱學這條線到這裡接上了力學：熱、溫度、熵，全部可以用牛頓的 F = ma 加上機率來解釋。','Here the heat timeline joins mechanics: heat, temperature, and entropy can all be explained with Newton\'s F = ma plus probability.']]},
 adv:[['從碰撞推出壓力','Deriving pressure from collisions',[
   ['一個質量 m、速度 v_x 的分子撞牆彈回，動量改變 2mv_x。在長 L 的盒子裡，每 2L/v_x 秒撞同一面牆一次。平均力 = 2mv_x ÷ (2L/v_x) = mv_x²/L。N 個分子、面積 A：','A molecule of mass m with velocity v_x bounces off a wall, changing momentum by 2mv_x. In a box of length L it hits the same wall every 2L/v_x seconds. Average force = 2mv_x ÷ (2L/v_x) = mv_x²/L. For N molecules and area A:'],
   '=P = N·m⟨v_x²⟩ / (A·L) = N·m⟨v²⟩ / (3V)',
   ['跟 PV = NkT 比較：½m⟨v²⟩ = (3/2)kT。溫度就是平均動能。','Compare with PV = NkT: ½m⟨v²⟩ = (3/2)kT. Temperature is average kinetic energy.']]],
  ['分子有多快','How fast molecules move',[
   '=v_rms = √(3kT/m)',
   ['氮氣分子 m = 4.65 × 10⁻²⁶ kg，300 K：v_rms = √(3 × 1.38×10⁻²³ × 300 ÷ 4.65×10⁻²⁶) ≈ 517 m/s，比聲音還快。','A nitrogen molecule has m = 4.65 × 10⁻²⁶ kg. At 300 K: v_rms = √(3 × 1.38×10⁻²³ × 300 ÷ 4.65×10⁻²⁶) ≈ 517 m/s, faster than sound.']]]],
 apply:{h:['用分子運動論解題','Solve with kinetic theory'],q:[
  ['n','kt3','1. 300 K 時，空氣中氮氣分子的 v_rms 大約是多少 m/s？（用上面的公式）','1. At 300 K, about what is v_rms for nitrogen molecules in air, in m/s? (use the formula above)','m/s'],
  ['n','kt4','2. 輪胎在 280 K 時壓力 200 kPa。開車後輪胎變成 308 K（體積不變），壓力變成多少 kPa？','2. A tire is at 200 kPa at 280 K. After driving it warms to 308 K (same volume). What is the pressure in kPa?','kPa'],
  ['p','kt5','3. 絕對零度（0 K）代表什麼？','3. What does absolute zero (0 K) mean?']]},
 pencil:{h:['4. 拿紙筆：畫出同一個盒子裡 200 K 和 400 K 的氣體','4. Pencil and paper: draw the same box of gas at 200 K and at 400 K'],p:['用箭頭表示分子的速度。','Use arrows to show molecular velocities.'],
  ans:`<p>${b('分子數量一樣，位置都是亂的。400 K 的箭頭平均比 200 K 長大約 √2 ≈ 1.4 倍（速度跟 √T 成正比），方向各式各樣。','The same number of molecules, scattered randomly. At 400 K the arrows are on average about √2 ≈ 1.4 times longer than at 200 K (speed goes as √T), pointing every which way.')}</p>`},
 finale:`<section class="band next" id="kinetic-next"><div class="wrap"><span class="chip">${b('這個答案帶出的新問題','The new question this answer creates')}</span>
  <h2>${b('熱的東西會發光。為什麼越熱，光的顏色越偏藍？','Hot things glow. Why does the color shift toward blue as they get hotter?')}</h2>
  <p>${b('用分子運動論和電磁學去算發光物體的顏色，算出來的結果完全錯誤：紫外線應該無限多。1900 年，普朗克被迫假設能量只能一份一份地放出。這是量子物理的開始。','Using kinetic theory and electromagnetism to predict the colors a hot object glows gives a completely wrong answer: infinite ultraviolet. In 1900 Max Planck was forced to assume energy comes in discrete packets. It was the start of quantum physics.')}</p>
  <a class="btn pri" href="#photon">${b('近代物理：光子 →','Modern Physics: the photon →')}</a></div></section>`,
 std:['表現預期 HS-PS3-2（建立並使用模型，說明宏觀尺度的能量可以用粒子的運動和相對位置來解釋）、HS-PS3-4。科學實踐：SEP 2 建立與使用模型、SEP 5 數學與計算思維。跨科概念：尺度、比例與數量；能量與物質。','Performance expectations HS-PS3-2 (develop and use models to illustrate that energy at the macroscopic scale can be accounted for by the motion of particles), HS-PS3-4. Practices: SEP 2 Developing and Using Models, SEP 5 Mathematical and Computational Thinking. Crosscutting concepts: Scale, Proportion, and Quantity; Energy and Matter.']
}),init(){
const {t,tp,css,fit,$}=P;let T=300,V=1,T0=300,V0=1,ps=[],hits=[],acc=0;
const rs=()=>{const u=Math.random();return Math.sqrt(-2*Math.log(1-u))};
const init=()=>{ps=Array.from({length:70},()=>{const a=Math.random()*6.283,s=rs();return{x:Math.random(),y:Math.random(),u:Math.cos(a)*s,v:Math.sin(a)*s}})};
const scale=()=>Math.sqrt(T/300)*.35;
const draw=()=>{const[x,W,H]=fit($('ktc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const bw=(W-60)*V,bh=H-30,bx=20,by=15,ink=css('--ink');
 x.fillStyle=css('--panel');x.fillRect(bx,by,bw,bh);x.strokeStyle=ink;x.lineWidth=2.5;x.strokeRect(bx,by,bw,bh);x.fillStyle=css('--mute');x.fillRect(bx+bw,by-6,10,bh+12);
 const hue=Math.min(1,(T-100)/500);x.fillStyle=`rgb(${Math.round(40+200*hue)},${Math.round(90-40*hue)},${Math.round(220-180*hue)})`;
 ps.forEach(p=>{x.beginPath();x.arc(bx+p.x*bw,by+p.y*bh,4,0,7);x.fill()})};
const hist=()=>{const[x,W,H]=fit($('kth'));if(W<10)return;x.clearRect(0,0,W,H);const nb=16,mx=3.5,cnt=Array(nb).fill(0);ps.forEach(p=>{const s=Math.hypot(p.u,p.v)*Math.sqrt(T/300);const k=Math.min(nb-1,Math.floor(s/mx*nb));cnt[k]++});
 const L=30,R=W-10,B=H-22,bw=(R-L)/nb,m=Math.max(...cnt,1);x.fillStyle=css('--cu');cnt.forEach((c,i)=>x.fillRect(L+i*bw+1,B-(B-10)*c/m,bw-2,(B-10)*c/m));
 x.fillStyle=css('--ink');x.font='11px Archivo';x.textAlign='left';x.fillText(tp('分子速度 →（慢到快）','Molecular speed → (slow to fast)'),L,H-6)};
const bars=()=>{const Pth=100*(T/300)/V,rate=hits.reduce((a,b)=>a+b,0)/Math.max(1,hits.length)*60;
 $('ktb').innerHTML=[[t('撞牆次數／秒','Wall hits per second'),rate,Math.max(rate,400),'','var(--mo)'],[t('壓力（理論）','Pressure (theory)'),Pth,1200,' kPa','var(--cu)']].map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${Math.min(100,r[1]/r[2]*100)}%;background:${r[4]}"></div></div><span class="v">${r[1].toFixed(0)}${r[3]}</span></div>`).join('')};
P.slider('ktT',v=>v+' K',v=>{if(V===V0&&(v===2*T0||T0===2*v))P.reveal('kt1');T=v;bars()});$('ktT').addEventListener('change',()=>{T0=T});
P.slider('ktV',v=>v.toFixed(1)+' V₀',v=>{if(T===T0&&(Math.abs(v*2-V0)<.01||Math.abs(V0*2-v)<.01))P.reveal('kt2');V=v;ps.forEach(p=>p.x=Math.min(p.x,.999));bars()});$('ktV').addEventListener('change',()=>{V0=V});
init();
P.run(dt=>{if(!$('ktc').isConnected)return false;if(document.querySelector('main.lesson[data-id=kinetic]')?.hidden)return;
 const sc=scale(),Wb=V;let h=0;ps.forEach(p=>{p.x+=p.u*sc*dt/Wb;p.y+=p.v*sc*dt;if(p.x<0){p.x=-p.x;p.u*=-1;h++}if(p.x>1){p.x=2-p.x;p.u*=-1;h++}if(p.y<0){p.y=-p.y;p.v*=-1;h++}if(p.y>1){p.y=2-p.y;p.v*=-1;h++}});
 hits.push(h);if(hits.length>120)hits.shift();acc+=dt;if(acc>.3){acc=0;bars();hist()}draw()});
P.pred('kt1',{c:1,o:[['不變','Unchanged'],['變 2 倍','Doubles'],['變 4 倍','Quadruples']],f:[['把溫度從 300 K 拉到 600 K 看看。','Drag the temperature from 300 K to 600 K and see.'],['把溫度從 300 K 拉到 600 K 驗證。','Drag the temperature from 300 K to 600 K to check.'],['速度變快 √2 倍、撞牆也頻繁 √2 倍。乘起來是多少？拉拉看。','Speed rises by √2 and so does the hit rate. What\'s the product? Try it.']]});
P.pred('kt2',{c:0,o:[['變 2 倍','Doubles'],['變一半','Halves'],['不變','Unchanged']],f:[['把體積從 1 拉到 0.5 驗證。','Drag the volume from 1 to 0.5 to check.'],['把體積從 1 拉到 0.5 看看。','Drag the volume from 1 to 0.5 and see.'],['把體積從 1 拉到 0.5 看看。','Drag the volume from 1 to 0.5 and see.']]});
P.num('kt3',517,['對。√(3 × 1.38×10⁻²³ × 300 ÷ 4.65×10⁻²⁶) ≈ 517 m/s，大約時速 1,860 公里。','Right. √(3 × 1.38×10⁻²³ × 300 ÷ 4.65×10⁻²⁶) ≈ 517 m/s, about 1,860 km/h.'],['提示：v = √(3kT/m)，k = 1.38 × 10⁻²³。','Hint: v = √(3kT/m) with k = 1.38 × 10⁻²³.'],10);
P.num('kt4',220,['對。P 跟 T 成正比：200 × 308/280 = 220 kPa。所以要在輪胎冷的時候量胎壓。','Right. P is proportional to T: 200 × 308/280 = 220 kPa. That\'s why you check tire pressure when the tires are cold.'],['提示：體積不變時 P/T 固定，溫度要用 K。','Hint: with fixed volume, P/T stays constant; use kelvins.'],1);
P.pred('kt5',{now:1,c:1,o:[['水結冰的溫度','The temperature at which water freezes'],['分子的運動降到最低、不能再冷的溫度','The temperature where molecular motion is at its minimum and nothing can be colder'],['所有東西都會消失的溫度','The temperature where everything vanishes']],f:[['水在 0°C = 273 K 結冰，比絕對零度高很多。','Water freezes at 0°C = 273 K, far above absolute zero.'],['對。0 K = −273.15°C。實驗室已經能做到離 0 K 不到十億分之一度，但永遠到不了。','Right. 0 K = −273.15°C. Labs have come within a billionth of a degree, but it can never quite be reached.'],['物質不會消失，只是分子的運動降到最低。','Matter doesn\'t vanish; molecular motion just drops to its minimum.']]});
bars();P.watch($('ktc'),draw);P.watch($('kth'),hist);P.onLang(bars);
}});}
