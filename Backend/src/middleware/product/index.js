export function validateBody(req, res, next) {
  const { tipo, provedor, marca, color, modelo, precio, descripcion } =
    req.body;

  if (
    !(tipo && provedor && marca && color && modelo && precio && descripcion)
  ) {
    return res
      .status(401)
      .json({ ok: false, msg: "this body missing attributes" });
  }

  next();
}

export function validateID(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res
      .status(401)
      .json({ ok: false, msg: "the id is required" });
  }

  next();
}
