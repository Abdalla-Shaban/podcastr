export const createError = (status, statusMessage, statusCode) => {
  const error = new Error();
  error.status = status;
  error.statusCode = statusCode;
  error.message = statusMessage;
  return error;
};
