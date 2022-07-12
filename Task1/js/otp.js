$('.digit-group').find('input').each(function () {
    $(this).attr('maxlength', 1);
    $(this).on('keyup', function (e) {
        var parent = $($(this).parent());

        if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find('input#' + $(this).data('previous'));

            if (prev.length) {
                $(prev).select();
            }
        } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = parent.find('input#' + $(this).data('next'));

            if (next.length) {
                $(next).select();
            } else {
                if (parent.data('autosubmit')) {
                    parent.submit();
                }
            }
        }
    });
});


const otp = () => {
    const digit_1 = $('#digit-1');
    const digit_2 = $('#digit-2');
    const digit_3 = $('#digit-3');
    const digit_4 = $('#digit-4');
    console.log(digit_1);
    if (digit_1 == '1' && digit_2 == '2' && digit_3 == '3' && digit_4 == '4') {
        alert('OTP is correct login success');
    }
}
