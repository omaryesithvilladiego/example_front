import React, { useState } from "react";
import { motion } from "framer-motion";

const AccordionItem = ({ isOpen, toggle, children }) => {
  return (
    <motion.div layout>
      <motion.div
        layout
        className="title"
        onClick={toggle}
        animate={{ fontWeight: isOpen ? 600 : 400 }}
      >
        {children[0]}
      </motion.div>
      {isOpen && (
        <motion.div layout className="content">
          {children[1]}
        </motion.div>
      )}
    </motion.div>
  );
};

const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isOpen: activeIndex === index,
          toggle: () => toggle(index),
        });
      })}
    </div>
  );
};

const AccordionTitle = ({ children }) => {
  return <div>{children}</div>;
};

export { Accordion, AccordionItem, AccordionTitle };