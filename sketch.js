let canvasWidth = 600;
let canvasHeight = 550;
let groundLevel = canvasHeight * 0.7;
let plantas = [];
let numPlantas = 25;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(30);
  for (let i = 0; i < numPlantas; i++) {
    plantas.push({
      x: random(10, canvasWidth - 20),
      altura: random(15, 40),
      inclinacao: random(-0.3, 0.3),
      espessura: random(1, 3),
      cor: color(random(150, 220), random(120, 170), random(50, 100))
    });
  }
}

function draw() {
  let tempo = frameCount;

  if (tempo < 90) {
    quadro1();
  } else if (tempo < 180) {
    quadro2();
  } else if (tempo < 270) {
    quadro3();
  } else if (tempo < 360) {
    quadro4();
  } else if (tempo < 450) {
    quadro5();
  } else {
    noLoop();
  }
}

// Função para desenhar o sol no canto superior direito
function desenharSol() {
  fill(255, 204, 0);
  noStroke();
  ellipse(width - 60, 60, 80, 80);
  stroke(255, 204, 0);
  strokeWeight(3);
  for (let i = 0; i < 8; i++) {
    let angle = TWO_PI / 8 * i;
    let x1 = width - 60 + cos(angle) * 50;
    let y1 = 60 + sin(angle) * 50;
    let x2 = width - 60 + cos(angle) * 65;
    let y2 = 60 + sin(angle) * 65;
    line(x1, y1, x2, y2);
  }
  noStroke();
  strokeWeight(1);
}

// Quadro 1 - Fazenda seca com fazendeiro e pessoas
function quadro1() {
  background(230);
  desenharSol();
  fill(101, 67, 33);
  rect(0, groundLevel, width, height - groundLevel);
  desenharPlantasSecas(groundLevel);
  desenharFazendeiro(width / 2, groundLevel - 80);
  desenharBalaoDeFala(width / 2, groundLevel - 120,
    "Estou sem água para plantar,\nas pessoas da cidade vão ficar sem comida!");
}

// Quadro 2 - Cidade
function quadro2() {
  background(230);
  desenharSol();
  fill(200);
  rect(0, 300, width, 250);

  // prédios estáticos e bonitos
  fill(180, 180, 220);
  rect(20, 400, 60, 120);
  fill(160, 160, 200);
  rect(100, 380, 80, 140);
  fill(140, 140, 180);
  rect(200, 410, 50, 110);
  fill(170, 170, 210);
  rect(270, 390, 90, 130);
  fill(150, 150, 190);
  rect(380, 405, 65, 115);
  fill(130, 130, 170);
  rect(460, 385, 70, 135);
  fill(120, 120, 160);
  rect(540, 400, 45, 120);

  for (let i = 0; i < 5; i++) {
    desenharPessoa(80 + i * 100, 480, color(0, 150, 255));
  }
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Na cidade, as pessoas estão sem comida!", width / 2, 200);
}

// Quadro 3 - Máquina
function quadro3() {
  background(230);
  desenharSol();
  fill(100);
  rect(250, 250, 100, 120);
  fill(0, 150, 255);
  ellipse(300, 280, 30, 30);
  stroke(0);
  line(300, 370, 300, 400);
  noStroke();
  desenharPessoa(220, 390, color(0, 255, 0));
  desenharPessoa(370, 390, color(255, 100, 0));
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Criando máquina para purificar\na água dos esgotos!", width / 2, 200);
}

// Quadro 4 - Nuvem chegando com água caindo
function quadro4() {
  background(230);
  desenharSol();
  fill(101, 67, 33);
  rect(0, groundLevel, width, height - groundLevel);
  desenharPlantasSecas(groundLevel);

  // Nuvens
  fill(180);
  ellipse(width / 2, 100, 150, 60);
  ellipse(width / 2 - 50, 100, 100, 60);
  ellipse(width / 2 + 50, 100, 100, 60);

  // Água caindo animada
  stroke(100, 100, 255);
  strokeWeight(2);
  let tempo = frameCount;
  for (let i = -3; i <= 3; i++) {
    // animação vertical da água descendo
    let y1 = 110 + ((tempo * 5 + i * 20) % 80);
    let y2 = y1 + 15;
    line(width / 2 + i * 20, y1, width / 2 + i * 20, y2);
  }
  noStroke();

  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Uma nuvem está chegando!", width / 2, 60);
}

