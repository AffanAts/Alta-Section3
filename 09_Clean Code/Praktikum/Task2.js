class Kendaraan{
    constructor(totalRoda, kecepatanPerJam){
        this.totalRoda = totalRoda;
        this.kecepatanPerJam = kecepatanPerJam;
    }
}

class Mobil extends Kendaraan {
    constructor(totalRoda, kecepatanPerJam){
      super(totalRoda, kecepatanPerJam);
      }
  
    tambahKecepatan(kecepatanBaru) {
      this.kecepatanPerJam += kecepatanBaru;
    }
  
    berjalan() {
      return this.kecepatanPerJam;
    }
  }

let mobilCepat = new Mobil(4, 20);
mobilCepat.tambahKecepatan(30);
mobilCepat.tambahKecepatan(5);
//Mobil cepat dijalankan dengan kecepatan 55 Km/jam
console.log(`Mobil cepat dijalankan dengan kecepatan ${mobilCepat.kecepatanPerJam} Km/jam`);

let mobilLambat = new Mobil(4, 20);
//Mobil Lambat dijalankan dengan kecepatan 20 Km/jam
console.log(`Mobil Lambat dijalankan dengan kecepatan ${mobilLambat.kecepatanPerJam} Km/jam`);