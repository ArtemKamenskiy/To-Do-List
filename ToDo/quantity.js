import {arr, quantityField} from "./index.js";

export function addQuantity() {
    quantityField.innerHTML = "Tasks " + (arr.length);
}


