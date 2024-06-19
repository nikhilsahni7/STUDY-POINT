import React from "react";
import { doSocialLogin } from "@/app/actions";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaSpotify } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdLogin } from "react-icons/md";

const LoginForm = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, #0f172a, #1e293b, #334155, #475569, #64748b), url('https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
      }}
    >
      <form
        action={doSocialLogin}
        className="bg-gray-900 p-10 rounded-3xl shadow-2xl w-full max-w-md animate-fadeIn"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Welcome Back <MdLogin className="inline-block text-yellow-500" />
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Sign in to continue{" "}
          <RiLockPasswordLine className="inline-block text-yellow-500" />
        </p>
        <div className="flex flex-col items-center space-y-4">
          <Button
            variant="outline"
            className="flex items-center justify-center hover:bg-blue-600 py-2 px-4 rounded-md w-full transition duration-300 text-white"
            type="submit"
            name="action"
            value="google"
          >
            <FcGoogle className="mr-2" />
            Sign In With Google
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center hover:bg-rose-800 py-2 px-4 rounded-md w-full transition duration-300 text-white"
            type="submit"
            name="action"
            value="github"
          >
            <FaGithub className="mr-2" />
            Sign In With GitHub
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center hover:bg-green-700 py-2 px-4 rounded-md w-full transition duration-300 text-white"
            type="submit"
            name="action"
            value="spotify"
          >
            <FaSpotify className="mr-2" />
            Sign In With Spotify
          </Button>
        </div>
        <div className="mt-8 text-center text-gray-300">
          <p>
            We only support Google, GitHub, and Spotify for now.
            <RiLockPasswordLine className="inline-block text-yellow-500" />
            <a href="#" className="text-blue-500 hover:underline"></a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
