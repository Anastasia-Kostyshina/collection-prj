(function () {
    "use strict";

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
        const mapStyles = [
            {
            "featureType": "poi.attraction",
            "stylers": [
                {
                "visibility": "simplified"
                }
            ]
            },
            {
            "featureType": "poi.business",
            "stylers": [
                {
                "color": "#df9b26"
                },
                {
                "visibility": "simplified"
                }
            ]
            },
            {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
                {
                "visibility": "off"
                }
            ]
            },
            {
            "featureType": "poi.place_of_worship",
            "stylers": [
                {
                "visibility": "off"
                }
            ]
            }
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
            position: google.maps.ControlPosition.RIGHT_BOTTOM
            }
        };
        const map = new google.maps.Map(contactsMap, mapOptions);

        const point = new google.maps.LatLng(56.49020, 84.94918);
        const mapPin = new google.maps.MarkerImage(
            "../assets/images/map-icon.svg",
            new google.maps.Size(91, 71), //size
            new google.maps.Point(0, 0),  //origin point
            new google.maps.Point(0, 71)  //offset point
        );
        new google.maps.Marker({
            position: point,
            map: map,
            icon: mapPin,
            title: "TAGREE digital"
        });
    }

    // Карта 2
    const contactsMapSecond = document.querySelector("#js-contactsMapSecond");
    if (contactsMapSecond) {
        const mapStyles = [
            {
            "featureType": "poi.attraction",
            "stylers": [
                {
                "visibility": "simplified"
                }
            ]
            },
            {
            "featureType": "poi.business",
            "stylers": [
                {
                "color": "#df9b26"
                },
                {
                "visibility": "simplified"
                }
            ]
            },
            {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
                {
                "visibility": "off"
                }
            ]
            },
            {
            "featureType": "poi.place_of_worship",
            "stylers": [
                {
                "visibility": "off"
                }
            ]
            }
        ]; // JSON со стилями
        const mapCenter = new google.maps.LatLng(56.45812, 84.95157);
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
            position: google.maps.ControlPosition.RIGHT_BOTTOM
            }
        };
        const map = new google.maps.Map(contactsMapSecond, mapOptions);

        const point = new google.maps.LatLng(56.45812, 84.95157);
        const mapPin = new google.maps.MarkerImage(
            "../assets/images/map-icon.svg",
            new google.maps.Size(91, 71), //size
            new google.maps.Point(0, 0),  //origin point
            new google.maps.Point(0, 71)  //offset point
        );
        new google.maps.Marker({
            position: point,
            map: map,
            icon: mapPin,
            title: "TAGREE digital"
        });
    }
    
    // Choose map
    const chooseAddress = document.querySelectorAll('.js-contacts__info-item');
    const chooseMap = document.querySelectorAll('.contacts__map');

    if (chooseMap) {
        chooseAddress.forEach(function (item, index) {

            item.onclick = function () {
    
                document.querySelector('.contacts__info-item--active').classList.remove('contacts__info-item--active');
                item.classList.add('contacts__info-item--active');
                document.querySelector('.contacts__map--active').classList.remove('contacts__map--active');
                chooseMap[index].classList.add('contacts__map--active');
    
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

    // Подсчет количества постеров

    const addToCart = document.querySelectorAll('#js-addToCart');

    if (addToCart) {
        let plus = document.querySelector('.js-plus');
        let minus = document.querySelector('.js-minus');
        let input = document.querySelector('.js-count');
        let inputValue = input.value;

        plus.addEventListener('click', function(){
            inputValue ++;
            input.value = inputValue;
            itogPrice();
        });

        minus.addEventListener('click', function(){
            inputValue --;
            input.value = inputValue;
            if(inputValue < 1) {
                input.value = 1;
            } else {
                itogPrice();
            }
        });
    }

    // Итоговая стоимость выбранного постера

    function itogPrice() {
        let priceA = document.querySelector('.js-price');
        let input = document.querySelector('.js-count');
        let sumV = parseInt(priceA.dataset.productPrice) * input.value;
        priceA.innerText = sumV;
    }

    

   

})();