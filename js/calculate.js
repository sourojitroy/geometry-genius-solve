let count = 1;
document.getElementById('btn-triangle').addEventListener('click', function () {
  const resultTriangle = calculateAreaThreeElement('t-first-input', 't-last-input')
  showData('name-triangle', resultTriangle, count);
})

document.getElementById('btn-rectangle').addEventListener('click', function () {
  const resultRectangle = calculateAreaTwoElement('r-first-input', 'r-last-input')
  showData('name-rectangle', resultRectangle, count);
})

document.getElementById('btn-rhombus').addEventListener('click', function () {
  const resultRhombus = calculateAreaThreeElement('rs-first-input', 'rs-last-input')
  showData('name-rhombus', resultRhombus, count);
})





function getInputValue(inputID) {
  const getInputText = document.getElementById(inputID);
  const getInputTextString = getInputText.value;
  const getInput = parseFloat(getInputTextString);
  return getInput;
}

function calculateAreaTwoElement(firstInputID, lastInputID) {
  const firstInput = getInputValue(firstInputID);
  const lastInput = getInputValue(lastInputID);
  if (
    firstInput == "" || lastInput == "" || firstInput <= 0 || lastInput <= 0 || isNaN(firstInput) || isNaN(lastInput)
  ) {
    return alert("Ulta palta input diyen na please. Pore nijei pera khaben");
  }
  else {
    const totalResultString = (firstInput * lastInput).toFixed(2);
    const totalResult = parseFloat(totalResultString);
    return totalResult;
  }
}

function calculateAreaThreeElement(firstInputID, lastInputID) {
  const firstInput = getInputValue(firstInputID);
  const lastInput = getInputValue(lastInputID);
  if (
    firstInput == "" || lastInput == "" || firstInput <= 0 || lastInput <= 0 || isNaN(firstInput) || isNaN(lastInput)
  ) {
    return alert("Ulta palta input diyen na please. Pore nijei pera khaben");
  }
  else {
    const totalResultString = (0.5 * firstInput * lastInput).toFixed(2);
    const totalResult = parseFloat(totalResultString);
    return totalResult;
  }
}

function showData(nameID, value, countNo) {
  const tableContainer = document.getElementById("table-container");
  const tableNameValue = document.getElementById(nameID).innerText;
  const tableResultValue = value;
  const serialNo = countNo;
  if (tableResultValue == "" || tableResultValue <= 0 || isNaN(tableResultValue)) {
    return;
  }
  else {
    count++;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serialNo}</td>
      <td>${tableNameValue}</td>
      <td>${tableResultValue}cm<sup>2</sup></td>
      <td>
      <button class="bg-sky-600 font-bold px-6 py-2 text-white rounded">Convert to m<sup>2</sup></button>
      </td>
    `;
    tableContainer.appendChild(tr);
  }
}



const cardTriangle = document.querySelector("#card-triangle");
const cardRectangle = document.querySelector("#card-rectangle");

cardTriangle.addEventListener("mouseenter", function () {
  const color = generateRandomColor();
  this.style.backgroundColor = color;
});
cardRectangle.addEventListener("mouseenter", function () {
  const color = generateRandomColor();
  this.style.backgroundColor = color;
});

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return color;
}