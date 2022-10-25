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


const sound = document.createElement('img')
sound.className = "sound"
sound.setAttribute("src", "assets/img/sound_on.png");
sound.setAttribute("height", "30px");
sound.setAttribute("width", "30px");
moves.firstChild.append(sound)
let soundFlag = true;

sound.onclick = () => {
    if(soundFlag == true){
        soundFlag = false;
        sound.setAttribute("src", "assets/img/sound_off.png")
    }else{
        soundFlag = true;
        sound.setAttribute("src", "assets/img/sound_on.png")
    }
}

stopGame.onclick = () => {alert('The game is stopped, press "OK" to continue playing')}

window.onload = function(){
        let hours = 0;
        let minutes = 0;
        let seconds = 0
    window.setInterval(function() {
        start.onclick = ()=>{
            
                seconds = 0;
                hours = 0;
                minutes = 0;
                countMoves = 0;
                moves.firstChild.firstChild.nextSibling.innerHTML = countMoves
                gameFrame.replaceChildren()
                puzzle8x8()
                extraBlocks(8)
            
        }
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
sizes.innerHTML = "<div><p class='frame-size'>Frame size:</p><p class='frame-size'>8x8</p></div>"
const otherSizes = document.createElement('div')
otherSizes.className = 'other-sizes';
otherSizes.innerHTML = "<ul><li><a href='3x3.html'>3x3</a></li><li><a href='index.html'>4x4</a></li><li><a href='5x5.html'>5x5</a></li><li><a href='6x6.html'>6x6</a></li><li><a href='7x7.html'>7x7</a></li><li><a href='8x8.html'>8x8</a></li></ul>"

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
const fragment17 = document.createElement('div')
const fragment18 = document.createElement('div')
const fragment19 = document.createElement('div')
const fragment20 = document.createElement('div')
const fragment21 = document.createElement('div')
const fragment22 = document.createElement('div')
const fragment23 = document.createElement('div')
const fragment24 = document.createElement('div')
const fragment25 = document.createElement('div')
const fragment26 = document.createElement('div')
const fragment27 = document.createElement('div')
const fragment28 = document.createElement('div')
const fragment29 = document.createElement('div')
const fragment30 = document.createElement('div')
const fragment31 = document.createElement('div')
const fragment32 = document.createElement('div')
const fragment33 = document.createElement('div')
const fragment34 = document.createElement('div')
const fragment35 = document.createElement('div')
const fragment36 = document.createElement('div')
const fragment37 = document.createElement('div')
const fragment38 = document.createElement('div')
const fragment39 = document.createElement('div')
const fragment40 = document.createElement('div')
const fragment41 = document.createElement('div')
const fragment42 = document.createElement('div')
const fragment43 = document.createElement('div')
const fragment44 = document.createElement('div')
const fragment45 = document.createElement('div')
const fragment46 = document.createElement('div')
const fragment47 = document.createElement('div')
const fragment48 = document.createElement('div')
const fragment49 = document.createElement('div')
const fragment50 = document.createElement('div')
const fragment51 = document.createElement('div')
const fragment52 = document.createElement('div')
const fragment53 = document.createElement('div')
const fragment54 = document.createElement('div')
const fragment55 = document.createElement('div')
const fragment56 = document.createElement('div')
const fragment57 = document.createElement('div')
const fragment58 = document.createElement('div')
const fragment59 = document.createElement('div')
const fragment60 = document.createElement('div')
const fragment61 = document.createElement('div')
const fragment62 = document.createElement('div')
const fragment63 = document.createElement('div')
const fragment64 = document.createElement('div')

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
fragment16.innerHTML = '<p>16</p>'
fragment17.className = 'fragment';
fragment17.innerHTML = '<p>17</p>'
fragment18.className = 'fragment';
fragment18.innerHTML = '<p>18</p>'
fragment19.className = 'fragment';
fragment19.innerHTML = '<p>19</p>'
fragment20.className = 'fragment';
fragment20.innerHTML = '<p>20</p>'
fragment21.className = 'fragment';
fragment21.innerHTML = '<p>21</p>'
fragment22.className = 'fragment';
fragment22.innerHTML = '<p>22</p>'
fragment23.className = 'fragment';
fragment23.innerHTML = '<p>23</p>'
fragment24.className = 'fragment';
fragment24.innerHTML = '<p>24</p>'
fragment25.className = 'fragment';
fragment25.innerHTML = '<p>25</p>'
fragment26.className = 'fragment';
fragment26.innerHTML = '<p>26</p>'
fragment27.className = 'fragment';
fragment27.innerHTML = '<p>27</p>'
fragment28.className = 'fragment';
fragment28.innerHTML = '<p>28</p>'
fragment29.className = 'fragment';
fragment29.innerHTML = '<p>29</p>'
fragment30.className = 'fragment';
fragment30.innerHTML = '<p>30</p>'
fragment31.className = 'fragment';
fragment31.innerHTML = '<p>31</p>'
fragment32.className = 'fragment';
fragment32.innerHTML = '<p>32</p>'
fragment33.className = 'fragment';
fragment33.innerHTML = '<p>33</p>'
fragment34.className = 'fragment';
fragment34.innerHTML = '<p>34</p>'
fragment35.className = 'fragment';
fragment35.innerHTML = '<p>35</p>'
fragment36.className = 'fragment';
fragment36.innerHTML = '<p>36</p>'
fragment37.className = 'fragment';
fragment37.innerHTML = '<p>37</p>'
fragment38.className = 'fragment';
fragment38.innerHTML = '<p>38</p>'
fragment39.className = 'fragment';
fragment39.innerHTML = '<p>39</p>'
fragment40.className = 'fragment';
fragment40.innerHTML = '<p>40</p>'
fragment41.className = 'fragment';
fragment41.innerHTML = '<p>41</p>'
fragment42.className = 'fragment';
fragment42.innerHTML = '<p>42</p>'
fragment43.className = 'fragment';
fragment43.innerHTML = '<p>43</p>'
fragment44.className = 'fragment';
fragment44.innerHTML = '<p>44</p>'
fragment45.className = 'fragment';
fragment45.innerHTML = '<p>45</p>'
fragment46.className = 'fragment';
fragment46.innerHTML = '<p>46</p>'
fragment47.className = 'fragment';
fragment47.innerHTML = '<p>47</p>'
fragment48.className = 'fragment';
fragment48.innerHTML = '<p>48</p>'
fragment49.className = 'fragment';
fragment49.innerHTML = '<p>49</p>'
fragment50.className = 'fragment';
fragment50.innerHTML = '<p>50</p>'
fragment51.className = 'fragment';
fragment51.innerHTML = '<p>51</p>'
fragment52.className = 'fragment';
fragment52.innerHTML = '<p>52</p>'
fragment53.className = 'fragment';
fragment53.innerHTML = '<p>53</p>'
fragment54.className = 'fragment';
fragment54.innerHTML = '<p>54</p>'
fragment55.className = 'fragment';
fragment55.innerHTML = '<p>55</p>'
fragment56.className = 'fragment';
fragment56.innerHTML = '<p>56</p>'
fragment57.className = 'fragment';
fragment57.innerHTML = '<p>57</p>'
fragment58.className = 'fragment';
fragment58.innerHTML = '<p>58</p>'
fragment59.className = 'fragment';
fragment59.innerHTML = '<p>59</p>'
fragment60.className = 'fragment';
fragment60.innerHTML = '<p>60</p>'
fragment61.className = 'fragment';
fragment61.innerHTML = '<p>61</p>'
fragment62.className = 'fragment';
fragment62.innerHTML = '<p>62</p>'
fragment63.className = 'fragment';
fragment63.innerHTML = '<p>63</p>'
fragment64.className = 'fragment';
fragment64.innerHTML = '<p>64</p>'


//Секция с кнопками, Вёрстка
document.body.append(curtain)
document.body.append(buttonsSection);
document.body.append(moves)
buttonsSection.append(start);
buttonsSection.append(stopGame);
buttonsSection.append(save);
buttonsSection.append(results);

function combinationChecker(blocksNumber){
    let counter = 0;
    for(let i = 0; i < blocksNumber; i++){
        gameFrame.removeChild(gameFrame.firstChild)
        gameFrame.removeChild(gameFrame.lastChild)
    }

    for(let i = 1; i < gameFrame.childNodes.length; i++){
        if(parseInt(gameFrame.childNodes[i].firstChild.firstChild.nodeValue) > parseInt(gameFrame.childNodes[i].previousSibling.firstChild.firstChild.nodeValue)){
            counter += 1;
        }else{
            break
        }
    }

    console.log(counter)
    if(counter == gameFrame.childNodes.length - 1){
        alert( `Hooray! You solved the puzzle in ${timer.lastChild.nodeValue} and ${countMoves} moves!`)
        start.click()
        return
    }
    extraBlocks(blocksNumber)

}

function animate8x8(){
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
       }else if([...gameFrame.childNodes].indexOf(item2) === [...gameFrame.childNodes].indexOf(item1) + 8){
        gameFrame.replaceChild(item1, item2)
        gameFrame.insertBefore(item2, item1.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling)
       }else if([...gameFrame.childNodes].indexOf(item2) === [...gameFrame.children].indexOf(item1) - 8){
        gameFrame.replaceChild(item1, item2)
        gameFrame.insertBefore(item2, item1.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling)
       }  
       curtain.style.display = 'none';
       combinationChecker(8)
    }

    function shutdownEventListener(eventListener){
        let fragments = document.querySelectorAll('.fragment')
        fragments.forEach((fragment, index)=>{
            fragment.removeEventListener('click', eventListener)
        })
    }


    gameFrame.childNodes.forEach((fragment, index)=>{
        fragment.addEventListener('click', function eventListener() {
            if(soundFlag == true) audio.play()
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
            }else if(fragment.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling && fragment.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.hasAttribute('id')){
                fragment.style.transition = 'all 0.4s ease-out';
                fragment.style.transform = 'translateY(105%)'
                curtain.style.display = 'block'
                setTimeout(()=>{
                    fragment.style.transform = 'translateY(0%)'
                    orderChange(fragment, fragment.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling)
                    fragment.addEventListener('click', eventListener)  
                }, 1000)

            }else if(fragment.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling && fragment.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.hasAttribute('id')){
                fragment.style.transition = 'all 0.4s ease-out';
                fragment.style.transform = 'translateY(-105%)'
                curtain.style.display = 'block'
                setTimeout(()=>{
                    fragment.style.transition = 'none'
                    fragment.style.transform = 'translateY(0%)'
                    orderChange(fragment, fragment.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling)
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

function puzzle8x8(){


    let fragments = [fragment1, fragment2, fragment3, fragment4, fragment5, fragment6, fragment7, fragment8,
    fragment9, fragment10, fragment11, fragment12, fragment13, fragment14, fragment15, fragment16, fragment17,
    fragment18, fragment19, fragment20, fragment21, fragment22, fragment23, fragment24, fragment25, fragment26,
    fragment27, fragment28, fragment29, fragment30, fragment31, fragment32, fragment33, fragment34, fragment35,
    fragment36, fragment37, fragment38, fragment39, fragment40, fragment41, fragment42, fragment43, fragment44,
    fragment45, fragment46, fragment47, fragment48, fragment49, fragment50, fragment51, fragment52, fragment53,
    fragment54, fragment55, fragment56, fragment57, fragment58, fragment59, fragment60, fragment61, fragment62,
    fragment63, fragment64,];
    let min = 0;
    let max = fragments.length;
    let randomedArray = [];
    fragments[fragments.length - 1].setAttribute('id', 'invisible')

    while(max > 0){
        let tempNum = getRandomInt(min, max);
        randomedArray.push(fragments[tempNum]);
        fragments.splice(tempNum, 1)
        max -= 1
    }


    for(let arr of randomedArray){
        gameFrame.append(arr)
    }
}

function extraBlocks(number){
    for(let i = 0; i < number; i++){
        gameFrame.append(document.createElement('div'))
        gameFrame.prepend(document.createElement('div'))
    }
}


document.body.append(gameFrame);
puzzle8x8()
extraBlocks(8)
animate8x8()



document.body.append(sizes)
document.body.append(otherSizes)