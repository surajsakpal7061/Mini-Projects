let number = document.querySelector("#number");
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");

let Number = 0;

function updateCount() {
    number.textContent = Number
}

add.addEventListener("click", () => {
    Number++
    updateCount()
})

sub.addEventListener("click", () => {
    Number--
    updateCount()
})

updateCount()


