{
const N=(id,l,yr,z,e,yz,ye,qz,qe)=>({id,l,yr,z,e,yz,ye,q:[qz,qe]});
const lines=[
 {id:'cells',z:'細胞',e:'Cells',c:'#2f7d32',d:['所有生物都由細胞組成嗎？細胞又是從哪裡來的？','Are all living things made of cells? And where do cells come from?']},
 {id:'bioenergy',z:'能量與物質',e:'Energy & Matter',c:'#b8860b',d:['植物的重量從哪裡來？光合作用、呼吸作用和碳循環。','Where does a plant\'s mass come from? Photosynthesis, respiration, and the carbon cycle.']},
 {id:'body',z:'人體與恆定',e:'Body & Homeostasis',c:'#c0392b',d:['血液怎麼流動？身體怎麼把體溫和血糖維持在固定範圍？','How does blood move? How does the body hold temperature and blood sugar steady?']},
 {id:'disease',z:'疾病與微生物',e:'Disease & Microbes',c:'#7b4b6a',d:['人為什麼會生病？疫苗、細菌、病毒和抗生素。','Why do people get sick? Vaccines, bacteria, viruses, and antibiotics.']},
 {id:'genetics',z:'遺傳',e:'Heredity',c:'#2160d8',d:['性狀怎麼從父母傳給孩子？從豌豆到 DNA 和基因編輯。','How are traits passed from parents to children? From pea plants to DNA and gene editing.']},
 {id:'evo',z:'演化與生態',e:'Evolution & Ecology',c:'#0f8a8a',d:['物種為什麼會改變？族群、食物鏈和生物多樣性。','Why do species change? Populations, food chains, and biodiversity.']}];
const nodes=[
 N('hooke','cells',1665,'虎克看見細胞','Hooke sees cells','1665','1665','軟木塞裡的小格子是什麼？','What are the tiny boxes inside cork?'),
 Object.assign(N('redi','cells',1668,'生命會自己長出來嗎？','Spontaneous generation?','1668–1859','1668–1859','腐肉會自己長出蛆嗎？','Can rotting meat produce maggots on its own?'),{ord:1677}),
 N('leeuwenhoek','cells',1676,'一滴水裡的生命','Life in a drop of water','1676','1676','一滴水裡有生命嗎？','Is there life in a drop of water?'),
 N('schwann','cells',1839,'細胞學說','Cell theory','1838–1839','1838–1839','所有生物都由細胞組成嗎？','Are all living things made of cells?'),
 N('virchow','cells',1855,'細胞分裂','Cell division','1855','1855','細胞是從哪裡來的？','Where do cells come from?'),
 N('helmont','bioenergy',1648,'柳樹實驗','The willow tree','1648','1648','柳樹長大的重量是從哪裡來的？','Where does a growing willow\'s mass come from?'),
 N('priestley','bioenergy',1771,'薄荷與老鼠','The mint and the mouse','1771','1771','植物能把「用壞的空氣」變好嗎？','Can plants restore "used-up" air?'),
 N('ingenhousz','bioenergy',1779,'植物需要光','Plants need light','1779','1779','植物在黑暗中也會產生氧氣嗎？','Do plants make oxygen in the dark?'),
 N('lavoisier','bioenergy',1783,'呼吸就是燃燒','Breathing is burning','1780 年代','1780s','呼吸和燃燒是同一件事嗎？','Are breathing and burning the same thing?'),
 N('calvin','bioenergy',1950,'追蹤碳原子','Tracing carbon','1950','1950','碳原子在植物裡走了哪條路？','What path does a carbon atom take inside a plant?'),
 N('keeling','bioenergy',1958,'碳循環','The carbon cycle','1958–今天','1958–today','大氣中的二氧化碳為什麼會一年起伏一次？','Why does atmospheric CO₂ rise and fall every year?'),
 N('harvey','body',1628,'血液循環','Circulation','1628','1628','血液是一直被製造，還是在循環？','Is blood constantly made, or does it circulate?'),
 N('bernard','body',1855,'體內環境','The internal environment','1850 年代','1850s','不吃東西的時候，血糖為什麼不會掉下來？','Why doesn\'t blood sugar crash when you skip a meal?'),
 N('cajal','body',1888,'神經元','The neuron','1888','1888','神經是一張連在一起的網，還是一顆一顆的細胞？','Are nerves one continuous web, or separate cells?'),
 N('banting','body',1921,'胰島素','Insulin','1921','1921','身體怎麼控制血糖？','How does the body control blood sugar?'),
 N('homeostasis','body',1926,'恆定與回饋','Homeostasis and feedback','1926','1926','體溫為什麼總是在 37°C 附近？','Why does body temperature stay near 37°C?'),
 N('jenner','disease',1796,'疫苗','Vaccines','1796','1796','擠牛奶的女工為什麼不會得天花？','Why didn\'t milkmaids catch smallpox?'),
 N('semmelweis','disease',1847,'洗手','Handwashing','1847','1847','為什麼醫生接生的產婦死得比較多？','Why did more mothers die in the doctors\' ward?'),
 N('koch','disease',1882,'細菌致病','Germs cause disease','1876–1882','1876–1882','怎麼證明某一種細菌會讓人生病？','How do you prove a germ causes a disease?'),
 N('virus','disease',1898,'病毒','Viruses','1892–1898','1892–1898','有沒有比細菌更小的病原體？','Is there a pathogen smaller than bacteria?'),
 N('fleming','disease',1928,'抗生素','Antibiotics','1928','1928','黴菌為什麼能殺死細菌？','Why could a mold kill bacteria?'),
 N('resistance','disease',1961,'抗藥性','Antibiotic resistance','1940s–今天','1940s–today','抗生素為什麼會越來越沒效？','Why do antibiotics stop working?'),
 N('mendel','genetics',1865,'孟德爾的豌豆','Mendel\'s peas','1865','1865','性狀為什麼會隔一代才出現？','Why do traits skip a generation?'),
 N('morgan','genetics',1910,'染色體','Chromosomes','1910','1910','基因在細胞的哪裡？','Where in the cell are genes?'),
 N('avery','genetics',1944,'遺傳物質是 DNA','DNA is the genetic material','1928–1944','1928–1944','遺傳物質是蛋白質還是 DNA？','Is the genetic material protein or DNA?'),
 N('dna','genetics',1953,'雙股螺旋','The double helix','1953','1953','DNA 長什麼樣子？','What does DNA look like?'),
 N('code','genetics',1961,'遺傳密碼','The genetic code','1961','1961','DNA 怎麼變成蛋白質？','How does DNA become protein?'),
 N('mutation','genetics',1957,'突變','Mutation','1949–1957','1949–1957','DNA 錯一個字會怎樣？','What happens if DNA has one letter wrong?'),
 N('crispr','genetics',2012,'基因編輯','Gene editing','2012','2012','可以精準地修改基因嗎？','Can genes be edited precisely?'),
 N('linnaeus','evo',1735,'分類','Classification','1735','1735','生物要怎麼分類？','How should living things be classified?'),
 N('cuvier','evo',1796,'滅絕','Extinction','1796','1796','物種會消失嗎？','Can species disappear?'),
 N('darwin','evo',1859,'天擇','Natural selection','1859','1859','物種是怎麼改變的？','How do species change?'),
 N('moth','evo',1950,'樺尺蛾','The peppered moth','1848–1950 年代','1848–1950s','天擇看得到嗎？','Can you watch natural selection happen?'),
 N('gause','evo',1934,'族群與承載量','Populations and carrying capacity','1934','1934','族群會無限成長嗎？','Can a population grow forever?'),
 N('carson','evo',1962,'生物放大','Biomagnification','1962','1962','DDT 為什麼會傷到老鷹？','How did DDT harm eagles?'),
 N('biodiv','evo',1967,'生物多樣性','Biodiversity','1967–今天','1967–today','棲地變小，物種會少多少？','How many species are lost when habitat shrinks?'),
 N('grant','evo',1977,'達爾文雀','Darwin\'s finches','1977','1977','雀鳥的喙會在幾年內改變嗎？','Can finch beaks change in just a few years?')];
nodes.find(n=>n.id==='mutation').ord=1962;
nodes.find(n=>n.id==='gause').ord=1955;nodes.find(n=>n.id==='grant').ord=1951;nodes.find(n=>n.id==='banting').ord=1927;
P.addSubject('biology',{lines,nodes});
}
