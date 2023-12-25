let saveEl = document.querySelector(".save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + "-";
    saveEl.textContent += countStr;

    countEl.textContent = 0;
    count = 0;
}
//innerText : disp text except that is hidden by css
//textContent : disp all text whether hidden or not