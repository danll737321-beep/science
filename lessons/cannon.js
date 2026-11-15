{const b=P.b;
P.reg('cannon',{html:`
<section class="band"><div class="wrap hero">
 <div>
  <span class="chip">${b('節點 4 · 1687','Node 4 · 1687')}</span>
  <h1>${b('牛頓的砲彈：月亮其實一直在往下掉','Newton\'s Cannon: the Moon is always falling')}</h1>
  <p class="lede" style="margin-top:14px">${b('牛頓在《自然哲學的數學原理》裡畫了一張圖：一座高山上的大砲，把砲彈射得越來越快。這張圖把「地上的掉落」和「天上的軌道」接成同一件事。','In his Principia, Newton drew a cannon on a tall mountain firing faster and faster. That one picture joined falling on Earth and orbiting in the sky into a single idea.')}</p>
 </div>
 </div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('舊觀念','The old idea')}</span>
 <h2>${b('天上和地上，用兩套不同的規則','Heaven and Earth follow different rules')}</h2>
 <p>${b('從亞里斯多德開始，大家都認為地上的東西會掉落、會停下來，天上的星體則永遠完美地繞圈。即使克卜勒已經找出軌道的規律，也沒有人把它和掉落的石頭連在一起。','From Aristotle on, people believed earthly things fall and stop, while heavenly bodies circle forever, perfectly. Even after Kepler found the orbit patterns, nobody connected them to a falling stone.')}</p>
</div></section>

<section class="band"><div class="wrap">
 <span class="chip">${b('先預測，再實驗','Predict, then test')}</span>
 <h2>${b('實驗一：直接放手 vs. 水平丟出','Experiment 1: drop vs. throw sideways')}</h2>
 <p>${b('兩顆球從 20 m 高同時出發：一顆直接放手，一顆水平丟出。忽略空氣阻力。','Two balls leave a 20 m height at the same moment: one dropped, one thrown sideways. Ignore air resistance.')}</p>
 <h3>${b('預測 A：哪一顆先落地？','Prediction A: which one hits the ground first?')}</h3>
 <div class="opts" id="pc1"></div><div id="fc1"></div>
 <div class="fig mid"><canvas id="cc1"></canvas></div>
 <div class="ctrl"><button class="pri" id="cgo1" disabled></button>
  <label>${b('丟出速度','Throw speed')} <input type="range" id="cv1" min="2" max="14" step="1" value="8"> <span class="read" id="cv1v">8 m/s</span></label></div>
 <div class="lock" id="c-idea1"><div class="key"><div class="big">${b('水平和垂直，各走各的','Sideways and down are independent')}</div>
  <p style="margin:6px 0 0">${b('每一個時刻，兩顆球都在同一個高度。往旁邊跑多快，完全不影響往下掉多快。這是伽利略發現的，牛頓接著問：那往旁邊跑到底可以多快？','At every instant, both balls are at the same height. How fast you go sideways has no effect on how fast you fall. Galileo found this. Newton then asked: how fast could sideways get?')}</p></div></div>
</div></section>

<section class="band lock" id="c-logic"><div class="wrap">
 <span class="chip">${b('推理','The reasoning')}</span>
 <h2>${b('地球是圓的，地面會「彎下去」','Earth is round, so the ground curves away')}</h2>
 <div class="two">
  <div>
   <p>${b('兩個事實就夠了：','Two facts are enough:')}</p>
   <p>${b('第一，任何東西從靜止開始掉，第 1 秒會掉大約 5 m（½ × 9.8 × 1²）。','First, anything dropped from rest falls about 5 m in the first second (½ × 9.8 × 1²).')}</p>
   <p>${b('第二，地球的表面每往前 8 km，就會比水平線低大約 5 m。','Second, for every 8 km you travel along Earth\'s surface, the surface drops about 5 m below a straight horizontal line.')}</p>
   <p>${b('所以如果砲彈每秒往前飛 8 km，它往下掉 5 m 的同時，地面也剛好彎下去 5 m。它一直在掉，卻永遠碰不到地面。','So if a cannonball flies 8 km forward each second, while it falls 5 m, the ground also curves down 5 m. It keeps falling but never reaches the ground.')}</p>
  </div>
  <svg class="ill" viewBox="0 0 360 220" role="img" aria-label="Earth curvature"><rect width="360" height="220" rx="14" fill="var(--panel)"/>
   <path d="M20 70 Q180 40 340 150" fill="none" stroke="#7a6a4a" stroke-width="5"/>
   <line x1="40" y1="64" x2="340" y2="64" stroke="var(--mo)" stroke-width="2" stroke-dasharray="7 6"/>
   <line x1="320" y1="68" x2="320" y2="132" stroke="var(--cu)" stroke-width="3"/><path d="M312 124 L320 140 L328 124Z" fill="var(--cu)"/>
   <circle cx="48" cy="58" r="9" fill="#56616d"/>
   <text x="130" y="54" font-size="14" font-weight="700" fill="var(--mo)">8 km →</text>
   <text x="236" y="112" font-size="14" font-weight="700" fill="var(--cu)">5 m ↓</text>
   <text x="40" y="200" font-size="12" fill="var(--mute)">${'彎曲已誇大 · curvature exaggerated'}</text></svg>
 </div>
 <h3 style="margin-top:18px">${b('預測 B：從高山上水平發射，砲彈要多快才永遠不會落地？','Prediction B: fired sideways from a tall mountain, how fast must the cannonball go to never land?')}</h3>
 <div class="opts" id="pc2"></div><div id="fc2"></div>
</div></section>

<section class="band lock" id="c-exp2"><div class="wrap">
 <span class="chip">${b('實驗','Test it')}</span>
 <h2>${b('實驗二：牛頓的高山大砲','Experiment 2: Newton\'s mountain cannon')}</h2>
 <p>${b('山頂在 200 km 高，假設沒有空氣。每一發的軌跡都會留著，方便比較。','The summit is 200 km up, with no air. Each shot\'s path stays on screen so you can compare.')}</p>
 <div class="fig tall"><canvas id="cc2"></canvas></div>
 <div class="ctrl"><button class="pri" id="cgo2">${b('發射','Fire')}</button>
  <label>${b('發射速度','Launch speed')} <input type="range" id="cv2" min="2" max="12" step="0.1" value="5"> <span class="read" id="cv2v">5.0 km/s</span></label>
  <button id="cclr">${b('清除軌跡','Clear paths')}</button></div>
 <p class="read" id="cr2" style="white-space:normal"></p>
 <p class="std">${b('試試 4、6、7.8、9、11.5 km/s。','Try 4, 6, 7.8, 9, and 11.5 km/s.')}</p>
</div></section>

<section class="band lock" id="c-idea2"><div class="wrap">
 <span class="chip">${b('新想法','The new idea')}</span>
 <h2>${b('繞行就是「一直掉，但一直沒掉到」','Orbiting is falling and always missing')}</h2>
 <div class="two">
  <div>
   <p>${b('速度不夠，砲彈落地；剛好約 7.8 km/s，變成一個圓；再快一點，變成橢圓，跟克卜勒找到的形狀一樣；超過大約 11 km/s，就會脫離地球。','Too slow and it lands. Around 7.8 km/s it traces a circle. A bit faster and it becomes an ellipse, the same shape Kepler found. Above about 11 km/s, it escapes Earth.')}</p>
   <p>${b('牛頓的結論：月亮也是一顆「砲彈」。它一直在往地球掉，只是往旁邊跑得夠快，所以一直掉不到。天上和地上用的是同一套規則。','Newton\'s conclusion: the Moon is a cannonball too. It\'s always falling toward Earth, but moving sideways fast enough that it never lands. Heaven and Earth follow the same rules.')}</p>
  </div>
  <div class="key" style="margin-top:0"><div class="big">${b('天上 = 地上','Sky = Earth')}</div><p style="margin:6px 0 0">${b('讓蘋果掉下來的，和讓月亮繞圈的，可能是同一種拉力。下一步：證明它。','The pull that drops an apple might be the same pull that keeps the Moon circling. Next step: prove it.')}</p></div>
 </div>
</div></section>

${P.adv([["平拋的軌跡是拋物線", "A sideways throw traces a parabola", [["水平和垂直各自獨立：x = vt，y = h − ½gt²。由第一式 t = x/v，代入第二式：", "Horizontal and vertical are independent: x = vt, y = h − ½gt². From the first, t = x/v; substitute into the second:"], "=y = h − (g / 2v²)·x²", ["這是拋物線。v 越大，拋物線越平、越寬。", "A parabola. The larger v, the flatter and wider it gets."]]], ["地面下降多少：d²/(2R)", "How far the ground drops: d²/(2R)", [["往前走水平距離 d，到地心的距離從 R 變成 √(R² + d²)。比地面高出 δ：", "Travel a horizontal distance d and your distance to Earth's center grows from R to √(R² + d²). The height above ground δ satisfies:"], "=(R + δ)² = R² + d²　⇒　2Rδ + δ² = d²　⇒　δ ≈ d² / (2R)", ["（δ 比 R 小很多，δ² 可以忽略）。d = 8 km、R = 6,371 km 時，δ ≈ 5.0 m。", "(δ is tiny compared with R, so δ² is negligible.) With d = 8 km and R = 6,371 km, δ ≈ 5.0 m."]]], ["繞行速度", "Orbital speed", [["掉落 ½gt² 要等於地面下降 (vt)²/(2R)：", "The fall ½gt² must equal the ground's drop (vt)²/(2R):"], "=½gt² = v²t² / (2R)　⇒　v = √(gR) = √(9.8 × 6,371,000) ≈ 7.9 km/s", ["t 消掉了，所以每一秒都成立，砲彈可以一直繞下去。", "t cancels, so it holds every second and the cannonball keeps circling."]]]])}
<section class="band lock" id="c-apply"><div class="wrap">
 <span class="chip">${b('拿來用','Use it')}</span>
 <h2>${b('用「一直在掉」的想法解釋','Explain with "always falling"')}</h2>
 ${P.phtml('c3','1. 國際太空站的太空人為什麼會飄起來？','1. Why do astronauts float on the International Space Station?')}
 ${P.qhtml('c4','2. 忽略空氣，一顆石頭從靜止開始掉，2 秒內掉了幾公尺？','2. Ignoring air, how far does a stone dropped from rest fall in 2 seconds?','m')}
 ${P.phtml('c5','3. 從高山以 9 km/s 水平發射，軌跡會是什麼樣子？','3. Fired sideways from the mountain at 9 km/s, what does the path look like?')}
 <div class="q" style="border:0">
  <h3>${b('4. 拿紙筆：畫出牛頓的高山和三條路徑','4. Pencil and paper: draw Newton\'s mountain and three paths')}</h3>
  <p>${b('畫一個地球和一座山，分別畫出慢速、約 8 km/s、和 10 km/s 的路徑。','Draw Earth and a mountain, then paths for a slow shot, about 8 km/s, and 10 km/s.')}</p>
  <button data-show="c-ans">${b('我畫好了，看答案','I\'ve drawn it, show me')}</button>
  <div id="c-ans" class="hide" style="margin-top:14px"><div class="two">
   <svg class="ill" viewBox="0 0 320 260" role="img" aria-label="Three cannon paths"><rect width="320" height="260" rx="14" fill="var(--panel)"/>
    <circle cx="140" cy="140" r="70" fill="#4f8fbf"/><path d="M130 72 L140 52 L150 72Z" fill="#7a6a4a"/>
    <path d="M142 54 Q190 56 196 100" fill="none" stroke="var(--bad)" stroke-width="3"/>
    <circle cx="140" cy="140" r="88" fill="none" stroke="var(--ok)" stroke-width="3"/>
    <ellipse cx="190" cy="140" rx="138" ry="104" fill="none" stroke="var(--mo)" stroke-width="3"/>
    <text x="200" y="96" font-size="12" font-weight="700" fill="var(--bad)">slow</text><text x="40" y="236" font-size="12" font-weight="700" fill="var(--ok)">≈ 8 km/s</text><text x="250" y="40" font-size="12" font-weight="700" fill="var(--mo)">10 km/s</text></svg>
   <div><p>${b('慢的落在山附近；約 8 km/s 繞成圓；更快變成橢圓，在山的另一側飛得更高，最後回到山頂。','The slow shot lands near the mountain. About 8 km/s makes a circle. Faster makes an ellipse that swings higher on the far side and comes back to the summit.')}</p></div>
  </div></div>
 </div>
</div></section>
${P.nextBand(3,'拉住月亮的，和拉蘋果的是同一個力嗎？如果是，它離地球越遠會變多弱？','Is the pull on the Moon the same as the pull on an apple? If so, how much weaker does it get farther from Earth?','牛頓用月亮做了一次檢驗，答案只差不到 1%。','Newton tested it with the Moon, and the numbers matched to within about 1%.')}
${P.std('表現預期 HS-PS2-1（運動與力）、HS-ESS1-4（預測軌道運動）。科學實踐：SEP 2 建立與使用模型、SEP 5 數學與計算思維。跨科概念：系統與系統模型；尺度、比例與數量。模擬：地球質量 GM = 398,600 km³/s²，半徑 6,371 km，忽略空氣。','Performance expectations HS-PS2-1 (force and motion), HS-ESS1-4 (predicting orbital motion). Practices: SEP 2 Developing and Using Models, SEP 5 Mathematical and Computational Thinking. Crosscutting concepts: Systems and System Models; Scale, Proportion, and Quantity. Simulation: Earth GM = 398,600 km³/s², radius 6,371 km, no air.')}
`,init(){
const {t,tp,css,fit,$}=P;
/* exp 1 */
let v1=8,t1=0,stop1=()=>{},ran1=0;const H0=20,G=9.8,TF=Math.sqrt(2*H0/G);
const draw1=()=>{const[x,W,H]=fit($('cc1'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const gy=H-40,k=Math.min((gy-30)/H0,(W-80)/(14*TF)),x0=50,ink=css('--ink'),mute=css('--mute'),mo=css('--mo'),cu=css('--cu');
 x.strokeStyle=mute;x.lineWidth=2;x.beginPath();x.moveTo(0,gy);x.lineTo(W,gy);x.stroke();x.fillStyle=mute;x.fillRect(0,gy-H0*k,x0-6,H0*k);
 for(let s=.2;s<=Math.min(t1,TF)+1e-9;s+=.2){const y=gy-(H0-.5*G*s*s)*k;x.strokeStyle=mute;x.globalAlpha=.35;x.setLineDash([3,4]);x.beginPath();x.moveTo(x0,y);x.lineTo(x0+v1*s*k,y);x.stroke();x.setLineDash([]);x.globalAlpha=1;
  x.fillStyle=cu;x.globalAlpha=.5;x.beginPath();x.arc(x0,y,4,0,7);x.fill();x.fillStyle=mo;x.beginPath();x.arc(x0+v1*s*k,y,4,0,7);x.fill();x.globalAlpha=1}
 const tt=Math.min(t1,TF),y=gy-(H0-.5*G*tt*tt)*k;
 x.fillStyle=cu;x.beginPath();x.arc(x0,y-8,8,0,7);x.fill();x.fillStyle=mo;x.beginPath();x.arc(x0+v1*tt*k,y-8,8,0,7);x.fill();
 x.fillStyle=ink;x.font='600 13px "Noto Sans TC",Archivo';x.fillText(tp('紅：直接放手　藍：水平丟出','Red: dropped   Blue: thrown sideways'),x0+10,22);
 x.fillText(`t = ${tt.toFixed(2)} s`,x0+10,42)};
const lab1=()=>ran1?t('再一次','Again'):t('同時放開','Release both');
P.gate('cgo1',['c1'],lab1);
$('cgo1').onclick=()=>{stop1();t1=0;stop1=P.run(dt=>{t1+=dt*.6;draw1();if(t1>=TF){ran1++;$('cgo1').innerHTML=lab1();P.reveal('c1');P.show('c-idea1');P.show('c-logic');return false}})};
$('cv1').oninput=e=>{v1=+e.target.value;$('cv1v').textContent=v1+' m/s';t1=0;draw1()};
P.pred('c1',{c:1,o:[['直接放手的先落地','The dropped one'],['同時落地','Both at the same time'],['水平丟出的先落地','The thrown one']],f:[['很多人這樣想，因為丟出去的要「走比較遠」。放手看看。','Many think so because the thrown one travels farther. Release and see.'],['放手驗證，注意兩顆球的高度。','Release to check, and watch the heights of the two balls.'],['放手看看。','Release and see.']]});
P.pred('c2',{c:1,o:[['大約 1 km/s（子彈的速度）','About 1 km/s (a bullet)'],['大約 8 km/s','About 8 km/s'],['光速，300,000 km/s','The speed of light, 300,000 km/s']],f:[['1 秒往前 1 km，地面只彎下去一點點，但砲彈掉了 5 m。去發射看看。','In 1 s it goes 1 km, the ground barely curves, but the ball drops 5 m. Go fire it.'],['用上面兩個事實算出來的。去發射驗證。','That\'s what the two facts give. Go fire and check.'],['遠遠超過需要的速度。去發射看看實際要多少。','Far more than needed. Go fire and find the real number.']]});
P.onPick(k=>{if(k==='c2')P.show('c-exp2')});
/* exp 2 */
const GM=398600,RE=6371,R0=RE+200;let v2=5,shots=[],live=null,stop2=()=>{};
const cols=['#d1495b','#e8893a','#2a9d8f','#2160d8','#7b4b6a','#56616d'];
const draw2=()=>{const[x,W,H]=fit($('cc2'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const cx=W/2,cy=H*.34,sc=Math.min(W,H)*.155/RE,P2=(p)=>[cx+p[0]*sc,cy-p[1]*sc];
 x.fillStyle='#4f8fbf';x.beginPath();x.arc(cx,cy,RE*sc,0,7);x.fill();
 x.fillStyle='#7a6a4a';x.beginPath();x.moveTo(cx-12,cy-RE*sc+2);x.lineTo(cx,cy-R0*sc-6);x.lineTo(cx+12,cy-RE*sc+2);x.fill();
 shots.concat(live?[live]:[]).forEach(s=>{x.strokeStyle=s.c;x.lineWidth=2.5;x.beginPath();s.tr.forEach((p,i)=>{const q=P2(p);i?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1])});x.stroke();
  const q=P2(s.p);x.fillStyle=s.c;x.beginPath();x.arc(q[0],q[1],4,0,7);x.fill()});
 x.fillStyle=css('--mute');x.font='12px Archivo';x.textAlign='left';x.fillText(tp('地球（比例正確，山高已誇大）','Earth (to scale; mountain exaggerated)'),10,H-12)};
const fire=()=>{stop2();if(live)shots.push(live);if(shots.length>5)shots.shift();
 const s={p:[0,R0],v:[v2,0],tr:[[0,R0]],c:cols[(shots.length)%6],ang:0,tt:0,v0:v2};live=s;
 const en=v2*v2/2-GM/R0,bound=en<0,a=bound?-GM/(2*en):0,per=bound?2*Math.PI*Math.sqrt(a**3/GM):0,ts=bound?per/6:3000,vc=Math.sqrt(GM/R0);
 const acc=p=>{const r=Math.hypot(...p),k=-GM/r**3;return[k*p[0],k*p[1]]};
 let prevA=Math.atan2(s.p[0],s.p[1]),out='';
 stop2=P.run(dt=>{let n=Math.ceil(ts*dt/2),h=ts*dt/n;
  for(let i=0;i<n;i++){const a0=acc(s.p);s.p=[s.p[0]+s.v[0]*h+.5*a0[0]*h*h,s.p[1]+s.v[1]*h+.5*a0[1]*h*h];const a1=acc(s.p);s.v=[s.v[0]+.5*(a0[0]+a1[0])*h,s.v[1]+.5*(a0[1]+a1[1])*h];s.tt+=h;
   const an=Math.atan2(s.p[0],s.p[1]);let d=an-prevA;if(d<-Math.PI)d+=2*Math.PI;if(d>Math.PI)d-=2*Math.PI;s.ang+=d;prevA=an;
   const r=Math.hypot(...s.p);
   if(r<RE){out=tp(`落地：沿著地面飛了約 ${Math.round(s.ang*RE).toLocaleString()} km，花了 ${(s.tt/60).toFixed(1)} 分鐘`,`Landed: about ${Math.round(s.ang*RE).toLocaleString()} km along the ground after ${(s.tt/60).toFixed(1)} min`);break}
   if(bound&&s.ang>=2*Math.PI){out=Math.abs(v2-vc)<.15?tp(`繞了一整圈回到山頂（接近圓形），一圈 ${(per/60).toFixed(0)} 分鐘`,`A full circle back to the summit (nearly round), ${(per/60).toFixed(0)} min per lap`):tp(`橢圓軌道：繞一圈回到山頂，一圈 ${(per/3600).toFixed(1)} 小時`,`Elliptical orbit: one lap back to the summit, ${(per/3600).toFixed(1)} h per lap`);break}
   if(!bound&&s.tt>30000){out=tp('速度超過逃逸速度，砲彈離開地球，不會再回來','Faster than escape speed: the cannonball leaves Earth for good');break}}
  if(s.tr.length<4000)s.tr.push(s.p.slice());draw2();
  if(out){$('cr2').textContent=out;if(bound&&Math.hypot(...s.p)>=RE){P.reveal('c2');P.show('c-idea2');P.show('c-apply');P.show('cannon-next')}return false}})};
$('cgo2').onclick=fire;$('cclr').onclick=()=>{stop2();shots=[];live=null;$('cr2').textContent='';draw2()};
$('cv2').oninput=e=>{v2=+e.target.value;$('cv2v').textContent=v2.toFixed(1)+' km/s'};
P.pred('c3',{now:1,c:1,o:[['太空站那麼高，已經沒有重力了','Up there, there\'s no gravity'],['太空人和太空站一起在往地球掉','The astronauts and the station are falling together'],['太空站在真空裡，真空會讓東西浮起來','The station is in a vacuum, and vacuum makes things float']],f:[['太空站只有 400 km 高，那裡的重力還有地面的 90% 左右（下一課會算）。','The station is only 400 km up, where gravity is still about 90% of ground level (you\'ll calculate this next lesson).'],['對。它們以同樣的方式一起掉，就像在下墜的電梯裡，所以人感覺不到自己的重量。','Right. They fall together the same way, like being in a falling elevator, so nobody feels their weight.'],['真空只是沒有空氣，不會讓東西浮起來。','A vacuum just means no air. It doesn\'t make things float.']]});
P.num('c4',19.6,['對。½ × 9.8 × 2² = 19.6 m。時間變 2 倍，距離變 4 倍，跟伽利略的 d ∝ t² 一樣。','Right. ½ × 9.8 × 2² = 19.6 m. Double the time, four times the distance, just like Galileo\'s d ∝ t².'],['提示：1 秒掉 4.9 m，時間 2 倍時距離是幾倍？','Hint: 4.9 m in 1 s. If time doubles, how many times the distance?'],.3);
P.pred('c5',{now:1,c:2,o:[['還是會落地','It still lands'],['一個正圓','A perfect circle'],['一個拉長的橢圓，在地球另一側飛得比較高','A stretched ellipse that goes higher on the far side'],['飛離地球','It escapes Earth']],f:[['超過約 7.8 km/s 就不會落地了。','Above about 7.8 km/s it no longer lands.'],['正圓要剛好約 7.8 km/s。','A circle needs about 7.8 km/s exactly.'],['對。比圓形需要的速度快一點，就變成橢圓。','Right. A bit faster than circular speed makes an ellipse.'],['要超過大約 11 km/s 才會逃離。','Escape needs more than about 11 km/s.']]});
P.watch($('cc1'),draw1);P.watch($('cc2'),draw2);
}});}
