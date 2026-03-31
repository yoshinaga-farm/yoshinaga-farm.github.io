const liveCamHour = () => {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");
  const msec = Math.floor(now.getMilliseconds() / 10);
  const msecFix = msec.toString().aear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const week = now.getDay();

  const weekList = [
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
    "日曜日",
  ];
  const weekStr = weekList[week];

  document.getElementById("live-cam-hour").textContent =
    `(${year}/${month}/${day} ${weekStr}  ${hour}:${minute}:${second}.${msecFix})`;
};

liveCamHour();

setInterval(liveCamHour,10);
