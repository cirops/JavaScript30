const root = document.documentElement;

const spacingSlider = document.getElementsByName('spacing')[0];
const blurSlider = document.getElementsByName('blur')[0];
const colorPicker = document.getElementsByName('base-color')[0];

spacingSlider.addEventListener('change', e => {
  e.preventDefault();
  console.log(e.target.value);
  root.style.setProperty('--spacing', e.target.value + 'px');
});

blurSlider.addEventListener('change', e => {
  e.preventDefault();
  root.style.setProperty('--blur', e.target.value + 'px');
});

colorPicker.addEventListener('change', e => {
  e.preventDefault();
  root.style.setProperty('--base-color', e.target.value);
})