import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

// Simple CSV parser for server use
function parseCSV(csvText: string): any[] {
  const lines = csvText.split(/\r?\n/);
  if (lines.length === 0 || !lines[0]) return [];
  const headers = lines[0].split(',').map(h => h.trim());
  
  const results: any[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const values: string[] = [];
    let insideQuote = false;
    let currentValue = '';
    
    for (let c = 0; c < line.length; c++) {
      const char = line[c];
      if (char === '"') {
        insideQuote = !insideQuote;
      } else if (char === ',' && !insideQuote) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim());
    
    const entity: any = {};
    headers.forEach((header, index) => {
      let val = values[index] || '';
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.substring(1, val.length - 1);
      }
      entity[header] = val;
    });
    results.push(entity);
  }
  return results;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsing middleware
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Directories paths
  const publicDir = path.join(process.cwd(), "public");
  const membersCsvPath = path.join(publicDir, "members.csv");
  const placementsCsvPath = path.join(publicDir, "placements.csv");

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Endpoints to fetch CSV Data
  app.get("/api/members", (req, res) => {
    try {
      if (fs.existsSync(membersCsvPath)) {
        const csvContent = fs.readFileSync(membersCsvPath, "utf-8");
        const parsed = parseCSV(csvContent);
        res.json({ success: true, data: parsed, csv: csvContent });
      } else {
        res.status(404).json({ success: false, error: "members.csv not found" });
      }
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.get("/api/placements", (req, res) => {
    try {
      if (fs.existsSync(placementsCsvPath)) {
        const csvContent = fs.readFileSync(placementsCsvPath, "utf-8");
        const parsed = parseCSV(csvContent);
        res.json({ success: true, data: parsed, csv: csvContent });
      } else {
        res.status(404).json({ success: false, error: "placements.csv not found" });
      }
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Serve static files in public
    app.use(express.static(publicDir));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`CIB Portfolio Portal running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
