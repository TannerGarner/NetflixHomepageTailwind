
document.querySelectorAll('a').forEach(function(link) {
if (link.href === window.location.href) {
    link.classList.add('active');
}
});

const mobileMenu = document.getElementById('mobileMenu');

mobileMenu.addEventListener('click', function () {
    document.getElementById('navList').classList.toggle('toggleDisplay');
})
