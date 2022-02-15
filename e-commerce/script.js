const imgs = document.querySelectorAll('.container img')
const container = document.querySelector('.container')

const nextBtn = document.querySelector('#next')
const beforeBtn = document.querySelector('#before')

let cont = 0 


function carrossel(){
    cont ++
    if (cont > imgs.length - 1){
        cont = 0
    }
    container.style.transform = `translateX(${-cont*100}%)`
}

nextBtn.onclick = function(){
    cont ++
    if (cont > imgs.length - 1){
        cont = 0
    }
    container.style.transform = `translateX(${-cont*100}%)`
}

beforeBtn.onclick = function(){
    cont --
    if (cont < 0){
        cont = imgs.length - 1
    }
    container.style.transform = `translateX(${-cont*100}%)`
}


setInterval(carrossel,8000)

