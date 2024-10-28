const allImages = [
  {
    path: "imagens/icones/html-5.png",
    position: { top: "10%", left: "15%" },
    speed: 0.08,
  },
  {
    path: "imagens/icones/js.png",
    position: { top: "20%", left: "40%" },
    speed: 0.04,
  },
  {
    path: "imagens/icones/angular-icon.webp",
    position: { top: "45%", left: "10%" },
    speed: 0.065,
  },
  {
    path: "imagens/icones/css-3.png",
    position: { top: "50%", left: "60%" },
    speed: 0.03,
  },
  {
    path: "imagens/icones/biblioteca.png",
    position: { top: "15%", left: "75%" },
    speed: 0.025,
  },
  {
    path: "imagens/icones/html-5.png",
    position: { top: "35%", left: "80%" },
    speed: 0.065,
  },
  {
    path: "imagens/icones/js.png",
    position: { top: "60%", left: "80%" },
    speed: 0.1,
  },
  {
    path: "imagens/icones/angular-icon.webp",
    position: { top: "80%", left: "50%" },
    speed: 0.025,
  },
  {
    path: "imagens/icones/css-3.png",
    position: { top: "70%", left: "25%" },
    speed: 0.05,
  },
];

// Definindo uma versão reduzida das imagens com ajustes de posição
const mobileImages = [
  {
    path: "imagens/icones/html-5.png",
    position: { top: "10%", left: "5%" }, // Ajuste a posição para caber na tela
    speed: 0.08,
  },
  {
    path: "imagens/icones/js.png",
    position: { top: "30%", left: "50%" },
    speed: 0.04,
  },
  {
    path: "imagens/icones/angular-icon.webp",
    position: { top: "50%", left: "10%" },
    speed: 0.065,
  },
  {
    path: "imagens/icones/css-3.png",
    position: { top: "65%", left: "40%" },
    speed: 0.03,
  },
  {
    path: "imagens/icones/biblioteca.png",
    position: { top: "80%", left: "70%" },
    speed: 0.025,
  },
];

// Exporta metade das imagens para celular com posições ajustadas
export const images = window.innerWidth < 1200 ? mobileImages : allImages;