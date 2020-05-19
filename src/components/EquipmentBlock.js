import React, { useState } from 'react';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import PropTypes from 'prop-types';

export default function EquipmentBlock({ title, open = false, children }) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="equipment-block">
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
