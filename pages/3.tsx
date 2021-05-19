import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'

// Reed, no fixes
// Note: this page will not build
const Ex3NotWorking = () => {
  const { width } = useWindowSize()

  return <div>{width > 1000 ? 'a' : 'b'}</div>
}

export default Ex3NotWorking

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {},
})

// https://dev.to/reedbarger/how-to-create-a-usewindowsize-react-hook-2bcm
function useWindowSize() {
  const isSSR = typeof window !== 'undefined'
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  })

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize)

    return () => {
      window.removeEventListener('resize', changeWindowSize)
    }
  }, [])

  return windowSize
}
