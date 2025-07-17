//Arrow function(=>--big arrow)
//1.arrow function without parameter

const sla=() =>
{
    
    console.log("welcome to sla",);
}
sla();
//traditional function

function sa()
{
    console.log("welcome to sla");
}
sa();

// arrrow function with single parameter

const s=x=>x*x;
console.log(s(5));

// arrow function with multiple parameter

const s1=(x1,y1,z1) =>
{
    console.log(x1+y1+z1);
}
s1(10,20,30);

//odd eve using arrow function 
const oddoreven=x=> x%2==0 ?'even':'odd';
console.log(oddoreven(5))


// arrow function with default parameter

const s4=(x4,x5,z4=23)=>
{
    console.log(x4+""+x5+""+z4)
}
s4(22,45);