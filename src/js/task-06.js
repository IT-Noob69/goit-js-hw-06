const input = document.querySelector(`#validation-input`)


const correctSymbolsQuantity = (event) => {
    const dataLength = Number(input.dataset.length);
    console.log(dataLength);
    console.log(input.value.length);
    input.value.length !== dataLength ? (input.classList.add(`invalid`), input.classList.remove(`valid`)) : (input.classList.add(`valid`), input.classList.remove(`invalid`));
};

input.addEventListener(`blur`, correctSymbolsQuantity);
console.log(input);
// correctSymbolsQuantity();