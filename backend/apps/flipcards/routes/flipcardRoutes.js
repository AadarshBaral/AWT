const express = require('express');
const router = express.Router();
const flipcardController = require('../controllers/flipcardController');


router.post('/create-category', flipcardController.createCategory);
router.post('/create-card', flipcardController.createCard);
router.get('/categories/:id/cards', flipcardController.getCardsByCategory);
router.get('/all-cards', flipcardController.getAllCards);
router.get('/all-categories', flipcardController.getAllCategories);
router.patch('/update-card/:id', flipcardController.updateCard);
router.delete('/delete-card/:id', flipcardController.deleteCard);

module.exports = router;
