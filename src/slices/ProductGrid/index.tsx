import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";
import { SketeboardProduct } from "./SketeboardProduct";

/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

/**
 * Component for "ProductGrid" Slices.
 */
const ProductGrid = ({ slice }: ProductGridProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-gray bg-texture"
    >
      <Heading className="text-center ~mb-4/6" as="h2">
        <PrismicText field={slice.primary.heading} />
      </Heading>
      <div className="text-center ~mb-6/10">
        <PrismicText field={slice.primary.body} />
      </div>
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2
      lg:grid-cols-4">
        {slice.primary.product.map(({ sketeboard }) => (
          isFilled.contentRelationship(sketeboard) && (
            <SketeboardProduct key={sketeboard.id} id={sketeboard.id} />
          )
        ))}
      </div>
    </Bounded>
  );
};

export default ProductGrid;
