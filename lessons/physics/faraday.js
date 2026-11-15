{const b=P.b;
P.reg('faraday',{html:P.build('faraday',{
 title:['法拉第：磁要「變化」才會生電','Faraday: magnetism makes current only when it changes'],
 lede:['厄斯特證明電流會產生磁場之後，大家都想反過來：用磁鐵產生電流。十年來都失敗了。1831 年，法拉第發現了大家漏掉的那一個字：變化。這個發現，就是今天每一座發電廠的原理。','After Ørsted showed currents make magnetism, everyone tried the reverse: making current with a magnet. For ten years they failed. In 1831 Michael Faraday found the missing word: change. That discovery is how every power plant works today.'],
 old:{h:['強磁鐵放在線圈旁邊，就應該有電流','A strong magnet beside a coil should make current'],
  p:[['既然電流能產生磁場，那一塊很強的磁鐵放在線圈旁邊，應該也會讓線圈裡有穩定的電流。安培和其他人都試過，用很強的磁鐵、很多圈的線圈，電流計就是不動。','Since current makes a magnetic field, a strong magnet next to a coil ought to drive a steady current in it. Ampère and others tried with strong magnets and many-turn coils, and the galvanometer never moved.']]},
 con:{h:['電流只在「開」和「關」的那一瞬間出現','Current appears only at the moment of switching on or off'],
  p:[['1831 年 8 月，法拉第在一個鐵環上繞了兩組線圈。第一組接電池，第二組接電流計。電池一接上，電流計的指針跳了一下，然後回到 0；電池一拔掉，指針又往反方向跳一下。','In August 1831 Faraday wound two coils on an iron ring. The first went to a battery, the second to a galvanometer. When he connected the battery, the needle jumped and fell back to 0; when he disconnected it, the needle jumped the other way.'],
   ['穩定的磁場不會產生電流，所以之前的人才一直失敗。只有磁場在「變化」的時候才有。幾週後，他直接把磁鐵插進線圈、拔出來，得到了同樣的結果。','A steady field makes no current, which is why everyone before had failed. Only a changing field does. A few weeks later he simply pushed a magnet into a coil and pulled it out, with the same result.']]},
 exps:[{h:['實驗：把磁鐵推進線圈、拉出來','Experiment: push a magnet into a coil and pull it out'],
  intro:[['用滑桿移動磁鐵，或按按鈕自動推進、拉出。右上角的電流計和下面的圖會記錄線圈裡的電流。','Move the magnet with the slider, or use the buttons to push it in and pull it out. The galvanometer and the graph record the current in the coil.']],
  preds:[['fa1','預測 A：磁鐵放在線圈正中間不動，電流是？','Prediction A: with the magnet resting in the middle of the coil, the current is?'],['fa2','預測 B：把磁鐵拉出來，跟推進去比，電流會？','Prediction B: pulling the magnet out, compared with pushing it in, gives a current that?']],
  sim:`<div class="fig"><canvas id="fac"></canvas></div><div class="ctrl"><button class="pri" id="fain"></button><button id="faout">${b('拉出來','Pull out')}</button>${P.sl('fax','磁鐵位置','Magnet position',-100,40,1,-100)}</div><div class="fig" style="min-height:160px"><canvas id="fag"></canvas></div><div class="ctrl">${P.sl('fan','線圈圈數','Coil turns',50,400,50,200)}</div>`}],
 idea:{h:['電磁感應：變化的磁場產生電流','Electromagnetic induction: a changing magnetic field makes current'],
  p:[['磁鐵不動，不管放在哪裡，電流都是 0。推進去和拉出來，電流方向相反。動得越快、線圈越多圈，電流越大。','A still magnet gives zero current wherever it sits. Pushing in and pulling out give opposite currents. The faster you move and the more turns, the bigger the current.'],
   ['發電機就是讓磁鐵和線圈不停地相對轉動，把運動的能量變成電能。水力、火力、風力、核能發電廠，最後都是在轉同一種發電機。','A generator keeps a magnet and a coil turning relative to each other, converting motion into electrical energy. Hydro, coal, wind, and nuclear plants all end up spinning the same kind of generator.']],
  key:['ε = −N · ΔΦ/Δt','感應電壓 = 圈數 × 磁通量每秒的變化。負號（冷次定律）表示：感應電流產生的磁場，會反抗原本的變化。','Induced voltage = number of turns × rate of change of magnetic flux. The minus sign (Lenz\'s law) means the induced current\'s field opposes the change that caused it.']},
 adv:[['磁通量','Magnetic flux',[
   ['穿過線圈的磁力線數量叫磁通量：','The amount of field passing through a coil is the magnetic flux:'],
   '=Φ = B·A·cosθ　（單位 Wb，韋伯）',
   ['改變 B（推磁鐵）、改變面積 A、或改變角度 θ（旋轉線圈）都會讓 Φ 變化，都能產生電流。發電機用的就是轉動角度。','Changing B (moving the magnet), the area A, or the angle θ (rotating the coil) all change Φ and induce current. Generators use the rotating angle.']]],
  ['變壓器','Transformers',[
   ['兩組線圈繞在同一個鐵芯上，交流電讓磁通量不斷變化，兩邊每一圈感應到的電壓相同：','Two coils share an iron core; alternating current keeps the flux changing, so every turn on either side sees the same voltage:'],
   '=V_次 / V_主 = N_次 / N_主　（secondary / primary）',
   ['發電廠先把電壓升到幾十萬伏特送出去（電流小、損耗小），到家附近再降回 120 V。','Power plants step voltage up to hundreds of thousands of volts for transmission (low current, low loss), then step it back down to 120 V near homes.']]]],
 apply:{h:['用電磁感應解題','Solve with induction'],q:[
  ['n','fa3','1. 100 圈的線圈，磁通量在 0.1 秒內改變了 0.02 Wb。感應電壓是多少？','1. A 100-turn coil sees the flux change by 0.02 Wb in 0.1 s. What voltage is induced?','V'],
  ['n','fa4','2. 變壓器把 120 V 降到 12 V。主線圈 1,000 圈，次線圈要幾圈？','2. A transformer steps 120 V down to 12 V. With 1,000 primary turns, how many secondary turns?','圈 turns'],
  ['p','fa5','3. 發電廠的發電機，是把哪一種能量變成電能？','3. A power plant\'s generator converts which kind of energy into electrical energy?']]},
 pencil:{h:['4. 拿紙筆：畫出磁鐵「推進去 → 停住 → 拉出來」時，電流對時間的圖','4. Pencil and paper: sketch current vs. time as a magnet goes in, stops, then comes out'],p:['標出電流的正負。','Mark positive and negative current.'],
  ans:`<div class="two"><svg class="ill" viewBox="0 0 320 150" role="img" aria-label="Induced current graph"><rect width="320" height="150" rx="14" fill="var(--panel)"/><line x1="20" y1="75" x2="300" y2="75" stroke="var(--mute)"/>
   <path d="M20 75 L60 75 Q80 20 100 75 L180 75 Q200 130 220 75 L300 75" fill="none" stroke="var(--mo)" stroke-width="3"/>
   <g font-size="11" fill="var(--ink)"><text x="62" y="18">推 in</text><text x="120" y="68">停 stop: 0</text><text x="186" y="142">拉 out</text></g></svg>
   <div><p>${b('推進去時一個正的脈衝，停住時是 0，拉出來時一個負的脈衝。動得越快，脈衝越高、越窄。','A positive pulse going in, zero while stopped, a negative pulse coming out. Move faster and the pulse is taller and narrower.')}</p></div></div>`},
 next:['變化的磁場會產生電，變化的電場會不會也產生磁？如果會，它們能不能互相推著往前跑？','A changing magnetic field makes electricity. Does a changing electric field make magnetism? If so, could the two keep each other going?','馬克士威把所有電磁定律寫成一組方程式，算出了一個驚人的速度。','Maxwell wrote all the laws of electricity and magnetism as one set of equations and calculated a startling speed.'],
 std:['表現預期 HS-PS2-5（提供證據：變化的磁場會產生電流）、HS-PS3-3（設計把一種能量轉換成另一種的裝置：發電機）。科學實踐：SEP 3 規劃與執行調查、SEP 4 分析與詮釋數據。跨科概念：因果；能量與物質。','Performance expectations HS-PS2-5 (evidence that a changing magnetic field can produce an electric current), HS-PS3-3 (design a device that converts one form of energy to another: a generator). Practices: SEP 3 Planning and Carrying Out Investigations, SEP 4 Analyzing and Interpreting Data. Crosscutting concepts: Cause and Effect; Energy and Matter.']
}),init(){
const {t,tp,css,fit,$}=P;
let xm=-1,N=200,emf=0,hist=[],auto=null,still=0,didIn=0,didOut=0,last=xm;
const Phi=x=>1/(1+(x/.25)**2)**1.5;
const draw=()=>{const[x,W,H]=fit($('fac'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const cx=W*.6,cy=H/2,S=W*.3,ink=css('--ink');
 x.strokeStyle='#b8532a';x.lineWidth=3;for(let k=0;k<7;k++){const X=cx-60+k*20;x.beginPath();x.ellipse(X,cy,8,46,0,0,7);x.stroke()}
 const mx=cx+xm*S;x.fillStyle='#d1495b';x.fillRect(mx-60,cy-14,60,28);x.fillStyle='#2160d8';x.fillRect(mx,cy-14,60,28);x.fillStyle='#fff';x.font='700 14px Archivo';x.textAlign='center';x.fillText('S',mx-30,cy+5);x.fillText('N',mx+30,cy+5);
 const gx=W-70,gy=60;x.fillStyle=css('--bg');x.strokeStyle=ink;x.lineWidth=2;x.beginPath();x.arc(gx,gy,44,Math.PI,0);x.closePath();x.fill();x.stroke();
 const a=Math.max(-1,Math.min(1,emf/12))*1.2;x.strokeStyle='#d1495b';x.lineWidth=3;x.beginPath();x.moveTo(gx,gy);x.lineTo(gx+Math.sin(a)*40,gy-Math.cos(a)*40);x.stroke();
 x.fillStyle=ink;x.font='600 12px Archivo';x.fillText(`${emf.toFixed(1)} V`,gx,gy+20);x.fillText('0',gx,gy-48);
 x.strokeStyle=css('--mute');x.lineWidth=1.5;x.beginPath();x.moveTo(cx-60,cy+46);x.lineTo(cx-60,H-14);x.lineTo(gx,H-14);x.lineTo(gx,gy+28);x.stroke()};
const graph=()=>{const[x,W,H]=fit($('fag'));if(W<10)return;x.clearRect(0,0,W,H);const mid=H/2,ink=css('--ink');
 x.strokeStyle=css('--mute');x.beginPath();x.moveTo(30,mid);x.lineTo(W-10,mid);x.stroke();x.fillStyle=ink;x.font='11px Archivo';x.textAlign='left';x.fillText(tp('電流（最近 6 秒）','Current (last 6 s)'),34,14);
 x.strokeStyle=css('--mo');x.lineWidth=2.5;x.beginPath();hist.forEach((v,i)=>{const X=30+(W-40)*i/360,Y=mid-Math.max(-1,Math.min(1,v/12))*(mid-12);i?x.lineTo(X,Y):x.moveTo(X,Y)});x.stroke()};
P.gate('fain',[],()=>t('推進去','Push in'));
const go=(to)=>{auto={to,sp:1.6}};
$('fain').onclick=()=>go(0);$('faout').onclick=()=>go(-1);
P.slider('fax',v=>(v/100).toFixed(2)+' m',v=>{auto=null;xm=v/100});
P.slider('fan',v=>v+tp(' 圈',' turns'),v=>N=v);
P.run(dt=>{if(!$('fac').isConnected)return false;
 if(auto){const d=auto.to-xm,s=Math.sign(d)*Math.min(Math.abs(d),auto.sp*dt);xm+=s;$('fax').value=Math.round(xm*100);$('faxv').textContent=xm.toFixed(2)+' m';if(Math.abs(d)<1e-3)auto=null}
 const dPhi=(Phi(xm)-Phi(last))/Math.max(dt,1e-3),v=xm-last;last=xm;emf=N*.01*dPhi;
 if(Math.abs(xm)<.06&&Math.abs(v)<1e-4){still+=dt;if(still>1&&didIn)P.reveal('fa1')}else still=0;
 if(emf>1)didIn=1;if(emf<-1&&didIn){didOut=1;P.reveal('fa2')}
 hist.push(emf);if(hist.length>360)hist.shift();
 if(document.querySelector('main.lesson[data-id=faraday]')?.hidden)return;draw();graph()});
P.pred('fa1',{c:0,o:[['0','Zero'],['最大，因為磁鐵在最裡面','Maximum, since the magnet is all the way in'],['一個小的固定電流','A small steady current']],f:[['推進去之後，停在正中間等一下看看。','Push it in, let it sit in the middle, and watch.'],['推進去之後，停在正中間等一下看看。','Push it in, let it sit in the middle, and watch.'],['推進去之後，停在正中間等一下看看。','Push it in, let it sit in the middle, and watch.']]});
P.pred('fa2',{c:1,o:[['方向一樣','Flows the same way'],['方向相反','Flows the opposite way'],['沒有電流','There\'s no current']],f:[['推進去，再拉出來，看電流計往哪邊偏。','Push in, then pull out, and watch which way the needle swings.'],['推進去，再拉出來驗證。','Push in, then pull out to check.'],['推進去，再拉出來看看。','Push in, then pull out and see.']]});
P.num('fa3',20,['對。ε = N × ΔΦ/Δt = 100 × 0.02 ÷ 0.1 = 20 V。','Right. ε = N × ΔΦ/Δt = 100 × 0.02 ÷ 0.1 = 20 V.'],['提示：ε = N × ΔΦ ÷ Δt。','Hint: ε = N × ΔΦ ÷ Δt.'],.2);
P.num('fa4',100,['對。電壓比 = 圈數比：12/120 = N/1000，N = 100 圈。','Right. The voltage ratio equals the turns ratio: 12/120 = N/1000, so N = 100 turns.'],['提示：V_次 / V_主 = N_次 / N_主。','Hint: V_secondary / V_primary = N_secondary / N_primary.'],1);
P.pred('fa5',{now:1,c:1,o:[['磁能變成電能，磁鐵會慢慢沒磁力','Magnetic energy; the magnets slowly wear out'],['轉動的動能變成電能','The kinetic energy of rotation'],['熱直接變成電，不需要轉動','Heat directly into electricity, no turning needed']],f:[['磁鐵本身不會被用掉。能量是從哪裡來的？','The magnets aren\'t used up. Where does the energy come from?'],['對。蒸汽、水流或風推動渦輪轉動，轉動的能量透過電磁感應變成電能。','Right. Steam, water, or wind spins a turbine, and induction turns that rotation into electrical energy.'],['大部分發電廠都是先把熱變成蒸汽，再推動發電機轉動。','Most plants first turn heat into steam, which then spins a generator.']]});
P.watch($('fac'),draw);P.watch($('fag'),graph);
}});}
