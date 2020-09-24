const bookService =require('../service/article-sequelize');

exports.getArticles = (req,res)=>{
    bookService.getArticles()
    .then(result => res.json(result))
    .catch(err=> res.status (500).send(err.message));
};

exports.getArticle = (req,res)=>{
    bookService.getArticle(req.param.id)
    .then(result=> res.json(result))
    .catch(err=> res.status (500).send(err.message));
};

exports.postArticle = (req,res)=>{
    bookService.addArticle(req.body)
    .then(result => res.json(result))
    .catch(err=> res.status (500).send(err.message));
};

exports.putArticle = (req,res) =>{
    bookService.updateArticle(req.param.id,req.body)
    .then(result => res.json(result))
    .catch(err=> res.status (500).send(err.message));
};

exports.deleteArticle = (req,res)=>{
    bookService.deleteArticle(req.param.id)
    .then(result => res.json(result))
    .catch(err=> res.status (500).send(err.message));
};
