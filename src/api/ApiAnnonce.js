export async function getAnnonces() {
  const response = await fetch('/data/annonces.json');
  if (!response.ok) throw new Error('Erreur lors du chargement');
  return response.json();
}