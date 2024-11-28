"use strict";

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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

    form.addEventListener('submit', async function (e) {
        e.preventDefault(); // Prevent default form submission

        // Collect form data
        const name = document.getElementById('name').value;
        const moment = document.getElementById('moment').value;

        try {
            // Send POST request to backend
            const response = await fetch('http://localhost:3000/stories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, moment }),
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                thankYouModal.show(); // Show thank-you modal after successful submission
                form.reset(); // Clear the form
            } else {
                console.error('Error:', await response.text());
                alert('Error submitting the form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred.');
        }
    });
});

document.addEventListener('DOMContentLoaded', async function () {
    const storiesContainer = document.getElementById('storiesContainer'); // Container for sticky notes
    const modal = document.getElementById('storyModal'); // Modal element
    const modalTitle = document.getElementById('modalTitle'); // Modal title element
    const modalContent = document.getElementById('modalContent'); // Modal content element

    try {
        const response = await fetch('http://localhost:3000/stories'); // Adjust URL to match your backend
        if (response.ok) {
            const stories = await response.json(); // Parse the JSON response

            // Create a sticky note for each story
            stories.forEach(story => {
                const storyElement = document.createElement('div');
                storyElement.className = 'story'; // Apply sticky note style
                storyElement.innerHTML = `
                    <h3>${story.id}. ${story.name}</h3>
                    <p>${story.moment}</p>
                `;
                storiesContainer.appendChild(storyElement);

                // Add click event to display full story in a modal
                storyElement.addEventListener('click', () => {
                    // Create a modal for the full content
                    const modalContent = `
                        <div class="modal-overlay">
                            <div class="modal-content">
                                <h3>${story.id}. ${story.name}</h3>
                                <p>${story.moment}</p>
                                <button class="close-modal">Close</button>
                            </div>
                        </div>
                    `;

                    // Append modal to the body
                    document.body.insertAdjacentHTML('beforeend', modalContent);

                    // Add event listener to close the modal
                    document.querySelector('.close-modal').addEventListener('click', () => {
                        document.querySelector('.modal-overlay').remove();
                    });
                });
            });
        } else {
            console.error('Failed to fetch stories:', await response.text());
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
