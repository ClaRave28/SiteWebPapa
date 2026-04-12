// Applique le thème immédiatement (avant le DOM)
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

let isDark = localStorage.getItem('theme') === 'dark';

document.addEventListener('DOMContentLoaded', () => {
  update();
});

function toggle() {
  isDark = !isDark;
  update();
}

function setMode(mode) {
  isDark = mode === 'dark';
  update();
}

function update() {
  const track = document.getElementById('track');
  const labelDark = document.getElementById('label-dark');
  const labelLight = document.getElementById('label-light');

  if (isDark) {
    if (track) track.classList.add('dark');
    if (labelDark) labelDark.classList.add('active');
    if (labelLight) labelLight.classList.remove('active');
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    if (track) track.classList.remove('dark');
    if (labelLight) labelLight.classList.add('active');
    if (labelDark) labelDark.classList.remove('active');
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
}