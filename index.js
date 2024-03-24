// Write your solution in this file
// Initialize employee object
let employee = {
  name: 'John Doe',
  streetAddress: '123 Main St'
};

// Function to update employee with key and value (non-destructively)
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
      ...employee,
      [key]: value
  };
}

// Function to update employee with key and value (destructively)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete property from employee object (non-destructively)
function deleteFromEmployeeByKey(employee, key) {
  let newObj = { ...employee };
  delete newObj[key];
  return newObj;
}

// Function to delete property from employee object (destructively)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Test the functions
console.log("Original employee:", employee);

let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
console.log("Updated employee (non-destructive):", updatedEmployee);
console.log("Original employee:", employee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm St');
console.log("Updated employee (destructive):", employee);

let newEmployee = deleteFromEmployeeByKey(employee, 'name');
console.log("Employee after deleting key (non-destructive):", newEmployee);
console.log("Original employee:", employee);

destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log("Employee after deleting key (destructive):", employee);
