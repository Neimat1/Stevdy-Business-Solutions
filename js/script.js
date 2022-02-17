
// start header section
let navbar = document.querySelector('.header .navbar');
let menu_btn = document.querySelector(".header .menu-btn");

menu_btn.onclick = () =>{

    document.querySelector(".header .menu-btn i").classList.toggle("fa-bars");
    document.querySelector(".header .menu-btn i").classList.toggle("fa-times");
    menu_btn.classList.toggle('active');
    navbar.classList.toggle('active');
}
// end header section

// scroll window

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

};
// end scroll window 

document.querySelectorAll(".platform-overview .image .image-contrlos .image-btn ").forEach(btn => {
    btn.onclick =() =>{
        let src =  btn.getAttribute("data-src");
        let backSrc =document.querySelector(".platform-overview .image img").getAttribute('src');
        lastActiveBackground(backSrc);
        document.querySelector(".platform-overview .image img").src = src;
        btn.classList.add('active');
    } 

})


function lastActiveBackground(val){
    document.querySelectorAll(".platform-overview .image .image-contrlos .image-btn ").forEach(btn => {
        let backSrc =document.querySelector(".platform-overview .image img").getAttribute('src');
        if(backSrc===val)
            btn.classList.remove('active');
    
    })
}