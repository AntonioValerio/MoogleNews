const express = require('express');
const ArticleController = require('../controller/article-controller');
//const authorize = require("../configs/authorization");
const router = express.Router();

//define routes

router.get('',ArticleController.getArticles);
router.get('/:id',ArticleController.getArticle);
router.post('',ArticleController.postArticle);
router.put('/:id',ArticleController.putArticle);
router.delete('/:id',ArticleController.deleteArticle);

module.exports = router;