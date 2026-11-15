{const b=P.b;
P.reg('michelson',{html:P.build('michelson',{
 title:['麥克生－莫雷：找不到的以太','Michelson–Morley: the ether that wasn\'t there'],
 lede:['聲音要靠空氣傳，水波要靠水傳。19 世紀的物理學家認為，光是波，也一定要靠某種東西傳，他們叫它「以太」。地球繞太陽以每秒 30 km 前進，應該會感受到以太的「風」。1887 年，麥克生和莫雷設計了史上最靈敏的實驗去量這陣風。','Sound needs air and water waves need water. Nineteenth-century physicists reasoned that light, being a wave, must need something too; they called it the ether. Earth moves around the Sun at 30 km/s, so it should feel an ether "wind." In 1887 Michelson and Morley built the most sensitive experiment yet to measure it.'],
 old:{h:['以太充滿整個宇宙，光在以太裡傳播','The ether fills the universe, and light travels through it'],p:[['以太被想像成看不見、沒有重量、充滿所有空間的東西。光速 c 是相對於以太的速度。地球在以太裡移動，順著以太風的光應該比較快，逆風的比較慢，就像在河裡游泳一樣。','The ether was imagined as invisible, weightless, and filling all space. The speed of light c was measured relative to it. As Earth moves through it, light going with the ether wind should be faster and light going against it slower, like swimming in a river.']]},
 con:{h:['在河裡游泳：橫渡和順逆流，誰先回來？','Swimming in a river: across and back, or up and down?'],
  p:[['兩個速度一樣的泳者，游同樣的距離再游回來：一個橫渡河流，一個先順流再逆流。只要有水流，順逆流那位一定比較慢回來。','Two equally fast swimmers each go the same distance and back: one across the river, one downstream then upstream. With any current, the up-and-down swimmer always returns later.'],
   ['麥克生的干涉儀就是這兩個泳者：一道光分成兩道，一道順著地球運動的方向來回，另一道橫著來回，再合在一起產生干涉條紋。把整台儀器轉 90°，兩道光的角色互換，條紋就應該移動。','Michelson\'s interferometer was the two swimmers: one light beam split in two, one going back and forth along Earth\'s motion and one across, then recombined to make interference fringes. Rotate the apparatus 90° and the beams swap roles, so the fringes should shift.']]},
 exps:[{h:['實驗一：河裡的兩個泳者','Experiment 1: two swimmers in a river'],
  intro:[['泳者在水中的速度都是 1，各游 100 m 再回來。調整水流速度。','Each swimmer moves at speed 1 through the water and swims 100 m out and back. Set the current.']],
  preds:[['mi1','預測 A：有水流的時候，誰先回到出發點？','Prediction A: with a current, who gets back first?']],
  sim:`<div class="fig"><canvas id="mic"></canvas></div><div class="ctrl"><button class="pri" id="migo"></button>${P.sl('miu','水流速度','Current',0,.8,.1,.5)}</div><p class="read" id="mir" style="white-space:normal"></p>`},
 {h:['實驗二：1887 年的結果','Experiment 2: the 1887 result'],chip:['真實數據','Real data'],
  intro:[['儀器的光路長 11 m，地球速度 30 km/s。用以太理論算出來，轉 90° 時條紋應該移動大約 0.4 條。他們能量到 0.01 條的移動。','The light path was 11 m and Earth\'s speed 30 km/s. Ether theory predicted a fringe shift of about 0.4 when the apparatus turned 90°. They could detect a shift of 0.01.']],
  preds:[['mi2','預測 B：他們實際量到的移動是？','Prediction B: what shift did they actually measure?']],
  sim:`<div class="ctrl"><button id="mires">${b('看實際結果','See the actual result')}</button></div><div class="bars" id="mib"></div>`}],
 idea:{h:['沒有以太風：光速在每個方向都一樣','No ether wind: light\'s speed is the same in every direction'],
  p:[['預測 0.4 條，量到幾乎是 0。他們在不同季節、不同時間重做，結果都一樣。地球明明在動，光卻好像完全不受影響。','Predicted 0.4, measured almost 0. They repeated it in different seasons and at different times of day, with the same result. Earth was clearly moving, yet light seemed completely unaffected.'],
   ['物理學家想了很多辦法挽救以太，例如物體在以太裡移動會縮短一點。18 年後，愛因斯坦提出一個更直接的想法：根本不需要以太，光速對每個觀察者來說都一樣。','Physicists tried many ways to rescue the ether, such as objects shrinking slightly as they move through it. Eighteen years later Einstein proposed something more direct: there is no ether at all, and light\'s speed is the same for every observer.']],
  key:['c = 常數 constant','不管你怎麼移動，量到的光速都是 3 × 10⁸ m/s。這是史上最有名的「失敗」實驗：它沒找到要找的東西，卻推翻了整個以太理論。','However you move, you measure light at 3 × 10⁸ m/s. It\'s history\'s most famous "failed" experiment: it didn\'t find what it was looking for, and in doing so overturned the whole ether theory.']},
 adv:[['兩個泳者的時間','The two swimmers\' times',[
   ['泳者速度 c，水流 v，距離 L：','Swimmer speed c, current v, distance L:'],
   '=順逆流 along：t∥ = L/(c+v) + L/(c−v) = 2Lc / (c² − v²)',
   '=橫渡 across：t⊥ = 2L / √(c² − v²)',
   ['t∥/t⊥ = 1/√(1 − v²/c²) > 1，所以順逆流的那位一定比較慢。這個比例後來在相對論裡又出現了，叫 γ。','t∥/t⊥ = 1/√(1 − v²/c²) > 1, so the along-the-river swimmer is always slower. That ratio reappears in relativity as γ.']]],
  ['預測的條紋移動','The predicted fringe shift',[
   '=ΔN ≈ 2L v² / (λ c²) = 2 × 11 × (3×10⁴)² / (5×10⁻⁷ × (3×10⁸)²) ≈ 0.44']]],
 apply:{h:['用推理和數字解題','Solve with reasoning and numbers'],q:[
  ['n','mi3','1. 泳者速度 2 m/s，水流 1 m/s，河寬 100 m。順流再逆流各 100 m，總共要幾秒？','1. A swimmer moves at 2 m/s in a 1 m/s current. Going 100 m downstream then 100 m back up, how many seconds in total?','s'],
  ['n','mi4','2. 地球繞太陽的速度 30 km/s，是光速 300,000 km/s 的幾分之一？用 ×10⁻⁴ 回答。','2. Earth orbits at 30 km/s. What fraction of light\'s 300,000 km/s is that? Answer in units of ×10⁻⁴.','×10⁻⁴'],
  ['p','mi5','3. 這個實驗量到「沒有變化」，為什麼還是很重要？','3. The experiment measured "no change." Why does it still matter?']]},
 pencil:{h:['4. 拿紙筆：畫出麥克生干涉儀的光路','4. Pencil and paper: draw the light paths of Michelson\'s interferometer'],p:['光源、分光鏡、兩面鏡子、偵測器。','Light source, beam splitter, two mirrors, detector.'],
  ans:`<p>${b('光從左邊射到中間斜放的分光鏡，一半往右到鏡子 1 再反射回來，一半往上到鏡子 2 再反射回來。兩道光回到分光鏡後一起往下進入偵測器，產生干涉條紋。整台儀器呈「L」形或十字形。','Light from the left hits a beam splitter set at 45° in the middle. Half goes right to mirror 1 and back; half goes up to mirror 2 and back. Both return to the splitter and head down into the detector together, making interference fringes. The layout is an L or a cross.')}</p>`},
 next:['如果光速對每個人都一樣，不管他怎麼移動，那時間和距離會發生什麼事？','If light\'s speed is the same for everyone however they move, what happens to time and distance?','1905 年，26 歲的專利局職員愛因斯坦把這個假設推到底。','In 1905, a 26-year-old patent clerk named Einstein followed that assumption all the way.'],
 std:['延伸 HS-PS4-3（評估光的模型的證據）。科學實踐：SEP 7 以證據進行論證、SEP 4 分析與詮釋數據。跨科概念：科學知識會因新證據而修正（科學的本質）。','Extends HS-PS4-3 (evaluating evidence for models of light). Practices: SEP 7 Engaging in Argument from Evidence, SEP 4 Analyzing and Interpreting Data. Crosscutting theme: scientific knowledge is revised in light of new evidence (nature of science).']
}),init(){
const {t,tp,css,fit,$}=P;let u=.5,tt=0,stop=()=>{},res=0;
const times=()=>[2/Math.sqrt(1-u*u),1/(1+u)+1/(1-u)];
const pos=(tm)=>{const [ta,tb]=times();const a=tm<ta/2?tm/(ta/2):Math.max(0,2-tm/(ta/2));let bpos;const t1=1/(1+u);bpos=tm<t1?tm/t1:Math.max(0,1-(tm-t1)*(1-u));return[a,bpos]};
const draw=()=>{const[x,W,H]=fit($('mic'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const top=30,bot=H-30,L=60,ink=css('--ink');x.fillStyle=css('--mosoft');x.fillRect(0,top,W,bot-top);
 x.strokeStyle=css('--mo');x.lineWidth=1.5;for(let k=0;k<6;k++){const y=top+20+k*(bot-top-40)/5,off=(tt*u*80)%60;for(let X=-60+off;X<W;X+=60){P.arrow(x,0,X,y,X+30,y,css('--mo'),1.5)}}
 const [a,bq]=pos(tt),Lx=W*.15,dist=(bot-top-30);
 x.fillStyle='#d1495b';x.beginPath();x.arc(Lx,bot-15-a*dist,9,0,7);x.fill();
 const Bx=Lx+40+bq*Math.min(W-Lx-80,dist);x.fillStyle='#2160d8';x.beginPath();x.arc(Bx,bot-15,9,0,7);x.fill();
 x.fillStyle=ink;x.font='600 12px "Noto Sans TC",Archivo';x.textAlign='left';x.fillText(tp('紅：橫渡來回　藍：順流再逆流　（水往右流）','Red: across and back   Blue: downstream then up   (current flows right)'),10,18)};
P.gate('migo',[],()=>t('出發','Go'));
$('migo').onclick=()=>{stop();tt=0;const [ta,tb]=times();stop=P.run(dt=>{tt+=dt*.5;draw();if(tt>=Math.max(ta,tb)){P.reveal('mi1');return false}})};
P.slider('miu',v=>v.toFixed(1),v=>{u=v;tt=0;draw();const [ta,tb]=times();$('mir').textContent=tp(`橫渡來回 ${(ta*100).toFixed(0)} s · 順逆流 ${(tb*100).toFixed(0)} s · 差 ${((tb-ta)*100).toFixed(0)} s`,`Across and back ${(ta*100).toFixed(0)} s · Down and up ${(tb*100).toFixed(0)} s · difference ${((tb-ta)*100).toFixed(0)} s`)});
const rb=()=>{if(!res){$('mib').innerHTML='';return}$('mib').innerHTML=[[t('以太理論預測','Ether theory predicts'),.44,'var(--mute)'],[t('實驗可以偵測到','Smallest detectable'),.01,'var(--mo)'],[t('1887 年實際量到','Measured in 1887'),.01,'var(--ok)']].map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${r[1]/.5*100}%;background:${r[2]}"></div></div><span class="v">${r[0].includes('1887')?'< 0.02':r[1].toFixed(2)} ${t('條','fringe')}</span></div>`).join('')};
$('mires').onclick=()=>{res=1;P.reveal('mi2');rb()};
P.pred('mi1',{c:0,o:[['橫渡來回的','The across-and-back swimmer'],['順流再逆流的','The downstream-then-up swimmer'],['同時回來','They tie']],f:[['按出發驗證。','Press Go to check.'],['順流時省下的時間，逆流時會不會全部賺回來？按出發看看。','Does the time saved downstream all get won back upstream? Press Go.'],['按出發看看。','Press Go and see.']]});
P.pred('mi2',{c:2,o:[['大約 0.4 條，跟預測一樣','About 0.4, as predicted'],['比預測更大','More than predicted'],['幾乎是 0','Almost zero']],f:[['按「看實際結果」。','Press "See the actual result."'],['按「看實際結果」。','Press "See the actual result."'],['按「看實際結果」驗證。','Press "See the actual result" to check.']]});
P.num('mi3',133.3,['對。100/3 + 100/1 = 33.3 + 100 = 133.3 s。橫渡來回是 2 × 100/√3 ≈ 115.5 s，比較快。','Right. 100/3 + 100/1 = 33.3 + 100 = 133.3 s. Across and back takes 2 × 100/√3 ≈ 115.5 s, which is faster.'],['提示：順流速度 2 + 1 = 3，逆流速度 2 − 1 = 1。','Hint: downstream speed 2 + 1 = 3, upstream 2 − 1 = 1.'],.5);
P.num('mi4',1,['對。30/300,000 = 1/10,000 = 1×10⁻⁴。這麼小的比例，要用干涉這種極度靈敏的方法才量得到。','Right. 30/300,000 = 1/10,000 = 1×10⁻⁴. A ratio that small needed something as sensitive as interference to detect.'],['提示：30 ÷ 300,000。','Hint: 30 ÷ 300,000.'],.02);
P.pred('mi5',{now:1,c:1,o:[['不重要，只是實驗失敗了','It isn\'t; the experiment just failed'],['儀器靈敏到一定能量到，卻沒有量到，代表以太理論錯了','The apparatus was sensitive enough to see it and didn\'t, so the ether theory was wrong'],['它證明地球沒有在動','It proved Earth isn\'t moving']],f:[['「應該看到卻沒看到」本身就是很強的證據。','"Should have seen it but didn\'t" is itself strong evidence.'],['對。科學裡「否定」一個預測，跟「證實」一樣有價值。','Right. In science, ruling out a prediction is as valuable as confirming one.'],['地球繞太陽運動已經有很多其他證據。','There\'s plenty of other evidence that Earth orbits the Sun.']]});
P.watch($('mic'),draw);P.onLang(rb);$('miu').dispatchEvent(new Event('input'));
}});}
