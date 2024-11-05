const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `la peticion con el metodo: ${req.method} con la ruta  ${req.url} no fue encontrada `
    })
}

export default not_found_handler