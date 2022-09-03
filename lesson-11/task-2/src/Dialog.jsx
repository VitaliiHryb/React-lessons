import React from 'react';
import PropTypes from 'prop-types';

function Dialog({ title, onClose, children }) {
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{title}</h4>
        <button onClick={onClose} className="dialog__close-btn">
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
}

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  isOpen: false,
  title: '',
};

export default Dialog;
