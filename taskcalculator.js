const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (input1) => {
    rl.question("Enter second number: ", (input2) => {
    const num1 = parseInt(input1);
    const num2 = parseInt(input2);

    if(num1 <= 5 && num2 <= 5)
    {
      const sum=num1+num2;
      console.log("The sum is: " +sum);
    }

    if(num1 >= 10 && num2 <= 15)
    {
      const sub=num1-num2;
      console.log("The sub is: " +sub);
    }

    if(num1 >+ 50 && num2 <= 5)
    {
      const div=num1/num2;
      console.log("The div is: "+div);
    }

    if((num1 > 10 && num1 < 20) && (num2 > 10 && num2 < 20))
    {
      const mul=num1*num2;
      console.log("The mul is: "+mul);
    }
    rl.close();
  });
});