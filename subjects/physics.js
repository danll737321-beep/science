{
const lines=[{id:'mech',d:['從「東西為什麼會掉」到設計人造衛星：運動、力、引力和能量。','From "why do things fall" to designing a satellite: motion, force, gravity, and energy.'],z:'力學',e:'Mechanics',c:'#b8532a'},{id:'thermo',d:['熱是什麼？溫度、熱機、熵，以及分子的運動。','What is heat? Temperature, engines, entropy, and molecules in motion.'],z:'熱學',e:'Heat',c:'#c2410c'},{id:'em',d:['從指南針和靜電，到發電機和電磁波。','From compasses and static sparks to generators and electromagnetic waves.'],z:'電與磁',e:'Electricity & Magnetism',c:'#2160d8'},{id:'waves',d:['光是粒子還是波？折射、干涉、都卜勒效應和無線電。','Is light a particle or a wave? Refraction, interference, the Doppler effect, and radio.'],z:'波與光',e:'Waves & Light',c:'#0f8a8a'},{id:'modern',d:['相對論、光子、原子核和膨脹的宇宙：古典物理解釋不了的事。','Relativity, photons, the nucleus, and the expanding universe: what classical physics couldn\'t explain.'],z:'近代物理',e:'Modern Physics',c:'#7b4b6a'}];
const N=(id,l,yr,z,e,yz,ye,qz,qe)=>({id,l,yr,z,e,yz,ye,q:[qz,qe]});
const nodes=[
 N('aristotle','mech',-350,'亞里斯多德','Aristotle','約前 350','c. 350 BCE','東西為什麼會動、為什麼會掉？','Why do things move, and why do they fall?'),
 N('galileo','mech',1604,'伽利略的斜坡','Galileo\'s ramp','1604–1638','1604–1638','掉落真的跟重量有關嗎？','Does falling really depend on weight?'),
 N('kepler','mech',1609,'克卜勒的軌道','Kepler\'s orbits','1609–1619','1609–1619','行星的軌道是什麼形狀？','What shape are the planets\' orbits?'),
 N('cannon','mech',1687,'牛頓的砲彈','Newton\'s cannon','1687','1687','丟出去的石頭跟月亮有什麼關係？','What does a thrown stone have to do with the Moon?'),
 N('gravity','mech',1687,'萬有引力','Universal gravity','1687','1687','離地球越遠，引力怎麼變？','How does gravity change with distance?'),
 N('fma','mech',1687,'F = ma','F = ma','1687','1687','力、質量和加速度是什麼關係？','How are force, mass, and acceleration related?'),
 Object.assign(N('momentum','mech',1668,'動量守恆','Momentum','1668–1687','1668–1687','碰撞的時候，什麼東西前後不變？','In a collision, what stays the same?'),{ord:1687.5}),
 N('energy','mech',1845,'能量守恆','Conservation of energy','1840 年代','1840s','東西停下來時，它的運動跑去哪裡了？','When something stops, where did its motion go?'),
 N('satellite','mech',1957,'設計一顆衛星','Design a satellite','1957–今天','1957–today','要多快、多高才能一直繞著地球轉？','How fast and how high to keep circling Earth?'),
 N('black','thermo',1761,'溫度和熱','Temperature vs. heat','1761','1761','溫度和熱是同一件事嗎？','Are temperature and heat the same thing?'),
 N('carnot','thermo',1824,'熱機的極限','The limit of heat engines','1824','1824','蒸汽機的效率可以到 100% 嗎？','Can a steam engine reach 100% efficiency?'),
 N('clausius','thermo',1850,'熵','Entropy','1850–1865','1850–1865','熱為什麼只會從熱流到冷？','Why does heat only flow from hot to cold?'),
 N('kinetic','thermo',1860,'分子運動論','Kinetic theory','1857–1877','1857–1877','溫度到底是什麼在動？','What is actually moving when something is hot?'),
 N('gilbert','em',1600,'地球是一塊磁鐵','Earth is a magnet','1600','1600','指南針為什麼會指北？','Why does a compass point north?'),
 N('franklin','em',1752,'電荷','Electric charge','1745–1752','1745–1752','電是什麼？摩擦起電和閃電是同一件事嗎？','What is electricity? Are static sparks and lightning the same thing?'),
 N('coulomb','em',1785,'庫侖定律','Coulomb\'s law','1785','1785','電力有多強？距離變遠會怎樣？','How strong is the electric force, and how does it change with distance?'),
 N('volta','em',1800,'電池與電流','Batteries and current','1800–1827','1800–1827','能不能讓電一直流？','Can electricity be made to flow continuously?'),
 N('oersted','em',1820,'電流生磁','Current makes magnetism','1820','1820','電和磁之間有關係嗎？','Are electricity and magnetism connected?'),
 N('faraday','em',1831,'電磁感應','Electromagnetic induction','1831','1831','既然電能生磁，磁能不能生電？','If current makes magnetism, can magnetism make current?'),
 N('maxwell','em',1865,'電磁波','Electromagnetic waves','1865','1865','光到底是什麼？','What is light, really?'),
 N('huygens','waves',1678,'光是粒子還是波？','Particle or wave?','1678–1704','1678–1704','光是一顆一顆的粒子，還是一種波？','Is light made of particles or is it a wave?'),
 N('young','waves',1801,'雙狹縫','The double slit','1801','1801','怎麼證明光是波？','How can you prove light is a wave?'),
 N('doppler','waves',1842,'都卜勒效應','The Doppler effect','1842','1842','救護車經過時，聲音為什麼會變？','Why does a siren\'s pitch change as it passes?'),
 N('hertz','waves',1887,'看不見的光','Invisible light','1887','1887','電磁波真的存在嗎？','Do electromagnetic waves really exist?'),
 N('michelson','modern',1887,'找不到的以太','The missing ether','1887','1887','光在什麼東西裡傳播？','What does light travel through?'),
 N('relativity','modern',1905,'相對論','Relativity','1905','1905','如果光速對每個人都一樣，會發生什麼事？','If light\'s speed is the same for everyone, what follows?'),
 N('photon','modern',1905,'光子','The photon','1905','1905','為什麼紅光再亮也打不出電子？','Why can\'t even bright red light knock out electrons?'),
 N('rutherford','modern',1911,'原子核','The nucleus','1911','1911','原子裡面長什麼樣子？','What does the inside of an atom look like?'),
 N('bohr','modern',1913,'波耳的原子','Bohr\'s atom','1913','1913','為什麼每種元素只發出特定顏色的光？','Why does each element glow only in certain colors?'),
 N('hubble','modern',1929,'膨脹的宇宙','The expanding universe','1929','1929','宇宙是靜止的嗎？','Is the universe standing still?'),
 N('fission','modern',1938,'核分裂','Nuclear fission','1938','1938','原子核裡藏了多少能量？','How much energy is hidden in a nucleus?')];


P.addSubject('physics',{lines,nodes});
}
