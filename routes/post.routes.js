const { Router } = require('express');
const postController = require('../controller/post.controller.js');

const router = new Router();

router.post('/post', postController.createPost);
router.get('/post', postController.getPostsByUser);

module.exports = router;