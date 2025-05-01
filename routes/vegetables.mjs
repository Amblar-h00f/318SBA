import express from 'express';

const router = express.Router();

/// create
router.post('/', async (req, res) => {

try {

    const newVeg = await Vegetable.create(req.body);
    res.status(201).json(newVeg);
}catch (err) {
    res.status(400).json({ error: err.message });
}
});
    


//read
router.get('/', async (req, res) => {
    const {color} = req.query;
    const filter = color ? {color} : {};
});

    


    //return results
    res.json(vegetables);
    } catch (err) {
        res.status(500).json({error: 'Internal server error'});
    }
});

//Update
router.put('/:id', async (req, res) => {

    try {
        const updatedVeg = await Vegetable.findByIdandUpdate(
            req.params.id,
            req.body,
            {new: true}

        );
        res.json(updatedVeg);

    } catch (err) {
     res.status(400).json({ error: 'Failed to update vegetable'});
    }
});
//delete

router.delete('/:id', async (req, res) => { 
   try {
const deleteVeg = await Vegetable.findByIdAndDelete(req.params.id);

res.json({ msg: 'Vegetable deleted'});

   } catch (err) {
    res.status(500).json({ error: 'Failed to delete vegetable'});
   }
});

export default router;