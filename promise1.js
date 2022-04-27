let username = 'admin';
let password = '124';

function janjian() {
    let janji = new Promise((resolve, reject) => {

        setTimeout(function () {
            if (username === 'admin' && password === '1234') {
                resolve('Success Login!')
            } else {
                reject('Login Failed!')
            }
        }, 3000)
    })
    return janji;
}

// janjian()
// .then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(error);
// })

// async function call(){
//     let res =    await janjian()
//     console.log(res);
// }
// code diatas harus dihandle dengan code berikut jika menggunakan async await

// async function call(){
//     try{
//     let res = await janjian()
//     console.log(res);
//     }catch(e){
//         console.log(e);
//     }
// }

// call()