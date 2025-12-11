import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center landing-bg">
      <Container className="text-center">
        <h1 className="display-3 fw-bold hero-title">
          🎓 Fortune's Graduation Party 🎉
        </h1>

        <p className="lead mt-3">
          Under Construction… but the fun is ready!
        </p>

        <Button
          variant="danger"
          size="lg"
          className="mt-4 btn-hero"
          onClick={() => navigate("/main")}
        >
          Click Me
        </Button>
      </Container>
    </div>
  );
}
