/* function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
} */

if (window.innerWidth <= 768) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

document.addEventListener("DOMContentLoaded", function () {
    /* Header */
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

    const slider = document.querySelector('.fullscreen-slider');
    if (slider) {
        $('.fullscreen-slider').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 3000,
            adaptiveHeight: false
        });
    }

    const iconMenu = document.querySelector('.menu-icon');
    if (iconMenu) {
        const menuWrapper = document.querySelector('.menu-wrapper');
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuWrapper.classList.toggle('_active');
        })
    }

    /* page Join.html*/
    const collapses = document.querySelectorAll('.collapse');
    if (collapses.length > 0) {
        collapses.forEach(collapse => {
            collapse.addEventListener('show.bs.collapse', function () {
                const collapseTitle = this.parentNode.querySelector('.collapse-title');
                if (collapseTitle) {
                    collapseTitle.classList.add('rotate-chevrone');
                }
            });
            collapse.addEventListener('hide.bs.collapse', function () {
                const collapseTitle = this.parentNode.querySelector('.collapse-title');
                if (collapseTitle) {
                    collapseTitle.classList.remove('rotate-chevrone');
                }
            });
        });
    }

    const membershipRadios = document.querySelectorAll('input[name="membership"]');
    if (membershipRadios.length > 0) {
        function updateMembershipOptions() {
            const selectedMembership = document.querySelector('input[name="membership"]:checked');
            const familyOptions = document.querySelectorAll('.membership-type-family-option');
            const grandparentOptions = document.querySelectorAll('.membership-type-grandparent-option');

            familyOptions.forEach(option => option.style.display = 'none');
            grandparentOptions.forEach(option => option.style.display = 'none');

            if (selectedMembership?.id === 'membership-family') {
                familyOptions.forEach(option => option.style.display = 'block');
            } else if (selectedMembership?.id === 'membership-grandparent') {
                grandparentOptions.forEach(option => option.style.display = 'block');
            }
        }

        membershipRadios.forEach(radio => {
            radio.addEventListener('change', updateMembershipOptions);
        });
        updateMembershipOptions();
    }

    const billingCountrySelect = document.getElementById('billing-country');
    if (billingCountrySelect) {
        function updateBillingFields() {
            const billingStateSection = document.querySelector('.billing-state');
            const billingProvinceSection = document.querySelector('.billing-province');
            const billingCountryOtherSection = document.querySelector('.billing-country-other');

            const billingStateFields = billingStateSection.querySelectorAll('select, input');
            const billingProvinceFields = billingProvinceSection.querySelectorAll('select, input');
            const billingCountryOtherFields = billingCountryOtherSection.querySelectorAll('select, input');

            const selectedCountry = billingCountrySelect.value;

            billingStateSection.style.display = 'none';
            billingProvinceSection.style.display = 'none';
            billingCountryOtherSection.style.display = 'none';

            billingStateFields.forEach(field => field.removeAttribute('required'));
            billingProvinceFields.forEach(field => field.removeAttribute('required'));
            billingCountryOtherFields.forEach(field => field.removeAttribute('required'));

            if (selectedCountry === 'United States') {
                billingStateSection.style.display = 'block';
                billingStateFields.forEach(field => field.setAttribute('required', 'required'));
            } else if (selectedCountry === 'Canada') {
                billingProvinceSection.style.display = 'block';
                billingProvinceFields.forEach(field => field.setAttribute('required', 'required'));
            } else if (selectedCountry === 'Other') {
                billingCountryOtherSection.style.display = 'block';
                billingCountryOtherFields.forEach(field => field.setAttribute('required', 'required'));
            }
        }
        billingCountrySelect.addEventListener('change', updateBillingFields);
        updateBillingFields();
    }

    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    const nameFields = document.querySelectorAll('#primary-adult-firstName, #primary-adult-lastName, #second-adult-firstName, #second-adult-lastName, #third-adult-firstName, #third-adult-lastName, #billing-firstName, #billing-lastName, #billing-city, #billing-country-other, #billing-region-other, #mailing-address-city, #sign-full-name');
    nameFields.forEach(field => {
        field.addEventListener('input', event => {
            const regex = /^[a-zA-Za\s]+$/;
            if (!regex.test(event.target.value)) {
                event.target.value = event.target.value.replace(/[^a-zA-Za\s]/g, '');
            }
        });
    });

    const phoneFields = document.querySelectorAll('#primary-adult-phone, #billing-zip, #billing-code, #billing-code-other, #card-number, #card-verification, #mailing-address-zip, #other-amount');
    phoneFields.forEach(field => {
        field.addEventListener('input', event => {
            const regex = /^[0-9()-\s]*$/;
            if (!regex.test(event.target.value)) {
                event.target.value = event.target.value.replace(/[^0-9()-\s]/g, '');
            }
        });
    });

    /* donation page */
    const donationAmountSelect = document.getElementById('donation-amount');
    if (donationAmountSelect) {
        const otherAmountDiv = document.querySelector('.other-amount');
        const otherAmountInput = document.getElementById('other-amount');
        donationAmountSelect.addEventListener('change', function () {
            if (donationAmountSelect.value === 'other') {
                otherAmountDiv.style.display = 'block';
                otherAmountInput.setAttribute('required', 'required');
            } else {
                otherAmountDiv.style.display = 'none';
                otherAmountInput.removeAttribute('required');
                otherAmountInput.value = '';
            }
        });
    }
});

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


