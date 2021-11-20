export { applyTheme, clickCloseErrorHandler, clickShortenHandler, logOutHandler };
import { getCookie, removeLoader, showLoader } from '../helpers/helpers.js';
import { shortenUrl, logOut } from '../network/api.js';
import { displayMessage } from './dom.js';

function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
}

function clickCloseErrorHandler(e) {
    if(e.target.tagName !== 'BUTTON') return;

    const errorsSection = document.querySelector('.errors');
    errorsSection.classList.add('display-none');
}

async function clickShortenHandler(e) {
    showLoader(document.querySelector('.shorten--container'));
    const url = document.getElementById('shorten-input').value.trim();
    console.log(validator.isURL(url))
    if(!validator.isURL(url, { require_protocol: true, require_host: true })) {
        displayMessage('Invalid URL!');
        removeLoader();
        return;
    }
    const userEmail = getCookie('email');
    const custom = document.getElementById('custom-input').value || null;
    if(custom && !validator.isAlphanumeric(custom)) {
        displayMessage('Custom alias must contain only letters and numbers!');
        removeLoader();
        return;
    }
    const shortUrl = await shortenUrl(url, userEmail, custom);
    document.querySelector('.output').classList.remove('display-none');
    document.querySelector('.long-link').textContent = url;
    const shortLinkElem = document.getElementById('short-link');
    shortLinkElem.href = shortUrl;
    shortLinkElem.textContent = shortUrl;
    removeLoader();
}

async function logOutHandler(e) {
    const data = await logOut();
    window.location.href = '/log-in';
}