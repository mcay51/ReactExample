/* setTimeout(()=>{
    console.log("Merhaba ben belirtilen süre sonra 1 kez çalışırım.")
},5000);
setInterval(()=>{
    console.log("Merhaba ben belirtilen süre boyunca sonsuza kadar çalışırım.")
},2000); */

/* const sayHi=(cb)=>{
    cb();
};
sayHi(()=>{
console.log("Hello Callback Metodu");
}); */

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import axios from "axios";
import fetch from "node-fetch"; 
/* fetch("https://jsonplaceholder.typicode.com/users")
.then((data) =>data.json())
.then((users) => console.log(users)); */
// Eğer aşağıdaki gibi iç içe fetch yazılırsa her data sırası ile yüklenir. 
// fetchler ayrı ayrı yazılırsa ayrı theread ler gibi çalışır.

/*
fetch("https://jsonplaceholder.typicode.com/users")
.then((data) =>data.json())
.then((users) => {
    console.log("Users yüklendi",users);
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(data=>data.json())
    .then((posts)=>{
        console.log("Post 1 yüklendi.",posts);
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then(data=>data.json())
    .then((posts)=>{
        console.log("Post 2 yüklendi.",posts);
        })
    })
}); 
*/
//Yukarıdaki karmaşık yapı yerine sırası ile yükleme yapmak için aşağıdaki daha okunur kodu kullanabiliriz.
/*
async function getData(){
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const users= await ( await (
        await fetch("https://jsonplaceholder.typicode.com/users")).json());
      
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const post1=await ( await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")).json());
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const post2=await ( await (
            await fetch("https://jsonplaceholder.typicode.com/posts/2")).json());
    
    console.log("users : ",users);
    console.log("post1 : ",post1);
    console.log("post2 : ",post2);
}
getData();
*/
//getData() diye bir metod ile bu işi yapmak yerine global bir fonksiyon ile bu işi yapmak istersek de aşağıdaki gibi bir 
// tanımlama yapmalıyız.
/*
( async ()=>
{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const users= await ( await (
        await fetch("https://jsonplaceholder.typicode.com/users")).json());
      
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const post1=await ( await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")).json());
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const post2=await ( await (
            await fetch("https://jsonplaceholder.typicode.com/posts/2")).json());
    
    console.log("users : ",users);
    console.log("post1 : ",post1);
    console.log("post2 : ",post2);
})();
*/
// Yukarıdaki kodu fetch yerine axios ile yapmak için aşağıdaki kod kullanabiliriz.
( async ()=>
{
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const {data:users}=  await axios("https://jsonplaceholder.typicode.com/users");
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const {data:post1}= await axios("https://jsonplaceholder.typicode.com/posts/1");
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const {data:post2}= await axios("https://jsonplaceholder.typicode.com/posts/2");
    
    console.log("users : ",users);
    console.log("post1 : ",post1);
    console.log("post2 : ",post2);
})();


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";

