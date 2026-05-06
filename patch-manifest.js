/**
 * patch-manifest.js
 *
 * Adds a URL rewrite to .omega/deployment-manifest.json so that
 * prerendered routes (e.g. /ssg) serve /ssg/index.html from static assets.
 *
 * Usage:
 *   node patch-manifest.js
 */

import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const MANIFEST_PATH = resolve('.omega/deployment-manifest.json')

async function patch() {
  const raw = await readFile(MANIFEST_PATH, 'utf-8')
  const manifest = JSON.parse(raw)

  // Find the /ssg route and add a rewrite
  const route = manifest.routes.find((r) => r.source === '^/ssg$')

  if (route) {
    route.target.rewrite = '/ssg/index.html'
    console.log('Patched /ssg → /ssg/index.html')
  } else {
    console.warn('No /ssg route found in manifest')
  }

  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n')
  console.log('Done.')
}

patch().catch((err) => {
  console.error('patch-manifest failed:', err)
  process.exit(1)
})
