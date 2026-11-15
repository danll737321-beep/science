{const b=P.b;
P.reg('oersted',{html:P.build('oersted',{
 title:['厄斯特：電流讓指南針轉動','Ørsted: a current turns a compass'],
 lede:['兩百年來，電和磁被當成兩件完全無關的事。1820 年 4 月，丹麥教授厄斯特在課堂上示範電池時，桌上的指南針突然動了。','For two hundred years, electricity and magnetism were treated as unrelated. In April 1820 the Danish professor Hans Christian Ørsted was demonstrating a battery in class when a compass on the table suddenly moved.'],
 old:{h:['電和磁是兩回事','Electricity and magnetism are separate'],
  p:[['吉爾伯特區分了「電」和「磁」，庫侖也認為兩者完全獨立：電荷只會推拉電荷，磁鐵只會推拉磁鐵。有人懷疑過兩者有關，因為閃電有時會讓指南針失靈，但沒有人做出可以重複的實驗。','Gilbert had separated electric and magnetic effects, and Coulomb considered them completely independent: charges push and pull charges, magnets push and pull magnets. Some suspected a link because lightning sometimes ruined compasses, but nobody had a repeatable experiment.']]},
 con:{h:['電流旁邊的指南針轉向了','A compass next to a current turned'],
  p:[['厄斯特把一條導線放在指南針上方，通上伏打電池的電流。指針沒有指向導線，也沒有被推開，而是轉向跟導線垂直的方向。電流一關，指針又轉回北方；電流方向反過來，指針就往另一邊轉。','Ørsted held a wire over a compass and switched on current from a voltaic pile. The needle didn\'t point at the wire or away from it; it swung to point across the wire. Switch off, and it returned north; reverse the current, and it swung the other way.'],
   ['靜止的電荷不會讓指南針轉，只有「流動」的電荷才會。這是第一個證據：電和磁是連在一起的。','Charges at rest don\'t turn a compass; only moving charges do. This was the first evidence that electricity and magnetism are linked.']]},
 exps:[{h:['實驗：俯視一條通電的直導線','Experiment: looking down on a straight current-carrying wire'],
  intro:[['導線垂直穿過畫面中央（● 代表電流朝你流出來，× 代表朝畫面裡流進去）。周圍放滿指南針，地球磁場讓它們原本都指北（上方）。','The wire passes straight through the center of the picture (● means current flowing toward you, × means into the screen). It\'s surrounded by compasses, which Earth\'s field points north (up) to begin with.']],
  preds:[['oe1','預測 A：電流打開、慢慢加大，導線附近的指南針會？','Prediction A: as you switch on and raise the current, the compasses near the wire will?'],['oe2','預測 B：把電流方向反過來，會？','Prediction B: reverse the current direction. What happens?']],
  sim:`<div class="fig tall"><canvas id="oec"></canvas></div><div class="ctrl">${P.sl('oeI','電流','Current',0,20,1,0)}<span>${b('方向','Direction')}</span><div class="seg" id="oed"></div><span class="read" id="oer"></span></div>`}],
 idea:{h:['電流的周圍有一圈一圈的磁場','A current is surrounded by circles of magnetic field'],
  p:[['電流夠大時，靠近導線的指南針排成一個圓。離導線越遠，磁場越弱，地球磁場又贏回來，指南針回到指北。','With enough current, the compasses near the wire form a circle. Farther away the wire\'s field weakens, Earth\'s field wins again, and the compasses go back to north.'],
   ['安培聽到消息後，一個星期內就發現：兩條平行的電流同方向會互相吸引，反方向會互相排斥。把導線繞成線圈，磁場加在一起，就成了電磁鐵。','When Ampère heard the news, within a week he found that parallel currents in the same direction attract and opposite directions repel. Coil a wire and the fields add up: an electromagnet.']],
  key:['右手定則','Right-hand rule','右手大拇指指向電流方向，四指彎曲的方向就是磁場繞的方向。磁鐵的磁力，其實也來自原子裡電子的運動。','Point your right thumb along the current; your curled fingers show which way the field circles. Even a permanent magnet\'s magnetism comes from moving electrons inside its atoms.']},
 adv:[['直導線的磁場','The field of a straight wire',[
   ['磁場強度跟電流成正比，跟距離成反比：','Field strength is proportional to current and inversely proportional to distance:'],
   '=B = μ₀I / (2πr)　　μ₀ = 4π × 10⁻⁷ T·m/A',
   ['10 A、1 cm：B = 2×10⁻⁷ × 10 ÷ 0.01 = 2×10⁻⁴ T = 200 μT，大約是地球磁場的 4 倍，所以指南針會被拉過去。','At 10 A and 1 cm: B = 2×10⁻⁷ × 10 ÷ 0.01 = 2×10⁻⁴ T = 200 μT, about four times Earth\'s field, which is why the compass gets pulled around.']]],
  ['線圈（螺線管）','A coil (solenoid)',[
   ['每公尺繞 n 圈的長線圈，裡面的磁場幾乎均勻：','Inside a long coil with n turns per meter, the field is nearly uniform:'],
   '=B = μ₀·n·I',
   ['圈數加倍或電流加倍，磁場都加倍。中間再放一根鐵芯，磁場可以強幾百倍。','Double the turns or the current and the field doubles. Put an iron core inside and it can be hundreds of times stronger.']]]],
 apply:{h:['用電流的磁場解題','Solve with the field of a current'],q:[
  ['n','oe3','1. 離 10 A 的直導線 2 cm，磁場是多少 μT？（B = 2×10⁻⁷ × I / r）','1. How strong is the field 2 cm from a wire carrying 10 A, in μT? (B = 2×10⁻⁷ × I / r)','μT'],
  ['n','oe4','2. 同一條導線，離 4 cm 的地方呢？','2. Same wire, 4 cm away?','μT'],
  ['p','oe5','3. 想讓電磁鐵更強，下面哪一個方法有效？','3. Which of these makes an electromagnet stronger?']]},
 pencil:{h:['4. 拿紙筆：用右手定則畫出一條往上流的電流周圍的磁場','4. Pencil and paper: use the right-hand rule to draw the field around a current flowing upward'],p:['從上往下看，磁場是順時針還是逆時針？','Looking down from above, does the field circle clockwise or counterclockwise?'],
  ans:`<p>${b('右手大拇指朝上，四指從你的方向看是逆時針彎。所以從上往下看，磁場是逆時針繞著導線。這跟模擬裡「●（朝你流出）」的情況一樣。','Right thumb up, fingers curl counterclockwise as you look down. So from above, the field circles the wire counterclockwise, the same as the ● (toward you) case in the simulation.')}</p>`},
 next:['電可以生磁。那反過來，磁能不能生電？','Current makes magnetism. Can magnetism, in turn, make current?','很多人試過把磁鐵放在線圈旁邊，什麼也沒有發生。法拉第花了十年才找到原因。','Many people put magnets next to coils and saw nothing. Faraday spent ten years finding out why.'],
 std:['表現預期 HS-PS2-5（規劃並進行調查，提供證據說明電流會產生磁場，而變化的磁場會產生電流）。科學實踐：SEP 3 規劃與執行調查、SEP 2 建立與使用模型。跨科概念：因果。','Performance expectation HS-PS2-5 (plan and conduct an investigation to provide evidence that an electric current can produce a magnetic field and that a changing magnetic field can produce an electric current). Practices: SEP 3 Planning and Carrying Out Investigations, SEP 2 Developing and Using Models. Crosscutting concepts: Cause and Effect.']
}),init(){
const {t,tp,css,fit,$}=P,BE=50e-6;
let I=0,d=1,flip=0;
const draw=()=>{const[x,W,H]=fit($('oec'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const cx=W/2,cy=H/2,S=Math.min(W,H)/2/0.1,ink=css('--ink'),step=Math.max(34,Math.min(W,H)/11);
 for(let gy=cy%step;gy<H;gy+=step)for(let gx=cx%step;gx<W;gx+=step){const X=(gx-cx)/S,Y=-(gy-cy)/S,r=Math.hypot(X,Y);if(r<.012)continue;
  const B=2e-7*I*d/r,bx=-Y/r*B,by=X/r*B+BE,bm=Math.hypot(bx,by),ux=bx/bm,uy=-by/bm,L=step*.36;
  x.lineWidth=3.5;x.strokeStyle='#d1495b';x.beginPath();x.moveTo(gx,gy);x.lineTo(gx+ux*L,gy+uy*L);x.stroke();x.strokeStyle=css('--mute');x.beginPath();x.moveTo(gx,gy);x.lineTo(gx-ux*L,gy-uy*L);x.stroke()}
 x.fillStyle='#b8532a';x.beginPath();x.arc(cx,cy,14,0,7);x.fill();x.fillStyle='#fff';x.strokeStyle='#fff';x.lineWidth=3;
 if(!I){}else if(d>0){x.beginPath();x.arc(cx,cy,4,0,7);x.fill()}else{x.beginPath();x.moveTo(cx-6,cy-6);x.lineTo(cx+6,cy+6);x.moveTo(cx+6,cy-6);x.lineTo(cx-6,cy+6);x.stroke()}
 x.fillStyle=ink;x.font='600 12px Archivo';x.textAlign='left';x.fillText(tp('北 ↑','North ↑'),10,20);
 x.strokeStyle=ink;x.lineWidth=2;x.beginPath();x.moveTo(W-10-2*S/100,H-16);x.lineTo(W-10,H-16);x.stroke();x.textAlign='right';x.fillText('2 cm',W-10,H-24);
 const b2=2e-7*I/.02*1e6;$('oer').textContent=tp(`離導線 2 cm：導線磁場 ${b2.toFixed(0)} μT · 地球磁場 50 μT`,`At 2 cm: wire field ${b2.toFixed(0)} μT · Earth\'s field 50 μT`)};
P.slider('oeI',v=>v+' A',v=>{I=v;if(I>=8)P.reveal('oe1');draw()});
P.seg('oed',[['1','● 朝你流出','● toward you'],['-1','× 流進畫面','× into screen']],()=>String(d),v=>{d=+v;if(I>=5)P.reveal('oe2');draw()});
P.pred('oe1',{c:1,o:[['全部還是指北','All still point north'],['導線附近的指南針排成一圈','Those near the wire line up in a circle'],['全部指向導線','All point at the wire']],f:[['把電流拉大看看。','Turn the current up and see.'],['把電流拉大驗證。','Turn the current up to check.'],['把電流拉大看看。','Turn the current up and see.']]});
P.pred('oe2',{c:0,o:[['圓圈的方向反過來','The circle reverses direction'],['完全不變','Nothing changes'],['指南針全部指離導線','The compasses all point away from the wire']],f:[['電流開大後切換方向驗證。','With the current up, switch direction to check.'],['電流開大後切換方向看看。','With the current up, switch direction and see.'],['電流開大後切換方向看看。','With the current up, switch direction and see.']]});
P.num('oe3',100,['對。B = 2×10⁻⁷ × 10 ÷ 0.02 = 1×10⁻⁴ T = 100 μT。','Right. B = 2×10⁻⁷ × 10 ÷ 0.02 = 1×10⁻⁴ T = 100 μT.'],['提示：r 要用公尺（0.02 m），算出來的 T 再乘 10⁶ 變成 μT。','Hint: use meters for r (0.02 m), then multiply the answer in T by 10⁶ for μT.'],2);
P.num('oe4',50,['對。距離 2 倍，磁場減半：50 μT，剛好跟地球磁場一樣大。','Right. Twice the distance halves the field: 50 μT, the same as Earth\'s field.'],['提示：B 跟 1/r 成正比。','Hint: B is proportional to 1/r.'],1);
P.pred('oe5',{now:1,c:1,o:[['把導線換成比較粗的塑膠線','Swap the wire for thicker plastic'],['多繞幾圈，或加大電流','Add more turns or more current'],['把電池倒過來接','Connect the battery backward']],f:[['塑膠不導電，沒有電流就沒有磁場。','Plastic doesn\'t conduct; no current, no field.'],['對。B = μ₀nI，圈數 n 和電流 I 都會讓磁場變強。','Right. B = μ₀nI, so more turns n or more current I both strengthen the field.'],['電池倒接只會讓磁場方向反過來，強度不變。','Reversing the battery only flips the field\'s direction, not its strength.']]});
P.watch($('oec'),draw);
}});}
