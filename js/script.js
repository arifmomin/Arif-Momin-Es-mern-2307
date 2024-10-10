/**
 * todo: menu bar Fixed
 */
const menu_bar = document.querySelector('.menu_bar');
window.addEventListener('scroll', () =>{
  let scrolling = this.scrollY;
  if(scrolling > 100){
    menu_bar.classList.add('menu-Fixed');
  }else{
    menu_bar.classList.remove('menu-Fixed');
  }
})
/**
 * todo: back to top implement
 */
const backToTop = document.querySelector('.backToTop');
window.addEventListener('scroll', () =>{
  let bottomicon = this.scrollY;
  if(bottomicon > 100){
    backToTop.classList.add('goTop');
  }else{
    backToTop.classList.remove('goTop');
  }
  backToTop.addEventListener('click',() =>{
    this.scrollTo({
      top: 0 ,
      behavior: "smooth",
    })
  })
});

$('.client_slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay:true,
    prevArrow:false,
    nextArrow:false
  });
