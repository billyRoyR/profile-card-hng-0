const elTime = document.querySelector('#user-time');

function renderTime() {
    const now = Date.now();
    if (elTime) elTime.textContent = String(now);
}
renderTime();
const timeInterval = setInterval(renderTime, 1000);


window.addEventListener('unload', () => {
    clearInterval(timeInterval);
});

// contact page (implementation)

const form = document.getElementById('contactForm');
const successMsg = document.getElementById('success');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // reset previous messages
    document.querySelectorAll('.error').forEach(e => e.textContent = '');
    successMsg.hidden = true;

    if (!name.value.trim()) {
        document.getElementById('error-name').textContent = 'Full name is required.';
        valid = false;
    }

    if (!email.value.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)) {
        document.getElementById('error-email').textContent = 'Enter a valid email address.';
        valid = false;
    }

    if (!subject.value.trim()) {
        document.getElementById('error-subject').textContent = 'Subject is required.';
        valid = false;
    }

    if (message.value.trim().length < 10) {
        document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
        valid = false;
    }

    if (valid) successMsg.hidden = false;
});
