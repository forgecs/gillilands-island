import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="h-screen w-full bg-cover bg-bottom flex justify-center items-center mt-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <h1 className="text-3xl sm:text-5xl text-blue-grey-050 font-bold bg-teal-500 rounded shadow px-6 py-4">
            Blog
          </h1>
        </div>
        <section className="flex justify-center items-center">
          <BlogRoll />
        </section>
      </Layout>
    );
  }
}
