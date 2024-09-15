
document.getElementById('join-submit-button').addEventListener('click', function (event) {
    event.preventDefault();

    const memberInfo = {
        FirstName: document.getElementById('adult1-firstName').value,
        LastName: document.getElementById('adult1-lastName').value,
        Phone: document.getElementById('adult1-phone').value,
        Email: document.getElementById('adult1-email').value
    };

    const billingInfo = collectBillingInfo(memberInfo);
    const mailingInfo = collectMailingInfo(memberInfo, billingInfo);
    const paymentInfo = collectPaymentInfo();
    const additionalMembers = collectAdditionalMembers();
    const data = {
        MembershipType: currentMembershipId,
        MemberInfo: memberInfo,
        MemberBillingInfo: billingInfo,
        MemberMailingInfo: mailingInfo || billingInfo, // Use billing info if mailing info is not provided
        MemberPaymentInfo: paymentInfo,
        AdditionalMembers: additionalMembers
    };

    fetch('/members/members/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                alert('Membership form submitted successfully!');
                document.getElementById('join-form').reset();
                // $('#exampleModal').modal('hide');
            } else {
                // Handle server errors
                response.json().then(errorData => {
                    console.error('Server Error:', errorData);
                    alert('Error submitting membership form: ' + (errorData.message || 'Unknown error.'));
                });
            }
        })
        .catch(error => {
            console.error('Network Error:', error);
            alert('Network error submitting membership form.');
        });
});







