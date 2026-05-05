"use client";

import "../app/globals.css";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import { CgProfile } from "react-icons/cg";
import { TfiTicket } from "react-icons/tfi";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <nav className="drop-shadow-2xl flex items-center justify-between p-3 border-b border-slate-200 bg-slate-100 h-24">
      
      {/* LOGO */}
      <div className="flex items-center justify-center gap-2">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-full h-auto max-w-[120px] max-h-[120px] py-2"
          />
        </Link>
      </div>

      {/* NAV LINKS */}
      <div className="flex justify-center items-center gap-5 font-semibold max-md:hidden">
        
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-primary hover:underline transition"
        >
          <HomeIcon />
          <p>Home</p>
        </Link>

        <Link
          href="/events"
          className="flex items-center gap-2 hover:text-primary hover:underline transition"
        >
          <CgProfile />
          <p>Events</p>
        </Link>

        <Link
          href="/artists"
          className="flex items-center gap-2 hover:text-primary hover:underline transition"
        >
          <PersonIcon />
          <p>Artists</p>
        </Link>

        <Link
          href="/tags"
          className="flex items-center gap-2 hover:text-primary hover:underline transition"
        >
          <TfiTicket />
          <p>Tags</p>
        </Link>

        {/* AUTH BUTTON */}
        {session ? (
          <button
            onClick={() => signOut()}
            className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-80 transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-80 transition"
          >
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;














// "use client";

// import "../app/globals.css";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";
// import { CgProfile } from "react-icons/cg";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { TfiTicket } from "react-icons/tfi";

// const Header = () => {
//   const { data: session } = useSession();

//   return (
//     <nav className="drop-shadow-2xl flex items-center justify-between p-3 border-b border-slate-200 bg-slate-100 h-24">
      
//       {/* LOGO */}
//       <div className="flex items-center justify-center gap-2">
//         <Link href="/">
//           <Image
//             src="/images/logo.png"
//             alt="logo"
//             width={100}
//             height={100}
//             className="w-full h-auto max-w-[120px] max-h-[120px] py-2"
//           />
//         </Link>
//       </div>

//       {/* NAV LINKS */}
//       <div className="flex justify-center items-center gap-5 font-semibold max-md:hidden">
        
//         <Link
//           href="/"
//           className="flex items-center gap-2 hover:text-primary hover:underline"
//         >
//           <HomeIcon />
//           <p>Home</p>
//         </Link>

//         <Link
//           href="/events"
//           className="flex items-center gap-2 hover:text-primary hover:underline"
//         >
//           <CgProfile />
//           <p>Events</p>
//         </Link>

//         <Link
//           href="/artists"
//           className="flex items-center gap-2 hover:text-primary hover:underline"
//         >
//           <PersonIcon />
//           <p>Artists</p>
//         </Link>

//         <Link
//           href="/tags"
//           className="flex items-center gap-2 hover:text-primary hover:underline"
//         >
//           <TfiTicket />
//           <p>Tags</p>
//         </Link>

//         {/* AUTH BUTTONS */}
//         {session ? (
//           <button
//             onClick={() => signOut()}
//             className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md hover:opacity-70"
//           >
//             Logout
//           </button>
//         ) : (
//           <button
//             onClick={() => signIn("google")}
//             className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md hover:opacity-70"
//           >
//             Log in
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;