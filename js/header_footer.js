const loadHeader = async () => {
  const res = await fetch("/components/header.html");
  const html = await res.text();
  document.getElementById("header").innerHTML = html;
}

loadHeader();

const loadFooter = async () => {
  const res = await fetch("/components/footer.html");
  const html = await res.text();
  document.getElementById("footer").innerHTML = html;
}

loadFooter();



const hamburger = document.getElementById('js-hamburger');
const nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', function () {
  // クラスがあれば削除、なければ追加（トグル）
  hamburger.classList.toggle('is-open');
  nav.classList.toggle('is-open');
});