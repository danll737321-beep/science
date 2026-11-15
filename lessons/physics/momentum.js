{const b=P.b;
P.reg('momentum',{html:P.build('momentum',{
 title:['動量守恆：碰撞前後不變的東西','Conservation of Momentum: what survives a collision'],
 lede:['碰撞只發生在一瞬間，力有多大、作用多久都很難量。1668 年，英國皇家學會徵求答案：碰撞前後，有沒有什麼東西是不變的？三個人各自送來了同一個答案。','A collision lasts an instant, so the force and its duration are hard to measure. In 1668 the Royal Society asked: is anything the same before and after a collision? Three people independently sent in the same answer.'],
 old:{h:['笛卡兒：「運動的量」不變','Descartes: the "quantity of motion" is conserved'],
  p:[['1644 年，笛卡兒提出：宇宙中「運動的量」總和永遠不變，他把它定義成質量 × 速率（只看快慢，不看方向）。這個想法方向是對的：真的有東西守恆。問題出在定義。','In 1644 Descartes proposed that the total "quantity of motion" in the universe never changes, defining it as mass × speed (how fast, ignoring direction). The instinct was right: something really is conserved. The definition was the problem.']]},
 con:{h:['兩台車正面相撞後黏住','Two carts collide head-on and stick'],
  p:[['兩台一樣重的車，以一樣的速率正面對撞，撞完黏在一起停住。碰撞前：質量 × 速率的總和 = mv + mv = 2mv。碰撞後：0。笛卡兒的量不見了。','Two identical carts collide head-on at the same speed, stick, and stop. Before: total mass × speed = mv + mv = 2mv. After: 0. Descartes\' quantity vanished.'],
   ['1668 年，沃利斯、雷恩、惠更斯的答案都一樣：要把方向算進去。往右算正、往左算負，碰撞前 mv + m(−v) = 0，碰撞後也是 0。','In 1668 Wallis, Wren, and Huygens all gave the same fix: include direction. Count rightward as positive and leftward as negative. Before: mv + m(−v) = 0. After: also 0.']]},
 exps:[{h:['實驗：無摩擦軌道上的碰撞','Experiment: collisions on a frictionless track'],
  intro:[['選一種情境，或自己調整質量和速度（負的速度代表往左）。撞完會黏在一起，還是彈開，可以切換。','Pick a scenario or set your own masses and velocities (negative means leftward). Switch between sticking together and bouncing apart.']],
  preds:[['m1','預測 A：兩台一樣重的車，以 2 m/s 正面相撞並黏住。撞完之後？','Prediction A: two identical carts meet head-on at 2 m/s and stick. Afterward?'],['m2','預測 B：一台車以 2 m/s 撞上一台一樣重、靜止的車，完全彈性碰撞（不黏、不損失能量）。撞完之後？','Prediction B: a cart at 2 m/s hits an identical stationary cart in a perfectly elastic collision (no sticking, no energy lost). Afterward?']],
  sim:`<div class="ctrl"><div class="seg" id="mpre"></div><div class="seg" id="mmode"></div></div>
   <div class="fig"><canvas id="mc"></canvas></div>
   <div class="ctrl"><button class="pri" id="mgo"></button>${P.sl('mA','A 質量','A mass',1,5,.5,2)}${P.sl('vA','A 速度','A velocity',-4,4,.5,2)}${P.sl('mB','B 質量','B mass',1,5,.5,2)}${P.sl('vB','B 速度','B velocity',-4,4,.5,-2)}</div>
   <div id="mtbl"></div>`}],
 idea:{h:['動量 p = mv，碰撞前後總和不變','Momentum p = mv: the total is the same before and after'],
  p:[['看表格：不管黏不黏、質量多少，「動量總和」那一欄碰撞前後都一樣。動能就不一定：黏在一起時動能會減少（變成熱和變形），只有完全彈性碰撞才不變。','Look at the table. Whatever the masses and whether they stick, the total momentum column matches before and after. Kinetic energy doesn\'t: it drops when they stick (turning into heat and deformation) and survives only in perfectly elastic collisions.'],
   ['為什麼？牛頓第三定律：A 推 B 多大力，B 就反推 A 多大力，而且作用時間一樣。A 得到多少動量，B 就失去多少。','Why? Newton\'s third law: however hard A pushes B, B pushes back on A just as hard, for exactly the same time. Whatever momentum A gains, B loses.']],
  key:['p = mv','動量有方向。沒有外力時，一個系統的總動量永遠不變。力 × 作用時間 = 動量的改變（叫做衝量）。','Momentum has direction. With no outside force, a system\'s total momentum never changes. Force × time = change in momentum (called impulse).'],
  after:[['衝量 FΔt = Δp 解釋了安全氣囊：人停下來的動量改變是固定的，氣囊把停下來的時間拉長，力就變小。','Impulse FΔt = Δp explains airbags. The change in a person\'s momentum is fixed; the airbag stretches out the stopping time, so the force is smaller.']]},
 adv:[['從第三定律推出動量守恆','Deriving momentum conservation from the third law',[
   ['碰撞時 A 受力 F，B 受力 −F，作用時間都是 Δt。用 F = ma = m·Δv/Δt：','During the collision A feels force F and B feels −F, both for time Δt. Using F = ma = m·Δv/Δt:'],
   '=m_A·Δv_A = F·Δt　　m_B·Δv_B = −F·Δt',
   '=m_A·Δv_A + m_B·Δv_B = 0　⇒　m_A v_A + m_B v_B = m_A v_A\' + m_B v_B\'']],
  ['完全彈性碰撞的公式','Formulas for a perfectly elastic collision',[
   ['同時要求動量守恆和動能守恆，解聯立方程式得到：','Require both momentum and kinetic energy to be conserved and solve the pair of equations:'],
   '=v_A\' = [(m_A − m_B)·v_A + 2m_B·v_B] / (m_A + m_B)',
   '=v_B\' = [(m_B − m_A)·v_B + 2m_A·v_A] / (m_A + m_B)',
   ['m_A = m_B、v_B = 0 時：v_A\' = 0、v_B\' = v_A。兩台車交換速度，這就是牛頓擺。','When m_A = m_B and v_B = 0: v_A\' = 0 and v_B\' = v_A. The carts swap velocities. That\'s Newton\'s cradle.']]],
  ['完全非彈性（黏在一起）','Perfectly inelastic (sticking together)',[
   '=v\' = (m_A v_A + m_B v_B) / (m_A + m_B)',
   ['損失的動能 = 碰撞前動能 − ½(m_A + m_B)v\'²，變成熱、聲音和變形。','Kinetic energy lost = initial KE − ½(m_A + m_B)v\'², which becomes heat, sound, and deformation.']]]],
 apply:{h:['用動量守恆和衝量解題','Solve with momentum and impulse'],q:[
  ['n','m3','1. 1,000 kg 的車以 20 m/s 撞上一台靜止的 1,500 kg 車，兩車卡在一起。撞完一起往前的速度是多少？','1. A 1,000 kg car at 20 m/s hits a stationary 1,500 kg car and they lock together. What is their speed right after?','m/s'],
  ['n','m4','2. 70 kg 的人以 15 m/s 往前，被安全氣囊在 0.1 秒內停下來。平均受力是多少？','2. A 70 kg person moving at 15 m/s is stopped by an airbag in 0.1 s. What is the average force?','N'],
  ['p','m5','3. 從高處跳下來，落地時為什麼要彎膝蓋？','3. Why should you bend your knees when you land from a jump?']]},
 pencil:{h:['4. 拿紙筆：畫出一台重車撞上一台靜止輕車、黏在一起前後的動量箭頭','4. Pencil and paper: draw momentum arrows before and after a heavy cart hits a light stationary cart and they stick'],p:['箭頭長度代表動量大小。','Arrow length shows the size of the momentum.'],
  ans:`<div class="two"><svg class="ill" viewBox="0 0 320 170" role="img" aria-label="Momentum arrows"><rect width="320" height="170" rx="14" fill="var(--panel)"/>
   <text x="16" y="28" font-size="13" font-weight="700" fill="var(--ink)">前 before</text><rect x="16" y="40" width="50" height="26" fill="#b8532a"/><rect x="200" y="44" width="30" height="22" fill="#2160d8"/>
   <line x1="70" y1="53" x2="180" y2="53" stroke="var(--ink)" stroke-width="4"/><path d="M176 45 L192 53 L176 61Z" fill="var(--ink)"/>
   <text x="16" y="108" font-size="13" font-weight="700" fill="var(--ink)">後 after</text><rect x="16" y="120" width="50" height="26" fill="#b8532a"/><rect x="66" y="124" width="30" height="22" fill="#2160d8"/>
   <line x1="100" y1="133" x2="210" y2="133" stroke="var(--ink)" stroke-width="4"/><path d="M206 125 L222 133 L206 141Z" fill="var(--ink)"/></svg>
   <div><p>${b('前後兩個箭頭一樣長：總動量不變。碰撞後質量變大，所以速度變小，但 m × v 一樣。','Both arrows are the same length: total momentum is unchanged. After the collision there\'s more mass moving, so it moves slower, but m × v is the same.')}</p></div></div>`},
 next:['動量守恆了，但黏在一起時動能卻變少了。少掉的動能跑去哪裡？','Momentum is conserved, but kinetic energy drops when things stick. Where does the missing energy go?','答案要等到工業革命：蒸汽機讓人發現，熱和運動可以互相轉換。','The answer came with the Industrial Revolution, when steam engines showed that heat and motion can turn into each other.'],
 std:['表現預期 HS-PS2-2（用數學表示法支持：沒有淨外力時，系統的總動量守恆）、HS-PS2-3（應用科學與工程概念，設計在碰撞中減少物體受力的裝置）。科學實踐：SEP 5 數學與計算思維、SEP 6 設計解決方案。跨科概念：系統與系統模型。','Performance expectations HS-PS2-2 (use mathematical representations to support the claim that total momentum is conserved when there is no net force on the system), HS-PS2-3 (apply science and engineering ideas to design a device that minimizes the force on an object during a collision). Practices: SEP 5 Mathematical and Computational Thinking, SEP 6 Designing Solutions. Crosscutting concepts: Systems and System Models.']
}),init(){
const {t,tp,css,fit,$}=P;
let mA=2,vA=2,mB=2,vB=-2,mode='stick',xA,xB,uA,uB,hit=false,res=null,stop=()=>{},pre='head';
const W0=.5;
const reset=()=>{stop();xA=-2.2;xB=2.2;uA=vA;uB=vB;hit=false;res=null;draw();tbl()};
const draw=()=>{const[x,W,H]=fit($('mc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const k=(W-40)/6,cx=W/2,gy=H-50,X=v=>cx+v*k,ink=css('--ink'),mute=css('--mute');
 x.fillStyle=mute;x.fillRect(10,gy,W-20,5);for(let m=-3;m<=3;m++){x.fillRect(X(m)-1,gy+5,2,6);x.font='11px Archivo';x.textAlign='center';x.fillText(m+' m',X(m),gy+24)}
 [[xA,mA,uA,'#b8532a','A'],[xB,mB,uB,'#2160d8','B']].forEach(([p,m,u,c,l])=>{const w=W0*k,h=20+m*8;x.fillStyle=c;x.fillRect(X(p)-w/2,gy-h-10,w,h);x.fillStyle=ink;[X(p)-w/3,X(p)+w/3].forEach(q=>{x.beginPath();x.arc(q,gy-5,6,0,7);x.fill()});
  x.fillStyle='#fff';x.font='700 13px Archivo';x.textAlign='center';x.fillText(`${l} ${m}kg`,X(p),gy-10-h/2+5);
  if(Math.abs(u)>.01)P.arrow(x,0,X(p),gy-h-24,X(p)+u*k*.35,gy-h-24,ink,3);
  x.fillStyle=ink;x.font='600 12px Archivo';x.fillText(`${u.toFixed(2)} m/s`,X(p),gy-h-34)})};
const row=(lab,a,bb)=>{const pa=mA*a,pb=mB*bb,ke=.5*mA*a*a+.5*mB*bb*bb;return `<tr><td>${lab}</td><td>${a.toFixed(2)}</td><td>${bb.toFixed(2)}</td><td>${pa.toFixed(2)}</td><td>${pb.toFixed(2)}</td><td><b>${(pa+pb).toFixed(2)}</b></td><td><b>${ke.toFixed(2)}</b></td></tr>`};
const tbl=()=>{$('mtbl').innerHTML=`<div class="scroll"><table><thead><tr><th></th><th>v_A</th><th>v_B</th><th>p_A = m_A v_A</th><th>p_B</th><th>${t('動量總和','Total momentum')}</th><th>${t('動能總和 (J)','Total KE (J)')}</th></tr></thead><tbody>${row(t('碰撞前','Before'),vA,vB)}${res?row(t('碰撞後','After'),res[0],res[1]):''}</tbody></table></div>`};
const after=()=>{if(mode==='stick'){const v=(mA*vA+mB*vB)/(mA+mB);return[v,v]}return[((mA-mB)*vA+2*mB*vB)/(mA+mB),((mB-mA)*vB+2*mA*vA)/(mA+mB)]};
const lab=()=>t('開始','Run');P.gate('mgo',[],lab);
$('mgo').onclick=()=>{reset();let tt=0;stop=P.run(dt=>{tt+=dt;xA+=uA*dt;xB+=uB*dt;
 if(!hit&&xB-xA<=W0){hit=true;res=after();[uA,uB]=res;if(mode==='stick')xB=xA+W0;tbl();
  if(mode==='stick'&&Math.abs(mA-mB)<.01&&Math.abs(vA+vB)<.01)P.reveal('m1');if(mode==='elastic'&&Math.abs(mA-mB)<.01&&Math.abs(vB)<.01)P.reveal('m2')}
 draw();if(Math.abs(xA)>3.4&&Math.abs(xB)>3.4||tt>8||(hit&&(Math.max(Math.abs(xA),Math.abs(xB))>3.2)))return false})};
const sync=()=>{[['mA',mA],['vA',vA],['mB',mB],['vB',vB]].forEach(([i,v])=>{$(i).value=v;$(i+'v').textContent=i[0]==='m'?v.toFixed(1)+' kg':v.toFixed(1)+' m/s'})};
const presets={head:{mA:2,vA:2,mB:2,vB:-2,mode:'stick'},rest:{mA:2,vA:2,mB:2,vB:0,mode:'elastic'},truck:{mA:5,vA:2,mB:1,vB:0,mode:'stick'}};
const rp=P.seg('mpre',[['head','正面對撞','Head-on'],['rest','撞靜止的車','Hit a parked cart'],['truck','重車撞輕車','Heavy hits light']],()=>pre,v=>{pre=v;Object.assign(this_,presets[v]);({mA,vA,mB,vB,mode}=this_);sync();rm();reset()});
const this_={};
const rm=P.seg('mmode',[['stick','黏在一起','Stick together'],['elastic','完全彈開','Bounce (elastic)']],()=>mode,v=>{mode=v;reset()});
[['mA',v=>mA=v,'kg'],['vA',v=>vA=v,'m/s'],['mB',v=>mB=v,'kg'],['vB',v=>vB=v,'m/s']].forEach(([i,f,u])=>P.slider(i,v=>(u==='kg'?v.toFixed(1):v.toFixed(1))+' '+u,v=>{f(v);pre='';rp();reset()}));
P.pred('m1',{c:0,o:[['兩台都停住','Both stop dead'],['一起彈回去','They bounce back together'],['一起繼續往前','They keep moving together']],f:[['選「正面對撞」、「黏在一起」，跑跑看。','Choose Head-on and Stick together, then run it.'],['選「正面對撞」、「黏在一起」，跑跑看。','Choose Head-on and Stick together, then run it.'],['選「正面對撞」、「黏在一起」，跑跑看。','Choose Head-on and Stick together, then run it.']]});
P.pred('m2',{c:0,o:[['第一台停住，第二台以 2 m/s 往前','The first stops; the second moves off at 2 m/s'],['兩台一起以 1 m/s 往前','Both move together at 1 m/s'],['第一台彈回來，第二台不動','The first bounces back; the second stays put']],f:[['選「撞靜止的車」、「完全彈開」，驗證看看。','Choose Hit a parked cart and Bounce, then check.'],['那是黏在一起的情況。選「完全彈開」再試。','That\'s what happens when they stick. Try Bounce.'],['選「撞靜止的車」、「完全彈開」，看看會不會這樣。','Choose Hit a parked cart and Bounce, and see.']]});
P.num('m3',8,['對。總動量 1000 × 20 = 20,000 kg·m/s，分給 2,500 kg：v = 8 m/s。','Right. Total momentum 1000 × 20 = 20,000 kg·m/s, shared by 2,500 kg: v = 8 m/s.'],['提示：碰撞前總動量 = 碰撞後總動量 = (1000 + 1500) × v。','Hint: momentum before = momentum after = (1000 + 1500) × v.'],.1);
P.num('m4',10500,['對。Δp = 70 × 15 = 1,050 kg·m/s，F = Δp/Δt = 1050 ÷ 0.1 = 10,500 N。如果撞到方向盤，0.01 秒就停住，力會是 10 倍。','Right. Δp = 70 × 15 = 1,050 kg·m/s, F = Δp/Δt = 1050 ÷ 0.1 = 10,500 N. Hitting the steering wheel would stop you in about 0.01 s, ten times the force.'],['提示：F × Δt = m × Δv。','Hint: F × Δt = m × Δv.'],100);
P.pred('m5',{now:1,c:1,o:[['讓動量變小','To reduce your momentum'],['拉長停下來的時間，讓力變小','To stretch out the stopping time so the force is smaller'],['讓身體變輕','To make your body lighter']],f:[['不管怎麼落地，要停下來的動量都一樣。','However you land, the momentum you must lose is the same.'],['對。Δp 固定，Δt 變長，F = Δp/Δt 就變小。','Right. Δp is fixed; a longer Δt means a smaller F = Δp/Δt.'],['彎膝蓋不會改變質量。','Bending your knees doesn\'t change your mass.']]});
sync();P.watch($('mc'),draw);P.onLang(tbl);reset();
}});}
