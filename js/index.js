function isTouchDevice() {
    const maxTouchPoints = navigator.maxTouchPoints || 0;
    const touchEvent = 'ontouchstart' in window;
    const touchMediaQuery = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    return maxTouchPoints > 0 || touchEvent || touchMediaQuery;
}

if (isTouchDevice()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc')
}

/* Header */
document.addEventListener("DOMContentLoaded", function () {
    const menuItemsWithSubmenu = document.querySelectorAll('.menu-list > li');

    menuItemsWithSubmenu.forEach(item => {
        const submenu = item.querySelector('.menu-sub-list');
        const link = item.querySelector('.menu-link');

        link.addEventListener('click', function (event) {
            if (submenu && event.target === link) {
                event.preventDefault();
                const isVisible = submenu.style.display === 'block';

                document.querySelectorAll('.menu-sub-list').forEach(sub => {
                    if (sub !== submenu) {
                        sub.style.display = 'none';
                    }
                });
                submenu.style.display = isVisible ? 'none' : 'block';
                event.stopPropagation();
            }
        });
    });

    const iconMenu = document.querySelector('.menu-icon');
    if (iconMenu) {
        const menuWrapper = document.querySelector('.menu-wrapper');
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuWrapper.classList.toggle('_active');
        })
    }

    /* page Join.html arrow in collapse title*/
    $('.collapse').on('show.bs.collapse', function () {
        $(this).parent().find('.collapse-title').addClass('rotate-chevrone');
    });

    $('.collapse').on('hide.bs.collapse', function () {
        $(this).parent().find('.collapse-title').removeClass('rotate-chevrone');
    });


    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
});

/* window.addEventListener('scroll', function () {
    var header_divider = document.querySelector('.header-divider');
    if (window.scrollY > 50) {
        header_divider.style.opacity = 1;
    } else {
        header_divider.style.opacity = 0;
    }
}); */
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (window.scrollY > 30) {
        header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

/* Footer */
const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
const todayElement = document.getElementById(today);
if (todayElement) {
    todayElement.classList.add('today');
}

/* Sponsors slider */
/* $('.sponsors-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    swipeToSlide: false,
    centerMode: true,
    variableWidth: true,
}); */

/* page Visit google map */
function initMap() {
    var geocoder = new google.maps.Geocoder();
    var address = "129 E. Ocean Avenue, Boynton Beach, FL 33435";

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 11,
                center: results[0].geometry.location
            });
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
            var infoWindow = new google.maps.InfoWindow({
                content: '<div style="font-size: 16px;"><strong class="info-window-location">Schoolhouse Children\'s Museum</strong><br>' +
                    '129 East Ocean Avenue<br>Boynton Beach, Florida 33435-4536<br><br><a href="https://www.google.com/maps?saddr&daddr=129+East+Ocean+Avenue,+Boynton+Beach,+Florida,+33435-4536,+US" target="_blank">Get Directions</a><br></div>'
            });
            infoWindow.open(map, marker);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

/* page Join */


