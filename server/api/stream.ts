export default defineEventHandler(async (event) => {
  setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  setResponseHeader(event, 'Transfer-Encoding', 'chunked')
  setResponseHeader(event, 'Cache-Control', 'no-cache')
  setResponseHeader(event, 'Connection', 'keep-alive')

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      const messages = [
        'Connecting to server...',
        'Fetching data from source...',
        'Processing chunk 1 of 5...',
        'Processing chunk 2 of 5...',
        'Processing chunk 3 of 5...',
        'Processing chunk 4 of 5...',
        'Processing chunk 5 of 5...',
        'Compiling results...',
        'Stream complete ✓'
      ]

      for (const msg of messages) {
        controller.enqueue(encoder.encode(msg + '\n'))
        await new Promise((resolve) => setTimeout(resolve, 500))
      }

      controller.close()
    }
  })

  return sendStream(event, stream)
})
