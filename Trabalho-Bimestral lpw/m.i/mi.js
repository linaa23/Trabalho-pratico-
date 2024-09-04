document.querySelectorAll('.item img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.add('active');
        
        setTimeout(() => {
            img.classList.remove('active');
        }, 300); 
})});

document.addEventListener('DOMContentLoaded', () => {
   
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
       
            const info = button.nextElementSibling;
            if (info.style.display === 'block') {
                info.style.display = 'none';
                button.textContent = '⮟'; 
            } else {
                info.style.display = 'block';
                button.textContent = '⮝'; 
            }
        });
    });
});   

function conteudopag() {
    document.getElementById("v_inicio").style.display = "none";
    document.getElementById("pagprincipal").style.display = "block";
  }

  setTimeout(conteudopag, 10000);

  document
    .getElementById("passar_v")
    .addEventListener("click", conteudopag);


