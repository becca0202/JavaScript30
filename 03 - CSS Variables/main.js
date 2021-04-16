const spacingInput = document.getElementById('spacing');
const blurInput = document.getElementById('blur');
const colorInput = document.getElementById('base');

function spacingChange() {
  document.documentElement.style.setProperty('--spacing', `${this.value}px`);
}

function blurChange() {
  document.documentElement.style.setProperty('--blur', `${this.value}px`);
}

function colorChange() {
  document.documentElement.style.setProperty('--base', `${this.value}`);
}

spacingInput.addEventListener('change', spacingChange);
blurInput.addEventListener('change', blurChange);
colorInput.addEventListener('change', colorChange);
