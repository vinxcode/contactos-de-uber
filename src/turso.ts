import { createClient } from "@libsql/client/web";

const TURSO_DATABASE_URL = "libsql://prueba-vinxcode.turso.io"
const TURSO_AUTH_TOKEN = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTQwMjkxMzIsImlkIjoiZTYxYzczMzctOWZmMC00NWQzLTg2NmYtYmQxMmY5OGQ5MTAyIn0.6d-72_8-fEd0ex_vZg5WuMhCJftS3TflASsqiVVqKzOxjhTwZ3TpjDennd9ZXN5P3s3QTktJZ8lTSadQh_07CQ"

export const turso = createClient({
  url: TURSO_DATABASE_URL,
  authToken: TURSO_AUTH_TOKEN,
});