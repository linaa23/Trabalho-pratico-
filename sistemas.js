document.querySelectorAll('.item img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.add('active');
        
        setTimeout(() => {
            img.classList.remove('active');
        }, 300); 
})});