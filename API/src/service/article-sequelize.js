const db = require('../configs/sequelize.js').getDB();
const op = require('sequelize').Op;

exports.getArticles = async (queryString) =>{
    return new Promise((resolve,reject) =>{
        /* let where = {};
        if (queryString.search) {
          where.title = { [Op.substring]: queryString.search };
        }*/
        db.Articles.findAll({ attributes :['_id','title','text','game','author']})
        .then( (articles) => resolve(articles))
        .catch((err) => reject(err));

     
})
}

exports.getArticle = id =>{
    return new Promise((resolve,reject) =>{
        db.Articles.findByPk(id)
        .then(article => resolve(article))
        .catch(err = reject(err));
    });
};

exports.addArticle = article =>{
    return new Promise((resolve,reject)=>{
       // resolve({inserted:1 });
       db.Articles.create(body)
       .then(article => resolve({inserted: 1, _id: article._id}))
       .catch(err => reject(err));
    });
};

exports.updateArticle = (id,article) =>{
    return new Promise((resolve,reject)=>{
       // resolve({updated:1});
       db.Articles.update(id,body)
       .then(article => resolve({updated:1 , _id: article._id}))
    });
};

exports.deleteArticle = id =>{
    return new Promise((resolve,reject)=>{
        //resolve ({deleted:1});
        db.Articles
        .delete(id)
        .then(article => resolve({deleted :1}))
    });
};
