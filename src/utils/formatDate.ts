const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

export function formatDate(date: string) {
  const partes = date.split('/').map(Number);
  const data = new Date(20 + partes[2], partes[1] - 1, partes[0]);
  const diaSemana = days[data.getDay() % 7];
  const mes = months[data.getMonth()];
  return [partes[0], partes[1], partes[2], mes.toLowerCase(), diaSemana.toLowerCase()];
}