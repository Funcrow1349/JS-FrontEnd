async function attachEvents() {

  const baseUrl = "http://localhost:3030/jsonstore/collections/students"

  const tableBody = document.querySelector("tbody")
  const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll(".inputs input")
  const submitBtn = document.getElementById("submit")

  submitBtn.addEventListener("click", addStudent)

  const response = await fetch(baseUrl)
  const studentsInfo = await response.json()

  function createStudent(studentInfo) {
    const tableRow = document.createElement("tr")
    tableRow.innerHTML = 
    `<tr>
        <td>${studentInfo.firstName}</td>
        <td>${studentInfo.lastName}</td>
        <td>${studentInfo.facultyNumber}</td>
        <td>${studentInfo.grade}</td>
    </tr>`

    tableBody.appendChild(tableRow)
  }

  for (const student of Object.values(studentsInfo)) {
    createStudent(student)
  }

  async function addStudent() {
    const isValidInput = firstName.value !== "" && lastName.value !== "" && facultyNumber.value !== "" && grade.value !== ""

    if (isValidInput) {

      const newStudentInfo = {
        firstName: firstName.value,
        lastName: lastName.value,
        facultyNumber: facultyNumber.value, 
        grade: grade.value,
      }

      await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(newStudentInfo),
      })

      createStudent(newStudentInfo)

      firstName.value = ""
      lastName.value = ""
      facultyNumber.value = ""
      grade.value = ""

    }
  }

}

attachEvents();
