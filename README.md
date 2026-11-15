# 力學時間軸 Mechanics Timeline

High school physics (mechanics) as a story of questions: eight nodes from Aristotle to satellite design, each built as old idea → contradiction → predict → experiment → new idea → apply. Chinese/English side-by-side, aligned to California NGSS (HS-PS2-1, HS-PS2-4, HS-PS3-1, HS-PS3-2, HS-ESS1-4).

Plain HTML/CSS/JS, no build step. Open `index.html` or serve with GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).

- `index.html` – shell, home timeline
- `core.js` – language toggle, routing (`#aristotle`, `#galileo`, …), prediction/quiz engine
- `lessons/*.js` – one file per node (content + simulations)
- `style.css`
