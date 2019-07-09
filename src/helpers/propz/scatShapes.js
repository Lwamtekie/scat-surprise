import PropTypes from 'prop-types';

const scatCardShape = PropTypes.shape({
  location: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  sampleNum: PropTypes.string.isRequired,
  Animal: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { scatCardShape };
