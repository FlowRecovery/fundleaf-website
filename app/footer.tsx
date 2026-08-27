import WeeklyShortlist from "./components/weekly-shortlist";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-shortlist">
          <WeeklyShortlist id="footer-shortlist" />
        </div>
        <div className="footer-bottom">
          <p className="footer-brand">Fundleaf</p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Fundleaf
          </p>
        </div>
      </div>
    </footer>
  );
}
