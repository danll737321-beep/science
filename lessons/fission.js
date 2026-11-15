{const b=P.b;
P.reg('fission',{html:P.build('fission',{
 title:['核分裂：原子核裂開，質量變成能量','Nuclear Fission: a nucleus splits, and mass becomes energy'],
 lede:['1938 年 12 月，德國化學家哈恩和施特拉斯曼用中子打鈾，結果在產物裡找到了鋇，一個只有鈾一半大小的元素。逃到瑞典的物理學家邁特納和她的姪子弗里施想通了：鈾原子核裂成了兩半，而且放出了巨大的能量。','In December 1938 the German chemists Otto Hahn and Fritz Strassmann bombarded uranium with neutrons and found barium in the products, an element about half uranium\'s size. Lise Meitner, a physicist who had fled to Sweden, worked it out with her nephew Otto Frisch: the uranium nucleus had split in two, releasing enormous energy.'],
 old:{h:['原子核非常堅固，不會被打碎','Nuclei are rock-solid and can\'t be broken'],p:[['拉塞福找到原子核之後，物理學家用 α 粒子和中子去撞各種原子核，只能打掉一兩個小粒子，讓元素變成週期表上的鄰居。大家認為原子核極度穩固，不可能裂成兩大塊。','After Rutherford found the nucleus, physicists bombarded nuclei with alpha particles and neutrons and could only chip off a particle or two, turning an element into its neighbor on the periodic table. Nuclei were thought far too stable to break into two large pieces.']]},
 con:{h:['打出來的東西，比原本的小了一半','What came out was half the size'],
  p:[['哈恩是頂尖的化學家，他非常確定產物裡有鋇（56 號），而不是鈾（92 號）的鄰居。邁特納把原子核想成一滴水：中子讓它晃動、拉長，最後像水滴一樣斷成兩滴。','Hahn was a top chemist and was certain the product was barium (element 56), not a neighbor of uranium (92). Meitner pictured the nucleus as a liquid drop: the neutron sets it wobbling and stretching until it pinches into two drops.'],
   ['她算了一下：裂開後的兩塊加起來，比原本的鈾輕了一點點，大約少了五分之一個質子的質量。用愛因斯坦的 E = mc²，這一點點質量變成了大約 200 MeV 的能量，是一般化學反應的一億倍左右。','She did the arithmetic: the two pieces together weighed slightly less than the original uranium, by about a fifth of a proton\'s mass. By Einstein\'s E = mc², that tiny mass became about 200 MeV of energy, roughly a hundred million times a typical chemical reaction.'],
   ['而且每次裂開還會多放出 2 到 3 個中子，可以再去打別的鈾原子核。','And each split also releases 2 or 3 more neutrons that can go on to strike other uranium nuclei.']]},
 exps:[{h:['實驗：連鎖反應','Experiment: a chain reaction'],
  intro:[['格子裡的橙色是可以分裂的鈾-235，灰色是不太會分裂的鈾-238。放入一個中子，每一次分裂放出 2 到 3 個中子。調整鈾-235 的比例，和控制棒插入的深度（控制棒會吸收中子）。','Orange cells are fissile uranium-235; gray cells are uranium-238, which rarely splits. Release one neutron; each split frees 2 or 3 more. Adjust the share of U-235 and how far the control rods are inserted (the rods absorb neutrons).']],
  preds:[['fi1','預測 A：如果平均每次分裂放出的中子，都有超過一個再去打中另一個鈾-235，中子的數量會？','Prediction A: if, on average, more than one neutron from each split goes on to split another U-235 nucleus, the number of neutrons will?'],['fi2','預測 B：核電廠的控制棒是用來做什麼的？','Prediction B: what are a power plant\'s control rods for?']],
  sim:`<div class="ctrl">${P.sl('fie','鈾-235 比例','U-235 share',10,90,5,40)}<span>${b('控制棒','Control rods')}</span><div class="seg" id="fir"></div><button class="pri" id="figo"></button></div><div class="fig"><canvas id="fic"></canvas></div><div class="bars" id="fib"></div>`}],
 idea:{h:['連鎖反應：k 決定一切','The chain reaction: everything depends on k'],
  p:[['k 是每一次分裂，平均能引發幾次下一代的分裂。k < 1，反應會慢慢熄滅；k = 1，每一代一樣多，穩定地放出能量，這就是核電廠；k > 1，數量一代一代倍增，在極短的時間內放出巨大的能量，這就是原子彈。','k is how many next-generation splits each split causes on average. With k < 1 the reaction dies out; k = 1 holds steady, releasing energy at a constant rate: a power plant; k > 1 multiplies generation after generation, releasing enormous energy almost instantly: an atomic bomb.'],
   ['核電廠的鈾-235 濃度大約只有 3–5%，物理上不可能像原子彈那樣爆炸；再用控制棒精確地把 k 維持在 1。1942 年，費米在芝加哥大學的球場看台下面，第一次做出了穩定的連鎖反應。','Power-plant uranium is only about 3–5% U-235, which physically can\'t explode like a bomb, and control rods hold k precisely at 1. In 1942 Enrico Fermi achieved the first controlled chain reaction beneath the stands of a University of Chicago stadium.']],
  key:['E = mc²','原子核分裂後總質量變少，少掉的質量 m 變成能量 E。因為 c² 非常大，一點點質量就是巨大的能量。太陽則是反過來：把小的原子核融合成大的（核融合），也會少掉一點質量。','After a split the total mass is smaller, and the missing mass m becomes energy E. Because c² is enormous, a tiny mass means huge energy. The Sun does the reverse, fusing small nuclei into larger ones (fusion), which also loses a little mass.']},
 adv:[['一次分裂的能量','The energy of one split',[
   ['鈾-235 分裂後，產物總共大約少了 0.2 u（原子質量單位）。1 u 的質量相當於 931.5 MeV：','After a U-235 split, the products total about 0.2 u (atomic mass units) less. 1 u of mass is equivalent to 931.5 MeV:'],
   '=E ≈ 0.2 × 931.5 ≈ 186 MeV ≈ 200 MeV　（燃燒一個碳原子 burning one carbon atom ≈ 4 eV）']],
  ['1 公斤鈾 vs. 1 公斤煤','A kilogram of uranium vs. a kilogram of coal',[
   '=1 kg 鈾-235 U-235：約 8 × 10¹³ J　　1 kg 煤 coal：約 3 × 10⁷ J',
   ['相差大約 270 萬倍。這也是為什麼核廢料的量很少，但必須非常小心處理：產物具有放射性，會持續放出輻射很長的時間。','A difference of about 2.7 million times. That\'s also why nuclear waste is small in volume but must be handled with great care: the products are radioactive and keep emitting radiation for a long time.']]],
  ['指數成長','Exponential growth',[
   '=第 n 代的中子數 neutrons in generation n = k^n',
   ['k = 2 時，80 代之後是 2⁸⁰ ≈ 10²⁴。每一代只要大約 10 奈秒，所以不到一微秒就全部發生。','With k = 2, after 80 generations there are 2⁸⁰ ≈ 10²⁴. Each generation takes only about 10 nanoseconds, so it\'s all over in under a microsecond.']]]],
 apply:{h:['用 E = mc² 和 k 解題','Solve with E = mc² and k'],q:[
  ['n','fi3','1. 1 公克（0.001 kg）的質量完全變成能量，是多少焦耳？用 ×10¹³ J 為單位回答。','1. If 1 gram (0.001 kg) of mass became energy entirely, how many joules is that? Answer in units of ×10¹³ J.','×10¹³ J'],
  ['n','fi4','2. 如果 k = 2，從 1 個中子開始，第 10 代有幾個中子？','2. If k = 2, starting from 1 neutron, how many neutrons are in generation 10?',''],
  ['p','fi5','3. 核電廠要穩定發電，k 要維持在多少？','3. To generate power steadily, what should a power plant keep k at?']]},
 pencil:{h:['4. 拿紙筆：畫出三代的連鎖反應','4. Pencil and paper: draw three generations of a chain reaction'],p:['每次分裂放出 2 個中子，畫成一棵樹。','Each split releases 2 neutrons; draw it as a tree.'],
  ans:`<p>${b('第 1 代：1 個中子打中 1 個鈾核，裂成兩塊並放出 2 個中子。第 2 代：2 個中子各打中一個，放出 4 個。第 3 代：8 個。每一代加倍，就是 k = 2 的指數成長。如果其中一些中子被控制棒吸收，樹就會變細，k 就會變小。','Generation 1: one neutron splits one nucleus into two pieces plus 2 neutrons. Generation 2: each of those splits another, giving 4. Generation 3: 8. Doubling each generation is exponential growth with k = 2. If control rods absorb some neutrons, the tree thins and k shrinks.')}</p>`},
 finale:`<section class="band next" id="fission-next"><div class="wrap"><span class="chip">${b('你走完了五條時間軸','You\'ve walked all five timelines')}</span>
  <h2>${b('每一個答案，都是下一個問題的起點','Every answer was the start of the next question')}</h2>
  <p>${b('從亞里斯多德「東西為什麼會掉」，到核分裂「質量變成能量」，每一步都是因為有人認真對待一個對不上的觀察：伽利略的斜坡、克卜勒的 8 弧分、冰在融化時不變的溫度、厄斯特桌上轉動的指南針、麥克生量不到的以太風、那一個彈回來的 α 粒子。物理沒有結束：暗物質、暗能量、量子重力，都是現在還對不上的觀察。','From Aristotle\'s "why do things fall" to fission\'s "mass becomes energy," every step came from someone taking a mismatched observation seriously: Galileo\'s ramp, Kepler\'s 8 arcminutes, the temperature of melting ice, the compass turning on Ørsted\'s table, Michelson\'s missing ether wind, the one alpha particle that bounced back. Physics isn\'t finished: dark matter, dark energy, and quantum gravity are today\'s mismatched observations.')}</p>
  <a class="btn pri" href="#home">${b('回到時間軸','Back to the timeline')}</a></div></section>`,
 std:['表現預期 HS-PS1-8（建立模型說明核分裂、核融合和放射性衰變過程中，原子核組成的變化與釋放的能量）、HS-PS3-1。科學實踐：SEP 2 建立與使用模型、SEP 5 數學與計算思維。跨科概念：能量與物質；尺度、比例與數量。','Performance expectations HS-PS1-8 (develop models to illustrate the changes in the composition of the nucleus and the energy released during fission, fusion, and radioactive decay), HS-PS3-1. Practices: SEP 2 Developing and Using Models, SEP 5 Mathematical and Computational Thinking. Crosscutting concepts: Energy and Matter; Scale, Proportion, and Quantity.']
}),init(){
const {t,tp,css,fit,$}=P;let en=40,rod='out',grid=[],gens=[],flash=[],stop=()=>{};const C=24,R=12,ra={out:0,half:.3,in:.6};
const mk=()=>{grid=Array.from({length:C*R},()=>Math.random()<en/100?1:0);gens=[];flash=[]};
const draw=()=>{const[x,W,H]=fit($('fic'));if(W<10||H<120)return;x.clearRect(0,0,W,H);const cw=W/C,ch=(H-10)/R;
 grid.forEach((g,i)=>{const cx=(i%C+.5)*cw,cy=(Math.floor(i/C)+.5)*ch+5;x.fillStyle=g===1?'#e8893a':g===2?'rgba(128,128,128,.15)':'#8a96a3';x.beginPath();x.arc(cx,cy,Math.min(cw,ch)*.32,0,7);x.fill()});
 flash.forEach(i=>{const cx=(i%C+.5)*cw,cy=(Math.floor(i/C)+.5)*ch+5;x.fillStyle='rgba(255,220,60,.85)';x.beginPath();x.arc(cx,cy,Math.min(cw,ch)*.5,0,7);x.fill()});
 if(rod!=='out'){x.fillStyle='rgba(20,32,43,.55)';const n=rod==='half'?3:5;for(let k=1;k<=n;k++){const X=W*k/(n+1);x.fillRect(X-4,0,8,rod==='half'?H*.5:H*.9)}}};
const bars=()=>{const k=2.5*en/100*(1-ra[rod]);const mx=Math.max(1,...gens);$('fib').innerHTML=`<p class="verdict ${k<.95?'':k<=1.05?'ok':'no'}">${t(`預估 k ≈ ${k.toFixed(2)}：${k<.95?'會慢慢熄滅':k<=1.05?'大約穩定':'會快速倍增'}`,`Estimated k ≈ ${k.toFixed(2)}: ${k<.95?'dies out':k<=1.05?'roughly steady':'multiplies rapidly'}`)}</p>`+gens.map((g,i)=>`<div class="br"><span>${t(`第 ${i+1} 代`,`Gen ${i+1}`)}</span><div class="tr"><div class="fl" style="width:${Math.log(g+1)/Math.log(mx+1)*100}%;background:var(--cu)"></div></div><span class="v">${g} ${t('個中子','neutrons')}</span></div>`).join('')};
P.slider('fie',v=>v+'%',v=>{en=v;stop();mk();draw();bars()});
P.seg('fir',[['out','拔出','Out'],['half','插一半','Half in'],['in','全插入','Fully in']],()=>rod,v=>{rod=v;if(v!=='out')P.reveal('fi2');stop();mk();draw();bars()});
P.gate('figo',[],()=>t('放入一個中子','Release one neutron'));
$('figo').onclick=()=>{stop();mk();let n=1,acc=0;stop=P.run(dt=>{acc+=dt;if(acc<.55)return;acc=0;let nn=0;flash=[];
 for(let q=0;q<Math.min(n,3000);q++){if(Math.random()<ra[rod])continue;const i=Math.floor(Math.random()*C*R);if(grid[i]===1){grid[i]=2;flash.push(i);nn+=Math.random()<.5?2:3}}
 gens.push(nn);n=nn;draw();bars();if(gens.length>=4&&gens[gens.length-1]>gens[0]*3)P.reveal('fi1');
 if(n===0||gens.length>=12||!grid.includes(1)){setTimeout(()=>{flash=[];draw()},500);return false}})};
P.pred('fi1',{c:1,o:[['保持不變','Stay the same'],['越來越多，而且是倍增','Keep growing, multiplying each time'],['慢慢變少','Slowly decrease']],f:[['把鈾-235 比例調高、控制棒拔出，放入中子看看。','Raise the U-235 share, pull the rods out, and release a neutron.'],['把鈾-235 比例調高、控制棒拔出，放入中子驗證。','Raise the U-235 share, pull the rods out, and release a neutron to check.'],['把鈾-235 比例調高、控制棒拔出，放入中子看看。','Raise the U-235 share, pull the rods out, and release a neutron.']]});
P.pred('fi2',{c:0,o:[['吸收多餘的中子，讓 k 維持在 1','Absorb extra neutrons to hold k at 1'],['提供更多中子，讓反應更快','Supply more neutrons to speed things up'],['冷卻反應爐','Cool the reactor']],f:[['把控制棒插一半或全插入，看看 k 的變化。','Insert the rods halfway or fully and watch k change.'],['把控制棒插進去看看，k 是變大還是變小？','Insert the rods. Does k go up or down?'],['冷卻是冷卻水的工作。把控制棒插進去，看 k 怎麼變。','Cooling is the coolant\'s job. Insert the rods and see what happens to k.']]});
P.num('fi3',9,['對。E = 0.001 × (3×10⁸)² = 9 × 10¹³ J。','Right. E = 0.001 × (3×10⁸)² = 9 × 10¹³ J.'],['提示：E = mc²，c = 3 × 10⁸ m/s。','Hint: E = mc² with c = 3 × 10⁸ m/s.'],.1);
P.num('fi4',1024,['對。2¹⁰ = 1,024。再 10 代就超過一百萬。','Right. 2¹⁰ = 1,024. Ten more generations and it\'s over a million.'],['提示：每一代乘以 2，總共乘 10 次。','Hint: multiply by 2 each generation, ten times.'],.5);
P.pred('fi5',{now:1,c:1,o:[['k = 0','k = 0'],['k = 1','k = 1'],['k = 2','k = 2']],f:[['k = 0 反應會立刻停止，沒有電。','k = 0 stops the reaction at once: no power.'],['對。每一代的分裂數一樣，能量穩定地放出。','Right. Each generation has the same number of splits, so energy flows steadily.'],['k = 2 會失控倍增。','k = 2 multiplies out of control.']]});
mk();bars();P.watch($('fic'),draw);P.onLang(bars);
}});}
