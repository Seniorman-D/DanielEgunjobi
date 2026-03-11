import { cp, mkdir, stat } from 'node:fs/promises';

async function pathExists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function copyDir(sourceDir, destDir) {
  if (!(await pathExists(sourceDir))) return;
  await mkdir(destDir, { recursive: true });
  // Node 18+ supports recursive directory copy
  await cp(sourceDir, destDir, { recursive: true, force: true });
}

async function main() {
  await mkdir('dist', { recursive: true });

  // Keep deployed assets in dist/ in sync with source folders.
  await copyDir('assets', 'dist/assets');
  await copyDir('images', 'dist/images');

  // Light sanity check: ensure dist/index.html exists.
  if (!(await pathExists('dist/index.html'))) {
    throw new Error('dist/index.html not found. This project expects built site files in dist/.');
  }

  console.log('Build complete: dist/ is ready.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
