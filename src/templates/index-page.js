import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <section
      className="h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    >
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-5xl text-blue-grey-050 font-bold bg-teal-500  rounded shadow px-4 py-2">
          {title}
        </h1>
        <h3 className="text-lg sm:text-xl text-blue-grey-050 font-semibold bg-teal-500 rounded shadow px-2 py-1 mt-5">
          {subheading}
        </h3>
      </div>
    </section>

    <section className="py-16">
      <div className="flex flex-col justify-center items-center text-center max-w-lg px-4 mx-auto">
        <h1 className="text-gray-900 text-2xl">{mainpitch.title}</h1>
        <h3 className="text-gray-800 text-lg leading-relaxed mt-4">
          {mainpitch.description}
        </h3>
      </div>

      <div className="flex flex-col items-center text-center max-w-xl px-4 mx-auto mt-10">
        <h3 className="font-semibold text-gray-900 text-lg">{heading}</h3>
        <p className="leading-relaxed text-gray-800 leading-relaxed mt-4">
          {description}
        </p>
      </div>

      <Features gridItems={intro.blurbs} />

      <div className="flex flex-col items-center mt-20">
        <h3 className="font-semibold text-gray-900 text-lg sm:text-xl tracking-wide uppercase">
          Latest stories
        </h3>

        <BlogRoll />

        <Link
          className="font-semibold text-blue-grey-050 sm:text-lg bg-teal-500 px-4 py-2 sm:px-5 sm:py-3 rounded shadow-md mt-10 hover:bg-teal-700 focus:bg-teal-700"
          to="/blog"
        >
          Read More
        </Link>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
