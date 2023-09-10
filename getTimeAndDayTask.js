document.addEventListener("DOMContentLoaded", function () {

    // Current Day of the Week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const currentDayOfTheWeek = daysOfWeek[currentDayIndex];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDayOfTheWeek}`;

    // Current UTC Time
    const currentUTCTime = new Date().getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${currentUTCTime} milliseconds`;

    // GitHub URL
    const githubURL = "https://github.com/yourusername/your-repo";
    const githubLink = document.querySelector('[data-testid="githubURL"]');
    githubLink.href = githubURL;
});