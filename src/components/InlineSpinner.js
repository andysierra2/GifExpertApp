import React from 'react'
import PropTypes from 'prop-types';

// I need Bootstrap 5!, put bs5 css in index.js
export const InlineSpinner = ({className = 'text-dark'}) => {
  return (
    <div className={'spinner-border '+className}>
      <span className='visually-hidden'>Loading...</span>
    </div>
  )
}
InlineSpinner.propTypes = {
  bsTextColor: PropTypes.string
}