import { useState } from 'react'
import useIsomorphicEffect from '@rooks/use-isomorphic-effect'
import { GetServerSideProps } from 'next'

// rooks, modified to work
const Ex5Working = () => {
  const { innerWidth } = useWindowSize()

  return <div>{innerWidth !== null && innerWidth > 1000 ? 'a' : 'b'}</div>
}

export default Ex5Working

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {},
})

/**
 * useWindowSize hook
 * A hook that provides information of the dimensions of the window
 *
 * @returns Dimensions of the window
 */

type WindowDimensions = {
  innerWidth: number | null
  innerHeight: number | null
  outerWidth: number | null
  outerHeight: number | null
}

const nullDimensions: WindowDimensions = {
  innerHeight: null,
  innerWidth: null,
  outerHeight: null,
  outerWidth: null,
}

function getDimensions(): WindowDimensions {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  }
}

export function useWindowSize(): WindowDimensions {
  //const [windowSize, setWindowSize] = useState<WindowDimensions>(() => {
  //  if (typeof window !== 'undefined') {
  //    return getDimensions()
  //  } else {
  //    return nullDimensions
  //  }
  //})
  const [windowSize, setWindowSize] = useState<WindowDimensions>(nullDimensions)

  // set resize handler once on mount and clean before unmount
  useIsomorphicEffect(() => {
    function onResize() {
      setWindowSize(getDimensions())
    }
    onResize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return windowSize
}
