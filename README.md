# 科學時間軸 Science Timeline

High school physics as a story of questions: five parallel timelines (mechanics, heat, electricity & magnetism, waves & light, modern physics), 31 nodes from Aristotle to nuclear fission, each built as old idea → contradiction → predict → experiment → new idea → apply. Chinese/English side-by-side, aligned to California NGSS (HS-PS1, HS-PS2, HS-PS3, HS-PS4, HS-ESS1).

Biology: six parallel timelines (cells, energy & photosynthesis, the body, disease & microbes, genetics, evolution & ecology), 37 nodes from Hooke to CRISPR and biodiversity, aligned to HS-LS1–LS4 and HS-ETS1.

Chemistry: six parallel timelines (matter & atoms, the periodic table, bonds & molecular shape, reactions & energy, solutions/acids/bases, organic chemistry/materials/society), 36 nodes from Democritus to green chemistry, aligned to HS-PS1-1 through PS1-8, plus HS-ESS2/ESS3 and HS-ETS1. Includes an interactive periodic table (`#elements`) with a page for every element (`#el-Fe`): bilingual story and uses, discoverer and year, electron configuration, animated Bohr model, a quick prediction, its group, and links to related timeline nodes; color by category, state, electronegativity, or discovery era; a time machine shows which elements were known in any year.

Earth & space: six parallel timelines (deep time, Earth's interior & plates, atmosphere & ocean, climate change, the solar system, stars & the universe), 36 nodes from Steno to the cosmic microwave background, aligned to HS-ESS1, HS-ESS2, and HS-ESS3.

Plain HTML/CSS/JS, no build step. Open `index.html` or serve with GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).

- `index.html` – shell: subject tabs, topic/era views
- `core.js` – language toggle, routing (`#aristotle`, `#faraday`, …), vertical timeline home, lesson builder, prediction/quiz engine
- `data/world.js` – shared eras and world events (all subjects)
- `data/subjects.js` – subject registry (physics, chemistry, biology, and earth & space)
- `subjects/<subject>.js` – topics (lines) and nodes for one subject
- `lessons/<subject>/*.js` – one file per node (content + simulations)
- `data/elements.js` + `lessons/chemistry/elements.js` – periodic table data and pages (registered via `P.pages`)
- `style.css`

To add a subject: set `ready:1` in `data/subjects.js`, create `subjects/<id>.js` calling `P.addSubject`, add lessons under `lessons/<id>/`, and list the scripts in `index.html`.
