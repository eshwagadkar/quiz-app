# React Quiz App — Core Concepts Showcase

**A minimal, elegant quiz application built with React that demonstrates core React concepts:** `useState`, `useCallback`, `useRef`, timers & intervals (progress bar), dynamic styling, and the importance of the `key` attribute.

---

## ⚡ Overview

This repository contains a compact Quiz application intended to teach and demonstrate practical usage patterns for React fundamentals. The app presents multiple-choice questions, enforces per-question time limits with a visible progress bar, and uses modern React hooks and patterns to keep logic predictable, performant, and easy to reason about.

Designed for learners and engineers who want a small but production-minded example showing how to avoid common pitfalls (stale closures, unnecessary re-renders, manual useEffect hacks) while building an interactive UI.

---

## 🎯 Features

- Single-page quiz UI built with functional components.
- Per-question countdown timer with progress bar driven by `setInterval`.
- Controlled state using `useState` and stable callbacks with `useCallback`.
- DOM access and mutable values (timers) handled with `useRef` to avoid re-renders.
- Proper `key` usage for list rendering to avoid stale DOM mapping.
- Dynamic styling to reflect answer selection, correctness, and progress.
- Clean separation of concerns: `Quiz`, `Question`, `Answers`, and `ProgressBar` components.

---
