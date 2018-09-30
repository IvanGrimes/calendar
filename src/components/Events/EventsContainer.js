import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Events from './Events';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

class EventsContainer extends Component {
  static propTypes = {};

  render() {
    return (
      createElement(
        Events,
        {},
      )
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
