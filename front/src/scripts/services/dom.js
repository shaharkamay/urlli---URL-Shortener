export { starter, indexStarter, analyticsStarter, dashboardStarter, logInStarter, signUpStarter, displayMessage };
import { applyTheme, clickCloseErrorHandler, clickShortenHandler, logOutHandler } from './event-handlers';
import { shortenUrl, addUser, loginUser, getAnalytics, getUserUrls } from '../network/api.js';

const starter = () => {
    const name = sessionStorage.getItem('name');
    if(name) {
        document.querySelector('.hello-user').textContent = `Hello ${name}`;
    } else {
        document.getElementById('log-out-button').classList.add('display-none');
    }

    // Dark/light theme
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

    //Hamburger menu
    const hamburger = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav--visible");
    })


    document.getElementById('error__close').addEventListener('click', clickCloseErrorHandler);

    document.querySelector('.errors').classList.add('display-none');

    document.getElementById('log-out-button').addEventListener('click', logOutHandler);
    
}

const indexStarter = async () => {
    const name = sessionStorage.getItem('name');
    if(name) {
        document.querySelector('.intro').classList.add('display-none');
    }
    signOptionsConfig();

    document.getElementById('shorten-button').addEventListener('click', clickShortenHandler);

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

};

const analyticsStarter = () => {

    signOptionsConfig();

    document.getElementById('analyze-button').addEventListener('click', async () => {
        const link = document.getElementById('analyze-input').value;
        const shortUrlId = link.substr(link.lastIndexOf('/') + 1);
        const analytics = await getAnalytics(shortUrlId);
        renderAnalytics(analytics);
    })
} 

const dashboardStarter = async () => {
    const userEmail = sessionStorage.getItem('userEmail');
    if(userEmail) {
        const urls = await getUserUrls(userEmail);
        renderUserUrls(urls);
    } else {
        alert('Log in first!')
        window.location.href = '/log-in';
    }
}

const logInStarter = async () => {
    if(sessionStorage.getItem('name')) {
        window.location = "/";
    }
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

        const user = await loginUser(email, password);
        if(user) {
            sessionStorage.setItem('name', user.name);
            sessionStorage.setItem('userEmail', user.email);
            window.location.reload();
        }
    })
}

const signUpStarter = async () => {
    if(sessionStorage.getItem('name')) {
        window.location = "/";
    }
    document.getElementById('sign-up-button').addEventListener('click', async () => {
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

        const user = await addUser({ name, email, password });
        if(user) {
            sessionStorage.setItem('name', user.name);
            sessionStorage.setItem('userEmail', user.email)
            window.location.reload();
        }
    })
}

function closePopups() {
    document.querySelectorAll('.popup').forEach(elem => elem.classList.add('display-none'));
}

function renderAnalytics(analytics) {
    const analyticsDiv = createElement('div', [], ['analytics']);
    
        for (const key in analytics.data) {
            const analyticsTitle = createElement('p', [key], ['analytics__title'])
            let analyticsValue;
            analyticsValue = createElement('p', [analytics.data[key]], ['analytics__value'])
            if(key === 'url') analyticsValue = createElement('a', [analytics.data[key]], ['analytics__value'], {href: analytics.data[key]})
        
            const analyticsProp = createElement('div', [analyticsTitle, analyticsValue], ['analytics__prop'])
            analyticsDiv.append(analyticsProp);
        }
        const analyticsTitle = createElement('p', ['Last clicked'], ['analytics__title'])
        const analyticsValue = createElement('p', [analytics.timestamp], ['analytics__value'])
    
        const analyticsProp = createElement('div', [analyticsTitle, analyticsValue], ['analytics__prop'])
        analyticsDiv.append(analyticsProp);
        document.querySelector('main .container').append(analyticsDiv);
}

function renderUserUrls(urls) { //[ { shortUrl, longUrl } ]
    const links = createElement('div', [], ['links']);
    
        for (const url of urls) {
            const urlShort = createElement('a', [url.shortUrl], ['links__short'], {href: url.shortUrl})
            const urlLong = createElement('a', [url.longUrl], ['links__long'], {href: url.longUrl})
        
            const linksProp = createElement('div', [urlShort, urlLong], ['links__prop'])
            links.append(linksProp);
        }
        document.querySelector('main .container').append(links);
}

function createElement(tagName, children = [], classes = [], attributes = {}, eventListeners = {}) {
    const element = document.createElement(tagName);
    for(const child of children) element.append(child);
    element.classList = classes.join(" ");
    for(const attr in attributes) element.setAttribute(attr, attributes[attr]);
    for(const event in eventListeners) element.addEventListener(event, eventListeners[event]);
    return element;
}

function signOptionsConfig() {
    const name = sessionStorage.getItem('name');
    if(name) {
        document.querySelector('.nav--secondary').classList.add('display-none');
    }

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
    


    document.getElementById('sign-up-button').addEventListener('click', async () => {
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

        const user = await addUser({ name, email, password });
        if(user) {
            sessionStorage.setItem('name', user.name);
            sessionStorage.setItem('userEmail', user.email)
            window.location.reload();
        }
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

        const user = await loginUser(email, password);
        if(user) {
            sessionStorage.setItem('name', user.name);
            sessionStorage.setItem('userEmail', user.email);
            window.location.reload();
        }
        closePopups();
    })
}

function displayMessage(message) {
    const errorsSection = document.querySelector('.errors');
    errorsSection.classList.remove('display-none');
    const errorMessageElem = document.querySelector('.error__message');
    errorMessageElem.textContent = message;
}