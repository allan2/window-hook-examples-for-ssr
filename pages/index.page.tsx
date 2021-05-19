import Link from 'next/link'

const Home = () => (
  <ol>
    <LinkItem href="/1" text="Not working (rooks)" />
    <LinkItem href="/2" text="Working (Adrien)" />
    <LinkItem href="/3" text="Not working (Reed) – only works on dev" />
    <LinkItem href="/4" text="Not working (Reed)" />
    <LinkItem href="/5" text="Working (proposed for rooks)" />
    <p>The test breakpoint is set to 1000px.</p>
  </ol>
)

export default Home

const LinkItem = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link href={href}>
      <a>{text}</a>
    </Link>
  </li>
)
