const router = require('express').Router();

const Workout = require('../models/index.js');

// ADD WORKOUT
router.post('/api/workouts/:id', async ({ body }, res) => {
    try {
        const exerciseData = await Workout.create(body)
        res.status(200).json(exerciseData)
    }
    catch (err) {
        res.status(400).json(err)
    }
});


// UPDATE WORKOUT

router.put('/apiworkouts/:id', async ({ params, body }, res) => {
    try {
        const exerciseData = await Workout.findByIdAndUpdate({ id: params.id }, { $push: { exercises: body }}, { new: true})

        res.status(200).json(exerciseData);
    }
    catch (err) {
        res.status(400).json(err);
    }
});