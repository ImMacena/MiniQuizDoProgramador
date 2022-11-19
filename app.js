const init = document.getElementById("init");

const p1_certo = document.getElementById("p1_certo");
const p1_errado = document.getElementById("p1_errado");

const p2_certo = document.getElementById("p2_certo");
const p2_errado = document.getElementById("p2_errado");

const p3_elon = document.getElementById("p3_elon");
const p3_bill = document.getElementById("p3_bill");
const p3_jeff = document.getElementById("p3_jeff");
const p3_luciano = document.getElementById("p3_luciano");

const p4_answer = document.getElementById("p4_answer");
const p4_enviar = document.getElementById("p4_enviar");

const p5_win = document.getElementById("p5_win");
const p5_mac = document.getElementById("p5_mac");
const p5_ubu = document.getElementById("p5_ubu");
const p5_and = document.getElementById("p5_and");
const p5_rod = document.getElementById("p5_rod");

const block_p1 = document.getElementById("block_p1");
const block_p2 = document.getElementById("block_p2");
const block_p3 = document.getElementById("block_p3");
const block_p4 = document.getElementById("block_p4");
const block_p5 = document.getElementById("block_p5");

const msg_p1 = document.getElementById("msg_p1");
const msg_p2 = document.getElementById("msg_p2");
const msg_p3 = document.getElementById("msg_p3");
const msg_p4 = document.getElementById("msg_p4");
const msg_p5 = document.getElementById("msg_p5");
const allMsg = [msg_p1, msg_p2, msg_p3, msg_p4, msg_p5];

const restartBtn = document.getElementById("restart");

const placar_img_1 = document.getElementById("placar_img_1");
const placar_img_2 = document.getElementById("placar_img_2");
const placar_img_3 = document.getElementById("placar_img_3");
const placar_img_4 = document.getElementById("placar_img_4");
const placar_img_5 = document.getElementById("placar_img_5");

const correctAnswers = [p1_errado, p2_certo, p3_bill, p5_rod];

const answers = [
  p1_certo,
  p1_errado,
  p2_certo,
  p2_errado,
  p3_elon,
  p3_bill,
  p3_jeff,
  p3_luciano,
  p5_win,
  p5_mac,
  p5_ubu,
  p5_and,
  p5_rod,
];
const p1Answer = [p1_certo, p1_errado];
const p2Answer = [p2_certo, p2_errado];
const p3Answer = [p3_elon, p3_bill, p3_jeff, p3_luciano];
const p5Answer = [p5_win, p5_mac, p5_ubu, p5_and, p5_rod];

let currentPoints = 0;
const msgAcerto = "Você acertou a questão!";
let url_inicial = "";

init.addEventListener("click", () => {
  url_inicial = window.location.href;
});

correctAnswers.forEach((e) => {
  e.addEventListener("click", () => {
    currentPoints++;
    switch (e.id) {
      case "p1_errado":
        msg_p1.innerHTML = msgAcerto;
        block_p1.classList.remove("msg_erro");
        block_p1.classList.add("msg_acerto");
        placar_img_1.src = "issets/acerto.png";
        break;
      case "p2_certo":
        msg_p2.innerHTML = msgAcerto;
        block_p2.classList.remove("msg_erro");
        block_p2.classList.add("msg_acerto");
        placar_img_2.src = "issets/acerto.png";
        break;
      case "p3_bill":
        msg_p3.innerHTML = msgAcerto;
        block_p3.classList.remove("msg_erro");
        block_p3.classList.add("msg_acerto");
        placar_img_3.src = "issets/acerto.png";
        break;
      case "p5_rod":
        msg_p5.innerHTML = msgAcerto;
        block_p5.classList.remove("msg_erro");
        block_p5.classList.add("msg_acerto");
        placar_img_5.src = "issets/acerto.png";
        break;
    }
  });
});

p4_enviar.addEventListener("click", () => {
  let p4Answer = p4_answer.value;
  if (p4Answer.toLowerCase() == "javascript") {
    currentPoints += 1;
    block_p4.classList.remove("hidden");
    msg_p4.innerHTML = msgAcerto;
    block_p4.classList.remove("msg_erro");
    block_p4.classList.add("msg_acerto");
    placar_img_4.src = "issets/acerto.png";
  } else {
    block_p4.classList.remove("hidden");
  }
});

p1Answer.forEach((e) => {
  e.addEventListener("click", () => {
    block_p1.classList.remove("hidden");
  });
});

p2Answer.forEach((e) => {
  e.addEventListener("click", () => {
    block_p2.classList.remove("hidden");
  });
});

p3Answer.forEach((e) => {
  e.addEventListener("click", () => {
    block_p3.classList.remove("hidden");
  });
});

const printPoints = document.getElementById("pontuacao");

p5Answer.forEach((e) => {
  e.addEventListener("click", () => {
    block_p5.classList.remove("hidden");
    printPoints.innerHTML = currentPoints;
  });
});

restartBtn.addEventListener("click", () => {
  window.location.href = url_inicial;
});
