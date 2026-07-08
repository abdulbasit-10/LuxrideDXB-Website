import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';

export function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="font-display text-4xl font-semibold text-brand-black">404</h1>
      <p className="mt-2 text-brand-gray">Page not found.</p>
      <Link to="/" className="mt-6 text-brand-red underline underline-offset-4">
        Back to home
      </Link>
    </Container>
  );
}
