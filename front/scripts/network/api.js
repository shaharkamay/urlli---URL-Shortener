export { shortenUrl };
// import axios from 'axios';

const baseURL = 'http://localhost:3000/';

async function getData(url, username) {
    const response = await axios.get(url, {
        headers: {
            username,
        }
    });

    // if(response.data.status >= 400) {
    //     displayMessage(response.data.message);
    // }

    return response.data;
}

async function postData(url, originUrl, username = null) {
    const response = await axios.post(url, { url: originUrl, username });
    // if(response.data.status >= 400) {
    //     displayMessage(response.data.message);
    // }

    return response.data;
}

async function shortenUrl(originUrl, username) {
    const shortUrl = await postData(`${baseURL}api/shorten`, originUrl);
    return shortUrl;
}