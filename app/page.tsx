import { groq } from "next-sanity";
import React from "react";
import BlogList from "../components/BlogList";
import { sanityClient } from "../sanity";

type Props = {};

const query = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const Home = async (props: Props) => {
  const posts = await sanityClient.fetch(query);
  return (
    <>
      <BlogList posts={posts} />
    </>
  );
};

export default Home;
