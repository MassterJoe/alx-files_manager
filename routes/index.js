import { Router } from 'express';

const appController = require('../controllers/AppController');

const router = Router();

router.get('/status', appController.getStatus);
router.get('/stats', appController.getStats);



module.exports = router;