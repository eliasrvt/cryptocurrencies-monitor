function respondSuccess(res, responseData) {
  return res
    .status(res.statusCode)
    .json({
      message: responseData.message || "",
      data: responseData.data || {},
    })
    .end();
}

module.exports = respondSuccess;
