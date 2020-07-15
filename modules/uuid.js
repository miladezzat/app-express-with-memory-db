function uuid() {
    let os = require('os');
    let faces = os.networkInterfaces();    
    let key = Object.keys(faces)[1];
    let net = faces[key];
    let mac = net[1].mac;
    mac = mac.replace(/:/g,"");    
    let lastPart =  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
        let r = Math.random() * 16 | 0, v = char == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(32)
    }) + '-' + Date.now().toString(32)
    return `${mac}-${lastPart}`
}

/**
 * first part device mac and lastOne is timestamp
 */

 module.exports = uuid;