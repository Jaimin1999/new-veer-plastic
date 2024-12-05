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
  return (
    <div className="px-20">
      <div className="bg-red-200 flex items-center flex-col">
        <h1 className="text-2xl md:text-4xl font-bold text-[#85C447]">
          {matchedCategory.title}{" "}
        </h1>
        <h3>{"Product Category Subtitle"}</h3>
      </div>

      <div>{/* Product Image Place Ment */}</div>

      {/* Product OverView */}
      <div className="mt-48">
        <HeadlingWithUnderLine heading="Product OverView" />
        <p className="mt-5" style={{ fontSize: "larger" }}>
          {"Product OverView 1nd"}
          <br />
          Emida or Imida Bottles or fondly called, Euro Head Bottles are wider
          diameter bottles made out of HDPE plastic, and popular for packing of
          agro-chemicals and pesticides. They have a minimum wall thickness of 1
          mm and are sturdy. The high wall thickness reduces leaching of any
          aggressive chemicals from the insides to outside.
        </p>
        <p className="mt-5" style={{ fontSize: "larger" }}>
          {"Product OverView 2nd"}
          <br />
          Regent Plast is manufacturing these bottles in various sizes from 50
          ml – 100 ml – 250 ml – 500 ml and 1 Ltr in fill volume. This way, a
          brand can have an inform presentation for all their pack sizes.
        </p>
      </div>

      {/* Product Benefits */}
      <div className="mt-12">
        <HeadlingWithUnderLine heading={"Product Benefits"} />
        <p className="mt-5" style={{ fontSize: "larger" }}>
          {"Product Benefits 1nd"}
          <br />
          Imida or Emida bottles are high quality and high thickness bottle that
          is universally used and accepted for packing of agro-chemicals. The
          cylindrical shape provides for a large surface area to print or label
          description of the product. The bottles are complemented by a
          continuous thread cap having induction seal wad. Certain customers
          prefer a vented seal cap for passing of air, and for preventing the
          bottle from buckling or exploding (depending on the packed contents).
        </p>
        <p className="mt-5" style={{ fontSize: "larger" }}>
          {"Product Benefits 2nd"}
          <br />
          Imida or Emida bottles are high quality and high thickness bottle that
          is universally used and accepted for packing of agro-chemicals. The
          cylindrical shape provides for a large surface area to print or label
          description of the product. The bottles are complemented by a
          continuous thread cap having induction seal wad. Certain customers
          prefer a vented seal cap for passing of air, and for preventing the
          bottle from buckling or exploding (depending on the packed contents).
        </p>
      </div>

      {/* Key Feautres*/}
      <div className="mt-12">
        <HeadlingWithUnderLine heading={"Key Features"} />
        <div className="mt-5">
          <ol className="list-decimal ml-5">
            {[
              "Excellent Strength / Durability",
              "Customization available for regular buyer (Log on Cap/ Induction Seal Wad and Shoulder of Bottle)",
              "Moisture Resistance",
              "Easy to handle for packaging",
              "Cost Effective over Tin / Metal Packaging",
              "It is possible to produce this bottle in translucent colour, that user can see level of filled contents inside.",
            ].map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
          </ol>
        </div>
      </div>

      {/* Industry Use Cases*/}
      <div className="mt-12">
        <HeadlingWithUnderLine heading={"Industry use cases"} />
      </div>

      {/* Products*/}
      <div className="mt-12">
        <HeadlingWithUnderLine heading={"Products"} />
      </div>
    </div>
  );
}

export default ProductCategoryPage;

function HeadlingWithUnderLine({ heading }) {
  return (
    <p className="relative text-gray-800 font-bold text-xl uppercase">
      {heading}
      <span className="absolute -bottom-2 left-0 w-[7.5rem] h-[3px] bg-[#184F75]"></span>
    </p>
  );
}
