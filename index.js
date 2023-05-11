// find element
let showPrevBtn = document.getElementById('show-prev-btn');
let showNextBtn = document.getElementById('show-next-btn');
let slideImage = document.getElementById('slide-img');

// subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// create images array
let imagesUrls = [];
imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4j4cRWZrxY0d-2vrk4EZ-7mNPJ5N5G3xxanGU0_yH4H-qu3H6snNeJUvelYyqdt3gAfE&usqp=CAU');
imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaI2yYrnPaHVuY3c7g08ug-Brm5OCxMyoe5Q&usqp=CAU');
imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOp2ABW-AHiUz_6GeFKtBRyqN-J7rTcUoew&usqp=CAU');
imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0v19K9WeehD0hm6NiDyvGoHCfKoc5h71Fcg&usqp=CAU');

let currentImageIndex = 0;

slideImage.src = imagesUrls[currentImageIndex];


// functions definitions
function onShowPrevBtnClick () {
    console.log('prev clicked');
}
function onShowNextBtnClick () {
    console.log('next clicked');
}