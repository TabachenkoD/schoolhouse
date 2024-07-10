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

    /* page Join.html and Know before you go*/
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

    /* exhibits page */
    const modal = document.getElementById('exampleModal');
    if (modal) {
        const modalTitle = modal.querySelector('.modal-title');
        const modalBody = modal.querySelector('.modal-body');

        document.querySelectorAll('.lobby-section-item').forEach(function (item) {
            item.addEventListener('click', function () {
                var title = item.getAttribute('data-title');
                var content = item.getAttribute('data-content');

                modalTitle.textContent = title;
                modalBody.innerHTML = content;

                var bootstrapModal = new bootstrap.Modal(modal);
                bootstrapModal.show();
            });
        });
    }

    /* about page */
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    /* general admission */
    const datepickerElement = document.getElementById('datepicker-general-admission');
    const timepickerElement = document.getElementById('timepicker-general-admission');

    if (datepickerElement && timepickerElement) {
        const availableDates = ["2024-07-10", "2024-07-12", "2024-07-15"].map(date => new Date(date));
        const datepickerInput = document.getElementById('selected-date-display');
        const changeDateLink = document.getElementById('change-date-link');
        const changeTimeLink = document.getElementById('change-time-link');
        const timepickerInput = document.getElementById('selected-time-display');

        const nearestDate = availableDates[0];
        datepickerInput.innerHTML = nearestDate ? nearestDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : '';

        const datepicker = new tempusDominus.TempusDominus(datepickerElement, {
            defaultDate: nearestDate,
            restrictions: {
                enabledDates: availableDates,
                daysOfWeekDisabled: [0, 1]
            },
            localization: {
                locale: 'en',
                format: 'MM/dd/yyyy'
            },
            display: {
                inline: true,
                components: {
                    calendar: true,
                    date: true,
                    month: true,
                    year: true,
                    decades: true,
                    clock: false,
                }
            }
        });

        datepicker.subscribe(tempusDominus.Namespace.events.change, (e) => {
            const selectedDate = e.date;
            datepickerInput.innerHTML = selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : '';
        });

        const nearestTime = new Date();
        nearestTime.setHours(10);
        nearestTime.setMinutes(0);
        timepickerInput.innerHTML = nearestTime ? nearestTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : '';

        const timepicker = new tempusDominus.TempusDominus(timepickerElement, {
            defaultDate: nearestTime,
            localization: {
                locale: 'en',
                format: 'hh:mm a'
            },
            display: {
                inline: true,
                components: {
                    calendar: false,
                    date: false,
                    month: false,
                    year: false,
                    decades: false,
                    clock: true,
                    hours: true,
                    minutes: true,
                    seconds: false,
                    useTwentyfourHour: false
                }
            }
        });

        timepicker.subscribe(tempusDominus.Namespace.events.change, (e) => {
            const selectedTime = e.date;
            timepickerInput.innerHTML = selectedTime ? selectedTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : '';
        });

        changeDateLink.addEventListener('click', (event) => {
            event.preventDefault();
            datepickerElement.style.display = datepickerElement.style.display === 'none' ? 'block' : 'none';
        });

        changeTimeLink.addEventListener('click', (event) => {
            event.preventDefault();
            timepickerElement.style.display = timepickerElement.style.display === 'none' ? 'block' : 'none';
        });

        document.addEventListener('click', (event) => {
            const datepickerElement = document.getElementById('datepicker-general-admission');
            const timepickerElement = document.getElementById('timepicker-general-admission');

            const isClickInsideDatepicker = datepickerElement.contains(event.target) || event.target === datepickerElement || event.target.id === 'change-date-link';
            const isClickInsideTimepicker = timepickerElement.contains(event.target) || event.target === timepickerElement || event.target.id === 'change-time-link';

            if (!isClickInsideDatepicker) {
                datepickerElement.style.display = 'none';
            }

            if (!isClickInsideTimepicker) {
                timepickerElement.style.display = 'none';
            }
        });

        const quantityNumber = document.querySelectorAll('.quantity');
        quantityNumber.forEach(field => {
            field.addEventListener('input', event => {
                const value = event.target.value;
                const cleanedValue = value.replace(/[^0-9]/g, '');
                if (value !== cleanedValue) {
                    event.target.value = cleanedValue;
                }
            });
        });

        const toggleBtn = document.getElementsByClassName('general-admission-hide-btn')
        toggleBtn[0].addEventListener('click', (e) => {
            e.preventDefault();
            const firstStep = document.getElementById('general-admission-first-step');
            const secondStep = document.getElementById('general-admission-second-step');

            firstStep.classList.add('hidden');
            secondStep.classList.remove('hidden');
        });


        const nextBtn = document.querySelector('.continue-to-payment-btn');
        const form = document.getElementById('general-admission-form-1');
        const secondStep = document.getElementById('general-admission-second-step');
        const thirdStep = document.getElementById('general-admission-third-step');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
        });

        nextBtn.addEventListener('click', function (event) {
            event.preventDefault();
            if (form.checkValidity()) {
                secondStep.classList.add('hidden');
                thirdStep.classList.remove('hidden');

                const formData = new FormData(form);
                /* formData.forEach((value, key) => { */
                    console.log(formData)
                /* }); */
            } else {
                form.classList.add('was-validated');
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


