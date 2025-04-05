const images = [
    "assets/image1.png",
    "assets/image2.png",
    "assets/image3.png",
    "assets/image4.png",
    "assets/image5.png",
    "assets/image6.png",
    "assets/image7.png",
    "assets/image8.png",
    "assets/image9.png",
    "assets/image10.png",
    "assets/image11.png",
    "assets/image12.png",
    "assets/image13.png",
    "assets/image14.png",
    "assets/image15.png",
    "assets/image16.png",
    "assets/image17.png",
    "assets/image18.png",
    "assets/image19.png",
    "assets/image20.png",
    "assets/image21.png",
    "assets/image22.png",
    "assets/image23.png",
    "assets/image24.png",
    "assets/image25.png",
    "assets/image26.png",
    "assets/image27.png",
    "assets/image28.png",
    "assets/image29.png",
    "assets/image30.png",
    "assets/image31.png",
    "assets/image32.png",
    "assets/image33.png",
    "assets/image34.png",
    "assets/image35.png",
    "assets/image36.png",
    "assets/image37.png",
    "assets/image38.png",
    "assets/image39.png",
    "assets/image40.png",
    "assets/image41.png",
    "assets/image42.png",
    "assets/image43.png",
    "assets/image44.png",
    "assets/image45.png",
    "assets/image46.png",
  ];
  
  let currentIndex = 0;
  
  const galleryImage = document.getElementById("gallery-image");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const galleryCaption = document.getElementById("gallery-caption");

  // Function to update the displayed image for the first gallery
  function updateImage(index) {
    galleryImage.src = images[index];
    galleryImage.alt = `Storyboard Frame ${index + 1}`;
    galleryCaption.textContent = `Step ${index + 1} of ${images.length}`;
  }
  
  // Event listeners for navigation buttons
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
  });
  
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
  });
  
  // Initialize the first gallery
updateImage(currentIndex);

// 📘 Textbook Gallery images (pg177 to pg191)
const textbookImages = [
  "assets/pg177.jpg",
  "assets/pg178.jpg",
  "assets/pg179.jpg",
  "assets/pg180.jpg",
  "assets/pg181.jpg",
  "assets/pg182.jpg",
  "assets/pg183.jpg",
  "assets/pg184.jpg",
  "assets/pg185.jpg",
  "assets/pg186.jpg",
  "assets/pg187.jpg",
  "assets/pg188.jpg",
  "assets/pg189.jpg",
  "assets/pg190.jpg",
  "assets/pg191.jpg"
];

let textbookCurrentIndex = 0;

const textbookGalleryImage = document.getElementById("gallery-image-textbook");
const textbookPrevButton = document.getElementById("prev-textbook");
const textbookNextButton = document.getElementById("next-textbook");
const textbookGalleryCaption = document.getElementById("gallery-caption-textbook");

function updateTextbookImage(index) {
  textbookGalleryImage.src = textbookImages[index];
  textbookGalleryImage.alt = `Textbook Frame ${index + 1}`;
  textbookGalleryCaption.textContent = `${index + 1} of ${textbookImages.length}`;
}

textbookPrevButton.addEventListener("click", () => {
  textbookCurrentIndex = (textbookCurrentIndex - 1 + textbookImages.length) % textbookImages.length;
  updateTextbookImage(textbookCurrentIndex);
});

textbookNextButton.addEventListener("click", () => {
  textbookCurrentIndex = (textbookCurrentIndex + 1) % textbookImages.length;
  updateTextbookImage(textbookCurrentIndex);
});

updateTextbookImage(textbookCurrentIndex);

// Medical reference gallery images
const medicalImages = [
  "assets/PPH12.jpg",
  "assets/PPH14.jpg",
  "assets/PPH180.jpg",
  "assets/PPH181.jpg",
  "assets/PPH182.jpg",
  "assets/PPH183.jpg",
  "assets/PPH184.jpg",
  "assets/PPH185.jpg",
  "assets/PPH186.jpg",
  "assets/PPH187.jpg",
  "assets/PPH188.jpg",
  "assets/PPH189.jpg",
  "assets/PPH190.jpg",
  "assets/PPH191.jpg",
  "assets/PPH192.jpg",
  "assets/PPH188z.jpg",
];

let medicalCurrentIndex = 0;

const medicalGalleryImage = document.getElementById("gallery-image-medical");
const medicalPrevButton = document.getElementById("prev-medical");
const medicalNextButton = document.getElementById("next-medical");
const medicalGalleryCaption = document.getElementById("gallery-caption-medical");

// Function to update the displayed image for the medical gallery
function updateMedicalImage(index) {
  medicalGalleryImage.src = medicalImages[index];
  medicalGalleryImage.alt = `Medical Reference Frame ${index + 1}`;
  medicalGalleryCaption.textContent = `${index + 1} of ${medicalImages.length}`;
}

