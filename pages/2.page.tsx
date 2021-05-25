import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'

// Adrien
const Ex2Working = () => {
  const { width } = useWindowDimensions()

  return <div>{typeof width !== 'undefined' && width > 1000 ? 'a' : 'b'}</div>
}

export default Ex2Working

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {},
})

// https://dev.to/adrien/creating-a-custom-react-hook-to-get-the-window-s-dimensions-in-next-js-135k
const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowDimensions
}

type WindowDimensions = {
  width: number | undefined
  height: number | undefined
}
