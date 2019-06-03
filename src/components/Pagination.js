import React from "react";
import "styled-components/macro";
import tw from "tailwind.macro";

const Pagination = () => {
  return (
    <div css={tw`w-full mb-6 flex justify-center`}>
      <ul css={tw`flex border rounded`}>
        <li>
          <button
            css={tw`block hover:text-white hover:bg-blue-500 text-blue-500 border-r px-3 py-2`}
            href="#"
          >
            Previous
          </button>
        </li>
        <li>
          <button
            css={tw`block text-white bg-blue-500 border-r px-3 py-2`}
            href="#"
          >
            1
          </button>
        </li>
        <li>
          <button
            css={tw`block hover:text-white hover:bg-blue-500 text-blue-500 border-r px-3 py-2`}
            href="#"
          >
            2
          </button>
        </li>
        <li>
          <button
            css={tw`block hover:text-white hover:bg-blue-500 text-blue-500 border-r px-3 py-2`}
            href="#"
          >
            3
          </button>
        </li>
        <li>
          <button
            css={tw`block hover:text-white hover:bg-blue-500 text-blue-500 px-3 py-2`}
            href="#"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
