"use client"; // Error components must be Client components

export default function Error({ error, reset }) {
  return (
    <div>
      this ain't loading up: {error.message}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
