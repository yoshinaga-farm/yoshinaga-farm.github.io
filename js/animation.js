loadAnimation = async () => {
    const res = await fetch("/components/animation.html");
    const html = await res.text();
    document.getElementById("animation").innerHTML = html;
}

loadAnimation();