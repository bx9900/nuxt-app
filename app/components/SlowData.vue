<template>
  <div class="slow-data">
    <h3>{{ title }}</h3>
    <p>{{ body }}</p>
    <span class="timestamp">Loaded after {{ delay }}ms</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ delay: number; title: string }>()

const body = await new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve(`This content was streamed from the server after a ${props.delay}ms delay. The page shell rendered immediately while this block was still loading.`)
  }, props.delay)
})
</script>

<style scoped>
.slow-data {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.slow-data h3 {
  color: #00dc82;
  margin-bottom: 0.5rem;
}

.timestamp {
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.75rem;
  color: #adb5bd;
  background: #f1f3f5;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
</style>
