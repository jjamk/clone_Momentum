const images = ["img1.jpeg", "img2.jpeg",
"img3.jpeg","img4.jpeg","img5.jpeg",
"img6.jpeg","img7.jpeg","img8.jpeg",
"img9.jpeg","img10.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//태그 생성
const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);