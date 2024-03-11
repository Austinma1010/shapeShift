const router = require('express').Router();
const { Workout, User } = require('../models');
const withAuth = require('../utils/auth');
const calculate = require("fitness-health-calculations");

router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/');
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
            logged_in: true 
        });
    } catch (error) {
        console.error(error);
    }
})

router.get("/bmr", withAuth, async (req, res) => {
    console.log(req.session.user_id);
    try {
      const newBmr = await User.findByPk(req.session.user_id, {
        attributes: ["gender", "age", "height", "weight"],
      });
      let { gender, age, height, weight } = newBmr;
      console.log(gender);
  
      
      if (gender) {
        gender = "male";
      } else {
        gender = "female";
      }
  
  
      const myBmr = calculate.bmr(gender, age, height, weight);
      console.log(myBmr)
      res.status(200).json(myBmr);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.get("/tdee", async (req, res) => {
    try {
        const newTdee = await User.findByPk(req.session.user_id, {
            attributes: ["gender", "age", "height", "weight", "activity_level"],
          });
          let { gender, age, height, weight, activity_level } = newTdee;

          if (gender) {
            gender = "male";
          } else {
            gender = "female";
          }

          if (activity_level == 1) {
            activity_level = 'sedentary';
          } else if (activity_level == 2) {
            activity_level = 'light';
          } else if (activity_level == 3) {
            activity_level = 'moderate';
          } else if (activity_level == 4) {
            activity_level = 'high';
          } else if (activity_level == 5) {
            activity_level = 'extreme';
          }

          const myTdee = calculate.tdee(gender, age, height, weight, activity_level);
      
      res.status(200).json(myTdee);

    } catch (err) {
        res.status(400).json(err);
    }
})

router.get("/caloricNeeds", async (req, res) => {
    try {
        const newCn = await User.findByPk(req.session.user_id, {
            attributes: ["gender", "age", "height", "weight", "activity_level", "goal"],
          });
          let { gender, age, height, weight, activity_level, goal } = newCn;

          if (gender) {
            gender = "male";
          } else {
            gender = "female";
          }

          if (activity_level == 1) {
            activity_level = 'sedentary';
          } else if (activity_level == 2) {
            activity_level = 'light';
          } else if (activity_level == 3) {
            activity_level = 'moderate';
          } else if (activity_level == 4) {
            activity_level = 'high';
          } else if (activity_level == 5) {
            activity_level = 'extreme';
          }

          const myCn = calculate.caloricNeeds(gender, age, height, weight, activity_level, goal, approach = 'normal');
      
      res.status(200).json(myCn);

    } catch (err) {
        res.status(400).json(err);
    }
})

router.get("/idealWeight", async (req, res) => {
    try {
        const newWeight = await User.findByPk(req.session.user_id, {
            attributes: ["gender", "height"],
          });
          let { gender, height } = newWeight;

          if (gender) {
            gender = "male";
          } else {
            gender = "female";
          }

          const myWeight = calculate.idealBodyWeight(height, gender, units = 'imperial');
      
      res.status(200).json(myWeight);

    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;