export { shortenUrl, addUser, loginUser, getAnalytics, getUserUrls };
import { displayMessage } from '../services/dom.js';

const baseURL = 'http://localhost:3000/';

async function getData(url, headers) {
    const response = await axios.get(url, headers).catch((err) => {
        if(err.response.data) {
            displayMessage(err.response.data);
        }
        return null;
    });

    return response.data;
}

async function postData(url, headers) { 
    const response = await axios.post(url, headers).catch((err) => {
        if(err.response.data) {
            displayMessage(err.response.data);
        }
        return null;
    });

    return response.data;
}

async function shortenUrl(originUrl, userEmail, custom = null) {
    const shortUrl = await postData(`${baseURL}api/shorten`, { url: originUrl, userEmail, custom });
    return shortUrl;
}

async function addUser(user) {
    const userName = await postData(`${baseURL}user/sign-up`, user);
    return userName;
}

async function loginUser(email, password) {
    const user = await postData(`${baseURL}user/log-in`, {
        email,
        password
    });
    // if(user.status) return null;
    return user;
}

async function getAnalytics(shortUrlId) {
    const analytics = await getData(`${baseURL}api/analytics/${shortUrlId}`);
    return analytics;
}

async function getUserUrls(userEmail) {
    const urls = await getData(`${baseURL}api/dashboard/urls`, {
        headers: {
            userEmail
        }
    });
    return urls;
}