import express from "express";
import cors from "cors";
import main from "./main.js"; // Ensure main.js has "export default"

const app = express();
app.use(cors());

app.get("/", (_, res) => {
  res.send("Hello Coders! use `/vrf/:id`");
});

app.get("/vrf/:id", async (req, res) => {
  const id = req.params.id;
  const data = await main(id);
  return res.json({
    id,
    vrf: data,
    timestamp: new Date().toISOString(),
  });
});

export default app;
