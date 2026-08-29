# T^AI engine registry

T^AI runtime inference does **not** execute on GitHub. GitHub is the source/versioning and publication plane; Vercel is the runtime engine plane; Nephesh is the static visual plane.

Current live runtime: `https://taibridge.vercel.app` (M4_STABLE + YT_NATIVE_v1).

Current prepared engine source snapshot: `T_AI_M4_3_4_VERCEL_PREVIEW_SOURCE_2026-08-29.zip`
SHA-256: `0b7f763581397077127d1cb2a0a8e275d1e67e98a0aee12827529d5b631af230`

Frontend M4.3.5 performs capability negotiation. It works immediately against M4_STABLE/Gemini and will expose FIELD/PLURAL/WEAVE automatically when the corresponding Vercel routes become live.

Invariant contract: `winner=null`, `vote=null`, `global_score=null`, `automatic_optimization=false`.
