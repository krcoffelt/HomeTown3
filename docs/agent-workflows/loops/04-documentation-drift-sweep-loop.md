# Hometown Documentation Drift Sweep Loop

Use after implementation changes or when docs may no longer match the current HometownKC routes, scripts, deployment process, content model, or QA workflows.

## Prompt

Run the Hometown Documentation Drift Sweep. Compare README, `docs/*`, build plan notes, SEO operations, testing docs, parity docs, and media docs against the current repo implementation. Identify one confirmed stale or misleading documentation area, update only that bounded area if approved, and run any relevant validation command for behavior referenced by the docs. Stop when the selected drift is fixed, no confirmed stale doc remains, or code/product decisions are needed.

## Workflow

1. Observe current scripts, routes, content model, env vars, deployment config, tests, and docs.
2. Choose the highest-impact confirmed doc drift.
3. Edit the smallest coherent doc section.
4. If documentation describes executable behavior, run the referenced command or a relevant substitute.
5. Record what changed and any deferred stale areas.

## Validation

- Use `npm run test`, `npm run typecheck`, or `npm run build` when documentation references tested or built behavior.
- For pure docs, verify paths, commands, and route names against the repo.

## Stop Conditions

- Success: the selected doc drift is fixed and checks or path verification pass.
- Clean no-op: no confirmed stale docs remain in the inspected scope.
- Blocked: the correct product/deployment decision is unknown.
- Approval-required: docs would need to declare a product, pricing, launch, or production-process change.
- No-progress: evidence is contradictory and cannot be resolved from repo files.

## Approval Boundary

Ask before changing public pricing, launch status, production runbooks, or any docs that imply an operational commitment not present in the repo.
