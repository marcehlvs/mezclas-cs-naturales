const TABS = [
  { id: "mezclas", label: "Mezclas", emoji: "🧫" },
  { id: "metodos", label: "Métodos", emoji: "🔬" },
  { id: "juego", label: "Juego", emoji: "🎮" },
];

export default function Tabs({ active, onChange }) {
  return (
    <nav className="tabs">
      {TABS.map((t) => (
        <button
          key={t.id}
          className={active === t.id ? "active" : ""}
          onClick={() => onChange(t.id)}
        >
          <span className="tab-emoji">{t.emoji}</span>
          {t.label}
        </button>
      ))}
    </nav>
  );
}
