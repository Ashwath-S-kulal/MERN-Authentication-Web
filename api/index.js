import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// --- Proper __dirname for ESM ---
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);   // e.g. .../api

const app = express();

// --- Core middleware first ---
app.use(express.json());
app.use(cookieParser());

// --- API routes BEFORE any catch-all ---
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// --- Static assets for the SPA ---
// If index.js is in /api and the client is at /client, use ../client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// --- SPA fallback (place LAST). Two safe options; use ONE ---

// Option A: RegExp excluding /api/* (bypasses path-to-regexp)
app.get(/^\/(?!api\/).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Option B: Named param pattern (Express 5-safe) — if you prefer this, comment A out
// app.get('/:path(.*)', (req, res, next) => {
//   if (req.path.startsWith('/api/')) return next();
//   res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
// });

// --- Error handler LAST ---
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ success: false, message, statusCode });
});

// --- Start server AFTER routes ---
// Use Render's PORT if present
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});

// --- DB connect (optional: you can move this above if you want to fail fast) ---
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));
