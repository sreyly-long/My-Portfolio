import { Link } from "react-router-dom";

function Nopage() {
  return (
    <main className="nopage">
      <div>
        <div className="code gradient-text">404</div>
        <h2>Page not found</h2>
        <p>The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-grad">
          <i className="bi bi-house ms-0 me-1" /> Back to Home
        </Link>
      </div>
    </main>
  );
}
export default Nopage;
