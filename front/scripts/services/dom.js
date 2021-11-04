export { starter };
import { applyTheme } from './event-handlers';
import { shortenUrl, addUser, loginUser } from '../network/api.js';

const starter = async () => {
    const name = localStorage.getItem('name');
    if(name) {
        document.querySelector('.hello-user').textContent = `Hello ${name}`;
        document.getElementById('sign-up-link').classList.add('display-none');
        document.querySelector('.intro').classList.add('display-none');

    }

    // dark/light theme
    document.addEventListener("DOMContentLoaded", () => {
        const savedTheme = localStorage.getItem("theme") || "auto";
        
        applyTheme(savedTheme);
        
        for(const optionElement of document.querySelectorAll("#select-theme option")) {
            optionElement.selected = savedTheme === optionElement.value;
        }
        
        document.getElementById("select-theme").addEventListener("change", function () {
            localStorage.setItem("theme", this.value);
            applyTheme(this.value);
        });
    });

    //hamburger menu
    const hamburger = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav--visible");
    })

    document.getElementById('shorten-button').addEventListener('click', async () => {
        const url = document.getElementById('shorten-input').value;
        const shortUrl = await shortenUrl(url);
        document.querySelector('.output').classList.remove('display-none');
        document.querySelector('.long-link').textContent = url;
        const shortLinkElem = document.getElementById('short-link');
        shortLinkElem.href = shortUrl;
        shortLinkElem.textContent = shortUrl;
    })

    document.getElementById('copy-button').addEventListener('click', () => {
        const cb = navigator.clipboard;
        const shortLinkElem = document.getElementById('short-link');
        
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(shortLinkElem);
        selection.removeAllRanges();
        selection.addRange(range);

        cb.writeText(shortLinkElem.textContent);
    })

    document.getElementById('log-in-link').addEventListener('click', () => {
        closePopups();
        document.getElementById('log-in-form').classList.remove('display-none');
    })
    document.querySelectorAll('.popup .close-btn').forEach(elem => elem.addEventListener('click', () => {
        closePopups();
    }));

    document.getElementById('sign-up-link').addEventListener('click', () => {
        closePopups();
        document.getElementById('sign-up-form').classList.remove('display-none');
    })
    document.getElementById('get-started-button').addEventListener('click', () => {
        closePopups();
        document.getElementById('sign-up-form').classList.remove('display-none');
    })


    document.getElementById('sign-up-button').addEventListener('click', () => {
        const name = document.getElementById('sign-up-name').value;
        let isName = true;
        name.split(' ').forEach(word => {
            if(!validator.isAlpha(word)) {
                isName = false;
                return;
            }
        });
        if(!isName) {
            document.getElementById('sign-up-invalid-message').textContent = "invalid name";
            return;
        }
        const email = document.getElementById('sign-up-email').value;
        const isEmail = validator.isEmail(email);
        if(!isEmail) {
            document.getElementById('sign-up-invalid-message').textContent = "invalid email";
            return;
        }
        const password = document.getElementById('sign-up-password').value;
        const isPassword = validator.isEmpty(password);
        if(isPassword) {
            document.getElementById('sign-up-invalid-message').textContent = "invalid password";
            return;
        }

        addUser({ name, email, password });
        closePopups();
    })

    document.getElementById('log-in-button').addEventListener('click', async () => {
        const email = document.getElementById('log-in-email').value;
        const isEmail = validator.isEmail(email);
        if(!isEmail) {
            document.getElementById('log-in-invalid-message').textContent = "invalid email";
            return;
        }
        const password = document.getElementById('log-in-password').value;
        const isPassword = validator.isEmpty(password);
        if(isPassword) {
            document.getElementById('log-in-invalid-message').textContent = "invalid password";
            return;
        }

        const userName = await loginUser(email, password);
        if(userName) {
            localStorage.setItem('name', userName);
            window.location.reload();
        }
        closePopups();
    })
};

function closePopups() {
    document.querySelectorAll('.popup').forEach(elem => elem.classList.add('display-none'));
}