const name = "Jon";
const level = 1000;
let rank = "";

if (level <= 1000) {
  rank = "Ferro";
} else if (level > 1000 && level <= 2000) {
  rank = "Bronze";
} else if (level > 2000 && level <= 5000) {
  rank = "Prata";
} else if (level > 6000 && level <= 7000) {
  rank = "Ouro";
} else if (level > 7000 && level <= 8000) {
  rank = "Platina";
} else if (level > 8000 && level <= 9000) {
  rank = "Ascendente";
} else if (level > 9000 && level <= 10000) {
  rank = "Imortal";
} else if (level > 10000) {
  rank = "Radiante";
}

console.log(`O Herói de nome ${name} está no nível de ${rank}`);
