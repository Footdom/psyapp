async function fetchLessonData(id) {
  const data = await fetch('data.json').then(r => r.json());
  return data.find(l => l.id === id);
}
