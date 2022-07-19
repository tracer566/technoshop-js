import './index.html'
import './card.html'
import './cart.html'
import './index.sass'

  // import Swiper JS
  import Swiper,{Thumbs,Scrollbar} from 'swiper';
  import 'swiper/css';
  import 'swiper/css/scrollbar';

 const thumbsSwiper = new Swiper('.card__slider-thumb',{
  slidesPerView: 3,// кол-во видимых слайдов
  spaceBetween: 44, //растояние между слайдерами
  scrollbar:{
    el:'.swiper-scrollbar',
    draggable: true
  },
  modules:[Scrollbar]
 })

 new Swiper('.card__image',{
  spaceBetween: 10,
  speed: 400,
  slidesPerView: 1,
  slideThumbActiveClass: 'card__thumb-btn_active',
  thumbs:{
    swiper: thumbsSwiper
  },
  modules:[Thumbs]
 })

 new Swiper('.recommended__carusel',{
  slidesPerView: 5,// кол-во видимых слайдов
  spaceBetween: 30, //растояние между слайдерами
 })