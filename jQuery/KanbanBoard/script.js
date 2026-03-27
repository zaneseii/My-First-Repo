$(document).ready(function() {

        // Make all card lists sortable AND connected to each other
        // connectWith: '.card-list' lets you drag cards between any lane
        $('.card-list').sortable({
            connectWith: '.card-list',
            placeholder: 'ui-sortable-placeholder',
            tolerance: 'pointer'
        });

    });