"use server";
import { z } from "zod";

const productSchema = z.object({
  name: z
    .string()
    .min(3, { message: `The name has to be a min Character length of 5` }),
  category: z.string().min(1, { message: `Category is required` }),
  price: z.number().min(1, { message: `The price has to be bigger than 1` }),
  smallDescription: z
    .string()
    .min(10, { message: `Please summarize your product in a few words` }),
  description: z
    .string()
    .min(1, { message: `Description is required` }),
    images: z.array(z.string(), { message: `Images are required` }),
    productFile: z.string().min(1, { message: `Please upload a zip of your product` }),
});
