document.addEventListener("keydown", function (event) {

    if (event.key === "a") {
        console.log("A pressed");

        let audio = new Audio(`../sounds/${event.key.toUpperCase()}.mp3`);
        audio.play().then(() => {
            console.log("A played");
        });
    }

    if (event.key === "s") {
        new Audio("sounds/A1.mp3").play();
    }

    if (event.key === "d") {
        new Audio("sounds/A2.mp3").play();
    }

    if (event.key === "f") {
        new Audio("sounds/A3.mp3").play();
    }

    if (event.key === "g") {
        new Audio("sounds/A4.mp3").play();
    }

});
// document.addEventListener("keyup", function (event) {

//     if (event.key === "a") {
//         console.log("A released");
//     }

//     if (event.key === "s") {
//         console.log("S released");
//     }

//     if (event.key === "d") {
//         console.log("D released");
//     }

// });