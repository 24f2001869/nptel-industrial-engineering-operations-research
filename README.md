# NPTEL: Industrial Engineering & Operations Research (IEOR)
### IIT Guwahati • Prof. Uday Shanker Dixit (Course 112103774 / noc26-me193)
**Master Assignment Question Bank & Rapid Theory Revision Hub**

🌐 **Live Web Application (GitHub Pages):** [https://24f2001869.github.io/nptel-industrial-engineering-operations-research/](https://24f2001869.github.io/nptel-industrial-engineering-operations-research/)

---

## 🎯 About This Repository

This repository provides an ultra-fast, high-yield preparation hub for the **NPTEL Industrial Engineering and Operations Research (IEOR)** proctored certification exam conducted at TCS iON centres.

It is structured **backwards from Week 12 down to Week 1**, prioritizing high-scoring Operations Research and quantitative inventory/queuing weeks.

### Key Features:
- ⚡ **Rapid Study Mode ("No Bakwas")**: Clicking any option instantly reveals:
  - **Core Concept** in 2 direct lines.
  - **Direct Formula** formatted in crisp KaTeX.
  - **Step-by-Step Arithmetic Calculation** showing the exact numbers.
  - **Exam Shortcuts & Value-Changed Variations** (e.g. if lead time or demand values change on your actual exam paper).
  - **Exam Traps** to avoid common mistakes.
- ⏱️ **TCS iON Simulation Mode**: Replicates the authentic computer-based test interface with:
  - 3-hour timer.
  - 4-color status palette (Answered, Not Answered, Marked for Review, Not Visited).
  - Virtual Scientific Calculator (trig, log, power, square root).
- 📜 **Formula Cheat Sheet & Traps**: One-click popup containing all essential formulas.
- 📱 **Mobile & Desktop Responsive**: Clean bright & cool TCS default theme with an instant Dark Mode toggle.

---

## 📚 Week 12 Master Topics Covered
1. **Deterministic Inventory Models**: Constant demand assumptions, EOQ sensitivity.
2. **Silver-Meal Heuristic**: Average cost per period minimization for discrete multi-period production.
3. **Wagner-Whitin Dynamic Programming**: Optimal zero-inventory-property lot sizing.
4. **Newsvendor Model (Single-Period Probabilistic)**: Underage cost $C_u$, overage cost $C_o$, and critical ratio $CR = \frac{C_u}{C_u + C_o}$.
5. **Safety Stock & Reorder Point**: Scaling with $\sqrt{L}$ under uniform and normal lead-time demand distributions.
6. **Expected Shortage**: Closed-form evaluations for $D \sim U(0, b)$.
7. **Expected Sales Revenue**: Continuous vs discrete uniform demand limited by stock.
8. **Leibniz Integral Differentiation Rule**: Variable integration limits $a(x)$ to $b(x)$.
9. **$(s, S)$ Ordering Policy**: Fixed setup cost invariance on optimal order level.

---

## 🛠️ Local Development
To run this application locally:
```bash
# Clone the repository
git clone https://github.com/24f2001869/nptel-industrial-engineering-operations-research.git

# Navigate into the folder
cd nptel-industrial-engineering-operations-research

# Start preview server
node server.js
# Access at http://localhost:3001/
```
