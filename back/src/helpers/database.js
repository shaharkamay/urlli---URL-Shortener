export { addNewUrl, getUrlByShortUrl, getShortUrlByUrl, isShortUrlExists, addUser, loginUser };
// import request from 'request';
import { domain } from './constants.js';
import fs from 'fs';


function addNewUrl(shortUrl, url) {
    try {
        const databaseObj = getDbObject('urls');
        const urls = databaseObj.urls;
        urls.push({ shortUrl, url });
        fs.writeFileSync("./src/static-files/database/urls.json", JSON.stringify(databaseObj));
    } catch (error) {
        console.error(error);
    }
}

function getDbObject(dbName) {
    try {
        const data = fs.readFileSync(`./src/static-files/database/${dbName}.json`);
        if(!data) return null;
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
    }
}

function getUrlByShortUrl(shortUrl) {
    const databaseObj = getDbObject('urls');
    const urlObj = databaseObj.urls.find(urlObj => urlObj.shortUrl === shortUrl);
    if(urlObj) return urlObj.url;
    return null;
}

function getShortUrlByUrl(url) {
    const databaseObj = getDbObject('urls');
    const urlObj = databaseObj.urls.find(urlObj => urlObj.url === url);
    if(urlObj) return urlObj.shortUrl;
    return null
}

function isShortUrlExists(shortUrl) {
    const databaseObj = getDbObject('urls');
    return databaseObj.urls.find(urlObj => urlObj.shortUrl === shortUrl) !== undefined;
}

function isUserExists(email) {
    const databaseObj = getDbObject('users');
    return databaseObj.users.find(userObj => userObj.email === email) !== undefined;
}

function addUser(user) {
    try {
        const databaseObj = getDbObject('users');
        const users = databaseObj.users;
        users.push({ name: user.name, email: user.email, password: user.password });
        fs.writeFileSync("./src/static-files/database/users.json", JSON.stringify(databaseObj));
    } catch (error) {
        console.error(error);
    }
}

function loginUser(email, password) {
    const databaseObj = getDbObject('users');
    const user = databaseObj.users.find(userObj => userObj.email === email);
    if(user && user.password === password) return user.name;
    return null;
}

// class Database {

//     constructor(url) {
//         this[this.shortenUrl()] = url;
//     }

//     static shortenUrl() {
//         const created = true;
//         let shortKey = Math.random().toString(36).substr(2, 4);
//         return shortKey;
//     }

//     // get getU

// }

// class Database {
//     static #superSecretApiKey = '1e152c47794e1557874f8b99af35906f852bb';
//     static #headers = {
//         'cache-control': 'no-cache',
//         'x-apikey': this.#superSecretApiKey,
//         'content-type': 'application/json',
//     };
//     static #baseURL = 'https://urldatabase-aa6f.restdb.io/rest/urls-json';

//     static getUrls = () => {
//         const options = {
//             method: 'GET',
//             url: Database.#baseURL,
//             headers: Database.#headers,
//         };
//         return new Promise((resolve, reject) => {
//             request(options, function (error, response, body) {
//                 if (error) reject(error);
//                 else resolve(JSON.parse(body));
//             });
//         });
//     };

//     static addNewUrl = (short, url, date) => {
//         // Sends post request to restdb
//         const options = {
//             method: 'POST',
//             url: this.#baseURL,
//             headers: this.#headers,
//             body: { shortened: short, url, click: 0, date },
//             json: true,
//         };

//         return new Promise((resolve, reject) => {
//             request(options, (error, response, body) => {
//                 if (error) reject(error);
//                 if (body.status === 400) {
//                     if (body.list[0].message[0] === 'Already exists')
//                     reject(errorCodes.urlAlreadyExists);
//                     else reject('Something went wrong on post');
//                 } else resolve();
//             });
//         });
//     };

//     static async getDataFromShortURL(url) {
//         const data = await Database.getUrls();
//         for (const row of data) {
//             if (row.shortened === url) {
//                 //For some reason the db api I use decided to change the name of my clicks variable to click
//                 //And also if clicks is 0 it doesnt send the data
//                 //For this reason a deleted the click from my object
//                 if (!row.clicks) row.clicks = 0;
//                 delete row.click;
//                 return row;
//             }
//         }
//         return false;
//     }

//     static editData(data) {
//         // Put request to increment click count, set new last clicked, and append click date count
//         const clicks = (data.clicks || 0) + 1;
//         const lastClicked = formatedTimestamp();
//         let clickDates = JSON.parse(data.clickDates || '{}');
//         clickDates = JSON.stringify(clickDateToOBJ(clickDates));
//         const options = {
//             method: 'PUT',
//             url: `${Database.#baseURL}/${data._id}`,
//             headers: Database.#headers,
//             body: { clicks, lastClicked, clickDates },
//             json: true,
//         };
//         request(options, function (error, response, body) {
//             if (error) throw new Error(error);
//         });
//     }

//     static deleteData(id) {
//         //Delete data by id
//         const options = {
//             method: 'DELETE',
//             url: `${Database.#baseURL}/${id}`,
//             headers: Database.#headers,
//         };

//         return new Promise((res, rej) => {
//             request(options, function (error, response, body) {
//                 if (error) rej(new Error(error));
//                 res(body);
//             });
//         });
//     }
// }