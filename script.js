const divider = document.getElementById('divider');
const container = document.getElementById('container');
const chatgpt = document.getElementById('chatgpt');
const embed = document.getElementById('embed');

let isDragging = false;

divider.addEventListener('mousedown', (e) => {
    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    let containerRect = container.getBoundingClientRect();
    let offset = e.clientX - containerRect.left;

    let chatgptWidth = (offset / containerRect.width) * 100;
    let embedWidth = 100 - chatgptWidth;

    if (chatgptWidth > 10 && embedWidth > 10) {
        chatgpt.style.width = chatgptWidth + '%';
        embed.style.width = embedWidth + '%';
    }
});

document.addEventListener('mouseup', (e) => {
    isDragging = false;
});
