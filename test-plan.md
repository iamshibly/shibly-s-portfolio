# Skills & Tools restructure — test plan

**PR:** https://github.com/iamshibly/shibly-s-portfolio/pull/11
**Preview:** https://dist-dlzznyrl.devinapps.com (public)

## What changed
`src/data/portfolio.ts` `skillGroups` reduced from three groups (AI/ML Research, LLM/Agents, Data & Engineering) to exactly two: **Core & ML** and **Tools & Platforms**. `SkillsSection.tsx` renders `skillGroups` into a responsive `repeat(auto-fit, minmax(360px, 1fr))` grid, so with two groups it becomes the requested left/right split.

## Primary flow (recorded, wide viewport)
1. Open `https://dist-dlzznyrl.devinapps.com` → click **Skills** in the top nav → the `#skills` section scrolls into view.
2. Verify the section renders **two** column headers side-by-side: "CORE & ML" on the left, "TOOLS & PLATFORMS" on the right. *(If the old code were still live, we'd instead see "AI / ML RESEARCH" + "LLM / AGENTS" and a third "DATA & ENGINEERING" below.)*
3. **Left column, Core & ML** — verify in order:
   - Federated Learning (top) — chips: `FedAvg`, `FedProx`, `Secure Aggregation`, `Differential Privacy`, `Non-IID`, `Self-Supervision`
   - Machine Learning — chips include `Feature Engineering`, `Feature Selection`, `Data Preprocessing`, `Data Analysis`, `Statistics`
   - Deep Learning & Transformers — chips: `PyTorch`, `Transformers`, `Attention`, `CNNs`
   - Explainable AI — chips: `SHAP`, `LIME`, `PDP`, `ICE`, `ALE`
   - Agentic AI — chips include `RAG`, `Vector Stores`, `Embeddings`
   - Programming — chips: `Python`, `C`, `Java`, `Dart` and **no** `Flutter`
4. **Right column, Tools & Platforms** — verify:
   - Development Tools — chips include `Git`, `GitHub`, `VS Code`, `LaTeX`, `Overleaf`
   - LLM Frameworks — chips include `LangChain`, `LangGraph`, `Chains`, `Output Parsers`, `Prompt Templates`
   - Data & ML Libraries — chips include `NumPy`, `Pandas`, `scikit-learn`
   - Visualization & Apps — chips include `Streamlit`, `MATLAB`, `Seaborn`
   - Databases — chips: `MySQL`, `MongoDB`
5. Resize the window narrow (< ~760px wide) → the two columns should stack vertically without overflow, Core & ML first, Tools & Platforms below.

## Pass/fail table
| # | Assertion | Would a broken impl look the same? |
|---|---|---|
| 1 | Exactly two column headers visible side by side: `CORE & ML` (left) and `TOOLS & PLATFORMS` (right) | No — old code shows 3 different headers |
| 2 | Federated Learning is the first entry in the left column | No — previously it was 2nd inside AI/ML Research |
| 3 | Programming chip list contains Python/C/Java/Dart but **no Flutter** | No — old list had Flutter |
| 4 | LangChain + LangGraph appear under **Tools & Platforms** (not Core) | No — previously under LLM/Agents |
| 5 | MySQL and MongoDB chips render under a **Databases** header on the right column | No — previously mixed with "Databases & Productivity" in 3rd group |
| 6 | Narrow viewport (~500px) stacks the two columns vertically with no horizontal scroll | No — a hard-coded flex row would overflow |
