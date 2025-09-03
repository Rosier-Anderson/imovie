import { Genre } from "@/app/lib/definitions";
import React from "react";

export default async function Genres({ data }: { data: Genre[] }) {
  return (
    <div className="w-[750px] overflow-hidden ">
      {" "}
      <ul
        className="flex gap-2
         py-4  overflow-x-auto scroll-smooth webkit-scrollbar-style
 text-sm dark:text-white overscroll-contain
"
      >
        {data.map(({ name: name }: { name: string }, index: number) => {
          return (
            <li
              key={index}
              className="min-w-32 text-center truncate overflow-hidden border border-gray-secondary  p-2 rounded-3xl cursor-pointer"
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// import React from "react";
// import { GenresList } from "./genres-list";

// export default async function Genres({
//   name,
//   index,
// }: {
//   name: string;
//   index: number;
// }) {
//   return (
//     <div className="w-[800px] overflow-hidden ">
//       {" "}
//       <ul
//         className="flex gap-2
//          py-4  overflow-x-auto scroll-smooth webkit-scrollbar-style
//  text-sm dark:text-white
// "

// >

//         <li
//           key={index}
//           className="min-w-32 text-center border border-gray-secondary  whitespace-nowrap p-2 rounded-3xl cursor-pointer"
//         >
//           <GenresList name={name} />
//         </li>

//       </ul>
//     </div>
//   );
// }
