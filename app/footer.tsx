export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">Fundleaf</p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Fundleaf
        </p>
      </div>
    </footer>
  );
}
