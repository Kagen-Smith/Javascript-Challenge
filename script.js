// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
 addEmployeesBtn.addEventListener("click", function() {

 });

const employeesArray =[];

const collectEmployees = function () {
 
  const firstName = prompt("Enter first name");
  const lastName = prompt("Enter last name");
  const salaryPrompt = prompt("Enter employee's salary");
  
  employeesArray.push({firstName: firstName, lastName: lastName, salary: salaryPrompt});
  console.log(employeesArray);
  const addEmployees = confirm("do you want to add employees?");
  if (addEmployees) {
    collectEmployees();
  } else {
    displayEmployees(employeesArray)
  };
  
  if (!isNaN(salaryPrompt)) {
    parseInt(salaryPrompt)
  } else {
    alert("invalid input please try again")
  };
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  for (let i = 0; i < length; i++) {
    averagesalary += employeesArray[i].salaryPrompt
  }
};

  

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = Math.floor(Math.random() * employeesArray.length);
  let randomObject = employeesArray(randomEmployee);
  console.log(`random object, ${randomEmployee}`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
