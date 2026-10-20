export function briefText(values) {
  return [
    `Name: ${values.name}`,
    values.company ? `Company: ${values.company}` : null,
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : null,
    `Service: ${values.service}`,
    "",
    values.message.trim(),
  ]
    .filter((line) => line !== null)
    .join("\n");
}
