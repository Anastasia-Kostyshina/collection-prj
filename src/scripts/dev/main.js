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

})();