const router = require('express').Router();
const { Workout, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{ model: Workout }],
        });

        const user = userData.get({plain: true});

        res.render('profile', {
            ...user,
            // logged_in: true 
        });
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;