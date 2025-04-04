import Image from "next/image";
import React from "react";

const ContactCard = ({ contact }: { contact: Contact }) => {
  const {
    firstName,
    lastName,
    role,
    company,
    email,
    linkedinProfile = "",
    phoneNumber = "",
    notes,
    imgUrl,
  } = contact;
  return (
    <div className="p-3 rounded-lg border border-gray-300 flex flex-col gap-y-4">
      <Header
        imgUrl={imgUrl}
        firstName={firstName}
        lastName={lastName}
        role={role}
      />
      <ContactInfo
        company={company}
        email={email}
        phoneNumber={phoneNumber}
        linkedinProfile={linkedinProfile}
      />
      {notes && (
        <div>
          <p>{notes}</p>
        </div>
      )}
    </div>
  );
};

export default ContactCard;

const Header = ({
  imgUrl,
  firstName,
  lastName,
  role,
}: {
  imgUrl: string;
  firstName: string;
  lastName: string;
  role: string;
}) => (
  <div className="flex flex-row justify-between items-center">
    <div className="flex flex-row gap-x-2">
      <Image src={imgUrl} alt="avatar" width={50} height={50} />
      <div className="text-base">
        <div className="flex flex-row gap-x-2 font-bold">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <p>{role}</p>
      </div>
    </div>
    <div className="flex flex-row gap-x-2">
      <i className="text-xl font-black bx bx-edit-alt" />
      <i className="text-xl font-black bx bx-trash" />
    </div>
  </div>
);

const ContactInfo = ({
  company,
  email,
  phoneNumber,
  linkedinProfile,
}: {
  company: string;
  email: string;
  phoneNumber: string;
  linkedinProfile: string;
}) => (
  <address className="not-italic space-y-1 text-sm">
    {company && <p>{company}</p>}
    {email && <p>{email}</p>}
    {phoneNumber && <p>{phoneNumber}</p>}
    {linkedinProfile && (
      <p>
        <a
          href={linkedinProfile}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    )}
  </address>
);
