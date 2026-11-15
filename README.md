# 物理時間軸 Physics Timeline

High school physics as a story of questions: five parallel timelines (mechanics, heat, electricity & magnetism, waves & light, modern physics), 31 nodes from Aristotle to nuclear fission, each built as old idea → contradiction → predict → experiment → new idea → apply. Chinese/English side-by-side, aligned to California NGSS (HS-PS1, HS-PS2, HS-PS3, HS-PS4, HS-ESS1).

Plain HTML/CSS/JS, no build step. Open `index.html` or serve with GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).

- `index.html` – shell, home timeline
- `core.js` – language toggle, routing (`#aristotle`, `#faraday`, …), node/era data, lesson builder, prediction/quiz engine
- `lessons/*.js` – one file per node (content + simulations)
- `style.css`
