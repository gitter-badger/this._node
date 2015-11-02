'use strict';

var express = require('express');
var controller = require('./node.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/:id/photos', controller.showPhotos)
router.get('/:id/events', controller.showEvents)
router.get('/:id/posts', controller.showPosts)
router.get('/:id/likes', controller.showLikes)


module.exports = router;
