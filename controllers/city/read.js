import City from "../../models/City.js";

let cities = async (req, res, next) => {
  try {
    let { name } = req.query
    let query = {}
    if (name) {
      query.name = { $regex: `^${name}`, $options: "i"};
    }      
    let cities = await City.find(query);
    return res.status(200).json({
      cities: cities,
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
      nameCity: cities,
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
      city: cities,
    });
  } catch (error) {
    next(error);
  }
};

let listCountries = async (req, res, next) => {
  try {
    let countries = await City.find({}, 'country _id');
    return res.status(200).json({
      countries: countries
    })
  } catch (error) {
    next(error);
  }
};

export { cities, nameCity, idCity , listCountries };
