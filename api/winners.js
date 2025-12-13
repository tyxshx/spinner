<<<<<<< HEAD
// /api/winners.js
// Secure Vercel serverless function that fetches daily winners from Google Sheet
// WITHOUT exposing the sheet ID to the frontend.

import fetch from "node-fetch";

export default async function handler(req, res) {
    try {
        // Your actual Google Sheet export URL (server-side only, safe)
        const SHEET_URL =
          "https://docs.google.com/spreadsheets/d/19YjtZAaasx8_xzSC-TJje7yxT00g3HcjloaLK31bjKY/export?format=csv";

        const csvResponse = await fetch(SHEET_URL);
        const csvText = await csvResponse.text();

        // Parse CSV manually (safe + simple)
        const rows = csvText
            .split("\n")
            .map(r => r.split(","))
            .filter(r => r.length >= 3);

        // Google Form sheet structure:
        // Column 1 = Timestamp
        // Column 2 = Name
        // Column 3 = Prize

        const today = new Date();
        const todayStr = today.toISOString().slice(0, 10); // YYYY-MM-DD

        const winners = rows
            .map(r => ({
                time: r[0],
                name: r[1],
                prize: r[2]
            }))
            .filter(r => r.time && r.time.startsWith(todayStr));

        res.status(200).json(winners);
    } catch (err) {
        console.error("Winners API Error:", err);
        res.status(500).json({ error: "Failed to load winners" });
    }
}
=======
// /api/winners.js
// Secure Vercel serverless function that fetches daily winners from Google Sheet
// WITHOUT exposing the sheet ID to the frontend.

import fetch from "node-fetch";

export default async function handler(req, res) {
    try {
        // Your actual Google Sheet export URL (server-side only, safe)
        const SHEET_URL =
          "https://docs.google.com/spreadsheets/d/19YjtZAaasx8_xzSC-TJje7yxT00g3HcjloaLK31bjKY/export?format=csv";

        const csvResponse = await fetch(SHEET_URL);
        const csvText = await csvResponse.text();

        // Parse CSV manually (safe + simple)
        const rows = csvText
            .split("\n")
            .map(r => r.split(","))
            .filter(r => r.length >= 3);

        // Google Form sheet structure:
        // Column 1 = Timestamp
        // Column 2 = Name
        // Column 3 = Prize

        const today = new Date();
        const todayStr = today.toISOString().slice(0, 10); // YYYY-MM-DD

        const winners = rows
            .map(r => ({
                time: r[0],
                name: r[1],
                prize: r[2]
            }))
            .filter(r => r.time && r.time.startsWith(todayStr));

        res.status(200).json(winners);
    } catch (err) {
        console.error("Winners API Error:", err);
        res.status(500).json({ error: "Failed to load winners" });
    }
}
>>>>>>> 6f3fa4f43290353c703db2bba1c2b1dda11d2400
