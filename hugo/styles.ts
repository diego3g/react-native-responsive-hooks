import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: ${props => props.theme.screen.breakpointValue({
    base: 'column',
    lg: 'row',
  })};
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.screen.rem(2)}px;
  color: #fff;
`;

export const RightBox = styled.View`
  flex: 1;

  ${props => props.theme.screen.mediaQuery({
    platform: 'ios',
    minBreakpoint: 'lg'
  }) && css`
    background-color: #333;
  `}
`;