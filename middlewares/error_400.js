const error_400 = (error, req, res, next) => {

  if (error.status === 400) {
    return res.status(400).json({
      success: false,
      error: {
        message: "The request could not be processed due to invalid or missing parameters.",
        details: "Please check the provided data and try again."
      }
    });
  }
  return next(error);

}
export default error_400