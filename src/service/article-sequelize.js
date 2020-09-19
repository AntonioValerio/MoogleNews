const { connectDB , getDB ,get_articles ,disconnectDB } = require('../configs/sequelize.js');
const op = require('sequelize').Op;

exports.getArticles = async () =>{
    return new Promise((resolve,reject) =>{
         let where = {};
       /* if (queryString.search) {
          where.title = { [Op.substring]: queryString.search };
        }*/
     connectDB();
        getDB.Articles.findAll({ attributes :['_id','title','text','game','author']})
        .then( (articles) => resolve(articles))
        .catch((err) => reject(err));

     console.log(
          get_articles());
       
        
    });
};

exports.getArticle = id =>{
    return new Promise((resolve,reject) =>{
        db.Article.findByPk(id)
        .then(article => resolve(article))
        .catch(err = reject(err));
    });
};

exports.addArticle = article =>{
    return new Promise((resolve,reject)=>{
       // resolve({inserted:1 });
       db.Article.create(body)
       .then(article => resolve({inserted: 1, _id: article._id}))
       .catch(err => reject(err));
    });
};

exports.updateArticle = (id,article) =>{
    return new Promise((resolve,reject)=>{
       // resolve({updated:1});
       db.Article.update(id,body)
       .then(article => resolve({updated:1 , _id: article._id}))
    });
};

exports.deleteArticle = id =>{
    return new Promise((resolve,reject)=>{
        //resolve ({deleted:1});
        db.Article
        .delete(id)
        .then(article => resolve({deleted :1}))
    });
};
