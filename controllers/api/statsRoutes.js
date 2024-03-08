const router = require("express").Router();
const calculate = require("fitness-health-calculations");
const { User } = require("../../models");

// Get my BMR code
router.get("/bmr/:id", async (req, res) => {
  try {
    const newBmr = await User.findByPk(req.params.id, {
      attributes: ["gender", "age", "height", "weight"],
    });
    const { gender, age, height, weight } = newBmr;

    let newGender;
    if (gender) {
      newGender = "male";
    } else {
      newGender = "female";
    }
    // const stats = newStats.get({plain: true});

    const myBmr = calculate.bmr(newGender, age, height, weight);
    console.log(myBmr);
    res.status(200).json(myBmr);
  } catch (err) {
    res.status(400).json(err);
  }
});

// total caloric needs
// let totalCaloricNeeds = calculate.caloricNeeds(gender, age, height, weight, activity_level, weightGoal)
router.get("/caloricneeds/:id", async (req, res) => {
  try {
    const newStats = await User.findByPk(req.params.id, {
      attributes: [
        "gender",
        "age",
        "height",
        "weight",
        "activity_level",
        "goal",
      ],
    });
    const { gender, age, height, weight, activity_level, goal } =
      newStats;

    let newGender;
    if (gender) {
      newGender = "male";
    } else {
      newGender = "female";
    }
    // const stats = newStats.get({plain: true});

    let actLevel;
    switch (activity_level) {
      case 1:
        actLevel = "sedentary";
        break;
      case 2:
        actLevel = "light";
        break;
      case 3:
        actLevel = "moderate";
        break;
      case 4:
        actLevel = "high";
        break;
      case 5:
        actLevel = "extreme";
    }

    const totalCaloricNeeds = calculate.caloricNeeds(
      newGender,
      age,
      height,
      weight,
      actLevel,
      goal
    );
    console.log(totalCaloricNeeds);
    res.status(200).json(totalCaloricNeeds);
  } catch (err) {
    res.status(400).json(err);
  }
});

// total daily energy expenditure
// let dailyEnergyExp = calculate.tdee(gender, age, height, weight, activity_level)

// ideal body weight
// let idealBodyWeight = calculate.idealBodyWeight(height, gender)

module.exports = router;
