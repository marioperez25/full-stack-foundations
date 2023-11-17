import { installGlobals } from '@remix-run/node'
installGlobals()

// test

if (process.env.NODE_ENV === 'production') {
	await import('./server-build/index.js')
} else {
	await import('./server/index.ts')
}
