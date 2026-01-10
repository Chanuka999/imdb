import React, { Suspense } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-4">
      <Suspense fallback={null}>
        <NavbarItem title="Trending" params="fetchTrending" />
      </Suspense>
      <Suspense fallback={null}>
        <NavbarItem title="Top Rated" params="fetchTopRated" />
      </Suspense>
    </div>
  );
};

export default Navbar;
