<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <header>
      <nav>
        <NuxtLink :to="localePath('/')" class="logo">{{ $t('nav.appName') }}</NuxtLink>
        <div class="nav-links">
          <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink :to="localePath('/about')">{{ $t('nav.about') }}</NuxtLink>
          <NuxtLink :to="localePath('/stream')">{{ $t('nav.stream') }}</NuxtLink>
        </div>
        <div class="lang-switcher">
          <a
            v-for="locale in availableLocales"
            :key="locale.code"
            href="#"
            :class="{ active: locale.code === currentLocale }"
            @click.prevent="setLocale(locale.code)"
          >
            {{ locale.name }}
          </a>
        </div>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>{{ $t('footer.builtWith') }}</p>
    </footer>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const currentLocale = locale
const availableLocales = computed(() => locales.value)
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1a1a2e;
  background: #f8f9fa;
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background: #fff;
  border-bottom: 1px solid #e9ecef;
  position: sticky;
  top: 0;
  z-index: 10;
}

nav {
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-weight: 700;
  font-size: 1.25rem;
  color: #00dc82;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #495057;
  font-weight: 500;
  padding: 0.25rem 0;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #00dc82;
  border-bottom-color: #00dc82;
}

.lang-switcher {
  display: flex;
  gap: 0.75rem;
}

.lang-switcher a {
  text-decoration: none;
  color: #6c757d;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
}

.lang-switcher a:hover {
  background: #e9ecef;
  color: #1a1a2e;
}

.lang-switcher a.active {
  background: #00dc82;
  color: #fff;
}

main {
  flex: 1;
  max-width: 960px;
  margin: 0 auto;
  padding: 3rem 2rem;
  width: 100%;
}

footer {
  background: #1a1a2e;
  color: #adb5bd;
  text-align: center;
  padding: 1.5rem 2rem;
  font-size: 0.875rem;
}
</style>
