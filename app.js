console.log('Labas, ka tu?');
var labas = 'Pats tu labas'; //old schollas, nenaudoti!!!!
alio = 'Pats tu alio'; //tas pats var, nenaudoti!!!!

let ku = 'OK';
const kuku = 'OK';

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('-----1-----');
// Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naudodami console.log()
let pirmas = rand(0, 4);
let antras = rand(0, 4);

if (pirmas === antras) {
  console.log('skaiciai yra lygus');
} else if (pirmas > antras) {
  console.log(pirmas / antras);
} else {
  console.log(antras / pirmas);
}

console.log('-----2-----');
// Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.
pirmas = rand(0, 25);
antras = rand(0, 25);
let trecias = rand(0, 25);

if (
  (pirmas < antras && pirmas > trecias) ||
  (pirmas > antras && pirmas < trecias)
) {
  console.log(pirmas);
} else if (
  (antras < pirmas && antras > trecias) ||
  (antras > pirmas && antras < trecias)
) {
  console.log(antras);
} else if (
  (trecias < pirmas && trecias > antras) ||
  (trecias > pirmas && trecias < antras)
) {
  console.log(trecias);
} else {
  console.log('negalima rasti vidurines reiksmes, nes skaiciai yra lygus');
}

console.log('-----3-----');
// Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log().
let a = rand(0, 10);
let b = rand(0, 10);
let c = rand(0, 10);

if (a + b > c && a + c > b && b + c > a) {
  console.log('trikampi nubrezti galima');
} else {
  console.log('trikampio nubrezti negalima');
}

console.log('-----4-----');
// Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()
pirmas = rand(0, 2);
antras = rand(0, 2);
trecias = rand(0, 2);
let ketvirtas = rand(0, 2);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

if (pirmas === 0) {
  nuliai += 1;
} else if (pirmas === 1) {
  vienetai += 1;
} else {
  dvejetai += 1;
}

if (antras === 0) {
  nuliai += 1;
} else if (antras === 1) {
  vienetai += 1;
} else {
  dvejetai += 1;
}

if (trecias === 0) {
  nuliai += 1;
} else if (trecias === 1) {
  vienetai += 1;
} else {
  dvejetai += 1;
}

if (ketvirtas === 0) {
  nuliai += 1;
} else if (ketvirtas === 1) {
  vienetai += 1;
} else {
  dvejetai += 1;
}
console.log(
  'nuliu yra: ' +
    nuliai +
    ', vienetu yra : ' +
    vienetai +
    ', dvejetu yra: ' +
    dvejetai
);

console.log('-----5-----');
// Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius
pirmas = rand(-10, 10);
antras = rand(-10, 10);
trecias = rand(-10, 10);

if (pirmas < 0) {
  console.log('+ ' + pirmas + ' +');
} else if (pirmas === 0) {
  console.log('* ' + pirmas + ' *');
} else {
  console.log('- ' + pirmas + ' -');
}

if (antras < 0) {
  console.log('+ ' + antras + ' +');
} else if (antras === 0) {
  console.log('* ' + antras + ' *');
} else {
  console.log('- ' + antras + ' -');
}

if (trecias < 0) {
  console.log('+ ' + trecias + ' +');
} else if (trecias === 0) {
  console.log('* ' + trecias + ' *');
} else {
  console.log('- ' + trecias + ' -');
}

console.log('-----6-----');
// Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
let zvakiuKiekis = rand(5, 3000);
let kaina = 0;

if (zvakiuKiekis > 1000 && zvakiuKiekis < 2000) {
  kaina = (zvakiuKiekis * 97) / 100;
} else if (zvakiuKiekis > 2000) {
  kaina = (zvakiuKiekis * 96) / 100;
} else {
  kaina = zvakiuKiekis;
}
console.log('Zvakiu kaina: ' + kaina + ' Eu');

console.log('-----7-----');
// Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()
pirmas = rand(0, 100);
antras = rand(0, 100);
trecias = rand(0, 100);
console.log(pirmas);
console.log(antras);
console.log(trecias);
let vidurkis = (pirmas + antras + trecias) / 3;
console.log('vidurkis: ' + vidurkis);

let suma = 0;
let daliklis = 0;

if (pirmas > 10 && pirmas < 90) {
  suma += pirmas;
  daliklis += 1;
}

if (antras > 10 && antras < 90) {
  suma += antras;
  daliklis += 1;
}

if (trecias > 10 && trecias < 90) {
  suma += trecias;
  daliklis += 1;
}

console.log(suma);
console.log(daliklis);
console.log('vidurkis, atmetus nereikalingas reiksmes: ' + suma / daliklis);
