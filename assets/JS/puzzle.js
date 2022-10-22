"use strict"
const buttonsSection = document.createElement('div');
buttonsSection.className = 'buttons-section'

const start = document.createElement('button')
start.innerHTML = 'Start'
start.className = 'startGame'
const stopGame = document.createElement('button')
stopGame.innerHTML = 'Stop'
stopGame.setAttribute('id', 'active')
const save = document.createElement('button')
save.innerHTML = 'Save'
const results = document.createElement('button')
results.innerHTML = 'Results'
const moves = document.createElement('div')
moves.className = 'moves-section'
let countMoves = 0;
let countTime = 0;
moves.innerHTML = `<div><p>Moves:</p><p>0</p></div><div><p>Time:</p><p>00:00:00</p></div>`
const timer = moves.lastChild.lastChild
const audio = new Audio("assets/audio/zvuk.mp3");
const curtain = document.createElement('div');
curtain.className = 'curtain';
curtain.style.width = 100 + '%';
curtain.style.height = window.innerHeight + 'px'

window.onload = function(){
        let hours = 0;
        let minutes = 0;
        let seconds = 0
    window.setInterval(function() {
        seconds += 1;
        if(seconds == 60){
            seconds = 0;
            minutes += 1;
        }

        if(minutes == 60){
            minutes = 0
            hours += 1
        }

        function clockMaker(hours, minutes, seconds){
            if(hours < 10) hours = '0' + hours;
            if(minutes < 10) minutes = '0' + minutes;
            if(seconds < 10) seconds = '0' + seconds;
            let clock = hours + ':' + minutes + ':' + seconds
            return clock;
        }
        
        let clock = clockMaker(hours, minutes, seconds)

        
        timer.innerHTML = clock;
    }, 1000)
}




const sizes = document.createElement('div')
sizes.className = 'sizes'
sizes.innerHTML = "<div><p class='frame-size'>Frame size:</p><p class='frame-size'>4x4</p></div>"
const otherSizes = document.createElement('div')
otherSizes.className = 'other-sizes';
otherSizes.innerHTML = "<ul><li>3x3</li><li>4x4</li><li>5x5</li><li>6x6</li><li>7x7</li><li>8x8</li></ul>"

moves.firstChild.firstChild.nextSibling.innerHTML = countMoves;

const gameFrame = document.createElement('section');
const fragment1 = document.createElement('div')
const fragment2 = document.createElement('div')
const fragment3 = document.createElement('div')
const fragment4 = document.createElement('div')
const fragment5 = document.createElement('div')
const fragment6 = document.createElement('div')
const fragment7 = document.createElement('div')
const fragment8 = document.createElement('div')
const fragment9 = document.createElement('div')
const fragment10 = document.createElement('div')
const fragment11 = document.createElement('div')
const fragment12 = document.createElement('div')
const fragment13 = document.createElement('div')
const fragment14 = document.createElement('div')
const fragment15 = document.createElement('div')
const fragment16 = document.createElement('div')

gameFrame.className = 'game-frame';

fragment1.className = 'fragment';
fragment1.innerHTML = '<p>1</p>'
fragment2.className = 'fragment';
fragment2.innerHTML = '<p>2</p>'
fragment3.className = 'fragment';
fragment3.innerHTML = '<p>3</p>'
fragment4.className = 'fragment';
fragment4.innerHTML = '<p>4</p>'
fragment5.className = 'fragment';
fragment5.innerHTML = '<p>5</p>'
fragment6.className = 'fragment';
fragment6.innerHTML = '<p>6</p>'
fragment7.className = 'fragment';
fragment7.innerHTML = '<p>7</p>'
fragment8.className = 'fragment';
fragment8.innerHTML = '<p>8</p>'
fragment9.className = 'fragment';
fragment9.innerHTML = '<p>9</p>'
fragment10.className = 'fragment';
fragment10.innerHTML = '<p>10</p>'
fragment11.className = 'fragment';
fragment11.innerHTML = '<p>11</p>'
fragment12.className = 'fragment';
fragment12.innerHTML = '<p>12</p>'
fragment13.className = 'fragment';
fragment13.innerHTML = '<p>13</p>'
fragment14.className = 'fragment';
fragment14.innerHTML = '<p>14</p>'
fragment15.className = 'fragment';
fragment15.innerHTML = '<p>15</p>'
fragment16.className = 'fragment';
fragment16.innerHTML = '<p>15</p>'
fragment16.setAttribute('id', 'invisible')

//Секция с кнопками, Вёрстка
document.body.append(curtain)
document.body.append(buttonsSection);
document.body.append(moves)
buttonsSection.append(start);
buttonsSection.append(stopGame);
buttonsSection.append(save);
buttonsSection.append(results);


