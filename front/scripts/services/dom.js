export { starter };
import { applyTheme } from './event-handlers';
import { shortenUrl } from '../network/api.js';

const starter = async () => {
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
};