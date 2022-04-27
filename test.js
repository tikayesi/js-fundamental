// destructuring
// let people = ['Rahma', 'wanita',
//     addre=[domicile=[{province:'Jakarta', city:'Jakpus'}],
//     origin=[{province2:'Sumatera Selatan', city2:'Palembang'}]]]

// const[p1, p2, [[{province, city}],[{province2, city2}]]] = people;
// console.log(p1);
// console.log(p2);
// console.log(province);
// console.log(city);
// console.log(province2);
// console.log(city2);

// const address = {prov : "lampung", kab : "lamtim"}

// let {prov, kab} = address;
// console.log(address.prov);
// console.log(prov);
// console.log(kab);

// let x = myFunction(4, 3);

// let func = () => {
//     console.log("arrow function example");
// }

// func()

// let funcPar = (param) => {
//     console.log(param);
// }

// funcPar("Arrow with param")

// let arrFunc = element => {
//     console.log(element);
// }

// arrFunc("this is parameter")

// let arfunc = element => console.log(element);

// arfunc("just return one code")

// const a = {name: "a",test:"test", address: {prov: "b", kab: "c"}}
// let {name, test, address, address:{prov, kab}} = a;
// console.log(name, test, address, prov, kab);
// const b = {...a, address:{...a.address}}
// b.address.prov = 'd'
// console.log(a);
// console.log(b);

// let arr = [2,54,57,7,9]
// let fe = arr.forEach((e)=>{
//     return e * 2
// })

// let ma = arr.map((e) => {
//     return e * 2
// })

// let fi = arr.filter((e) => {
//     return e != arr[1]
// })

// let finn = arr.find((e) => {
//     return e > 55
// })

// let fiin = arr.findIndex((e) => {
//     console.log(e);
//     return e === 9
// })

// console.log(arr);
// console.log(fe); // undefined
// console.log(ma); // value
// console.log(fi); // filtered array
// console.log(finn); // hanya mereturn 1 element
// console.log(fiin); // index dari value yang dicari
class Car {
    constructor(name, year, fuel) {
      this.name = name;
      this.year = year;
      this.fuel = fuel;
    }

    run(a) {
        this.fuel += a;
        return this.fuel;
    }
  }

  let car = new Car("tika", 1999, 20);
  console.log(car.name);
let fu = car.run(3)
console.log(fu);

class Car {
    constructor(name, year, fuel, ask) {
      this.name = name;
      this.year = year;
      this.fuel = fuel;
      this.ask = ask;
    }

    fillFuel (a){
        this.fuel += a;
        return this.fuel;
    }

    askFuel(givingCar){
        this.fuel += givingCar.ask
    }
  }

  let car = new Car("tika", 1999, 20, 5);
//   console.log(car.name);
// let fu = car.fillFuel(3)
// console.log(fu);

let car2 = new Car("terios", 1998, 10, 3);

car.askFuel(car2)
console.log(car);
console.log(car2);
