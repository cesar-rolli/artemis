import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import {
  Container,
  Wrapper,
  MenuItem,
  TaskDoneIcon,
  ProfessorsIcon,
  CloudIcon,
  DirexSide,
  PerformanceIcon,
  DirexIcon,
  BottomMenu,
  NotationBottomIcon,
  SDRBottomIcon,
  MuralBottomIcon,
  CalendarBottomIcon,
  MenuBottomIcon
} from './styles';

const MenuBottom: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <Header />
      <Wrapper>
        <Link to = {'/tarefas'} style={{ textDecoration: 'none' }}>
          <MenuItem>
            <TaskDoneIcon />
            <span>Tarefas</span>
          </MenuItem>
        </Link>
        <Link to = {'/professores-parceiros'} style={{ textDecoration: 'none' }}>
          <MenuItem>
            <ProfessorsIcon />
            <span>Professores parceiros</span>
          </MenuItem>
        </Link>
        <a href='https://drive.google.com/drive/u/1/folders/0B_pfgOzEMjWhWUh6ZFVLMnFlTDg?resourcekey=0-PxBaFB5bYbpdzlfv736BVA' style={{ textDecoration: 'none' }}>
          <MenuItem>
            <CloudIcon />
            <span>Drive</span>
          </MenuItem>
        </a>

        <DirexSide>
          <Link to = {'/em-construcao'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <PerformanceIcon />
              <span>Desempenho</span>
            </MenuItem>
          </Link>
          <Link to = {'/direx'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <DirexIcon />
              <span>Diretoria</span>
            </MenuItem>
          </Link>
        </DirexSide>
      </Wrapper>
      <BottomMenu>
        <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
          <NotationBottomIcon />
        </Link>
        <a href='https://app.pipefy.com/organizations/300611579' style={{ textDecoration: 'none' }}>
          <SDRBottomIcon />
        </a>
        <Link to = {'/em-construcao'} style={{ textDecoration: 'none' }}>
          <MuralBottomIcon />
        </Link>
        <Link to = {'/em-construcao'} style={{ textDecoration: 'none' }}>
          <CalendarBottomIcon />
        </Link>
        <Link to = {'/menu'} style={{ textDecoration: 'none' }}>
          <MenuBottomIcon className='active' />
        </Link>
      </BottomMenu>
    </Container>
  )
}

export default MenuBottom;