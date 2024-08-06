const ToDo =require('../models/events');

exports.getToDo = async (req, res) => {   
    try {
        const events = await ToDo.find({});
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.createToDo = async (req, res) => {
    const { title, description } = req.body;
   try{
    const newEvent = new ToDo({ title, description });
    await newEvent.save();
    res.status(201).json({
        success:true,
        data:newEvent
    })
   }
   catch(error){
       res.status(500).json({ 
        
        });
   }
}