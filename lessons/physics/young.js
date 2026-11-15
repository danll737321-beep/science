{const b=P.b;
P.reg('young',{html:P.build('young',{
 title:['楊的雙狹縫：光加光，可以變成暗','Young\'s Double Slit: light plus light can make darkness'],
 lede:['1801 年，英國醫生湯瑪士・楊讓陽光通過兩條非常靠近的細縫，照在牆上。如果光是粒子，牆上應該是兩條亮線。他看到的卻是一整排明暗相間的條紋。','In 1801 the English physician Thomas Young shone sunlight through two very close narrow slits onto a wall. If light were particles, the wall should show two bright lines. Instead he saw a whole row of alternating bright and dark stripes.'],
 old:{h:['粒子說：光是一顆顆直直飛的小球','The particle model: light is tiny balls flying straight'],p:[['牛頓的威望讓粒子說主導了一百年。如果光是小球，穿過兩條縫，就會在後面的牆上各留下一條亮線，就像用噴漆隔著兩條縫噴牆一樣。','Newton\'s prestige kept the particle model on top for a century. If light is tiny balls, passing through two slits should leave two bright lines on the wall behind, like spray paint through two slots.']]},
 con:{h:['水波可以互相抵消，光也可以','Water waves can cancel, and so can light'],
  p:[['楊研究過水波：兩個波源發出的水波相遇時，波峰碰波峰會變更高，波峰碰波谷會互相抵消，水面變平。','Young had studied water waves: when waves from two sources meet, crest on crest makes a bigger crest, while crest on trough cancels and the water goes flat.'],
   ['他推論：如果光是波，從兩條縫出來的光也會這樣疊加。牆上有些地方兩道光剛好「同步」，變得很亮；有些地方剛好「相反」，變成全暗。光加光，竟然會變成暗，這是粒子說無法解釋的。','He reasoned that if light is a wave, light from two slits should add the same way. At some spots on the wall the two waves arrive in step and get bright; at others they arrive exactly out of step and go dark. Light plus light making darkness is something particles can\'t explain.']]},
 exps:[{h:['實驗：一條縫和兩條縫','Experiment: one slit vs. two slits'],
  intro:[['左邊是光源和狹縫，右邊的長條是牆上看到的亮度。可以改變光的波長（顏色）和兩條縫的距離 d。','The light source and slits are on the left; the strip on the right shows brightness on the wall. Change the wavelength (color) and the slit spacing d.']],
  preds:[['yg1','預測 A：從一條縫換成兩條縫，牆上會看到？','Prediction A: switching from one slit to two, what appears on the wall?'],['yg2','預測 B：把藍光換成紅光（波長變長），條紋會？','Prediction B: switching from blue to red light (longer wavelength), the stripes will?']],
  sim:`<div class="ctrl"><div class="seg" id="ygm"></div></div><div class="fig"><canvas id="ygc"></canvas></div><div class="ctrl">${P.sl('ygl','波長','Wavelength',400,700,10,500)}${P.sl('ygd','縫距 d','Slit spacing d',.1,.5,.05,.25)}</div><p class="read" id="ygr" style="white-space:normal"></p>`}],
 idea:{h:['干涉：只有波才會出現的現象','Interference: something only waves do'],
  p:[['兩條縫出來的光走到牆上某一點，路程差剛好是整數個波長時，同步加強，是亮紋；差半個波長時，互相抵消，是暗紋。','When the paths from the two slits to a point on the wall differ by a whole number of wavelengths, the waves reinforce: a bright stripe. When they differ by half a wavelength, they cancel: a dark stripe.'],
   ['楊還從條紋的間距反推出光的波長：紅光大約 700 nm、紫光大約 400 nm，比頭髮細一百倍。這也解釋了為什麼光看起來沿直線走：波長太小，平常看不出波的效果。','Young worked backward from the spacing to get light\'s wavelength: about 700 nm for red and 400 nm for violet, a hundred times thinner than a hair. That\'s also why light seems to travel in straight lines: its wavelength is too small for wave effects to show in everyday life.']],
  key:['Δy = λL / d','條紋間距 = 波長 × 到牆的距離 ÷ 縫距。波長越長、縫越靠近，條紋越寬。','Stripe spacing = wavelength × distance to the wall ÷ slit spacing. Longer wavelength or closer slits give wider stripes.']},
 adv:[['亮紋的條件','The condition for bright stripes',[
   ['兩條縫相距 d，往角度 θ 方向的兩道光，路程差是 d sinθ：','Two slits are d apart. For light heading at angle θ, the path difference is d sinθ:'],
   '=d sinθ = mλ　（m = 0, ±1, ±2, …）亮紋 bright',
   '=d sinθ = (m + ½)λ　暗紋 dark']],
  ['小角度近似','The small-angle approximation',[
   ['牆在距離 L 的地方，第 m 條亮紋的位置 y = L tanθ ≈ L sinθ = mλL/d，所以相鄰亮紋的間距是：','With the wall at distance L, the m-th bright stripe sits at y = L tanθ ≈ L sinθ = mλL/d, so neighboring stripes are spaced:'],
   '=Δy = λL / d']]],
 apply:{h:['用干涉公式解題','Solve with the interference formula'],q:[
  ['n','yg3','1. 波長 600 nm 的光通過縫距 0.3 mm 的雙縫，牆在 2 m 外。條紋間距是幾 mm？','1. 600 nm light passes through slits 0.3 mm apart onto a wall 2 m away. What is the stripe spacing in mm?','mm'],
  ['n','yg4','2. 縫距 0.5 mm、牆在 2 m 外，量到條紋間距 2.5 mm。光的波長是幾 nm？','2. Slits 0.5 mm apart, wall 2 m away, measured spacing 2.5 mm. What is the wavelength in nm?','nm'],
  ['p','yg5','3. 如果光真的是牛頓說的小粒子，雙縫後面的牆上應該看到什麼？','3. If light really were Newton\'s tiny particles, what should appear on the wall behind two slits?']]},
 pencil:{h:['4. 拿紙筆：用同心圓畫兩個波源的波峰，找出加強的位置','4. Pencil and paper: draw crests from two sources as concentric circles and find where they reinforce'],p:['用圓規或描圓，波峰之間間距一樣。','Use a compass or trace circles, keeping crest spacing equal.'],
  ans:`<p>${b('兩組圓交叉的地方（波峰碰波峰）連起來，會形成幾條從中間往外放射的線，這些就是亮紋的方向。兩組圓剛好錯開的地方連起來，是暗紋的方向。','Join the points where circles from both sources cross (crest meets crest) and you get lines fanning out from the middle: the directions of bright stripes. Join the points halfway between, and you get the dark stripe directions.')}</p>`},
 next:['波的頻率決定聲音的高低和光的顏色。如果波源自己在移動，頻率會不會變？','A wave\'s frequency sets a sound\'s pitch and a light\'s color. If the source itself is moving, does the frequency change?','1842 年，奧地利物理學家都卜勒提出了答案，連星星的顏色都會受影響。','In 1842 the Austrian physicist Christian Doppler proposed the answer, which even affects the colors of stars.'],
 std:['表現預期 HS-PS4-3（評估電磁輻射可以用波動模型描述的證據：干涉）、HS-PS4-1（波長、頻率與波速的關係）。科學實踐：SEP 7 以證據進行論證、SEP 2 建立與使用模型。跨科概念：模式；因果。','Performance expectations HS-PS4-3 (evaluate evidence that electromagnetic radiation can be described by a wave model: interference), HS-PS4-1 (relationship among wavelength, frequency, and wave speed). Practices: SEP 7 Engaging in Argument from Evidence, SEP 2 Developing and Using Models. Crosscutting concepts: Patterns; Cause and Effect.']
}),init(){
const {t,tp,css,fit,$}=P;let mode='two',lam=500,d=.25,seen1=0,lam0=500;
const col=l=>{const h=l<440?270-(l-400)*1.5:l<490?240-(l-440)*1.2:l<580?180-(l-490)*1.5:Math.max(0,45-(l-580)*.375);return `hsl(${h},90%,55%)`};
const draw=()=>{const[x,W,H]=fit($('ygc'));if(W<10||H<120)return;x.clearRect(0,0,W,H);
 const sx=30,scx=W-60,cy=H/2,k=2*Math.PI/(lam/500*14),dp=d/.25*36,S=mode==='two'?[cy-dp/2,cy+dp/2]:[cy],step=4,c=col(lam);
 const img=x.createImageData(Math.ceil((scx-sx)/step),Math.ceil(H/step));const rgb=(()=>{const cv=document.createElement('canvas').getContext('2d');cv.fillStyle=c;cv.fillRect(0,0,1,1);return cv.getImageData(0,0,1,1).data})();
 const I=(px,py)=>{let re=0,im=0;S.forEach(s=>{const r=Math.hypot(px-sx,py-s)+1;re+=Math.cos(k*r)/Math.sqrt(r);im+=Math.sin(k*r)/Math.sqrt(r)});return (re*re+im*im)*(px-sx)/S.length};
 let mx=0;const vals=[];for(let j=0;j<img.height;j++)for(let i=0;i<img.width;i++){const v=I(sx+i*step,j*step);vals.push(v);if(v>mx)mx=v}
 vals.forEach((v,q)=>{const a=Math.min(1,v/mx*1.6);img.data[q*4]=rgb[0];img.data[q*4+1]=rgb[1];img.data[q*4+2]=rgb[2];img.data[q*4+3]=a*230});
 const tmp=document.createElement('canvas');tmp.width=img.width;tmp.height=img.height;tmp.getContext('2d').putImageData(img,0,0);x.imageSmoothingEnabled=true;x.drawImage(tmp,sx,0,scx-sx,H);
 x.fillStyle=css('--ink');x.fillRect(sx-4,0,6,H);S.forEach(s=>{x.clearRect(sx-4,s-4,6,8)});
 let wm=0;const wv=[];for(let y=0;y<H;y+=2){const v=I(scx,y);wv.push(v);if(v>wm)wm=v}
 wv.forEach((v,i)=>{x.fillStyle=c;x.globalAlpha=Math.min(1,v/wm);x.fillRect(scx+10,i*2,40,2)});x.globalAlpha=1;
 x.fillStyle=css('--ink');x.font='600 12px "Noto Sans TC",Archivo';x.textAlign='center';x.fillText(tp('牆','Wall'),scx+30,14);
 $('ygr').textContent=mode==='two'?tp(`條紋間距 ∝ λ/d = ${lam} nm ÷ ${d.toFixed(2)} mm`,`Stripe spacing ∝ λ/d = ${lam} nm ÷ ${d.toFixed(2)} mm`):tp('一條縫：光散開，沒有明暗條紋','One slit: light spreads out, no light-and-dark stripes')};
P.seg('ygm',[['one','一條縫','One slit'],['two','兩條縫','Two slits']],()=>mode,v=>{mode=v;if(v==='one')seen1=1;if(v==='two'&&seen1)P.reveal('yg1');draw()});
P.slider('ygl',v=>v+' nm',v=>{lam=v;if(Math.abs(v-lam0)>=150)P.reveal('yg2');draw()});$('ygl').addEventListener('change',()=>{lam0=lam});
P.slider('ygd',v=>v.toFixed(2)+' mm',v=>{d=v;draw()});
P.pred('yg1',{c:1,o:[['兩條亮線','Two bright lines'],['一整排明暗相間的條紋','A whole row of bright and dark stripes'],['一大片均勻的亮光','One even patch of light']],f:[['先選一條縫，再選兩條縫比較。','Pick one slit, then two, and compare.'],['先選一條縫，再選兩條縫驗證。','Pick one slit, then two, to check.'],['先選一條縫，再選兩條縫比較。','Pick one slit, then two, and compare.']]});
P.pred('yg2',{c:0,o:[['變寬','Spread wider apart'],['變窄','Get closer together'],['不變','Stay the same']],f:[['把波長從 450 拉到 650 驗證。','Drag the wavelength from 450 to 650 to check.'],['把波長從 450 拉到 650 看看。','Drag the wavelength from 450 to 650 and see.'],['把波長從 450 拉到 650 看看。','Drag the wavelength from 450 to 650 and see.']]});
P.num('yg3',4,['對。Δy = 600×10⁻⁹ × 2 ÷ 0.3×10⁻³ = 4×10⁻³ m = 4 mm。','Right. Δy = 600×10⁻⁹ × 2 ÷ 0.3×10⁻³ = 4×10⁻³ m = 4 mm.'],['提示：全部換成公尺再算 λL/d。','Hint: convert everything to meters, then compute λL/d.'],.05);
P.num('yg4',625,['對。λ = Δy·d/L = 2.5×10⁻³ × 0.5×10⁻³ ÷ 2 = 6.25×10⁻⁷ m = 625 nm，是橙紅色的光。楊就是這樣量出光的波長。','Right. λ = Δy·d/L = 2.5×10⁻³ × 0.5×10⁻³ ÷ 2 = 6.25×10⁻⁷ m = 625 nm, orange-red light. This is how Young measured wavelengths.'],['提示：λ = Δy × d ÷ L。','Hint: λ = Δy × d ÷ L.'],5);
P.pred('yg5',{now:1,c:0,o:[['兩條亮線，各在一條縫的正後方','Two bright lines, one behind each slit'],['一樣的明暗條紋','The same bright and dark stripes'],['一片黑','Total darkness']],f:[['對。粒子不會互相抵消，所以不會出現暗紋。實際看到條紋，就是波的證據。','Right. Particles can\'t cancel each other, so there\'d be no dark stripes. Seeing stripes is evidence of waves.'],['條紋需要互相抵消，小球做不到。','Stripes need cancellation, which little balls can\'t do.'],['粒子穿過縫一定會打到牆上。','Particles passing through the slits would hit the wall.']]});
P.watch($('ygc'),draw);
}});}
