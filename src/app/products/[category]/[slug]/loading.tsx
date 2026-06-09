export default function ProductLoading() {
  return (
    <div
      style={{ background: 'var(--white)', minHeight: '100vh' }}
      aria-busy="true"
      aria-label="Loading product page"
    >
      {/* Breadcrumb skeleton */}
      <div
        style={{
          padding: '1rem 0',
          borderBottom: '1px solid var(--border)',
          background: 'var(--white)',
        }}
      >
        <div className="container">
          <SkeletonBar width="280px" height="14px" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div style={{ padding: '3rem 0 4rem', background: 'var(--white)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {/* Image skeleton */}
            <div>
              <SkeletonBlock aspectRatio="4/3" borderRadius="12px" />
              <div
                style={{ display: 'flex', gap: '0.625rem', marginTop: '0.875rem' }}
              >
                {[1, 2, 3].map((i) => (
                  <SkeletonBlock
                    key={i}
                    width="72px"
                    height="54px"
                    borderRadius="6px"
                  />
                ))}
              </div>
            </div>

            {/* Details skeleton */}
            <div>
              <SkeletonBar width="80px" height="12px" style={{ marginBottom: '0.75rem' }} />
              <SkeletonBar width="90%" height="40px" style={{ marginBottom: '0.5rem' }} />
              <SkeletonBar width="70%" height="40px" style={{ marginBottom: '1rem' }} />
              <SkeletonBar width="60%" height="16px" style={{ marginBottom: '1.5rem' }} />
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.625rem',
                  marginBottom: '1.5rem',
                }}
              >
                {[1, 2, 3, 4].map((i) => (
                  <SkeletonBlock key={i} height="64px" borderRadius="8px" />
                ))}
              </div>
              <SkeletonBlock height="52px" borderRadius="4px" style={{ marginBottom: '0.875rem' }} />
              <SkeletonBar width="160px" height="20px" style={{ margin: '0 auto' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Overview skeleton */}
      <div style={{ padding: '5rem 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <SkeletonBar width="120px" height="12px" style={{ marginBottom: '0.75rem' }} />
          <SkeletonBar width="380px" height="32px" style={{ marginBottom: '1.5rem' }} />
          <div style={{ borderLeft: '3px solid var(--gold-pale)', paddingLeft: '1.5rem' }}>
            <SkeletonBar width="100%" height="16px" style={{ marginBottom: '0.5rem' }} />
            <SkeletonBar width="95%" height="16px" style={{ marginBottom: '0.5rem' }} />
            <SkeletonBar width="80%" height="16px" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }
        .skeleton-pulse {
          background: linear-gradient(
            90deg,
            var(--surface-alt) 0%,
            var(--border) 50%,
            var(--surface-alt) 100%
          );
          background-size: 600px 100%;
          animation: shimmer 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

/* ── Skeleton primitives ───────────────────────────────────────────────────── */

function SkeletonBar({
  width = '100%',
  height = '16px',
  style,
}: {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="skeleton-pulse"
      style={{
        width,
        height,
        borderRadius: '4px',
        ...style,
      }}
      aria-hidden="true"
    />
  );
}

function SkeletonBlock({
  width = '100%',
  height,
  aspectRatio,
  borderRadius = '8px',
  style,
}: {
  width?: string;
  height?: string;
  aspectRatio?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="skeleton-pulse"
      style={{
        width,
        height,
        aspectRatio,
        borderRadius,
        ...style,
      }}
      aria-hidden="true"
    />
  );
}
