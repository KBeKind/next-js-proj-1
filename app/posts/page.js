import React, { Component } from "react";

// this is metadata for SEO etc.  this would be static metadata
export const metadata = {
  title: "Home",
};

// DYNAMIC metadata
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);
  return { title: product.title };
}

export default class page extends Component {
  render() {
    return <div>Post</div>;
  }
}
