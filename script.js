const body = document.querySelector('body'),
   sidebar = body.querySelector('.sidebar'),
   toggle = body.querySelector('.toggle'),
   searchBtn = body.querySelector('.search-box'),
   modeSwitch = body.querySelector('.toggle-switch'),
   modeText = body.querySelector('.mode-text'),
   show = body.querySelector('show');

modeSwitch.addEventListener('click', () => {
   body.classList.toggle('dark');
   if (body.classList.contains('dark')) {
      modeText.innerText = 'Light Mode';
   } else {
      modeText.innerText = 'Dark Mode';
   }
});
toggle.addEventListener('click', () => {
   if (sidebar.classList.contains('close')) {
      sidebar.classList.remove('close');

      document.getElementById('gg').style.display = 'block';
   } else if (!sidebar.classList.contains('close')) {
      sidebar.classList.add('close');
      document.getElementById('gg').style.display = 'none';
   }
});
searchBtn.addEventListener('click', () => {
   sidebar.classList.remove('close');
   document.getElementById('gg').style.display = 'block';
});
