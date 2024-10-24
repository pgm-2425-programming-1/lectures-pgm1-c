function generateRandomNumber(min, max) {   
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const $btn = document.querySelector("#btn1");
const $btnMystery = document.getElementById('btn2');

$btn.addEventListener('dblclick', function(e) {
    console.log("You clicked the button");
    console.log(e.currentTarget);
    e.currentTarget.style.backgroundColor = `rgb(${generateRandomNumber(0,255)},${generateRandomNumber(0,255)},${generateRandomNumber(0,255)})`;
});

//click
//mousemove
//mouseenter
//mouseleave
//dblclick
//...

let start = false;

$btnMystery.addEventListener('mouseenter', function(e){
   e.currentTarget.style.left = `${generateRandomNumber(5, 80)}vw`;
   e.currentTarget.style.top = `${generateRandomNumber(5, 80)}vh`;
});

$btnMystery.addEventListener('click', function(e){
    window.alert("You win!");
})

//rectangles
const $rectangles = document.querySelectorAll('.rectangle');

for(const $rectangle of $rectangles){
    let isCircle = false;
    $rectangle.addEventListener('click', (e) => {
        if(!isCircle){
            e.currentTarget.style.transform = 'scale(0.7)';
            e.currentTarget.style.backgroundColor = `rgb(${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)})`;
            e.currentTarget.style.borderRadius = '50%';
            isCircle = true;
        }
        else{
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = `rgb(${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)})`;
            e.currentTarget.style.borderRadius = '0';
            isCircle = false;
        }
    })
}

