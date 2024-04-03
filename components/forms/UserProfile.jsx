"use client";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Wrapper from "../Wrapper";
import { FaBackward } from "react-icons/fa";
import { useRouter } from "next/navigation";

const UserProfile = () => {
const router = useRouter();
  const inputStyle = {
    base: "data-[has-label=true]:mt-2",
    inputWrapper: "border shadow-none rounded-md h-12",
    errorMessage: "text-start ",
    input: "text-base placeholder:text-white text-white uppercase date-[has-focus=true]:border-warning",
    label: "hidden",
  };
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onBlur",
  });


  const submitForm = async (data) => {
   alert(JSON.stringify(data))
  };
  return (
  <Wrapper className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit(submitForm)} className="mb-10 w-full max-w-lg backdrop-blur-2xl p-5 bg-white/40 rounded-md ">
      <Input
        label="Name"
        placeholder="Name"
        labelPlacement="outside"
        variant="bordered"
        type="text"
        {...register("name", {
          required: "Name is required",
        })}
        errorMessage={errors.name?.message}
        classNames={inputStyle}
      />

      <Input
        label="Email Address"
        variant="bordered"
        labelPlacement="outside"
        placeholder="Email Address"
        type="email"
        {...register("email", {
          required: "email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email address format",
          },
        })}
        errorMessage={errors.email?.message}
        classNames={inputStyle}
      />

      <Input
        label="Contact Number"
        variant="bordered"
        labelPlacement="outside"
        placeholder="Contact Number"
        type="tel"
        {...register("contactNumber", {
          required: "Contact Number is required",
        })}
        errorMessage={errors.contactNumber?.message}
        classNames={inputStyle}
      />
      <Input
        label="Location"
        variant="bordered"
        labelPlacement="outside"
        placeholder="Location"
        type="text"
        {...register("location", {
          required: "Location is required",
        })}
        errorMessage={errors.location?.message}
        classNames={inputStyle}
      />
      <Input
        label="Role"
        variant="bordered"
        labelPlacement="outside"
        placeholder="Role"
        type="text"
        {...register("role", {
          required: "Role is required",
        })}
        errorMessage={errors.role?.message}
        classNames={inputStyle}
      />

      <div className="flex col-span-12 items-center justify-center mb-10 mt-5">
        <Button
          type="submit"
          className="p-3 !text-balance leading-[1] font-semibold rounded-[5px] bg-gradient-to-r  from-warning to-warning-300 text-black shadow-lg"
        >
          Add New User
        </Button>
      </div>
    </form>
    <Button onClick={()=>router.push("/")}  color="default" variant='solid' className='absolute shadow-orange-200 shadow-md top-5 left-5' isIconOnly><FaBackward/></Button>
  </Wrapper>
  );
};

export default UserProfile;
