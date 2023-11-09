// Create web server
var express = require('express');
// Create router
var router = express.Router();
// Import comments controller
var commentsController = require('../controllers/commentsController.js');

// Get all comments
router.get('/', commentsController.getAllComments);

// Get comment by id
router.get('/:id', commentsController.getCommentById);

// Create comment
router.post('/', commentsController.createComment);

// Update comment
router.put('/:id', commentsController.updateComment);

// Delete comment
router.delete('/:id', commentsController.deleteComment);

// Export router
module.exports = router;