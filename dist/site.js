document.getElementById('year').textContent = new Date().getFullYear();
const nav = document.querySelector('.nav');
addEventListener('scroll', () => nav.classList.toggle('is-stuck', scrollY > 8), {passive:true});
