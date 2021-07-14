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

router.get('/api/workouts/range', async (req, res) => {
    try {
        const workoutData = await Workout.find()
        res.status(200).json(workoutData).limit(5)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.get('api/workouts', async (req, res) => {
    try {
        const workoutData = await Workout.find()
        res.status(200).json(workoutData)
    }
    catch (err) {
        res.status(200).json(err)
    }
})