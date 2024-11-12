import React from "react";
import { productCategoryData } from "../storedData/productCategory";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const { productCategory } = await params;

  // Find the matching category to generate a title
  const matchedCategory = productCategoryData.find(
    (item) =>
      item.queryUrlObj === productCategory.toLowerCase().replace(/\s+/g, "-")
  );

  return {
    title: matchedCategory ? matchedCategory.title : "Category Not Found",
  };
};

async function ProductCategoryPage({ params }) {
  const { productCategory } = await params;

  // Find the matching category based on queryUrlObj
  const matchedCategory = productCategoryData.find(
    (item) =>
      item.queryUrlObj === productCategory.toLowerCase().replace(/\s+/g, "-")
  );

  // If no match is found, trigger the notFound() method
  if (!matchedCategory) {
    notFound();
  }

  // Use the matched category's title
  return <div>{matchedCategory.title}</div>;
}

export default ProductCategoryPage;
