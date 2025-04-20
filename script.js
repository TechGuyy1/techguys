// function toggleMenu() {
//     const nav = document.querySelector('.nav');
//     nav.classList.toggle('active');
// }


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

let popup=document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popup");

}
function clsoePoppu(){
  popup.classList.add("close-popup");

}

function openPopup(pageUrl) {
  document.getElementById("popupIframe").src = pageUrl;
  document.getElementById("popupModal").style.display = "block";
}

function closePopup() {
  document.getElementById("popupModal").style.display = "none";
  document.getElementById("popupIframe").src = "";
}

// Optional: Close modal when clicking outside content
window.onclick = function(event) {
  const modal = document.getElementById("popupModal");
  if (event.target === modal) {
    closePopup();
  }
}
//Typing effects
const speed = 75; // typing speed per character in ms
    const h2s = document.querySelectorAll('h1,h2');
    // const h1s = document.querySelectorAll('h1');

    function typeEffect(element, text, index, callback) {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(() => {
          typeEffect(element, text, index + 1, callback);
        }, speed);
      } else {
        element.style.borderRight = "none"; // remove cursor
        if (callback) callback();
      }
    }

    function startTypingAllH2s(i = 0) {
      if (i < h2s.length) {
        const h2 = h2s[i];
        const fullText = h2.textContent;
        h2.textContent = '';
        typeEffect(h2, fullText, 0, () => {
          startTypingAllH2s(i + 1); // start next h2 after current is done
        });
      }
    }

    function startTypingAllH1s(i = 0) {
      if (i < h1s.length) {
        const h1 = h1s[i];
        const fullText = h1.textContent;
        h1.textContent = '';
        typeEffect(h1, fullText, 0, () => {
          startTypingAllH1s(i + 1); // start next h1 after current is done
        });
      }
    }
    window.onload = () => startTypingAllH1s();
    window.onload = () => startTypingAllH2s();
    
    function showForm() {
      document.getElementById('registrationForm').style.display = 'block';
    }
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form refresh

      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
      const address1 = document.getElementById('address1').value;
      const city = document.getElementById('city').value;
      const state = document.getElementById('state').value;
      const country = document.getElementById('country').value;

      if (!firstName || !lastName || !gender || !address1 || !city || !state || !country) {
        alert("Please fill in all required fields.");
        return;
      }

      const registrationNumber = 'REG' + Math.floor(100000 + Math.random() * 900000);

      document.getElementById('message').innerText = 
        `🎉 Registration successful! Your registration number is ${registrationNumber}.`;
        document.getElementById('registrationForm').reset();

    });
updateNavbar(media)