const colors=["red","blue","green","yellow"];
const numbers=[10,20,30];
numbers.push(40);// add 40 at the end
console.log(numbers);
console.log(numbers[1]); //reference value

//print using loop
for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}

// print in a single line of text use join()
console.log(colors.join(","));