// Quadro 5 - Chuva e colheita salva
function quadro5() {
  background(180, 240, 255);
  desenharSol();
  fill(60, 40, 20);
  rect(0, groundLevel, width, height - groundLevel);

  for (let i = 0; i < numPlantas; i++) {
    let x = plantas[i].x;
    let altura = plantas[i].altura + 10;
    push();
    translate(x, groundLevel);
    strokeWeight(2);
    stroke(34, 139, 34);
    line(0, 0, 0, -altura);
    pop();
  }

  let x = width / 2;
  let y = groundLevel - 80;
  fill(0, 150, 50);
  rect(x - 10, y, 20, 40);
  fill(255, 220, 185);
  ellipse(x, y - 20, 30, 30);
  stroke(0, 150, 50);
  line(x - 15, y + 10, x - 30, y + 20);
  line(x + 15, y + 10, x + 30, y + 20);
  fill(139, 69, 19);
  arc(x, y - 30, 40, 20, PI, 0, CHORD);
  rect(x - 20, y - 30, 40, 10);
  fill(0);
  text(":D", x, y - 35);

  noFill();
  strokeWeight(10);
  let cores = [
    color(255, 0, 0), color(255, 165, 0), color(255, 255, 0),
    color(0, 128, 0), color(0, 0, 255), color(75, 0, 130), color(238, 130, 238)
  ];
  for (let i = 0; i < cores.length; i++) {
    stroke(cores[i]);
    arc(width / 2, groundLevel, 400 - i * 10, 200 - i * 5, PI, 0);
  }

  noStroke();
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Com a chuva e a união das pessoas,\na colheita foi salva!", width / 2, 50);

  for (let i = 0; i < 4; i++) {
    let x = 100 + i * 120;
    desenharPessoa(x, groundLevel - 40, color(0, 200, 0));
  }

  textSize(48);
  fill(0);
  textAlign(CENTER, CENTER);
  text("FIM", width / 2, height - 50);
}

// Plantações secas
function desenharPlantasSecas(yBase) {
  for (let planta of plantas) {
    push();
    translate(planta.x, yBase);
    rotate(planta.inclinacao);
    strokeWeight(planta.espessura);
    stroke(planta.cor);
    line(0, 0, 0, -planta.altura);
    pop();
  }
}

// Fazendeiro
function desenharFazendeiro(x, y) {
  fill(0, 100, 255);
  rect(x - 10, y, 20, 40);
  fill(255, 220, 185);
  ellipse(x, y - 20, 30, 30);
  stroke(0, 100, 255);
  line(x - 15, y + 10, x - 30, y + 20);
  line(x + 15, y + 10, x + 30, y + 20);
  fill(139, 69, 19);
  arc(x, y - 30, 40, 20, PI, 0, CHORD);
  rect(x - 20, y - 30, 40, 10);
}

// Balão de fala (texto alinhado em cima do balão)
function desenharBalaoDeFala(x, y, texto) {
  fill(255);
  stroke(0);
  rect(x - 120, y - 60, 240, 60, 10);
  triangle(x, y, x - 10, y + 20, x + 10, y + 20);
  noStroke();
  fill(0);
  textAlign(CENTER, BOTTOM);
  textSize(14);
  text(texto, x, y - 10, 220, 60);
}

// Pessoa mais complexa
function desenharPessoa(x, y, corRoupa = color(100, 100, 255)) {
  // corpo
  fill(corRoupa);
  rect(x - 8, y, 16, 30, 4);
  // cabeça
  fill(255, 220, 185);
  ellipse(x, y - 15, 22, 22);
  // olhos
  fill(0);
  ellipse(x - 5, y - 17, 4, 4);
  ellipse(x + 5, y - 17, 4, 4);
  // sorriso
  noFill();
  stroke(0);
  strokeWeight(1.5);
  arc(x, y - 10, 12, 8, 0, PI);
  noStroke();
  // braços
  stroke(corRoupa);
  strokeWeight(3);
  line(x - 10, y + 5, x - 25, y + 15);
  line(x + 10, y + 5, x + 25, y + 15);
  // pernas
  line(x - 6, y + 30, x - 10, y + 45);
  line(x + 6, y + 30, x + 10, y + 45);
  noStroke();
}



