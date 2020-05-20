import {buttonAdd, input, clearInputValue, listWrapper, arr, quantityField} from "./index.js";
import { addQuantity } from "./quantity.js";

/********** Create Task **********/
buttonAdd.addEventListener('click', addFieldToDo);

function addFieldToDo() {
    let newField = document.createElement('div');
    let btnField = document.createElement('div');
    let textField = document.createElement('p');
    newField.classList.add('todo-field');
    listWrapper.append(newField);
    arr.push(newField);

    function textForField() {
        let inputValue = input.value;
        newField.append(textField);
        textField.append(inputValue);
    }
    function addButtonsField() {
        btnField.classList.add('btn-field');
        newField.append(btnField);
    }
    function addCompleteButton() {
        let inpComplete = document.createElement("input");
        inpComplete.classList.add('input-complete');
        inpComplete.setAttribute('type', 'checkbox');
        newField.appendChild(inpComplete);
        inpComplete.addEventListener('click', function () {
            if (inpComplete.hasAttribute('checked')) {
                newField.style.backgroundColor = '#ffffff';
                newField.style.transition = '0.5s';
                textField.style.textDecoration = 'none';
                inpComplete.removeAttribute('checked');
            } else {
                newField.style.backgroundColor = '#5ec479';
                newField.style.transition = '0.5s';
                textField.style.textDecoration = 'line-through';
                inpComplete.setAttribute('checked', 'checked');
            }
        });
    }
    function addEditButton() {
        let btnEdit = document.createElement("button");
        btnEdit.classList.add('btn-edit');
        btnEdit.textContent = 'Edit';
        btnField.append(btnEdit);
    }
    function addDeleteButton() {
        let btnDelete = document.createElement("button");
        btnDelete.classList.add('btn-delete');
        btnDelete.textContent = 'Delete';
        btnField.append(btnDelete);
        btnDelete.addEventListener('click', deleteTask);
    }
    function addTime() {
        let dateField = document.createElement("div");
        dateField.classList.add('date');
        let date = new Date().toLocaleDateString();
        btnField.append(dateField);
        dateField.append('Date: ' + date);
    }
    function deleteTask() {
        listWrapper.removeChild(newField);
        arr.pop();
        quantityField.innerHTML = "Tasks " + (arr.length);
    }

    addCompleteButton();
    textForField();
    input.value = clearInputValue;
    buttonAdd.setAttribute('disabled', 'disabled');
    addButtonsField();
    addEditButton();
    addDeleteButton();
    addTime();
    addQuantity();

    
    /********** DRAG & DROP **********/

    (function dragDrop () {
        let coordX;
        let coordY;
        newField.draggable = true;
        newField.addEventListener('dragstart', function (e) {
            e.dataTransfer.setData('text/html', 'dragstart');
            coordX = e.offsetX;
            coordY = e.offsetY;
        });
        newField.addEventListener('dragend', function (e) {
            newField.style.position = 'absolute';
            newField.style.top = (e.pageY - coordY) + 'px';
            newField.style.left = (e.pageX - coordX) + 'px';
        })
    })();

}
