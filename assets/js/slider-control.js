window.addEventListener('load', function(){
    const slider = document.querySelector('.body-slider');   
    const nextBtn = document.querySelector('.next-slider');
    const backBtn = document.querySelector('.back-slider');
    const sliderItem = document.querySelectorAll('.slider-item'); 
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const sliderLength = sliderItem.length;
    let positionX = 0;
    let index = 0;

    nextBtn.addEventListener('click', () =>{
        handleChangeSlide(1);
    });
    backBtn.addEventListener('click', () =>{
        handleChangeSlide(-1); //
    });

    function handleChangeSlide(dir){
        if(dir === 1){
            if (index > sliderLength - 4) {
                index = 0;
                positionX = 0;
            }
            console.log(index);
            positionX = positionX - sliderItemWidth
            slider.style = `transform:translateX(${positionX}px)`;
            index++; 
        }else if (dir === -1){
            if (index <= 0) {
                index = 0;
                positionX = -sliderItemWidth
            }        
            positionX = positionX + sliderItemWidth;
            slider.style = `transform:translateX(${positionX}px)`;
            console.log('prev');
            index--;
        }
    }
})
