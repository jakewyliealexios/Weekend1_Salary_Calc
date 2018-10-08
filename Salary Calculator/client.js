let budget = 20000;
let employeeSalaryArray = [];

class emplInfo {
  constructor(firstName, lastName, idNumber, employeeTitle, annualSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.employeeTitle = employeeTitle;
    this.annualSalary = annualSalary;
  } // end constructor
} // end Employee Salary

$( document ).ready( function(){
  $( '#submitButton' ).on( 'click', function(){
    console.log( 'in submitButton on click' );
    // get user inputs
    //console.log( $( '#nameIn' ).val() );
    //console.log( $( '#costIn' ).val() );
    // create a new expense
    let newEmployee = new emplInfo( $( '#firstNameIn' ).val(), $( '#lastNameIn' ).val(), $( '#idNumberIn' ).val(), $( '#employeeTitleIn' ).val(), $( '#annualSalaryIn' ).val() );
    // push new expense into expenses
    employeeSalaryArray.push( newEmployee );
    updateSalaries ();
  } ); // end addExpenseButton on click
  // init page
  $( '#budgetDiv' ).append ( '<h2>Salary Budget: $' + budget.toFixed( 2 ) + '</h2>' );
  $('#employeeSalaryList').on('click', '.deleteEmp', deleteEmployeeLine);
}); // end doc ready

function updateSalaries(){
  console.log( 'in updateExpenses' );
  // start totalExpenses at 0
  let totalSalaries = 0;

  //loop through and display expenses on DOM
  let outputElement = $( '#employeeSalaryList' );
  outputElement.empty();
  for( employee of employeeSalaryArray ){
    outputElement.append( '<li>' + employee.firstName + ' ' + employee.lastName + ' ' + employee.idNumber + ' ' + employee.employeeTitle + ' $' + Number( employee.annualSalary ).toFixed( 2 ) + ' ' + `<button class='deleteEmp'>Delete</button></li>` );
    totalSalaries += Number( employee.annualSalary );
  } // end for/of (expense/expenses) loop
  console.log( 'totalSalaries:', totalSalaries );
  updateRemainingBudget( totalSalaries );
  $('input').val('');
} // end updateExpenses

function updateRemainingBudget( allExpenses ){
  console.log( 'in updateRemainingBudget', allExpenses );
  let remainingBudget = budget - allExpenses;
  console.log( 'remaining budget:', remainingBudget );
  let outputDiv = $( '#outputDiv' );
  outputDiv.empty();
  outputDiv.append( '<h2>Remaining Salary Budget: $' + remainingBudget.toFixed( 2 ) + '</h2>');
  if( remainingBudget < 0 ){
    outputDiv.css ('background-color', 'red' );
  } // end negative budget
} // end updateRemainingBudget

//delete!
function deleteEmployeeLine() {
  console.log('Delete CLICKED');
  let selectedItem = $(this).parent().text();
  console.log(selectedItem);
  for(let i = 0; i < employeeSalaryArray.length; i++) {
      if(selectedItem.includes(employeeSalaryArray[i].lastName)){
          console.log('Delete me.');
          employeeSalaryArray.splice(i, 1);
          $(this).parent().remove();   
      }
  }    
}
