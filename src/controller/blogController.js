const express = require('express');
const Article = require('../models/Article');
let router = express.Router();

router.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    
    return res.status(200).json({
        'code': 'Success',
        'articles': articles,
    });
});

router.get('/:id', async (req, res) => {
    console.log(req.body.id)
    const article = await Article.findById(req.params.id);
    
    return res.status(200).json({
        'code': 'Success',
        'articles': article,
    });
});

router.post('/', async (req, res, next) => {
    
    req.article = new Article();

    next();

  }, saveArticleAndRedirect('new'))
  
router.put('/:id', async (req, res, next) => {
    
    req.article = await Article.findById(req.params.id);
    next();
    
}, saveArticleAndRedirect('edit'))

router.delete('/:id', async (req, res) => {
    console.log(req.params.id);

    const article = await Article.findByIdAndDelete(req.params.id);
    const articles = await Article.find();
    return res.status(200).json({
        'code': 'Success',
        'articles': articles,
    });
});

function saveArticleAndRedirect(path) {
    return async (req, res) => {
      let article = new Article({
          title: req.body.title,
          description: req.body.description,
          categories: req.body.categories
      });
      
      try {

        article = await article.save()
        return res.status(200).json({
            'code': 'Success',
            'article': article,
        });
      } catch (e) {
        return res.status(500).json({
            'code': 'ERROR',
            'MESSAGE': e.message,
        });
      }

    }
  }

module.exports = { router, };