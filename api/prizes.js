// /api/prizes.js
// Secure Vercel serverless function that loads global prize settings
// from your protected Google Apps Script endpoint.

import fetch from "node-fetch";

export default async function handler(req, res) {
    try {
        // Your protected Google Script URL (server-side only)
        const SCRIPT_URL =
          "https://script.google.com/macros/s/AKfycbzRPYerMsEUMdaSD3waH6_4ggL6J2apSebI29qSzrZcfZ8r4Sy6vS9pGdPV5n_u4-wfLw/exec";

        const response = await fetch(SCRIPT_URL);
        const data = await response.json();

        // Expected structure:
        //  {
        //    prizes: [...],
        //    displayCount: number,
        //    theme: "dark" or "light"
        //  }

        res.status(200).json({
            prizes: data.prizes || [],
            displayCount: data.displayCount || (data.prizes?.length || 0),
            theme: data.theme || "dark"
        });

    } catch (err) {
        console.error("Prizes API Error:", err);
        res.status(500).json({ error: "Failed to load global settings" });
    }
}
