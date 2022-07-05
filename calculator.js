function calculator() {
  //Catch a value of  user input
  const operation = Number(
    prompt(
      "Escolha uma opção: \n 1- sum (+) \n 2 - subtração (-)\n 3 - multiplicacao (*)\n 4 - divisao real (/)\n 5 - divisao inteira (%)\n 6 - potenciacao(**)"
    )
  );

  //Checking if operation is valid
  if (!operation || operation >= 7) {
    alert("erro - operation invalid");
    calculator();
  } else {
    //all variable should be of type number
    let n1 = Number(prompt("Insert first value: "));
    let n2 = Number(prompt("Insert second value: "));
    let result;

    //Checking if variable are valid
    if (!n1 || !n2) {
      alert("error - invalid parameter");
      calculator();
    } else {
      //defining the functions
      function sum() {
        result = n1 + n2;
        alert(`${n1} + ${n2} = ${result}`);
        newOperation();
      }

      function subtraction() {
        result = n1 - n2;
        alert(`${n1} - ${n2} = ${result}`);
        newOperation();
      }

      function multiplication() {
        result = n1 * n2;
        alert(`${n1} * ${n2} = ${result}`);
        newOperation();
      }

      function divisionReal() {
        result = n1 / n2;
        alert(`${n1} / ${n2} = ${result}`);
        newOperation();
      }

      function divisionInteger() {
        result = n1 % n2;
        alert(
          `The rest of the division between ${n1} and ${n2} it's the same as ${resultado}`
        );
        newOperation();
      }

      function potentiation() {
        result = n1 ** n2;
        alert(`${n1} raised to ${n2}ª potency is ${result}`);
        newOperation();
      }

      //function new operation
      function newOperation() {
        let opcao = prompt(
          "Do you want to do another operation?\n 1 - yer\n 2 - no"
        );
        if (opcao == 1) {
          calculator();
        } else if (opcao == 2) {
          alert("Until later!");
        } else {
          alert("enter a valid option!");
          calculator();
        }
      }
    }
  }

  switch (operation) {
    case 1:
      sum();
      break;
    case 2:
      subtraction();
      break;
    case 3:
      multiplication();
      break;
    case 4:
      divisionReal();
      break;
    case 5:
      divisionInteger();
      break;
    case 6:
      potentiation();
      break;
  }
}

calculator();
