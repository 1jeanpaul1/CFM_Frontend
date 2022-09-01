export default function PageScroll() {
  return (
    <a
      href="#"
      title="Top of page"
      style={{
        position: 'fixed',
        right: '1rem',
        bottom: 'calc(1rem + 14px)',
        width: '2.8rem',
        height: '2.8rem',
        borderRadius: '50%',
        background:
          '#88B3FF url(\'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="3rem"  width="3rem" viewBox="0 0 24 24" fill="%23222"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z"/></svg>\') center no-repeat',
        boxShadow: '0 0.25rem 0.5rem 0 #222',
        opacity: 0.6,
      }}
    />
  );
}