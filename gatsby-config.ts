import path from "path";
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "Gatsby web portfolio",
    copiright: "@2022 ayoscript",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@local/styles": path.resolve(__dirname, "src/styles"),
          "@local/pages": path.resolve(__dirname, "src/pages"),
          "@local/components": path.resolve(__dirname, "src/components"),
          "@static": path.resolve(__dirname, "static"),
        },
        extensions: [".tsx", ".ts"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
};

export default config;
