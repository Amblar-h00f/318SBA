import express from 'express';
import from '';

const router = express.Router();

/// create
router.post('/', async (req, res) => {

    const  = await (req.body);

    //return results
    res.json();
});

//read
router.get('/', async (req, res) => {
    const  = await {});

    //return results
    res.json();
});

//Update
router.put('/:id', async (req, res) => {

    const  = await 
    (req.params.id, req.body, { new: true, });
});

if (!) res.status(400).json({ msg: '' });

res.json();

//delete

router.delete('/:id', async (req, res) => { 
    //Specify Action
    const  = await .findByIdAndDelete(req.params.id);

    if (!) res.status(400).json({ msg: 'Shell not found'});

    res.json();
});


export default router;