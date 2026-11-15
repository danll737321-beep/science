{const b=P.b;
P.reg('volta',{html:P.build('volta',{
 title:['伏打電池：讓電一直流','The Voltaic Pile: making electricity flow'],
 lede:['靜電可以放出很大的火花，但一下子就沒了。1800 年，伏打把鋅片、銅片和鹽水紙片疊成一根柱子，第一次得到持續不斷的電流。今天每一顆電池，都是從這根柱子來的。','Static electricity gives big sparks, but they\'re over in an instant. In 1800 Alessandro Volta stacked zinc, copper, and brine-soaked paper into a column and produced the first steady electric current. Every battery today descends from that pile.'],
 old:{h:['伽伐尼：電來自青蛙身體','Galvani: electricity comes from the frog\'s body'],
  p:[['1791 年，義大利醫生伽伐尼發現：用兩種不同的金屬同時碰觸死青蛙的腿，青蛙腿會抽動。他認為電是生物身體裡產生的，叫做「動物電」。','In 1791 the Italian physician Luigi Galvani found that touching a dead frog\'s leg with two different metals at once made it twitch. He concluded that living bodies produce electricity, which he called "animal electricity."']]},
 con:{h:['關鍵不是青蛙，是兩種不同的金屬','The key wasn\'t the frog, it was two different metals'],
  p:[['伏打注意到：如果兩根都用同一種金屬，青蛙腿就不會動。他推論：電是兩種不同金屬接觸潮濕的東西時產生的，青蛙腿只是一個很靈敏的「電流偵測器」。','Volta noticed that with two pieces of the same metal, the leg didn\'t move. He reasoned that the electricity came from two different metals touching something moist, and the frog leg was just a very sensitive current detector.'],
   ['為了證明，他把青蛙拿掉，改用鹽水紙片夾在鋅片和銅片之間，一層一層疊上去。疊越多層，電越強，而且會一直流，不會像萊頓瓶那樣放一次就沒了。','To prove it, he removed the frog entirely, putting brine-soaked paper between zinc and copper discs and stacking layer after layer. The more layers, the stronger the effect, and it kept flowing instead of discharging once like a Leyden jar.'],
   ['1827 年，德國老師歐姆用電池和不同長度的導線做實驗，找出了電壓、電流和電阻之間的關係。','In 1827 the German schoolteacher Georg Ohm experimented with batteries and wires of different lengths and found how voltage, current, and resistance relate.']]},
 exps:[{h:['實驗：電池、燈泡和電流','Experiment: batteries, a bulb, and current'],
  intro:[['每一顆電池 1.5 V。改變電池數量和電阻，看電流（A）怎麼變。黃色的點代表移動的電荷，跑得越快，電流越大。','Each cell is 1.5 V. Change the number of cells and the resistance, and watch the current (A). The yellow dots are moving charges; the faster they go, the bigger the current.']],
  preds:[['vo1','預測 A：電阻不變，電池從 1 顆變 2 顆，電流變成？','Prediction A: same resistance, cells go from 1 to 2. The current becomes?'],['vo2','預測 B：電池不變，電阻變 2 倍，電流變成？','Prediction B: same cells, resistance doubled. The current becomes?']],
  sim:`<div class="fig"><canvas id="voc"></canvas></div><div class="ctrl"><span>${b('電池','Cells')}</span><div class="seg" id="von"></div>${P.sl('voR','電阻','Resistance',2,30,1,10)}</div><div class="bars" id="vob"></div><div id="votbl"></div>`}],
 idea:{h:['歐姆定律：V = IR','Ohm\'s law: V = IR'],
  p:[['電壓 V 像是推動電荷的「壓力」，電流 I 是每秒流過的電荷量，電阻 R 是電路阻擋電流的程度。','Voltage V is like the pressure pushing charge; current I is how much charge flows per second; resistance R is how much the circuit holds the current back.'],
   ['表格裡，電壓 ÷ 電流永遠等於電阻。電池加倍，電流加倍；電阻加倍，電流減半。','In the table, voltage ÷ current always equals the resistance. Double the cells, double the current; double the resistance, half the current.']],
  key:['V = I × R','電壓（伏特 V）= 電流（安培 A）× 電阻（歐姆 Ω）。燈泡的功率 P = V × I（瓦特 W），代表每秒把多少電能變成光和熱。','Voltage (volts) = current (amps) × resistance (ohms). A bulb\'s power P = V × I (watts) is how much electrical energy per second becomes light and heat.']},
 adv:[['功率的三種寫法','Three ways to write power',[
   ['P = VI，再用 V = IR 代入：','P = VI; substitute V = IR:'],
   '=P = VI = I²R = V²/R',
   ['電線的電阻固定時，電流變 2 倍，發熱變 4 倍。所以遠距離輸電要用高電壓、小電流（下一個節點會看到怎麼升壓）。','For a wire with fixed resistance, double the current and the heating quadruples. That\'s why long-distance power lines use high voltage and low current (you\'ll see how voltage is stepped up two nodes from now).']]],
  ['串聯和並聯','Series and parallel',[
   '=串聯 series：R = R₁ + R₂　　並聯 parallel：1/R = 1/R₁ + 1/R₂',
   ['家裡的插座是並聯：每個電器都直接接到 120 V，開一個不會影響另一個。','Household outlets are wired in parallel: each appliance gets the full 120 V, and switching one on doesn\'t affect another.']]]],
 apply:{h:['用歐姆定律解題','Solve with Ohm\'s law'],q:[
  ['n','vo3','1. 一顆 9 V 電池接上 30 Ω 的電阻，電流是多少？','1. A 9 V battery is connected to a 30 Ω resistor. What is the current?','A'],
  ['n','vo4','2. 上一題的電阻消耗的功率是多少？','2. What power does that resistor use?','W'],
  ['p','vo5','3. 回頭看伽伐尼的實驗，青蛙腿為什麼會抽動？','3. Looking back at Galvani\'s experiment, why did the frog leg twitch?']]},
 pencil:{h:['4. 拿紙筆：畫出一個有電池、開關、燈泡和安培計的電路圖','4. Pencil and paper: draw a circuit diagram with a battery, a switch, a bulb, and an ammeter'],p:['用標準符號，並用箭頭標出電流方向。','Use standard symbols and mark the current direction with an arrow.'],
  ans:`<div class="two"><svg class="ill" viewBox="0 0 320 190" role="img" aria-label="Circuit diagram"><rect width="320" height="190" rx="14" fill="var(--panel)"/>
   <g stroke="var(--ink)" stroke-width="2.5" fill="none"><path d="M60 40 H260 V150 H60 Z"/></g><rect x="50" y="80" width="20" height="30" fill="var(--panel)"/>
   <g stroke="var(--ink)" stroke-width="3"><line x1="44" y1="86" x2="76" y2="86"/><line x1="52" y1="96" x2="68" y2="96"/></g>
   <circle cx="160" cy="40" r="14" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/><path d="M150 30 L170 50 M170 30 L150 50" stroke="var(--ink)" stroke-width="2"/>
   <circle cx="260" cy="95" r="13" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/><text x="254" y="100" font-size="13" font-weight="700" fill="var(--ink)">A</text>
   <rect x="140" y="140" width="40" height="20" fill="var(--panel)"/><line x1="140" y1="150" x2="160" y2="138" stroke="var(--ink)" stroke-width="2.5"/>
   <path d="M100 34 L112 40 L100 46" fill="var(--cu)"/><text x="80" y="76" font-size="11" fill="var(--mute)">+</text>
   <text x="134" y="22" font-size="11" fill="var(--mute)">燈泡 bulb</text><text x="276" y="99" font-size="11" fill="var(--mute)">安培計</text><text x="136" y="178" font-size="11" fill="var(--mute)">開關 switch</text></svg>
   <div><p>${b('電池用一長一短兩條線（長的是正極），燈泡用圓圈加叉，安培計用圓圈加 A，要串聯在電路裡。電流從電池正極出發，繞一圈回到負極。','A battery is a long and a short line (long is positive); a bulb is a circle with an X; an ammeter is a circle with A, connected in series. Current leaves the positive terminal and loops back to the negative.')}</p></div></div>`},
 next:['電流可以一直流了。指南針放在通電的電線旁邊，會發生什麼事？','Current can now flow continuously. What happens to a compass placed next to a wire carrying current?','1820 年，一位教授在上課示範時，意外看到了答案。','In 1820 a professor saw the answer by accident during a classroom demonstration.'],
 std:['表現預期 HS-PS3-1（建立計算模型，計算系統中能量的變化）、HS-PS3-3（設計、建造並改良能把一種能量轉換成另一種的裝置：電池把化學能轉成電能）。科學實踐：SEP 4 分析與詮釋數據、SEP 5 數學與計算思維。跨科概念：能量與物質。','Performance expectations HS-PS3-1 (computational model of energy change in a system), HS-PS3-3 (design, build, and refine a device that converts one form of energy into another: a battery turns chemical energy into electrical energy). Practices: SEP 4 Analyzing and Interpreting Data, SEP 5 Mathematical and Computational Thinking. Crosscutting concepts: Energy and Matter.']
}),init(){
const {t,tp,css,fit,$}=P;
let n=1,R=10,ph=0,rows=[],n0=1,R0=10;const I=()=>n*1.5/R;
const draw=()=>{const[x,W,H]=fit($('voc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const l=W*.12,r=W*.88,tp_=40,bt=H-40,ink=css('--ink'),i=I(),p=n*1.5*i;
 x.strokeStyle=ink;x.lineWidth=3;x.strokeRect(l,tp_,r-l,bt-tp_);
 const cy=(tp_+bt)/2,ch=Math.min(26,(bt-tp_-20)/n/1.4);x.fillStyle=css('--panel');x.fillRect(l-14,cy-n*ch*.75,28,n*ch*1.5);
 for(let k=0;k<n;k++){const y=cy-n*ch*.75+k*ch*1.5+ch*.4;x.lineWidth=3;x.beginPath();x.moveTo(l-14,y);x.lineTo(l+14,y);x.stroke();x.lineWidth=5;x.beginPath();x.moveTo(l-7,y+ch*.6);x.lineTo(l+7,y+ch*.6);x.stroke()}
 x.fillStyle=ink;x.font='700 13px Archivo';x.textAlign='right';x.fillText(`${(n*1.5).toFixed(1)} V`,l-20,cy+5);
 const bx=r,by=cy,glow=Math.min(1,p/2);x.fillStyle=`rgba(255,200,40,${.15+glow*.85})`;x.beginPath();x.arc(bx,by,18+glow*26,0,7);x.fill();
 x.fillStyle=css('--panel');x.beginPath();x.arc(bx,by,16,0,7);x.fill();x.strokeStyle=ink;x.lineWidth=2.5;x.stroke();x.beginPath();x.moveTo(bx-10,by-10);x.lineTo(bx+10,by+10);x.moveTo(bx+10,by-10);x.lineTo(bx-10,by+10);x.stroke();
 x.textAlign='left';x.fillText(`${R} Ω`,bx+26,by-26);
 const per=2*(r-l)+2*(bt-tp_);x.fillStyle='#e8b923';
 for(let k=0;k<24;k++){let s=((k/24)*per+ph)%per,X,Y;if(s<r-l){X=l+s;Y=tp_}else if((s-=r-l)<bt-tp_){X=r;Y=tp_+s}else if((s-=bt-tp_)<r-l){X=r-s;Y=bt}else{s-=r-l;X=l;Y=bt-s}
  if(X===l&&Math.abs(Y-cy)<n*ch*.75)continue;x.beginPath();x.arc(X,Y,4,0,7);x.fill()}};
const bars=()=>{const i=I(),v=n*1.5;$('vob').innerHTML=[[t('電壓 V','Voltage V'),v,6,'V','var(--cu)'],[t('電流 I','Current I'),i,3,'A','var(--mo)'],[t('功率 P','Power P'),v*i,9,'W','#e8b923']].map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${Math.min(100,r[1]/r[2]*100)}%;background:${r[4]}"></div></div><span class="v">${r[1].toFixed(r[3]==='A'?3:2)} ${r[3]}</span></div>`).join('')};
const log=()=>{const k=`${n}-${R}`;if(!rows.find(r=>r.k===k)){rows.push({k,v:n*1.5,R,i:I()});if(rows.length>8)rows.shift()}
 $('votbl').innerHTML=`<div class="scroll"><table><thead><tr><th>V</th><th>R (Ω)</th><th>I (A)</th><th>V ÷ I</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r.v.toFixed(1)}</td><td>${r.R}</td><td>${r.i.toFixed(3)}</td><td>${(r.v/r.i).toFixed(1)}</td></tr>`).join('')}</tbody></table></div>`};
P.seg('von',[['1','1 顆','1 cell'],['2','2 顆','2 cells'],['3','3 顆','3 cells'],['4','4 顆','4 cells']],()=>String(n),v=>{n=+v;if(n===2*n0||n0===2*n)P.reveal('vo1');n0=n;bars();log();draw()});
P.slider('voR',v=>v+' Ω',v=>{if(v===2*R0||R0===2*v)P.reveal('vo2');R=v;bars();log();draw()});
$('voR').addEventListener('change',()=>{R0=R});
P.run(dt=>{ph+=dt*I()*120;if(!$('voc').isConnected)return false;if(document.querySelector('main.lesson[data-id=volta]')?.hidden)return;draw()});
P.pred('vo1',{c:1,o:[['不變','Unchanged'],['變 2 倍','Doubles'],['變一半','Halves']],f:[['把電池從 1 顆改成 2 顆，看電流。','Switch from 1 cell to 2 and watch the current.'],['改成 2 顆驗證。','Switch to 2 cells to check.'],['改成 2 顆看看。','Switch to 2 cells and see.']]});
P.pred('vo2',{c:2,o:[['變 2 倍','Doubles'],['不變','Unchanged'],['變一半','Halves']],f:[['把電阻從 10 Ω 拉到 20 Ω 看看。','Drag the resistance from 10 Ω to 20 Ω and see.'],['把電阻從 10 Ω 拉到 20 Ω 看看。','Drag the resistance from 10 Ω to 20 Ω and see.'],['把電阻從 10 Ω 拉到 20 Ω 驗證。','Drag the resistance from 10 Ω to 20 Ω to check.']]});
P.num('vo3',.3,['對。I = V/R = 9 ÷ 30 = 0.3 A。','Right. I = V/R = 9 ÷ 30 = 0.3 A.'],['提示：I = V ÷ R。','Hint: I = V ÷ R.'],.005);
P.num('vo4',2.7,['對。P = VI = 9 × 0.3 = 2.7 W。','Right. P = VI = 9 × 0.3 = 2.7 W.'],['提示：P = V × I。','Hint: P = V × I.'],.05);
P.pred('vo5',{now:1,c:1,o:[['青蛙身體裡會產生電','The frog\'s body makes electricity'],['兩種金屬加上潮濕的青蛙組織，形成了一個電池','Two metals plus moist frog tissue formed a battery'],['青蛙還沒完全死掉','The frog wasn\'t completely dead']],f:[['如果是這樣，用同一種金屬也應該會動，但並不會。','Then a single kind of metal should also work, but it doesn\'t.'],['對。青蛙腿只是電流的偵測器，伏打把它拿掉，證明了這一點。','Right. The leg was just a current detector, and Volta proved it by removing the frog.'],['腿抽動需要電流。電流是哪裡來的？','A twitch needs current. Where did the current come from?']]});
bars();log();P.watch($('voc'),draw);P.onLang(()=>{bars();log()});
}});}
