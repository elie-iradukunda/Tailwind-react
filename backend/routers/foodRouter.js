import pool from '../db.js'
import express from 'express';
const router=express.Router()
import validateFood from '../middlewares/foodcontroler.js';

router.get('/getallFood', async (req, res) => {
  try {
    const selectQuery = await pool.query('SELECT * FROM foods');
    if (selectQuery.rowCount === 0) {
      return res.status(404).json({ message: 'No food found' });
    }
    res.status(200).json(selectQuery.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
router.post('/addfood',validateFood,async(req,res)=>{
        
        const {title,description}=req.body
    try {

        const checkingFoodQuery=await pool.query(`select * from foods where  title=$1`,[title])

        if(checkingFoodQuery.rowCount>0){
            res.status(404).json({message:"that food type allready added"})
        }
    const insertQuery=await pool.query(`insert into foods(title,description) values($1,$2) RETURNING *`,[title,description])
    res.status(200).json(insertQuery.rows[0])
        
    } catch (err) {
        console.error(err);
    res.status(500).json({ message: 'Server error' });
    }
})

router.delete('/deleteByid/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM foods WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Food not found' });
    }

    res.status(200).json({
      message: 'Food deleted successfully',
      deletedFood: result.rows[0],
    });
  } catch (err) {
    console.error('Delete Error:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});



export default router