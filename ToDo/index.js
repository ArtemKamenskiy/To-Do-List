export let buttonAdd = document.querySelector('.todo-button');
export let input = document.querySelector('.todo-input');
export let clearInputValue = input.value = '';
export let listWrapper = document.querySelector('.list-wrapper');
export let quantityField = document.querySelector('.quantity-task');
export const arr = [];

input.addEventListener('input', function () {
    if (input.value.length === 0) {
        buttonAdd.setAttribute('disabled', 'disabled');
    } else {
        buttonAdd.removeAttribute('disabled');
    }
});



