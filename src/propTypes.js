import PropTypes from 'prop-types';

export const Process = PropTypes.shape({
	element: PropTypes.string.isRequired,
	priority: PropTypes.number,
	quantum: PropTypes.number.isRequired,
});

