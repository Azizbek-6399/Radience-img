window.addEventListener('DOMContentLoaded' , function(){
    let nextBtn = document.querySelector('#next');
    let prevBtn = document.querySelector('#prev');
    let images = document.getElementsByClassName('thumbnail');
    let hero = document.getElementById('hero');

    var bacImg = [  
        './img/bg1.png',
        './img/bg2.png',
        './img/bg3.png',
        './img/bg4.png',
        './img/bg5.png'
    ];

    let i = 0;
    nextBtn.addEventListener('click', function(){
        if(i < 4){
            hero.style.backgroundImage = 'url("'+bacImg[i + 1]+'")';
            images[i+1].classList.add('active');
            images[i].classList.remove('active');
            i++;
        } 
    });
    prevBtn.addEventListener('click', function(){
        if(i > 0){
            hero.style.backgroundImage = 'url("'+bacImg[i - 1]+'")';
            images[i-1].classList.add('active');
            images[i].classList.remove('active');
            i--;
        } 
    })
});