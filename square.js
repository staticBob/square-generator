const square = document.querySelector("square")
const button = document.getElementById("generator")
const deleteBtn = document.getElementById("delete")
const container = document.getElementById("container")
let color
let squares = []

button.addEventListener('click', function(){
    let randomNum = Math.floor(Math.random() * 10)
    if(randomNum == 1){
        color = "#fc0000"
    } else if(randomNum == 1){
        color = "#bd4500"
    } else if(randomNum == 2){
        color = "#fc6603"//
    } else if(randomNum == 3){
        color = "#ffff00"
    } else if(randomNum == 4){
        color = "#3cff00"
    } else if(randomNum == 5){
        color = "#1a6e00"//
    } else if(randomNum == 6){
        color = "#00edd5"
    } else if(randomNum == 7){
        color = "#002d75"
    } else if(randomNum == 8){
        color = "#320078"
    } else if(randomNum == 9){
        color = "#7d076d"//
    } else if(randomNum == 10){
        color = "#790091"
    }
  
    container.innerHTML += `
        <div class="square" style="background-color: ${color}; height: 100px; width: 100px; margin: 10px;"></div> 
    `
})

deleteBtn.addEventListener('click', function(){
    container.innerHTML = ""
})