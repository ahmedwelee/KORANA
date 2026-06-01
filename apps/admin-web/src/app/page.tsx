import Link from 'next/link';

const cards = [
  { title: 'User Moderation', href: '/moderation/users' },
  { title: 'Team Moderation', href: '/moderation/teams' },
  { title: 'Reports Queue', href: '/reports' },
  { title: 'Team Verification', href: '/verification/teams' },
  { title: 'City Feeds', href: '/cities' },
];

export default function Home() {
  return (
    <main className="page">
      <div className="animated-bg" aria-hidden="true">
        <span className="ball ball-1" />
        <span className="ball ball-2" />
        <span className="ball ball-3" />
        <span className="ball ball-4" />
        <span className="ball ball-5" />
        <span className="ball ball-6" />
      </div>
      <section className="hero">
        <img src="https://github.com/user-attachments/assets/b1ad18c8-a031-4082-bcad-bfbe70377f32" alt="KoraNow" style={{ width: 180, borderRadius: 12 }} />
        <h1>KoraNow Admin Panel</h1>
        <p>Moderation, verification, and city challenge feed operations.</p>
      </section>
      <div className="grid">
        {cards.map((card) => (
          <Link className="card" key={card.href} href={card.href}>
            <h3>{card.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
