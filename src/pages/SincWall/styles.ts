import styled, { css } from "styled-components";

import { 
  Analyse,
  CloudQueue,
  InsertChartOutlined,
  Rocket,
  AddAlarm,
  Task,
  HeadsetMic, 
  NotificationsNone,
  Menu, 
  CalendarToday,
} from '../../styles/Icons';

export const Container = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const Wrapper = styled.div`
  position: absolute;

  justify-content: center;
  width: 70vw;
  height: 100vh;

  top: 80px;
  padding-bottom: 80px;
  
  @media (min-width: 500px) {
    margin-left: 116px;
  }

  @media (min-width: 960px) {
    margin-left: 300px;
  }

  @media (min-width: 1300px) {
    margin-left: 316px;
  }

  @media (min-width: 1650px) {
    margin-left: 316px;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);

  border-bottom: 1px solid var(--secondary);

  > h3 {
    padding-top: 16px;
    padding-bottom: 8px;
    font-size: 24px;
    font-family: 500;
  }
  > p {
    font-size: 20px;
    font-family: 400;
    padding-bottom: 16px;
  }
`;


//! Side bar menu
export const SidebarMenu = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 72px;
    left: 0;

    padding: 8px 16px;

    width: min(300px, auto);
    height: 92vh;
    overflow-y: auto;
  }
`;

export const MembersSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 16px;

  @media (min-width: 960px) {
    align-items: flex-start;
  }
`;

export const DirexSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 0;
  padding-top: 16px;
  border-top: 1px solid var(--secondary);

  @media (min-width: 960px) {
    align-items: flex-start;
  }
`;

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 960px) {
    > span {
      display: inline;
      margin-left: 16px;

      font-size: 19px;
      color: var(--white);
    }

    padding-right: 16px;
  }

  padding: 8px;
  outline: 0;

  cursor: pointer;
  border-radius: 25px;

  &:hover,
  &.active {
    background: var(--sinc-menu-bar-hover);
    > span, svg {
      color: var(--sinc-light-color);
    }
  }
`;

//??cones do menu lateral
const iconCSSMenuBar = css`
  flex-shrink: 0;

  width: 32px;
  height: 32px;
  color: var(--white);
`;

export const NotationIcon = styled(AddAlarm)`${iconCSSMenuBar}`;
export const TaskDoneIcon = styled(Task)`${iconCSSMenuBar}`;
export const SDRIcon = styled(HeadsetMic)`${iconCSSMenuBar}`;
export const MuralIcon = styled(NotificationsNone)`${iconCSSMenuBar}`;
export const ProfessorsIcon = styled(Analyse)`${iconCSSMenuBar}`;
export const CalendarIcon = styled(CalendarToday)`${iconCSSMenuBar}`;
export const CloudIcon = styled(CloudQueue)`${iconCSSMenuBar}`;
export const PerformanceIcon = styled(InsertChartOutlined)`${iconCSSMenuBar}`;
export const DirexIcon = styled(Rocket)`${iconCSSMenuBar}`;


//! Bottom menu
export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--secondary);

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

// ??cones usados na p??gina est??tica
const iconCSSBottomBar = css`
  width: 32px;
  height: 32px;

  cursor: pointer;

  fill: var(--white);
  
  &:hover,
  &.active {
    fill: var(--sinc-light-color)
  }
`;

export const NotationBottomIcon = styled(AddAlarm)`${iconCSSBottomBar}`;
export const SDRBottomIcon = styled(HeadsetMic)`${iconCSSBottomBar}`;
export const MuralBottomIcon = styled(NotificationsNone)`${iconCSSBottomBar}`;
export const CalendarBottomIcon = styled(CalendarToday)`${iconCSSBottomBar}`;
export const MenuBottomIcon = styled(Menu)`${iconCSSBottomBar}`;