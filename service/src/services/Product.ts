import { Product } from "@prisma/client";
import { prisma } from "../infrastructure/db";
import { Err } from "ts-results";

export const all = async (): Promise<Product[]> => {
  const products = await prisma.product.findMany();
  return products;
};

export const find = async (id: string): Promise<Product | null> => {
  const product = await prisma.product.findFirst({
    where: { id: parseInt(id) },
  });

  return product;
};

export const findMany = async (ids: string[]): Promise<Product[]> => {
  const products = await prisma.product.findMany({
    where: { id: { in: ids.map((id) => parseInt(id)) } },
  });

  return products;
};

export const updateProduct = async (productId: string, updatedAttributes: any) => {
  try{
    //check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: { id: productId},
    });

    if (!existingProduct){
      return null;
    }

    //only update products referenced in request
    const updatedProduct = await prisma.product.update({
      where: {id: productId},
      data: updatedAttributes,
    });
    return updateProduct
  } catch (error){
    throw new Error("Error updating product")
  }
}

export const create = async (
  title: string,
  description: string,
  price: number,
  imageUrl: string = "https://i.imgur.com/EyoQOjC.jpg",
): Promise<Product> => {
  const newProduct = await prisma.product.create({
    data: {
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
    },
  });

  return newProduct;
};
