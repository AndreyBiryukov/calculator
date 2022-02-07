let calc = prompt("Введите оператор(+, -, * или /)", "");
    if (!calc) alert("Операция отменена!");

    let num1 = parseFloat(prompt("Введите первое число: "));
    let num2 = parseFloat(prompt("Введите второе число: "));

    switch (calc) {
      case "+": alert(num1 + num2); break;
      case "-": alert(num1 - num2); break;
      case "*": alert(num1 * num2); break;
      case "/": alert(num1 / num2); break;
    }