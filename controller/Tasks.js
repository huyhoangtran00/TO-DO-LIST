
const Task = require('../models/Task') 
const asyncWrapper = require('../middleware/async')

const getAllTasks =  asyncWrapper( async (req,res)=> {
        const tasks = await Task.find({})
        res.status(200).render('task', {
            tasks
        })
})

const createTask = asyncWrapper( async (req,res) => {
  try {
        const task = await Task.create({
            "name" : req.body.task_name
        })
    }
    catch(error) {
        return res.status(500).send(error)
    }
     

        const all_task = await Task.find({})
        res.status(201).render('task', {
            tasks : all_task,
        })


})

// const deleteTask = asyncWrapper(

//     async(req,res) => {
//         const taskID= req.params.id;
//         const task = await Task.findOneAndDelete({ _id: taskID }).exec();
//         res.status(200).redirect('task')
//     }
// )

// const getTask =  asyncWrapper (async (req, res) => {
//       const taskID = req.params.id;
//       console.log("chua done")
//       const task = await Task.findOne({ _id: taskID }).exec();
  
//       if (!task) {
//         return res.status(404).json({ msg: 'Task not found' }); // Explicit return
//       }
  
//       res.status(200).json({ task });

//   }
// )

const updateTask = asyncWrapper (async (req,res) => {
        const taskID = req.params.id;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body , 
            {
                new : true,
                runValidators : true,
            }
        ).exec();
    
        if (!task) {
          return res.status(404).json({ msg: 'Task not found' }); // Explicit return
        }
        

        res.status(200).send('ok')
  
})

const deleteTask = asyncWrapper( async (req,res) => {

        const taskID = req.params.id;
        console.log("chua done")
        const task = await Task.findOneAndDelete({ _id: taskID }).exec();
    
        if (!task) {
          return res.status(404).json({ msg: 'Task not found' }); // Explicit return
        }
        res.status(200).send('ok')

})


module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
}