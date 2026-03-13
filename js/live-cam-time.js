const liveCamHour = () => {

    const now = new Date();
    const hour = now.getHours();
    document.getElementById("live-cam-hour").textContent = `販売所のライブ写真(${hour}:00)`;

}

liveCamHour();
