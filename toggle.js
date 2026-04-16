function getTheme() {
  return localStorage.getItem('theme') === 'dark';
}

let isDark = getTheme();

function update() {
  const track = document.getElementById('track');
  const labelDark = document.getElementById('label-dark');
  const labelLight = document.getElementById('label-light');

  // ✅ Toujours mettre à jour <html>
  document.documentElement.classList.toggle('dark-mode', isDark);

  if (isDark) {
    if (track) track.classList.add('dark');
    if (labelDark) labelDark.classList.add('active');
    if (labelLight) labelLight.classList.remove('active');
    localStorage.setItem('theme', 'dark');
  } else {
    if (track) track.classList.remove('dark');
    if (labelLight) labelLight.classList.add('active');
    if (labelDark) labelDark.classList.remove('active');
    localStorage.setItem('theme', 'light');
  }
}

function toggle() {
  isDark = !isDark;
  update();
}

function setMode(mode) {
  isDark = mode === 'dark';
  update();
}

// ✅ Un seul appel, après le DOM
document.addEventListener('DOMContentLoaded', () => {
  isDark = getTheme();
  update();
});