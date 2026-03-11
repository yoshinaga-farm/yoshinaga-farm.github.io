const now = new Date();
const month = now.getMonth() + 1;
document.getElementById("main__title--monthly").textContent = month + "月の野菜";
console.log(month);