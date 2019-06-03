import React from "react";
import "styled-components/macro";
import tw from "tailwind.macro";

const Pagination = () => {
  return (
    <div css={tw`w-full mb-6 flex justify-center`}>
      <ul css={tw`flex border rounded`}>
        <li>
          <a
            css={tw`block hover:text-white hover:bg-blue-700 text-blue-700 border-r px-3 py-2`}
            href="#"
          >
            Previous
          </a>
        </li>
        <li>
          <a css={tw`block text-white bg-blue-700 border-r px-3 py-2`} href="#">
            1
          </a>
        </li>
        <li>
          <a
            css={tw`block hover:text-white hover:bg-blue-700 text-blue-700 border-r px-3 py-2`}
            href="#"
          >
            2
          </a>
        </li>
        <li>
          <a
            css={tw`block hover:text-white hover:bg-blue-700 text-blue-700 border-r px-3 py-2`}
            href="#"
          >
            3
          </a>
        </li>
        <li>
          <a
            css={tw`block hover:text-white hover:bg-blue-700 text-blue-700 px-3 py-2`}
            href="#"
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
