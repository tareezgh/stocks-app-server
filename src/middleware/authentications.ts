export const allowCrossDomain = async (req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, authorization"
  );
  next();
};
