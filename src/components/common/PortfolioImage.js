import React from "react";
import { Box } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";

import usePortfolioImages from "../../hooks/usePortfolioImages";

const DEFAULT_SIZES =
  "(max-width: 992px) 100vw, (max-width: 1280px) 50vw, 900px";

const PortfolioImage = ({
  src,
  alt = "",
  objectFit = "cover",
  sizes = DEFAULT_SIZES,
  ...props
}) => {
  const images = usePortfolioImages();
  const image = src ? images[src] : null;

  if (!src) {
    return null;
  }

  if (image) {
    return (
      <Box overflow="hidden" {...props}>
        <GatsbyImage
          image={image}
          alt={alt}
          objectFit={objectFit}
          sizes={sizes}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    );
  }

  if (process.env.NODE_ENV === "development") {
    console.warn(`PortfolioImage: no Gatsby image found for "${src}"`);
  }

  return null;
};

export default PortfolioImage;
