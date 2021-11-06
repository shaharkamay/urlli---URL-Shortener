export { shortenUrl, addUser, loginUser, getAnalytics };
// import axios from 'axios';

const baseURL = 'http://localhost:3000/';

async function getData(url, headers) {
    const response = await axios.get(url, headers);

    // if(response.data.status >= 400) {
    //     displayMessage(response.data.message);
    // }
    return response.data;
}

async function postData(url, headers) {
    const response = await axios.post(url, headers);
    // if(response.data.status >= 400) {
    //     displayMessage(response.data.message);
    // }

    return response.data;
}

async function shortenUrl(originUrl, username) {
    const shortUrl = await postData(`${baseURL}api/shorten`, { url: originUrl });
    return shortUrl;
}

async function addUser(user) {
    const userName = await postData(`${baseURL}user/sign-up`, user);
    return userName;
}

async function loginUser(email, password) {
    const userName = await getData(`${baseURL}user/log-in`, {
        headers: {
            email,
            password
        }
    });
    if(userName.status) return null;
    return userName;
}

async function getAnalytics(shortUrlId) {
    const analytics = await getData(`${baseURL}api/analytics/${shortUrlId}`);
    return analytics;
}