const error_400 = (error, req, res, next) => {
    console.log( "archivo error 400: "+ error.status);
      
    if (error.status === 400) {
        return res.status(400).json({
          error: 'Bad Request',
          message: error.message || 'The request is invalid',
        });
      }
      next(error);
}

export default error_400
