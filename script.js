import { images } from "./images.js";

const gallery = document.querySelector("#gallery");
const hero = document.querySelector(".hero-section");

// Função para criar a galeria de imagens
const createGallery = (images) => {
  images.forEach((item) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    imageWrapper.style.top = item.position.top;
    imageWrapper.style.left = item.position.left;

    const img = document.createElement("img");
    img.src = item.path;
    imageWrapper.appendChild(img);

    gallery.appendChild(imageWrapper);
  });
};

// Função para aplicar o efeito de movimento
const applyMouseMovementEffect = () => {
  hero.addEventListener("mousemove", (e) => {
    gallery.querySelectorAll(".image-wrapper").forEach((image, index) => {
      const x = (e.clientX - window.innerWidth / 2) * images[index].speed;
      const y = (e.clientY - window.innerHeight / 2) * images[index].speed;

      gsap.to(image, { x, y, duration: 0.75 });
    });
  });
};

// Executa as funções
createGallery(images);
applyMouseMovementEffect();
