import { BreakpointValuesWithBase, getNearestBreakpointValue } from '../utils/getNearestBreakpointValue';
import { useScreen } from './useScreen';

export function useBreakpointValue<T = unknown>(values: BreakpointValuesWithBase<T>): T | undefined {
  const { breakpoint } = useScreen()
  
  return getNearestBreakpointValue({
    breakpoint: breakpoint.size,
    values,
  })
}