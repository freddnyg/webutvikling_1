
if (document.images) {
    firstbuttonup = new Image();
    firstbuttonup.src = "images/saga_1.jpg";
    firstbuttondown = new Image();
    firstbuttondown.src = "images/saga_2.jpg";
    secondbuttonup = new Image();
    secondbuttonup.src = "images/tyra_1.jpg";
    secondbuttondown = new Image();
    secondbuttondown.src = "images/tyra_2.jpg";
    thirdbuttonup = new Image();
    thirdbuttonup.src = "images/sagaotyra_1.jpg";
    thirdbuttondown = new Image();
    thirdbuttondown.src = "images/sagaotyra_2.jpg";
}

function buttondown(buttonname) {
    if (document.images) {
        document[buttonname].src = eval(buttonname + "down.src");
    }
}

function buttonup(buttonname) {
    if (document.images) {
        document[buttonname].src = eval(buttonname + "up.src");
    }
}