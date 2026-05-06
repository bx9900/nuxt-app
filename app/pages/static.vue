<template>
  <div class="static-page">
    <h1>{{ $t('static.title') }}</h1>
    <p class="description">{{ $t('static.description') }}</p>

    <div class="info-card">
      <h3>{{ $t('static.howItWorks') }}</h3>
      <ul>
        <li>{{ $t('static.point1') }}</li>
        <li>{{ $t('static.point2') }}</li>
        <li>{{ $t('static.point3') }}</li>
      </ul>
    </div>

    <div class="meta">
      <p><strong>{{ $t('static.generatedAt') }}:</strong> {{ buildTime }}</p>
      <p><strong>{{ $t('static.currentTime') }}:</strong> <span class="client-time">{{ clientTime }}</span></p>
    </div>
  </div>
</template>

<script setup>
// This runs at build time during prerendering
const buildTime = new Date().toISOString()

// This updates on the client after hydration
const clientTime = ref(buildTime)

onMounted(() => {
  clientTime.value = new Date().toISOString()
})
</script>

<style scoped>
.static-page h1 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.description {
  color: #6c757d;
  margin-bottom: 2rem;
}

.info-card {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.info-card h3 {
  color: #00dc82;
  margin-bottom: 0.75rem;
}

.info-card ul {
  list-style: none;
  padding: 0;
}

.info-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f3f5;
  color: #495057;
  padding-left: 1.25rem;
  position: relative;
}

.info-card li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #00dc82;
}

.info-card li:last-child {
  border-bottom: none;
}

.meta {
  background: #f1f3f5;
  border-radius: 8px;
  padding: 1.25rem;
  font-size: 0.875rem;
}

.meta p {
  margin-bottom: 0.5rem;
  color: #495057;
}

.meta p:last-child {
  margin-bottom: 0;
}

.client-time {
  color: #00dc82;
}
</style>
