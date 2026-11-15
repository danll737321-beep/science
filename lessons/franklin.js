{const b=P.b;
P.reg('franklin',{html:P.build('franklin',{
 title:['富蘭克林：電不會被製造，只會被移動','Franklin: charge isn\'t made, only moved'],
 lede:['1700 年代，摩擦起電是很受歡迎的表演：讓人頭髮豎起來、指尖冒火花。大家知道它會吸、會斥、會放電，卻說不清楚電到底是什麼。富蘭克林提出了一個簡單又可以檢驗的想法。','In the 1700s, static electricity was a popular show: hair standing on end, sparks from fingertips. People knew it attracted, repelled, and sparked, but couldn\'t say what it was. Benjamin Franklin proposed a simple, testable idea.'],
 old:{h:['兩種不同的「電流體」','Two different electric fluids'],
  p:[['1733 年，法國的杜菲發現：玻璃摩擦後帶的電，和琥珀（樹脂）摩擦後帶的電，會互相吸引；同一種則會互相排斥。他認為世界上有兩種不同的電流體：「玻璃電」和「樹脂電」，摩擦時就會產生出來。','In 1733 the Frenchman du Fay found that rubbed glass and rubbed amber (resin) attract each other, while two of the same kind repel. He concluded there were two different electric fluids, "vitreous" and "resinous," produced by rubbing.'],
   ['閃電則被當成另一回事：天上的火，跟實驗室的小火花無關。','Lightning was seen as something else entirely: fire from the sky, unrelated to sparks in the lab.']]},
 con:{h:['摩擦的兩樣東西，總是一個帶一種、一個帶另一種','Rubbing always charges both objects, oppositely'],
  p:[['如果摩擦是在「產生」電，為什麼被摩擦的兩樣東西總是同時帶電，而且一定是相反的兩種？','If rubbing creates electricity, why do both rubbed objects always get charged at once, and always with opposite kinds?'],
   ['1745 年發明的萊頓瓶可以把電存起來，放電時的火花和聲音很像縮小版的閃電。','The Leyden jar, invented in 1745, could store charge, and its spark and crack looked like miniature lightning.'],
   ['富蘭克林的想法：只有一種電流體。摩擦時，它從一個物體被移到另一個物體。多出來的叫「正」，少掉的叫「負」，總量不變。1752 年他用風箏把雷雨雲的電引進萊頓瓶，證明閃電就是同一種電。（這個實驗非常危險，之後有人因此喪命，千萬不要模仿。）','Franklin\'s idea: there is only one electric fluid. Rubbing moves it from one object to the other. Extra is "positive," missing is "negative," and the total doesn\'t change. In 1752 he used a kite to draw charge from a storm cloud into a Leyden jar, showing lightning is the same electricity. (This is extremely dangerous; people have died repeating it. Never try it.)']]},
 exps:[{h:['實驗：氣球摩擦頭髮，再讓兩顆小球靠近','Experiment: rub a balloon on hair, then bring two small balls together'],
  intro:[['按「摩擦一次」，氣球會從頭髮帶走一些帶電粒子（後來發現是電子）。右邊可以選兩顆懸吊小球帶的電。','Press Rub once and the balloon takes some charged particles (later identified as electrons) from the hair. On the right, choose the charges on two hanging balls.']],
  preds:[['fr1','預測 A：摩擦後，氣球和頭髮的電加起來，總共是？','Prediction A: after rubbing, what is the balloon\'s charge plus the hair\'s charge?'],['fr2','預測 B：兩顆都帶負電的小球靠近時，會？','Prediction B: two negatively charged balls brought close will?']],
  sim:`<div class="fig mid"><canvas id="frc"></canvas></div><div class="ctrl"><button class="pri" id="frgo"></button><button id="frrs">${b('重來','Reset')}</button><span class="read" id="frr"></span></div><div class="ctrl"><span>${b('兩顆小球','Two balls')}</span><div class="seg" id="frq"></div></div>`}],
 idea:{h:['電荷守恆：電只會被移動，不會被創造','Conservation of charge: charge moves, it is never created'],
  p:[['不管摩擦幾次，氣球的負電和頭髮的正電永遠一樣多，總和永遠是 0。這就是富蘭克林說的：電只是從一邊移到另一邊。','However many times you rub, the balloon\'s negative charge and the hair\'s positive charge always match, and the total is always 0. That\'s Franklin\'s point: charge just moves from one side to the other.'],
   ['兩種電荷：同種相斥、異種相吸。今天我們知道，在固體裡會移動的通常是帶負電的電子（1897 年發現）。','Two kinds of charge: like charges repel, unlike charges attract. Today we know that in solids the moving particles are usually negative electrons (discovered 1897).']],
  key:['q₁ + q₂ = 常數 constant','電荷守恆和能量守恆、動量守恆一樣，是物理中最基本的守恆律之一。','Charge conservation, like energy and momentum conservation, is one of physics\' most basic conservation laws.'],
  after:[['富蘭克林根據這個想法發明了避雷針：一根尖的金屬桿接到地面，讓雲裡的電安全地流進地下，不經過房子。','From this idea Franklin invented the lightning rod: a pointed metal rod wired to the ground, letting a cloud\'s charge flow safely into the earth instead of through the house.']]},
 adv:[['電荷是一份一份的','Charge comes in units',[
   ['密立坎在 1909 年量出最小的電荷單位 e：','Millikan measured the smallest unit of charge, e, in 1909:'],
   '=e = 1.602 × 10⁻¹⁹ C　⇒　1 C = 6.24 × 10¹⁸ 個電子 electrons',
   ['任何物體的電荷都是 e 的整數倍：q = n·e。','Every object\'s charge is a whole-number multiple of e: q = n·e.']]],
  ['為什麼帶電的氣球能吸住不帶電的牆','Why a charged balloon sticks to an uncharged wall',[
   ['氣球的負電把牆裡的電子推開一點，牆面靠近氣球的那一側變成微微帶正電（極化）。正電離氣球比較近，負電比較遠。因為電力隨距離變弱，吸引比排斥大一點：','The balloon\'s negative charge pushes the wall\'s electrons slightly away, so the wall\'s near surface becomes slightly positive (polarization). The positive side is closer than the negative side, and since electric force weakens with distance, attraction slightly wins:'],
   '=F_淨 net = F_吸 attract(r₁) − F_斥 repel(r₂) > 0　（r₁ < r₂）']]],
 apply:{h:['用電荷守恆解題','Solve with charge conservation'],q:[
  ['n','fr3','1. 氣球摩擦頭髮後帶了 −3 nC 的電。頭髮帶了多少電？（輸入數字，單位 nC）','1. After rubbing, a balloon carries −3 nC. What charge is on the hair? (enter the number in nC)','nC'],
  ['n','fr4','2. 1 nC（10⁻⁹ C）大約等於多少個電子的電量？用 ×10⁹ 為單位回答。','2. About how many electrons make up 1 nC (10⁻⁹ C)? Answer in units of ×10⁹.','×10⁹'],
  ['p','fr5','3. 避雷針的作用是？','3. What does a lightning rod do?']]},
 pencil:{h:['4. 拿紙筆：畫出氣球摩擦頭髮之前和之後的電荷分布','4. Pencil and paper: draw the charges on a balloon and hair before and after rubbing'],p:['用 + 和 − 表示，數量要對。','Use + and − signs, and get the counts right.'],
  ans:`<div class="two"><svg class="ill" viewBox="0 0 320 170" role="img" aria-label="Charges before and after"><rect width="320" height="170" rx="14" fill="var(--panel)"/>
   <g font-size="14" font-weight="700"><text x="20" y="26" fill="var(--ink)">前 before</text><text x="180" y="26" fill="var(--ink)">後 after</text>
   <ellipse cx="60" cy="80" rx="30" ry="38" fill="#e8893a" opacity=".6"/><text x="44" y="76" fill="var(--ink)">+ −</text><text x="44" y="96" fill="var(--ink)">− +</text>
   <ellipse cx="220" cy="80" rx="30" ry="38" fill="#e8893a" opacity=".6"/><text x="200" y="76" fill="#2160d8">− − −</text><text x="204" y="96" fill="var(--ink)">+ −</text>
   <text x="34" y="150" fill="var(--ink)">+ − + −</text><text x="196" y="150" fill="#d1495b">+ + + −</text></g></svg>
   <div><p>${b('摩擦前，兩邊的正負一樣多。摩擦後，幾個電子從頭髮跑到氣球：氣球多了幾個 −，頭髮就少了幾個 −（看起來多了 +）。總數不變。','Before rubbing, each side has equal + and −. After, a few electrons move from hair to balloon: the balloon gains some −, and the hair loses the same number (so it looks extra +). The total is unchanged.')}</p></div></div>`},
 next:['電荷會吸、會斥。這個力有多強？距離變遠時，會怎麼變弱？','Charges attract and repel. How strong is that force, and how does it weaken with distance?','庫侖用一根細絲做成的扭秤，量出了答案。','Coulomb measured the answer with a balance made from a thin twisted wire.'],
 std:['為 HS-PS2-4（用數學表示法描述物體之間的靜電力）打基礎；HS-PS3-5（用模型說明透過場交互作用的力）。科學實踐：SEP 2 建立與使用模型、SEP 6 建構解釋。跨科概念：能量與物質（守恆）；因果。','Groundwork for HS-PS2-4 (mathematical representations of electrostatic forces between objects); HS-PS3-5 (model of interaction through fields). Practices: SEP 2 Developing and Using Models, SEP 6 Constructing Explanations. Crosscutting concepts: Energy and Matter (conservation); Cause and Effect.']
}),init(){
const {t,tp,css,fit,$}=P;
let n=0,q='--',ang=0,stop=()=>{};const QS={'--':[-1,-1],'++':[1,1],'+-':[1,-1],'+0':[1,0]};
const draw=()=>{const[x,W,H]=fit($('frc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const ink=css('--ink'),mute=css('--mute'),mid=W*.48;
 x.strokeStyle=css('--line');x.beginPath();x.moveTo(mid,10);x.lineTo(mid,H-10);x.stroke();
 const hx=mid*.3,hy=H*.55,bx=mid*.68,by=H*.45;
 x.fillStyle='#8a6a3a';x.beginPath();x.arc(hx,hy,48,0,7);x.fill();
 x.fillStyle='#e8893a';x.globalAlpha=.75;x.beginPath();x.ellipse(bx,by,42,54,0,0,7);x.fill();x.globalAlpha=1;x.strokeStyle=mute;x.beginPath();x.moveTo(bx,by+54);x.lineTo(bx+4,H-14);x.stroke();
 x.font='700 14px Archivo';x.textAlign='center';
 for(let i=0;i<n&&i<24;i++){const a=i*2.4,r=12+(i%4)*7;x.fillStyle='#2160d8';x.fillText('−',bx+Math.cos(a)*r,by+Math.sin(a)*r*1.2+5);x.fillStyle='#d1495b';x.fillText('+',hx+Math.cos(a)*r*1.3,hy+Math.sin(a)*r+5)}
 x.fillStyle=ink;x.font='600 13px "Noto Sans TC",Archivo';x.fillText(tp('頭髮','Hair'),hx,hy+70);x.fillText(tp('氣球','Balloon'),bx,by-64);
 const Q=QS[q],ax=mid+(W-mid)*.5,top=26,Lr=H*.55,f=Q[0]*Q[1],sep=(Q[0]&&Q[1])?f:(Q[0]||Q[1]?-.35:0);
 const target=sep*0.32;ang+= (target-ang)*.15;
 [[-1,Q[0]],[1,Q[1]]].forEach(([s,qq])=>{const a=s*ang,px=ax+s*28+Math.sin(a)*Lr*s*s,py=top+Math.cos(a)*Lr;x.strokeStyle=mute;x.lineWidth=1.5;x.beginPath();x.moveTo(ax+s*28,top);x.lineTo(px,py);x.stroke();
  x.fillStyle=qq>0?'#d1495b':qq<0?'#2160d8':'#9aa7b4';x.beginPath();x.arc(px,py,16,0,7);x.fill();x.fillStyle='#fff';x.font='700 16px Archivo';x.fillText(qq>0?'+':qq<0?'−':'0',px,py+6)});
 x.fillStyle=ink;x.fillRect(ax-60,top-4,120,4);
 x.font='600 13px "Noto Sans TC",Archivo';x.fillStyle=ink;x.fillText(f>0?tp('相斥','Repel'):(Q[0]&&Q[1])?tp('相吸','Attract'):tp('微弱吸引（極化）','Weak attraction (polarization)'),ax,H-14);
 $('frr').textContent=tp(`氣球 −${n} · 頭髮 +${n} · 總和 0`,`Balloon −${n} · Hair +${n} · Total 0`)};
P.gate('frgo',[],()=>t('摩擦一次','Rub once'));
$('frgo').onclick=()=>{n++;if(n>=2)P.reveal('fr1');draw()};$('frrs').onclick=()=>{n=0;draw()};
P.seg('frq',[['--','− 和 −','− and −'],['++','+ 和 +','+ and +'],['+-','+ 和 −','+ and −'],['+0','+ 和不帶電','+ and neutral']],()=>q,v=>{q=v;if(v==='--')P.reveal('fr2');stop();let k=0;stop=P.run(()=>{draw();return ++k<60})});
P.pred('fr1',{c:1,o:[['氣球的電比較多，總和是負的','The balloon has more; the total is negative'],['剛好抵消，總和是 0','They cancel exactly; the total is 0'],['兩個都變成負的','Both become negative']],f:[['多摩擦幾次，看下面的讀數。','Rub a few times and watch the reading.'],['多摩擦幾次驗證。','Rub a few times to check.'],['多摩擦幾次，看頭髮帶什麼電。','Rub a few times and see what charge the hair gets.']]});
P.pred('fr2',{c:0,o:[['互相推開','Push apart'],['互相吸引','Pull together'],['沒有反應','Nothing happens']],f:[['在右邊選「− 和 −」驗證。','Choose "− and −" on the right to check.'],['在右邊選「− 和 −」看看。','Choose "− and −" on the right and see.'],['在右邊選「− 和 −」看看。','Choose "− and −" on the right and see.']]});
P.num('fr3',3,['對。電荷守恆：氣球多了 3 nC 的負電，頭髮就少了 3 nC 的負電，等於帶 +3 nC。','Right. Charge is conserved: the balloon gained 3 nC of negative charge, so the hair lost it and carries +3 nC.'],['提示：總和要是 0。','Hint: the total must be 0.'],.01);
P.num('fr4',6.24,['對。10⁻⁹ ÷ 1.602×10⁻¹⁹ ≈ 6.24 × 10⁹ 個電子。一個小小的靜電，就搬動了 60 多億個電子。','Right. 10⁻⁹ ÷ 1.602×10⁻¹⁹ ≈ 6.24 × 10⁹ electrons. A tiny static shock moves over six billion electrons.'],['提示：一個電子的電量是 1.602 × 10⁻¹⁹ C。','Hint: one electron carries 1.602 × 10⁻¹⁹ C.'],.05);
P.pred('fr5',{now:1,c:1,o:[['把閃電「吸走」，讓雲不再打雷','It "absorbs" lightning so the cloud stops thundering'],['給電一條安全的路徑流進地下','It gives the charge a safe path into the ground'],['產生相反的電，把閃電推開','It makes opposite charge that pushes lightning away']],f:[['電不會消失，只會被移動。它要被送到哪裡？','Charge doesn\'t disappear; it only moves. Where does it go?'],['對。電荷不會被消滅，只能被引導到安全的地方。','Right. Charge can\'t be destroyed, only guided somewhere safe.'],['避雷針是用導線接到地面的。','A lightning rod is wired to the ground.']]});
P.watch($('frc'),draw);
}});}
