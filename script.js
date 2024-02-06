// to hide other images and show only one image at a time in header banner
const imgs=document.querySelectorAll('.header-slider ul img');
// stores all images
const prev_butn=document.querySelector('.control_prev');
const next_butn=document.querySelector('.control_next');

let n=0;

function changeSlide(){
    for (let i=0; i< imgs.length; i++ ){
        // removes all images
        imgs[i].style.display='none';
    }
    // to display nth image
    imgs[n].style.display='block';

}

changeSlide();

prev_butn.addEventListener('click', (e)=>{
    if( n>0){
        // to display prev image
        n--;
    }
    else{
        // to diplay the last img  when we click on previous button after showing first img
        n=imgs.length - 1;
    }
    changeSlide();
})

next_butn.addEventListener('click', (e)=>{
    if( n<imgs.length-1){
        // to display prev image
        n++;
    }
    else{
        n=0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
// apply js to scroll it horizontally
for (const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft+=evt.deltaY;
    });
}