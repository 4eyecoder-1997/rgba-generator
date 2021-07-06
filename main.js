const outputBox = document.querySelector('.output');
const body = document.body;

function getValue() {
    const red = document.querySelector('#red').value;
    const green = document.querySelector('#green').value;
    const blue = document.querySelector('#blue').value;
    const alpha = document.querySelector('#alpha').value;

    body.style.background = `rgba( ${red}, ${green}, ${blue}, ${alpha})`;
    outputBox.innerHTML = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
