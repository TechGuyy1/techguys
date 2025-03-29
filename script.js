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
// New code

const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('inert', '')
  }
  else{
    // desktop device
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

// For Bookmark Links
// const navLinks = document.querySelectorAll('nav a')
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     closeSidebar()
//   })
// })

updateNavbar(media)