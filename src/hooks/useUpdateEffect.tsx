import { EffectCallback, useEffect, useRef } from 'react'

export function useUpdateEffect(effect: EffectCallback, deps?: React.DependencyList) {
  const isFirstMount = useRef(true)

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
    }
    return effect()
  }, deps)
}
