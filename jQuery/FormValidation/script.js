$(document).ready(function () {
    $('#preferred-date').datepicker({
        minDate: 0
    });

    $('#vacc-form').submit(function (event) {
        event.preventDefault();

        var firstName = $('#first-name').val().trim();
        var lastName = $('#last-name').val().trim();
        var date = $('#preferred-date').val().trim();
        var vaccineType = $('#vaccine-type').val();

        $('input, select').removeClass('error');

        if (firstName === '') {
            $('#first-name').addClass('error');
            alert("First name can't be blank.");
            return;
        }

        if (lastName === '') {
            $('#last-name').addClass('error');
            alert("Last name can't be blank.");
            return;
        }

        if (date === '') {
            $('#preferred-date').addClass('error');
            alert('Please select a preferred date.');
            return;
        }

        if (vaccineType === '') {
            $('#vaccine-type').addClass('error');
            alert('Please select a vaccine type.');
            return;
        }

        alert(
            'Success, ' +
                firstName +
                ' ' +
                lastName +
                '! Your ' +
                vaccineType +
                ' vaccination is reserved on ' +
                date +
                '.'
        );

        $('#vacc-form')[0].reset();
        $('input, select').removeClass('error');
    });
});