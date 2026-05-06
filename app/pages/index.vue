<template>
  <div class="home">
    <section class="hero">
      <h1>{{ $t('home.welcome') }}</h1>
      <p class="subtitle">{{ $t('home.subtitle') }}</p>
    </section>
    <section class="features">
      <div class="card">
        <h3>{{ $t('home.ssr.title') }}</h3>
        <p>{{ $t('home.ssr.description') }}</p>
      </div>
      <div class="card">
        <h3>{{ $t('home.middleware.title') }}</h3>
        <p>{{ $t('home.middleware.description') }}</p>
      </div>
      <div class="card">
        <h3>{{ $t('home.fileRouting.title') }}</h3>
        <p>{{ $t('home.fileRouting.description') }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.subtitle {
  font-size: 1.125rem;
  color: #6c757d;
  max-width: 480px;
  margin: 0 auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.card {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.card h3 {
  margin-bottom: 0.5rem;
  color: #00dc82;
}
</style>
