import Product from "./../../models/Product.js";

async function getProduct(req, res) {
  try {
    const data = await Product.find();
    res.status(200).json({ ok: true, data });
  } catch (error) {
    res.status(400).json({ ok: false, message: "error in the service" });
  }
}
async function postProduct(req, res) {
  const product = req.body;
  try {
    const newProduct = await new Product(product);
    await newProduct.save();
    res.status(200).json({ ok: true, message: "Register Completed" });
  } catch (error) { 
    console.log(error)
    res.status(400).json({ ok: false, message: "error in the service" });
  }
 
}
async function putProduct(req, res) {
  const id = req.params.id;
  let data = req.body;
  delete data._id;
  try {
    await Product.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({ ok: true, message: "Update Completed" });
  } catch (error) {
    res.status(400).json({ ok: false, message: "error in the service" });
  }
}

async function deleteProduct(req, res) {
  try {
  await Product.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ ok: true, message: "Delete Completed" });
  } catch (error) {
    res.status(400).json({ ok: false, message: "error in the service" });
  }
}

export { getProduct, postProduct, putProduct, deleteProduct };
