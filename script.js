const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

// sets interval for 30 milisecons for function of blurring.
let int = setInterval(blurring, 30)

function blurring() {
    load++;

    // stop interval after load == 100. 
    if (load > 99) {
        clearInterval(int)
    }
    console.log(load);
    loadText.innerHTML = `${load}%`
    // for blurring percentage and background.
    loadText.style.opacity = scale(load, 0 , 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


// Handy function
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = function(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}