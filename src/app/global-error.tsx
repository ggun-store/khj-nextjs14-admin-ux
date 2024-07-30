'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error?: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>DB is not working!</h2>
        <button onClick={() => reset()}>Try restart spring server.</button>
      </body>
    </html>
  )
}