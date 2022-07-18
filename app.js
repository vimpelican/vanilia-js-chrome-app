function plus(firstNum, secondNum){
    console.log(firstNum+secondNum);
}

function divide (a, b){
    console.log(a/b);
}

const player = {
    name: "nico",
    sayHello: function (otherPesronsName) {
        console.log("hello " + otherPesronsName + " nice to meet you")
    },
}

player.sayHello("lynn");
player.sayHello("nico");