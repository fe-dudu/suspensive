import { DevMode } from './DevMode'
import { ErrorBoundary } from './ErrorBoundary'
import { Suspense } from './Suspense'

describe('<DevMode/>', () => {
  it('should return just null this should be removed at @suspensive/react v3', () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    expect(DevMode({})).toBe(null)
  })
  ;(() => (
    <Suspense
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      devMode={{}}
    />
  ))() // devMode prop jsdoc deprecated
  ;(() => (
    <ErrorBoundary
      fallback={() => null}
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      devMode={{}}
    />
  ))() // devMode prop jsdoc deprecated
})
