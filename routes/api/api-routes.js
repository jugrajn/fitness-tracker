const router = require('express').Router();

const Workout = require('../../models/workout.js');

// ADD WORKOUT
router.post('/api/workouts', async (req, res) => {
    try {
        const exerciseData = await Workout.create({})
        res.status(200).json(exerciseData)
    }
    catch (err) {
        res.status(400).json(err)
    }
});


// UPDATE WORKOUT

router.put('/api/workouts/:id', async ({ params, body }, res) => {
    try {
        const exerciseData = await Workout.findByIdAndUpdate(params.id, { $push: { exercises: body }}, { new: true}) 
        res.status(200).json(exerciseData);
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.get('/api/workouts/range', async (req, res) => {
    try {
        const workoutData = await Workout.aggregate([
            {
                $addFields:{
                    totalDuration:{
                        $sum:'$exercises.duration'
                    }
                }
            }
        ]).sort({_id:1}).limit(7)
        res.status(200).json(workoutData).limit(7)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.get('/api/workouts', async (req, res) => {
    try {
        const workoutData = await Workout.aggregate([
            {
                $addFields:{
                    totalDuration:{
                        $sum:'$exercises.duration'
                    }
                }
            }
        ])
        res.status(200).json(workoutData)
    }
    catch (err) {
        res.status(200).json(err)
    }
})

module.exports=router;