let trigoImg;
let fundoImg;
let trigos = [];
let numTrigos = 10; // quantidade de trigos

function preload() {
  // Carregar imagens
  trigoImg = loadImage("https://i.postimg.cc/9Qf6vZ1J/Wheat-JE2-BE2.png");
  fundoImg = loadImage("https://i.postimg.cc/wMVrrjmC/istockphoto-1397509122-612x612.webp");
}

function setup() {
  createCanvas(400, 400);
  
  // Criar posições aleatórias para os trigos
  for (let i = 0; i < numTrigos; i++) {
    let x = random(50, width - 50);
    let y = random(50, height - 50);
    trigos.push({x: x, y: y, coletado: false});
  }
}

function draw() {
  // Desenhar fundo
  background(220);
  image(fundoImg, 0, 0, width, height);
  
  // Mostrar trigos
  for (let t of trigos) {
    if (!t.coletado) {
      image(trigoImg, t.x, t.y, 40, 40);
    }
  }
  
  // Verificar se todos foram coletados
  if (todosColetados()) {
    fill(0); // preto
    textSize(18); // menor
    textAlign(CENTER, CENTER);
    textStyle(BOLD); // negrito
    text("Parabéns! Você coletou todos os trigos!", width / 2, height / 2);
  }
}

function mousePressed() {
  // Verifica clique em um trigo
  for (let t of trigos) {
    if (!t.coletado && dist(mouseX, mouseY, t.x + 20, t.y + 20) < 20) {
      t.coletado = true;
    }
  }
}

function todosColetados() {
  for (let t of trigos) {
    if (!t.coletado) {
      return false;
    }
  }
  return true;
}
