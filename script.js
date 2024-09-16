
document.querySelectorAll('a').forEach(function(link) {
if (link.href === window.location.href) {
    link.classList.add('active');
}
});

