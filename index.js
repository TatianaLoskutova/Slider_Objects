let showPrevBtn = document.getElementById('show-prev-btn');
let showNextBtn = document.getElementById('show-next-btn');

showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

let imagesUrls = [];
imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaI2yYrnPaHVuY3c7g08ug-Brm5OCxMyoe5Q&usqp=CAU');
imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOp2ABW-AHiUz_6GeFKtBRyqN-J7rTcUoew&usqp=CAU');
imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0v19K9WeehD0hm6NiDyvGoHCfKoc5h71Fcg&usqp=CAU');
imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFSEwrzoojR8cDARO4HHOATYyeURDye80Ww&usqp=CAU');



function onShowPrevBtnClick () {
    console.log('prev clicked');
}
function onShowNextBtnClick () {
    console.log('next clicked');
}