const error_handler = (error, req, res, next) => {  
    console.log(error);
    console.log(error.message);
    console.log(error.status);
    
    return res.status(500).json({
        success: false,
        response:error,
        message: `error al crear usuario`,
        prueba: "hola chicos"
    })

}

export default error_handler