function generateRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

const $circles = document.getElementById("circles");
// const $circles = document.querySelector("#circles");

let html = "";

const colors = ["limegreen", "indigo", "orange", "mediumpurple", "yellow", "skyblue", "black"]

for(let i = 0; i < 1000 ; i++){
    const randomWidth = generateRandomNumber(50);
    const randomColor = colors[generateRandomNumber(colors.length - 1)]
    const randomTop = generateRandomNumber(window.innerHeight - randomWidth);
    const randomLeft = generateRandomNumber(window.innerWidth - randomWidth);
    html += `<div class="circle" style="animation-delay: -${Math.random()}s; background-color: ${randomColor}; width: ${randomWidth}px ; height: ${randomWidth}px ;left :${randomLeft}px; top: ${randomTop}px" ></div>`
}

$circles.innerHTML = html;