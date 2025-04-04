import React from "react";

const ContactCard = () => {
  return (
    <div className="p-3 rounded-lg border border-gray-300 flex flex-col gap-y-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-x-2">
          <div>
            <i className="bx bx-face text-black text-5xl"></i>
          </div>
          <div className="text-base">
            <div className="flex flex-row gap-x-2 font-bold">
              <p>First</p>
              <p>Last</p>
            </div>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-2">
          <i className="text-xl font-black bx bx-edit-alt"></i>
          <i className="text-xl font-black bx bx-trash"></i>
        </div>
      </div>
      <div>
        <p>Google</p>
        <p>email@email.com</p>
        <p>012 333 444 666</p>
        <p>www.linkedin.com/profile-profile</p>
      </div>
      <div>
        <p>This a description</p>
      </div>
    </div>
  );
};

export default ContactCard;
