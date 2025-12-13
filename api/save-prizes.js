<<<<<<< HEAD
// /api/save-prizes.js
// Secure serverless function that sends updated global settings
// (prizes, displayCount, theme) to your private Google Apps Script.

import fetch from "node-fetch";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        // Your secured Google Script URL — server-side only
        const SCRIPT_URL =
          "https://script.google.com/macros/s/AKfycbzRPYerMsEUMdaSD3waH6_4ggL6J2apSebI29qSzrZcfZ8r4Sy6vS9pGdPV5n_u4-wfLw/exec";

        // Payload should include:
        // {
        //   prizes: [...],
        //   displayCount: number,
        //   theme: "dark" or "light"
        // }

        const body = req.body;

        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        const result = await response.json();

        res.status(200).json({
            success: true,
            result
        });

    } catch (err) {
        console.error("Save Prizes API Error:", err);
        res.status(500).json({ error: "Failed to save settings" });
    }
}
=======
// /api/save-prizes.js
// Secure serverless function that sends updated global settings
// (prizes, displayCount, theme) to your private Google Apps Script.

import fetch from "node-fetch";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        // Your secured Google Script URL — server-side only
        const SCRIPT_URL =
          "https://script.google.com/macros/s/AKfycbzRPYerMsEUMdaSD3waH6_4ggL6J2apSebI29qSzrZcfZ8r4Sy6vS9pGdPV5n_u4-wfLw/exec";

        // Payload should include:
        // {
        //   prizes: [...],
        //   displayCount: number,
        //   theme: "dark" or "light"
        // }

        const body = req.body;

        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        const result = await response.json();

        res.status(200).json({
            success: true,
            result
        });

    } catch (err) {
        console.error("Save Prizes API Error:", err);
        res.status(500).json({ error: "Failed to save settings" });
    }
}
>>>>>>> 6f3fa4f43290353c703db2bba1c2b1dda11d2400
