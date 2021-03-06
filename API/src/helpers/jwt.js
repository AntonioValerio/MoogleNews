const jwt = require('jsonwebtoken');
const key ='688787d8ff144c502c7f5cffaafe2cc588d86079f9de88304c26b0cb99ce91c6'

exports.createToken = (payload)=> {
    return new Promise((resolve,reject)=>{
        const options ={expiresIn:'8h',issuer:'MoogleNews'};
        jwt.sign(payload,key,options,(error,token)=>{
            if(error) reject(error);
            else resolve({token,...payload});
        });
    });
};

exports.validateToken =(token)=>{
    return new Promise((resolve,reject)=>{
        let options ={issuer :'MoogleNews'};
        jwt.verify(token,key,options,(error,payload)=>{
            if(error) reject(error);
            else resolve(payload);
        });
    });
};
