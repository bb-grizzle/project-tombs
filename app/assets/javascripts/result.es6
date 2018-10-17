const renderUserLog = () => {
    $('.tombs-profile').fadeOut();
    $('.tombs-profile-detail').delay(500).fadeIn();
    $('footer').delay(500).fadeIn();
}

const clearUserLog = () => {
    $("input[name='addTombs']").prop("checked", false);
    $("textarea[name='addTombs-text']").val("");
    $("input[name='addTombs-image']").val("");
}

const addTombSubmit = () => {
    $('label[for="toggle"] img').trigger("click");
}