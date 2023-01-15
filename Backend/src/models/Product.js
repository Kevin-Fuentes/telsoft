import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true,
    trim: true,
  },
  provedor: {
    type: String,
    required: true,
    trim: true,
  },
  marca: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  modelo: {
    type: String,
    required: true,
    trim: true,
  },
  precio: {
    type: Number,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
