function manageCard() {
    $('.show-collapsed-content').on('click', function() {
        console.log('show');
        $(this).closest('.govuk-summary-card').toggleClass('show-content');
        return false;
    })
    $('.js-remove-card').on('click', function() {
        console.log('remove');
        $(this).closest('.govuk-summary-card').addClass('hidden');
        return false;
    })

    
};

window.onload = function() {
    manageCard();
};

