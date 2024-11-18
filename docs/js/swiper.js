const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    }
});

const swiperBest = new Swiper('.best-section-swiper', {
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
})

const swiperText = new Swiper('.swiper-text', {

  pagination: {
    el: '.swiper-fraction-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span style="font-size:20px">' + "0" + '<span class="' + currentClass + '"></span>/</span>' +
              '<span style="font-size:15px">0<span class="' + totalClass + '"></span></span>';
    }
  },
  
  navigation: {
    nextEl: '.swiper-button-text-next',
    prevEl: '.swiper-button-text-prev',
  },
});