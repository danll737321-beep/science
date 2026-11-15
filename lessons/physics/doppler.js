{const b=P.b;
P.reg('doppler',{html:P.build('doppler',{
 title:['都卜勒效應：移動的波源會改變頻率','The Doppler Effect: a moving source changes the frequency'],
 lede:['救護車經過身邊時，警笛聲會從高變低。1842 年，奧地利物理學家都卜勒提出：這是因為波源在移動，把前面的波擠在一起、後面的波拉開。他還預測，同樣的事也會發生在星星的光上。','When an ambulance passes, its siren drops from high to low. In 1842 the Austrian physicist Christian Doppler proposed that the moving source squeezes the waves together in front and stretches them out behind. He predicted the same would happen to starlight.'],
 old:{h:['頻率是波源自己決定的','A source sets its own frequency'],p:[['一個音叉每秒振動 440 次，發出的聲音就是 440 Hz。大家認為聽到的頻率就是波源振動的頻率，跟誰在動無關。','A tuning fork vibrating 440 times a second makes a 440 Hz sound. People assumed the frequency you hear is simply how fast the source vibrates, regardless of who is moving.']]},
 con:{h:['波源一邊發波，一邊往前追自己的波','A source chases its own waves as it emits them'],
  p:[['波一旦發出去，就以固定的速度在空氣中往外跑，不管波源怎麼動。但如果波源往前移動，它發出下一個波峰時，已經離前一個波峰比較近了。前面的波峰被擠在一起（波長變短、頻率變高），後面的被拉開。','Once emitted, a wave moves outward through the air at a fixed speed, whatever the source does. But a source moving forward is closer to its previous crest when it emits the next one. Crests in front bunch up (shorter wavelength, higher frequency) and crests behind spread out.'],
   ['1845 年，荷蘭科學家拜斯・巴洛特找來一群吹小號的樂手，讓他們站在行駛的火車上吹同一個音，請有絕對音感的人在月台上聽，證實了都卜勒的預測。','In 1845 the Dutch scientist Buys Ballot put trumpeters on a moving train playing one note, while musicians with perfect pitch listened from the platform. They confirmed Doppler\'s prediction.']]},
 exps:[{h:['實驗：移動的波源','Experiment: a moving source'],
  intro:[['圓圈是波源每隔一段時間發出的波峰，以聲速往外擴散。調整波源的速度（以聲速為 1）。','The circles are crests emitted at regular intervals, spreading out at the speed of sound. Set the source\'s speed (with the speed of sound = 1).']],
  preds:[['dp1','預測 A：波源往右移動時，站在右邊（前方）的人聽到的聲音？','Prediction A: as the source moves right, a listener on the right (ahead) hears?'],['dp2','預測 B：波源的速度剛好等於聲速時，前方的波峰會？','Prediction B: when the source moves at exactly the speed of sound, the crests in front will?']],
  sim:`<div class="fig"><canvas id="dpc"></canvas></div><div class="ctrl">${P.sl('dpv','波源速度','Source speed',0,1.4,.05,.4)}</div><div class="bars" id="dpb"></div>`}],
 idea:{h:['靠近時頻率升高，遠離時頻率降低','Approaching raises the frequency; receding lowers it'],
  p:[['前方的人每秒收到更多波峰，所以頻率高；後方的人每秒收到的比較少，所以頻率低。波源的速度追上波速時，所有前方的波峰疊在一起，形成很強的震波，這就是飛機的音爆。','A listener ahead receives more crests per second, so the frequency is higher; one behind receives fewer, so it\'s lower. When the source catches up with its own waves, all the front crests pile into a powerful shock wave: an aircraft\'s sonic boom.'],
   ['光也一樣：遠離我們的星系，光會往紅色偏移（紅移）；靠近的往藍色偏移。今天的測速槍、氣象雷達、醫院的超音波血流檢查，都用都卜勒效應。','Light works the same way: galaxies moving away look shifted toward red (redshift); those approaching shift toward blue. Speed guns, weather radar, and ultrasound blood-flow scans all use the Doppler effect.']],
  key:['f′ = f · v / (v ∓ v_s)','聽到的頻率 = 原本頻率 × 波速 ÷（波速 ∓ 波源速度）。靠近用減號，遠離用加號。','Heard frequency = source frequency × wave speed ÷ (wave speed ∓ source speed). Use minus when approaching, plus when receding.']},
 adv:[['推導','Derivation',[
   ['波源每隔 T = 1/f 發一個波峰。這段時間裡，上一個波峰往前跑了 vT，波源也往前走了 v_sT。前方相鄰波峰的距離（波長）：','The source emits a crest every T = 1/f. In that time the previous crest travels vT forward and the source moves v_sT. The spacing of crests ahead (the wavelength):'],
   '=λ′ = (v − v_s)T　⇒　f′ = v/λ′ = f · v/(v − v_s)']],
  ['光的都卜勒效應','The Doppler effect for light',[
   ['速度遠小於光速時，波長的相對變化等於速度和光速的比：','For speeds much less than light\'s, the fractional wavelength change equals the speed over c:'],
   '=Δλ / λ ≈ v / c',
   ['哈伯就是用這條式子，從星系光譜的紅移算出它們遠離的速度（近代物理線）。','Hubble used this to turn galaxies\' redshifts into recession speeds (on the Modern Physics timeline).']]]],
 apply:{h:['用都卜勒公式解題（聲速 343 m/s）','Solve with the Doppler formula (sound: 343 m/s)'],q:[
  ['n','dp3','1. 救護車的警笛 700 Hz，以 30 m/s 朝你開過來。你聽到幾 Hz？','1. An ambulance siren is 700 Hz, coming toward you at 30 m/s. What frequency do you hear?','Hz'],
  ['n','dp4','2. 同一台救護車開過去、以 30 m/s 離開。你聽到幾 Hz？','2. The same ambulance passes and drives away at 30 m/s. What frequency do you hear?','Hz'],
  ['p','dp5','3. 天文學家發現某個星系光譜裡的譜線，比實驗室裡的位置偏向紅色。這代表？','3. Astronomers see a galaxy\'s spectral lines shifted toward red compared with the lab. What does that mean?']]},
 pencil:{h:['4. 拿紙筆：畫出一個往右移動的波源發出的五個波峰','4. Pencil and paper: draw five crests from a source moving to the right'],p:['每個圓的圓心要在波源發出它的位置。','Each circle\'s center is where the source was when it emitted that crest.'],
  ans:`<p>${b('五個圓，圓心一個比一個往右，最大的圓圓心在最左邊。右邊的圓擠在一起，左邊的圓分得比較開，跟模擬裡的樣子一樣。','Five circles with centers shifting right, the biggest one centered farthest left. On the right the circles crowd together; on the left they spread out, just like the simulation.')}</p>`},
 next:['馬克士威預測還有看不見的電磁波，速度跟光一樣。真的存在嗎？能做出來嗎？','Maxwell predicted invisible electromagnetic waves traveling at light speed. Do they really exist? Can they be made?','1887 年，赫茲在實驗室裡用火花做出了第一道無線電波。','In 1887 Heinrich Hertz made the first radio waves in his lab using sparks.'],
 std:['表現預期 HS-PS4-1（波的頻率、波長與速度的關係）、為 HS-ESS1-2（光譜證據支持大霹靂理論）打基礎。科學實踐：SEP 2 建立與使用模型、SEP 5 數學與計算思維。跨科概念：模式；因果。','Performance expectation HS-PS4-1 (relationships among frequency, wavelength, and wave speed), groundwork for HS-ESS1-2 (spectral evidence for the Big Bang). Practices: SEP 2 Developing and Using Models, SEP 5 Mathematical and Computational Thinking. Crosscutting concepts: Patterns; Cause and Effect.']
}),init(){
const {t,tp,css,fit,$}=P;let vs=.4,tt=0,wf=[],sx=0,acc=0;const PER=.45;
const bars=()=>{const v=343,u=vs*343,fF=vs<1?440*v/(v-u):Infinity,fB=440*v/(v+u);
 $('dpb').innerHTML=[[t('波源發出','Source emits'),440],[t('前方聽到','Heard ahead'),fF],[t('後方聽到','Heard behind'),fB]].map(r=>`<div class="br"><span>${r[0]}</span><div class="tr"><div class="fl" style="width:${Math.min(100,r[1]/1500*100)}%;background:var(--mo)"></div></div><span class="v">${isFinite(r[1])?r[1].toFixed(0)+' Hz':t('震波','Shock wave')}</span></div>`).join('')};
const draw=()=>{const[x,W,H]=fit($('dpc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const cy=H/2,ink=css('--ink'),sp=W/6;
 x.strokeStyle=css('--mo');x.lineWidth=1.8;wf.forEach(w=>{const r=(tt-w.t)*sp;x.globalAlpha=Math.max(.15,1-r/W);x.beginPath();x.arc(w.x,cy,r,0,7);x.stroke()});x.globalAlpha=1;
 x.fillStyle='#d1495b';x.beginPath();x.arc(sx,cy,9,0,7);x.fill();
 [[W-30,tp('前方','Ahead')],[30,tp('後方','Behind')]].forEach(([X,l])=>{x.fillStyle=ink;x.beginPath();x.arc(X,cy,6,0,7);x.fill();x.font='600 12px "Noto Sans TC",Archivo';x.textAlign='center';x.fillText(l,X,cy+22)})};
P.slider('dpv',v=>v.toFixed(2)+' × '+tp('聲速','sound'),v=>{vs=v;if(v>=.2)P.reveal('dp1');if(v>=1)P.reveal('dp2');bars()});
P.run(dt=>{if(!$('dpc').isConnected)return false;if(document.querySelector('main.lesson[data-id=doppler]')?.hidden)return;const W=$('dpc').clientWidth;
 tt+=dt;acc+=dt;sx+=vs*W/6*dt;if(sx>W*.9||sx<W*.08){sx=W*.15;wf=[];tt=0;acc=0}if(acc>=PER){acc-=PER;wf.push({x:sx,t:tt})}wf=wf.filter(w=>(tt-w.t)*W/6<W*1.2);draw()});
P.pred('dp1',{c:0,o:[['比較高','Higher'],['一樣','The same'],['比較低','Lower']],f:[['把速度調大，看右邊的波峰。','Raise the speed and look at the crests on the right.'],['把速度調大，看右邊的波峰。','Raise the speed and look at the crests on the right.'],['把速度調大，看右邊的波峰擠在一起還是分開。','Raise the speed and see whether the crests on the right bunch up or spread out.']]});
P.pred('dp2',{c:1,o:[['消失','Disappear'],['全部疊在一起，形成一道很強的波','Pile up into one powerful wave'],['跟平常一樣分開','Stay spaced out as usual']],f:[['把速度拉到 1.0 看看。','Set the speed to 1.0 and see.'],['把速度拉到 1.0 驗證，再試試超過 1。','Set the speed to 1.0 to check, then try going past 1.'],['把速度拉到 1.0 看看。','Set the speed to 1.0 and see.']]});
P.num('dp3',767,['對。f′ = 700 × 343/(343 − 30) ≈ 767 Hz。','Right. f′ = 700 × 343/(343 − 30) ≈ 767 Hz.'],['提示：靠近用減號：f × v/(v − v_s)。','Hint: approaching uses minus: f × v/(v − v_s).'],3);
P.num('dp4',644,['對。f′ = 700 × 343/(343 + 30) ≈ 644 Hz。經過的瞬間，從 767 掉到 644。','Right. f′ = 700 × 343/(343 + 30) ≈ 644 Hz. As it passes, the pitch drops from 767 to 644.'],['提示：遠離用加號。','Hint: receding uses plus.'],3);
P.pred('dp5',{now:1,c:1,o:[['星系很熱','The galaxy is very hot'],['星系正在遠離我們','The galaxy is moving away from us'],['星系正在靠近我們','The galaxy is moving toward us']],f:[['溫度會改變整體的顏色分布，但不會讓特定的譜線整齊地移動。','Temperature changes the overall color spread, but it doesn\'t shift specific lines in step.'],['對。波長被拉長，代表在遠離。這是宇宙膨脹的關鍵證據。','Right. Stretched wavelengths mean it\'s receding. This is key evidence that the universe is expanding.'],['靠近會讓波長變短，也就是偏藍。','Approaching would shorten the wavelength, shifting toward blue.']]});
bars();P.watch($('dpc'),draw);P.onLang(bars);
}});}
