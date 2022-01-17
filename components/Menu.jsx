import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const AppMenu = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div>
      <div className="flex">
        <AnimatePresence>
          {IsOpen && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{ width: 384 }}
              exit={{ width: 0 }}
              className="w-96 bg-blue-600 justify-start h-screen"
            >
              <button
                onClick={handleClose}
                className="bg-white p-2 m-6 rounded-md font-bold text-lg hover:opacity-90 duration-300 transform hover:scale-105 hover:rotate-6"
              >
                Close
              </button>
            </motion.aside>
          )}
        </AnimatePresence>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOpen}
          className="bg-gray-200 h-10 px-2 m-6 rounded-md font-bold text-lg hover:opacity-90 duration-300 transform hover:scale-105 hover:-rotate-6"
        >
          Open
        </motion.button>
      </div>
    </div>
  );
};

export default AppMenu;
