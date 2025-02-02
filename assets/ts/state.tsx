import {
  createContext,
  createSignal,
  useContext,
  type Accessor,
  type JSX,
  type Setter
} from 'solid-js'
import invariant from 'tiny-invariant'

import { decrement, getThresholdSessionIndex, increment } from './utils'

/**
 * interfaces and types
 */

export interface ThresholdRelated {
  threshold: number
  trailLength: number
}

export interface State {
  index: number
  length: number
  threshold: number
  trailLength: number
}

export type StateContextType = readonly [
  Accessor<State>,
  {
    readonly setIndex: (index: number) => void
    readonly incIndex: () => void
    readonly decIndex: () => void
    readonly incThreshold: () => void
    readonly decThreshold: () => void
  }
]

/**
 * constants
 */

// Threshold is hard coaded in `partials/nav.html`
const thresholds: ThresholdRelated[] = [
  { threshold: 60, trailLength: 20 },
]

const makeStateContext: (
  state: Accessor<State>,
  setState: Setter<State>
) => StateContextType = (state: Accessor<State>, setState: Setter<State>) => {
  return [
    state,
    {
      setIndex: (index: number) => {
        setState((s) => {
          return { ...s, index }
        })
      },
      incIndex: () => {
        setState((s) => {
          return { ...s, index: increment(s.index, s.length) }
        })
      },
      decIndex: () => {
        setState((s) => {
          return { ...s, index: decrement(s.index, s.length) }
        })
      },
      incThreshold: () => {
        setState((s) => {
          return { ...s, ...updateThreshold(s.threshold, thresholds, 1) }
        })
      },
      decThreshold: () => {
        setState((s) => {
          return { ...s, ...updateThreshold(s.threshold, thresholds, -1) }
        })
      }
    }
  ] as const
}
const StateContext = createContext<StateContextType>()

/**
 * helper functions
 */

function updateThreshold(
  currentThreshold: number,
  thresholds: ThresholdRelated[],
  stride: number
): ThresholdRelated {
  const i = thresholds.findIndex((t) => t.threshold === currentThreshold) + stride
  if (i < 0 || i >= thresholds.length) return thresholds[i - stride]
  // storage the index so we can restore it even if we go to another page
  sessionStorage.setItem('thresholdsIndex', i.toString())
  return thresholds[i]
}

/**
 * StateProvider
 */

export function StateProvider(props: {
  children?: JSX.Element
  length: number
}): JSX.Element {
  // Directly use the hardcoded threshold of 60
  const defaultState: State = {
    index: -1,
    length: props.length,
    threshold: thresholds[0].threshold,  // Always use the first threshold (60)
    trailLength: thresholds[0].trailLength,  // Corresponding trailLength for threshold 60
  }

  const [state, setState] = createSignal(defaultState)
  // eslint-disable-next-line solid/reactivity
  const contextValue = makeStateContext(state, setState)
  return (
    <StateContext.Provider value={contextValue}>{props.children}</StateContext.Provider>
  )
}

/**
 * use context
 */

export function useState(): StateContextType {
  const uc = useContext(StateContext)
  invariant(uc, 'undefined context')
  return uc
}
