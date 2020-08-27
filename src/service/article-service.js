const articles = require('./article.json');

exports.getArticles = () =>{
    return new Promise((resolve,reject) =>{
        resolve(articles);
    });
};

exports.getArticle = id =>{
    return new Promise((resolve,reject)=>{
        resolve(articles.find(article=> article._id===id));
    });
};

exports.addArticle = article =>{
    return new Promise((resolve,reject)=>{
        resolve({inserted:1 });
    });
};

exports.updateArticle = (id,article) =>{
    return new Promise((resolve,reject)=>{
        resolve({updated:1});
    });
};

exports.deleteArticle = id =>{
    return new Promise((resolve,reject)=>{
        resolve ({deleted:1});
    });
};
