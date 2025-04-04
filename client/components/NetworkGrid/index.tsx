import React from "react";
import ContactCard from "./ContactCard";

const NetworkGrid = () => {
  return (
    <div className="text-black dark:text-white py-4 px-6 grid-cols-3 grid gap-x-2 w-full">
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  );
};

export default NetworkGrid;
