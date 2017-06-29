import { connect } from 'react-redux';
import { decreaseFire, incrementFire, fetchFire } from '../../../modules/fire';
import Fire from '../components/Fire';

const mapDispatchToprops = {
  decreaseFire,
  incrementFire,
  fetchFire,
};

const mapStateToProps = state => ({
  fire: state.fire.fireSize,
});

export default connect(mapStateToProps, mapDispatchToprops)(Fire);
