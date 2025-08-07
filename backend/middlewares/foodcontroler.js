const validateFood = (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Food must contain both title and description" });
  }

  next(); 
};
export default validateFood
