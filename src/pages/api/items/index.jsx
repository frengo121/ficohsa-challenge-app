import data from "../../../data.json";

export default function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(404).json({ error: "No se encontró el producto" });
  }

  const items = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!items || items.length === 0) {
    return res.status(404).json({ error: "Ítem no encontrado" });
  }

  res.status(200).json(items);
}
