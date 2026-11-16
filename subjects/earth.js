{
const N=(id,l,yr,z,e,yz,ye,qz,qe)=>({id,l,yr,z,e,yz,ye,q:[qz,qe]});
const lines=[
 {id:'time',z:'地球的年齡',e:'Deep Time',c:'#8a6a3a',d:['地球有多老？從岩層、化石到放射性定年。','How old is Earth? From rock layers and fossils to radiometric dating.']},
 {id:'plates',z:'地球內部與板塊',e:'Earth\'s Interior & Plates',c:'#c0392b',d:['地球裡面長什麼樣子？大陸為什麼會移動？','What is inside Earth? Why do continents move?']},
 {id:'air',z:'大氣與海洋',e:'Atmosphere & Ocean',c:'#2160d8',d:['風和洋流是怎麼來的？天氣能預測多遠？','What drives winds and currents? How far ahead can weather be forecast?']},
 {id:'climate',z:'氣候變遷',e:'Climate Change',c:'#e07a5f',d:['什麼決定地球的溫度？二氧化碳和冰期的證據。','What sets Earth\'s temperature? Evidence from carbon dioxide and the ice ages.']},
 {id:'solar',z:'太陽系',e:'The Solar System',c:'#7b4b6a',d:['太陽系怎麼形成？隕石、撞擊坑和其他恆星的行星。','How did the solar system form? Meteorites, impact craters, and planets around other stars.']},
 {id:'stars',z:'恆星與宇宙',e:'Stars & the Universe',c:'#1f4a8a',d:['恆星是什麼？元素從哪裡來？宇宙怎麼開始？','What are stars? Where do elements come from? How did the universe begin?']}];
const nodes=[
 N('steno','time',1669,'岩層的順序','The order of rock layers','1669','1669','岩層能告訴我們什麼先發生？','What can rock layers tell us about what happened first?'),
 N('hutton','time',1788,'深時','Deep time','1788','1788','地球比我們以為的老多少？','How much older is Earth than people thought?'),
 N('smith','time',1815,'化石對比','Matching layers by fossils','1815','1815','兩地的岩層怎麼對起來？','How can layers in different places be matched?'),
 N('kelvin','time',1862,'冷卻的地球','A cooling Earth','1862','1862','能用物理算出地球的年齡嗎？','Can physics calculate Earth\'s age?'),
 N('holmes','time',1913,'放射性時鐘','The radioactive clock','1913','1913','岩石裡有時鐘嗎？','Is there a clock inside rocks?'),
 N('patterson','time',1956,'45.5 億年','4.55 billion years','1956','1956','地球到底幾歲？','Exactly how old is Earth?'),
 N('moho','plates',1909,'地殼有多厚','How thick is the crust?','1909','1909','地震波能看見地底嗎？','Can earthquake waves see underground?'),
 N('wegener','plates',1912,'大陸漂移','Continental drift','1912','1912','大陸會移動嗎？','Do continents move?'),
 N('richter','plates',1935,'地震規模','Earthquake magnitude','1935','1935','地震有多大要怎麼比較？','How do you compare the size of earthquakes?'),
 N('lehmann','plates',1936,'地球的內核','Earth\'s inner core','1936','1936','地心是液體還是固體？','Is Earth\'s center liquid or solid?'),
 N('seafloor','plates',1962,'海底擴張','Seafloor spreading','1962','1962','海底會長大嗎？','Does the seafloor grow?'),
 N('stripes','plates',1963,'海底的磁條紋','Magnetic stripes on the seafloor','1963','1963','海底記錄了什麼？','What does the seafloor record?'),
 N('hadley','air',1735,'信風','The trade winds','1735','1735','信風為什麼從東北吹來？','Why do trade winds blow from the northeast?'),
 N('coriolis','air',1835,'科氏力','The Coriolis effect','1835','1835','風為什麼會轉彎？','Why do winds curve?'),
 N('fronts','air',1919,'鋒面','Weather fronts','1919','1919','雨是怎麼形成的？','How does rain form?'),
 N('lorenz','air',1963,'蝴蝶效應','The butterfly effect','1963','1963','天氣能預測多遠？','How far ahead can weather be predicted?'),
 N('elnino','air',1969,'聖嬰現象','El Niño','1969','1969','太平洋的變化怎麼影響加州？','How does the Pacific affect California\'s weather?'),
 N('conveyor','air',1987,'海洋輸送帶','The ocean conveyor','1987','1987','深海的水會流動嗎？','Does deep ocean water move?'),
 N('fourier','climate',1824,'地球的溫度','Earth\'s temperature','1824','1824','地球為什麼不會凍成冰球？','Why isn\'t Earth frozen solid?'),
 N('foote','climate',1856,'吸熱的氣體','Gases that trap heat','1856','1856','哪一種氣體最會吸熱？','Which gas traps the most heat?'),
 N('arrhenius','climate',1896,'二氧化碳加倍','Doubling carbon dioxide','1896','1896','二氧化碳加倍，地球會變多熱？','If CO₂ doubles, how much warmer will Earth get?'),
 N('milankovitch','climate',1941,'冰期的節拍','The rhythm of the ice ages','1941','1941','冰期為什麼會來來去去？','Why do ice ages come and go?'),
 N('icecore','climate',1999,'冰芯','Ice cores','1999','1999','古代的空氣還在嗎？','Is ancient air still around?'),
 N('sealevel','climate',1993,'海平面上升','Rising seas','1993–今天','1993–today','海平面上升有多快？','How fast is the sea rising?'),
 N('laplace','solar',1796,'星雲假說','The nebular hypothesis','1796','1796','行星為什麼都往同一個方向轉？','Why do all planets orbit the same way?'),
 N('meteorite','solar',1803,'天上掉下來的石頭','Stones from the sky','1803','1803','石頭會從天上掉下來嗎？','Can stones fall from the sky?'),
 N('crater','solar',1960,'撞擊坑','Impact craters','1960','1960','月球的坑是火山還是撞擊？','Are the Moon\'s craters volcanoes or impacts?'),
 N('alvarez','solar',1980,'恐龍滅絕','The end of the dinosaurs','1980','1980','恐龍為什麼消失了？','Why did the dinosaurs vanish?'),
 N('moon','solar',1984,'月球的起源','The origin of the Moon','1984','1984','月球是怎麼來的？','Where did the Moon come from?'),
 N('exoplanet','solar',1995,'系外行星','Exoplanets','1995','1995','其他恆星也有行星嗎？','Do other stars have planets?'),
 N('hrd','stars',1911,'恆星的分類','Sorting the stars','1911–1913','1911–1913','恆星有幾種？','How many kinds of stars are there?'),
 N('payne','stars',1925,'太陽是什麼做的','What the Sun is made of','1925','1925','太陽的成分跟地球一樣嗎？','Is the Sun made of the same stuff as Earth?'),
 N('chandra','stars',1930,'恆星的終點','How stars end','1930','1930','恆星死了之後會變成什麼？','What does a star become when it dies?'),
 N('bethe','stars',1939,'恆星的能源','What powers the stars','1939','1939','太陽為什麼能燒幾十億年？','How can the Sun shine for billions of years?'),
 N('b2fh','stars',1957,'元素的起源','The origin of the elements','1957','1957','金和鐵是從哪裡來的？','Where do gold and iron come from?'),
 N('cmb','stars',1965,'大霹靂的餘暉','The afterglow of the Big Bang','1965','1965','宇宙有開始嗎？','Did the universe have a beginning?')];
nodes.find(n=>n.id==='sealevel').ord=2005;
P.addSubject('earth',{lines,nodes});
}
