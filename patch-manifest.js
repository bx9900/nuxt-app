/**
 * patch-manifest.js
 *
 * Patches .omega/deployment-manifest.json to add a rewrite rule
 * for the prerendered /ssg route so it serves /ssg/index.html.
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

  const route = manifest.routes.find((r) => r.source === '^/ssg$')

  if (route) {
    // Replace target with a rewrite to the index.html file
    route.target = {
      kind: 'rewrite',
      targetUri: '/ssg/index.html'
    }
    console.log('Patched /ssg target → rewrite to /ssg/index.html')
  } else {
    // Insert before the catch-all
    const catchAllIndex = manifest.routes.findIndex(
      (r) => r.source === '^(/.*)?$'
    )
    const newRoute = {
      source: '^/ssg$',
      target: {
        kind: 'rewrite',
        targetUri: '/ssg/index.html'
      },
      fallback: {
        kind: 'compute',
        computeName: 'default'
      }
    }
    manifest.routes.splice(catchAllIndex, 0, newRoute)
    console.log('Added /ssg rewrite route')
  }

  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n')
  console.log('Done.')
}

patch().catch((err) => {
  console.error('patch-manifest failed:', err)
  process.exit(1)
})
