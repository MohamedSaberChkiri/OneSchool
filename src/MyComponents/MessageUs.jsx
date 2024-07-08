import React from "react";
import Program from "./Program";
import { TextField } from "@mui/material";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function MessageUs() {
  return (
    <div className="mucont">
      <div className="message-us-top mt-5 p-[10px]">
        <Program
          title="Message Us"
          desc="Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi."
        />
      </div>

      <div className="form">
        <div className="flex-col sm:flex-row items-center justify-between flex gap-[30px] h-fit duration-500">
          <TextField
            id="outlined-basic"
            label="First Name"
            className="userinputname "
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            className="userinputname"
            variant="outlined"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Subject"
          className="userinput2"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          className="userinput2 border"
          variant="outlined"
        />
        <textarea
          className="border- border-gray-200 w-full p-4 min-h-[250px]"
          placeholder="Write Your Message Here ..."
        />

        <Button className=" h-[5vh] mx-auto w-full rounded-3xl bg-indigo-600 hover:bg-indigo-700">
          SEND MESSAGE
        </Button>
      </div>
    </div>
  );
}

export default MessageUs;
