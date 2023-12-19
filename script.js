window.addEventListener('scroll', function() {
    var header = document.querySelector('#header');
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > 0) {
        header.classList.remove('bg-transparent');
        header.classList.add('bg-gradient-to-r', 'from-blue-900', 'to-fuchsia-700');
    } else {
        header.classList.remove('bg-gradient-to-r', 'from-blue-900', 'to-fuchsia-700');
        header.classList.add('bg-transparent');
    }
});