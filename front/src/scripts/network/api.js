export { shortenUrl, addUser, loginUser, getAnalytics, getUserUrls, logOut };
import { displayMessage } from '../services/dom.js';

const baseURL = '/';

async function getData(url, headers) {
    try {
        const response = await axios.get(url, headers);
        return response.data;
    } catch (error) {
        if(error.response.data) {
            displayMessage(error.response.data);
        }
        return null;
    }
}

async function postData(url, headers) {
    try {
        const response = await axios.post(url, headers);
        return response.data;
    } catch (error) {
        if(error.response.data) {
            displayMessage(error.response.data);
        }
        return null;
    }
}

async function deleteData(url, headers) { 
    try {
        const response = await axios.delete(url, headers);
        return response.data;
    } catch (error) {
        if(err.response.data) {
            displayMessage(err.response.data);
        }
        return null;
    }
}

async function shortenUrl(originUrl, userEmail, custom = null) {
    const shortUrl = await postData(`${baseURL}api/shorten`, { url: originUrl, userEmail, custom });
    return shortUrl;
}

async function addUser(user) {
    const userName = await postData(`${baseURL}user/sign-up`, user);
    return userName;
}

async function logOut() {
    const data = await deleteData(`${baseURL}user/log-out`);
    return data;
}

async function loginUser(email, password) {
    const user = await postData(`${baseURL}user/log-in`, {
        email,
        password
    });
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