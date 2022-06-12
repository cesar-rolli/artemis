import React from 'react';

import Notation_box from '../Notation_box';
import Add_notation_box from '../Add_notation_box';

import {
  Container,
  Settings_bar,
  Filter_icon,
  Notation_type_menu,
} from './styles';

const Notation_area: React.FC = () => {
  return (
    <Container>
      <Settings_bar>
        <Notation_type_menu />
        <Filter_icon />
      </Settings_bar>
      {/* <Add_notation_box /> */}
      <Notation_box />
      <Notation_box />
      <Notation_box />
      <Notation_box />
      <Notation_box />
      <Notation_box />
      <Notation_box />
      <Notation_box />
      <Notation_box />
      <Notation_box />
      <Notation_box />
    </Container>
  )
}

export default Notation_area;