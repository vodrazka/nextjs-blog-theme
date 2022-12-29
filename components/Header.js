import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
        <Link href="/">
          <a><img class="u-logo" id="profileAvatar" src="https://seccdn.libravatar.org/avatar/35c4aac34690d599b3ad80aee412113e?size=128&amp;default=mm" alt="avatar"/></a>
        </Link>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
