export class SwiperInit {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {



      if (document.querySelector('.number')) {
        const mainthumb = new Swiper('.number', {
          slidesPerView: 1,
          spaceBetween: 10,
          speed: 1000,
        });
      
        if (document.querySelector('.barber-slider')) {
          const thumbs = new Swiper('.barber-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 1000,
            allowTouchMove: false,
            navigation: {
              nextEl: '.barber__next',
              prevEl: '.barber__prev',
            },
            thumbs: {
              swiper: mainthumb,
            },
            on: {
              slideChange: function () {
                document.querySelector('.barber-slider').scrollTo(0, 0);
              }
            }
          });
        }
      }

              
            });
          }
        } 