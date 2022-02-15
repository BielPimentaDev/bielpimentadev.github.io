let btnLineNext = document.querySelector('.line-next')
let btnLineBefore = document.querySelector('.line-before')
let imgLine = document.querySelector('.img-line')
let imgsLine = document.querySelectorAll('.img-line img')
let lineCont = 0
let lineContBfr = 0


btnLineNext.onclick = function(){
    lineCont ++
    if (lineCont > imgsLine.length - 4){
        lineCont = imgsLine.length - 4
    }else{
        console.log(lineCont, lineContBfr)
        imgLine.style.transform = `translateX(${-200*lineCont}px)`
        console.log(lineCont, lineContBfr)
    }
    
    
}

btnLineBefore.onclick = function(){
    lineContBfr ++
    if (lineCont <= 0){
        lineCont= 0 
    }else {
        console.log(lineCont, lineContBfr)
        lineCont -= 1
        imgLine.style.transform = `translateX(${-200*lineCont}px)`
        console.log(lineCont, lineContBfr)
    }
}