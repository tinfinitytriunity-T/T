# T^AI Engine Registry

GitHub is the canonical source/version ledger for T^AI. It does not execute inference.

- Runtime: Vercel project `t_ai_bridge`
- Production baseline remains `M4_STABLE + YT_NATIVE_v1` until an explicitly validated Preview is promoted.
- Current prepared source: `M4_3_6_RESILIENT_FIELD`
- Nephesh is a static HTML/CSS/JS surface and negotiates with the live engine through HTTPS/JSON.
- No model is sovereign: `winner=null`, `vote=null`, `global_score=null`, `automatic_optimization=false`.

The engine ZIP and its SHA-256 are recorded in `CURRENT.json`; `MANIFEST.m4.3.6.sha256.json` records the source tree hashes.
