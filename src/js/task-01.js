const elements = categories.querySelectorAll(`.item`);
console.log(`Number of categories: ${elements.length}`);

elements.forEach(element => {
    const elementTitle = element.querySelector(`h2`);
    const elementListNumber = element.querySelectorAll(`li`);
    console.log(`Category: ${elementTitle.textContent}`);
    console.log(`Elements: ${elementListNumber.length}`);
});
