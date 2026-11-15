{const b=P.b;
P.reg('hertz',{html:P.build('hertz',{
 title:['赫茲：做出看不見的光','Hertz: making invisible light'],
 lede:['馬克士威的方程式預測了比光波長得多的電磁波，但 20 多年來沒有人做出來或偵測到。1887 年，德國物理學家赫茲用一個火花放電器和一個金屬環，第一次在實驗室裡發射和接收了無線電波。','Maxwell\'s equations predicted electromagnetic waves far longer than light\'s, but for over twenty years nobody made or detected one. In 1887 the German physicist Heinrich Hertz used a spark gap and a wire loop to send and receive radio waves in a lab for the first time.'],
 old:{h:['方程式很漂亮，但只是數學','Beautiful equations, but only math'],p:[['很多物理學家把馬克士威的理論當成一種數學工具：它能算出光速，但「看不見的電磁波」只是紙上的推論。電的作用被認為是瞬間發生的，不需要時間傳過去。','Many physicists treated Maxwell\'s theory as a mathematical tool: it gave the speed of light, but invisible electromagnetic waves were just a paper inference. Electric effects were thought to act instantly, needing no travel time.']]},
 con:{h:['火花跳過去，遠處的金屬環也冒出火花','A spark jumps, and a distant loop sparks too'],
  p:[['赫茲做了一個發射器：兩根金屬棒中間留一個小縫，加上高電壓，電荷就在縫的兩邊來回快速振盪，冒出火花。幾公尺外放一個也留了小縫的金屬環，什麼電線都沒接，環的小縫裡竟然也出現了微小的火花。','Hertz built a transmitter: two metal rods with a small gap. Under high voltage, charge oscillated rapidly back and forth across the gap, making sparks. A few meters away sat a wire loop with its own small gap, connected to nothing, and tiny sparks appeared in its gap too.'],
   ['他接著證明這些波跟光一樣：會被金屬反射、會折射、有偏振，速度也等於光速。','He then showed these waves behaved like light: they reflected off metal, refracted, were polarized, and traveled at the speed of light.']]},
 exps:[{h:['實驗：發射器和接收環','Experiment: transmitter and receiving loop'],
  intro:[['左邊是發射器（上下擺放），右邊是接收環。改變距離、把接收環轉一個角度，或在中間放一塊板子。','The transmitter is on the left (set vertically) and the receiving loop on the right. Change the distance, rotate the loop, or put a board in between.']],
  preds:[['hz1','預測 A：把接收環從直的轉 90° 變成橫的，火花會？','Prediction A: rotate the loop 90° from vertical to horizontal. The spark will?'],['hz2','預測 B：在中間放一塊金屬板，接收環會？','Prediction B: put a metal sheet in between. The loop will?']],
  sim:`<div class="fig"><canvas id="hzc"></canvas></div><div class="ctrl">${P.sl('hzd','距離','Distance',1,10,.5,3)}${P.sl('hza','接收環角度','Loop angle',0,90,5,0)}<span>${b('中間','In between')}</span><div class="seg" id="hzb"></div></div><div class="bars" id="hzr"></div>`}],
 idea:{h:['電磁波真的存在，而且跟光是同一種東西','Electromagnetic waves are real, and they\'re the same thing as light'],
  p:[['接收環轉 90° 就收不到，代表電場是上下振動的（偏振），電磁波是橫波，跟馬克士威預測的一樣。金屬板會把波反射回去，木板則幾乎完全讓它通過。','Turning the loop 90° kills the signal, so the electric field oscillates up and down (polarization): electromagnetic waves are transverse, as Maxwell predicted. A metal sheet reflects the waves; a wooden board lets them almost entirely through.'],
   ['赫茲本人認為這個發現沒有什麼實際用途。不到 15 年，馬可尼就用無線電波橫越大西洋傳送訊號（1901）。今天的廣播、手機、Wi-Fi、GPS、雷達，全部都是赫茲的波。','Hertz himself thought the discovery had no practical use. Within 15 years, Marconi sent radio signals across the Atlantic (1901). Today\'s radio, phones, Wi-Fi, GPS, and radar all run on Hertz\'s waves.']],
  key:['c = f · λ','無線電波和光唯一的差別是波長：赫茲的波長大約幾公尺，可見光只有幾百奈米。頻率的單位「赫茲 Hz」就是用他的名字命名。','The only difference between radio waves and light is wavelength: Hertz\'s were a few meters long, visible light only a few hundred nanometers. The unit of frequency, the hertz (Hz), is named after him.']},
 adv:[['用駐波量波長','Measuring wavelength with standing waves',[
   ['赫茲讓波打到金屬牆再反射回來，去波和回波疊加成駐波。接收環在某些位置收不到（節點），相鄰節點的距離是半個波長：','Hertz bounced the waves off a metal wall so the outgoing and returning waves formed a standing wave. At certain spots (nodes) the loop picked up nothing; neighboring nodes are half a wavelength apart:'],
   '=節點間距 node spacing = λ / 2',
   ['知道 λ，再用電路算出振盪頻率 f，就能算出波速 v = fλ，結果等於光速。','With λ known and the oscillation frequency f calculated from the circuit, the wave speed v = fλ came out equal to the speed of light.']]],
  ['雷達測距','Radar ranging',[
   ['發出脈衝，等它被物體反射回來，總共走了來回兩倍的距離：','Send a pulse and wait for the echo; it travels the distance twice:'],
   '=距離 distance = c · t / 2']]],
 apply:{h:['用電磁波解題','Solve with electromagnetic waves'],q:[
  ['n','hz3','1. 駐波相鄰節點的距離是 1.5 m。這個電磁波的頻率是幾 MHz？','1. Neighboring standing-wave nodes are 1.5 m apart. What is the frequency in MHz?','MHz'],
  ['n','hz4','2. 雷達發出的脈衝在 2 × 10⁻⁴ 秒後收到回波。目標有幾公里遠？','2. A radar pulse echoes back after 2 × 10⁻⁴ s. How many kilometers away is the target?','km'],
  ['p','hz5','3. 微波爐的門上有一層金屬網，你看得到裡面，微波卻跑不出來。為什麼？','3. A microwave oven door has a metal mesh. You can see in, but the microwaves can\'t get out. Why?']]},
 pencil:{h:['4. 拿紙筆：畫出赫茲的發射器、接收環，以及中間的電場','4. Pencil and paper: draw Hertz\'s transmitter, the receiving loop, and the electric field between them'],p:['電場的方向要跟發射器平行。','The electric field should point parallel to the transmitter.'],
  ans:`<p>${b('發射器是兩根上下排列的金屬棒；往右傳的波用一串上下方向、長短交替的箭頭表示（電場）。接收環的開口要上下排列，電場才能推動環裡的電荷跨過小縫。','The transmitter is two metal rods stacked vertically; the wave heading right is a series of vertical arrows alternating in length and direction (the electric field). The loop\'s gap must be oriented vertically so the field can push charge across it.')}</p>`},
 finale:`<section class="band next" id="hertz-next"><div class="wrap"><span class="chip">${b('這個答案帶出的新問題','The new question this answer creates')}</span>
  <h2>${b('就在同一個實驗裡，赫茲注意到一件怪事：紫外線照到接收環時，火花變得更容易跳。','In that same experiment Hertz noticed something odd: when ultraviolet light shone on the receiving loop, sparks jumped more easily.')}</h2>
  <p>${b('光能把金屬裡的電子打出來，但只有某些顏色的光可以，再亮的紅光都不行。波動說解釋不了這件事。答案在近代物理那條時間軸。','Light can knock electrons out of metal, but only certain colors can; even very bright red light can\'t. The wave model can\'t explain it. The answer lies on the Modern Physics timeline.')}</p>
  <a class="btn pri" href="#photon">${b('近代物理：光子 →','Modern Physics: the photon →')}</a></div></section>`,
 std:['表現預期 HS-PS4-5（說明利用波的原理和波與物質的交互作用來傳送與擷取資訊的科技裝置）、HS-PS4-3。科學實踐：SEP 3 規劃與執行調查、SEP 8 取得、評估與溝通資訊。跨科概念：因果；科學、工程與科技的相互依存。','Performance expectations HS-PS4-5 (communicate how technological devices use wave behavior and wave interactions with matter to transmit and capture information), HS-PS4-3. Practices: SEP 3 Planning and Carrying Out Investigations, SEP 8 Obtaining, Evaluating, and Communicating Information. Crosscutting concepts: Cause and Effect; Interdependence of Science, Engineering, and Technology.']
}),init(){
const {t,tp,css,fit,$}=P;let dist=3,ang=0,bar='none',ph=0;
const sig=()=>(1/dist)*Math.cos(ang*Math.PI/180)**2*(bar==='metal'?0:bar==='wood'?.92:1)*3;
const bars=()=>{const s=sig();$('hzr').innerHTML=`<div class="br"><span>${t('接收到的訊號','Received signal')}</span><div class="tr"><div class="fl" style="width:${Math.min(100,s*33)}%;background:var(--mo)"></div></div><span class="v">${(s*100/3).toFixed(0)}%</span></div><p class="verdict ${s>.25?'ok':'no'}">${s>.25?t('接收環冒出火花！','The loop sparks!'):t('沒有火花','No spark')}</p>`};
const draw=()=>{const[x,W,H]=fit($('hzc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const cy=H/2,tx=50,rx=tx+(W-120)*dist/10,ink=css('--ink'),s=sig();
 x.strokeStyle=ink;x.lineWidth=5;x.beginPath();x.moveTo(tx,cy-60);x.lineTo(tx,cy-6);x.moveTo(tx,cy+6);x.lineTo(tx,cy+60);x.stroke();
 if(Math.sin(ph*20)>0){x.fillStyle='#e8b923';x.beginPath();x.arc(tx,cy,6,0,7);x.fill()}
 const bx=(tx+rx)/2,lam=60;for(let X=tx+20;X<(bar==='metal'?bx:rx+40);X+=6){const A=Math.sin(2*Math.PI*(X-tx)/lam-ph*6)*40*Math.min(1,20/(X-tx+10))*(X>bx&&bar==='wood'?.92:1);x.strokeStyle='#d1495b';x.globalAlpha=.5;x.lineWidth=2;x.beginPath();x.moveTo(X,cy);x.lineTo(X,cy-A);x.stroke()}x.globalAlpha=1;
 if(bar!=='none'){x.fillStyle=bar==='metal'?'#8a96a3':'#b98a4f';x.fillRect(bx-5,cy-80,10,160);x.fillStyle=ink;x.font='600 12px "Noto Sans TC",Archivo';x.textAlign='center';x.fillText(bar==='metal'?tp('金屬板','Metal'):tp('木板','Wood'),bx,cy+98)}
 x.save();x.translate(rx,cy);x.rotate(ang*Math.PI/180);x.strokeStyle=ink;x.lineWidth=3;x.beginPath();x.arc(0,0,30,-Math.PI/2+.25,Math.PI*1.5-.25);x.stroke();
 if(s>.25&&Math.sin(ph*20)>0){x.fillStyle='#e8b923';x.beginPath();x.arc(0,-30,5+s*2,0,7);x.fill()}x.restore();
 x.fillStyle=ink;x.font='600 12px "Noto Sans TC",Archivo';x.textAlign='center';x.fillText(tp('發射器','Transmitter'),tx,cy+80);x.fillText(tp('接收環','Loop'),rx,cy+52)};
P.slider('hzd',v=>v.toFixed(1)+' m',v=>{dist=v;bars()});P.slider('hza',v=>v+'°',v=>{ang=v;if(v>=85)P.reveal('hz1');bars()});
P.seg('hzb',[['none','空的','Nothing'],['wood','木板','Wooden board'],['metal','金屬板','Metal sheet']],()=>bar,v=>{bar=v;if(v==='metal')P.reveal('hz2');bars()});
P.run(dt=>{if(!$('hzc').isConnected)return false;ph+=dt;if(document.querySelector('main.lesson[data-id=hertz]')?.hidden)return;draw()});
P.pred('hz1',{c:1,o:[['不變','No change'],['消失','It disappears'],['變得更亮','It gets brighter']],f:[['把角度拉到 90° 看看。','Drag the angle to 90° and see.'],['把角度拉到 90° 驗證。','Drag the angle to 90° to check.'],['把角度拉到 90° 看看。','Drag the angle to 90° and see.']]});
P.pred('hz2',{c:0,o:[['收不到訊號','Receive nothing'],['照樣收到','Receive as usual'],['收到更強的訊號','Receive a stronger signal']],f:[['選「金屬板」驗證，再試試「木板」。','Choose Metal sheet to check, then try Wooden board.'],['選「金屬板」看看。','Choose Metal sheet and see.'],['選「金屬板」看看。','Choose Metal sheet and see.']]});
P.num('hz3',100,['對。λ = 2 × 1.5 = 3 m，f = c/λ = 3×10⁸ ÷ 3 = 10⁸ Hz = 100 MHz，在 FM 廣播的範圍。','Right. λ = 2 × 1.5 = 3 m, so f = c/λ = 3×10⁸ ÷ 3 = 10⁸ Hz = 100 MHz, in the FM radio band.'],['提示：節點間距是半個波長。先求 λ，再 f = c/λ。','Hint: nodes are half a wavelength apart. Find λ, then f = c/λ.'],1);
P.num('hz4',30,['對。距離 = 3×10⁸ × 2×10⁻⁴ ÷ 2 = 30,000 m = 30 km。','Right. Distance = 3×10⁸ × 2×10⁻⁴ ÷ 2 = 30,000 m = 30 km.'],['提示：c × t 是來回的距離，要除以 2。','Hint: c × t is the round trip; divide by 2.'],.3);
P.pred('hz5',{now:1,c:1,o:[['金屬網會吸收所有東西','Metal mesh absorbs everything'],['網孔比微波的波長（約 12 cm）小很多，卻比光的波長大很多','The holes are far smaller than a microwave\'s wavelength (about 12 cm) but far larger than light\'s'],['微波不會往門的方向跑','Microwaves don\'t travel toward the door']],f:[['如果全部吸收，你就看不到裡面了。','If it absorbed everything, you couldn\'t see inside.'],['對。對波長幾公分的微波來說，幾毫米的網孔就像一整片金屬，會把它反射回去。','Right. To a wave several centimeters long, millimeter holes act like solid metal and reflect it.'],['微波會往四面八方反射。','Microwaves bounce in every direction.']]});
bars();P.watch($('hzc'),draw);P.onLang(bars);
}});}
