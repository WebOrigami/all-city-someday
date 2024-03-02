// Convert a Date object to "January 1, 2024" format.
export default function formatDate(date) {
  return date?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
