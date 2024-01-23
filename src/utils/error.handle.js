const handleHttp = (res, error, errorRaw) => {
  console.log(errorRaw);
  res.status(500);
  res.send({ error });
};
export default handleHttp;
