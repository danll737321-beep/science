{const b=P.b;
P.reg('clausius',{html:P.build('clausius',{
 title:['克勞修斯：熵，熱流動的方向','Clausius: entropy, the direction heat flows'],
 lede:['能量守恆說能量不會消失，但它沒說熱要往哪裡流。熱咖啡放著會變涼，涼的咖啡卻從來不會自己變熱，即使這樣也完全符合能量守恆。1850 年，克勞修斯把這個「方向」寫成了一條新的定律。','Energy conservation says energy never disappears, but it doesn\'t say which way heat flows. Hot coffee cools down, yet cool coffee never heats itself up, even though that wouldn\'t break energy conservation. In 1850 Rudolf Clausius wrote that direction into a new law.'],
 old:{h:['能量守恆就說明了一切','Energy conservation explains everything'],p:[['焦耳和亥姆霍茲證明了能量守恆之後，很多人認為熱的規律已經完整了：能量的總和不變，就夠了。','Once Joule and Helmholtz established energy conservation, many thought the laws of heat were complete: the total energy stays the same, and that\'s that.']]},
 con:{h:['能量守恆允許、但從來沒發生過的事','Things energy conservation allows but that never happen'],
  p:[['一杯 20°C 的水，自己分成一半 30°C、一半 10°C：能量總和不變，可是從來沒有人看過。掉到地上的球，地面的熱自己聚起來把球彈回原來的高度：能量也守恆，也從來沒發生過。','A glass of 20°C water spontaneously splitting into a 30°C half and a 10°C half: total energy unchanged, never seen. A dropped ball, with heat in the floor gathering itself to bounce the ball back to its starting height: energy conserved, never happens.'],
   ['所以一定還有另一條規則在決定「方向」。後來波茲曼用機率解釋了它：微觀的粒子亂動，「平均分散」的排法遠遠比「聚在一起」的排法多。','So another rule must decide the direction. Boltzmann later explained it with probability: particles move randomly, and there are vastly more ways to be spread out than to be bunched together.']]},
 exps:[{h:['實驗：讓粒子自己亂跑','Experiment: let particles wander at random'],
  intro:[['盒子分成左右兩半，中間有開口。一開始所有粒子都在左邊。每個粒子隨機亂跑，下面的圖記錄左邊有幾個粒子。','A box is split into two halves with an opening between them. All the particles start on the left. Each wanders at random, and the graph tracks how many are on the left.']],
  preds:[['cl1','預測 A：100 個粒子跑一段時間之後，左邊大約有幾個？','Prediction A: after 100 particles have wandered a while, about how many are on the left?'],['cl2','預測 B：等很久之後，100 個粒子會不會自己全部跑回左邊？','Prediction B: if you wait a long time, will all 100 particles wander back to the left on their own?']],
  sim:`<div class="ctrl"><span>${b('粒子數','Particles')}</span><div class="seg" id="cln"></div><button class="pri" id="clgo"></button></div><div class="fig"><canvas id="clc"></canvas></div><div class="fig" style="min-height:150px"><canvas id="clg"></canvas></div><p class="read" id="clr" style="white-space:normal"></p>`}],
 idea:{h:['熵：系統會自己走向「排法最多」的狀態','Entropy: a system drifts toward the state with the most arrangements'],
  p:[['4 個粒子時，偶爾會全部跑回左邊（機率 1/16）。100 個粒子時，機率是 (1/2)¹⁰⁰ ≈ 10⁻³⁰，就算從宇宙誕生一直看到現在也等不到。','With 4 particles they occasionally all wander back left (chance 1/16). With 100, the chance is (1/2)¹⁰⁰ ≈ 10⁻³⁰; you wouldn\'t see it if you watched from the birth of the universe until now.'],
   ['熱從高溫流到低溫也是一樣：快的分子和慢的分子互相碰撞，能量平均分散的排法遠遠比較多。所以方向不是能量決定的，是機率決定的。','Heat flowing from hot to cold is the same story: fast and slow molecules collide, and evenly shared energy has overwhelmingly more arrangements. So the direction isn\'t set by energy but by probability.']],
  key:['ΔS ≥ 0','熱力學第二定律：一個孤立系統的熵（亂度）只會增加或不變，不會自己減少。','The second law of thermodynamics: the entropy (disorder) of an isolated system only increases or stays the same; it never decreases on its own.'],
  after:[['這也解釋了卡諾的上限：要讓熵不減少，熱機就一定要把一部分熱排到低溫處。','This also explains Carnot\'s limit: to keep entropy from decreasing, an engine must dump some heat to the cold side.']]},
 adv:[['熱流動時熵怎麼變','How entropy changes when heat flows',[
   ['克勞修斯定義：在溫度 T 加入熱 Q，熵增加 ΔS = Q/T。熱 Q 從高溫 T_h 流到低溫 T_c：','Clausius defined: adding heat Q at temperature T increases entropy by ΔS = Q/T. When heat Q flows from T_h to T_c:'],
   '=ΔS = Q/T_c − Q/T_h > 0　（因為 because T_c < T_h）',
   ['反過來流，ΔS 就是負的，違反第二定律。','The reverse flow would give a negative ΔS, violating the second law.']]],
  ['波茲曼的公式','Boltzmann\'s formula',[
   '=S = k · ln W',
   ['W 是微觀上有幾種排法。N 個粒子剛好一半在左邊的排法數，遠遠大於全部在左邊（只有 1 種）。這條公式刻在波茲曼的墓碑上。','W is the number of microscopic arrangements. The number of ways to have exactly half the particles on the left vastly exceeds the single way to have them all on the left. The formula is carved on Boltzmann\'s gravestone.']]]],
 apply:{h:['用機率和熵解題','Solve with probability and entropy'],q:[
  ['n','cl3','1. 4 個粒子隨機分在左右兩邊，全部都在左邊的機率是多少？（用小數）','1. Four particles are randomly split between two halves. What is the chance all four are on the left? (as a decimal)',''],
  ['n','cl4','2. 1,000 J 的熱從 500 K 流到 250 K。總熵增加多少 J/K？','2. 1,000 J of heat flows from 500 K to 250 K. By how much does the total entropy increase, in J/K?','J/K'],
  ['p','cl5','3. 冰塊放在溫暖的房間裡融化。整體的熵？','3. An ice cube melts in a warm room. The total entropy?']]},
 pencil:{h:['4. 拿紙筆：畫出一杯熱水放進冷房間後，分子在 0 分鐘和 30 分鐘時的樣子','4. Pencil and paper: sketch the molecules of hot water placed in a cold room, at 0 minutes and at 30 minutes'],p:['用箭頭長短表示分子的速度。','Use arrow length to show molecular speed.'],
  ans:`<p>${b('0 分鐘：杯子裡的分子箭頭長（快），房間的空氣分子箭頭短（慢）。30 分鐘：兩邊的箭頭差不多長，杯子裡的分子變慢，周圍的空氣分子稍微變快。能量沒有少，只是平均分散開了。','At 0 minutes: long arrows (fast) in the cup, short arrows (slow) in the room\'s air. At 30 minutes: arrows about the same everywhere; the water molecules slowed and nearby air molecules sped up a little. No energy was lost; it just spread out evenly.')}</p>`},
 next:['熵和溫度都跟「分子怎麼動」有關。那溫度本身，到底是分子的什麼？','Entropy and temperature both depend on how molecules move. So what exactly is temperature, at the level of molecules?','馬克士威和波茲曼把氣體想成一大群亂飛的小球，算出了答案。','Maxwell and Boltzmann pictured a gas as a swarm of tiny flying balls and worked out the answer.'],
 std:['表現預期 HS-PS3-4（溫度不同的兩個物體接觸，熱能會分布得更均勻：熱力學第二定律）、HS-PS3-2（能量可以用微觀粒子的運動來解釋）。科學實踐：SEP 2 建立與使用模型、SEP 5 數學與計算思維。跨科概念：能量與物質；系統與系統模型。','Performance expectations HS-PS3-4 (combining components at different temperatures yields a more uniform energy distribution: the second law of thermodynamics), HS-PS3-2 (energy explained by the motion of microscopic particles). Practices: SEP 2 Developing and Using Models, SEP 5 Mathematical and Computational Thinking. Crosscutting concepts: Energy and Matter; Systems and System Models.']
}),init(){
const {t,tp,css,fit,$}=P;let N=100,ps=[],hist=[],stop=()=>{},tt=0,allBack=0;
const reset=()=>{ps=Array.from({length:N},()=>({x:Math.random()*.48,y:Math.random(),vx:Math.random()-.5,vy:Math.random()-.5}));hist=[];tt=0;allBack=0;draw();graph()};
const left=()=>ps.filter(p=>p.x<.5).length;
const draw=()=>{const[x,W,H]=fit($('clc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const bx=20,by=14,bw=W-40,bh=H-28,ink=css('--ink');x.strokeStyle=ink;x.lineWidth=2;x.strokeRect(bx,by,bw,bh);
 x.beginPath();x.moveTo(bx+bw/2,by);x.lineTo(bx+bw/2,by+bh*.38);x.moveTo(bx+bw/2,by+bh*.62);x.lineTo(bx+bw/2,by+bh);x.stroke();
 const r=N>50?4:7;ps.forEach(p=>{x.fillStyle=p.x<.5?'#d1495b':'#2160d8';x.beginPath();x.arc(bx+p.x*bw,by+p.y*bh,r,0,7);x.fill()});
 const L=left();x.fillStyle=ink;x.font='700 14px Archivo';x.textAlign='center';x.fillText(tp(`左 ${L}`,`Left ${L}`),bx+bw*.25,by+bh-8);x.fillText(tp(`右 ${N-L}`,`Right ${N-L}`),bx+bw*.75,by+bh-8)};
const graph=()=>{const[x,W,H]=fit($('clg'));if(W<10)return;x.clearRect(0,0,W,H);const L=40,R=W-10,T=10,B=H-24,ink=css('--ink');
 x.strokeStyle=css('--mute');x.setLineDash([4,4]);x.beginPath();x.moveTo(L,(T+B)/2);x.lineTo(R,(T+B)/2);x.stroke();x.setLineDash([]);
 x.fillStyle=ink;x.font='11px Archivo';x.textAlign='right';x.fillText(N,L-6,T+8);x.fillText(N/2,L-6,(T+B)/2+4);x.fillText(0,L-6,B);
 x.strokeStyle=css('--cu');x.lineWidth=2;x.beginPath();hist.forEach((v,i)=>{const X=L+(R-L)*i/600,Y=B-(B-T)*v/N;i?x.lineTo(X,Y):x.moveTo(X,Y)});x.stroke();
 x.textAlign='left';x.fillText(tp('左邊的粒子數（時間 →）','Particles on the left (time →)'),L+4,H-6)};
const info=()=>{const pr=Math.pow(.5,N);$('clr').textContent=tp(`全部同時在左邊的機率 = (1/2)^${N} = ${pr<1e-4?pr.toExponential(1):pr.toFixed(4)}　·　這一輪全部回到左邊的次數：${allBack}`,`Chance all are on the left at once = (1/2)^${N} = ${pr<1e-4?pr.toExponential(1):pr.toFixed(4)}   ·   Times all returned left this run: ${allBack}`)};
P.seg('cln',[['4','4 個','4'],['20','20 個','20'],['100','100 個','100']],()=>String(N),v=>{N=+v;stop();reset();info()});
P.gate('clgo',[],()=>t('開始（全部從左邊出發）','Start (all on the left)'));
$('clgo').onclick=()=>{stop();reset();let was=true;stop=P.run(dt=>{tt+=dt;const sp=.6;
 ps.forEach(p=>{p.vx+=(Math.random()-.5)*.8;p.vy+=(Math.random()-.5)*.8;const m=Math.hypot(p.vx,p.vy);p.vx*=sp/m;p.vy*=sp/m;let nx=p.x+p.vx*dt,ny=p.y+p.vy*dt;
  if(ny<0||ny>1){p.vy*=-1;ny=Math.max(0,Math.min(1,ny))}if(nx<0||nx>1){p.vx*=-1;nx=Math.max(0,Math.min(1,nx))}
  if((p.x<.5)!==(nx<.5)&&(ny<.38||ny>.62)){p.vx*=-1;nx=p.x}p.x=nx;p.y=ny});
 const L=left();if(L===N&&!was)allBack++;was=L===N;hist.push(L);if(hist.length>600)hist.shift();
 if(tt>6&&N===100){P.reveal('cl1')}if(tt>12&&N===100)P.reveal('cl2');
 if(document.querySelector('main.lesson[data-id=clausius]')?.hidden)return;draw();graph();info();if(tt>60)return false})};
P.pred('cl1',{c:1,o:[['還是 100 個','Still 100'],['大約 50 個','About 50'],['大約 0 個','About 0']],f:[['選 100 個，開始看看。','Choose 100 and start.'],['選 100 個，開始驗證。','Choose 100 and start to check.'],['選 100 個，開始看看。','Choose 100 and start.']]});
P.pred('cl2',{c:1,o:[['會，等夠久就會','Yes, given enough time'],['理論上可能，但實際上永遠等不到','Possible in principle, but you\'d never see it'],['不可能，違反能量守恆','Impossible: it breaks energy conservation']],f:[['看下面的機率。100 個粒子要等多久？','Look at the probability below. How long would 100 particles take?'],['比較 4 個和 100 個的機率，看看差多少。','Compare the probability for 4 particles and for 100.'],['能量並沒有改變。是什麼讓它不會發生？','Energy wouldn\'t change. So what stops it?']]});
P.num('cl3',.0625,['對。(1/2)⁴ = 1/16 = 0.0625。用 4 個粒子跑一下，偶爾真的會看到。','Right. (1/2)⁴ = 1/16 = 0.0625. Run 4 particles and you\'ll occasionally see it.'],['提示：每個粒子在左邊的機率是 1/2，4 個都在左邊要相乘。','Hint: each particle has a 1/2 chance of being left; multiply for all four.'],.001);
P.num('cl4',2,['對。ΔS = 1000/250 − 1000/500 = 4 − 2 = 2 J/K，大於 0。','Right. ΔS = 1000/250 − 1000/500 = 4 − 2 = 2 J/K, greater than 0.'],['提示：低溫處得到 Q/T_c，高溫處失去 Q/T_h。','Hint: the cold side gains Q/T_c and the hot side loses Q/T_h.'],.05);
P.pred('cl5',{now:1,c:0,o:[['增加','Increases'],['減少，因為冰變成了比較有秩序的水','Decreases, since ice turns into more orderly water'],['不變','Stays the same']],f:[['對。會自己發生的過程，整體的熵一定增加。','Right. Any process that happens on its own increases total entropy.'],['冰是固體，排列比液態水更整齊。融化讓排列更亂。','Ice is a solid, more orderly than liquid water. Melting makes it less ordered.'],['熱從溫暖的房間流到冷的冰，ΔS = Q/T_冰 − Q/T_房間 > 0。','Heat flows from the warm room to the cold ice: ΔS = Q/T_ice − Q/T_room > 0.']]});
reset();info();P.watch($('clc'),draw);P.watch($('clg'),graph);P.onLang(info);
}});}
