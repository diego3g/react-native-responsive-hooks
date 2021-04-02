import 'styled-components';
import { ResponsiveTheme } from '../lib/integrations/styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ResponsiveTheme {}
}