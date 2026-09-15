import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'var(--header-height)',
      }}
    >
      <div className="text-center">
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--fs-6xl)',
            color: 'var(--color-accent)',
            opacity: 0.3,
            lineHeight: 1,
            marginBottom: 'var(--space-4)',
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--fs-2xl)',
            marginBottom: 'var(--space-4)',
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: 'var(--color-secondary)',
            marginBottom: 'var(--space-8)',
            maxWidth: '400px',
            margin: '0 auto var(--space-8)',
          }}
        >
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/portfolio" className="btn btn-outline-primary">
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
