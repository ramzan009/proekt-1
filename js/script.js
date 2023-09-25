let menu_item = document.querySelector('.menu_item');
let user = document.querySelector('.block');
let block_open = document.querySelector('.block_open');


menu_item.addEventListener("click", function(e) {
    user.classList.add("block_closed");
})


block_open.addEventListener("click", function(e) {
    user.classList.remove("block_closed");
})



let ikon = document.querySelector('.ikon');
let input_block = document.querySelector('.input_block');

ikon.addEventListener("click", function(evt) {
    input_block.classList.toggle('input_closed');
})

document.body.addEventListener("click", function(evt) {
    if (evt.target.classList.contains('input_closed') ||
        evt.target.classList.contains('ikon') ||
        evt.target.classList.contains('Search_ikon')) {
        return;
    }
    input_block.classList.remove("input_closed");
})

