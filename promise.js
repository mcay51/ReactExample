//Temel yapısı aşağıdaki gibidir.
/*
const getComments=(number)=>{
    return new Promise((resolve,reject)=>{
        if(number===1){
            resolve({text:"İşlem Başarılı"});
        }
        reject("Bir Problem Oluştu");

    });
};

getComments(2)
.then((data)=>console.log(data))
.catch((e)=>console.log(e));
*/

//callback işlemlerinde ki data üzerinden ilerlersek aşağıdaki kodu kullanabiliriz.
import axios from 'axios';
const getUsers=()=>{
    return new Promise(async (resolve,reject)=>{
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const {data:users}=  await axios("https://jsonplaceholder.typicode.com/users");

        resolve(users);
        //reject("Bir Sorun Oluştu");
    });
};



const getPost=(postId)=>{
    return new Promise(async (resolve,reject)=>{
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const {data:post}=  await axios("https://jsonplaceholder.typicode.com/posts/"+postId);

        resolve(post);
        //reject("Bir Sorun Oluştu");

    });
};
// aşağıdaki çağırma yönteminde getUsers ve getPost metodları sıralı çağırılmaz.
/* getUsers()
.then((data)=>console.log(data))
.catch((e)=>console.log(e));

getPost(20)
.then((data)=>console.log(data))
.catch((e)=>console.log(e));
*/
//getUsers ve getPost metodlarını sıralı çağırmak için aşağıdaki kod kullanılabilir.
/* (async ()=>{
    await getUsers()
    .then((data)=>console.log(data))
    .catch((e)=>console.log(e));

    await getPost(20)
    .then((data)=>console.log(data))
    .catch((e)=>console.log(e));
})();
*/
//then catch olmadan yukardaki fonksiyonu kullanmak istersek aşağıdaki şekilde yapabiliriz.
/*
(async ()=>{
    try {
        const users=await getUsers();

        const posts=await getPost(20);
    } catch (error) {
        console.log(error);
    }
   
})();
*/

// birden fazla sıralı çalıştırmak istediğimiz promise'lar için aşağıdaki yöntemde kullanılabilir.
Promise.all([getUsers(),getPost(10)])
.then(console.log)
.catch(console.log)