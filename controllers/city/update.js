import City from "../../models/City.js";

const updateById = async (req, res, next) => {
    try {
        let city = req.body
        let update = await City.findByIdAndUpdate(
            city._id ,
            {
                name: city.name,
                country: city.country,
                description: city.description,
                population: city.population,
                region: city.region,
                currency: city.currency,
                image: city.image,
            },
            { new: true }
        )
        return res.status(200).json({
            response: update
        })
    } catch (error) {
        next(error)
    }

}

export default updateById