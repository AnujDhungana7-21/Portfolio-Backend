export const getAbout = (req, res, next) => {
  res.status(200).send("get about");
};

export const getAboutById = (req, res, next) => {
  res.status(200).send("get about by id");
};

export const createAbout = (req, res, next) => {
  res.status(200).send("create about");
};

export const updateAbout = (req, res, next) => {
  res.status(200).send("update about");
};

export const deleteAbout = (req, res, next) => {};
