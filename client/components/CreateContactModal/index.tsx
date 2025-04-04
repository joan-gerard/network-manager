import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Form from "./Form";

const CreateContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-xl bg-amber-500 size-10 flex justify-center items-center hover:bg-amber-600 hover:cursor-pointer transition-colors duration-200 text-black shadow-lg"
      >
        <i className="bx bx-plus text-xl"></i>
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center mb-2">
                Create a new contact
              </h3>
              <Form setIsOpen={setIsOpen} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreateContactModal;
