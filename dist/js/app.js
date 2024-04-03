
import { Nav } from './components/navbar.js';
import { SwiperInit } from './components/swiperinit.js';
import { Accordion } from './components/accordion.js';
import { Modal } from './components/modal.js';
import { buttons } from './components/buttons.js';
import { filters } from './components/filters.js';
import { tabs } from './components/tabs.js';


const NavInstance = new Nav();
const SwiperInstance = new SwiperInit();
const  AccordionInstance = new Accordion();
const ModalInstance = new Modal();
const ButtonsInstance = new buttons();
const CheckboxInstance = new filters();
const TabsInstance = new tabs();

document.addEventListener('DOMContentLoaded', function() {
  var sliders = document.querySelectorAll('.barber-slider');
  
  sliders.forEach(function(slider) {
    var portfolioWrapper = slider.querySelector('.barber__portfolio-wrapper');
    
    slider.addEventListener('scroll', function() {
      handleScroll(slider, portfolioWrapper);
    });
  });

  function handleScroll(slider, portfolioWrapper) {
    if (slider.scrollTop > 50) {
      portfolioWrapper.classList.add('is-visible');
    } else {
      portfolioWrapper.classList.remove('is-visible');
    }

    if (slider.scrollTop > 200) {
      portfolioWrapper.classList.add('big-visible');
    } else {
      portfolioWrapper.classList.remove('big-visible');
    }

    if (slider.scrollTop > 220) {
      slider.scrollTop = 220;
    }
  }
});