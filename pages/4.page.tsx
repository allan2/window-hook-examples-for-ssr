import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'

// Reed, assignment fix
const NotWorkingEx4 = () => {
  const { width } = useWindowSize()

  return <div>{width > 1000 ? 'a' : 'b'}</div>
}

export default NotWorkingEx4

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {},
})

// https://dev.to/reedbarger/how-to-create-a-usewindowsize-react-hook-2bcm
// same as Ex. 3, but with minor fix in assignment of isSSR

// note the default width is greater than our breakpoint, meaning
// the error now shows up on the smaller viewport instead of on the larger viewport
function useWindowSize() {
  const isSSR = typeof window === 'undefined'
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
