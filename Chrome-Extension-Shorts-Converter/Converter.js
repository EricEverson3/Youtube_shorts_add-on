let input = document.getElementById('text1')
let container = document.querySelector('.container')
let btnsumbit = document.createElement('button')
    let btntext = document.createTextNode('Go to video')
    btnsumbit.appendChild(btntext)
    container.appendChild(btnsumbit)
 
btnsumbit.addEventListener('click',(e)=>{

    let link = input.value
    if(link.length>28){
    var correctLink = link.slice(31)
    }
    else{
var correctLink = link.slice(17)
    }
     var newLink = (`www.youtube.com/watch?v=` + correctLink)

    window.open(`https://`+newLink)

})
