import React from "react";
import { useForm } from "react-hook-form";

const UserForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Search username"
          {...register("userName", { required: true })}
        />
        <button type="submit">Search </button>
        <p>
          {errors.userName?.type === "required" &&
            "Username cannot be blank !!!"}
        </p>
      </form>
    </>
  );
};

export default UserForm;
