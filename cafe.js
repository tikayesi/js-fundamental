// Callback memiliki error dan juga result

function minumKopi(error, output){
    if(error){
        console.log(`Kecewa ${error}`);
    }else{
        console.log(`Terimakasih. Sruput ${output}, ahhh`);
    }
}

function pesanMinuman(pesanan, kirimPesan){
    console.log(`Menunggu pesanan, ${pesanan} sedang proses`);
    setTimeout(() => {
        if(pesanan === "teh") kirimPesan(`Pesanan ${pesanan} tidak ada`)
        else{
            const hasil = `Kopi ${pesanan}`
                kirimPesan(null, hasil)
            // ini buat challenge mereka, gimana kalo nunggu kopi dibuat dulu
            // Nanti bisa dibuat challenge lagi gimana kalo nunggu kopi diantar juga, tunjuk salah satu trainee
            // console.log("Pesanan sedang dibuat");
            // setTimeout(() => {
            //     const hasil = `Kopi ${pesanan}`
            //     kirimPesan(null, hasil)
            // }, 3000)
        }
    }, 2000)
}


pesanMinuman("Americano", minumKopi)