"use client";
import React from "react";

type Props = {};

function ToTopButton({}: Props) {
  return (
    <div className="flex fixed bottom-2 flex-col right-2 gap-y-2">
      <button
        className=" p-2 bg-blue-500 rounded-md"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Top
      </button>
      <button
        className="  p-2 bg-blue-500 rounded-md"
        onClick={() =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          })
        }
      >
        Bottom
      </button>
    </div>
  );
}

export default ToTopButton;
