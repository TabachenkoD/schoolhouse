var SERVER_URL = "https://shm.sheynpartners.com/api";
var SERVER_IMG_EXHIBITS_URL = "http://shm.sheynpartners.com/api/Content/Images/Exhibits";


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

    /* index.html */
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        fetchMainPageData();
    }


    /* classes */
    var carouselInner = document.getElementById('carousel-inner');

    if (carouselInner) {
        function setupCarousel(images) {
            var carouselIndicators = document.getElementById('carousel-indicators');
            carouselInner.innerHTML = '';
            carouselIndicators.innerHTML = '';

            images.forEach(function (src, index) {
                var div = document.createElement('div');
                div.className = 'carousel-item' + (index === 0 ? ' active' : '');
                var img = document.createElement('img');
                img.src = src;
                img.className = 'd-block w-100';
                div.appendChild(img);
                carouselInner.appendChild(div);

                var button = document.createElement('button');
                button.type = 'button';
                button.dataset.bsTarget = '#carouselExampleIndicators';
                button.dataset.bsSlideTo = index;
                if (index === 0) {
                    button.className = 'active';
                    button.setAttribute('aria-current', 'true');
                }
                button.setAttribute('aria-label', 'Slide ' + (index + 1));
                carouselIndicators.appendChild(button);
            });
        }

        document.querySelectorAll('.classes-thumbnail-container, .btn-gallery').forEach(function (element) {
            element.addEventListener('click', function () {
                var images = JSON.parse(this.getAttribute('data-images'));
                setupCarousel(images);
            });
        });
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

    const billingCountrySelects = document.querySelectorAll('.billing-country-select');
    function updateBillingFields(selectElement) {
        const form = selectElement.closest('form');
        const billingStateSection = form.querySelector('.billing-state');
        const billingProvinceSection = form.querySelector('.billing-province');
        const billingCountryOtherSection = form.querySelector('.billing-country-other');

        const billingStateFields = billingStateSection.querySelectorAll('select, input');
        const billingProvinceFields = billingProvinceSection.querySelectorAll('select, input');
        const billingCountryOtherFields = billingCountryOtherSection.querySelectorAll('select, input');

        const billingStateInput = billingStateSection.querySelector('#billing-state');
        const billingZip = form.querySelector('#billing-zip');
        const billingProvinceInput = billingProvinceSection.querySelector('#billing-province');
        const billingPostalCode = form.querySelector('#billing-code');
        const billingCountryOtherInput = form.querySelector('#billing-country-other');
        const billingRegionInput = form.querySelector('#billing-region-other');
        const billingCodeOtherInput = form.querySelector('#billing-code-other');

        const selectedCountry = selectElement.value;

        billingStateSection.style.display = 'none';
        billingProvinceSection.style.display = 'none';
        billingCountryOtherSection.style.display = 'none';

        billingStateFields.forEach(field => field.removeAttribute('required'));
        billingProvinceFields.forEach(field => field.removeAttribute('required'));
        billingCountryOtherFields.forEach(field => field.removeAttribute('required'));

        if (selectedCountry === 'United States') {
            billingStateSection.style.display = 'block';
            billingStateFields.forEach(field => field.setAttribute('required', 'required'));
            billingProvinceInput.value = "";
            billingPostalCode.value = "";
            billingCountryOtherInput.value = "";
            billingRegionInput.value = "";
            billingCodeOtherInput.value = "";
        } else if (selectedCountry === 'Canada') {
            billingProvinceSection.style.display = 'block';
            billingProvinceFields.forEach(field => field.setAttribute('required', 'required'));
            billingStateInput.value = "";
            billingZip.value = "";
            billingCountryOtherInput.value = "";
            billingRegionInput.value = "";
            billingCodeOtherInput.value = "";
        } else if (selectedCountry === 'Other') {
            billingCountryOtherSection.style.display = 'block';
            billingCountryOtherFields.forEach(field => field.setAttribute('required', 'required'));
            billingStateInput.value = "";
            billingZip.value = "";
            billingProvinceInput.value = "";
            billingPostalCode.value = "";
        }
    }

    billingCountrySelects.forEach(selectElement => {
        selectElement.addEventListener('change', () => updateBillingFields(selectElement));
        updateBillingFields(selectElement);
    });

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

    const nameFields = document.querySelectorAll('#primary-adult-firstName, #primary-adult-lastName, #second-adult-firstName, #second-adult-lastName, #third-adult-firstName, #third-adult-lastName, #billing-firstName, #billing-lastName, #billing-city, #billing-country-other, #billing-region-other, #mailing-address-city, #sign-full-name', '#firstName', '#lastName');
    nameFields.forEach(field => {
        field.addEventListener('input', event => {
            const regex = /^[a-zA-Za\s]+$/;
            if (!regex.test(event.target.value)) {
                event.target.value = event.target.value.replace(/[^a-zA-Za\s]/g, '');
            }
        });
    });

    const phoneFields = document.querySelectorAll('#primary-adult-phone, #billing-zip, #billing-code, #billing-code-other, #card-number, #card-verification, #mailing-address-zip, #other-amount, #billing-phone-number');
    phoneFields.forEach(field => {
        field.addEventListener('input', event => {
            const regex = /^[0-9()-\s]*$/;
            if (!regex.test(event.target.value)) {
                event.target.value = event.target.value.replace(/[^0-9()-\s]/g, '');
            }
        });
    });

    const emailInputs = document.querySelectorAll('input[type="email"]');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    emailInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            if (emailPattern.test(input.value)) {
                input.setCustomValidity('');
            } else {
                input.setCustomValidity('Please enter a valid email address.');
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

        const form = document.getElementById('donation-form');
        const submitButton = document.querySelector('.btn-submit');
        const resetButton = document.querySelector('.btn-reset');
        const msgElem = document.getElementById('donate-server-messege');

        resetButton.addEventListener('click', () => msgElem.classList.add('hidden'));

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (form.checkValidity()) {
                const formData = new FormData(event.target);
                const jsonObject = {
                    Donor: {
                        /*  DonorId: 0, */
                        FirstName: formData.get('FirstName'),
                        LastName: formData.get('LastName'),
                        Phone: formData.get('Phone'),
                        Email: formData.get('Email'),
                        BillingFirstName: formData.get('BillingFirstName'),
                        BillingLastName: formData.get('BillingLastName'),
                        BillingAddress1: formData.get('BillingAddress1'),
                        BillingAddress2: formData.get('BillingAddress2'),
                        BillingCity: formData.get('BillingCity'),
                    },
                    DonationAmount: formData.get('DonationAmount') === 'other' ? parseFloat(formData.get('other-amount')) : parseFloat(formData.get('DonationAmount')),
                    CardType: formData.get('card-type'),
                    CardNumber: formData.get('CardNumber'),
                    CardVerificationNumber: parseInt(formData.get('CardVerificationNumber')),
                    CardExpMonth: formData.get('CardExpMonth'),
                    CardExpYear: parseInt(formData.get('CardExpYear'))
                };

                const selectedCountry = formData.get('BillingCountry');
                jsonObject.Donor.BillingCountry = selectedCountry;

                if (selectedCountry === 'United States') {
                    jsonObject.Donor.BillingState = formData.get('BillingState');
                    jsonObject.Donor.BillingZip = formData.get('BillingZip');
                } else if (selectedCountry === 'Canada') {
                    jsonObject.Donor.BillingProvince = formData.get('BillingProvince');
                    jsonObject.Donor.BillingPostalCode = formData.get('BillingPostalCode');
                } else if (selectedCountry === 'Other') {
                    jsonObject.Donor.BillingCountryOther = formData.get('BillingCountryOther');
                    jsonObject.Donor.BillingRegion = formData.get('BillingRegion');
                    jsonObject.Donor.BillingPostalCodeOther = formData.get('BillingPostalCodeOther');
                }

                const jsonString = JSON.stringify(jsonObject);

                submitButton.disabled = true;
                resetButton.disabled = true;

                fetch(`${SERVER_URL}/donations`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: jsonString
                })
                    .then(async response => {
                        if (!response.ok) {
                            const error = await response.json();
                            throw new Error(error.Message);
                        }
                        return response.json();
                    })
                    .then(() => {
                        form.reset();
                        form.classList.remove('was-validated');
                        msgElem.classList.remove('hidden');
                        msgElem.classList.add('msg-green');
                        msgElem.innerHTML = `<span>Donation successfully created</span>`;
                    })
                    .catch((error) => {
                        msgElem.classList.remove('hidden');
                        msgElem.classList.add('msg-red');
                        msgElem.innerHTML = `<span>${error}</span>`;
                    })
                    .finally(() => {
                        submitButton.disabled = false;
                        resetButton.disabled = false;
                    });
            } else {
                form.classList.add('was-validated');
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

    /* general admission */
    const datepickerElement = document.getElementById('datepicker-general-admission');
    const timepickerElement = document.getElementById('timepicker-general-admission');

    if (datepickerElement && timepickerElement) {
        const datepickerInput = document.getElementById('selected-date-display');
        const changeDateLink = document.getElementById('change-date-link');
        const changeTimeLink = document.getElementById('change-time-link');
        const timepickerInput = document.getElementById('selected-time-display');
        const timeRadios = document.querySelectorAll('input[name="scheduleTime"]');
        var sheduleDateObj;

        function getNearestWorkingDate(date) {
            const day = date.getDay();
            if (day === 0) {
                date.setDate(date.getDate() + 1);
            } else if (day === 1) {
                date.setDate(date.getDate() + 1);
            }
            return date;
        }

        function getDefaultDate() {
            const today = new Date();
            const nearestWorkingDate = getNearestWorkingDate(new Date(today));
            if (today.getDay() !== 0 && today.getDay() !== 1) {
                return today;
            } else {
                return nearestWorkingDate;
            }
        }

        const defaultDate = getDefaultDate();
        sheduleDateObj = defaultDate;

        datepickerInput.innerHTML = defaultDate ? defaultDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : '';
        const datepicker = new tempusDominus.TempusDominus(datepickerElement, {
            defaultDate: defaultDate,
            restrictions: {
                minDate: new Date(),
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
            sheduleDateObj = e.date;
            datepickerInput.innerHTML = selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : '';
        });

        function updateTimeDisplay() {
            const selectedTime = document.querySelector('input[name="scheduleTime"]:checked');
            const selectedLabel = selectedTime.closest('label').querySelector('span');
            timepickerInput.textContent = selectedLabel.textContent;
        }

        timeRadios.forEach(radio => {
            radio.addEventListener('change', updateTimeDisplay);
        });
        updateTimeDisplay()
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
            const form = document.getElementById('quantity-person-form');
            const firstStep = document.getElementById('general-admission-first-step');
            const secondStep = document.getElementById('general-admission-second-step');

            const quantityInputs = document.querySelectorAll('.quantity');
            function checkInputs() {
                let allEmpty = true;

                quantityInputs.forEach(input => {
                    if (input.value.trim() !== '') {
                        allEmpty = false;
                    }
                });

                quantityInputs.forEach(input => {
                    if (allEmpty) {
                        input.setAttribute('required', 'required');
                    } else {
                        input.removeAttribute('required');
                    }
                });
            }

            quantityInputs.forEach(input => {
                input.addEventListener('input', checkInputs);
            });

            checkInputs();

            if (form && !form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }

            firstStep.classList.add('hidden');
            secondStep.classList.remove('hidden');
        });

        const nextBtn = document.querySelector('.continue-to-payment-btn');
        const memberSubmitBtn = document.querySelector('.continue-btn-member');
        const formGeneralAdmission1 = document.getElementById('general-admission-form-1');
        const secondStep = document.getElementById('general-admission-second-step');
        const thirdStep = document.getElementById('general-admission-third-step');
        const formGeneralAdmission2 = document.getElementById('general-admission-form-2');
        const backBtnStep2 = document.getElementById('back-step-2');
        const backBtnStep3 = document.getElementById('back-step-3');

        formGeneralAdmission1.addEventListener('submit', function (event) {
            event.preventDefault();
        });

        if (nextBtn) {
            nextBtn.addEventListener('click', function (event) {
                event.preventDefault();
                if (formGeneralAdmission1.checkValidity()) {
                    secondStep.classList.add('hidden');

                    if (thirdStep) {
                        thirdStep.classList.remove('hidden');
                    }

                } else {
                    formGeneralAdmission1.classList.add('was-validated');
                }
            });
        }

        /* member admission submit */
        if (memberSubmitBtn) {
            memberSubmitBtn.addEventListener('click', function (event) {
                event.preventDefault();
                if (formGeneralAdmission1.checkValidity()) {
                    secondStep.classList.add('hidden');

                    if (thirdStep) {
                        thirdStep.classList.remove('hidden');
                    }

                    const formData = new FormData(formGeneralAdmission1);

                    console.log(formData, "memberSubmitBtn")
                } else {
                    formGeneralAdmission1.classList.add('was-validated');
                }
            });
        }

        const checkbox = document.getElementById('address-same-personal');
        if (checkbox) {
            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    formGeneralAdmission2.querySelector('#billing-firstName').value = formGeneralAdmission1.querySelector('#primary-adult-firstName').value;
                    formGeneralAdmission2.querySelector('#billing-lastName').value = formGeneralAdmission1.querySelector('#primary-adult-lastName').value;
                    formGeneralAdmission2.querySelector('#billing-email').value = formGeneralAdmission1.querySelector('#primary-adult-email').value;
                    formGeneralAdmission2.querySelector('#billing-phone-number').value = formGeneralAdmission1.querySelector('#primary-adult-phone').value;
                    formGeneralAdmission2.querySelector('#billing-address-1').value = formGeneralAdmission1.querySelector('#billing-address-general-admission').value;
                    formGeneralAdmission2.querySelector('#billing-city').value = formGeneralAdmission1.querySelector('#billing-city').value;
                    formGeneralAdmission2.querySelector('#billing-state').value = formGeneralAdmission1.querySelector('#billing-state').value;
                    formGeneralAdmission2.querySelector('#billing-province').value = formGeneralAdmission1.querySelector('#billing-province').value;
                    formGeneralAdmission2.querySelector('#billing-country').value = formGeneralAdmission1.querySelector('#country').value;
                    formGeneralAdmission2.querySelector('#billing-zip').value = formGeneralAdmission1.querySelector('#billing-zip').value;
                    formGeneralAdmission2.querySelector('#billing-country-other').value = formGeneralAdmission1.querySelector('#billing-country-other').value;
                    formGeneralAdmission2.querySelector('#billing-region-other').value = formGeneralAdmission1.querySelector('#billing-region-other').value;
                    formGeneralAdmission2.querySelector('#billing-code-other').value = formGeneralAdmission1.querySelector('#billing-code-other').value;
                    formGeneralAdmission2.querySelector('#billing-code').value = formGeneralAdmission1.querySelector('#billing-code').value;

                    updateBillingFields(formGeneralAdmission1.querySelector('#country'));
                    updateBillingFields(formGeneralAdmission2.querySelector('#billing-country'));

                    formGeneralAdmission2.querySelectorAll('#billing-firstName, #billing-lastName, #billing-email, #billing-address-1, #billing-country, #billing-city, #billing-state, #billing-zip, #billing-province, #billing-code, #billing-country-other, #billing-region-other, #billing-code-other').forEach(field => {
                        if (field.value !== '' && field.id !== 'address-same-personal') {
                            field.setAttribute('readonly', true);
                            field.classList.add('input-disabled');
                            if (field.tagName.toLowerCase() === 'select') {
                                field.setAttribute('disabled', true);
                            }
                        }
                    });
                } else {
                    formGeneralAdmission2.querySelectorAll('input, textarea, select').forEach(field => {
                        if (field.id !== 'address-same-personal') {
                            field.removeAttribute('readonly');
                            field.removeAttribute('disabled');
                            field.classList.remove('input-disabled');
                        }
                    });
                }
            });
        }

        const finalGeneralAdmSbt = document.querySelector('.final-submit-btn');
        if (finalGeneralAdmSbt) {
            finalGeneralAdmSbt.addEventListener('click', (e) => {
                e.preventDefault();
                if (formGeneralAdmission2.checkValidity()) {
                    const formData1 = new FormData(formGeneralAdmission1);
                    const formData2 = new FormData(formGeneralAdmission2);

                    formData2.set('BillingCountry', formGeneralAdmission2.querySelector('#billing-country').value);
                    formData2.set('BillingState', formGeneralAdmission2.querySelector('#billing-state').value);
                    formData2.set('BillingProvince', formGeneralAdmission2.querySelector('#billing-province').value)
                    formData2.set('BillingRegion', formGeneralAdmission2.querySelector('#billing-region-other').value)

                    const selectedTime = document.querySelector('input[name="scheduleTime"]:checked').value;

                    const options = {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    };
                    const formattedDate = sheduleDateObj.toLocaleString('en-US', options);

                    function collectTickets() {
                        const tickets = [];
                        const rows = document.querySelectorAll('.table-custom tbody tr');

                        rows.forEach(row => {
                            const ticketType = row.querySelector('th').innerText.trim();
                            const quantityInput = row.querySelector('input.quantity');
                            const ticketQuantity = parseInt(quantityInput.value, 10) || 0;
                            const ticketPriceText = row.querySelector('.price-column').innerText.trim();
                            const ticketPrice = parseFloat(ticketPriceText.replace('$', '')) || 0.00;

                            if (ticketQuantity > 0) {
                                tickets.push({
                                    "TicketType": ticketType,
                                    "TicketQuantity": ticketQuantity,
                                    "TicketPrice": ticketPrice
                                });
                            }
                        });

                        return tickets;
                    }

                    const ticketsArray = collectTickets();

                    const jsonObject = {
                        ScheduleDate: formattedDate,
                        ScheduleTime: selectedTime,
                        Tickets: ticketsArray,
                        VisitorInfo: {
                            FirstName: formData1.get('FirstName'),
                            LastName: formData1.get('LastName'),
                            Phone: formData1.get('Phone'),
                            Email: formData1.get('Email'),
                            Address1: formData1.get('Address'),
                            City: formData1.get('City'),
                        },
                        VisitorBillingInfo: {
                            FirstName: formData2.get('FirstName'),
                            LastName: formData2.get('LastName'),
                            Phone: formData2.get('Phone'),
                            Email: formData2.get('Email'),
                            Company: formData2.get('Company'),
                            Address1: formData2.get('Address1'),
                            Address2: formData2.get('Address2'),
                            City: formData2.get('City'),
                        },
                        VisitorPaymentInfo: {
                            CardType: formData2.get('card-type'),
                            CardNumber: formData2.get('CardNumber'),
                            CardExpMonth: formData2.get('CardExpMonth'),
                            CardExpYear: parseInt(formData2.get('CardExpYear')),
                            CardCvv: parseInt(formData2.get('CardVerificationNumber')),
                        }
                    };

                    const selectedCountry = formData1.get('BillingCountry');
                    const selectBillingCountry = formData2.get('BillingCountry');


                    if (selectedCountry === 'United States') {
                        jsonObject.VisitorInfo.Country = selectedCountry;
                        jsonObject.VisitorInfo.State = formData1.get('BillingState');
                        jsonObject.VisitorInfo.Zip = formData1.get('BillingZip');
                    } else if (selectedCountry === 'Canada') {
                        jsonObject.VisitorInfo.Country = selectedCountry;
                        jsonObject.VisitorInfo.State = formData1.get('BillingProvince');
                        jsonObject.VisitorInfo.Zip = formData1.get('BillingPostalCode');
                    } else if (selectedCountry === 'Other') {
                        jsonObject.VisitorInfo.Country = formData1.get('BillingCountryOther');
                        jsonObject.VisitorInfo.State = formData1.get('BillingRegion');
                        jsonObject.VisitorInfo.Zip = formData1.get('BillingPostalCodeOther');
                    }

                    if (selectBillingCountry === 'United States') {
                        jsonObject.VisitorBillingInfo.Country = selectBillingCountry;
                        jsonObject.VisitorBillingInfo.State = formData2.get('BillingState');
                        jsonObject.VisitorBillingInfo.Zip = formData2.get('BillingZip');
                    } else if (selectBillingCountry === 'Canada') {
                        jsonObject.VisitorBillingInfo.Country = selectBillingCountry;
                        jsonObject.VisitorBillingInfo.State = formData2.get('BillingProvince');
                        jsonObject.VisitorBillingInfo.Zip = formData2.get('BillingPostalCode');
                    } else if (selectBillingCountry === 'Other') {
                        jsonObject.VisitorBillingInfo.Country = formData2.get('BillingCountryOther');
                        jsonObject.VisitorBillingInfo.State = formData2.get('BillingRegion');
                        jsonObject.VisitorBillingInfo.Zip = formData2.get('BillingPostalCodeOther');
                    }

                    const jsonString = JSON.stringify(jsonObject);

                    finalGeneralAdmSbt.disabled = true;
                    backBtnStep3.disabled = true;

                    fetch(`${SERVER_URL}/reservations/generaladmission`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: jsonString
                    })
                        .then(async response => {
                            if (!response.ok) {
                                const error = await response.json();
                                throw new Error(error.Message);
                            }
                            return response.json();
                        })
                        .then(() => {
                            const timepicker = document.querySelector('#selected-time-display').innerText;
                            const reservedTime = document.getElementById('general-reserved-time');
                            reservedTime.innerHTML = `${timepicker}`;
                            const scheduledDateTime = document.getElementById('general-sheduled-time');
                            scheduledDateTime.innerHTML = `${datepickerInput.innerText}, ${timepicker}`
                            thirdStep.classList.add('hidden');
                            const genAdmissionStep4 = document.getElementById('general-admission-fourth-step');
                            genAdmissionStep4.classList.remove('hidden');

                            formGeneralAdmission1.reset();
                            formGeneralAdmission2.reset();
                        })
                        .catch((error) => {
                            const msgElem = document.getElementById('general-server-messege');
                            msgElem.classList.remove('hidden');
                            msgElem.innerHTML = `<span>${error}</span>`;
                        })
                        .finally(() => {
                            finalGeneralAdmSbt.disabled = false;
                            backBtnStep3.disabled = false;
                        });

                } else {
                    formGeneralAdmission2.classList.add('was-validated');
                }
            });
        }

        const membershipRadios = document.querySelectorAll('input[name="membership-type"]');
        if (membershipRadios.length > 0) {
            const basicGrandparentSection = document.getElementById('table-for-basic-grandparent');
            const familyPremiumSection = document.getElementById('table-for-family-premier');
            const acmSection = document.getElementById('table-for-acm');

            function updateSections() {
                basicGrandparentSection.style.display = 'none';
                familyPremiumSection.style.display = 'none';
                acmSection.style.display = 'none';

                const clearRequired = (section) => {
                    section.querySelectorAll('input').forEach(input => input.required = false);
                };

                clearRequired(basicGrandparentSection);
                clearRequired(familyPremiumSection);
                clearRequired(acmSection);

                const selectedRadio = document.querySelector('input[name="membership-type"]:checked');
                if (selectedRadio) {
                    if (selectedRadio.id === 'membership-type-basic' || selectedRadio.id === 'membership-type-grandparent') {
                        basicGrandparentSection.style.display = 'block';
                    } else if (selectedRadio.id === 'membership-type-family-premium') {
                        familyPremiumSection.style.display = 'block';
                    } else if (selectedRadio.id === 'membership-type-acm') {
                        acmSection.style.display = 'block';
                    }
                }
            }

            function updateRequiredFields(section) {
                section.querySelectorAll('tr').forEach(row => {
                    const inputs = row.querySelectorAll('input');
                    const isAnyInputFilled = Array.from(inputs).some(input => input.value.trim() !== '');

                    if (isAnyInputFilled) {
                        inputs.forEach(input => input.required = true);
                    } else {
                        inputs.forEach(input => input.required = false);
                    }
                });
            }

            function attachInputListeners(section) {
                section.querySelectorAll('input').forEach(input => {
                    input.addEventListener('input', () => {
                        updateRequiredFields(section);
                    });
                });
            }

            membershipRadios.forEach(radio => {
                radio.addEventListener('change', () => {
                    updateSections();
                    attachInputListeners(basicGrandparentSection);
                    attachInputListeners(familyPremiumSection);
                });
            });

            updateSections();
            attachInputListeners(basicGrandparentSection);
            attachInputListeners(familyPremiumSection);
        }

        if (backBtnStep2) {
            backBtnStep2.addEventListener('click', function (event) {
                event.preventDefault();
                document.getElementById('general-admission-second-step').classList.add('hidden');
                document.getElementById('general-admission-first-step').classList.remove('hidden');
            });
        }

        if (backBtnStep3) {
            backBtnStep3.addEventListener('click', function (event) {
                event.preventDefault();
                document.getElementById('general-admission-third-step').classList.add('hidden');
                document.getElementById('general-admission-second-step').classList.remove('hidden');
            });
        }
    }

    /* Calendar page */
    var calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            validRange: {
                start: new Date().toISOString().split('T')[0]
            },
            events: generateTestEvents(),
            eventClick: function (info) {
                var eventObj = info.event;

                document.getElementById('eventTitle').innerText = eventObj.title;
                document.getElementById('eventDate').innerText = eventObj.start.toLocaleDateString();
                document.getElementById('eventDescription').innerText = 'Description of the event';
                const eventCategory = document.getElementById('eventCategory');
                eventCategory.classList.add('color-picker')
                eventCategory.classList.add('fc-event');
                eventCategory.classList.add(`${eventObj.classNames[0]}`);
                eventCategory.innerText = eventObj.classNames[0];

                var modal = new bootstrap.Modal(document.getElementById('eventModal'));
                modal.show();

                document.getElementById('amount-of-children').addEventListener('change', function () {
                    var container = document.getElementById('children-details-container');
                    container.innerHTML = '';

                    var numberOfChildren = parseInt(this.value);

                    for (var i = 1; i <= numberOfChildren; i++) {
                        var childDetails = document.createElement('div');
                        childDetails.className = 'children-details d-flex flex-column gap-3';

                        var childNameDiv = document.createElement('div');
                        childNameDiv.className = 'd-flex justify-content-between align-items-center gap-3';
                        var childNameLabel = document.createElement('label');
                        childNameLabel.className = 'form-label register-form-inpits';
                        childNameLabel.setAttribute('for', 'childName' + i);
                        childNameLabel.textContent = 'Child name';
                        var childNameInput = document.createElement('input');
                        childNameInput.type = 'text';
                        childNameInput.className = 'form-control';
                        childNameInput.id = 'childName' + i;
                        childNameInput.setAttribute('name', 'childName' + i);
                        childNameInput.required = true;
                        childNameDiv.appendChild(childNameLabel);
                        childNameDiv.appendChild(childNameInput);

                        var childAgeDiv = document.createElement('div');
                        childAgeDiv.className = 'd-flex justify-content-between align-items-center gap-3';
                        var childAgeLabel = document.createElement('label');
                        childAgeLabel.className = 'form-label register-form-inpits';
                        childAgeLabel.setAttribute('for', 'childAge' + i);
                        childAgeLabel.textContent = 'Child Age';
                        var childAgeInput = document.createElement('input');
                        childAgeInput.type = 'text';
                        childAgeInput.className = 'form-control';
                        childAgeInput.id = 'childAge' + i;
                        childAgeInput.setAttribute('name', 'childAge' + i);
                        childAgeInput.required = true;
                        childAgeDiv.appendChild(childAgeLabel);
                        childAgeDiv.appendChild(childAgeInput);

                        childDetails.appendChild(childNameDiv);
                        childDetails.appendChild(childAgeDiv);
                        container.appendChild(childDetails);
                    }
                });

                const addToCartBtn = document.getElementById('add-to-cart-btn');
                addToCartBtn.addEventListener('click', event => {
                    const registerToClass = document.getElementById('register-to-classes-form');
                    if (!registerToClass.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    } else {
                        const formData = new FormData(registerToClass);
                        const formValues = {};
                        formData.forEach((value, key) => {
                            formValues[key] = value;
                        });
                        console.log(formValues);
                    }
                    registerToClass.classList.add('was-validated');
                }, false);
            }
        });
        calendar.render();

        function generateTestEvents() {
            var events = [];
            var today = new Date();
            var startMonth = today.getMonth();
            var startYear = today.getFullYear();
            var eventTypes = ['Infants-and-Toddlers', 'Ages-2-5yrs', 'Ages-3-5yrs', 'Ages-3-7-Years', 'Grade-2', 'All-Ages'];

            for (var monthOffset = 0; monthOffset < 2; monthOffset++) {
                var currentMonth = startMonth + monthOffset;
                var daysInMonth = new Date(startYear, currentMonth + 1, 0).getDate();

                for (var day = 1; day <= daysInMonth; day++) {
                    var date = new Date(startYear, currentMonth, day);
                    var dayOfWeek = date.getDay();

                    if (dayOfWeek !== 1 && dayOfWeek !== 2) { // Exclude Sundays (0) and Mondays (1)
                        for (var eventIndex = 1; eventIndex <= 3; eventIndex++) {
                            var eventType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
                            events.push({
                                id: 'event-' + startYear + '-' + currentMonth + '-' + day + '-' + eventIndex,
                                title: `Event ${eventIndex}`,
                                start: date.toISOString().split('T')[0],
                                className: eventType
                            });
                        }
                    }
                }
            }
            return events;
        }

        const eventModal = document.getElementById('eventModal');
        const registerModal = document.getElementById('registerModal');

        eventModal.addEventListener('hidden.bs.modal', () => {
            var eventCategory = document.getElementById('eventCategory');
            eventCategory.className = '';
        });

        registerModal.addEventListener('hidden.bs.modal', () => {
            const registerForm = registerModal.querySelector('#register-to-classes-form');
            registerForm.querySelector('#children-details-container').innerHTML = "";
            registerForm.reset();
            registerForm.classList.remove('was-validated');
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

/* index.js Classes and Exhibits */
async function fetchMainPageData() {
    showSkeleton(true, 'classes-content', 'skeleton-events');
    showSkeleton(true, 'exhibits-content', 'skeleton-exhibits-item');

    fetchEvents();
    fetchExhibits();
}

async function fetchEvents() {
    try {
        const response = await fetch(`${SERVER_URL}/events`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayEvents(data);
    } catch (error) {
        displayEvents([]);
    } finally {
        showSkeleton(false, 'classes-content', 'skeleton-events');
    }
}

async function fetchExhibits() {
    try {
        const response = await fetch(`${SERVER_URL}/exhibits`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayExhibits(data);
    } catch (error) {
        displayExhibits([]);
    } finally {
        showSkeleton(false, 'exhibits-content', 'skeleton-exhibits-item');
    }
}

function showSkeleton(show, containerId, skeletonClass) {
    const container = document.getElementById(containerId);
    const skeletons = container.querySelectorAll(`.${skeletonClass}`);
    skeletons.forEach(skeleton => {
        skeleton.style.display = show ? 'block' : 'none';
    });
}

function displayEvents(data) {
    const container = document.getElementById('classes-content');
    container.innerHTML = '';

    const maxEvents = 7;
    let count = 0;

    if (data.length > 0) {
        data.forEach(item => {
            if (count < maxEvents) {
                const div = document.createElement('div');
                div.classList.add('events-item');
                div.innerHTML = `<a href="#" data-id="${item.ClassEventId}"><span>${item.Title}</span><p>${item.Description}</p></a>`;
                container.appendChild(div);

                div.querySelector('a').addEventListener('click', async (event) => {
                    event.preventDefault();
                    const eventId = event.currentTarget.getAttribute('data-id');
                    const eventDetails = await fetchEventDetails(eventId);

                    if (eventDetails) {
                        document.getElementById('eventTitle').textContent = eventDetails.Title;
                        document.getElementById('eventCategory').textContent = eventDetails.Category;
                        document.getElementById('eventDescription').textContent = eventDetails.Description;
                        document.getElementById('eventRecurrency').textContent = eventDetails.EventRecurrency;
                        if (eventDetails.RequirePayment) document.getElementById('requirePayment').textContent = 'Free with paid admission.'
                        const startDate = new Date(eventDetails.EventStartDate);
                        const endDate = new Date(eventDetails.EventEndDate);
                        const recurrencyDays = eventDetails.EventRecurrency.split(',').map(day => day.trim());

                        const datePicker = new tempusDominus.TempusDominus(document.getElementById('eventDatePicker'), {
                            display: {
                                components: {
                                    decades: false,
                                    year: true,
                                    month: true,
                                    date: true,
                                    hours: false,
                                    minutes: false,
                                    seconds: false
                                },
                                buttons: {
                                    today: false,
                                    clear: false,
                                    close: false
                                }
                            },
                            restrictions: {
                                minDate: startDate,
                                maxDate: endDate,
                                daysOfWeekDisabled: [0, 1, 2, 3, 4, 5, 6].filter(day => !recurrencyDays.includes(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day]))
                            },
                            localization: {
                                locale: 'en',
                                format: 'MM/dd/yyyy'
                            },
                        });

                        const selectedDateSpan = document.getElementById('selected-date');
                        datePicker.subscribe(tempusDominus.Namespace.events.change, (e) => {
                            const selectedDate = e.date;
                            selectedDateSpan.innerHTML = selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : '';
                            selectedDateSpan.style.color = '';
                        });

                        const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
                        eventModal.show();

                        document.getElementById('eventModal').addEventListener('hidden.bs.modal', () => {
                            const selectedDateSpan = document.getElementById('selected-date');
                            selectedDateSpan.textContent = 'Choose a date...';
                            selectedDateSpan.style.color = '';
                        });
                    }
                });

                count++;
            }
        });
    } else {
        const div = document.createElement('div');
        div.innerHTML = `<p>No classes or events available now</p>`;
        container.appendChild(div);
    }

    document.getElementById('registerButton').addEventListener('click', function (event) {
        const selectedDateSpan = document.getElementById('selected-date');
        const selectedDateText = selectedDateSpan.textContent.trim();

        if (selectedDateText === 'Choose a date...') {
            event.preventDefault();
            selectedDateSpan.style.color = 'red';
        } else {
            selectedDateSpan.style.color = '';

            const eventModal = bootstrap.Modal.getInstance(document.getElementById('eventModal'));
            const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));

            eventModal.hide();
            registerModal.show();
        }
    });

    document.getElementById('amount-of-children').addEventListener('change', function () {
        var container = document.getElementById('children-details-container');
        container.innerHTML = '';

        var numberOfChildren = parseInt(this.value);

        for (var i = 1; i <= numberOfChildren; i++) {
            var childDetails = document.createElement('div');
            childDetails.className = 'children-details register-form-inpits';

            var childNameDiv = document.createElement('div');
            childNameDiv.className = '';
            var childNameLabel = document.createElement('label');
            childNameLabel.className = 'form-label register-form-inpits';
            childNameLabel.setAttribute('for', 'childName' + i);
            childNameLabel.textContent = 'Child name';
            var childNameInput = document.createElement('input');
            childNameInput.type = 'text';
            childNameInput.className = 'form-control';
            childNameInput.id = 'childName' + i;
            childNameInput.setAttribute('name', 'childName' + i);
            childNameInput.required = true;
            childNameDiv.appendChild(childNameLabel);
            childNameDiv.appendChild(childNameInput);

            var childAgeDiv = document.createElement('div');
            childAgeDiv.className = '';
            var childAgeLabel = document.createElement('label');
            childAgeLabel.className = 'form-label register-form-inpits';
            childAgeLabel.setAttribute('for', 'childAge' + i);
            childAgeLabel.textContent = 'Child Age';
            var childAgeInput = document.createElement('input');
            childAgeInput.type = 'text';
            childAgeInput.className = 'form-control';
            childAgeInput.id = 'childAge' + i;
            childAgeInput.setAttribute('name', 'childAge' + i);
            childAgeInput.required = true;
            childAgeDiv.appendChild(childAgeLabel);
            childAgeDiv.appendChild(childAgeInput);

            childDetails.appendChild(childNameDiv);
            childDetails.appendChild(childAgeDiv);
            container.appendChild(childDetails);
        }
    });

    const addToCartBtn = document.getElementById('add-to-cart-btn');
    addToCartBtn.addEventListener('click', event => {
        const registerToClass = document.getElementById('register-to-classes-form');
        if (!registerToClass.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const formData = new FormData(registerToClass);
            const formValues = {};
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            console.log(formValues);
        }
        registerToClass.classList.add('was-validated');
    }, false);
}

function displayExhibits(data) {
    const container = document.getElementById('exhibits-content');
    container.innerHTML = '';

    if (data.length > 0) {
        data.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="exhibits-content-img_container">
                <img src="${SERVER_IMG_EXHIBITS_URL}/${item.ExhibitImageName}" alt="${item.Title}" />
            </div>
            <span>${item.Title}</span>`;
            container.appendChild(div);
        });
    } else {
        const div = document.createElement('div');
        div.innerHTML = `<p>No exhibits available now</p>`;
        container.appendChild(div);
    }
}

async function fetchEventDetails(eventId) {
    try {
        const response = await fetch(`${SERVER_URL}/events/${eventId}/details`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching event details:', error);
        return null;
    }
}
