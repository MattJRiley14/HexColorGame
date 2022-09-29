var numSquares = 6;
var colors = [];
var pickedColor; // This is creating a variable with no set value
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init(); // Function to run when the page loads

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
    console.log("Hello");
}


function setUpModeButtons() {
    // modeButtons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            // this.textContent === "Easy" ? numSquares = 3: numSquares = 6; This is another way to write the if else statement above. This way is called a ternary operator.
            reset();
        });
    }
}


function setUpSquares(){
    for (var i = 0; i < squares.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click", function () {
            // Get color of clicked square
            var clickedColor = this.style.backgroundColor;
            // Compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}


function reset() {
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = ""
    // Generate all new colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // Change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]; // style.backgroundColor works in more browsers than style.background
        } else {
            squares[i].style.display = "none";
        }
    }
}

// easyBtn.addEventListener("click", function () {
//     numSquares = 3;
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function () {
//     numSquares = 6
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function () { // Important to change your texts and colors on page first before running JS (Ex: Changing background color & text content first on this page.)
    reset();

    // h1.style.backgroundColor = "steelblue";
    // this.textContent = "New Colors";
    // messageDisplay.textContent = ""
    // // Generate all new colors
    // colors = generateRandomColors(numSquares);
    // // Pick a new random color from array
    // pickedColor = pickColor();
    // // Change color display to match picked color
    // colorDisplay.textContent = pickedColor;
    // // Change colors of squares
    // for (var i = 0; squares.length; i++) {
    //     // Adds inital colors to squares
    //     squares[i].style.backgroundColor = colors[i]; // style.backgroundColor works in more browsers than style.background
    // }
});

function changeColors(color) {
    // Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // Change each square to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length) // Math.random on it's own picks a number BETWEEN 0 & 1. Math.floor removes numbers after decimal point. To get the random number to start at 1 you would put a + 1 after colors.length, but since arrays start at index 0 the + 1 is not necessary in this case.
    return colors[random];
}

function generateRandomColors(num) {
    // Make an array
    var arr = [];
    // Repeat num times
    for (var i = 0; i < num; i++) {
        // Get random color and push into array
        arr.push(randomColor());
    }
    // Return array
    return arr;
}

function randomColor() {
    // Pick a "Red" from 0-255
    var r = Math.floor(Math.random() * 256)
    // Pick a "Green" from 0-255
    var g = Math.floor(Math.random() * 256)
    // Pick a "Blue" from 0-255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

