import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import { timeout } from 'constants/transition';

class Transition extends PureComponent {
  render() {
    const { children, location } = this.props;
    const RoutesContainer = posed.div({
      enter: {
        opacity: 1,
        delay: timeout,
        delayChildren: timeout,
      },
      exit: {
        opacity: 0,
      },
    });

    const containerStyle = { width: '100%', height: '100%' };

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return (
      <PoseGroup animateOnMount={true}>
        <RoutesContainer style={containerStyle} key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Transition;
