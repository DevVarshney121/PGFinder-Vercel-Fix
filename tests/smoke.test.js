import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('public entry and admin entry exist', async () => {
  const home = await readFile(
    new URL('../public/index.html', import.meta.url), 'utf8'
  );
  const admin = await readFile(
    new URL('../public/admin.html', import.meta.url), 'utf8'
  );

  assert.match(home, /PGFinder/i);
  assert.match(admin, /admin/i);
});

test('database schema exists', async () => {
  const schema = await readFile(
    new URL('../database/schema.sql', import.meta.url), 'utf8'
  );

  assert.match(schema, /CREATE TABLE/i);
});

test('API router exists', async () => {
  const api = await readFile(
    new URL('../api/[...route].js', import.meta.url), 'utf8'
  );

  assert.match(api, /properties/i);
});