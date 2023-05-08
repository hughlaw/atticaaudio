import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

export default function EquipmentBlock({
  title,
  open = false,
  children,
  className,
}) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className={`equipment-block ${className}`}>
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        {isOpen ? (
          <ArrowDropDownRoundedIcon fontSize="large" />
        ) : (
          <ArrowRightRoundedIcon fontSize="large" />
        )}
      </button>
      {isOpen && children}
    </div>
  );
}

EquipmentBlock.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
  children: PropTypes.node,
};
