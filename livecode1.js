let time = 19;
if(time >= 1 && time <= 24){
if(time >= 8 && time <= 11 || time >= 13 && time <= 17){
    console.log("Waktu belajar");
}else if(time >= 4 && time <= 5 ){
    console.log("Waktu Bangun");
} else if(time == 12){
    console.log("Waktu Istirahat");
}else{
    console.log("Waktu Main");
}
}else{
    console.log("Hanya ada 24 jam dalam sehari");
}
//https://nodejs.org/api/process.html#process_process_stdout
let tinggi = 3;
let alas = 10;
for (let i = 1; i <= tinggi; i++) {
    for (let j = 1; j <= alas; j++) {
       if(i < tinggi && j <= (tinggi - i) || i < tinggi && j > alas - (tinggi - i)){
        process.stdout.write(" ");
       }else{
        process.stdout.write("x");
       }
    }
    console.log();;
}

var rest = [250000, 710000, 125000]
var tips = [10, 15, 20]
var [tips1, tips2, tips3] = tips
var [rest1, rest2, rest3] = rest
function TipsFarell(Tagihan) {
    if(Tagihan <= 250000){
        console.log("Tagihan :"+Tagihan)
        console.log("Tips :"+(Tagihan*tips3/100))
    } else if(Tagihan > 250000 && Tagihan < 500000){
        console.log("Tagihan :"+Tagihan)
        console.log("Tips :"+(Tagihan*tips2/100))
    } else if(Tagihan > 500000){
        console.log("Tagihan :"+Tagihan)
        console.log("Tips :"+(Tagihan*tips1/100))
    }
}

TipsFarell(rest1)
TipsFarell(rest2)
TipsFarell(rest3)