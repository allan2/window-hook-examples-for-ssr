import useWindowSize from '@rooks/use-window-size'
import { GetServerSideProps } from 'next'

// rooks
const Ex1NotWorking = () => {
  const { innerWidth } = useWindowSize()

  return <div>{innerWidth !== null && innerWidth > 1000 ? 'a' : 'b'}</div>
}

export default Ex1NotWorking

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {},
})
