"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        thankYouModal.show();

        setTimeout(function () {
            form.submit(); 
        }, 2000);
    });
});
