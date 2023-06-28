const menuToggle = document.querySelector(
  'header nav .wrapper  .menu-toggle input'
);

const nav = document.querySelector('header nav .wrapper ul');

const linkMenu = document.querySelectorAll('header nav .wrapper ul li a');

var linksLength = linkMenu.length;

for (var i = 0; i < linksLength; i++) {
  linkMenu[i].addEventListener('click', function () {
    nav.classList.toggle('slide');
    menuToggle.checked = false;
  });
}

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
});
