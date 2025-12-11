import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Main() {
  const program = [
    { time: "11:30 AM", event: "Guests Arrive" },
    { time: "11:50 AM", event: "Guests be seated" },
    { time: "12:00 PM", event: "Mass" },
    { time: "2:00 PM", event: "Foods is served" },
    { time: "3:30 PM", event: "Speeches" },
    { time: "4:30 PM", event: "Cake time" },
    { time: "5:00 PM", event: "Dance break/gifts" },
    { time: "6:00 PM", event: "Guests can leave at own pleasure" },
  ];

  return (
    <Container className="py-5">

      {/* Program Section */}
      <h2 className="text-center mb-4 section-title">Program</h2>

      <Row className="g-4 mb-5">
        {program.map((item, i) => (
          <Col md={6} key={i}>
            <Card className="shadow-sm program-card">
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{item.time}</Card.Title>
                <Card.Text>{item.event}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* RSVP Button */}
      <h3 className="text-center mb-3 section-title">RSVP</h3>

      <div className="text-center mb-5">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeRvIX6kg1-vtAiTyQ5TpbjHJUWHZSi-OPbO-z4ZH7Ti-ASfg/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-danger btn-lg rsvp-btn"
        >
          Fill RSVP Form
        </a>
      </div>

      {/* Spotify & Location */}
      <div className="text-center mt-4">
        <Button
          variant="danger"
          className="me-3 link-btn"
          href="https://open.spotify.com/playlist/3waEfgpa4h1NRFlJbFRg3M?si=xWdyYrguRpudjiLS0Xwxsg&pt=c69b9a792b3dead35dcb779145ecdffa&pi=nx-IXZERSnCzU"
          target="_blank"
        >
          🎵 Spotify Playlist
        </Button>

        <Button
          variant="outline-danger"
          className="link-btn"
          href="https://maps.app.goo.gl/wJb69w7kZYDtXzif6?g_st=am"
          target="_blank"
        >
          📍 Live Location
        </Button>
      </div>

    </Container>
  );
}
