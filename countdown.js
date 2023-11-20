document.addEventListener('DOMContentLoaded', function () {
    // Set the target date for the countdown
    const targetDate = new Date('December 31, 2023 23:59:59').getTime();

    // Update the countdown every 1 second
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        // Get the current date and time
        const currentDate = new Date().getTime();

        // Calculate the remaining time in milliseconds
        const remainingTime = targetDate - currentDate;

        // Check if the target date has passed
        if (remainingTime < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = 'Countdown expired!';
        } else {
            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            // Display the countdown
            document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }
});