import pool from '../db.js'
import express from 'express';
const router=express.Router()

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


export default router