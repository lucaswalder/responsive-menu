// get mobile button
const btnMobile = document.getElementById('btn-mobile');

// add and remove class for each click
function toggleMenu (event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

//active function on click
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);