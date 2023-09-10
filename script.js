document.addEventListener("DOMContentLoaded", function () {

    // Current Day of the Week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const currentDayOfTheWeek = daysOfWeek[currentDayIndex];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDayOfTheWeek}`;

    // Current UTC Time
    function updateUTCTime() {
        const currentUTCTime = new Date().getTime();
        const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
        utcTimeElement.textContent = `Current UTC Time: ${currentUTCTime} milliseconds`;
    }
    
    // Update the UTC time every 1000 milliseconds (1 second)
    setInterval(updateUTCTime, 1000);
});