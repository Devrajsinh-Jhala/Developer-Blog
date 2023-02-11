"use client";
import Image from "next/image";
import React, { useState } from "react";
import urlFor from "../sanity";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  // Search Functionality
  const [search, setSearch] = useState("");
  return (
    <section className="">
      <hr className="border-[#f7ab0a] mb-10" />
      <form className="max-w-[900px] px-10 mx-auto">
        <label className="mb-5 block">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="shadow border rounded py-2 px-3 mt-1 block w-full focus:outline-none ring-yellow-500"
            type="text"
            placeholder="Search blogs by title..."
          />
        </label>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* Posts */}
        {posts
          .filter((post) => {
            return search.toLowerCase() == ""
              ? post
              : post.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((post) => (
            <ClientSideRoute
              key={post._id}
              route={`/post/${post.slug.current}`}
            >
              <div className="flex flex-col cursor-pointer group">
                <div className="relative w-full z-[-10] h-52 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                  <Image
                    className="object-cover   lg:object-center"
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                  />
                  <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                    <div>
                      <p className="font-bold">{post.title}</p>

                      <p>
                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                      {post.categories.map((category, i) => (
                        <div
                          key={i}
                          className="bg-[#f7ab0a] text-xs text-center text-black px-3 py-1 rounded-full font-semibold"
                        >
                          <p>{category.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex-1">
                  <p className="line-clamp-1 underline text-lg font-bold">
                    {post.title}
                  </p>
                  <p className="line-clamp-1 text-sm">{post.description}</p>
                </div>
              </div>
            </ClientSideRoute>
          ))}
      </div>
    </section>
  );
};

export default BlogList;
