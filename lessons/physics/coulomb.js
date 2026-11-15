{const b=P.b;
P.reg('coulomb',{html:P.build('coulomb',{
 title:['庫侖定律：用一根細絲秤出電力','Coulomb\'s Law: weighing electric force with a thin wire'],
 lede:['知道電荷會吸、會斥還不夠，物理需要數字：電力到底有多強？距離變 2 倍，會弱成多少？1785 年，法國工程師庫侖做了一台極靈敏的扭秤，量出了答案。','Knowing charges attract and repel isn\'t enough; physics needs numbers. How strong is the electric force? How much weaker at twice the distance? In 1785 the French engineer Charles-Augustin de Coulomb built an extremely sensitive torsion balance and measured it.'],
 old:{h:['只知道「會吸、會斥」','All anyone knew: "it attracts or repels"'],
  p:[['電的力太小，用一般的秤根本量不出來。大家只能說：靠近一點比較強，遠一點比較弱。','Electric forces were too small for ordinary scales. People could only say: closer is stronger, farther is weaker.'],
   ['1767 年，普利斯特里注意到富蘭克林的一個觀察：帶電的金屬杯裡面完全沒有電力。他推論：只有平方反比的力會在空心球裡互相抵消，所以電力可能跟引力一樣是 1/r²。但這只是推論，沒有人直接量過。','In 1767 Priestley noted one of Franklin\'s observations: inside a charged metal cup there was no electric force at all. He reasoned that only an inverse-square force cancels out inside a hollow sphere, so electric force might be 1/r² like gravity. But it was an inference; nobody had measured it directly.']]},
 con:{h:['扭秤：用「扭轉的角度」當秤','The torsion balance: using twist as a scale'],
  p:[['一根極細的銀絲吊著一根水平的桿子，桿子一端有一顆帶電的小球。另一顆帶電的球靠近時，電力把桿子推轉，銀絲就被扭轉。扭轉的角度越大，代表力越大。銀絲非常細，連極小的力都能讓它轉動。','A very thin silver wire hangs a horizontal rod with a small charged ball on one end. When another charged ball comes near, the electric force swings the rod and twists the wire. The bigger the twist, the bigger the force. The wire is so thin that tiny forces turn it.'],
   ['庫侖把兩顆球的距離變成一半、再一半，記錄需要扭多少度才能讓球停在那個距離。下面就是他 1785 年論文裡的真實數據。','Coulomb halved the distance between the balls, then halved it again, recording how many degrees of twist held the ball at each distance. Below is the real data from his 1785 paper.']],
  svg:`<svg class="ill" viewBox="0 0 320 220" role="img" aria-label="Torsion balance"><rect width="320" height="220" rx="14" fill="var(--panel)"/><line x1="160" y1="16" x2="160" y2="120" stroke="var(--mute)" stroke-width="1.5"/><rect x="140" y="10" width="40" height="10" fill="var(--ink)"/>
   <line x1="70" y1="120" x2="250" y2="120" stroke="var(--ink)" stroke-width="4"/><circle cx="250" cy="120" r="12" fill="#2160d8"/><circle cx="250" cy="170" r="12" fill="#2160d8"/><circle cx="70" cy="120" r="9" fill="var(--mute)"/>
   <path d="M210 100 A 60 30 0 0 1 270 100" fill="none" stroke="var(--cu)" stroke-width="2"/><text x="244" y="92" font-size="12" font-weight="700" fill="var(--cu)">twist</text><text x="20" y="206" font-size="12" fill="var(--mute)">銀絲 silver wire · 帶電球 charged balls</text></svg>`},
 exps:[{h:['實驗一：分析庫侖的真實數據','Experiment 1: analyze Coulomb\'s real data'],
  intro:[['距離用角度表示（兩球在圓周上相隔幾度），力用扭轉角度表示。選一種規則，看預測和實際數據差多少。','Distance is given as an angle (how many degrees apart the balls are around the circle); force is the twist angle. Pick a rule and compare its prediction with the data.']],
  preds:[['co1','預測 A：距離變成一半，電力會變成幾倍？','Prediction A: if the distance is halved, how many times stronger does the force get?']],
  sim:`<div class="ctrl"><div class="seg" id="cof"></div></div><div id="cotbl"></div><p class="verdict" id="cov"></p>`},
 {h:['實驗二：兩個電荷之間的力','Experiment 2: the force between two charges'],chip:['動手玩','Explore'],
  intro:[['調整兩個電荷的大小（負數代表負電）和距離。箭頭代表每一個電荷受到的力。','Set the two charges (negative values mean negative charge) and the distance. The arrows show the force on each charge.']],
  preds:[['co2','預測 B：距離不變，兩個電荷都變成 2 倍，力變成幾倍？','Prediction B: same distance, both charges doubled. How many times the force?']],
  sim:`<div class="fig"><canvas id="coc"></canvas></div><div class="ctrl">${P.sl('cq1','q₁','q₁',-5,5,1,2)}${P.sl('cq2','q₂','q₂',-5,5,1,3)}${P.sl('cr','距離','Distance',.1,1,.05,.5)}</div><p class="read" id="cor" style="white-space:normal"></p>`}],
 idea:{h:['庫侖定律：電力跟引力長得幾乎一樣','Coulomb\'s law: the electric force looks almost exactly like gravity'],
  p:[['數據最符合 1/r²：距離一半，力變 4 倍。跟引力一樣是平方反比，力也跟兩個電荷的乘積成正比。','The data fit 1/r² best: half the distance, four times the force. Inverse square like gravity, and proportional to the product of the two charges.'],
   ['不同的地方：電荷有正有負，所以電力可以吸也可以斥；引力永遠只會吸。而且電力強得多：質子和電子之間的電力，大約是它們之間引力的 10³⁹ 倍。','The differences: charge comes in + and −, so electric force can attract or repel; gravity only attracts. And electric force is far stronger: between a proton and an electron, it\'s about 10³⁹ times their gravitational pull.']],
  key:['F = k q₁q₂ / r²','k = 8.99 × 10⁹ N·m²/C²。同號相斥（F 為正），異號相吸（F 為負）。','k = 8.99 × 10⁹ N·m²/C². Like signs repel (F positive), unlike signs attract (F negative).'],
  after:[['為什麼日常生活感覺不到這麼強的電力？因為大部分物體的正負電荷幾乎完全抵消。你推牆時感覺到的力，其實就是原子之間的電力。','Why don\'t we feel such a strong force every day? Because most objects\' positive and negative charges almost perfectly cancel. When you push on a wall, the force you feel is actually the electric force between atoms.']]},
 adv:[['電力 vs. 引力','Electric force vs. gravity',[
   ['氫原子裡，質子和電子的距離不管是多少，兩種力的比值都一樣（r² 會消掉）：','In a hydrogen atom, the ratio of the two forces doesn\'t depend on the distance (the r² cancels):'],
   '=F_電 / F_引 = k·e² / (G·m_p·m_e) = (8.99×10⁹)(1.6×10⁻¹⁹)² / [(6.67×10⁻¹¹)(1.67×10⁻²⁷)(9.11×10⁻³¹)] ≈ 2.3 × 10³⁹']],
  ['電場','The electric field',[
   ['跟引力場一樣，可以定義每單位電荷受到的力，叫電場 E：','Just like a gravitational field, define the force per unit charge, the electric field E:'],
   '=E = F / q = k·Q / r²　（單位 N/C）',
   ['有了電場，就不必每次都算兩個電荷，只要知道某個地方的 E，放任何電荷 q 進去，受力就是 qE。','With a field you don\'t have to pair up charges every time. Know E at a point, and any charge q placed there feels force qE.']]]],
 apply:{h:['用庫侖定律解題','Solve with Coulomb\'s law'],q:[
  ['n','co3','1. 兩個 1 μC（10⁻⁶ C）的電荷相距 1 m，力是多少牛頓？','1. Two 1 μC (10⁻⁶ C) charges are 1 m apart. What is the force in newtons?','N'],
  ['n','co4','2. 兩個電荷之間的力是 90 N。距離變成 3 倍，力是多少？','2. The force between two charges is 90 N. If the distance triples, what is the force?','N'],
  ['p','co5','3. 一個電荷是 +2 μC，另一個是 −2 μC。它們之間的力？','3. One charge is +2 μC and the other −2 μC. The force between them?']]},
 pencil:{h:['4. 拿紙筆：畫出 +3 μC 和 +1 μC 兩個電荷受力的箭頭','4. Pencil and paper: draw force arrows on a +3 μC charge and a +1 μC charge'],p:['想一想：電荷大的那個，受力比較大嗎？','Think: does the bigger charge feel a bigger force?'],
  ans:`<div class="two"><svg class="ill" viewBox="0 0 320 120" role="img" aria-label="Equal and opposite forces"><rect width="320" height="120" rx="14" fill="var(--panel)"/>
   <circle cx="110" cy="60" r="20" fill="#d1495b"/><circle cx="210" cy="60" r="12" fill="#d1495b"/><text x="98" y="65" fill="#fff" font-weight="700" font-size="13">+3</text><text x="203" y="65" fill="#fff" font-weight="700" font-size="12">+1</text>
   <line x1="88" y1="60" x2="30" y2="60" stroke="var(--ink)" stroke-width="4"/><path d="M36 52 L20 60 L36 68Z" fill="var(--ink)"/><line x1="224" y1="60" x2="282" y2="60" stroke="var(--ink)" stroke-width="4"/><path d="M276 52 L292 60 L276 68Z" fill="var(--ink)"/></svg>
   <div><p>${b('兩個箭頭一樣長、方向相反。F = kq₁q₂/r² 裡 q₁ 和 q₂ 是相乘，對兩邊來說是同一個數字。這也是牛頓第三定律。','The two arrows are equal and opposite. In F = kq₁q₂/r², q₁ and q₂ are multiplied, giving the same number for both. It\'s Newton\'s third law again.')}</p></div></div>`},
 next:['靜電只能放電一次，火花一閃就沒了。能不能讓電一直流，拿來做事？','Static electricity discharges once: one spark and it\'s gone. Can electricity be made to flow continuously and do useful work?','答案從一隻青蛙腿的抽動開始。','The answer began with a twitching frog\'s leg.'],
 std:['表現預期 HS-PS2-4（用數學表示法，以萬有引力定律和庫侖定律描述並預測物體間的重力與靜電力）。科學實踐：SEP 4 分析與詮釋數據、SEP 5 數學與計算思維。跨科概念：模式；尺度、比例與數量。數據來源：庫侖 1785 年論文中的扭秤實驗。','Performance expectation HS-PS2-4 (use mathematical representations of Newton\'s law of gravitation and Coulomb\'s law to describe and predict the gravitational and electrostatic forces between objects). Practices: SEP 4 Analyzing and Interpreting Data, SEP 5 Mathematical and Computational Thinking. Crosscutting concepts: Patterns; Scale, Proportion, and Quantity. Data: torsion-balance trials from Coulomb\'s 1785 memoir.']
}),init(){
const {t,tp,css,fit,$}=P,K=8.99e9;
const data=[[36,36],[18,144],[8.5,575.5]];let n=0,q1=2,q2=3,r=.5;
const tbl=()=>{const pr=data.map(d=>n?36*(36/d[0])**n:null);
 $('cotbl').innerHTML=`<div class="scroll"><table><thead><tr><th>${t('距離（度）','Distance (°)')}</th><th>${t('實際扭轉（度）','Measured twist (°)')}</th><th>${n?t(`預測（1/r${n===1?'':n===2?'²':'³'}）`,`Predicted (1/r${n===1?'':n===2?'²':'³'})`):t('先選規則','Pick a rule')}</th><th>${t('差距','Off by')}</th></tr></thead><tbody>${data.map((d,i)=>`<tr><td>${d[0]}</td><td>${d[1]}</td><td>${pr[i]?pr[i].toFixed(0):'—'}</td><td>${pr[i]?((pr[i]/d[1]-1)*100).toFixed(0)+'%':'—'}</td></tr>`).join('')}</tbody></table></div>`;
 const v=$('cov');if(!n){v.textContent='';return}const err=Math.max(...data.map((d,i)=>Math.abs(pr[i]/d[1]-1)));v.className='verdict '+(n===2?'ok':'no');
 v.innerHTML=n===2?t('最吻合！前兩筆完全一樣，第三筆差約一成（實驗誤差，例如電荷會慢慢漏掉）。','Best fit! The first two match exactly; the third is off by about 10% (experimental error, such as charge slowly leaking away).'):t(`差到 ${(err*100).toFixed(0)}%，這個規則不符合數據。`,`Off by up to ${(err*100).toFixed(0)}%: this rule doesn\'t fit the data.`);if(n===2)P.reveal('co1')};
P.seg('cof',[['1','試 1/r','Try 1/r'],['2','試 1/r²','Try 1/r²'],['3','試 1/r³','Try 1/r³']],()=>String(n),v=>{n=+v;tbl()});
const draw=()=>{const[x,W,H]=fit($('coc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const cx=W/2,cy=H/2,px=Math.min(W*.4,r*W*.42+30),F=K*q1*q2*1e-12/r/r,ink=css('--ink');
 const s=Math.min(W*.18,Math.abs(F)*14+(F?12:0)),dir=Math.sign(F);
 [[cx-px,q1,-1],[cx+px,q2,1]].forEach(([X,q,side])=>{const R=12+Math.abs(q)*3;x.fillStyle=q>0?'#d1495b':q<0?'#2160d8':'#9aa7b4';x.beginPath();x.arc(X,cy,R,0,7);x.fill();
  x.fillStyle='#fff';x.font='700 13px Archivo';x.textAlign='center';x.fillText((q>0?'+':'')+q,X,cy+5);
  if(F)P.arrow(x,0,X+side*(R+4)*dir,cy,X+side*(R+4+s)*dir,cy,ink,4)});
 x.strokeStyle=css('--mute');x.setLineDash([4,4]);x.beginPath();x.moveTo(cx-px,cy+44);x.lineTo(cx+px,cy+44);x.stroke();x.setLineDash([]);x.fillStyle=ink;x.font='600 13px Archivo';x.fillText(`r = ${r.toFixed(2)} m`,cx,cy+62);
 $('cor').textContent=tp(`F = 8.99×10⁹ × (${q1}×10⁻⁶)(${q2}×10⁻⁶) ÷ ${r.toFixed(2)}² = ${F.toFixed(3)} N ${F>0?'（相斥）':F<0?'（相吸）':''}`,`F = 8.99×10⁹ × (${q1}×10⁻⁶)(${q2}×10⁻⁶) ÷ ${r.toFixed(2)}² = ${F.toFixed(3)} N ${F>0?'(repel)':F<0?'(attract)':''}`)};
let base=null;
P.slider('cq1',v=>v+' μC',v=>{q1=v;chk();draw()});P.slider('cq2',v=>v+' μC',v=>{q2=v;chk();draw()});P.slider('cr',v=>v.toFixed(2)+' m',v=>{r=v;draw()});
const chk=()=>{if(Math.abs(q1)===4&&Math.abs(q2)===6)P.reveal('co2')};
P.pred('co1',{c:2,o:[['2 倍','2 times'],['3 倍','3 times'],['4 倍','4 times']],f:[['在上面試試 1/r，看數據符不符合。','Try 1/r above and see if the data agree.'],['在上面試幾種規則看看。','Try a few rules above.'],['在上面試 1/r²，看數據符不符合。','Try 1/r² above and check the data.']]});
P.pred('co2',{c:2,o:[['2 倍','2 times'],['4 倍','4 times'],['不變','Unchanged']],f:[['把 q₁ 從 2 調到 4、q₂ 從 3 調到 6，比較力的讀數。','Change q₁ from 2 to 4 and q₂ from 3 to 6, then compare the force.'],['把 q₁ 從 2 調到 4、q₂ 從 3 調到 6，驗證看看。','Change q₁ from 2 to 4 and q₂ from 3 to 6 to check.'],['把 q₁ 從 2 調到 4、q₂ 從 3 調到 6，比較力的讀數。','Change q₁ from 2 to 4 and q₂ from 3 to 6, then compare the force.']]});
P.num('co3',.00899,['對。F = 8.99×10⁹ × 10⁻⁶ × 10⁻⁶ ÷ 1² ≈ 0.009 N，大約是一顆米粒的重量。','Right. F = 8.99×10⁹ × 10⁻⁶ × 10⁻⁶ ÷ 1² ≈ 0.009 N, about the weight of a grain of rice.'],['提示：k × q₁ × q₂ ÷ r²，k = 8.99 × 10⁹。','Hint: k × q₁ × q₂ ÷ r², with k = 8.99 × 10⁹.'],.0005);
P.num('co4',10,['對。3 倍距離，力變 1/9：90 ÷ 9 = 10 N。','Right. Three times the distance, one-ninth the force: 90 ÷ 9 = 10 N.'],['提示：1/r²，距離 3 倍，力是 1/3²。','Hint: 1/r², so three times the distance gives 1/3² of the force.'],.1);
P.pred('co5',{now:1,c:1,o:[['互相排斥','They repel'],['互相吸引','They attract'],['正負抵消，沒有力','They cancel; no force']],f:[['同號才相斥。','Only like charges repel.'],['對。異號相吸，F = kq₁q₂/r² 算出來是負的，代表吸引。','Right. Unlike charges attract; F = kq₁q₂/r² comes out negative, meaning attraction.'],['兩個電荷在不同的地方，各自都會感受到對方的力。','The charges are in different places, and each feels the other\'s force.']]});
tbl();P.watch($('coc'),draw);P.onLang(tbl);
}});}
