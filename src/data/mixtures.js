export const MIX_POOL = [
  { baseId: "sal", label: "Agua con sal", emoji: "🧂💧", type: "homogenea" },
  { baseId: "azucar", label: "Agua con azúcar", emoji: "🍬💧", type: "homogenea" },
  { baseId: "aire", label: "El aire", emoji: "🌬️", type: "homogenea" },
  { baseId: "vinagre", label: "Agua con vinagre", emoji: "🍾💧", type: "homogenea" },
  { baseId: "alcohol", label: "Agua con alcohol", emoji: "🧴💧", type: "homogenea" },
  { baseId: "te", label: "Té con limón colado", emoji: "🍋🍵", type: "homogenea" },
  { baseId: "arena", label: "Agua con arena", emoji: "🏖️💧", type: "heterogenea" },
  { baseId: "aceite", label: "Agua con aceite", emoji: "🛢️💧", type: "heterogenea" },
  { baseId: "ensalada", label: "Ensalada", emoji: "🥗", type: "heterogenea" },
  { baseId: "harina", label: "Agua con harina", emoji: "🥣💧", type: "heterogenea" },
  { baseId: "piedras", label: "Piedras con arena", emoji: "🪨🏖️", type: "heterogenea" },
  { baseId: "cereal", label: "Cereal con leche", emoji: "🥣🥛", type: "heterogenea" },
];

export function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function generateRound(roundNumber) {
  const homog = shuffle(MIX_POOL.filter((i) => i.type === "homogenea")).slice(0, 3);
  const heterog = shuffle(MIX_POOL.filter((i) => i.type === "heterogenea")).slice(0, 3);
  return shuffle([...homog, ...heterog]).map((item, idx) => ({
    ...item,
    uid: `${roundNumber}-${idx}-${item.baseId}`,
  }));
}
