const nameInput = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);

const outputGreetings = (event) => {
    const name = event.currentTarget.value;
    console.log(name);
    if (name === "") {
       return output.textContent = `Anonymous`;
    };
    return output.textContent = name;    
}
nameInput.addEventListener("input", outputGreetings); 
