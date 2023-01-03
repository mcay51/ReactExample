/*
push
map
find
filter
some
every
includes
*/

// push
const users=["Mustafa","Mehmet Ali","Zeynep","Işıl"];
const userObject=[
    {name:"Mustafa",age:43,},
    {name:"Mehmet Ali",age:3,},
    {name:"Zeynep",age:5},,
    {name:"Işıl",age:37,},
];
users.push("Ayşe");
users.push("Ahmet");
console.log(users);

// map
users.map((item)=>{
    console.log(item);
});
userObject.map((item)=>{
    console.log(item);
});
userObject.map((item)=>{
    console.log(item.name);
});

// find

const result=userObject.find((item)=>item.name==="Mustafa");
console.log(result.age);

// filter

const filtered=userObject.filter((item)=>item.age<10);
console.log(filtered);

const filtered2=userObject.filter(({name,age})=>age >30);
console.log(filtered2);

//some array içerisindeki herhangi biri şartı sağlıyorsa true dönder yoksa false döner

const some=userObject.some((item)=>item.age===12);
console.log(some);

//every array'in tüm elemanlarının şartı sağlıyorsa true döner.

const every=userObject.every((item)=>item.age>2);
console.log(every);

// includes array içerisinde aranan ifade var mı yok mu onu kontrol eder.

const included=users.includes("Mustafa");
console.log(included);

