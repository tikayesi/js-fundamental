let restaurant = [250000, 710000, 125000]
let totalTagihan = 0;
let totalTips = 0;
let totalBayar = 0;
for (const tagihan of restaurant) {
    if(tagihan < 250000){
        totalTagihan += tagihan;
        totalTips += (20/100) * tagihan;
    }else if (tagihan >= 250000 && tagihan <= 500000){
        totalTagihan += tagihan;
        totalTips += (15/100) * tagihan;
    }else if (tagihan > 500000){
        totalTagihan += tagihan;
        totalTips += (10/100) * tagihan;
    }
}
totalBayar += totalTagihan + totalTips;
console.log(totalTagihan);
console.log(totalTips);
console.log(totalBayar);


const trainee2 = {
    firstName: "Yogic",
    lastName : "Panjaitan",
    nim : "387567",
    address : {
        province: "Jakarta", city: "Jaksel"
    }
}



//Destructuring
console.log(trainee.firstName);

let {nim, lastName, firstName, address:{...address}} = trainee;
console.log(firstName);
console.log(address.province);
console.log(address);