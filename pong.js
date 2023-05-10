document.addEventListener("DOMContentLoaded", () => {

    var gameWindow = document.querySelector("#game");       //Game Window Div

    var paddle = document.createElement("div");            //Create the paddle
    paddle.classList.add("paddle");

    var ball = document.createElement("div");              //Create the ball
    ball.classList.add("ball");

    

    gameWindow.appendChild(paddle);                        //Add both of them
    gameWindow.appendChild(ball);

    document.addEventListener("mousemove", (evt) => {
        paddle.style.left = evt.clientX + "px";
        console.log(evt.clientX, paddle, paddle.style)
    });

});