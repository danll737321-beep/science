{const b=P.b;
P.reg('hubble',{html:P.build('hubble',{
 title:['哈伯：宇宙正在膨脹','Hubble: the universe is expanding'],
 lede:['1920 年代以前，大部分天文學家認為宇宙是靜止、永恆不變的。連愛因斯坦都在方程式裡加了一項，讓宇宙保持靜止。1929 年，哈伯把星系的距離和速度畫在同一張圖上，得到一條直線。','Before the 1920s most astronomers believed the universe was static and eternal. Even Einstein added a term to his equations to keep it still. In 1929 Edwin Hubble plotted galaxies\' distances against their speeds and got a straight line.'],
 old:{h:['宇宙是靜止的','The universe stands still'],p:[['星星看起來千年不變，宇宙被認為一直都是現在這個樣子：沒有開始，也不會改變。甚至很多人認為銀河系就是整個宇宙，那些模糊的「星雲」只是銀河系裡的雲氣。','The stars seemed unchanged for millennia, so the universe was thought to have always been as it is, with no beginning and no change. Many even believed the Milky Way was the whole universe and the fuzzy "nebulae" were just gas clouds within it.']]},
 con:{h:['幾乎所有星系都在遠離我們','Almost every galaxy is moving away'],
  p:[['1912 年，勒維特發現一種會規律變亮變暗的恆星（造父變星），變化的週期越長，本身就越亮。只要量週期，就知道它真正多亮，再跟看起來多亮比較，就能算出距離。哈伯用這個方法證明那些「星雲」遠在銀河系之外，是另一個個星系。','In 1912 Henrietta Leavitt found that certain pulsing stars (Cepheid variables) are intrinsically brighter the longer their pulse period. Measure the period, know the true brightness, compare with how bright it looks, and you get the distance. Hubble used this to show the "nebulae" lay far beyond the Milky Way: they were other galaxies.'],
   ['斯利弗已經量了很多星系光譜的都卜勒紅移，發現幾乎全部都偏紅，也就是在遠離。哈伯把距離和速度放在一起，發現：越遠的星系，跑得越快。','Vesto Slipher had measured the Doppler redshifts of many galaxies and found nearly all shifted red, moving away. Hubble put distance and speed together and found: the farther the galaxy, the faster it recedes.']]},
 exps:[{h:['實驗一：畫出星系的距離和速度','Experiment 1: plot galaxies\' distances and speeds'],
  intro:[['每一個點是一個星系（距離用百萬秒差距 Mpc，1 Mpc ≈ 326 萬光年；速度用 km/s）。調整直線的斜率 H₀，讓它最貼近所有的點。','Each dot is a galaxy (distance in megaparsecs, 1 Mpc ≈ 3.26 million light-years; speed in km/s). Adjust the line\'s slope H₀ until it fits the dots best.']],
  sim:`<div class="chart"><svg id="hbs"></svg></div><div class="ctrl">${P.sl('hbh','斜率 H₀','Slope H₀',30,120,1,45)}<span class="read" id="hbr"></span></div><p class="std">${b('示範數據：依照現代測量的關係產生，含觀測誤差。','Sample data: generated from the modern relationship, with measurement scatter.')}</p>`},
 {h:['實驗二：葡萄乾麵包','Experiment 2: raisin bread'],
  intro:[['麵團在烤箱裡膨脹，每顆葡萄乾彼此都離得越來越遠。點一顆葡萄乾當作「你的星系」，看其他葡萄乾相對於它怎麼動。','As dough rises in the oven, every raisin moves away from every other. Tap a raisin to make it "your galaxy" and watch how the others move relative to it.']],
  preds:[['hb1','預測 A：如果你住在另一個星系，你會看到？','Prediction A: if you lived in a different galaxy, you would see?'],['hb2','預測 B：如果宇宙一直在膨脹，把時間倒回去，會？','Prediction B: if the universe is always expanding, what happens when you run time backward?']],
  sim:`<div class="fig"><canvas id="hbc"></canvas></div><div class="ctrl"><button class="pri" id="hbgo"></button></div>`}],
 idea:{h:['哈伯定律：v = H₀ d','Hubble\'s law: v = H₀ d'],
  p:[['星系遠離的速度跟距離成正比。這不是因為我們在宇宙的中心：從任何一個星系看出去，都會看到同樣的事。是空間本身在膨脹，就像麵團帶著所有葡萄乾一起變大。','Galaxies recede at speeds proportional to their distance. That\'s not because we\'re at the center: from any galaxy you\'d see the same thing. Space itself is expanding, like dough carrying all the raisins along.'],
   ['把時間倒回去，所有星系會越來越近，最後擠在一起。這就是大霹靂理論（勒梅特在 1927 年首先提出）。1965 年偵測到的宇宙微波背景輻射，是大霹靂留下的餘溫，進一步證實了它。','Run time backward and the galaxies draw closer until they\'re all packed together. That\'s the Big Bang theory (first proposed by Lemaître in 1927). The cosmic microwave background, detected in 1965, is the Big Bang\'s leftover glow and confirmed it further.']],
  key:['v = H₀ · d','H₀ ≈ 70 km/s/Mpc（哈伯常數）。1/H₀ 大約就是宇宙的年齡：約 140 億年。','H₀ ≈ 70 km/s/Mpc (the Hubble constant). 1/H₀ roughly gives the age of the universe: about 14 billion years.'],
  after:[['哈伯 1929 年算出的 H₀ 大約是 500，比今天的值大了七倍，因為當時的距離量錯了。科學數字常常這樣一步步被修正，但「越遠越快」的規律從來沒有變過。','Hubble\'s own 1929 value was about 500, seven times today\'s, because his distances were off. Scientific numbers are often corrected step by step like this, but the farther-is-faster pattern has never changed.']]},
 adv:[['用 H₀ 估算宇宙的年齡','Estimating the universe\'s age from H₀',[
   ['如果星系一直以同樣的速度遠離，它跑到距離 d 所花的時間 = d/v = 1/H₀：','If a galaxy has always receded at the same speed, the time to reach distance d is d/v = 1/H₀:'],
   '=1 Mpc = 3.086 × 10¹⁹ km　⇒　1/H₀ = 3.086×10¹⁹ / 70 s ≈ 4.4 × 10¹⁷ s ≈ 140 億年 14 billion years']],
  ['紅移和速度','Redshift and speed',[
   '=z = Δλ/λ ≈ v/c　（v 遠小於 c 時 when v ≪ c）',
   ['一個星系的氫譜線從 656.3 nm 移到 671.6 nm：z = 15.3/656.3 = 0.023，v ≈ 0.023 × 300,000 ≈ 7,000 km/s，距離 ≈ 7,000/70 = 100 Mpc。','A galaxy\'s hydrogen line shifts from 656.3 nm to 671.6 nm: z = 15.3/656.3 = 0.023, v ≈ 0.023 × 300,000 ≈ 7,000 km/s, distance ≈ 7,000/70 = 100 Mpc.']]]],
 apply:{h:['用哈伯定律解題（H₀ = 70 km/s/Mpc）','Solve with Hubble\'s law (H₀ = 70 km/s/Mpc)'],q:[
  ['n','hb3','1. 一個星系距離 100 Mpc，它遠離的速度是多少 km/s？','1. A galaxy is 100 Mpc away. How fast is it receding, in km/s?','km/s'],
  ['n','hb4','2. 一個星系以 21,000 km/s 遠離，它距離多少 Mpc？','2. A galaxy recedes at 21,000 km/s. How far away is it, in Mpc?','Mpc'],
  ['p','hb5','3. 所有星系都在遠離我們，這代表銀河系在宇宙的中心嗎？','3. Every galaxy is moving away from us. Does that mean the Milky Way is at the center of the universe?']]},
 pencil:{h:['4. 拿紙筆：在一條橡皮筋上畫三個點，拉長之前和之後各量一次距離','4. Pencil and paper: mark three dots on a rubber band and measure distances before and after stretching'],p:['從中間的點看，和從邊邊的點看，哪個遠離得比較快？','Seen from the middle dot and from an end dot, which recedes faster?'],
  ans:`<p>${b('橡皮筋拉長成 2 倍時，每兩點之間的距離都變成 2 倍。原本離 1 cm 的變成 2 cm（多了 1 cm），離 2 cm 的變成 4 cm（多了 2 cm）。從任何一個點看，越遠的點跑得越快，沒有哪一個點是特別的中心。','Stretch the band to twice its length and every gap doubles. A dot 1 cm away ends up 2 cm away (1 cm more); one 2 cm away ends up 4 cm away (2 cm more). From any dot, farther dots move faster, and no dot is a special center.')}</p>`},
 next:['宇宙從一個極熱、極密的狀態開始。恆星後來是怎麼發光的？原子核裡藏了多少能量？','The universe began extremely hot and dense. How do stars shine? How much energy is hidden in an atomic nucleus?','1938 年底，一組化學家發現鈾原子核被中子打中之後，竟然裂成了兩半。','At the end of 1938, chemists found that uranium nuclei struck by neutrons had split in two.'],
 std:['表現預期 HS-ESS1-2（根據光譜、遠方星系的運動和宇宙中物質的組成等天文證據，解釋大霹靂理論）。科學實踐：SEP 4 分析與詮釋數據、SEP 6 建構解釋。跨科概念：尺度、比例與數量；模式。','Performance expectation HS-ESS1-2 (construct an explanation of the Big Bang theory based on astronomical evidence of light spectra, motion of distant galaxies, and composition of matter in the universe). Practices: SEP 4 Analyzing and Interpreting Data, SEP 6 Constructing Explanations. Crosscutting concepts: Scale, Proportion, and Quantity; Patterns.']
}),init(){
const {t,tp,css,fit,$}=P;let H0=45,me=-1,sc=1,stop=()=>{},moved=0;
let seed=7;const rnd=()=>{seed=(seed*9301+49297)%233280;return seed/233280};
const gal=[12,20,28,35,44,52,60,71,80,95,108,120,135,150].map(d=>[d,70*d*(1+(rnd()-.5)*.3)]);
const chart=()=>{const sv=$('hbs'),W=sv.clientWidth,H=sv.clientHeight;if(W<10)return;const L=58,R=W-14,T=14,B=H-36,X=v=>L+(R-L)*v/160,Y=v=>B-(B-T)*v/12000,ink=css('--ink'),mute=css('--mute');let g='';
 for(let i=0;i<=4;i++){g+=`<line x1="${L}" x2="${R}" y1="${Y(i*3000)}" y2="${Y(i*3000)}" stroke="${mute}" stroke-opacity=".25"/><text x="${L-6}" y="${Y(i*3000)+4}" font-size="11" text-anchor="end" fill="${mute}">${(i*3000).toLocaleString()}</text><text x="${X(i*40)}" y="${B+16}" font-size="11" text-anchor="middle" fill="${mute}">${i*40}</text>`}
 g+=`<line x1="${X(0)}" y1="${Y(0)}" x2="${X(Math.min(160,12000/H0))}" y2="${Y(Math.min(12000,H0*160))}" stroke="${css('--cu')}" stroke-width="2.5"/>`;
 gal.forEach(([d,v])=>{g+=`<circle cx="${X(d)}" cy="${Y(v)}" r="6" fill="${css('--mo')}"/>`});
 g+=`<text x="${(L+R)/2}" y="${H-6}" font-size="12" text-anchor="middle" fill="${ink}" font-weight="600">${tp('距離 (Mpc)','Distance (Mpc)')}</text><text x="12" y="${(T+B)/2}" font-size="12" fill="${ink}" font-weight="600" transform="rotate(-90 12 ${(T+B)/2})" text-anchor="middle">${tp('速度 (km/s)','Speed (km/s)')}</text>`;
 sv.innerHTML=g;const err=Math.sqrt(gal.reduce((s,[d,v])=>s+(v-H0*d)**2,0)/gal.length);
 $('hbr').textContent=tp(`平均誤差 ${err.toFixed(0)} km/s · 宇宙年齡 ≈ ${(9780/H0).toFixed(0)} 億年`,`Average miss ${err.toFixed(0)} km/s · age ≈ ${(978/H0).toFixed(1)} billion years`)};
const pts=[];for(let i=-3;i<=3;i++)for(let j=-2;j<=2;j++)pts.push([i+(rnd()-.5)*.5,j+(rnd()-.5)*.5]);
const draw=()=>{const[x,W,H]=fit($('hbc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);const cx=W/2,cy=H/2,u=Math.min(W/8,H/6)*sc,ink=css('--ink');
 x.fillStyle='rgba(214,150,40,.18)';x.beginPath();x.ellipse(cx,cy,u*4,u*3,0,0,7);x.fill();
 const o=me>=0?pts[me]:[0,0];
 pts.forEach((p,i)=>{const X=cx+p[0]*u,Y=cy+p[1]*u;if(me>=0&&i!==me&&sc>1.02){const dx=(p[0]-o[0]),dy=(p[1]-o[1]);P.arrow(x,0,X,Y,X+dx*14,Y+dy*14,css('--mo'),1.8)}
  x.fillStyle=i===me?'#d1495b':'#7a4b2a';x.beginPath();x.arc(X,Y,i===me?8:6,0,7);x.fill()});
 x.fillStyle=ink;x.font='600 12px "Noto Sans TC",Archivo';x.textAlign='left';x.fillText(me<0?tp('點一顆葡萄乾','Tap a raisin'):tp('紅色 = 你的星系；箭頭 = 其他星系相對於你的運動','Red = your galaxy; arrows = how others move relative to you'),10,18)};
$('hbc').addEventListener('pointerdown',e=>{const rc=$('hbc').getBoundingClientRect(),cx=rc.width/2,cy=rc.height/2,u=Math.min(rc.width/8,rc.height/6)*sc;let best=-1,bd=1e9;pts.forEach((p,i)=>{const d=Math.hypot(cx+p[0]*u-(e.clientX-rc.left),cy+p[1]*u-(e.clientY-rc.top));if(d<bd){bd=d;best=i}});if(bd<30){if(me>=0&&best!==me)moved++;me=best;if(moved>=1&&sc>1.02)P.reveal('hb1');draw()}});
P.gate('hbgo',[],()=>t('讓麵團膨脹','Let the dough rise'));
$('hbgo').onclick=()=>{stop();sc=1;stop=P.run(dt=>{sc+=dt*.25;draw();if(sc>=1.6){P.reveal('hb2');if(moved>=1)P.reveal('hb1');return false}})};
P.slider('hbh',v=>v+' km/s/Mpc',v=>{H0=v;chart()});
P.pred('hb1',{c:1,o:[['其他星系都在靠近','All the other galaxies approaching'],['其他星系也都在遠離，越遠越快','All the others receding too, faster the farther they are'],['只有一半在遠離','Only half of them receding']],f:[['讓麵團膨脹，點不同的葡萄乾看看。','Let the dough rise, then tap different raisins.'],['讓麵團膨脹，點兩顆不同的葡萄乾驗證。','Let the dough rise and tap two different raisins to check.'],['讓麵團膨脹，點不同的葡萄乾看看。','Let the dough rise, then tap different raisins.']]});
P.pred('hb2',{c:0,o:[['所有星系會擠在一起，宇宙有一個開始','All the galaxies crowd together: the universe had a beginning'],['什麼都不會改變','Nothing changes'],['星系會往反方向散開','The galaxies spread out in the other direction']],f:[['膨脹倒過來就是收縮。看實驗一的直線：距離為 0 的時候是什麼時候？','Expansion in reverse is contraction. On the Experiment 1 line, when was the distance zero?'],['如果現在在膨脹，過去一定比較小。','If it\'s expanding now, it must have been smaller before.'],['倒過來會讓距離變小，不是變大。','Reversing makes distances shrink, not grow.']]});
P.num('hb3',7000,['對。v = 70 × 100 = 7,000 km/s。','Right. v = 70 × 100 = 7,000 km/s.'],['提示：v = H₀ × d。','Hint: v = H₀ × d.'],50);
P.num('hb4',300,['對。d = v/H₀ = 21,000 ÷ 70 = 300 Mpc，大約 10 億光年。','Right. d = v/H₀ = 21,000 ÷ 70 = 300 Mpc, about a billion light-years.'],['提示：d = v ÷ H₀。','Hint: d = v ÷ H₀.'],3);
P.pred('hb5',{now:1,c:1,o:[['是，所以所有星系都離開我們','Yes, that\'s why everything recedes from us'],['不是，從任何一個星系看出去都一樣','No; from any galaxy, the view would be the same'],['不是，宇宙的中心在太陽','No; the center is the Sun']],f:[['點不同的葡萄乾試試：每一顆都會覺得自己是中心。','Try tapping different raisins: each one sees itself as the center.'],['對。空間均勻地膨脹，沒有特別的中心。','Right. Space expands evenly, with no special center.'],['太陽只是銀河系裡的一顆普通恆星。','The Sun is just an ordinary star in the Milky Way.']]});
P.watch($('hbc'),draw);new ResizeObserver(chart).observe($('hbs').parentElement);P.onLang(chart);
}});}
