var shown = false;

$(document).ready(function() {
    $('#email').on('click', function() {
        if (shown) {
            $('#email').html("Show my email");
            shown = false;
        } else {
            var myemail = "<a href='mailto:pawarat" + "@" + "mail.uc.edu'>pawarat" + "@" + "mail.uc.edu</a>";
            $('#email').html(myemail);
            shown = true;
        }
    });
});
