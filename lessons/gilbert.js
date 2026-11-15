{const b=P.b;
P.reg('gilbert',{html:P.build('gilbert',{
 title:['吉爾伯特：地球本身就是一塊大磁鐵','Gilbert: the Earth itself is a giant magnet'],
 lede:['指南針在中國宋朝就用來航海了，但沒有人知道它為什麼指北。1600 年，英國醫生吉爾伯特做了一顆球形磁鐵當「小地球」，用實驗回答了這個問題。','Compasses guided ships as early as China\'s Song dynasty, but nobody knew why they pointed north. In 1600 the English physician William Gilbert made a spherical magnet as a "little Earth" and answered the question by experiment.'],
 old:{h:['指南針被天上的星星或北方的磁山吸引','A compass is pulled by a star or a magnetic mountain in the north'],
  cards:[['北極星說','The Pole Star idea','指針被天上的北極星吸引，所以永遠指北。','The needle is attracted to the Pole Star, so it always points north.'],['磁山說','The magnetic mountain','北方有一座巨大的磁石山，把所有指針拉過去。','A huge lodestone mountain in the far north pulls every needle toward it.'],['民間說法','Folk beliefs','大蒜會讓磁鐵失去磁力，水手吃了大蒜就不能碰羅盤。','Garlic ruins magnets, so sailors who ate garlic weren\'t allowed near the compass.']]},
 con:{h:['指針不只指北，還會往下「傾斜」','The needle doesn\'t just point north; it tilts down'],
  p:[['1581 年，羅盤製造師諾曼發現：一根先平衡好的針，磁化之後北端會往下沉。在倫敦，大約往下傾斜 72°。','In 1581 the instrument maker Robert Norman noticed that a needle balanced level dips at its north end once magnetized. In London it tilts down about 72°.'],
   ['如果是被地平線上的星星或遠方的山吸引，針應該是水平的。往下傾斜代表吸引它的東西在「地底下」。','If a star on the horizon or a distant mountain were pulling it, the needle would stay level. Dipping down means whatever pulls it is underground.'],
   ['吉爾伯特用磁石磨成一顆小球，把小指針放在球面上不同的位置，看傾斜角會不會跟在地球上一樣。他也真的拿大蒜去擦磁鐵，磁力完全沒有變。','Gilbert ground a lodestone into a sphere and set tiny needles at different spots on its surface, to see whether the dip matched what sailors saw on Earth. He also rubbed magnets with garlic; their strength didn\'t change at all.']]},
 exps:[{h:['實驗：在「小地球」上移動指南針','Experiment: move a compass over the "little Earth"'],
  intro:[['這是地球的剖面圖，上方是北。用滑桿把指南針放在不同的緯度，或直接點畫面上的任何位置。指針的紅色端是 N 極。','This is a cross-section of Earth, with north at the top. Use the slider to place the compass at different latitudes, or tap anywhere on the picture. The red end of the needle is its N pole.']],
  preds:[['gb1','預測 A：在赤道上，指南針的指針會？','Prediction A: at the equator, the compass needle will?'],['gb2','預測 B：在北極附近，指南針的指針會？','Prediction B: near the North Pole, the compass needle will?']],
  sim:`<div class="fig tall"><canvas id="gc"></canvas></div><div class="ctrl">${P.sl('glat','磁緯度','Magnetic latitude',-90,90,5,50)}<span class="read" id="gr"></span></div>`}],
 idea:{h:['地球是一塊大磁鐵，周圍有「磁場」','Earth is a giant magnet surrounded by a magnetic field'],
  p:[['小地球上的針，從赤道的水平，到兩極的垂直，跟真實地球一模一樣。所以讓指南針轉動的，是地球自己，不是天上或遠方的東西。','On the little Earth the needle goes from level at the equator to vertical at the poles, exactly as on the real Earth. So what turns a compass is the Earth itself, not anything in the sky or far away.'],
   ['畫面上的曲線叫「磁力線」：指針在每個地方都會順著線的方向排好。線越密，磁力越強。','The curves are magnetic field lines: everywhere, a needle lines up along them. Where lines crowd together, the field is stronger.'],
   ['同極相斥、異極相吸。指南針的 N 極被吸向北方，所以地理北極附近其實是地球這塊磁鐵的「S 極」。','Like poles repel and unlike poles attract. A compass\'s N pole is pulled north, so near the geographic North Pole sits the Earth-magnet\'s S pole.']],
  key:['磁場','Magnetic field','磁鐵周圍每個地方都有方向和強弱，可以用磁力線畫出來。吉爾伯特也發現琥珀摩擦後吸小紙片是另一種力，並把它取名叫「電」（electricus）。','Around a magnet, every point has a direction and strength, drawn as field lines. Gilbert also showed that rubbed amber attracting bits of paper is a different force, and named it "electric" (electricus).']},
 adv:[['磁偶極的磁場','The field of a magnetic dipole',[
   ['地球的磁場很接近一根放在地心的條形磁鐵（磁偶極）。在距離 r、磁緯度 λ 的地方，水平和垂直分量是：','Earth\'s field is close to that of a bar magnet at its center (a magnetic dipole). At distance r and magnetic latitude λ, the horizontal and vertical components are:'],
   '=B_水平 horizontal = B₀(R/r)³·cosλ　　B_垂直 vertical = 2B₀(R/r)³·sinλ',
   ['強度跟 1/r³ 成正比：距離 2 倍，磁場只剩 1/8。比引力的 1/r² 掉得更快。','Strength goes as 1/r³: twice as far, one-eighth the field. It falls faster than gravity\'s 1/r².']]],
  ['傾角公式','The dip formula',[
   ['傾角 I 是指針跟水平的夾角，等於垂直分量 ÷ 水平分量：','The dip I is the needle\'s angle below horizontal, the vertical over the horizontal component:'],
   '=tan I = 2·tan λ',
   ['赤道 λ = 0，I = 0（水平）；兩極 λ = 90°，I = 90°（垂直）。','At the equator λ = 0 and I = 0 (level); at the poles λ = 90° and I = 90° (vertical).']]]],
 apply:{h:['用磁場的模型解題','Solve with the field model'],q:[
  ['n','gb3','1. 在磁緯度 45° 的地方，指南針的傾角大約是幾度？（提示：tan I = 2 tan λ）','1. At magnetic latitude 45°, about what is the dip angle? (Hint: tan I = 2 tan λ)','°'],
  ['p','gb4','2. 指南針的 N 極指向北方。地理北極附近，是地球這塊磁鐵的哪一極？','2. A compass\'s N pole points north. Which pole of the Earth-magnet is near the geographic North Pole?'],
  ['n','gb5','3. 地表的磁場大約 40 μT。在離地心 2 倍地球半徑的地方，大約剩多少？','3. Earth\'s surface field is about 40 μT. At twice Earth\'s radius from the center, about how strong is it?','μT']]},
 pencil:{h:['4. 拿紙筆：畫出一根條形磁鐵周圍的磁力線，並在三個位置畫出指南針','4. Pencil and paper: draw the field lines around a bar magnet and draw compasses at three spots'],p:['標出 N、S 極和每條線的方向。','Label N and S, and the direction of each line.'],
  ans:`<div class="two"><svg class="ill" viewBox="0 0 320 200" role="img" aria-label="Bar magnet field lines"><rect width="320" height="200" rx="14" fill="var(--panel)"/>
   <g fill="none" stroke="var(--mo)" stroke-width="2"><path d="M200 100 C 240 40, 80 40, 120 100"/><path d="M200 100 C 270 0, 50 0, 120 100"/><path d="M200 100 C 240 160, 80 160, 120 100"/><path d="M200 100 C 270 200, 50 200, 120 100"/></g>
   <rect x="120" y="88" width="40" height="24" fill="#d1495b"/><rect x="160" y="88" width="40" height="24" fill="#2160d8"/>
   <text x="134" y="105" fill="#fff" font-weight="700" font-size="13">S</text><text x="174" y="105" fill="#fff" font-weight="700" font-size="13">N</text></svg>
   <div><p>${b('線從 N 極出來、繞回 S 極。指南針的紅色 N 端順著線的方向。兩極附近線最密，磁力最強。','Lines leave the N pole and loop back into the S pole. A compass\'s red N end follows the line direction. Lines bunch up near the poles, where the field is strongest.')}</p></div></div>`},
 next:['吉爾伯特說琥珀吸紙片是另一種力，叫「電」。電到底是什麼？跟天上的閃電有關嗎？','Gilbert said amber attracting paper was a different force, "electric." What is electricity? Is it related to lightning?','一百多年後，富蘭克林用一個很大膽的實驗回答了。','Over a century later, Benjamin Franklin answered with a famously daring experiment.'],
 std:['表現預期 HS-PS3-5（建立並使用模型，說明兩個物體透過場交互作用時的力與能量變化）、為 HS-PS2-5 打基礎。科學實踐：SEP 2 建立與使用模型、SEP 3 規劃與執行調查。跨科概念：模式；系統與系統模型。模擬使用理想的磁偶極模型。','Performance expectation HS-PS3-5 (develop and use a model of two objects interacting through fields to illustrate the forces between them), groundwork for HS-PS2-5. Practices: SEP 2 Developing and Using Models, SEP 3 Planning and Carrying Out Investigations. Crosscutting concepts: Patterns; Systems and System Models. The simulation uses an ideal dipole model.']
}),init(){
const {t,tp,css,fit,$}=P;
let pos=null,lat=50,seen={eq:0,pole:0};
const B=(px,py)=>{const r=Math.hypot(px,py),ux=px/r,uy=py/r,md=-uy;return[(3*md*ux)/r**3,(3*md*uy+1)/r**3]};
const draw=()=>{const[x,W,H]=fit($('gc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const R=Math.min(W,H)*.2,cx=W/2,cy=H/2,mo=css('--mo'),ink=css('--ink');
 x.strokeStyle=mo;x.globalAlpha=.45;x.lineWidth=1.5;
 [1.4,2,3,4.5,7].forEach(L=>[1,-1].forEach(sx=>{x.beginPath();let st=0;for(let a=-89;a<=89;a+=1){const la=a*Math.PI/180,r=L*Math.cos(la)**2;if(r<1){st=0;continue}const X=cx+sx*r*R*Math.cos(la),Y=cy-r*R*Math.sin(la);st?x.lineTo(X,Y):x.moveTo(X,Y);st=1}x.stroke()}));
 x.globalAlpha=1;x.fillStyle='#4f8fbf';x.beginPath();x.arc(cx,cy,R,0,7);x.fill();
 x.fillStyle='#2160d8';x.fillRect(cx-8,cy-R*.55,16,R*.55);x.fillStyle='#d1495b';x.fillRect(cx-8,cy,16,R*.55);
 x.fillStyle='#fff';x.font='700 12px Archivo';x.textAlign='center';x.fillText('S',cx,cy-R*.3);x.fillText('N',cx,cy+R*.32);
 x.fillStyle=ink;x.font='600 13px "Noto Sans TC",Archivo';x.fillText(tp('地理北','Geographic north'),cx,cy-R-10);x.fillText(tp('地理南','Geographic south'),cx,cy+R+22);
 let p=pos||[Math.cos(lat*Math.PI/180)*1.08,Math.sin(lat*Math.PI/180)*1.08];
 const [bx,by]=B(p[0],p[1]),bm=Math.hypot(bx,by),sx=cx+p[0]*R,sy=cy-p[1]*R,L=22;
 x.fillStyle=css('--bg');x.strokeStyle=ink;x.lineWidth=2;x.beginPath();x.arc(sx,sy,L+4,0,7);x.fill();x.stroke();
 const dx=bx/bm,dy=-by/bm;x.lineWidth=5;x.strokeStyle='#d1495b';x.beginPath();x.moveTo(sx,sy);x.lineTo(sx+dx*L,sy+dy*L);x.stroke();x.strokeStyle=css('--mute');x.beginPath();x.moveTo(sx,sy);x.lineTo(sx-dx*L,sy-dy*L);x.stroke();
 const r=Math.hypot(...p),ux=p[0]/r,uy=p[1]/r,hx=-uy,hy=ux,hor=Math.abs(bx*hx+by*hy),ver=bx*ux+by*uy,dip=Math.atan2(-ver,hor)*180/Math.PI,rl=Math.asin(uy)*180/Math.PI;
 $('gr').textContent=tp(`緯度 ${rl.toFixed(0)}° · 傾角 ${Math.abs(dip).toFixed(0)}°${Math.abs(dip)<2?'（水平）':dip>0?'（N 端朝下）':'（N 端朝上）'} · 強度 ${(bm*Math.pow(1.08,3)).toFixed(2)}×`,`Latitude ${rl.toFixed(0)}° · dip ${Math.abs(dip).toFixed(0)}°${Math.abs(dip)<2?' (level)':dip>0?' (N end down)':' (N end up)'} · strength ${(bm*Math.pow(1.08,3)).toFixed(2)}×`);
 if(Math.abs(rl)<6&&r<1.3){seen.eq=1;P.reveal('gb1')}if(rl>80&&r<1.3){seen.pole=1;P.reveal('gb2')}};
$('gc').addEventListener('pointerdown',e=>{const c=$('gc'),rc=c.getBoundingClientRect(),R=Math.min(rc.width,rc.height)*.2,px=(e.clientX-rc.left-rc.width/2)/R,py=-(e.clientY-rc.top-rc.height/2)/R;if(Math.hypot(px,py)<1.05)return;pos=[px,py];draw()});
P.slider('glat',v=>v+'°',v=>{lat=v;pos=null;draw()});
P.pred('gb1',{c:0,o:[['水平，指向北方','Level, pointing north'],['往下傾斜','Tilted down'],['亂轉，沒有固定方向','Spins with no fixed direction']],f:[['把磁緯度拉到 0° 驗證。','Set latitude to 0° to check.'],['把磁緯度拉到 0° 看看。','Set latitude to 0° and see.'],['把磁緯度拉到 0° 看看。','Set latitude to 0° and see.']]});
P.pred('gb2',{c:1,o:[['還是水平指北','Still level, pointing north'],['幾乎垂直，N 端朝下','Nearly vertical, N end down'],['幾乎垂直，N 端朝上','Nearly vertical, N end up']],f:[['把磁緯度拉到 90° 看看。','Set latitude to 90° and see.'],['把磁緯度拉到 90° 驗證。','Set latitude to 90° to check.'],['把磁緯度拉到 90° 看看。','Set latitude to 90° and see.']]});
P.num('gb3',63.4,['對。tan I = 2 × tan 45° = 2，I = arctan 2 ≈ 63.4°。','Right. tan I = 2 × tan 45° = 2, so I = arctan 2 ≈ 63.4°.'],['提示：tan 45° = 1，所以 tan I = 2。再用 arctan。','Hint: tan 45° = 1, so tan I = 2. Then take arctan.'],.6);
P.pred('gb4',{now:1,c:1,o:[['N 極','Its N pole'],['S 極','Its S pole'],['不是磁極','Not a magnetic pole']],f:[['同極相斥。如果那裡是 N 極，指南針的 N 端會被推開。','Like poles repel. If an N pole were there, the compass\'s N end would be pushed away.'],['對。異極相吸，所以吸住指南針 N 端的，一定是 S 極。','Right. Unlike poles attract, so whatever pulls the compass\'s N end must be an S pole.'],['指南針被吸過去，代表那裡有磁極。','The compass is pulled there, so there is a magnetic pole.']]});
P.num('gb5',5,['對。距離 2 倍，磁場變 1/2³ = 1/8：40 ÷ 8 = 5 μT。','Right. Twice the distance means 1/2³ = 1/8: 40 ÷ 8 = 5 μT.'],['提示：磁偶極跟 1/r³ 成正比。','Hint: a dipole field goes as 1/r³.'],.2);
P.watch($('gc'),draw);
}});}
