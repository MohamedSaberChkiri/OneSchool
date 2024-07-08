import React from "react";
import "../App.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SignUp() {
  return (
    <div
      className="signup-container  sm:w-[450px] w-[300px] h-[300px] sm:h-[400px]"
      data-aos="fade-up"
    >
      <div className="signup-text">
        <h3>Sign Up</h3>
      </div>
      <div className="signup-data-container w-full">
        <Input type="email" placeholder="Email" className="mb-5" />
        <Input type="password" placeholder="password" className="mb-5" />
        <Input
          type="password"
          placeholder="Re-type password"
          className="mb-5"
        />
      </div>
      <Button className="text-white bg-indigo-700 hover:bg-indigo-900 hover:text-white">
        Sign Up
      </Button>
    </div>
  );
}

export default SignUp;
