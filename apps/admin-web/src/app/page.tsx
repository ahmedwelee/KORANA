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
      <img src="https://github.com/user-attachments/assets/b1ad18c8-a031-4082-bcad-bfbe70377f32" alt="KoraNow" style={{ width: 180, borderRadius: 12 }} />
      <h1>KoraNow Admin Panel</h1>
      <p>Moderation, verification, and city challenge feed operations.</p>
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
