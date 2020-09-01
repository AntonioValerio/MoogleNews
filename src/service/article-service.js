const db = require('../configs/sequelize.js').getDB();

exports.getArticles = () =>{
    return new Promise((resolve,reject) =>{
        db.articles
        .findAll({attributes :['_id','title','game','author']})
        .then( articles => resolve(articles))
        .catch(err => reject(err));
    });
};

exports.getArticle = id =>{
    return new Promise((resolve,reject)=>{
        //resolve(articles.find(article=> article._id===id));
        db.articles
        .findByPk(id)
        .then(article => resolve(article))
        .catch(err = reject(err));
    });
};

exports.addArticle = article =>{
    return new Promise((resolve,reject)=>{
       // resolve({inserted:1 });
       db.articles
       .create(body)
       .then(article => resolve({inserted: 1, _id: article._id}))
       .catch(err => reject(err));
    });
};

exports.updateArticle = (id,article) =>{
    return new Promise((resolve,reject)=>{
       // resolve({updated:1});
       db.articles
       .update(id,body)
       .then(article => resolve({updated:1 , _id: article._id}))
    });
};

exports.deleteArticle = id =>{
    return new Promise((resolve,reject)=>{
        //resolve ({deleted:1});
        db.articles
        .delete(id)
        .then(article => resolve({deleted :1}))
    });
};
