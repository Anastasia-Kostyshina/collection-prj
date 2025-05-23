(function () {
  "use strict";

  // root - html 
  const root = document.documentElement;

  // Mobile header navigation
  const navToggle = document.querySelector("#js-navToggle");
  navToggle.addEventListener("click", function () {
      root.classList.toggle("show-nav");
  });

  // Mobile filter navigation
  const filterToggle = document.querySelector("#js-filterToggle");
  if (filterToggle) {
    filterToggle.addEventListener("click", function () {
      root.classList.toggle("show-filter");
    });
  }

  // Modal window for images
  const imagePP = document.querySelector("#js-imagePP");

  if (imagePP) {
      const imageOpenBtn = document.querySelector("#js-pictureOpen");
      const closeImagePP = function (event) {
        function close() {
          document.removeEventListener("keyup", closeImagePP);
          imagePP.removeEventListener("click", closeImagePP);
          root.classList.remove("show-image-popup");
        }
        switch (event.type) {
          case "keyup":
            if (event.key === "Escape" || event.keyCode === 27) close();
            break;
          case "click":
            if (
              event.target === this ||
              event.target.classList.contains("js-ppCloseBtn")
            )
              close();
            break;
        }
      };
      imageOpenBtn.addEventListener("click", function () {
        root.classList.add("show-image-popup");
        document.addEventListener("keyup", closeImagePP);
        imagePP.addEventListener("click", closeImagePP);
      });

      // Add image in popup
      let imgOrigin = document.getElementById("js-image");
      let imgInsert = document.getElementById("js-image-insert");

      imageOpenBtn.onclick = function(){
        imgInsert.src = imgOrigin.src;
      }
  }

  // Header on scroll
  $(window).scroll(function() {
      $('.js-pageHeader').toggleClass('scroll', $(this).scrollTop() > 50);
  });

  // Initializing swiper plugin
  const swipers = document.querySelectorAll(".js-swiper");

  swipers.forEach(function (swpr) {
    new Swiper(swpr, {
      loop: true,
      updateOnWindowResize: true,
      slidesPerView: "auto",
      centeredSlides : true,
      freeMode: true,
      spaceBetween: 0,
      speed: 500,
      simulateTouch: false,
      navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
        disabledClass: "arrow--disabled"
      }
    });
  });

  // Initializing swiper plugin
  const swipersSeries = document.querySelectorAll(".js-swiper-series");

  swipersSeries.forEach(function (swpr) {
    new Swiper(swpr, {
      updateOnWindowResize: true,
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 0,
      speed: 500,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
        disabledClass: "arrow--disabled"
      }
    });
  });

  // Карта 1
  const contactsMap = document.querySelector("#js-contactsMap");

  if (contactsMap) {
    const locations = [
      { lat: 56.49020, lng: 84.94918 }, // Координаты для первого магазина
      { lat: 56.45812, lng: 84.95157 }, // Координаты для второго магазина
    ];
    const mapStyles = [
      {
      featureType: "poi.attraction",
      stylers: [
      {
      visibility: "simplified",
      },
      ],
      },
      {
      featureType: "poi.business",
      stylers: [
      {
      color: "#df9b26",
      },
      {
      visibility: "simplified",
      },
      ],
      },
      {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [
      {
      visibility: "off",
      },
      ],
      },
      {
      featureType: "poi.place_of_worship",
      stylers: [
      {
      visibility: "off",
      },
      ],
      },
    ]; // JSON со стилями
    const mapCenter = new google.maps.LatLng(56.49020, 84.94918);
    const mapOptions = {
      center: mapCenter,
      disableDefaultUI: true,
      draggable: true,
      gestureHandling: "cooperative",
      scrollwheel: false,
      styles: mapStyles,
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
      },
    };
    const map = new google.maps.Map(contactsMap, mapOptions);
    let currentMarker = new google.maps.Marker({
      position: locations[0],
      map: map,
      icon: {
      url: "../assets/images/map-icon.svg",
      scaledSize: new google.maps.Size(91, 71),
      anchor: new google.maps.Point(0, 71),
      },
      animation: google.maps.Animation.DROP,
      title: "TAGREE digital",
    });//настройки маркера

    document.querySelectorAll('.js-contacts__info-item').forEach((tab, index) => {
      tab.addEventListener('click', () => {
        if (locations[index]) {
          // Обновляем позицию существующего маркера
          currentMarker.setPosition(locations[index]);

          // Центрируем карту на новом маркере
          map.panTo(locations[index]);

          // Добавляем анимацию (плавный переход)

          currentMarker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(() => {
            currentMarker.setAnimation(null);
          }, 500);
        }
      });
    });
  }

  const chooseAddress = document.querySelectorAll('.js-contacts__info-item');

  if (chooseAddress) {
    chooseAddress.forEach(function (item) {

        item.onclick = function () {

            document.querySelector('.contacts__info-item--active').classList.remove('contacts__info-item--active');
            item.classList.add('contacts__info-item--active');
        };

    });
  }
  

  // Banner slider
  const bannerNav = document.querySelectorAll('.banner__nav-item');
  const bannerSlider = document.querySelectorAll('.banner__collection-card');

  if (bannerSlider) {
      bannerNav.forEach(function (item, index) {

          item.onclick = function () {
  
              document.querySelector('.banner__nav-item--active').classList.remove('banner__nav-item--active');
              item.classList.add('banner__nav-item--active');
              document.querySelector('.banner__collection-card--active').classList.remove('banner__collection-card--active');
              bannerSlider[index].classList.add('banner__collection-card--active');
  
          };
  
      });
  }

  // Initializing jQuery Selectric


  const jsSelectric = $(".js-selectric");

  if (jsSelectric.length) {
    jsSelectric.selectric({
      nativeOnMobile: false,
      onOpen: function() {
        $('.selectric-scroll').scrollbar();
      }
    });
  }

  // Initializing jQuery Mask Plugin
  const mobileMask = $('.js-mobileMask');

  if (mobileMask.length) {
    mobileMask.mask('+ 7 000 000 00 00', { placeholder: "Укажи свой телефон" });
  }

  // Initializing Air Datepicker
  const dateField = $(".js-dateField");

  if (dateField.length) {
    const pickerInit = function (pick) {
      const dateInput = pick.find(".js-dateInput");
      const dateDay = pick.find(".js-dateDay");
      const dateMonth = pick.find(".js-dateMonth");
      const dateYear = pick.find(".js-dateYear");
      const dateConfig = {
        autoClose: true,
        navTitles: {
          days: "MMMM <i>yyyy</i>"
        },
        onSelect: function ({ date }) {
          dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
          dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
          dateYear.val(date ? date.getFullYear() : "");
        }
      };
      new AirDatepicker(dateInput[0], dateConfig);
    };
    $.each(dateField, function (i) {
      pickerInit($(this));
    });
  }

  // Initializing jQuery Validation Plugin
  const registrationForm = $('#js-registrationForm');
  
  if (registrationForm.length) {
    registrationForm.validate({
      errorElement: "span"
    });
  }

  // Проверка пароля

  if (registrationForm.length) {
      $('.js-confirm-password').on('keyup', function () {
          let password = $(".js-new-password").val();
          let confirmPassword = $(".js-confirm-password").val();

          if(confirmPassword.length != 0) {
              if (password != confirmPassword) $(".js-check-password").html("Пароли не совпадают");
              else $(".js-check-password").html("");
          } else {
              $(".js-check-password").html("");
          }
      });
  }

  // Детальная страница постера

  const addToCartForm = document.querySelectorAll('#js-addToCartForm');

  // Выбор постера по radio

  if (addToCartForm.length) {
    let itemPrice = document.querySelector('.js-price');
    let paperPrice = document.querySelector('#js-paperPoster');
    let electronicPrice = document.querySelector('#js-electronicPoster');

    paperPrice.addEventListener('click', function(){
        itemPrice.innerText = paperPrice.dataset.typePrice;
        itemPrice.dataset.productPrice = paperPrice.dataset.typePrice;
    });

    electronicPrice.addEventListener('click', function(){
        itemPrice.innerText = electronicPrice.dataset.typePrice;
        itemPrice.dataset.productPrice = electronicPrice.dataset.typePrice;
    });

  }

  // Подсчет количества постеров
  if (addToCartForm.length) {
      let plus = document.querySelector('.js-plus');
      let minus = document.querySelector('.js-minus');
      let input = document.querySelector('.js-count');
      let inputValue = input.value;

      plus.addEventListener('click', function(){
          inputValue ++;
          input.value = inputValue;
          totalPosterCost();
      });

      minus.addEventListener('click', function(){
          if(inputValue > 1) {
              inputValue --;
              input.value = inputValue;
          } else {
            input.value = 1;
          }
          totalPosterCost();
      });
  }

  // Итоговая стоимость выбранного постера

  function totalPosterCost() {
      let itemPrice = document.querySelector('.js-price');
      let input = document.querySelector('.js-count');
      let totalCost = parseInt(itemPrice.dataset.productPrice) * input.value;
      itemPrice.innerText = totalCost;
  }

  // Слайдер цены
  const rangeSlider = document.getElementById('js-rangeSlider');

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [650, 5000],
      connect: true,
      step: 1,
      range: {
        'min': [0],
        'max': [6000]
      }
    });

    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function(values, handle){
      inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      console.log(arr);

      rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        console.log(index);
        setRangeSlider(index, e.currentTarget.value);
      });
    });
  }

  // Добавление в корзину
  const addToCart = document.querySelector('.js-addToCart');

  if (addToCart) {
    function initCartButtons() {
      let count = 0;
    const counter = document.getElementById('js-cartCounter');
    const buttons = document.querySelectorAll('.js-addToCart');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // проверяем, добавлен ли товар
        const isInCart = button.classList.contains('in-cart');
        
        if (isInCart) {
          // Удаляем товар из корзины
          button.classList.remove('in-cart');
          count = Math.max(0, count - 1);
        } else {
          // Добавляем товар в корзину
          button.classList.add('in-cart');
          count++;
        }

        counter.innerText = count;

        // Управление видимостью счетчика
        if (count > 0) {
          counter.classList.add('show-counter');
          document.getElementById('cart-link').classList.add('page-header__nav-icon--active');
        } else {
          counter.classList.remove('show-counter');
          document.getElementById('cart-link').classList.remove('page-header__nav-icon--active');
        }
      });
    });
    }
    window.initCartButtons = initCartButtons;
    initCartButtons();
  }

  // Добавление в избранное
  const addToFavorite = document.querySelector('.js-addToFavorite');

  if (addToFavorite) {
    function initFavoriteButtons() {
      let count = 0;
    const counter = document.getElementById('js-favoriteCounter');
    const buttons = document.querySelectorAll('.js-addToFavorite');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // проверяем, добавлен ли товар в избранное
        const isInCart = button.classList.contains('in-favorite');
        
        if (isInCart) {
          // Удаляем товар из избранного
          button.classList.remove('in-favorite');
          count = Math.max(0, count - 1);
        } else {
          // Добавляем товар в избранное
          button.classList.add('in-favorite');
          count++;
        }

        counter.innerText = count;

        // Управление видимостью счетчика
        if (count > 0) {
          counter.classList.add('show-counter');
          document.getElementById('favorite-link').classList.add('page-header__nav-icon--active');
        } else {
          counter.classList.remove('show-counter');
          document.getElementById('favorite-link').classList.remove('page-header__nav-icon--active');
        }
      });
    });
    }
    window.initFavoriteButtons = initFavoriteButtons;
    initFavoriteButtons();
  }

  // Класс для селекта
  const selectField = document.querySelector("#js-selectField");

  if(selectField) {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll('.selectric-wrapper').forEach(wrapper => {
          const selectField = wrapper.closest('.js-select-field');
          
          if (!selectField) return;
      
          // Создаём наблюдатель за изменением классов
          const observer = new MutationObserver(mutations => {
              mutations.forEach(mutation => {
                  if (mutation.attributeName === 'class') {
                      if (wrapper.classList.contains('selectric-open')) {
                          selectField.classList.add('select-field--open');
                      } else {
                          selectField.classList.remove('select-field--open');
                      }
                  }
              });
          });
      
          // Запускаем наблюдение
          observer.observe(wrapper, { attributes: true });
      });
    });
  }
  
})();