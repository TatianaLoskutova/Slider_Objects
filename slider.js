let sliderFactory = {
    createNewSlider: function() {
        let newSlider = {
            imagesUrls: [],
            currentImageIndex: 0,

            showPrevBtn: null,
            showNextBtn: null,
            slideImage: null,

            start: function (elId) {
                let that = this;

                let elSelector = '#' + elId
                let el = document.querySelector(elSelector)

                this.showPrevBtn = el.querySelector('.show-prev-btn');
                this.showNextBtn = el.querySelector('.show-next-btn');
                this.slideImage = el.querySelector('.slide-img');

                // subscribe to events
                this.showPrevBtn.addEventListener('click', function (e) {
                    that.onShowPrevBtnClick(e);
                });

                this.showNextBtn.addEventListener('click', function (e) {
                    that.onShowNextBtnClick(e);
                });



                // create images array
                this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4j4cRWZrxY0d-2vrk4EZ-7mNPJ5N5G3xxanGU0_yH4H-qu3H6snNeJUvelYyqdt3gAfE&usqp=CAU');
                this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaI2yYrnPaHVuY3c7g08ug-Brm5OCxMyoe5Q&usqp=CAU');
                this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOp2ABW-AHiUz_6GeFKtBRyqN-J7rTcUoew&usqp=CAU');
                this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0v19K9WeehD0hm6NiDyvGoHCfKoc5h71Fcg&usqp=CAU');

                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = true;
            },

            onShowPrevBtnClick: function(e) {
                this.currentImageIndex--;
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showNextBtn.disabled = false;

                //disable prev button if it needs
                if (this.currentImageIndex === 0 ) {
                    this.showPrevBtn.disabled = true;
                }
            },

            onShowNextBtnClick: function(e) {
                this.currentImageIndex++;
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = false;

                //disable next button if it needs
                if (this.currentImageIndex === (this.imagesUrls.length -1) ) {
                    this.showNextBtn.disabled = true;
                }
            }

        };

        return newSlider;
    }
};



