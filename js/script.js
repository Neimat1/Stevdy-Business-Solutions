
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