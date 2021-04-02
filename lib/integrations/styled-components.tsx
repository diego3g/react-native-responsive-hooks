import React, { ReactNode, useMemo } from 'react'
import { css, DefaultTheme, ThemedCssFunction, ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ScreenContextData } from '../ScreenProvider';

import { useScreen } from '../hooks/useScreen';

import { BreakpointValuesWithBase, getNearestBreakpointValue } from '../utils/getNearestBreakpointValue';
import { MediaQuery, validateMediaQuery } from '../utils/validateMediaQuery';
import { rem } from '../utils/rem';

type Screen = Pick<ScreenContextData, 'breakpoint' | 'padding'> & {
  breakpointValue<T = unknown>(values: BreakpointValuesWithBase<T>): T | undefined
  mediaQuery(query: Omit<MediaQuery, 'currentBreakpoint'>): boolean;
  rem(size: number, shouldScale?: boolean): number;
}

export interface ResponsiveTheme {
  screen: Screen;
};

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { breakpoint, padding, fontScaleFactor } = useScreen()

  const theme = useMemo<ResponsiveTheme>(() => {
    return {
      screen: {
        breakpoint,
        padding,
        rem: (size, shouldScale) => {
          return rem({
            size,
            shouldScale,
            baseFontSize: breakpoint.baseFontSize,
            fontScaleFactor,
          })
        },
        breakpointValue: (values) => {
          return getNearestBreakpointValue({
            breakpoint: breakpoint.size,
            values,
          })
        },
        mediaQuery: ({ minBreakpoint, maxBreakpoint, platform }) => {
          return validateMediaQuery({
            minBreakpoint,
            maxBreakpoint,
            platform,
            currentBreakpoint: breakpoint.size,
          })
        }
      }
    }
  }, [breakpoint, padding])

  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  );
}