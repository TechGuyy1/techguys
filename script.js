function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}


// Simulating cursor movement
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const actions = [
    { type: 'move', element: '#username' },
    { type: 'type', element: '#username', value: 'testuser' },
    { type: 'move', element: '#password' },
    { type: 'type', element: '#password', value: 'password123' },
    { type: 'move', element: '#submit-button' },
    { type: 'click', element: '#submit-button' }
];

function animateActions(actions) {
    let delay = 500; // Initial delay

    actions.forEach((action, index) => {
        setTimeout(() => {
            const element = document.querySelector(action.element);
            const rect = element.getBoundingClientRect();
            cursor.style.top = `${rect.top + rect.height / 2}px`;
            cursor.style.left = `${rect.left + rect.width / 2}px`;

            if (action.type === 'type') {
                let currentValue = '';
                [...action.value].forEach((char, charIndex) => {
                    setTimeout(() => {
                        currentValue += char;
                        element.value = currentValue;
                    }, charIndex * 100);
                });
            } else if (action.type === 'click') {
                setTimeout(() => {
                    element.style.backgroundColor = '#ccc';
                }, 200);
            }
        }, delay);

        delay += 1500; // Adjust delay between each action
    });
}

animateActions(actions);
