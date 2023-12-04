function solve() {
  let sudokuRows = Array.from(document.querySelectorAll("tbody tr"));
  let [checkBtn, clearBtn] = document.querySelectorAll("button");
  let paragraphMessage = document.querySelector("#check p");
  let mainTable = document.getElementsByTagName("table")[0];

  checkBtn.addEventListener("click", checkSolution);
  clearBtn.addEventListener("click", clearCells);

  function checkSolution() {

    let row1 = [
      sudokuRows[0].children[0].children[0].value,
      sudokuRows[0].children[1].children[0].value,
      sudokuRows[0].children[2].children[0].value,
    ];

    let row2 = [
      sudokuRows[1].children[0].children[0].value,
      sudokuRows[1].children[1].children[0].value,
      sudokuRows[1].children[2].children[0].value,
    ];

    let row3 = [
      sudokuRows[2].children[0].children[0].value,
      sudokuRows[2].children[1].children[0].value,
      sudokuRows[2].children[2].children[0].value,
    ];

    let column1 = [
      sudokuRows[0].children[0].children[0].value,
      sudokuRows[1].children[0].children[0].value,
      sudokuRows[2].children[0].children[0].value,
    ];

    let column2 = [
      sudokuRows[0].children[1].children[0].value,
      sudokuRows[1].children[1].children[0].value,
      sudokuRows[2].children[1].children[0].value,
    ];

    let column3 = [
      sudokuRows[0].children[2].children[0].value,
      sudokuRows[1].children[2].children[0].value,
      sudokuRows[2].children[2].children[0].value,
    ];

    let setRow1 = new Set(row1);
    let setRow2 = new Set(row2);
    let setRow3 = new Set(row3);
    let setColumn1 = new Set(column1);
    let setColumn2 = new Set(column2);
    let setColumn3 = new Set(column3);

    if (
      setRow1.size < 3 ||
      setRow2.size < 3 ||
      setRow3.size < 3 ||
      setColumn1.size < 3 ||
      setColumn2.size < 3 ||
      setColumn3.size < 3
    ) {
      paragraphMessage.textContent = "NOP! You are not done yet...";
      paragraphMessage.style.color = "red";
      mainTable.style.border = "2px solid red";
    } else {
      paragraphMessage.textContent = "You solve it! Congratulations!";
      paragraphMessage.style.color = "green";
      mainTable.style.border = "2px solid green";
    }
  }

  function clearCells() {
    paragraphMessage.textContent = "";
    for (const row of sudokuRows) {
      row.children[0].children[0].value = "";
      row.children[1].children[0].value = "";
      row.children[2].children[0].value = "";
    }
    mainTable.style.border = "";
  }
}
