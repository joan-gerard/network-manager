import React from "react";
import { Input } from "../ui/Input";

const Form = ({ setIsOpen }: { setIsOpen: (arg: boolean) => void }) => {
  return (
    <>
      <>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <Label>First Name</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Role</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Company</Label>
            <Input type="text" />
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <div>
            <Label>E-mail</Label>
            <Input type="email" />
          </div>
          <div>
            <Label>LinkedIn</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Phone</Label>
            <Input type="tel" />
          </div>
        </div>
      </>
      <div className="flex gap-2">
        <button
          onClick={() => {}}
          className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
        >
          Add
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default Form;

function Label({
  children,
}: //   htmlFor,
{
  children: React.ReactNode;
  //   htmlFor: string;
}) {
  return (
    <label
      className="text-base font-medium text-gray-700 dark:text-gray-300"
      //   htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
