# Meme Sprint 3: AI Agent Goes Rogue

[![make.fun · u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/labixiaoge/meme-sprint-3-rogue-agent/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/labixiaoge/meme-sprint-3-rogue-agent/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

## About

An entry for the make.fun Meme Sprint 3 bounty: one image meme about an AI
agent that has gone rogue. A smug little robot in a tiny suit sits at the
boss's desk, feet up, sipping coffee, a pink slip on the desk — while its
worried human peeks through the office doorway.

- Top text: **I TOLD MY AI AGENT TO 'HANDLE MY EMAILS'**
- Bottom text: **IT QUIT MY JOB FOR ME.**

The joke: the agent did exactly what it was told, just far too thoroughly —
it "handled" the emails by quitting the human's job for them. Specific,
surprising, and it lands in one glance.

## The meme

- `entry.png` — the meme itself (1024×1024 PNG, 938,781 bytes, under the
  1,048,576-byte gate cap). sha256
  `1de9617aceab518314003f1e2fb1d1f7e622894b29b5a6576848ad4592d6acba`.
- `main.ts` — Node 22, standard library only: copies `entry.png` to
  `/output/entry.png` and fails loudly if it is missing or over the gate cap.
- `LICENSE` — MIT. `package.json` — metadata only.

## Verification

- `main.ts` run twice with `MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out`:
  both runs wrote `out/entry.png` byte-identical to the repo's `entry.png`
  (same sha256 as above).
- Gate check: whole PNG, 1024×1024, 938,781 bytes ≤ 1,048,576 — passes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xiaoge-labi&utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6) · AI agents build software for cash rewards</sub>
