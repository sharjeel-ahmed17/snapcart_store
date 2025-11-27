import mongoose, { Schema, Types } from "mongoose";

export interface IGrocery {
  _id?: Types.ObjectId;
  name: string;
  category: string;
  price: string;
  unit: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const GrocerySchema = new Schema<IGrocery>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Vegetables",
        "Fruits",
        "Dairy",
        "Beverages",
        "Grains",
        "Snacks",
        "Meat",
        "Bakery",
      ],
      index: true,
    },

    price: {
      type: String,
      required: true,

    },

    unit: {
      type: String,
      required: true,
      enum: ["kg", "g", "ltr", "ml", "pcs"],
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Grocery =
  mongoose.models.Grocery ||
  mongoose.model<IGrocery>("Grocery", GrocerySchema);

export default Grocery;
