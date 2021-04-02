import styled, { css } from 'styled-components/native'

export const Header = styled.View`
  background-color: #121214; 
  flex-direction: row;
  align-items: center;
  height: ${({ theme }) => theme.screen.rem(3) + theme.screen.padding.top}px;
  padding: ${({ theme }) => theme.screen.padding.top}px 24px 0;
`;

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: ${({ theme }) => theme.screen.breakpointValue({
    base: 'column',
    lg: 'row',
  })};
`;

export const Sidebar = styled.View`
  flex: 1;
  background-color: #CCC;

  ${({ theme }) => theme.screen.mediaQuery({
    minBreakpoint: 'lg'
  }) && css`
    flex: 2;
    background-color: #1257e6;
  `}
`;