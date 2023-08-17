const decrement = document.querySelector(
  `button[data-action = "decrement"]`
);
const increment = document.querySelector(
  `button[data-action = "increment"]`
);
const value = document.querySelector(`#value`);

let counterValue = 0;

const counterValueDecrement = (event) => {
    counterValue -= 1;
    console.log(counterValue);
    value.textContent = counterValue;
};

const counterValueIncrement = (event) => {
        counterValue += 1;
    console.log(counterValue);
    value.textContent = counterValue;
};

increment.addEventListener(`click`, counterValueIncrement);
decrement.addEventListener(`click`, counterValueDecrement);

