import { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const usePortfolioImages = () => {
  const data = useStaticQuery(graphql`
    query PortfolioImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { regex: "/portfolio/" }
          extension: { ne: "gitkeep" }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              quality: 90
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              breakpoints: [576, 768, 992, 1200, 1440, 1920, 2560]
            )
          }
        }
      }
    }
  `);

  return useMemo(() => {
    const map = {};

    data.allFile.nodes.forEach((node) => {
      if (node.childImageSharp) {
        map[node.relativePath] = getImage(node);
      }
    });

    return map;
  }, [data]);
};

export default usePortfolioImages;
