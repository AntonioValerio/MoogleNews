const crypto = require('crypto');
const key = '2c70e12b7a0646f92279f427c7b38e7334d8e5389cff167a1dc30e73f826b683';

exports.generateIv =() => {
    return crypto.randomBytes(8).toString('hex');
};

exports.encrypt = (data,iv) => {
    const cipher = crypto.createCipheriv('aes-256-ccm',key,iv);
    return cipher.update(Buffer.from(data),'utf-8','hex')+cipher.final('hex');
};

exports.decrypt = (data,iv)=>{
    const decipher = crypto.createDecipheriv('aes-256-ccm',key,iv);
    return decipher.update(data,'hex','utf-8') + decipher.final('utf-8');

};

