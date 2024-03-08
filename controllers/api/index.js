const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const statsRoutes = require('./statsRoutes');

router.use('/users', userRoutes);
router.use('/workout', workoutRoutes);
router.use('/stats', statsRoutes);

module.exports = router;
