import City from "../../models/City.js";

let cities = async (req, res, next) => {
  try {
    let cities = await City.find();
    return res.status(200).json({
      response: cities,
    });
  } catch (error) {
    next(error);
  }
};

let nameCity = async (req, res, next) => {
  try {
    let query = { name: { $regex: `^${req.params.text}`, $options: "i" } };
    let cities = await City.find(query);
    return res.status(200).json({
      response: cities,
    });
  } catch (error) {
    next(error);
  }
};
let idCity = async (req, res, next) => {
  try {
    let id = req.params.id;
    let cities = await City.findById(id);
    return res.status(200).json({
      response: cities,
    });
  } catch (error) {
    next(error);
  }
};

export { cities, nameCity, idCity };
