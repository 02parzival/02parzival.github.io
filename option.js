const optionItem = document.querySelector('.optionitem');
const optionImages = document.querySelectorAll('.optionitem img');

//Button
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

//Counter
let counter = 1;
const size = optionImages[0].clientWidth;

optionItem.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',function(){
    if (counter >= optionImages.length -1) return;
    optionItem.style.transition= 'transform 0.4s ease-in-out';
    counter ++;
    optionItem.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',function(){
    if (counter <= 0) return;
    optionItem.style.transition= 'transform 0.4s ease-in-out';
    counter --;
    optionItem.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

optionItem.addEventListener('transitionend', function(){
    if (optionImages[counter].id === 'lastClone'){
        optionItem.style.transition = 'none';
        counter = optionImages.length -2;
        optionItem.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (optionImages[counter].id === 'firstClone'){
        optionItem.style.transition = 'none';
        counter = optionImages.length -counter;
        optionItem.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});