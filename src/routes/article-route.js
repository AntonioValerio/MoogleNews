const express = require('express');
const ArticleController = require('../controller/article-controller');

const authorize = require('../configs/authorization');
const router = express.Router();

//define routes

router.get('',authorize(),ArticleController.getArticles);
router.get('/:id',authorize(),ArticleController.getArticle);
router.post('',authorize(),ArticleController.postArticle);
router.put('/:id',authorize(),ArticleController.putArticle);
router.delete('/:id',authorize(),ArticleController.deleteArticle);

module.exports = router;