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


    const myBmr = calculate.bmr(newGender, age, height, weight);
    console.log(myBmr);
    res.status(200).json(myBmr);
  } catch (err) {
    res.status(400).json(err);
  }
});

// total caloric needs

router.get("/caloricneeds/:id", async (req, res) => {
  try {
    const newCaloricNeedsStats = await User.findByPk(req.params.id, {
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
      newCaloricNeedsStats;

    let newGender;
    if (gender) {
      newGender = "male";
    } else {
      newGender = "female";
    }

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
router.get("/tdee/:id", async (req, res) => {
  try {
    const tdeeStats = await User.findByPk(req.params.id, {
      attributes: ["gender", "age", "height", "weight", "activity_level"],
    });
    const { gender, age, height, weight, activity_level } = tdeeStats;

    let newGender;
    if (gender) {
      newGender = "male";
    } else {
      newGender = "female";
    }

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

    const tdee = calculate.tdee(newGender, age, height, weight, actLevel);
    console.log(tdee);
    res.status(200).json(tdee);
  } catch (err) {
    res.status(400).json(err);
  }
});

// ideal body weight

router.get("/ibw/:id", async (req, res) => {
  try {
    const BodyWeight = await User.findByPk(req.params.id, {
      attributes: ["height", "gender"],
    });
    const { height, gender } = BodyWeight;

    let newGender;
    if (gender) {
      newGender = "male";
    } else {
      newGender = "female";
    }

    const myIdealBodyWeight = calculate.idealBodyWeight(height, newGender, "imperial");
    console.log(myIdealBodyWeight);
    res.status(200).json(myIdealBodyWeight);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
