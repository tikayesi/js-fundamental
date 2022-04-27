class Car {
  constructor(plateNumber, owner) {
    this.plateNumber = plateNumber;
    this.owner = owner;
  }
}

class ParkingLot {
  constructor(capacity) {
    this.capacity = capacity;
    this.remaining = capacity;
    this.cars = [];
  }
}

function EnigmaPark(capacity, actions) {
  const parkingLot = new ParkingLot(capacity);

  const park = (car, cb) => {
    setTimeout(() => {
      if (parkingLot.remaining === 0) {
        cb('Mohon maaf parkir sudah penuh.');
      } else if (parkingLot.cars.some((parkedCar) => car.plateNumber === parkedCar.plateNumber)) {
        cb(`Mobil ${car.owner} dengan nopol ${car.plateNumber} sudah parkir sebelumnya.`);
      } else {
        parkingLot.remaining -= 1;
        parkingLot.cars.push(car);
        cb(`Mobil ${car.owner} dengan nopol ${car.plateNumber} berhasil parkir.`);
      }
    }, 3000);
  };

  const leave = (plateNumber, cb) => {
    setTimeout(() => {
      const car = parkingLot.cars.find((car) => car.plateNumber === plateNumber);

      if (!car) {
        cb(`Mobil dengan nopol ${plateNumber} tidak ada.`);
      }
      else {
        const slotNumber = parkingLot.cars.findIndex((car) => car.plateNumber === plateNumber);
        parkingLot.remaining += 1;
        parkingLot.cars = parkingLot.cars.slice(slotNumber, 1);
        cb(`Mobil ${car.owner} dengan nopol ${car.plateNumber} sudah keluar.`);
      }
    }, 1500);
  };

  const check = (cb) => {
    setTimeout(() => {
      cb(parkingLot);
    }, 500);
  };

  setTimeout(() => {
    actions(park, leave, check);
  }, 5000);
}

EnigmaPark(3, (park, leave, check) => {
  check((lot) => {
    console.log(lot);
    let car = new Car('B001', 'Alex');

    park(car, (output) => {
      console.log(output);

      park(car, (output) => {
        console.log(output);

        car = new Car('B002', 'Blex');
        park(car, (output) => {
          console.log(output);

          car = new Car('B003', 'Clex');
          park(car, (output) => {
            console.log(output);

            check((output) => {
              console.log(output);

              park(car, (output) => {
                console.log(output);

                leave('B005', (output) => {
                  console.log(output);

                  leave('B001', (output) => {
                    console.log(output);

                    check((output) => {
                      console.log(output);
                    });
                  });
                })
              });
            });
          });
        });
      });
    });
  });
});
