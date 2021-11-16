export { applyTheme, clickCloseErrorHandler, clickShortenHandler, logOutHandler };
import { getCookie } from '../helpers/helpers.js';
import { shortenUrl, logOut } from '../network/api.js';

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
    const url = document.getElementById('shorten-input').value.trim();
    const userEmail = getCookie('email');
    const custom = document.getElementById('custom-input').value || null;
    const shortUrl = await shortenUrl(url, userEmail, custom);
    document.querySelector('.output').classList.remove('display-none');
    document.querySelector('.long-link').textContent = url;
    const shortLinkElem = document.getElementById('short-link');
    shortLinkElem.href = shortUrl;
    shortLinkElem.textContent = shortUrl;
}

async function logOutHandler(e) {
    const data = await logOut();
    window.location.href = '/log-in';
}