//function pada promise dapat mengirimkan value untuk function lainnya 
//contoh dibawah adalah function janjian dapat mengirimkan id untuk function 2
//meskipun request waktu janjian lebih lama dari janjian 2. janjian akan
//terekskusi terlebih dahulu dengan menggunakan promise saat pemanggilan function
let username = 'suranto';
let password = '1234'

function janjian() {
    let janji = new Promise((resolve, reject) => {
        let id = 1234;
        setTimeout(function () {
            //console log dibawah ini berfungsi untuk melihat perbandingan saat funtion dipanggil dengan atau tanpa then
            console.log('Janjian terpanggil');
            if (username === 'suranto' && password === '1234') {
                resolve(id)
            } else {
                reject('Invalid username and password!')
            }
        }, 3000)
    })
    return janji;
}

function janjian2(id) {
    let janji2 = new Promise((resolve, reject) => {
        setTimeout(function () {
            //console log dibawah ini berfungsi untuk melihat perbandingan saat funtion dipanggil dengan atau tanpa then
            console.log('Janjian 2 terpanggil');
            if (id === 1234) {
                resolve('Success Login!')
            } else {
                reject('Login Failed !')
            }
        }, 2000)
    })
    return janji2;
}

// janjian()
//     .then((id) => {
//         console.log(id);
//         janjian2(id)
//             .then((message2) => {
//                 console.log(message2)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     })
//     .catch((error) => {
//         console.log(error)
//     })

    //perbedaan jika memanggil function biasa
    // console.log(janjian())
    // console.log(janjian2())

    async function call(){
        try{
        let res = await janjian()
        console.log(res);
        let ress = await janjian2(res)
        console.log(ress);
        }catch(e){
            console.log(e);
        }
    }
    
    call()