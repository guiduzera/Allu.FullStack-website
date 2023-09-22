import Link from 'next/link';
import { useRouter } from 'next/router';
import { LinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
}

export default function LinkHeader({ title, path, includes = false }: Props) {
  const router = useRouter();

  const verifyIfTrue = () => {
    if (includes) {
      return router.pathname.includes(path);
    }
    return router.pathname === path;
  };

  return (
    <LinkContainer isActive={verifyIfTrue()}>
      <Link href={path} legacyBehavior>
        <a>{title}</a>
      </Link>
    </LinkContainer>
  );
}