function animate4x4(){
    let fragments = [...document.querySelectorAll('.fragment')];
    function orderChange(item1, item2){
        countMoves += 1;
        moves.firstChild.firstChild.nextSibling.innerHTML = countMoves;
       if(item1.nextSibling === item2){
        gameFrame.replaceChild(item1, item2)
        gameFrame.insertBefore(item2, item1)
       }else if(item1.previousSibling === item2){
        gameFrame.replaceChild(item1, item2)
        gameFrame.insertBefore(item2, item1.nextSibling)
       }else if([...gameFrame.childNodes].indexOf(item2) === [...gameFrame.childNodes].indexOf(item1) + 4){
        gameFrame.replaceChild(item1, item2)
        gameFrame.insertBefore(item2, item1.previousSibling.previousSibling.previousSibling)
       }else if([...gameFrame.childNodes].indexOf(item2) === [...gameFrame.children].indexOf(item1) - 4){
        gameFrame.replaceChild(item1, item2)
        gameFrame.insertBefore(item2, item1.nextSibling.nextSibling.nextSibling.nextSibling)
       }  
       curtain.style.display = 'none';
    }

    function shutdownEventListener(eventListener){
        let fragments = document.querySelectorAll('.fragment')
        fragments.forEach((fragment, index)=>{
            fragment.removeEventListener('click', eventListener)
        })
    }


    gameFrame.childNodes.forEach((fragment, index)=>{
        fragment.addEventListener('click', function eventListener() {
            audio.play()
            if(fragment.nextSibling && fragment.nextSibling.hasAttribute('id')){
                fragment.style.transition = 'all 0.4s ease-out';
                fragment.style.transform = 'translateX(105%)'
                curtain.style.display = 'block'
                setTimeout(()=>{
                    fragment.style.transform = 'translateX(0%)'
                    orderChange(fragment, fragment.nextSibling)
                    fragment.addEventListener('click', eventListener)          
                }, 1000)
            }else if(fragment.previousSibling && fragment.previousSibling.hasAttribute('id')){
                fragment.style.transition = 'all 0.4s ease-out';
                fragment.style.transform = 'translateX(-105%)'
                curtain.style.display = 'block'
                setTimeout(()=>{
                    fragment.style.transition = 'none'
                    fragment.style.transform = 'translateX(0%)'
                    curtain.style.display = 'block'
                    orderChange(fragment, fragment.previousSibling)
                    fragment.addEventListener('click', eventListener)   
                }, 1000)
            }else if(fragment.nextSibling.nextSibling.nextSibling.nextSibling && fragment.nextSibling.nextSibling.nextSibling.nextSibling.hasAttribute('id')){
                fragment.style.transition = 'all 0.4s ease-out';
                fragment.style.transform = 'translateY(105%)'
                curtain.style.display = 'block'
                setTimeout(()=>{
                    fragment.style.transform = 'translateY(0%)'
                    orderChange(fragment, fragment.nextSibling.nextSibling.nextSibling.nextSibling)
                    fragment.addEventListener('click', eventListener)  
                }, 1000)

            }else if(fragment.previousSibling.previousSibling.previousSibling.previousSibling && fragment.previousSibling.previousSibling.previousSibling.previousSibling.hasAttribute('id')){
                fragment.style.transition = 'all 0.4s ease-out';
                fragment.style.transform = 'translateY(-105%)'
                curtain.style.display = 'block'
                setTimeout(()=>{
                    fragment.style.transition = 'none'
                    fragment.style.transform = 'translateY(0%)'
                    orderChange(fragment, fragment.previousSibling.previousSibling.previousSibling.previousSibling)
                    fragment.addEventListener('click', eventListener)  
                }, 1000)

            }
        })
            
})
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

function puzzle4x4(){


    let fragments = [fragment1, fragment2, fragment3, fragment4, fragment5, fragment6, fragment7, fragment8,
    fragment9, fragment10, fragment11, fragment12, fragment13, fragment14, fragment15, fragment16];
    let min = 0;
    let max = fragments.length;

    let randomedArray = [];

    while(max > 0){
        let tempNum = getRandomInt(min, max);
        randomedArray.push(fragments[tempNum]);
        fragments.splice(tempNum, 1)
        max -= 1
    }



    document.body.append(gameFrame);
    // let counter = 0;

    for(let arr of randomedArray){
        gameFrame.append(arr)
    }
    extraBlocks(4)
    animate4x4()
}

function extraBlocks(number){
    for(let i = 0; i < number; i++){
        gameFrame.append(document.createElement('div'))
        gameFrame.prepend(document.createElement('div'))
    }
}

puzzle4x4()

start.onclick = function reloader(){
    location.reload()
}


document.body.append(sizes)
document.body.append(otherSizes)

