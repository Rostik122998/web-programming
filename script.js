localStorage.setItem('browserInfo', navigator.userAgent);
document.getElementById('footer-info').innerText = "Ваш браузер/ОС: " + localStorage.getItem('browserInfo');

const variant = 22;
fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
    .then(response => response.json())
    .then(data => {
        const commentsDiv = document.getElementById('comments');
        commentsDiv.innerHTML = '';
 
        data.forEach(comment => {
            commentsDiv.innerHTML += `<p><b>${comment.email}:</b> ${comment.body}</p><hr>`;
        });
    });

const modal = document.getElementById('modal');

setTimeout(() => {
    modal.style.display = 'block';
}, 60000);

document.getElementById('close-modal').onclick = () => {
    modal.style.display = 'none';
};

const body = document.body;
const currentHour = new Date().getHours();

if (currentHour >= 7 && currentHour < 21) {
    body.classList.remove('dark-mode');
} else {
    body.classList.add('dark-mode');
}

document.getElementById('theme-btn').onclick = () => {
    body.classList.toggle('dark-mode');
};