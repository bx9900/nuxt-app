<template>
  <div class="stream-page">
    <h1>{{ $t('stream.title') }}</h1>
    <p class="description">{{ $t('stream.description') }}</p>

    <div class="stream-demo">
      <button @click="startStream" :disabled="loading">
        {{ loading ? $t('stream.loading') : $t('stream.start') }}
      </button>

      <div v-if="chunks.length" class="output">
        <div v-for="(chunk, i) in chunks" :key="i" class="chunk">
          {{ chunk }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const chunks = ref([])
const loading = ref(false)

async function startStream() {
  chunks.value = []
  loading.value = true

  try {
    const response = await fetch('/api/stream')
    const reader = response.body.getReader()
    const decoder = new TextDecoder()

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      const text = decoder.decode(value, { stream: true })
      chunks.value.push(text)
    }
  } catch (e) {
    chunks.value.push(`Error: ${e.message}`)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.stream-page h1 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.description {
  color: #6c757d;
  margin-bottom: 2rem;
}

.stream-demo button {
  background: #00dc82;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.stream-demo button:hover:not(:disabled) {
  opacity: 0.85;
}

.stream-demo button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.output {
  margin-top: 1.5rem;
  background: #1a1a2e;
  border-radius: 8px;
  padding: 1.5rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.875rem;
  color: #e9ecef;
  max-height: 400px;
  overflow-y: auto;
}

.chunk {
  padding: 0.25rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
