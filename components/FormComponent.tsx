"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  post: Post;
};
interface FormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

const FormComponent = ({ post }: Props) => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };
  const [submitted, setSubmitted] = useState(false);
  return (
    <section>
      {submitted ? (
        <div className="flex flex-col p-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold">Thank you for your comment</h1>
          <h1 className="">
            Once reviewed, it will appear below within 24 hours
          </h1>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
        >
          <h3 className="text-sm  text-yellow-500">Enjoyed the article?</h3>
          <h4 className="text-3xl mb-10 font-bold">Leave a comment below!</h4>
          <input
            {...register("_id")}
            type={"hidden"}
            name="_id"
            value={post._id}
          />

          <label className="mb-5 block">
            <span className="text-gray-700 ">Name</span>
            <input
              {...register("name", { required: true })}
              className="shadow border rounded py-2 px-3 mt-1 block w-full ring-yellow-500"
              type="text"
              placeholder="Enter your Name"
            />
          </label>
          <label className="mb-5 block">
            <span className="text-gray-700 ">Email</span>
            <input
              {...register("email", { required: true })}
              className="shadow border rounded py-2 px-3 mt-1 block w-full ring-yellow-500"
              type="email"
              placeholder="Enter your Email"
            />
          </label>
          <label className="mb-5 block">
            <span className="text-gray-700 ">Comment</span>
            <textarea
              {...register("comment", { required: true })}
              className="shadow border resize-none rounded py-2 px-3 mt-1 block w-full ring-yellow-500"
              rows={8}
              placeholder="Enter your feedback or message"
            />
          </label>

          {/* Errors will displayed when field validation fails */}
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">The name is required</span>
            )}
            {errors.email && (
              <span className="text-red-500">The email is required</span>
            )}
            {errors.comment && (
              <span className="text-red-500">The comment is required</span>
            )}
          </div>

          {session ? (
            <input
              type="submit"
              className="shadow bg-yellow-500 hover:bg-yellow-400 focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            />
          ) : (
            <div className="flex flex-col p-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
              <h1 className="text-2xl font-bold">Please Sign In!!!</h1>
              <h1 className="">
                We appreciate your time but please sign in to make a comment on
                this post. Can't wait to hear your feedback! Thank you.
              </h1>
            </div>
          )}
        </form>
      )}
    </section>
  );
};

export default FormComponent;