// Event listeners for medical gallery navigation buttons
medicalPrevButton.addEventListener("click", () => {
  medicalCurrentIndex = (medicalCurrentIndex - 1 + medicalImages.length) % medicalImages.length;
  updateMedicalImage(medicalCurrentIndex);
});

medicalNextButton.addEventListener("click", () => {
  medicalCurrentIndex = (medicalCurrentIndex + 1) % medicalImages.length;
  updateMedicalImage(medicalCurrentIndex);
});

// Initialize the medical gallery
updateMedicalImage(medicalCurrentIndex);

//VR Storyboard Gallery

const vrStoryboardImages = [
  "assets/Storyboard Pg 1.png",
  "assets/Storyboard Pg 2.png",
  "assets/Storyboard Pg 3.png",
  "assets/Storyboard Pg 4.png",
  "assets/Storyboard Pg 5.png",
  "assets/Storyboard Pg 6.png",
  "assets/Storyboard Pg 7.png",
  "assets/Storyboard Pg 8.png",
  "assets/Storyboard Pg 9.png",
  "assets/Storyboard Pg 10.png",
  "assets/Storyboard Pg 11.png",
  "assets/Storyboard Pg 12.png",
  "assets/Storyboard Pg 13.png",
  "assets/Storyboard Pg 14.png",
  "assets/Storyboard Pg 15.png",
  "assets/Storyboard Pg 16.png",
  "assets/Storyboard Pg 17.png",
  "assets/Storyboard Pg 18.png",
  "assets/Storyboard Pg 19.png",
  "assets/Storyboard Pg 20.png"
];


let vrCurrentIndex = 0;

const vrGalleryImage = document.getElementById("gallery-image-vr");
const vrPrevButton = document.getElementById("prev-vr");
const vrNextButton = document.getElementById("next-vr");
const vrGalleryCaption = document.getElementById("gallery-caption-vr");

// Function to update the displayed image for the VR storyboard gallery
function updateVRImage(index) {
  vrGalleryImage.src = vrStoryboardImages[index];
  vrGalleryImage.alt = `VR Storyboard Frame ${index + 1}`;
  vrGalleryCaption.textContent = `${index + 1} of ${vrStoryboardImages.length}`;
}

// Event listeners for VR storyboard gallery navigation buttons
vrPrevButton.addEventListener("click", () => {
  vrCurrentIndex = (vrCurrentIndex - 1 + vrStoryboardImages.length) % vrStoryboardImages.length;
  updateVRImage(vrCurrentIndex);
});

vrNextButton.addEventListener("click", () => {
  vrCurrentIndex = (vrCurrentIndex + 1) % vrStoryboardImages.length;
  updateVRImage(vrCurrentIndex);
});

// Initialize the VR storyboard gallery
updateVRImage(vrCurrentIndex);

// Gallery for 4.2.1
const images421 = ["assets/4.2.1 1.jpg", "assets/4.2.1 2.jpg"];
let index421 = 0;
const galleryImage421 = document.getElementById("gallery-image-421");
const caption421 = document.getElementById("gallery-caption-421");

document.getElementById("prev-421").addEventListener("click", () => {
  index421 = (index421 - 1 + images421.length) % images421.length;
  galleryImage421.src = images421[index421];
  caption421.textContent = `${index421 + 1} of ${images421.length}`;
});

document.getElementById("next-421").addEventListener("click", () => {
  index421 = (index421 + 1) % images421.length;
  galleryImage421.src = images421[index421];
  caption421.textContent = `${index421 + 1} of ${images421.length}`;
});

// Gallery for 4.2.2
const images422 = [
  "assets/4.2.2 1.jpg",
  "assets/4.2.2 2.jpg",
  "assets/4.2.2 3.jpg",
  "assets/4.2.2 4.jpg",
  "assets/4.2.2 5.jpg"
];
let index422 = 0;
const galleryImage422 = document.getElementById("gallery-image-422");
const caption422 = document.getElementById("gallery-caption-422");

document.getElementById("prev-422").addEventListener("click", () => {
  index422 = (index422 - 1 + images422.length) % images422.length;
  galleryImage422.src = images422[index422];
  caption422.textContent = `${index422 + 1} of ${images422.length}`;
});

document.getElementById("next-422").addEventListener("click", () => {
  index422 = (index422 + 1) % images422.length;
  galleryImage422.src = images422[index422];
  caption422.textContent = `${index422 + 1} of ${images422.length}`;
});

.handout-gallery-1 img,
.handout-gallery-2 img {
  max-height: 700px;
  width: auto;
  max-width: 90vw;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
