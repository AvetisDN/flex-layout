let menuLis = document.querySelectorAll('.header-content-menu li');

for(let li in menuLis) {
    if(menuLis.hasOwnProperty(li)) {
        if(menuLis[li].querySelector('ul')) {
            menuLis[li].classList.add('arrow');
            menuLis[li].addEventListener('click',openSubMenu);
        }
    }    
}

function openSubMenu(event) {
    event.preventDefault();
    let showedSubmenu = document.querySelectorAll('.header-content-menu ul.show');
    for(let ul in showedSubmenu) {
        if(showedSubmenu.hasOwnProperty(ul)) {
            if(this.querySelector('ul') != showedSubmenu[ul])
                showedSubmenu[ul].classList.remove('show');
        }    
    }
    this.querySelector('ul').classList.toggle('show');
    
}
document.addEventListener('click',closeSubMenu);

function closeSubMenu(event) {
    let showedUl = document.querySelectorAll('.header-content-menu ul.show');    
    if(showedUl.length > 0) {
        console.log(event.target.parentNode.querySelector('ul') != showedUl[0]);
        if(event.target.parentNode.querySelector('ul') != showedUl[0]) {
            showedUl[0].classList.remove('show');
        }
    }
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
    });
});
