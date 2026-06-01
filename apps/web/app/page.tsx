export default function Home() {
  return (
    <main className="site">
      <div className="animated-bg" aria-hidden="true">
        <span className="ball ball-1" />
        <span className="ball ball-2" />
        <span className="ball ball-3" />
        <span className="ball ball-4" />
        <span className="ball ball-5" />
      </div>

      <section className="hero">
        <p className="eyebrow">KoraNow for Players</p>
        <h1>Find football matches, teams, and challenges in your city.</h1>
        <p className="lead">
          Join Morocco’s football social platform to connect with players, create
          squads, and compete in real-time challenge rooms.
        </p>
        <div className="actions">
          <a href="#" className="btn btn-primary">
            Join now
          </a>
          <a href="#" className="btn btn-secondary">
            Explore cities
          </a>
        </div>
      </section>

      <section className="features">
        <article className="feature-card">
          <h2>Smart matchmaking</h2>
          <p>Get matched with players and teams based on location and skill level.</p>
        </article>
        <article className="feature-card">
          <h2>Live challenge rooms</h2>
          <p>Coordinate lineups, chat, and manage challenge flow in one place.</p>
        </article>
        <article className="feature-card">
          <h2>Ratings & trust</h2>
          <p>Build your reputation through performance ratings and fair play.</p>
        </article>
      </section>
    </main>
  );
}
