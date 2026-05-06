<template>
  <div class="about">
    <h1>{{ $t('about.title') }}</h1>
    <p>
      {{ $t('about.description', { header: 'X-Custom-Header' }) }}
    </p>
    <div class="tech-stack">
      <h2>{{ $t('about.techStack') }}</h2>
      <ul>
        <li>{{ $t('about.nuxt') }}</li>
        <li>{{ $t('about.nitro') }}</li>
        <li>{{ $t('about.vue') }}</li>
        <li>{{ $t('about.routing') }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.about h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about p {
  color: #495057;
  max-width: 600px;
  margin-bottom: 2rem;
}

.tech-stack {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 400px;
}

.tech-stack h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.tech-stack ul {
  list-style: none;
  padding: 0;
}

.tech-stack li {
  padding: 0.4rem 0;
  border-bottom: 1px solid #f1f3f5;
  color: #495057;
}

.tech-stack li:last-child {
  border-bottom: none;
}
</style>
