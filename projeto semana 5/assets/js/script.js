function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./projeto semana 5/assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./projeto semana 5/assets/img/close_white_36dp.svg";
    }
}

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener("click", function (){ 
    console.log("clicked!");
});