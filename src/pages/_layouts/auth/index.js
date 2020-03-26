import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function AuthLayouts({ children }) {
  return (
    <Wrapper>
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}

AuthLayouts.protoTypes = {
  children: PropTypes.element.isRequired,
};
