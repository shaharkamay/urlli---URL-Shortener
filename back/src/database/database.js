export { isKeyExists, storeData };

async function isKeyExists(key, value, Model) {
    const findObj = new Object();
    findObj[key] = value;
    const user = await Model.findOne(findObj);
    if(user) return true;
    return false;
}

async function storeData(obj, Model) {
    await Model.create(obj);
}