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

document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const volumeSlider = document.getElementById('volumeSlider');

    // Load saved volume and time from localStorage
    if (localStorage.getItem('audioVolume')) {
        audioPlayer.volume = localStorage.getItem('audioVolume');
        volumeSlider.value = audioPlayer.volume;
    }

    if (localStorage.getItem('audioTime')) {
        audioPlayer.currentTime = parseFloat(localStorage.getItem('audioTime'));
    }

    // Listen for changes on the slider and adjust audio volume accordingly
    volumeSlider.addEventListener('input', function() {
        audioPlayer.volume = volumeSlider.value;
        localStorage.setItem('audioVolume', volumeSlider.value);
    });

    // Save audio time whenever it changes
    audioPlayer.addEventListener('timeupdate', function() {
        localStorage.setItem('audioTime', audioPlayer.currentTime);
    });

    // Play the audio if it's not already playing
    if (!audioPlayer.paused) {
        audioPlayer.play();
    }
});
