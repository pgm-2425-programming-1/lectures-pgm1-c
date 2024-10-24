(() => {
    const $title = document.getElementById("title");

    //Timeout 1x na verstreken seconden
    setTimeout(() => {
        $title.innerText = "Ik ben vervangen";
    }, 2 * 1000)

    const names = ['Eros','Berre','Mauro','Quinten','Sam'];
    const $name = document.getElementById('name');

    const intervalID = setInterval(function() {
        const name = names.pop();
        if(name){
            $name.innerText = name;
        }else{
            clearInterval(intervalID);
        }
    }, 1000);

    function generateRandomNumber(min,max){
        return Math.floor(Math.random()  * (max - min + 1)) + min;
    }

    const $circle = document.querySelector('#circle');
    const colors = ['red','green','blue','yellow','orange','purple','pink'];

    setInterval(() => {
        const size = generateRandomNumber(20,50);
        const randomColor = colors[generateRandomNumber(0, colors.length - 1)];
        $circle.style.width = `${size}rem`;
        $circle.style.height = `${size}rem`;
        $circle.style.backgroundColor = randomColor;
    }, 100)


})();