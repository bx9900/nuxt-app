<template>
  <div class="html-stream-page">
    <h1>{{ $t('htmlStream.title') }}</h1>
    <p class="description">{{ $t('htmlStream.description') }}</p>

    <p class="hint">{{ $t('htmlStream.hint') }}</p>

    <div class="blocks">
      <Suspense>
        <template #default>
          <SlowData :delay="500" title="Block 1 — Fast" />
        </template>
        <template #fallback>
          <div class="loading">Loading block 1...</div>
        </template>
      </Suspense>

      <Suspense>
        <template #default>
          <SlowData :delay="1500" title="Block 2 — Medium" />
        </template>
        <template #fallback>
          <div class="loading">Loading block 2...</div>
        </template>
      </Suspense>

      <Suspense>
        <template #default>
          <SlowData :delay="3000" title="Block 3 — Slow" />
        </template>
        <template #fallback>
          <div class="loading">Loading block 3...</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<style scoped>
.html-stream-page h1 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.description {
  color: #6c757d;
  margin-bottom: 1rem;
}

.hint {
  background: #e8f5e9;
  border-left: 3px solid #00dc82;
  padding: 0.75rem 1rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: #2e7d32;
  border-radius: 0 6px 6px 0;
}

.loading {
  padding: 2rem;
  text-align: center;
  color: #6c757d;
  font-style: italic;
}
</style>
