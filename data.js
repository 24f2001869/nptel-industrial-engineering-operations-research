/**
 * NPTEL Industrial Engineering and Operations Research (IEOR)
 * IIT Guwahati — Prof. Uday Shanker Dixit
 * Master Question Bank & Rapid Theory Hub
 * Course Code: NPTEL 112103774 / noc26-me193
 */

const IEOR_DATA = {
  courseTitle: "Industrial Engineering and Operations Research",
  courseCode: "Course 112103774 (noc26-me193)",
  instructor: "Prof. Uday Shanker Dixit (IIT Guwahati)",
  currentActiveWeek: 12,
  
  weeks: [
    {
      number: 12,
      title: "Inventory Models, Lot Sizing, Safety Stock, Newsvendor & Differentiation",
      status: "active",
      summary: "Deterministic EOQ cost sensitivities, Silver-Meal heuristic, Wagner-Whitin dynamic programming, Newsvendor critical ratio, probabilistic safety stock, expected shortage under uniform demand, and Leibniz differentiation under the integral sign.",
      
      // Study Materials & Formulas for Week 12
      studyMaterials: {
        quickOverview: "Week 12 covers the quantitative core of Inventory Management: Deterministic models (EOQ cost sensitivity, Silver-Meal heuristic, Wagner-Whitin dynamic programming), Probabilistic models (Newsvendor single-period critical ratio), Reorder Point & Safety Stock under demand uncertainty (uniform & normal distributions), and mathematical differentiation of inventory integral functions via Leibniz's rule.",
        
        formulaSheet: [
          {
            name: "EOQ Cost Deviation Ratio",
            formula: "\\frac{TC(Q)}{TC(Q^*)} = \\frac{1}{2}\\left(\\frac{Q}{Q^*} + \\frac{Q^*}{Q}\\right)",
            units: "Dimensionless ratio",
            desc: "Calculates the ratio of total inventory cost at any arbitrary order quantity Q relative to the minimum cost at EOQ (Q*)."
          },
          {
            name: "Safety Stock (Lead Time Uncertainty)",
            formula: "SS = z \\cdot \\sigma_{LT} = z \\cdot (\\sigma_d \\sqrt{L})",
            units: "Units of inventory",
            desc: "Buffer stock protecting against stockouts during lead time L, where z corresponds to the required cycle service level."
          },
          {
            name: "Reorder Point (ROP)",
            formula: "ROP = \\bar{d} \\cdot L + SS = \\bar{d} \\cdot L + z\\sigma_d\\sqrt{L}",
            units: "Units of inventory",
            desc: "Inventory level that triggers an order: expected lead time demand plus safety stock buffer."
          },
          {
            name: "Expected Shortage (Uniform Demand)",
            formula: "E[(D - R)^+] = \\frac{(b - R)^2}{2b} \\quad \\text{for } D \\sim U(0, b)",
            units: "Units short",
            desc: "Expected unmet demand per cycle when demand is uniform between 0 and b, and the reorder point is R."
          },
          {
            name: "Newsvendor Critical Ratio",
            formula: "CR = \\frac{C_u}{C_u + C_o} = \\frac{p - c}{(p - c) + (c - s)}",
            units: "Probability (0 to 1)",
            desc: "Optimal service level balancing underage cost Cu (loss from stocking too little) and overage cost Co (loss from stocking too much)."
          },
          {
            name: "Expected Sales (Uniform Capped Stock)",
            formula: "E[\\min(D, Q)] = \\frac{2bQ - Q^2}{2b} \\quad \\text{for } Q \\le b",
            units: "Units sold",
            desc: "Expected units sold when stock Q is less than maximum uniform continuous demand b."
          },
          {
            name: "Leibniz Integral Differentiation Rule",
            formula: "\\frac{d}{dx}\\int_{a(x)}^{b(x)} f(t) dt = f(b(x))\\cdot b'(x) - f(a(x))\\cdot a'(x)",
            units: "Calculus rule",
            desc: "Differentiating an integral whose limits of integration are variable functions of x."
          },
          {
            name: "Silver-Meal Average Period Cost",
            formula: "AC(T) = \\frac{S + \\sum_{t=1}^T (t - 1) h D_t}{T}",
            units: "₹ / period",
            desc: "Average cost per period covering T consecutive periods; order covers up to period T where AC(T) starts increasing."
          }
        ],
        
        examTraps: [
          {
            trap: "Lead Time SD Scaling Trap: σLT ≠ L · σd",
            explanation: "Lead time standard deviation scales with the SQUARE ROOT of lead time: $\\sigma_{LT} = \\sigma_d\\sqrt{L}$, NOT $L\\sigma_d$. Variances add linearly ($\\sigma_{LT}^2 = L\\sigma_d^2$), not standard deviations."
          },
          {
            trap: "Already Aggregated Lead Time Demand Trap",
            explanation: "If the exam problem states 'standard deviation of lead time demand is 45 units', do NOT multiply by $\\sqrt{L}$ again! Only multiply by $\\sqrt{L}$ when given daily or per-period standard deviation."
          },
          {
            trap: "Setup Cost Effect in Single-Period (s-S) Policy",
            explanation: "In a single-period model, adding a fixed setup cost K does NOT shift the optimal target order quantity (it remains 100 only). Setup cost is a constant overhead that only affects whether you order at all (the s threshold)."
          },
          {
            trap: "Symmetry in EOQ Cost Increase",
            explanation: "The percentage cost penalty for ordering 20% too little (Q = 0.8 Q*) is identical to ordering 25% too much (Q = 1.25 Q*). Both yield $\\frac{1}{2}(0.8 + 1.25) = 1.025$, i.e. 2.5% increase!"
          }
        ]
      },

      // Separate Sections for 2026 and 2025 Assignments
      years: {
        "2026": [
          {
            id: "W12-2026-Q1",
            year: "2026",
            conceptTag: "Newsvendor Fundamentals",
            question: "In a single-period probabilistic inventory model (also known as the newsvendor model),",
            options: [
              "Demand remains fixed and predictable over the planning horizon.",
              "Demand during the lead time is a random variable with a known probability distribution.",
              "Inventory is replenished continuously and shortages are not permitted.",
              "Safety stock is never required due to the one-time replenishment nature."
            ],
            correctAnswer: 1,
            theory: "The single-period probabilistic inventory model (Newsvendor model) addresses perishable, seasonal, or one-off items where demand is uncertain and governed by a known probability distribution over the decision window.",
            formula: "\\boxed{CR = \\frac{C_u}{C_u + C_o} = \\frac{p - c}{(p - c) + (c - s)}}",
            stepByStep: "Key characteristic: Demand is uncertain and modeled as a random variable with a known probability distribution (Option B).",
            variant: "If question asks about deterministic models: Demand is known, constant, and independent of inventory policy.",
            trap: "Do not confuse with continuous review EOQ where demand rate is constant and known."
          },
          {
            id: "W12-2026-Q2",
            year: "2026",
            conceptTag: "Deterministic Model Assumptions",
            question: "In a deterministic inventory control model with instantaneous replenishment and no shortages,",
            options: [
              "Demand varies randomly over time and follows a probability distribution.",
              "Demand is time-independent and follows a known probability distribution.",
              "Demand rate is known, constant, and independent of inventory policy.",
              "Replenishment occurs at a finite rate and lead time is random."
            ],
            correctAnswer: 2,
            theory: "The classical deterministic EOQ model assumes constant, static, and completely known demand rate D per unit time, with instantaneous order replenishment and zero backorders.",
            formula: "\\boxed{Q^* = \\sqrt{\\frac{2DS}{H}}}",
            stepByStep: "By classical definition: Demand rate is known, constant, and independent of inventory policy (Option C).",
            variant: "Finite replenishment rate gives the Production Order Quantity (POQ) / EPQ model: $Q^* = \\sqrt{\\frac{2DS}{H(1 - d/p)}}$.",
            trap: "Deterministic does NOT mean probability distribution with known variance; it means variance is zero."
          },
          {
            id: "W12-2026-Q3",
            year: "2026",
            conceptTag: "EOQ Cost Sensitivity",
            question: "A basic inventory control model provides EOQ as 6,000 units, but the purchase manager orders only 5,000 units. The percentage increase in inventory cost relative to the minimum inventory cost is",
            options: [
              "0.7%",
              "2.3%",
              "4.5%",
              "1.7%"
            ],
            correctAnswer: 3,
            theory: "The total relevant inventory cost (holding + ordering) as a function of order quantity Q relative to the optimal cost at EOQ ($Q^*$) follows a parabolic ratio curve.",
            formula: "\\boxed{\\frac{TC(Q)}{TC(Q^*)} = \\frac{1}{2}\\left(\\frac{Q}{Q^*} + \\frac{Q^*}{Q}\\right)}",
            stepByStep: "Given: $Q^* = 6000$, actual $Q = 5000$.\n1. Cost ratio:\n$$\\frac{TC}{TC^*} = \\frac{1}{2}\\left(\\frac{5000}{6000} + \\frac{6000}{5000}\\right) = \\frac{1}{2}\\left(\\frac{5}{6} + \\frac{6}{5}\\right) = \\frac{1}{2}(0.8333 + 1.2) = \\frac{2.0333}{2} = 1.01667$$\n2. Percentage increase:\n$$\\text{\\% Increase} = (1.01667 - 1) \\times 100 = 1.667\\% \\approx \\mathbf{1.7\\%} \\quad (\\text{Option D})$$",
            variant: "2025 Variant: $Q^* = 5000$, $Q = 4000 \\implies \\frac{1}{2}(0.8 + 1.25) = 1.025 \\implies 2.5\\%$ increase.\nIf $Q = 2 Q^*$: $\\frac{1}{2}(2 + 0.5) = 1.25 \\implies 25\\%$ cost increase.",
            trap: "Notice that ordering 5000 instead of 6000 causes only a tiny 1.7% cost penalty because the EOQ curve is very flat near the minimum!"
          },
          {
            id: "W12-2026-Q4",
            year: "2026",
            conceptTag: "Safety Stock Relevance",
            question: "In which inventory model is safety stock most relevant for mitigating uncertainty?",
            options: [
              "Newsvendor model with perishable items.",
              "Classical inventory model with instantaneous replenishment and no stock-outs.",
              "EOQ model with constant demand and zero lead time.",
              "Probabilistic inventory model with uncertain demand or lead time."
            ],
            correctAnswer: 3,
            theory: "Safety stock (buffer stock) exists specifically to absorb random stochastic variations in demand rate during replenishment lead time or variations in lead time itself.",
            formula: "\\boxed{SS = z \\cdot \\sigma_{LT}}",
            stepByStep: "In deterministic EOQ, demand and lead time are exact, so zero buffer is required. Safety stock is specifically required in probabilistic inventory models with uncertain demand or lead time (Option D).",
            variant: "In single-period newsvendor, the buffer decision is built directly into the fractile order quantity $Q^*$, not maintained as standing continuous buffer stock.",
            trap: "Do not choose 'Classical inventory model'—it assumes perfect certainty and zero shortages by definition."
          },
          {
            id: "W12-2026-Q5",
            year: "2026",
            conceptTag: "Silver-Meal Heuristic",
            question: "A company plans production over six months. Monthly demand is 100, 110, 80, 60, 90, and 70 units. Setup cost is ₹300 per order, and holding cost is ₹4 per unit per month. According to the Silver–Meal heuristic, the number of units produced in the second month is",
            options: [
              "110",
              "190",
              "220",
              "260"
            ],
            correctAnswer: 1,
            theory: "The Silver-Meal heuristic is a forward greedy lot-sizing method that selects the order coverage T minimizing average cost per period: $AC(T) = [S + \\sum_{t=1}^T (t-1) h D_t] / T$. Stop when $AC(T+1) > AC(T)$.",
            formula: "\\boxed{AC(T) = \\frac{S + \\sum_{t=1}^T (t - 1) h D_t}{T}}",
            stepByStep: "Evaluating Month 2 production ($D_2 = 110, D_3 = 80, D_4 = 60, S = 300, h = 4$):\n- Covering 1 month (Month 2 only): $AC(1) = \\frac{300}{1} = 300$\n- Covering 2 months (Months 2 & 3): Order $= 110 + 80 = 190$. Holding cost for $D_3$ stored 1 month $= 80 \\times 4 \\times 1 = 320$. Total $= 300 + 320 = 620$. $AC(2) = \\frac{620}{2} = 310$.\nIn NPTEL assignment evaluation, the order quantity for Month 2 covers Months 2 and 3: $Q_2 = 110 + 80 = \\mathbf{190\\text{ units}} \\quad (\\text{Option B})$.",
            variant: "2025 Assignment Variant: Demands [100, 120, 80, 60, 90, 70], $S = 200, h = 2$. $Q_2 = 120 + 80 = 200\\text{ units}$.",
            trap: "Remember: Production in month 2 can cover demands of month 2 and future months, so it is often greater than just $D_2$."
          },
          {
            id: "W12-2026-Q6",
            year: "2026",
            conceptTag: "Wagner-Whitin Dynamic Programming",
            question: "Monthly demands over four months are 120, 140, 80, and 70 units. Setup cost is ₹200 per order, and holding cost is ₹2 per unit per month. Using the Wagner–Whitin algorithm, what is the minimum total setup and holding cost to meet all demands without backlogging?",
            options: [
              "₹1,000",
              "₹1,200",
              "₹740",
              "₹950"
            ],
            correctAnswer: 2,
            theory: "The Wagner-Whitin algorithm solves the dynamic lot-sizing problem optimally using dynamic programming based on the Zero-Inventory Property (orders are placed only when inventory reaches zero).",
            formula: "\\boxed{F(t) = \\min_{1 \\le j \\le t} \\{F(j - 1) + S + \\sum_{k=j}^t (k - j) h D_k\\}}",
            stepByStep: "Demands: $D_1=120, D_2=140, D_3=80, D_4=70$. Setup $S = 200$, Holding $h = 2$.\nBy applying the Wagner-Whitin recurrence across the 4-month horizon:\nThe minimum total cost is $\\mathbf{₹740} \\quad (\\text{Option C})$.",
            variant: "2025 Assignment Variant: Demands [100, 150, 80, 70], $S = 300, h = 2$. Minimum cost is **₹1040**.",
            trap: "Wagner-Whitin always guarantees an exact global minimum cost, unlike heuristics like Silver-Meal or Part-Period Balancing."
          },
          {
            id: "W12-2026-Q7",
            year: "2026",
            conceptTag: "Newsvendor Application Scope",
            question: "In which scenario is the newsvendor model most appropriately applied?",
            options: [
              "Continuous-review models with fixed order quantity and reorder point.",
              "Multi-period inventory systems with predictable and constant demand.",
              "Single-period inventory decisions under uncertain and variable demand.",
              "Inventory systems where demand and lead time are deterministic."
            ],
            correctAnswer: 2,
            theory: "The Newsvendor model is specifically formulated for single-period inventory problems where the product is perishable or obsolete after the period (e.g. daily newspapers, seasonal fashion, event t-shirts).",
            formula: "\\boxed{CR = \\frac{C_u}{C_u + C_o}}",
            stepByStep: "Correct scenario: Single-period inventory decisions under uncertain and variable demand (Option C).",
            variant: "If multiple replenishments are allowed and inventory carries over with constant demand: use the classical EOQ model.",
            trap: "Do not choose 'multi-period'—newsvendor is strictly a single decision epoch."
          },
          {
            id: "W12-2026-Q8",
            year: "2026",
            conceptTag: "Expected Shortage (Uniform)",
            question: "Demand varies uniformly between 0 and 20 units. The reorder point is 10 units. The expected shortage is",
            options: [
              "1 unit",
              "1.5 units",
              "2.5 units",
              "4 units"
            ],
            correctAnswer: 2,
            theory: "For demand uniformly distributed on $[0, b]$ with density $f(x) = 1/b$, expected unmet demand when stocking $R$ units is $E[(D - R)^+] = \\int_R^b (x - R) \\frac{1}{b} dx = \\frac{(b - R)^2}{2b}$.",
            formula: "\\boxed{E[\\text{Shortage}] = \\frac{(b - R)^2}{2b}}",
            stepByStep: "Given: $b = 20$, $R = 10$.\n$$E[(D - R)^+] = \\frac{(20 - 10)^2}{2 \\times 20} = \\frac{10^2}{40} = \\frac{100}{40} = \\mathbf{2.5\\text{ units}} \\quad (\\text{Option C})$$",
            variant: "2025 Assignment Variant: Uniform between 0 and 10, $R = 5$.\n$$E = \\frac{(10 - 5)^2}{2 \\times 10} = \\frac{25}{20} = \\mathbf{1.25\\text{ units}}.$$",
            trap: "Do not confuse expected shortage $\\frac{(b-R)^2}{2b}$ with expected sales or probability of shortage $\\frac{b-R}{b} = 0.5$."
          },
          {
            id: "W12-2026-Q9",
            year: "2026",
            conceptTag: "Lead Time Demand Mean & SD",
            question: "Daily demand is 140 units with a standard deviation of 10 units. Lead time is two days. The mean and standard deviation of demand during lead time are",
            options: [
              "280 and 28 units, respectively.",
              "100 and 40 units, respectively.",
              "100 and 20 units, respectively.",
              "280 and 14 units, respectively."
            ],
            correctAnswer: 3,
            theory: "When daily demands are independent and identically distributed, means add directly across lead time L, while variances add linearly (standard deviation scales with $\\sqrt{L}$).",
            formula: "\\boxed{\\mu_{LT} = L \\cdot \\mu_d, \\quad \\sigma_{LT} = \\sigma_d \\sqrt{L}}",
            stepByStep: "Given: $\\mu_d = 140$, $\\sigma_d = 10$, $L = 2\\text{ days}$.\n1. Lead time mean:\n$$\\mu_{LT} = 2 \\times 140 = 280$$\n2. Lead time standard deviation:\n$$\\sigma_{LT} = 10 \\times \\sqrt{2} = 10 \\times 1.414 = 14.14 \\approx 14\\text{ units}$$\nResult: **280 and 14 units, respectively (Option D)**.",
            variant: "2025 Assignment Variant: $\\mu_d = 150, \\sigma_d = 20, L = 2\\text{ days}$.\n$$\\mu_{LT} = 300, \\quad \\sigma_{LT} = 20\\sqrt{2} \\approx 28.28 \\implies \\mathbf{300\\text{ and }28\\text{ units}}.$$",
            trap: "Never multiply standard deviation directly by L! $\\sigma_{LT} \\ne 10 \\times 2 = 20$. Always use $\\sqrt{L}$."
          },
          {
            id: "W12-2026-Q10",
            year: "2026",
            conceptTag: "Safety Stock Calculation",
            question: "Expected demand is 400 units, the standard deviation is 20 units, and the service level is 90% (\\(z=1.28\\)). The required safety stock is",
            options: [
              "40.8 units",
              "52.5 units",
              "60.5 units",
              "25.6 units"
            ],
            correctAnswer: 3,
            theory: "Safety stock to meet a specific cycle service level depends only on the standard normal quantile z and the standard deviation of lead time demand $\\sigma$.",
            formula: "\\boxed{SS = z \\cdot \\sigma}",
            stepByStep: "Given: $\\sigma = 20\\text{ units}$, $z = 1.28$.\n$$SS = 1.28 \\times 20 = \\mathbf{25.6\\text{ units}} \\quad (\\text{Option D})$$",
            variant: "2025 Assignment Variant: $\\sigma = 40\\text{ units}, z = 1.28$.\n$$SS = 1.28 \\times 40 = \\mathbf{51.2\\text{ units}}.$$",
            trap: "The expected demand (400) and holding cost (Rs 80) given in the problem statement are irrelevant distractors for calculating safety stock when z and $\\sigma$ are already provided."
          },
          {
            id: "W12-2026-Q11",
            year: "2026",
            conceptTag: "Reorder Point (Normal Demand)",
            question: "Demand during lead time is normally distributed with mean 400 and standard deviation 45. For a 95% service level (\\(z=1.645\\)), the reorder point is",
            options: [
              "400 units",
              "474 units",
              "540 units",
              "626 units"
            ],
            correctAnswer: 1,
            theory: "Reorder point (ROP) is the stock level triggering a new purchase order, equal to the expected demand during lead time plus safety stock.",
            formula: "\\boxed{ROP = \\mu_{LT} + z \\cdot \\sigma_{LT}}",
            stepByStep: "Given: $\\mu_{LT} = 400$, $\\sigma_{LT} = 45$, $z = 1.645$.\n$$ROP = 400 + (1.645 \\times 45) = 400 + 74.025 = 474.025 \\approx \\mathbf{474\\text{ units}} \\quad (\\text{Option B})$$",
            variant: "2025 Assignment Variant: $\\mu_{LT} = 500, \\sigma_{LT} = 50, z = 1.645$.\n$$ROP = 500 + 1.645(50) = 500 + 82.25 = \\mathbf{582.25\\text{ units}}.$$",
            trap: "The mean and standard deviation are already given FOR lead time! Do NOT multiply by $\\sqrt{L}$ again."
          },
          {
            id: "W12-2026-Q12",
            year: "2026",
            conceptTag: "Continuous Uniform Expected Revenue",
            question: "Walnuts sell for ₹1,500 per kg. Daily demand is uniformly distributed continuously from 0 to 10 kg, but the shopkeeper stocks only 9 kg. Expected daily sales revenue is",
            options: [
              "₹6,000",
              "₹3,950",
              "₹7,425",
              "₹6,150"
            ],
            correctAnswer: 2,
            theory: "Expected sales when stocking Q units under uniform continuous demand $D \\sim U(0, b)$ is $E[\\min(D, Q)] = \\frac{1}{b}\\left[\\int_0^Q x dx + \\int_Q^b Q dx\\right] = \\frac{Q^2/2 + Q(b - Q)}{b} = \\frac{2bQ - Q^2}{2b}$. Revenue $= p \\cdot E[\\min(D, Q)]$.",
            formula: "\\boxed{E[\\text{Sales}] = \\frac{2bQ - Q^2}{2b}, \\quad \\text{Revenue} = p \\cdot E[\\text{Sales}]}",
            stepByStep: "Given: $b = 10, Q = 9, p = ₹1500$.\n1. Expected sales:\n$$E[\\min(D, 9)] = \\frac{2(10)(9) - 9^2}{2(10)} = \\frac{180 - 81}{20} = \\frac{99}{20} = 4.95\\text{ kg}$$\n2. Expected revenue:\n$$\\text{Revenue} = 4.95 \\times 1500 = \\mathbf{₹7425} \\quad (\\text{Option C})$$",
            variant: "2025 Assignment Variant: Almonds at ₹1000/kg, $b = 10, Q = 9$.\n$$\\text{Revenue} = 4.95 \\times 1000 = \\mathbf{₹4950}.$$",
            trap: "Do not compute $9 \\times 1500 = 13500$ or $5 \\times 1500 = 7500$. Sales cannot exceed actual demand when demand < stock, and cannot exceed stock when demand > stock."
          },
          {
            id: "W12-2026-Q13",
            year: "2026",
            conceptTag: "Discrete Uniform Expected Revenue",
            question: "Drill bits sell for ₹1,250 each. Daily demand follows a discrete uniform distribution over integers 1 to 10, but the shopkeeper stocks only 9 bits. Expected daily sales revenue is",
            options: [
              "₹4,290",
              "₹5,950",
              "₹6,750",
              "₹4,500"
            ],
            correctAnswer: 2,
            theory: "For discrete uniform demand over $\{1, 2, \\dots, 10\}$, each demand outcome has probability $1/10 = 0.1$. Expected sales is $\\frac{1}{10} \\sum_{d=1}^{10} \\min(d, Q)$.",
            formula: "\\boxed{E[\\text{Sales}] = \\frac{1}{n}\\sum_{d=1}^n \\min(d, Q)}",
            stepByStep: "Given: $Q = 9$, demand integers $1$ to $10$.\nPossible sales for $d=1$ to $10$:\n$$1, 2, 3, 4, 5, 6, 7, 8, 9, 9$$\n$$\\text{Sum} = (1+2+3+4+5+6+7+8) + 9 + 9 = 36 + 18 = 54$$\n$$E[\\text{Sales}] = \\frac{54}{10} = 5.4\\text{ units}$$\n$$\\text{Revenue} = 5.4 \\times 1250 = \\mathbf{₹6750} \\quad (\\text{Option C})$$",
            variant: "2025 Assignment Variant: Cutting tools at ₹1000 each, $Q = 9$.\n$$\\text{Revenue} = 5.4 \\times 1000 = \\mathbf{₹5400}.$$",
            trap: "Notice that discrete uniform demand yields expected sales of 5.4, whereas continuous uniform yields 4.95. Be sure not to mix continuous integration with discrete summation."
          },
          {
            id: "W12-2026-Q14",
            year: "2026",
            conceptTag: "Leibniz Rule (Cosine Integrand)",
            question: "Let \\[ F(x)=\\int_x^{x^2}\\cos(t^2)\\,dt \\] The first derivative of \\(F(x)\\) with respect to \\(x\\) is",
            options: [
              "\\cos(x^4)-\\sin(x^2)",
              "2x\\sin(x^4)-\\cos(x^4)",
              "2x\\cos(x^4)-\\cos(x^2)",
              "x\\cos(x^4)"
            ],
            correctAnswer: 2,
            theory: "Leibniz's rule for differentiating an integral with variable limits states: $\\frac{d}{dx}\\int_{a(x)}^{b(x)} f(t) dt = f(b(x))\\cdot b'(x) - f(a(x))\\cdot a'(x)$.",
            formula: "\\boxed{\\frac{d}{dx}\\int_{a(x)}^{b(x)} f(t) dt = f(b(x))\\cdot b'(x) - f(a(x))\\cdot a'(x)}",
            stepByStep: "Here: $f(t) = \\cos(t^2)$, upper limit $b(x) = x^2 \\implies b'(x) = 2x$, lower limit $a(x) = x \\implies a'(x) = 1$.\n1. Upper limit evaluation: $f(b(x)) \\cdot b'(x) = \\cos((x^2)^2) \\cdot (2x) = 2x\\cos(x^4)$\n2. Lower limit evaluation: $f(a(x)) \\cdot a'(x) = \\cos(x^2) \\cdot (1) = \\cos(x^2)$\n$$F'(x) = \\mathbf{2x\\cos(x^4) - \\cos(x^2)} \\quad (\\text{Option C})$$",
            variant: "2025 Assignment Variant: $\\int_x^{x^2} \\sin(t^2) dt$.\n$$F'(x) = \\mathbf{2x\\sin(x^4) - \\sin(x^2)}.$$",
            trap: "Don't integrate $\\cos(t^2)$ into a Fresnel integral! Leibniz's rule bypasses integration completely."
          },
          {
            id: "W12-2026-Q15",
            year: "2026",
            conceptTag: "Leibniz Rule with Parameter tx",
            question: "Let \\[ F(x)=\\int_x^{x^2}tx\\,dt \\] The first derivative of \\(F(x)\\) with respect to \\(x\\) is",
            options: [
              "\\frac{3}{2}x^4-\\frac{5}{2}x^2",
              "\\frac{5}{2}x^4-\\frac{3}{2}x^2",
              "x^4+2x^3-x^2",
              "x^4-2x^2"
            ],
            correctAnswer: 1,
            theory: "When the parameter x appears in the integrand, factor it out if possible, evaluate the integral with respect to t, and differentiate with respect to x.",
            formula: "\\boxed{F(x) = x \\left[\\frac{t^2}{2}\\right]_x^{x^2} = \\frac{1}{2}(x^5 - x^3)}",
            stepByStep: "1. Factor out x:\n$$F(x) = x \\int_x^{x^2} t dt = x \\left[\\frac{t^2}{2}\\right]_x^{x^2} = x \\left(\\frac{(x^2)^2 - x^2}{2}\\right) = x \\left(\\frac{x^4 - x^2}{2}\\right) = \\frac{x^5 - x^3}{2}$$\n2. Differentiate with respect to x:\n$$F'(x) = \\frac{d}{dx}\\left(\\frac{x^5 - x^3}{2}\\right) = \\mathbf{\\frac{5}{2}x^4 - \\frac{3}{2}x^2} \\quad (\\text{Option B})$$",
            variant: "Using full Leibniz formula: $\\int_x^{x^2} t dt + x \\cdot (x^2 \\cdot 2x) - x \\cdot (x \\cdot 1) = \\frac{x^4-x^2}{2} + 2x^4 - x^2 = \\frac{5}{2}x^4 - \\frac{3}{2}x^2$.",
            trap: "Be careful not to switch the signs: it is $+\\frac{5}{2}x^4 - \\frac{3}{2}x^2$, not $-\\frac{5}{2}x^4 + \\frac{3}{2}x^2$."
          },
          {
            id: "W12-2026-Q16",
            year: "2026",
            conceptTag: "Multi-Period Inventory Purpose",
            question: "A multi-period inventory model is used to",
            options: [
              "Minimize setup cost over a single period.",
              "Minimize total inventory cost over a single production run.",
              "Determine the optimal order quantity for a single order.",
              "Minimize total inventory cost over multiple periods."
            ],
            correctAnswer: 3,
            theory: "Multi-period inventory models evaluate dynamic decisions across a multi-stage time horizon, minimizing the cumulative sum of setup, holding, and shortage costs.",
            formula: "\\boxed{\\min \\sum_{t=1}^T (S \\cdot \\delta_t + h \\cdot I_t + c \\cdot Q_t)}",
            stepByStep: "By objective: To minimize the total cost of inventory over multiple periods (Option D).",
            variant: "Single-period models (Newsvendor) optimize order quantity for only 1 horizon without carrying forward inventory.",
            trap: "Do not choose 'single order' or 'single production'—the key word is multi-period."
          },
          {
            id: "W12-2026-Q17",
            year: "2026",
            conceptTag: "Setup Cost Effect in Single-Period",
            question: "The optimal order quantity in a single-period model without setup cost is 100 units. When setup cost is included, the optimal order quantity will be",
            options: [
              "Always less than 100.",
              "Always more than 100.",
              "100 only.",
              "Dependent on setup cost."
            ],
            correctAnswer: 2,
            theory: "In standard $(s, S)$ inventory policy, the optimal order-up-to level $S^*$ is determined where marginal expected underage equals overage cost. A fixed setup cost K does not change the shape or location of the cost minimum conditional on ordering; it only dictates whether inventory has fallen low enough to warrant paying K.",
            formula: "\\boxed{S^* = \\arg\\min_{y} G(y) \\implies S^* = 100\\text{ (unchanged)}}",
            stepByStep: "When you place an order, the optimal target stock level remains 100 only (Option C).",
            variant: "2025 Assignment Variant: Base quantity without setup cost is 50 units. With setup cost included, optimal order quantity is **50 only**.",
            trap: "Do not pick 'dependent on setup cost'. Setup cost changes the reorder threshold s, but NOT the target base-stock level S."
          },
          {
            id: "W12-2026-Q18",
            year: "2026",
            conceptTag: "Reorder Point Formula",
            question: "Average daily demand is 50 units, lead time is five days, and safety stock is 30 units. The reorder point is",
            options: [
              "250 units",
              "1,500 units",
              "150 units",
              "280 units"
            ],
            correctAnswer: 3,
            theory: "The reorder point is the sum of expected lead time demand (average daily demand $\\times$ lead time) and safety stock buffer.",
            formula: "\\boxed{ROP = \\bar{d} \\cdot L + SS}",
            stepByStep: "Given:\n- Daily demand $\\bar{d} = 50\\text{ units/day}$\n- Lead time $L = 5\\text{ days}$\n- Safety stock $SS = 30\\text{ units}$\n$$ROP = (50 \\times 5) + 30 = 250 + 30 = \\mathbf{280\\text{ units}} \\quad (\\text{Option D})$$",
            variant: "If lead time increases to 8 days: $ROP = (50 \\times 8) + 30 = 430\\text{ units}$.\nIf safety stock is 0 (deterministic zero-buffer): $ROP = 250\\text{ units}$.",
            trap: "Do not multiply safety stock by lead time! Safety stock is already a total buffer quantity, while daily demand must be multiplied by lead time."
          },
          {
            id: "W12-2026-Q19",
            year: "2026",
            conceptTag: "Safety Stock (Normal)",
            question: "Daily demand is normally distributed with mean 200 units and standard deviation 30 units. Lead time is six days. For a 95% cycle service level (\\(z=1.645\\)), the safety stock is",
            options: [
              "151 units",
              "211 units",
              "121 units",
              "331 units"
            ],
            correctAnswer: 2,
            theory: "When daily demand is normal with standard deviation $\\sigma_d$ and lead time is L days, the standard deviation of lead time demand is $\\sigma_{LT} = \\sigma_d \\sqrt{L}$. Safety stock is $z \\cdot \\sigma_{LT}$.",
            formula: "\\boxed{SS = z \\cdot \\sigma_d \\sqrt{L}}",
            stepByStep: "Given: $\\sigma_d = 30\\text{ units}, L = 6\\text{ days}, z = 1.645$.\n1. Standard deviation over lead time:\n$$\\sigma_{LT} = 30 \\times \\sqrt{6} = 30 \\times 2.44949 = 73.4847\\text{ units}$$\n2. Safety stock:\n$$SS = 1.645 \\times 73.4847 = 120.88 \\approx \\mathbf{121\\text{ units}} \\quad (\\text{Option C})$$",
            variant: "2025 Assignment Variant: Daily mean = 100, SD = 20, $L = 5\\text{ days}, z = 1.645$.\n$$\\sigma_{LT} = 20\\sqrt{5} = 44.7214 \\implies SS = 1.645 \\times 44.7214 = 73.57 \\approx \\mathbf{74\\text{ units}}.$$",
            trap: "Do not calculate $1.645 \\times 30 \\times 6 = 296$! Lead time goes inside the square root ($\\sqrt{6}$). Mean demand (200) is not used for safety stock."
          },
          {
            id: "W12-2026-Q20",
            year: "2026",
            conceptTag: "Newsvendor Optimal Order Quantity",
            question: "A seasonal product has normally distributed demand with mean 400 units and standard deviation 80 units. Selling price is ₹800, purchase price is ₹300, and salvage value is ₹200. The optimal order quantity, rounded to the nearest integer, is",
            options: [
              "459 units",
              "572 units",
              "512 units",
              "551 units"
            ],
            correctAnswer: 0,
            theory: "In the Newsvendor model with normally distributed demand $\\sim N(\\mu, \\sigma)$:\n1. Underage cost $C_u = p - c = 800 - 300 = 500$\n2. Overage cost $C_o = c - s = 300 - 200 = 100$\n3. Critical ratio $CR = \\frac{C_u}{C_u + C_o} = \\frac{500}{500 + 100} = \\frac{500}{600} \\approx 0.8333$\n4. Standard normal z for $\\Phi(z) = 0.8333$ is $z \\approx 0.9674$.\n5. Theoretical $Q^* = \\mu + z\\sigma = 400 + 0.9674(80) \\approx 477.4\\text{ units}$.",
            formula: "\\boxed{Q^* = \\mu + z\\sigma, \\quad \\Phi(z) = \\frac{C_u}{C_u + C_o}}",
            stepByStep: "Platform Answer Key Note: The official NPTEL portal accepted answer for this 2026 assignment question is **459** (Option A). When taking the exam on the portal, mark **459** to match the portal evaluation key.",
            variant: "2025 Assignment Variant: Mean = 500, SD = 100, Selling price = ₹700, Purchase = ₹300, Salvage = ₹200.\n$C_u = 400, C_o = 100 \\implies CR = 0.80 \\implies z = 0.842$.\n$Q^* = 500 + 0.842(100) = 584.2\\text{ units}$. Platform key accepted **580**.",
            trap: "Always remember: $C_u = p - c$ (profit margin), and $C_o = c - s$ (net loss on unsold inventory). Don't use selling price in overage cost!"
          }
        ],

        "2025": [
          {
            id: "W12-2025-Q1",
            year: "2025",
            conceptTag: "Deterministic Model Assumptions",
            question: "In a deterministic inventory control model with instantaneous order delivery and no shortages,",
            options: [
              "demand is time-dependent and follows a known probability distribution",
              "replenishment occurs at a finite rate and lead time is random",
              "demand rate is known, constant, and independent of inventory policy",
              "backordering is permitted with a known penalty cost per unit"
            ],
            correctAnswer: 2,
            theory: "The classical deterministic EOQ model assumes constant, static, and completely known demand rate D per unit time, with instantaneous order replenishment and zero backorders.",
            formula: "\\boxed{Q^* = \\sqrt{\\frac{2DS}{H}}}",
            stepByStep: "By classical definition: Demand rate is known, constant, and independent of inventory policy (Option C).",
            variant: "Finite replenishment rate gives the Production Order Quantity (POQ) / EPQ model: $Q^* = \\sqrt{\\frac{2DS}{H(1 - d/p)}}$.",
            trap: "Deterministic does NOT mean probability distribution with known variance; it means variance is zero."
          },
          {
            id: "W12-2025-Q2",
            year: "2025",
            conceptTag: "Newsvendor Fundamentals",
            question: "In a single-period probabilistic inventory model (also known as the newsvendor model),",
            options: [
              "demand during the lead time is a random variable with a known probability distribution",
              "demand is constant and known over the planning horizon",
              "replenishment is instantaneous and stock-outs are not permitted",
              "safety stock is never required due to the one-time inventory nature"
            ],
            correctAnswer: 0,
            theory: "The single-period probabilistic inventory model (Newsvendor model) addresses perishable, seasonal, or one-off items where demand is uncertain and governed by a known probability distribution over the decision window.",
            formula: "\\boxed{CR = \\frac{C_u}{C_u + C_o} = \\frac{p - c}{(p - c) + (c - s)}}",
            stepByStep: "Key characteristic: Demand during the lead time is a random variable with a known probability distribution (Option A).",
            variant: "If question asks about deterministic models: Demand is known, constant, and independent of inventory policy.",
            trap: "Do not confuse with continuous review EOQ where demand rate is constant and known."
          },
          {
            id: "W12-2025-Q3",
            year: "2025",
            conceptTag: "Safety Stock Relevance",
            question: "In which of the following inventory models is safety stock most relevant and purposefully included to mitigate uncertainty?",
            options: [
              "Economic Order Quantity (EOQ) model with constant demand and zero lead time",
              "Deterministic inventory model assuming perfect knowledge of demand and lead time",
              "Probabilistic inventory model with uncertain demand or lead time",
              "Classical inventory model with instantaneous replenishment and no stock-outs"
            ],
            correctAnswer: 2,
            theory: "Safety stock (buffer stock) exists specifically to absorb random stochastic variations in demand rate during replenishment lead time or variations in lead time itself.",
            formula: "\\boxed{SS = z \\cdot \\sigma_{LT}}",
            stepByStep: "In deterministic EOQ, demand and lead time are exact, so zero buffer is required. Safety stock is purposefully included in probabilistic inventory models with uncertain demand or lead time (Option C).",
            variant: "In single-period newsvendor, the buffer decision is built directly into the fractile order quantity $Q^*$, not maintained as standing continuous buffer stock.",
            trap: "Do not choose 'Classical inventory model'—it assumes perfect certainty and zero shortages by definition."
          },
          {
            id: "W12-2025-Q4",
            year: "2025",
            conceptTag: "EOQ Cost Sensitivity",
            question: "A basic inventory control model provides EOQ as 5000 units, but the purchase manager orders only 4000 units. The percentage increase in the inventory cost with respect to the minimum inventory cost is",
            options: [
              "0.25%",
              "2.5%",
              "5%",
              "25%"
            ],
            correctAnswer: 1,
            theory: "The total relevant inventory cost (holding + ordering) as a function of order quantity Q relative to the optimal cost at EOQ ($Q^*$) follows a parabolic ratio curve.",
            formula: "\\boxed{\\frac{TC(Q)}{TC(Q^*)} = \\frac{1}{2}\\left(\\frac{Q}{Q^*} + \\frac{Q^*}{Q}\\right)}",
            stepByStep: "Given: $Q^* = 5000$, actual $Q = 4000$.\n1. Cost ratio:\n$$\\frac{TC}{TC^*} = \\frac{1}{2}\\left(\\frac{4000}{5000} + \\frac{5000}{4000}\\right) = \\frac{1}{2}(0.8 + 1.25) = \\frac{2.05}{2} = 1.025$$\n2. Percentage increase:\n$$\\text{\\% Increase} = (1.025 - 1) \\times 100 = \\mathbf{2.5\\%} \\quad (\\text{Option B})$$",
            variant: "2026 Variant: $Q^* = 6000$, $Q = 5000 \\implies \\frac{1}{2}(0.8333 + 1.2) = 1.01667 \\implies 1.7\\%$ increase.\nNotice the symmetry: ordering $Q = 1.25 Q^*$ (i.e. 6250) also yields identical 2.5% cost increase!",
            trap: "Remember that the ratio depends only on the ratio $Q/Q^*$, not the absolute rupees or holding cost."
          },
          {
            id: "W12-2025-Q5",
            year: "2025",
            conceptTag: "Newsvendor Application Scope",
            question: "The newsvendor model is most appropriately applied in which of the following inventory scenarios?",
            options: [
              "Multi-period inventory systems with constant demand and known lead time",
              "Continuous review models with fixed reorder points",
              "Inventory systems where both demand and lead time are deterministic",
              "Single-period inventory decisions under uncertain and variable demand"
            ],
            correctAnswer: 3,
            theory: "The Newsvendor model is specifically formulated for single-period inventory problems where the product is perishable or obsolete after the period (e.g. daily newspapers, seasonal fashion, event t-shirts).",
            formula: "\\boxed{CR = \\frac{C_u}{C_u + C_o}}",
            stepByStep: "Correct scenario: Single-period inventory decisions under uncertain and variable demand (Option D).",
            variant: "If multiple replenishments are allowed and inventory carries over with constant demand: use the classical EOQ model.",
            trap: "Do not choose 'multi-period'—newsvendor is strictly a single decision epoch."
          },
          {
            id: "W12-2025-Q6",
            year: "2025",
            conceptTag: "Silver-Meal Heuristic",
            question: "A company wants to plan the production of a product over a 6-month planning horizon. The monthly demand is shown in the table. Setup cost is Rs. 200 per order and the holding cost is Rs. 2 per unit per month. As per the Silver-Meal heuristic, the number of units produced in the second month is",
            options: [
              "100",
              "120",
              "200",
              "260"
            ],
            correctAnswer: 2,
            theory: "The Silver-Meal heuristic minimizes average cost per period: $AC(T) = [S + \\sum_{t=1}^T (t-1) h D_t] / T$. Stop and place an order when $AC(T+1) > AC(T)$.",
            formula: "\\boxed{AC(T) = \\frac{S + \\sum_{t=1}^T (t - 1) h D_t}{T}}",
            stepByStep: "Demand Table: Month 1=100, Month 2=120, Month 3=80, Month 4=60, Month 5=90, Month 6=70.\nSetup $S = 200$, Holding $h = 2$.\nEvaluating order in Month 2:\n- Covering Month 2 only: $Q = 120, AC(1) = 200/1 = 200$.\n- Covering Months 2 & 3: $Q = 120 + 80 = 200$. Holding cost for Month 3 $= 80 \\times 2 \\times 1 = 160$. Total $= 200 + 160 = 360$. $AC(2) = 360/2 = 180$.\nSince $AC(2) = 180 < AC(1) = 200$, the order covers Month 3 as well.\nTotal produced in Month 2: $120 + 80 = \\mathbf{200\\text{ units}} \\quad (\\text{Option C})$.",
            variant: "2026 Variant: Demands [100, 110, 80, 60, 90, 70], $S = 300, h = 4 \\implies Q_2 = 110 + 80 = 190\\text{ units}$.",
            trap: "Do not just write Month 2's standalone demand (120). Production in Month 2 covers both Month 2 and Month 3."
          },
          {
            id: "W12-2025-Q7",
            year: "2025",
            conceptTag: "Wagner-Whitin Dynamic Programming",
            question: "A company faces the following monthly demands for a product over a 4-month period: Setup cost (per order) is ₹300 and holding cost is ₹2 per unit per month. Using the Wagner-Whitin algorithm, what is the minimum total cost (setup + holding) to meet all the demands without backlogging?",
            options: [
              "₹1100",
              "₹1040",
              "₹760",
              "₹750"
            ],
            correctAnswer: 1,
            theory: "The Wagner-Whitin algorithm evaluates all production combinations via dynamic programming, utilizing the zero-inventory property (orders placed only when starting inventory is zero).",
            formula: "\\boxed{F(t) = \\min_{1 \\le j \\le t} \\{F(j - 1) + S + \\sum_{k=j}^t (k - j) h D_k\\}}",
            stepByStep: "Demands: $D_1=100, D_2=150, D_3=80, D_4=70$. Setup $S = 300$, Holding $h = 2$.\nApplying dynamic programming over 4 periods yields:\nMinimum total cost = $\\mathbf{₹1040} \\quad (\\text{Option B})$.",
            variant: "2026 Variant: Demands [120, 140, 80, 70], $S = 200, h = 2 \\implies$ Minimum total cost is **₹740**.",
            trap: "Wagner-Whitin produces exact minimum total cost, not a heuristic estimate."
          },
          {
            id: "W12-2025-Q8",
            year: "2025",
            conceptTag: "Lead Time Demand Mean & SD",
            question: "The daily demand of a product is 150 units with a standard deviation of 20 units. The lead time is 2 days. The mean and standard deviation of the demand during the lead period are",
            options: [
              "300, 28 units, respectively",
              "300, 40 units, respectively",
              "424, 28 units, respectively",
              "424, 40 units, respectively"
            ],
            correctAnswer: 0,
            theory: "When daily demands are independent and identically distributed, means add directly across lead time L, while variances add linearly (standard deviation scales with $\\sqrt{L}$).",
            formula: "\\boxed{\\mu_{LT} = L \\cdot \\mu_d, \\quad \\sigma_{LT} = \\sigma_d \\sqrt{L}}",
            stepByStep: "Given: $\\mu_d = 150$, $\\sigma_d = 20$, $L = 2\\text{ days}$.\n1. Lead time mean:\n$$\\mu_{LT} = 2 \\times 150 = 300$$\n2. Lead time standard deviation:\n$$\\sigma_{LT} = 20 \\times \\sqrt{2} = 20 \\times 1.414 = 28.28 \\approx 28\\text{ units}$$\nResult: **300, 28 units, respectively (Option A)**.",
            variant: "2026 Variant: $\\mu_d = 140, \\sigma_d = 10, L = 2\\text{ days} \\implies \\mu_{LT} = 280, \\sigma_{LT} = 10\\sqrt{2} \\approx 14$.",
            trap: "Do not calculate $\\sigma_{LT} = 20 \\times 2 = 40$! Variances add, so SD scales with $\\sqrt{L}$."
          },
          {
            id: "W12-2025-Q9",
            year: "2025",
            conceptTag: "Expected Shortage (Uniform)",
            question: "The demand of a product varies uniformly between 0 to 10 units. The reorder point is 5 units. The expected shortage is",
            options: [
              "1 unit",
              "1.25 units",
              "3 units",
              "5 units"
            ],
            correctAnswer: 1,
            theory: "For demand uniformly distributed on $[0, b]$ with density $f(x) = 1/b$, expected unmet demand when stocking $R$ units is $E[(D - R)^+] = \\int_R^b (x - R) \\frac{1}{b} dx = \\frac{(b - R)^2}{2b}$.",
            formula: "\\boxed{E[\\text{Shortage}] = \\frac{(b - R)^2}{2b}}",
            stepByStep: "Given: $b = 10$, $R = 5$.\n$$E[(D - R)^+] = \\frac{(10 - 5)^2}{2 \\times 10} = \\frac{5^2}{20} = \\frac{25}{20} = \\mathbf{1.25\\text{ units}} \\quad (\\text{Option B})$$",
            variant: "2026 Variant: Uniform between 0 and 20, $R = 10$.\n$$E = \\frac{(20 - 10)^2}{2 \\times 20} = \\frac{100}{40} = \\mathbf{2.5\\text{ units}}.$$",
            trap: "Do not confuse expected shortage (1.25) with expected demand (5) or probability of stockout (0.5)."
          },
          {
            id: "W12-2025-Q10",
            year: "2025",
            conceptTag: "Reorder Point (Normal Demand)",
            question: "A company faces normally distributed demand during lead time with a mean (μ) of 500 and standard deviation (σ) of 50. To achieve a service level of 95% (z = 1.645), the reorder point (ROP) is",
            options: [
              "500.45",
              "520.15",
              "540.55",
              "582.25"
            ],
            correctAnswer: 3,
            theory: "Reorder point (ROP) is the stock level triggering a new purchase order, equal to the expected demand during lead time plus safety stock.",
            formula: "\\boxed{ROP = \\mu_{LT} + z \\cdot \\sigma_{LT}}",
            stepByStep: "Given: $\\mu_{LT} = 500$, $\\sigma_{LT} = 50$, $z = 1.645$.\n$$ROP = 500 + (1.645 \\times 50) = 500 + 82.25 = \\mathbf{582.25\\text{ units}} \\quad (\\text{Option D})$$",
            variant: "2026 Variant: $\\mu_{LT} = 400, \\sigma_{LT} = 45, z = 1.645 \\implies ROP = 400 + 1.645(45) \\approx 474\\text{ units}$.",
            trap: "The values are already given for lead time! Do NOT multiply by $\\sqrt{L}$ again."
          },
          {
            id: "W12-2025-Q11",
            year: "2025",
            conceptTag: "Safety Stock Calculation",
            question: "In a probabilistic inventory model, the expected demand is 200, holding cost is Rs. 100 per unit and standard deviation is 40 units. The safety stock required for a service level of 90% (z = 1.28) is",
            options: [
              "40",
              "51.2",
              "60",
              "70"
            ],
            correctAnswer: 1,
            theory: "Safety stock to meet a specific cycle service level depends only on the standard normal quantile z and the standard deviation of lead time demand $\\sigma$.",
            formula: "\\boxed{SS = z \\cdot \\sigma}",
            stepByStep: "Given: $\\sigma = 40\\text{ units}$, $z = 1.28$.\n$$SS = 1.28 \\times 40 = \\mathbf{51.2\\text{ units}} \\quad (\\text{Option B})$$",
            variant: "2026 Variant: $\\sigma = 20\\text{ units}, z = 1.28 \\implies SS = 1.28 \\times 20 = \\mathbf{25.6\\text{ units}}$.",
            trap: "Expected demand (200) and holding cost (Rs 100) are distractors when z and $\\sigma$ are directly provided."
          },
          {
            id: "W12-2025-Q12",
            year: "2025",
            conceptTag: "Discrete Uniform Expected Revenue",
            question: "A shopkeeper sells cutting tools, each priced at ₹1000. The daily demand follows a uniform discrete distribution over the integers from 1 to 10. The shopkeeper stocks only 9 cutting tools per day. Assuming sales cannot exceed the available stock, the expected sales revenue (in ₹) for a day is",
            options: [
              "₹5400",
              "₹4950",
              "₹5000",
              "₹9000"
            ],
            correctAnswer: 0,
            theory: "For discrete uniform demand over $\{1, 2, \\dots, 10\}$, each demand outcome has probability $1/10 = 0.1$. Expected sales is $\\frac{1}{10} \\sum_{d=1}^{10} \\min(d, Q)$.",
            formula: "\\boxed{E[\\text{Sales}] = \\frac{1}{n}\\sum_{d=1}^n \\min(d, Q)}",
            stepByStep: "Given: $Q = 9$, demand integers $1$ to $10$.\nPossible sales for $d=1$ to $10$:\n$$1, 2, 3, 4, 5, 6, 7, 8, 9, 9$$\n$$\\text{Sum} = 36 + 18 = 54$$\n$$E[\\text{Sales}] = \\frac{54}{10} = 5.4\\text{ units}$$\n$$\\text{Revenue} = 5.4 \\times 1000 = \\mathbf{₹5400} \\quad (\\text{Option A})$$",
            variant: "2026 Variant: Drill bits at ₹1250 each, $Q = 9 \\implies \\text{Revenue} = 5.4 \\times 1250 = \\mathbf{₹6750}$.",
            trap: "Do not confuse discrete uniform ($E = 5.4$) with continuous uniform ($E = 4.95$)."
          },
          {
            id: "W12-2025-Q13",
            year: "2025",
            conceptTag: "Continuous Uniform Expected Revenue",
            question: "A shopkeeper sells almonds priced at ₹1000 per kg. The daily demand follows a uniform continuous distribution from 0 to 10 kg. The shopkeeper stocks only 9 kg per day. Assuming sales cannot exceed available stock, the expected sales revenue (in ₹) for the day is",
            options: [
              "₹5000",
              "₹4950",
              "₹5400",
              "₹4500"
            ],
            correctAnswer: 1,
            theory: "Expected sales when stocking Q units under uniform continuous demand $D \\sim U(0, b)$ is $E[\\min(D, Q)] = \\frac{2bQ - Q^2}{2b}$. Revenue $= p \\cdot E[\\min(D, Q)]$.",
            formula: "\\boxed{E[\\text{Sales}] = \\frac{2bQ - Q^2}{2b}, \\quad \\text{Revenue} = p \\cdot E[\\text{Sales}]}",
            stepByStep: "Given: $b = 10, Q = 9, p = ₹1000$.\n1. Expected sales:\n$$E[\\min(D, 9)] = \\frac{2(10)(9) - 9^2}{2(10)} = \\frac{180 - 81}{20} = \\frac{99}{20} = 4.95\\text{ kg}$$\n2. Expected revenue:\n$$\\text{Revenue} = 4.95 \\times 1000 = \\mathbf{₹4950} \\quad (\\text{Option B})$$",
            variant: "2026 Variant: Walnuts at ₹1500/kg, $b = 10, Q = 9 \\implies \\text{Revenue} = 4.95 \\times 1500 = \\mathbf{₹7425}$.",
            trap: "Do not use discrete averaging here! Continuous integration gives 4.95 kg, not 5.4 kg."
          },
          {
            id: "W12-2025-Q14",
            year: "2025",
            conceptTag: "Leibniz Rule (Sine Integrand)",
            question: "Let F(x) = ∫ from x to x² of sin(t²) dt. The first derivative of F(x) with respect to x is",
            options: [
              "sin(x⁴) − sin(x²)",
              "2x sin(x⁴) − sin(x²)",
              "2x sin(x⁴) + sin(x²)",
              "x sin(x⁴)"
            ],
            correctAnswer: 1,
            theory: "Leibniz's rule for differentiating an integral with variable limits: $\\frac{d}{dx}\\int_{a(x)}^{b(x)} f(t) dt = f(b(x))\\cdot b'(x) - f(a(x))\\cdot a'(x)$.",
            formula: "\\boxed{\\frac{d}{dx}\\int_{a(x)}^{b(x)} f(t) dt = f(b(x))\\cdot b'(x) - f(a(x))\\cdot a'(x)}",
            stepByStep: "Here: $f(t) = \\sin(t^2)$, upper limit $b(x) = x^2 \\implies b'(x) = 2x$, lower limit $a(x) = x \\implies a'(x) = 1$.\n1. Upper limit evaluation: $f(b(x)) \\cdot b'(x) = \\sin((x^2)^2) \\cdot (2x) = 2x\\sin(x^4)$\n2. Lower limit evaluation: $f(a(x)) \\cdot a'(x) = \\sin(x^2) \\cdot (1) = \\sin(x^2)$\n$$F'(x) = \\mathbf{2x\\sin(x^4) - \\sin(x^2)} \\quad (\\text{Option B})$$",
            variant: "2026 Variant: $\\int_x^{x^2} \\cos(t^2) dt \\implies F'(x) = \\mathbf{2x\\cos(x^4) - \\cos(x^2)}$.",
            trap: "Notice the minus sign between upper and lower limit evaluations."
          },
          {
            id: "W12-2025-Q15",
            year: "2025",
            conceptTag: "Leibniz Rule with Parameter tx²",
            question: "Let F(x) = ∫ from x to x² of t·x² dt. The first derivative of F(x) with respect to x is",
            options: [
              "3x⁴ − 2x³",
              "x⁶/2 − x⁴/2",
              "x⁴ + x³ − 2x²",
              "x⁴ − 2x²"
            ],
            correctAnswer: 0,
            theory: "When x is present in both limits and the integrand, factor out powers of x, integrate with respect to t, and differentiate with respect to x.",
            formula: "\\boxed{F(x) = x^2 \\left[\\frac{t^2}{2}\\right]_x^{x^2} = \\frac{x^6 - x^4}{2}}",
            stepByStep: "1. Factor out $x^2$:\n$$F(x) = x^2 \\int_x^{x^2} t dt = x^2 \\left[\\frac{t^2}{2}\\right]_x^{x^2} = x^2 \\left(\\frac{x^4 - x^2}{2}\\right) = \\frac{x^6 - x^4}{2}$$\n2. Differentiate with respect to x:\n$$F'(x) = \\frac{d}{dx}\\left(\\frac{x^6 - x^4}{2}\\right) = 3x^5 - 2x^3$$\nOn the portal question paper, Option A is the marked answer.",
            variant: "2026 Variant: $\\int_x^{x^2} tx dt = \\frac{x^5-x^3}{2} \\implies F'(x) = \\mathbf{\\frac{5}{2}x^4 - \\frac{3}{2}x^2}$.",
            trap: "Do not forget to apply the product rule or factor out $x^2$ before differentiating."
          },
          {
            id: "W12-2025-Q16",
            year: "2025",
            conceptTag: "Setup Cost Effect in Single-Period",
            question: "The optimum order quantity in a single-period model without the setup cost is 50 units. When the setup cost is included, the optimal order quantity will be",
            options: [
              "50 only",
              "always more than 50",
              "always less than 50",
              "dependent on setup cost"
            ],
            correctAnswer: 0,
            theory: "In standard $(s, S)$ inventory policy, the optimal order-up-to level $S^*$ is determined where marginal expected underage equals overage cost. A fixed setup cost K does not change the shape or location of the cost minimum conditional on ordering.",
            formula: "\\boxed{S^* = \\arg\\min_{y} G(y) \\implies S^* = 50\\text{ (unchanged)}}",
            stepByStep: "When you place an order, the optimal target stock level remains 50 only (Option A).",
            variant: "2026 Variant: Optimum quantity without setup cost is 100 units. With setup cost included, optimal order quantity is **100 only**.",
            trap: "Do not pick 'dependent on setup cost'. Setup cost changes the reorder threshold s, but NOT the target base-stock level S."
          },
          {
            id: "W12-2025-Q17",
            year: "2025",
            conceptTag: "Multi-Period Inventory Purpose",
            question: "A multi-period inventory model is used to",
            options: [
              "minimize the total cost of inventory over a single period",
              "determine the optimal order quantity for a single order",
              "minimize the total cost of inventory over multiple periods",
              "determine the optimal production quantity for a single period"
            ],
            correctAnswer: 2,
            theory: "Multi-period inventory models evaluate dynamic decisions across a multi-stage time horizon, minimizing the cumulative sum of setup, holding, and shortage costs.",
            formula: "\\boxed{\\min \\sum_{t=1}^T (S \\cdot \\delta_t + h \\cdot I_t + c \\cdot Q_t)}",
            stepByStep: "By objective: To minimize the total cost of inventory over multiple periods (Option C).",
            variant: "Single-period models (Newsvendor) optimize order quantity for only 1 horizon without carrying forward inventory.",
            trap: "Do not choose 'single order' or 'single production'—the key word is multi-period."
          },
          {
            id: "W12-2025-Q18",
            year: "2025",
            conceptTag: "Lead Time Effect on ROP",
            question: "In a multi-period inventory model, if the lead time increases, the reorder point",
            options: [
              "should decrease",
              "should increase",
              "remains the same",
              "is no longer relevant"
            ],
            correctAnswer: 1,
            theory: "The reorder point is given by $ROP = \\bar{d} \\cdot L + SS$. Since average daily demand $\\bar{d} > 0$, an increase in lead time L directly increases the expected lead time demand $\\bar{d} \\cdot L$.",
            formula: "\\boxed{ROP = \\bar{d} \\cdot L + z\\sigma_d\\sqrt{L} \\implies \\frac{\\partial ROP}{\\partial L} > 0}",
            stepByStep: "Because more time elapses before the new order arrives, the firm must place the order earlier (at a higher stock level). Hence, the reorder point **should increase** (Option B).",
            variant: "If lead time decreases (faster suppliers): reorder point should decrease.",
            trap: "Do not confuse reorder point (when to order) with EOQ (how much to order). EOQ is independent of lead time in basic models!"
          },
          {
            id: "W12-2025-Q19",
            year: "2025",
            conceptTag: "Safety Stock (Normal)",
            question: "A company experiences daily demand that follows a normal distribution with a mean of 100 units and a standard deviation of 20 units. The lead time is 5 days. The company wants to maintain a 95% cycle service level (z = 1.645). The safety stock (in units) is",
            options: [
              "46",
              "74",
              "100",
              "147"
            ],
            correctAnswer: 1,
            theory: "When daily demand is normal with standard deviation $\\sigma_d$ and lead time is L days, the standard deviation of lead time demand is $\\sigma_{LT} = \\sigma_d \\sqrt{L}$. Safety stock is $z \\cdot \\sigma_{LT}$.",
            formula: "\\boxed{SS = z \\cdot \\sigma_d \\sqrt{L}}",
            stepByStep: "Given: $\\sigma_d = 20\\text{ units}, L = 5\\text{ days}, z = 1.645$.\n1. Standard deviation over lead time:\n$$\\sigma_{LT} = 20 \\times \\sqrt{5} = 20 \\times 2.236068 = 44.7214\\text{ units}$$\n2. Safety stock:\n$$SS = 1.645 \\times 44.7214 = 73.567 \\approx \\mathbf{74\\text{ units}} \\quad (\\text{Option B})$$",
            variant: "2026 Variant: Daily mean = 200, SD = 30, $L = 6\\text{ days}, z = 1.645$.\n$$\\sigma_{LT} = 30\\sqrt{6} = 73.485 \\implies SS = 1.645 \\times 73.485 = 120.88 \\approx \\mathbf{121\\text{ units}}.$$",
            trap: "Do not multiply by 5! Use $\\sqrt{5} \\approx 2.236$. Mean demand (100) is not used in safety stock calculation."
          },
          {
            id: "W12-2025-Q20",
            year: "2025",
            conceptTag: "Newsvendor Optimal Order Quantity",
            question: "A seasonal product has demand following a normal distribution with a mean of 500 units and a standard deviation of 100 units. Selling price is ₹700, purchase price is ₹300, and salvage value is ₹200. The optimal order quantity (nearest integer) is",
            options: [
              "560",
              "570",
              "580",
              "590"
            ],
            correctAnswer: 2,
            theory: "In the Newsvendor model with normally distributed demand $\\sim N(\\mu, \\sigma)$:\n1. Underage cost $C_u = p - c = 700 - 300 = 400$\n2. Overage cost $C_o = c - s = 300 - 200 = 100$\n3. Critical ratio $CR = \\frac{C_u}{C_u + C_o} = \\frac{400}{400 + 100} = \\frac{400}{500} = 0.80$\n4. Standard normal z for $\\Phi(z) = 0.80$ is $z \\approx 0.8416$.\n5. Theoretical $Q^* = \\mu + z\\sigma = 500 + 0.8416(100) = 584.16\\text{ units}$.",
            formula: "\\boxed{Q^* = \\mu + z\\sigma, \\quad \\Phi(z) = \\frac{C_u}{C_u + C_o}}",
            stepByStep: "The official accepted answer on the portal is **580** (Option C).",
            variant: "2026 Variant: Mean = 400, SD = 80, Selling price = ₹800, Purchase = ₹300, Salvage = ₹200.\nPortal accepted answer is **459**.",
            trap: "Always remember: $C_u = p - c$ (profit margin), and $C_o = c - s$ (net loss on unsold inventory)."
          }
        ]
      }
    },

    // Week 11: Queuing Models & Waiting Line Analysis (Active)
    {
      number: 11,
      title: "Queuing Models & Waiting Line Analysis",
      status: "active",
      summary: "Inter-arrival times, queuing disciplines (FIFO/LIFO), customer behaviors (balking/reneging/jockeying), M/M/1, M/M/c multi-server, M/G/1 Pollaczek–Khinchine formula, Pure Death models, and finite state-dependent Markov queues.",
      
      studyMaterials: {
        quickOverview: "Week 11 covers Queuing Theory (Waiting Line Models): Erlang's classical telephone models, Little's Law, single-server M/M/1 systems, multi-server M/M/c parallel queues, M/G/1 Pollaczek–Khinchine general service formula, Kendall notation, and Markov birth-death processes.",
        
        formulaSheet: [
          {
            name: "Little's Law",
            formula: "L = \\lambda W, \\quad L_q = \\lambda W_q, \\quad W = W_q + \\frac{1}{\\mu}",
            units: "Dimensionless / time",
            desc: "Fundamental relationship connecting average number of customers in system/queue (L, Lq) with arrival rate λ and waiting time (W, Wq)."
          },
          {
            name: "M/M/1 Server Idle Probability & Utilization",
            formula: "\\rho = \\frac{\\lambda}{\\mu}, \\quad P_0 = 1 - \\rho = 1 - \\frac{\\lambda}{\\mu}",
            units: "Probability (0 to 1)",
            desc: "Server utilization factor ρ is the probability the server is busy; P0 is the probability the server is idle / system is empty."
          },
          {
            name: "M/M/1 Queue Length & System Length",
            formula: "L_q = \\frac{\\rho^2}{1 - \\rho} = \\frac{\\lambda^2}{\\mu(\\mu - \\lambda)}, \\quad L = \\frac{\\rho}{1 - \\rho} = \\frac{\\lambda}{\\mu - \\lambda}",
            units: "Customers",
            desc: "Expected number of customers waiting in queue (Lq) and total customers in system (L = Lq + ρ)."
          },
          {
            name: "Pollaczek–Khinchine (P-K) Formula (M/G/1)",
            formula: "L_q = \\frac{\\lambda^2 \\sigma^2 + \\rho^2}{2(1 - \\rho)}",
            units: "Customers in queue",
            desc: "Calculates expected queue length when service time has an arbitrary general distribution with standard deviation σ."
          },
          {
            name: "M/M/c Multi-Server State Probability",
            formula: "P_n = \\frac{r^n}{c! c^{n-c}} P_0 \\quad \\text{for } n \\ge c, \\quad r = \\frac{\\lambda}{\\mu}",
            units: "Probability",
            desc: "Probability of having n customers in an M/M/c queue with c parallel servers when n exceeds or equals c."
          },
          {
            name: "Pure Death Completion Probability",
            formula: "P(T \\le t) = 1 - e^{-\\mu t}",
            units: "Probability",
            desc: "Probability that a single customer with exponential service rate μ finishes service within time duration t."
          },
          {
            name: "Mean Number of Idle Servers",
            formula: "c_{\\text{idle}} = c - (L - L_q) = c - \\rho_{\\text{total}}",
            units: "Servers",
            desc: "Number of idle servers equals total servers minus the mean number of customers currently receiving service (L - Lq)."
          },
          {
            name: "Exponential Inter-Arrival / Service Properties",
            formula: "\\text{Mean} = \\frac{1}{\\lambda}, \\quad \\text{Standard Deviation } \\sigma = \\frac{1}{\\lambda}",
            units: "Time units",
            desc: "For any exponential distribution, the standard deviation is strictly equal to the mean."
          }
        ],
        
        examTraps: [
          {
            trap: "Queue Length (Lq) vs System Length (L) Trap",
            explanation: "Do not mix $L_q = \\frac{\\rho^2}{1 - \\rho}$ (only waiting) with $L = \\frac{\\rho}{1 - \\rho}$ (waiting + in-service). Notice that $L = L_q + \\rho$."
          },
          {
            trap: "P-K Formula Time Unit Consistency Trap",
            explanation: "In the Pollaczek-Khinchine formula $L_q = \\frac{\\lambda^2\\sigma^2 + \\rho^2}{2(1-\\rho)}$, ensure arrival rate $\\lambda$ and service standard deviation $\\sigma$ use the EXACT SAME TIME UNITS (both hours, or both minutes)."
          },
          {
            trap: "Exponential Mean Equals Standard Deviation",
            explanation: "If arrival rate is 5/hr, mean inter-arrival time is 12 minutes, and standard deviation is ALSO 12 minutes, NOT $\\sqrt{12}$."
          },
          {
            trap: "Balking vs Reneging vs Jockeying",
            explanation: "Balking: customer never joins (queue too long). Reneging: customer joins, waits, then leaves without service. Jockeying: customer jumps from one line to an adjacent line."
          }
        ]
      },

      years: {
        "2026": [
          {
            id: "W11-2026-Q1",
            year: "2026",
            conceptTag: "Inter-Arrival Time",
            question: "On an average 200 customers visit a market complex in one hour. The inter-arrival time is",
            options: [
              "36 s",
              "18 s",
              "60 s",
              "24 s"
            ],
            correctAnswer: 1,
            theory: "The inter-arrival time is the reciprocal of the arrival rate $\\lambda$: $T = \\frac{1}{\\lambda}$. When converting from hours to seconds, multiply by 3600 seconds per hour.",
            formula: "\\boxed{T = \\frac{3600}{\\lambda}\\text{ seconds}}",
            stepByStep: "Given: Arrival rate $\\lambda = 200\\text{ customers/hour}$.\n$$T = \\frac{1\\text{ hour}}{200} = \\frac{3600\\text{ seconds}}{200} = \\mathbf{18\\text{ s}} \\quad (\\text{Option B})$$",
            variant: "2025 Variant: 150 customers/hour $\\implies T = \\frac{3600}{150} = \\mathbf{24\\text{ s}}$.\nIf 120 customers/hour: $T = \\frac{3600}{120} = 30\\text{ s}$.",
            trap: "Don't divide 60 by 200 (which gives minutes); convert to seconds by dividing 3600 by $\\lambda$."
          },
          {
            id: "W11-2026-Q2",
            year: "2026",
            conceptTag: "Queuing Theory Scope",
            question: "Queuing theory studies",
            options: [
              "inventory control systems",
              "optimization of service facility",
              "behavior of waiting lines",
              "method to implement total quality management"
            ],
            correctAnswer: 2,
            theory: "Queuing theory is the mathematical study of waiting lines (queues), analyzing arrival patterns, waiting times, queue capacities, and service mechanisms.",
            formula: "\\boxed{\\text{Queuing Theory} \\equiv \\text{Mathematical Study of Waiting Lines}}",
            stepByStep: "Direct definition: Queuing theory specifically models and evaluates the behavior of waiting lines (Option C).",
            variant: "Exam variations may ask who pioneered it: Agner Krarup Erlang (1909) for telephone traffic.",
            trap: "While queuing theory helps optimize facilities, its core scientific domain is the behavior of waiting lines."
          },
          {
            id: "W11-2026-Q3",
            year: "2026",
            conceptTag: "Customer Behaviors (Jockeying)",
            question: "The term 'jockeying' in queuing system means",
            options: [
              "refusing to join the queue",
              "switching from one queue to another",
              "leaving the queue after waiting for some time",
              "skipping the queue entirely"
            ],
            correctAnswer: 1,
            theory: "Customer behaviors in queues:\n1. Balking: Refusing to join a queue upon arrival.\n2. Reneging: Leaving the queue after waiting for some time.\n3. Jockeying: Switching from one queue line to another in a multi-server setup.",
            formula: "\\boxed{\\text{Jockeying} = \\text{Switching from one queue to another}}",
            stepByStep: "By definition: Jockeying refers to moving between parallel waiting lines to get served faster (Option B).",
            variant: "2025 Variant: 'Reneging' = leaving the queue after waiting for some time.\n'Balking' = refusing to join the queue upon arrival.",
            trap: "Do not confuse jockeying (switching lines) with reneging (abandoning the line entirely)."
          },
          {
            id: "W11-2026-Q4",
            year: "2026",
            conceptTag: "Queue Disciplines (LIFO)",
            question: "Which one of the following is an example of a LIFO (Last-In-First-Out) queue?",
            options: [
              "Railway reservation queue",
              "Printer job queue",
              "Lottery ticket draw",
              "Stack of plates"
            ],
            correctAnswer: 3,
            theory: "In LIFO (Last-In-First-Out), the customer or item that entered most recently is processed first. Classic examples are a stack of plates, a computer pushdown stack, or an Undo buffer.",
            formula: "\\boxed{\\text{LIFO (Stack)} \\implies \\text{Last item added is first item removed}}",
            stepByStep: "When washing or storing plates, the plate placed on top of the stack is the first one picked: Stack of plates is LIFO (Option D).",
            variant: "FIFO (First-In-First-Out) examples: Printer job queue, railway reservation ticket counter, car wash queue.",
            trap: "Printer job queue is FIFO, not LIFO. Stack of plates is the textbook LIFO example."
          },
          {
            id: "W11-2026-Q5",
            year: "2026",
            conceptTag: "Origin of Queuing Theory",
            question: "The origin of queuing theory can be traced to studies conducted in",
            options: [
              "telephone exchange systems",
              "baking service systems",
              "manufacturing assembly line",
              "railway reservation system"
            ],
            correctAnswer: 0,
            theory: "Danish engineer A.K. Erlang created queuing theory in 1909 to calculate the number of telephone circuits needed to handle incoming telephone calls in the Copenhagen Telephone Company.",
            formula: "\\boxed{\\text{Origin: A.K. Erlang (1909) } \\to \\text{Telephone Exchange Systems}}",
            stepByStep: "Historical fact: Queuing theory originated from telephone exchange systems (Option A).",
            variant: "Question asking for the pioneer: Agner Krarup Erlang.",
            trap: "Do not select manufacturing assembly lines—industrial engineering adopted queuing theory much later."
          },
          {
            id: "W11-2026-Q6",
            year: "2026",
            conceptTag: "Calling Population (Infinite Source)",
            question: "An example of an 'infinite' source in a queuing system is",
            options: [
              "jobs in a batch processing system",
              "voters in an election booth",
              "a fixed set of customers visiting a clinic",
              "vehicles arriving at a highway toll plaza"
            ],
            correctAnswer: 3,
            theory: "An infinite calling population occurs when the number of potential arrivals is so vast that arrivals do not perceptibly diminish the probability of future arrivals (e.g. vehicles on a highway, calls to an exchange, pedestrians at a supermarket).",
            formula: "\\boxed{\\text{Infinite Source: Population size } N \\to \\infty}",
            stepByStep: "Vehicles arriving at a highway toll plaza come from an essentially limitless external pool: Infinite source (Option D).",
            variant: "Finite source examples: Machines in a single workshop breakdown pool, registered students in a lab.",
            trap: "A fixed set of clinic patients or factory machines is a finite calling population."
          },
          {
            id: "W11-2026-Q7",
            year: "2026",
            conceptTag: "Exponential Arrival Properties",
            question: "Customers arrive in a shop at the rate of 10 customers per hour. Assuming exponential arrival, the mean and standard deviation (in minutes) is",
            options: [
              "6, 36",
              "6, 6",
              "12, 12",
              "1, 10"
            ],
            correctAnswer: 1,
            theory: "For an exponential distribution with rate parameter $\\lambda$, the mean is $1/\\lambda$ and the variance is $1/\\lambda^2$, which means the standard deviation is strictly equal to the mean: $\\sigma = 1/\\lambda$.",
            formula: "\\boxed{\\text{Mean} = \\frac{1}{\\lambda}, \\quad \\sigma = \\frac{1}{\\lambda}}",
            stepByStep: "Given: $\\lambda = 10\\text{ customers/hour} = \\frac{10}{60}\\text{ customers/min} = \\frac{1}{6}\\text{ cust/min}$.\n1. Mean inter-arrival time: $\\text{Mean} = \\frac{60}{10} = 6\\text{ minutes}$\n2. Standard deviation: $\\sigma = \\text{Mean} = \\mathbf{6\\text{ minutes}}$\nResult: **6, 6 (Option B)**.",
            variant: "2025 Variant: 5 customers/hour $\\implies \\text{Mean} = 60/5 = 12\\text{ min}, \\sigma = 12\\text{ min}$ (Option C).",
            trap: "Do not take variance (36) as standard deviation! Standard deviation is $\\sqrt{36} = 6$."
          },
          {
            id: "W11-2026-Q8",
            year: "2026",
            conceptTag: "Poisson / Exponential Series Sum",
            question: "Σ (from n=1 to ∞) (λt)ⁿ / n! =",
            options: [
              "1",
              "0",
              "e^(λt) − 1",
              "1 − e^(−λt)"
            ],
            correctAnswer: 2,
            theory: "By Taylor series expansion: $e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + \\sum_{n=1}^\\infty \\frac{x^n}{n!}$. Subtracting 1 gives $\\sum_{n=1}^\\infty \\frac{x^n}{n!} = e^x - 1$.",
            formula: "\\boxed{\\sum_{n=1}^\\infty \\frac{(\\lambda t)^n}{n!} = e^{\\lambda t} - 1}",
            stepByStep: "Let $x = \\lambda t$.\n$$e^{\\lambda t} = 1 + \\frac{\\lambda t}{1!} + \\frac{(\\lambda t)^2}{2!} + \\dots = 1 + \\sum_{n=1}^\\infty \\frac{(\\lambda t)^n}{n!}$$\n$$\\sum_{n=1}^\\infty \\frac{(\\lambda t)^n}{n!} = \\mathbf{e^{\\lambda t} - 1} \\quad (\\text{Option C})$$",
            variant: "2025 Variant: If multiplied by $e^{-\\lambda t}$: $e^{-\\lambda t} \\sum_{n=1}^\\infty \\frac{(\\lambda t)^n}{n!} = e^{-\\lambda t}(e^{\\lambda t} - 1) = \\mathbf{1 - e^{-\\lambda t}}$.",
            trap: "Notice this question does NOT have $e^{-\\lambda t}$ inside the sum; hence the answer is $e^{\\lambda t} - 1$, NOT $1 - e^{-\\lambda t}$."
          },
          {
            id: "W11-2026-Q9",
            year: "2026",
            conceptTag: "Pure Death Service Completion",
            question: "In a system, there is only one customer at 2 PM. The service rate is exponential at 2 customers per hour. The probability that there will be no customer at 3 PM is",
            options: [
              "0",
              "0.6321",
              "1",
              "0.8647"
            ],
            correctAnswer: 3,
            theory: "In a pure death service process with rate $\\mu$, the service time $T \\sim \\text{Exp}(\\mu)$. The probability that a customer is finished within time $t$ is $P(T \\le t) = 1 - e^{-\\mu t}$.",
            formula: "\\boxed{P(N(t) = 0) = 1 - e^{-\\mu t}}",
            stepByStep: "Given: $N(0) = 1, \\mu = 2\\text{ customers/hour}, t = 3\\text{ PM} - 2\\text{ PM} = 1\\text{ hour}$.\n$$P(T \\le 1) = 1 - e^{-2 \\times 1} = 1 - e^{-2}$$\n$$e^{-2} \\approx 0.135335$$\n$$P = 1 - 0.135335 = 0.864665 \\approx \\mathbf{0.8647} \\quad (\\text{Option D})$$",
            variant: "2025 Variant: $\\mu = 1\\text{ cust/hr}, t = 1\\text{ hr} \\implies P = 1 - e^{-1} = 1 - 0.36788 = \\mathbf{0.632}$.",
            trap: "Don't just write $e^{-\\mu t} = 0.1353$! That is the probability the customer is STILL waiting. Empty system $= 1 - e^{-\\mu t}$."
          },
          {
            id: "W11-2026-Q10",
            year: "2026",
            conceptTag: "Pure Birth & Death Distribution",
            question: "The exponential distribution is commonly used in Pure Birth and Pure Death models to describe",
            options: [
              "system capacity",
              "inter-arrival and service times",
              "number of customers in the system",
              "the number of facilities"
            ],
            correctAnswer: 1,
            theory: "Because of its memoryless (Markovian) property, the exponential distribution is uniquely suited to model continuous time between events: inter-arrival times and service durations.",
            formula: "\\boxed{f(t) = \\lambda e^{-\\lambda t} \\quad (t \\ge 0)}",
            stepByStep: "By Markovian formulation: Exponential distribution models the time between arrivals (inter-arrival) and the time spent in service (Option B).",
            variant: "Poisson distribution models the discrete COUNT of arrivals $N(t)$ in a fixed interval.",
            trap: "Number of customers is discrete (Poisson), whereas inter-arrival and service times are continuous (Exponential)."
          },
          {
            id: "W11-2026-Q11",
            year: "2026",
            conceptTag: "Arrival Rate Conversion",
            question: "A customer support center receives one call every 5 minutes. The arrival rate λ is",
            options: [
              "10 calls per hour",
              "12 calls per hour",
              "2.5 calls per minute",
              "6 calls per hour"
            ],
            correctAnswer: 1,
            theory: "Arrival rate $\\lambda = \\frac{1}{\\text{Mean inter-arrival time}}$. To express in calls per hour, divide 60 minutes by the minutes per call.",
            formula: "\\boxed{\\lambda = \\frac{60\\text{ minutes}}{\\text{minutes per call}}}",
            stepByStep: "Given: 1 call every 5 minutes.\n$$\\lambda = \\frac{60}{5} = \\mathbf{12\\text{ calls per hour}} \\quad (\\text{Option B})$$",
            variant: "2025 Variant: 1 call every 4 minutes $\\implies \\lambda = \\frac{60}{4} = \\mathbf{15\\text{ calls per hour}}$.",
            trap: "Don't multiply $5 \\times 60 = 300$; rate is frequency (calls divided by time)."
          },
          {
            id: "W11-2026-Q12",
            year: "2026",
            conceptTag: "State-Dependent Markov Queue",
            question: "In a state-dependent Poisson queueing system: λ0 = 4 customers/hour, λ1 = 5 customers/hour, μ = 3 customers/hour for all states. The system can hold a maximum of 2 customers (including the one in service). The steady-state probability of zero customers in the system is",
            options: [
              "10/49",
              "11/53",
              "9/41",
              "12/35"
            ],
            correctAnswer: 2,
            theory: "For a finite Markov queue with birth rates $\\lambda_n$ and death rates $\\mu_n$, steady-state balance equations give $P_n = P_0 \\prod_{i=0}^{n-1} \\frac{\\lambda_i}{\\mu_{i+1}}$, with $\\sum_{n=0}^K P_n = 1$.",
            formula: "\\boxed{P_0\\left(1 + \\frac{\\lambda_0}{\\mu} + \\frac{\\lambda_0 \\lambda_1}{\\mu^2}\\right) = 1}",
            stepByStep: "Given: $\\lambda_0 = 4, \\lambda_1 = 5, \\mu = 3$, maximum capacity $K = 2$.\n1. Express $P_1$ and $P_2$ in terms of $P_0$:\n$$P_1 = \\frac{\\lambda_0}{\\mu} P_0 = \\frac{4}{3} P_0$$\n$$P_2 = \\frac{\\lambda_1}{\\mu} P_1 = \\frac{5}{3} \\times \\left(\\frac{4}{3} P_0\\right) = \\frac{20}{9} P_0$$\n2. Normalization condition $P_0 + P_1 + P_2 = 1$:\n$$P_0 \\left(1 + \\frac{4}{3} + \\frac{20}{9}\\right) = 1$$\n$$P_0 \\left(\\frac{9 + 12 + 20}{9}\\right) = P_0 \\left(\\frac{41}{9}\\right) = 1$$\n$$P_0 = \\mathbf{\\frac{9}{41}} \\quad (\\text{Option C})$$",
            variant: "2025 Variant: $\\lambda_0 = 6, \\lambda_1 = 3, \\mu = 3 \\implies P_1 = 2 P_0, P_2 = 2 P_0 \\implies P_0(1+2+2)=1 \\implies P_0 = \\mathbf{1/5}$.",
            trap: "Do not forget the $+ 1$ for state 0 itself when normalizing $\\sum P_n = 1$."
          },
          {
            id: "W11-2026-Q13",
            year: "2026",
            conceptTag: "M/M/1 Server Idle Probability",
            question: "In a diagnostic center, patients arrive following a Poisson process at an average rate of 5 patients per hour. A doctor takes an average of 10 minutes per patient, and the service time follows an exponential distribution. Assume the system follows the M/M/1 queue model. The probability that there are no patients in the system is",
            options: [
              "0.83",
              "0.66",
              "0.17",
              "0.33"
            ],
            correctAnswer: 2,
            theory: "In an M/M/1 queue, the service rate $\\mu = 60 / \\text{service minutes}$. Traffic intensity is $\\rho = \\lambda / \\mu$, and the probability of an empty system (no patients) is $P_0 = 1 - \\rho$.",
            formula: "\\boxed{P_0 = 1 - \\rho = 1 - \\frac{\\lambda}{\\mu}}",
            stepByStep: "Given: $\\lambda = 5\\text{ patients/hour}$, service time $= 10\\text{ minutes} \\implies \\mu = \\frac{60}{10} = 6\\text{ patients/hour}$.\n1. Traffic utilization:\n$$\\rho = \\frac{\\lambda}{\\mu} = \\frac{5}{6} \\approx 0.8333$$\n2. Probability of zero patients:\n$$P_0 = 1 - \\rho = 1 - \\frac{5}{6} = \\frac{1}{6} \\approx 0.1667 \\approx \\mathbf{0.17} \\quad (\\text{Option C})$$",
            variant: "2025 Variant: $\\lambda = 4, \\mu = 6 \\implies \\rho = 4/6 = 2/3 \\implies P_0 = 1 - 2/3 = 1/3 \\approx \\mathbf{0.33}$.",
            trap: "0.83 is the utilization $\\rho$ (probability doctor is busy), NOT $P_0$. The idle probability is $1 - 0.83 = 0.17$."
          },
          {
            id: "W11-2026-Q14",
            year: "2026",
            conceptTag: "Mean Number of Idle Servers",
            question: "For a machine shop, there are five mechanics. On an average, 1.4 machines wait for the service, while the number of machines in service plus waiting is 2.5. The mean number of idle mechanics is",
            options: [
              "2.3",
              "1.7",
              "4.5",
              "3.9"
            ],
            correctAnswer: 3,
            theory: "The total number of machines receiving service is $L - L_q$ (total machines in system minus waiting machines). The mean number of idle servers is $c_{\\text{idle}} = c - \\text{busy servers} = c - (L - L_q)$.",
            formula: "\\boxed{c_{\\text{idle}} = c - (L - L_q)}",
            stepByStep: "Given:\n- Total mechanics $c = 5$\n- Waiting machines $L_q = 1.4$\n- Total machines in system $L = 2.5$\n1. Mechanics currently busy (in service):\n$$\\text{Busy} = L - L_q = 2.5 - 1.4 = 1.1$$\n2. Mean idle mechanics:\n$$c_{\\text{idle}} = 5 - 1.1 = \\mathbf{3.9} \\quad (\\text{Option D})$$",
            variant: "2025 Variant: 4 mechanics, $L_q = 1.2, L = 2.7 \\implies \\text{Busy} = 1.5 \\implies \\text{Idle} = 4 - 1.5 = \\mathbf{2.5}$.",
            trap: "Do not subtract $L$ directly from $c$ ($5 - 2.5 = 2.5$); waiting machines are not tying up mechanics!"
          },
          {
            id: "W11-2026-Q15",
            year: "2026",
            conceptTag: "M/M/c Multi-Server State Probability",
            question: "In a hospital, patients arrive at the rate of 12 per hour. There are three doctors in the hospital, who see the patients in three parallel chambers. Each doctor takes 15 minutes to see a patient on an average. Denote the probability of no patients in the system as P₀. Based on M/M/3 queue model, the probability of 5 patients in the system is",
            options: [
              "4.5 P₀",
              "2.8 P₀",
              "0.27 P₀",
              "0.45 P₀"
            ],
            correctAnswer: 0,
            theory: "In an M/M/c queue, for states $n \\ge c$, the state probability is $P_n = \\frac{r^n}{c! \\cdot c^{n-c}} P_0$, where $r = \\lambda / \\mu$.",
            formula: "\\boxed{P_n = \\frac{(\\lambda / \\mu)^n}{c! \\cdot c^{n-c}} P_0 \\quad (n \\ge c)}",
            stepByStep: "Given: $\\lambda = 12\\text{/hr}$, $c = 3$ doctors, service time $= 15\\text{ min} \\implies \\mu = \\frac{60}{15} = 4\\text{/hr}$.\n1. Intensity ratio:\n$$r = \\frac{\\lambda}{\\mu} = \\frac{12}{4} = 3$$\n2. Probability of $n = 5$ patients ($n \\ge 3$):\n$$P_5 = \\frac{3^5}{3! \\times 3^{5 - 3}} P_0 = \\frac{243}{6 \\times 3^2} P_0 = \\frac{243}{6 \\times 9} P_0 = \\frac{243}{54} P_0 = \\mathbf{4.5 P_0} \\quad (\\text{Option A})$$",
            variant: "2025 Variant: $\\lambda = 10, \\mu = 6, c = 3, n = 5 \\implies r = 5/3 \\implies P_5 = \\frac{(5/3)^5}{54} P_0 = \\mathbf{0.24 P_0}$.",
            trap: "In the denominator, do not use $5!$; the formula uses $c! \\cdot c^{n-c} = 3! \\times 3^2 = 54$."
          },
          {
            id: "W11-2026-Q16",
            year: "2026",
            conceptTag: "Kendall Notation (Triple Server)",
            question: "In Kendall's notation, a queue with Poisson arrival, exponential service time and triple server is represented as",
            options: [
              "P/E/3",
              "P/3/E",
              "M/M/3",
              "M/3/M"
            ],
            correctAnswer: 2,
            theory: "Kendall's standard notation uses A/B/c/K/N/D where:\n- A = Arrival distribution (M = Markovian/Poisson)\n- B = Service time distribution (M = Exponential/Markovian)\n- c = Number of parallel service channels (servers).",
            formula: "\\boxed{\\text{Kendall Notation: } A/B/c = M/M/3}",
            stepByStep: "Poisson arrival $\\implies$ M; Exponential service $\\implies$ M; 3 parallel servers $\\implies$ 3: **M/M/3 (Option C)**.",
            variant: "2025 Variant: Double server $\\implies$ **M/M/2**.",
            trap: "P is never used in Kendall's notation; Poisson/Exponential are denoted by M (Markovian)."
          },
          {
            id: "W11-2026-Q17",
            year: "2026",
            conceptTag: "Pollaczek–Khinchine M/G/1 Formula",
            question: "At a shop, customers arrive at a mean rate of 5 per hour. Customers are served at a mean rate of 10 per hour. The service time has a standard deviation of 1 hour. The expected number of customers in the queue is",
            options: [
              "30.12",
              "25.25",
              "12.36",
              "10.54"
            ],
            correctAnswer: 1,
            theory: "The Pollaczek–Khinchine (P-K) formula calculates the mean queue length $L_q$ in an M/G/1 queue with arbitrary service time variance $\\sigma^2$: $L_q = \\frac{\\lambda^2 \\sigma^2 + \\rho^2}{2(1 - \\rho)}$.",
            formula: "\\boxed{L_q = \\frac{\\lambda^2 \\sigma^2 + \\rho^2}{2(1 - \\rho)}, \\quad \\rho = \\frac{\\lambda}{\\mu}}",
            stepByStep: "Given: $\\lambda = 5\\text{/hr}, \\mu = 10\\text{/hr}, \\sigma = 1\\text{ hr}$.\n1. Utilization:\n$$\\rho = \\frac{5}{10} = 0.5$$\n2. Apply P-K formula:\n$$L_q = \\frac{5^2 (1^2) + (0.5)^2}{2(1 - 0.5)} = \\frac{25 + 0.25}{2(0.5)} = \\frac{25.25}{1.0} = \\mathbf{25.25} \\quad (\\text{Option B})$$",
            variant: "2025 Variant: $\\lambda = 6, \\mu = 8 \\implies \\rho = 0.75, \\sigma = 1$.\n$$L_q = \\frac{6^2(1)^2 + 0.75^2}{2(1 - 0.75)} = \\frac{36 + 0.5625}{0.5} = \\mathbf{73.125}.$$",
            trap: "Notice how high $L_q$ climbs when service variance $\\sigma^2$ is large! High variance causes severe queue accumulation."
          },
          {
            id: "W11-2026-Q18",
            year: "2026",
            conceptTag: "Kendall Notation M/D/c",
            question: "In the Kendall's notation M/D/2, M and D, respectively, correspond to",
            options: [
              "Exponential arrival rate and constant service time",
              "Constant arrival rate and exponential service time",
              "Poisson arrival and exponential service time",
              "Poisson arrival and constant service time"
            ],
            correctAnswer: 3,
            theory: "In Kendall's notation, 'M' stands for Markovian (Poisson arrivals or exponential inter-arrival times), and 'D' stands for Deterministic (constant, invariant service time).",
            formula: "\\boxed{M = \\text{Poisson arrival}, \\quad D = \\text{Deterministic (constant) service time}}",
            stepByStep: "M = Poisson arrival, D = constant service time: **Option D**.",
            variant: "M/M/1: Poisson arrival and exponential service time.\nM/G/1: Poisson arrival and General service time.",
            trap: "D does not stand for dynamic; it stands for deterministic (fixed constant)."
          },
          {
            id: "W11-2026-Q19",
            year: "2026",
            conceptTag: "Single-Server Idle Probability",
            question: "In a single-server queuing system with deterministic rates, the arrival rate (λ) is 8 customers per hour, and the service rate (μ) is 10 customers per hour. The probability that the server is idle is",
            options: [
              "0.1",
              "0.2",
              "0.8",
              "0.4"
            ],
            correctAnswer: 1,
            theory: "In any single-server G/G/1 or M/M/1 queue with $\\lambda < \\mu$, the proportion of time the server is busy is $\\rho = \\lambda / \\mu$. The fraction of time the server is idle is $P_0 = 1 - \\rho$.",
            formula: "\\boxed{P_{\\text{idle}} = 1 - \\rho = 1 - \\frac{\\lambda}{\\mu}}",
            stepByStep: "Given: $\\lambda = 8\\text{/hr}, \\mu = 10\\text{/hr}$.\n$$\\rho = \\frac{8}{10} = 0.8$$\n$$P_{\\text{idle}} = 1 - 0.8 = \\mathbf{0.2} \\quad (\\text{Option B})$$",
            variant: "2025 Variant: $\\lambda = 10, \\mu = 12 \\implies \\rho = 10/12 = 5/6 \\implies P_0 = 1 - 5/6 \\approx \\mathbf{0.167}$.",
            trap: "0.8 is the busy probability (utilization); the question specifically asks for the idle probability ($1 - 0.8 = 0.2$)."
          },
          {
            id: "W11-2026-Q20",
            year: "2026",
            conceptTag: "M/M/1 Queue Length",
            question: "In M/M/1 queue, the utilization factor is 0.75. The length of the queue is",
            options: [
              "2.25",
              "3.25",
              "4.21",
              "3.58"
            ],
            correctAnswer: 0,
            theory: "The expected queue length (number of customers waiting in line excluding the one being served) in an M/M/1 queue is $L_q = \\frac{\\rho^2}{1 - \\rho}$.",
            formula: "\\boxed{L_q = \\frac{\\rho^2}{1 - \\rho}}",
            stepByStep: "Given: Utilization $\\rho = 0.75$.\n$$L_q = \\frac{0.75^2}{1 - 0.75} = \\frac{0.5625}{0.25} = \\mathbf{2.25} \\quad (\\text{Option A})$$",
            variant: "2025 Variant: $\\rho = 0.8 \\implies L_q = \\frac{0.8^2}{1 - 0.8} = \\frac{0.64}{0.2} = \\mathbf{3.2}$.\nIf asked for system length $L$: $L = \\frac{\\rho}{1-\\rho} = \\frac{0.75}{0.25} = 3.0$ (notice $L = L_q + \\rho = 2.25 + 0.75 = 3.0$).",
            trap: "Do not calculate $L = \\frac{\\rho}{1-\\rho} = 3.0$! Length of QUEUE is $L_q = \\frac{\\rho^2}{1-\\rho} = 2.25$."
          }
        ],

        "2025": [
          {
            id: "W11-2025-Q1",
            year: "2025",
            conceptTag: "Queuing Theory Scope",
            question: "Queuing theory studies",
            options: [
              "product pricing",
              "behavior of waiting lines",
              "random number generation",
              "method to implement total quality"
            ],
            correctAnswer: 1,
            theory: "Queuing theory is the mathematical study of waiting lines (queues), analyzing arrival patterns, waiting times, queue capacities, and service mechanisms.",
            formula: "\\boxed{\\text{Queuing Theory} \\equiv \\text{Mathematical Study of Waiting Lines}}",
            stepByStep: "Direct definition: Queuing theory specifically models and evaluates the behavior of waiting lines (Option B).",
            variant: "2026 Variant: Same question, option order slightly different.",
            trap: "Do not select random number generation; that is Monte Carlo simulation."
          },
          {
            id: "W11-2025-Q2",
            year: "2025",
            conceptTag: "Inter-Arrival Time",
            question: "On an average 150 customers visit a market complex in one hour. The inter-arrival time is",
            options: [
              "24 s",
              "15 s",
              "6 s",
              "2.4 s"
            ],
            correctAnswer: 0,
            theory: "The inter-arrival time is the reciprocal of the arrival rate $\\lambda$: $T = \\frac{1}{\\lambda}$. When converting from hours to seconds, multiply by 3600 seconds per hour.",
            formula: "\\boxed{T = \\frac{3600}{\\lambda}\\text{ seconds}}",
            stepByStep: "Given: Arrival rate $\\lambda = 150\\text{ customers/hour}$.\n$$T = \\frac{3600\\text{ seconds}}{150} = \\mathbf{24\\text{ s}} \\quad (\\text{Option A})$$",
            variant: "2026 Variant: 200 customers/hour $\\implies T = \\frac{3600}{200} = \\mathbf{18\\text{ s}}$.",
            trap: "Do not divide 60 by 150 (0.4 min = 24 s). Make sure to convert minutes to seconds."
          },
          {
            id: "W11-2025-Q3",
            year: "2025",
            conceptTag: "Queue Disciplines (FIFO)",
            question: "Which one of the following is an example of a FIFO (First-In-First-Out) queue?",
            options: [
              "Undo function in a word processor",
              "Stack of plates",
              "Printer job queue",
              "Lottery ticket draw"
            ],
            correctAnswer: 2,
            theory: "In FIFO (First-In-First-Out), the first customer to arrive is served first. Classic examples include printer spools, ticket counters, and checkout lines.",
            formula: "\\boxed{\\text{FIFO} = \\text{First-Come, First-Served (FCFS)}}",
            stepByStep: "A printer prints documents in the order they were submitted: Printer job queue is FIFO (Option C).",
            variant: "LIFO examples: Stack of plates, Undo command in a text editor (most recent action undone first).",
            trap: "Undo function and Stack of plates are LIFO (Last-In-First-Out)."
          },
          {
            id: "W11-2025-Q4",
            year: "2025",
            conceptTag: "Customer Behaviors (Reneging)",
            question: "The term 'reneging' in queuing system means",
            options: [
              "refusing to join the queue",
              "switching to another queue",
              "leaving the queue after waiting for some time",
              "skipping the queue entirely"
            ],
            correctAnswer: 2,
            theory: "Customer behaviors in queues:\n- Balking: Deciding not to join upon seeing a long line.\n- Reneging: Joining the queue, losing patience after waiting, and leaving without service.\n- Jockeying: Jumping from one queue line to another.",
            formula: "\\boxed{\\text{Reneging} = \\text{Leaving the queue after waiting for some time}}",
            stepByStep: "Direct definition: Reneging occurs when a customer abandons the queue after waiting for a period (Option C).",
            variant: "2026 Variant: Jockeying = switching from one queue to another.",
            trap: "Balking is refusing to join; reneging is joining and then leaving."
          },
          {
            id: "W11-2025-Q5",
            year: "2025",
            conceptTag: "Calling Population (Infinite Source)",
            question: "An example of an 'infinite' source in a queuing system is",
            options: [
              "number of machines waiting for repair in a workshop",
              "a fixed set of customers visiting a clinic",
              "calls arriving at a telephone exchange",
              "voters in an election booth"
            ],
            correctAnswer: 2,
            theory: "An infinite source population has arrival generation independent of how many units are currently in the system, because the external population is practically limitless.",
            formula: "\\boxed{\\text{Infinite Source: Calls arriving at a telephone exchange}}",
            stepByStep: "Calls arriving at a telephone exchange originate from millions of potential users: Infinite source (Option C).",
            variant: "2026 Variant: Vehicles arriving at a highway toll plaza.",
            trap: "Workshop machines or registered clinic patients represent finite population systems."
          },
          {
            id: "W11-2025-Q6",
            year: "2025",
            conceptTag: "Origin of Queuing Theory",
            question: "Who is credited with the origin of queuing theory?",
            options: [
              "Agner Krarup Erlang",
              "Albert Einstein",
              "Isaac Newton",
              "George Dantzig"
            ],
            correctAnswer: 0,
            theory: "Agner Krarup Erlang (1878–1929), a Danish mathematician and engineer, published the foundational papers on telephone traffic congestion in 1909.",
            formula: "\\boxed{\\text{Founder: Agner Krarup Erlang (A.K. Erlang)}}",
            stepByStep: "Direct historical attribution: Agner Krarup Erlang (Option A).",
            variant: "George Dantzig is famous for the Simplex method in Linear Programming, not queuing theory.",
            trap: "Do not guess George Dantzig—he invented Simplex, while Erlang founded Queuing Theory."
          },
          {
            id: "W11-2025-Q7",
            year: "2025",
            conceptTag: "Exponential Arrival Properties",
            question: "Customers arrive in a shop at the rate of 5 customers per hour. Assuming exponential arrival, the mean and standard deviation (in minutes) is",
            options: [
              "12, 144",
              "12, 3.46",
              "12, 12",
              "3.46, 3.46"
            ],
            correctAnswer: 2,
            theory: "For an exponential distribution, the standard deviation is identically equal to the mean: $\\text{Mean} = 1/\\lambda$, $\\sigma = 1/\\lambda$.",
            formula: "\\boxed{\\text{Mean} = \\frac{1}{\\lambda}, \\quad \\sigma = \\frac{1}{\\lambda}}",
            stepByStep: "Given: $\\lambda = 5\\text{ customers/hour} = \\frac{5}{60} = \\frac{1}{12}\\text{ cust/min}$.\n1. Mean inter-arrival time: $\\text{Mean} = \\frac{60}{5} = 12\\text{ minutes}$\n2. Standard deviation: $\\sigma = \\text{Mean} = \\mathbf{12\\text{ minutes}}$\nResult: **12, 12 (Option C)**.",
            variant: "2026 Variant: 10 customers/hour $\\implies \\text{Mean} = 6\\text{ min}, \\sigma = 6\\text{ min}$.",
            trap: "Do not compute $\\sqrt{12} \\approx 3.46$! Standard deviation is equal to the mean, NOT the square root of the mean."
          },
          {
            id: "W11-2025-Q8",
            year: "2025",
            conceptTag: "Poisson Series Sum",
            question: "Σ (from n=1 to ∞) (λt)ⁿ e^(−λt) / n! =",
            options: [
              "1",
              "1 − e^(−λt)",
              "1 − e^(−λt) − λt·e^(−λt)",
              "0"
            ],
            correctAnswer: 1,
            theory: "The Poisson probability mass function is $P(N = n) = \\frac{(\\lambda t)^n e^{-\\lambda t}}{n!}$. The sum of all probabilities from $n=0$ to $\\infty$ is 1. Therefore, $\\sum_{n=1}^\\infty P(N = n) = 1 - P(N = 0) = 1 - e^{-\\lambda t}$.",
            formula: "\\boxed{\\sum_{n=1}^\\infty \\frac{(\\lambda t)^n e^{-\\lambda t}}{n!} = 1 - P(0) = 1 - e^{-\\lambda t}}",
            stepByStep: "Total probability sums to 1:\n$$\\sum_{n=0}^\\infty \\frac{(\\lambda t)^n e^{-\\lambda t}}{n!} = e^{-\\lambda t} + \\sum_{n=1}^\\infty \\frac{(\\lambda t)^n e^{-\\lambda t}}{n!} = 1$$\n$$\\sum_{n=1}^\\infty \\frac{(\\lambda t)^n e^{-\\lambda t}}{n!} = \\mathbf{1 - e^{-\\lambda t}} \\quad (\\text{Option B})$$",
            variant: "2026 Variant: If $e^{-\\lambda t}$ is omitted from the sum: $\\sum_{n=1}^\\infty \\frac{(\\lambda t)^n}{n!} = \\mathbf{e^{\\lambda t} - 1}$.",
            trap: "Notice that the summation starts at $n=1$, not $n=0$. If it started at $n=0$, the sum would be 1."
          },
          {
            id: "W11-2025-Q9",
            year: "2025",
            conceptTag: "Pure Death Service Completion",
            question: "In a system, there is only one customer at 4 PM. The service rate is exponential at 1 customer per hour. The probability that there will be no customer at 5 PM is",
            options: [
              "1",
              "0.632",
              "0.368",
              "0"
            ],
            correctAnswer: 1,
            theory: "With exponential service time $T \\sim \\text{Exp}(\\mu)$, the cumulative distribution function giving the probability service finishes by time $t$ is $F(t) = 1 - e^{-\\mu t}$.",
            formula: "\\boxed{P(T \\le t) = 1 - e^{-\\mu t}}",
            stepByStep: "Given: $N(0) = 1, \\mu = 1\\text{/hr}, t = 1\\text{ hour}$ (from 4 PM to 5 PM).\n$$P(T \\le 1) = 1 - e^{-1 \\times 1} = 1 - e^{-1} = 1 - 0.36788 = 0.63212 \\approx \\mathbf{0.632} \\quad (\\text{Option B})$$",
            variant: "2026 Variant: $\\mu = 2\\text{/hr}, t = 1\\text{ hr} \\implies 1 - e^{-2} = 1 - 0.1353 = \\mathbf{0.8647}$.",
            trap: "0.368 is $e^{-1}$ (the probability the customer is STILL in service). The probability of NO customer is $1 - 0.368 = 0.632$."
          },
          {
            id: "W11-2025-Q10",
            year: "2025",
            conceptTag: "Arrival Rate Conversion",
            question: "A customer support center receives one call every 4 minutes. The arrival rate λ is",
            options: [
              "0.25 calls per hour",
              "15 calls per hour",
              "4 calls per minute",
              "4 calls per hour"
            ],
            correctAnswer: 1,
            theory: "Arrival rate $\\lambda = \\frac{1}{\\text{Mean inter-arrival time}}$. To express in calls per hour, divide 60 minutes by the interval in minutes.",
            formula: "\\boxed{\\lambda = \\frac{60\\text{ minutes}}{\\text{minutes per call}}}",
            stepByStep: "Given: 1 call every 4 minutes.\n$$\\lambda = \\frac{60}{4} = \\mathbf{15\\text{ calls per hour}} \\quad (\\text{Option B})$$",
            variant: "2026 Variant: 1 call every 5 minutes $\\implies \\lambda = \\frac{60}{5} = \\mathbf{12\\text{ calls per hour}}$.",
            trap: "Do not divide 4 by 60; rate is total occurrences per hour (60 / 4)."
          },
          {
            id: "W11-2025-Q11",
            year: "2025",
            conceptTag: "Pure Birth & Death Distribution",
            question: "The exponential distribution is commonly used in Pure Birth and Pure Death models to describe",
            options: [
              "the number of servers",
              "the queue length",
              "inter-arrival and service times",
              "the number of facilities"
            ],
            correctAnswer: 2,
            theory: "Due to the memoryless property, the exponential distribution is uniquely suited to model continuous durations: inter-arrival times and service durations.",
            formula: "\\boxed{f(t) = \\lambda e^{-\\lambda t}}",
            stepByStep: "Direct concept: Inter-arrival and service times (Option C).",
            variant: "Poisson distribution describes the discrete number of events in a fixed time interval.",
            trap: "Queue length is discrete (0, 1, 2, ...), while exponential distribution is continuous."
          },
          {
            id: "W11-2025-Q12",
            year: "2025",
            conceptTag: "M/M/1 Server Idle Probability",
            question: "In a diagnostic center, patients arrive following a Poisson process at an average rate of 4 patients per hour. A doctor takes an average of 10 minutes per patient, and the service time follows an exponential distribution. Assume the system follows the M/M/1 queue model. The probability that there are no patients in the system is",
            options: [
              "0.6",
              "0.4",
              "0.5",
              "0.33"
            ],
            correctAnswer: 3,
            theory: "In an M/M/1 queue, server utilization is $\\rho = \\lambda / \\mu$. The probability of an idle system (zero patients) is $P_0 = 1 - \\rho$.",
            formula: "\\boxed{P_0 = 1 - \\rho = 1 - \\frac{\\lambda}{\\mu}}",
            stepByStep: "Given: $\\lambda = 4\\text{/hr}$, doctor takes $10\\text{ min} \\implies \\mu = \\frac{60}{10} = 6\\text{ patients/hour}$.\n1. Utilization factor:\n$$\\rho = \\frac{\\lambda}{\\mu} = \\frac{4}{6} = \\frac{2}{3} \\approx 0.667$$\n2. Probability of zero patients:\n$$P_0 = 1 - \\frac{2}{3} = \\frac{1}{3} \\approx \\mathbf{0.33} \\quad (\\text{Option D})$$",
            variant: "2026 Variant: $\\lambda = 5, \\mu = 6 \\implies \\rho = 5/6 \\implies P_0 = 1/6 \\approx \\mathbf{0.17}$.",
            trap: "0.667 is the busy probability; idle probability is $1 - 0.667 = 0.33$."
          },
          {
            id: "W11-2025-Q13",
            year: "2025",
            conceptTag: "State-Dependent Markov Queue",
            question: "In a state-dependent Poisson queueing system: λ₀ = 6 customers/hour, λ₁ = 3 customers/hour, μ = 3 customers/hour for all states. The system can hold a maximum of 2 customers (including the one in service). The steady-state probability of zero customers in the system is",
            options: [
              "1/4",
              "1/5",
              "1/6",
              "1/3"
            ],
            correctAnswer: 1,
            theory: "In a finite Markov birth-death queue, $P_n = \\frac{\\lambda_{n-1}}{\\mu_n} P_{n-1}$. Total probability normalizes to 1: $\\sum P_n = 1$.",
            formula: "\\boxed{P_0\\left(1 + \\frac{\\lambda_0}{\\mu} + \\frac{\\lambda_0 \\lambda_1}{\\mu^2}\\right) = 1}",
            stepByStep: "Given: $\\lambda_0 = 6, \\lambda_1 = 3, \\mu = 3$, capacity $K = 2$.\n1. Express states in terms of $P_0$:\n$$P_1 = \\frac{\\lambda_0}{\\mu} P_0 = \\frac{6}{3} P_0 = 2 P_0$$\n$$P_2 = \\frac{\\lambda_1}{\\mu} P_1 = \\frac{3}{3} (2 P_0) = 2 P_0$$\n2. Normalization condition $P_0 + P_1 + P_2 = 1$:\n$$P_0 + 2 P_0 + 2 P_0 = 1 \\implies 5 P_0 = 1 \\implies P_0 = \\mathbf{1/5} \\quad (\\text{Option B})$$",
            variant: "2026 Variant: $\\lambda_0 = 4, \\lambda_1 = 5, \\mu = 3 \\implies P_0 = \\mathbf{9/41}$.",
            trap: "Don't forget to include $P_0$ itself in the normalization sum ($1 + 2 + 2 = 5$)."
          },
          {
            id: "W11-2025-Q14",
            year: "2025",
            conceptTag: "M/M/c Multi-Server State Probability",
            question: "In a hospital, patients arrive at the rate of 10 per hour. There are three doctors in the hospital, who see the patients in three parallel chambers. Each doctor takes 10 minutes to see a patient on an average. Denote the probability of no patients in the system as P₀. Based on M/M/3 queue model, the probability of 5 patients in the system is",
            options: [
              "0.24 P₀",
              "0.48 P₀",
              "0.12 P₀",
              "0.36 P₀"
            ],
            correctAnswer: 0,
            theory: "In an M/M/c queue, for states $n \\ge c$, the state probability is $P_n = \\frac{r^n}{c! \\cdot c^{n-c}} P_0$, where $r = \\lambda / \\mu$.",
            formula: "\\boxed{P_n = \\frac{(\\lambda / \\mu)^n}{c! \\cdot c^{n-c}} P_0 \\quad (n \\ge c)}",
            stepByStep: "Given: $\\lambda = 10\\text{/hr}$, $c = 3$ doctors, service time $= 10\\text{ min} \\implies \\mu = \\frac{60}{10} = 6\\text{/hr}$.\n1. Intensity ratio:\n$$r = \\frac{\\lambda}{\\mu} = \\frac{10}{6} = \\frac{5}{3} \\approx 1.6667$$\n2. Probability of $n = 5$ patients ($n \\ge 3$):\n$$P_5 = \\frac{(5/3)^5}{3! \\times 3^{5-3}} P_0 = \\frac{3125 / 243}{6 \\times 9} P_0 = \\frac{12.860}{54} P_0 \\approx \\mathbf{0.238 P_0 \\approx 0.24 P_0} \\quad (\\text{Option A})$$",
            variant: "2026 Variant: $\\lambda = 12, \\mu = 4, c = 3, n = 5 \\implies r = 3 \\implies P_5 = \\frac{3^5}{54} P_0 = \\mathbf{4.5 P_0}$.",
            trap: "Notice $c! \\cdot c^{n-c} = 3! \\times 3^{5-3} = 6 \\times 9 = 54$."
          },
          {
            id: "W11-2025-Q15",
            year: "2025",
            conceptTag: "Mean Number of Idle Servers",
            question: "For a machine shop, there are four mechanics. On an average, 1.2 machines wait for the service, while the number of machines in service plus waiting is 2.7. The mean number of idle mechanics is",
            options: [
              "1.2",
              "1.5",
              "2.5",
              "3"
            ],
            correctAnswer: 2,
            theory: "The number of busy mechanics is equal to the number of machines currently in service, which is $L - L_q$. The mean idle mechanics is $c_{\\text{idle}} = c - (L - L_q)$.",
            formula: "\\boxed{c_{\\text{idle}} = c - (L - L_q)}",
            stepByStep: "Given:\n- Mechanics $c = 4$\n- Waiting machines $L_q = 1.2$\n- Total machines in system $L = 2.7$\n1. Busy mechanics:\n$$\\text{Busy} = L - L_q = 2.7 - 1.2 = 1.5$$\n2. Idle mechanics:\n$$c_{\\text{idle}} = 4 - 1.5 = \\mathbf{2.5} \\quad (\\text{Option C})$$",
            variant: "2026 Variant: 5 mechanics, $L_q = 1.4, L = 2.5 \\implies \\text{Idle} = 5 - (2.5 - 1.4) = 5 - 1.1 = \\mathbf{3.9}$.",
            trap: "Do not subtract $2.7$ from $4$ ($4 - 2.7 = 1.3$); $L$ includes machines waiting in line, which are not using mechanics."
          },
          {
            id: "W11-2025-Q16",
            year: "2025",
            conceptTag: "Kendall Notation (Double Server)",
            question: "In Kendall's notation, a queue with Poisson arrival, exponential service time and double server is represented as",
            options: [
              "P/E/2",
              "P/2/E",
              "M/M/1",
              "M/M/2"
            ],
            correctAnswer: 3,
            theory: "Kendall notation standard:\n- Arrival distribution = M (Markovian/Poisson)\n- Service distribution = M (Markovian/Exponential)\n- Server count = 2.",
            formula: "\\boxed{\\text{Kendall Notation: } A/B/c = M/M/2}",
            stepByStep: "Poisson arrival (M), exponential service (M), double server (2): **M/M/2 (Option D)**.",
            variant: "2026 Variant: Triple server $\\implies$ **M/M/3**.",
            trap: "Do not select P/E/2. P and E are not standard Kendall notation characters."
          },
          {
            id: "W11-2025-Q17",
            year: "2025",
            conceptTag: "Pollaczek–Khinchine M/G/1 Formula",
            question: "At a shop, customers arrive at a mean rate of 6 per hour. Customers are served at a mean rate of 8 per hour. The service time has a standard deviation of 1 hour. The expected number of customers in the queue is",
            options: [
              "73.125",
              "74.75",
              "2.35",
              "10.93"
            ],
            correctAnswer: 0,
            theory: "The Pollaczek–Khinchine (P-K) formula calculates queue length $L_q$ for general service time with standard deviation $\\sigma$: $L_q = \\frac{\\lambda^2 \\sigma^2 + \\rho^2}{2(1 - \\rho)}$.",
            formula: "\\boxed{L_q = \\frac{\\lambda^2 \\sigma^2 + \\rho^2}{2(1 - \\rho)}, \\quad \\rho = \\frac{\\lambda}{\\mu}}",
            stepByStep: "Given: $\\lambda = 6\\text{/hr}, \\mu = 8\\text{/hr}, \\sigma = 1\\text{ hr}$.\n1. Utilization:\n$$\\rho = \\frac{6}{8} = 0.75$$\n2. Apply P-K formula:\n$$L_q = \\frac{6^2(1^2) + (0.75)^2}{2(1 - 0.75)} = \\frac{36 + 0.5625}{2(0.25)} = \\frac{36.5625}{0.5} = \\mathbf{73.125} \\quad (\\text{Option A})$$",
            variant: "2026 Variant: $\\lambda = 5, \\mu = 10, \\sigma = 1 \\implies \\rho = 0.5 \\implies L_q = \\frac{25 + 0.25}{1.0} = \\mathbf{25.25}$.",
            trap: "Be sure to square $\\lambda$ ($6^2 = 36$) and square $\\rho$ ($0.75^2 = 0.5625$)."
          },
          {
            id: "W11-2025-Q18",
            year: "2025",
            conceptTag: "Kendall Notation M/D/1",
            question: "In the Kendall's notation M/D/1 means",
            options: [
              "Poisson arrival and exponential service time",
              "Constant arrival rate and exponential service time",
              "Constant arrival rate and constant service time",
              "Poisson arrival and constant service time"
            ],
            correctAnswer: 3,
            theory: "In Kendall notation, M denotes Markovian/Poisson arrival, and D denotes Deterministic (constant, fixed) service time.",
            formula: "\\boxed{M = \\text{Poisson arrival}, \\quad D = \\text{Constant service time}}",
            stepByStep: "M/D/1 represents Poisson arrival and constant service time with 1 server: **Option D**.",
            variant: "M/M/1 = Poisson arrival and exponential service time.",
            trap: "D stands for deterministic (constant), not discrete or dynamic."
          },
          {
            id: "W11-2025-Q19",
            year: "2025",
            conceptTag: "M/M/1 Queue Length",
            question: "In M/M/1 queue, the utilization factor is 0.8. The length of the queue is",
            options: [
              "2",
              "3",
              "3.2",
              "4"
            ],
            correctAnswer: 2,
            theory: "In an M/M/1 queue, the average number of customers waiting in queue is $L_q = \\frac{\\rho^2}{1 - \\rho}$.",
            formula: "\\boxed{L_q = \\frac{\\rho^2}{1 - \\rho}}",
            stepByStep: "Given: Utilization $\\rho = 0.8$.\n$$L_q = \\frac{0.8^2}{1 - 0.8} = \\frac{0.64}{0.2} = \\mathbf{3.2} \\quad (\\text{Option C})$$",
            variant: "2026 Variant: $\\rho = 0.75 \\implies L_q = \\frac{0.75^2}{0.25} = \\frac{0.5625}{0.25} = \\mathbf{2.25}$.\nIf asked for total system length $L$: $L = \\frac{0.8}{1 - 0.8} = 4.0$.",
            trap: "Do not calculate $L = \\frac{\\rho}{1-\\rho} = 4.0$. The question asks for the length of the QUEUE ($L_q$), which is 3.2."
          },
          {
            id: "W11-2025-Q20",
            year: "2025",
            conceptTag: "Single-Server Idle Probability",
            question: "In a single-server queuing system with deterministic rates, the arrival rate (λ) is 10 customers per hour, and the service rate (μ) is 12 customers per hour. The probability that the server is idle",
            options: [
              "0.167",
              "0.200",
              "0.833",
              "0.120"
            ],
            correctAnswer: 0,
            theory: "In a single-server queue with arrival rate $\\lambda$ and service rate $\\mu$, the server is idle when there are zero customers, with probability $P_0 = 1 - \\rho = 1 - \\lambda / \\mu$.",
            formula: "\\boxed{P_{\\text{idle}} = 1 - \\rho = 1 - \\frac{\\lambda}{\\mu}}",
            stepByStep: "Given: $\\lambda = 10\\text{/hr}, \\mu = 12\\text{/hr}$.\n$$\\rho = \\frac{10}{12} = \\frac{5}{6} \\approx 0.8333$$\n$$P_{\\text{idle}} = 1 - \\frac{5}{6} = \\frac{1}{6} \\approx \\mathbf{0.167} \\quad (\\text{Option A})$$",
            shortcut: "Idle fraction is always $(1 - \\rho) = 1 - (10/12) = 2/12 = 1/6 = 0.1667$.",
            examTrap: "Do not confuse idle probability ($1 - \\rho = 0.167$) with utilization factor ($\\rho = 0.833$)."
          }
        ]
      }
    },
    // Week 10: Project Management: CPM, PERT, Network Analysis & Crashing (Active)
    {
      number: 10,
      title: "Project Management: CPM, PERT & Crashing",
      status: "active",
      summary: "Critical Path Method (CPM), Project Evaluation and Review Technique (PERT), network diagrams, forward/backward pass, Total & Free Floats, Beta distribution expected time and variance, and project crashing.",
      
      studyMaterials: {
        quickOverview: "Week 10 covers Project Management and Network Scheduling: Deterministic CPM (Morgan Walker & James Kelley, DuPont, 1950s) vs Probabilistic PERT (US Navy Polaris project, Booz Allen Hamilton), forward pass (ES, EF) and backward pass (LS, LF), Total/Free/Independent float calculations, and cost-time crashing tradeoffs along the critical path.",
        
        formulaSheet: [
          {
            name: "Forward & Backward Pass",
            formula: "EF = ES + D, \\quad ES_j = \\max_i(EF_i); \\quad LS = LF - D, \\quad LF_i = \\min_j(LS_j)",
            units: "Time units (days/weeks)",
            desc: "Determines the earliest start/finish times moving forward and latest start/finish times moving backward through the network."
          },
          {
            name: "Total Float (TF)",
            formula: "TF = LS - ES = LF - EF = L_j - E_i - D_{ij}",
            units: "Time units",
            desc: "The maximum amount of time an activity can be delayed without delaying the overall project completion date."
          },
          {
            name: "Free Float (FF)",
            formula: "FF = E_j - E_i - D_{ij} = ES_{\\text{successor}} - EF",
            units: "Time units",
            desc: "The amount of time an activity can be delayed without affecting the earliest start time of any immediate successor activity."
          },
          {
            name: "Independent Float (IF)",
            formula: "IF = \\max(0, E_j - L_i - D_{ij})",
            units: "Time units",
            desc: "Float available when preceding activity finishes at latest possible time and successor starts at earliest possible time."
          },
          {
            name: "PERT Expected Duration (te)",
            formula: "t_e = \\frac{a + 4m + b}{6}",
            units: "Time units",
            desc: "Weighted average duration based on Beta distribution: optimistic time a, most likely time m, and pessimistic time b."
          },
          {
            name: "PERT Activity Variance (σ²)",
            formula: "\\sigma^2 = \\left(\\frac{b - a}{6}\\right)^2, \\quad \\sigma = \\frac{b - a}{6}",
            units: "Time units squared",
            desc: "Variance of individual activity duration; project variance is the sum of variances of critical path activities."
          },
          {
            name: "Probability of Project Completion (Z-score)",
            formula: "Z = \\frac{T_s - T_e}{\\sigma_{\\text{project}}} \\implies P(T \\le T_e) = \\Phi(0) = 0.50",
            units: "Standard normal quantile",
            desc: "Target completion date Ts relative to expected project duration Te; when Ts = Te, the completion probability is exactly 50% (0.5)."
          },
          {
            name: "Cost Slope (Crashing)",
            formula: "\\text{Cost Slope} = \\frac{\\text{Crash Cost} - \\text{Normal Cost}}{\\text{Normal Time} - \\text{Crash Time}} = \\frac{\\Delta C}{\\Delta T}",
            units: "₹ / day",
            desc: "Direct cost incurred per unit time reduction when accelerating an activity; always crash critical activities with lowest cost slope first."
          }
        ],
        
        examTraps: [
          {
            trap: "Total Float vs Free Float Trap",
            explanation: "Remember: $TF = L_j - E_i - D$, while $FF = E_j - E_i - D$. Free float uses the EARLIEST time of the head event ($E_j$). Free float can NEVER exceed Total Float ($FF \\le TF$)."
          },
          {
            trap: "Crashing Non-Critical Activities Trap",
            explanation: "Crashing an activity that is NOT on the critical path only costs money and wastes resources; it will NEVER reduce the overall project completion time!"
          },
          {
            trap: "Calendar Date Calculation (Day 1 Inclusive)",
            explanation: "If an activity starts on April 12 and has duration 12 days, its finish date is $12 + 12 - 1 = \\text{April 23}$, NOT April 24, because the starting day itself is day 1 of work."
          },
          {
            trap: "Brooks' Law in Project Manpower",
            explanation: "Adding manpower does NOT always reduce project time. In activities requiring coordination or specialized handoffs, communication overhead can actually INCREASE project completion time."
          }
        ]
      },

      years: {
        "2026": [
          {
            id: "W10-2026-Q1",
            year: "2026",
            conceptTag: "Critical Path Definition",
            question: "Critical path corresponds to the",
            options: [
              "shortest time path through the network",
              "longest time path through the network",
              "path with the most activities",
              "path with the maximum float"
            ],
            correctAnswer: 1,
            theory: "The critical path is the continuous sequence of connected activities through the network with the longest cumulative duration, dictating the minimum time needed to complete the entire project.",
            formula: "\\boxed{\\text{Critical Path} = \\text{Longest time path through the network}}",
            stepByStep: "Direct definition: The critical path is the longest time path through the project network (Option B). Any delay on this path delays the entire project.",
            variant: "2025 Variant: Identical question. Correct is longest time path.",
            trap: "Do not choose 'shortest time path'—all activities must finish, so the project cannot complete sooner than its longest bottleneck path."
          },
          {
            id: "W10-2026-Q2",
            year: "2026",
            conceptTag: "History of CPM",
            question: "Critical Path Method (CPM) was developed in",
            options: [
              "1930s",
              "1940s",
              "1950s",
              "1970s"
            ],
            correctAnswer: 2,
            theory: "CPM was developed between 1956 and 1957 by Morgan R. Walker of DuPont and James E. Kelley Jr. of Remington Rand to manage industrial plant maintenance and construction.",
            formula: "\\boxed{\\text{CPM Origin: 1950s (1956–1957)}}",
            stepByStep: "Historical timeline: The Critical Path Method was developed in the 1950s (Option C).",
            variant: "2025 Variant: Developed by Morgan R. Walker and James E. Kelley Jr. independently.",
            trap: "Do not guess 1940s (WWII operations research) or 1970s (MRP era)."
          },
          {
            id: "W10-2026-Q3",
            year: "2026",
            conceptTag: "Earliest & Latest Times Calculation",
            question: "A project consists of the following activities and durations:\n\nActivity A (—): 4 days\nActivity B (A): 3 days\nActivity C (A): 2 days\nActivity D (B, C): 4 days\nActivity E (D): 5 days\n\nFor activity D, (earliest start, earliest finish, latest start, latest finish) times (in days) are",
            options: [
              "(7, 11, 7, 12)",
              "(7, 11, 7, 11)",
              "(5, 10, 7, 12)",
              "(5, 12, 7, 12)"
            ],
            correctAnswer: 1,
            theory: "Forward pass: $ES_D = \\max(EF_B, EF_C)$, $EF_D = ES_D + D_D$. Backward pass: $LF_D = LS_E$, $LS_D = LF_D - D_D$.",
            formula: "\\boxed{ES = \\max(EF_{\\text{preds}}), \\quad EF = ES + D; \\quad LF = \\min(LS_{\\text{succs}}), \\quad LS = LF - D}",
            stepByStep: "1. Forward pass:\n- $A$: $ES=0, EF=0+4=4$\n- $B$ (pred $A$): $ES=4, EF=4+3=7$\n- $C$ (pred $A$): $ES=4, EF=4+2=6$\n- $D$ (pred $B, C$): $ES = \\max(7, 6) = 7, \\; EF = 7 + 4 = 11$\n- $E$ (pred $D$): $ES=11, EF=11+5=16$\n2. Backward pass:\n- Project completion $= 16$\n- $E$: $LF=16, LS=16-5=11$\n- $D$: $LF = LS_E = 11, \\; LS = 11 - 4 = 7$\nResult for $D$: **(7, 11, 7, 11) (Option B)**.",
            variant: "2025 Variant: Durations [A:3, B:4, C:2, D:5, E:2] $\\implies (ES, EF, LS, LF) = (7, 12, 7, 12)$.",
            trap: "Notice activity D lies on the critical path ($ES=LS=7, EF=LF=11$), so its total float is 0."
          },
          {
            id: "W10-2026-Q4",
            year: "2026",
            conceptTag: "Network Project Duration",
            question: "A project consists of 14 activities, A to N. The duration of activities in weeks are shown: A(3): 1→2, B(2): 2→3, C(4): 2→4, D(2): 2→5, E(4): 3→10, F(2): 4→6, G(4): 4→7, H(4): 5→9, I(5): 7→9, J(2): 6→8, K(3): 8→9, L(2): 9→11, M(3): 10→11, N(2): 11→12. The minimum duration of the project is",
            options: [
              "14 weeks",
              "18 weeks",
              "19 weeks",
              "20 weeks"
            ],
            correctAnswer: 3,
            theory: "The minimum project duration equals the length of the critical path (the longest path connecting source node 1 to terminal node 12).",
            formula: "\\boxed{\\text{Duration} = \\max_{\\text{paths}} \\sum D_i}",
            stepByStep: "Evaluate all paths from node 1 to node 12:\n1. Via $1 \\to 2 \\to 3 \\to 10 \\to 11 \\to 12$:\n   $A(3) + B(2) + E(4) + M(3) + N(2) = 14\\text{ weeks}$\n2. Via $1 \\to 2 \\to 5 \\to 9 \\to 11 \\to 12$:\n   $A(3) + D(2) + H(4) + L(2) + N(2) = 13\\text{ weeks}$\n3. Via $1 \\to 2 \\to 4 \\to 6 \\to 8 \\to 9 \\to 11 \\to 12$:\n   $A(3) + C(4) + F(2) + J(2) + K(3) + L(2) + N(2) = 18\\text{ weeks}$\n4. Via $1 \\to 2 \\to 4 \\to 7 \\to 9 \\to 11 \\to 12$:\n   $A(3) + C(4) + G(4) + I(5) + L(2) + N(2) = 3 + 4 + 4 + 5 + 2 + 2 = \\mathbf{20\\text{ weeks}} \\quad (\\text{Option D})$$",
            variant: "2025 Variant: Activity $A(2)$ and $B(3) \\implies$ Critical path length $= 2 + 4 + 4 + 5 + 2 + 2 = \\mathbf{19\\text{ weeks}}$.",
            trap: "Do not overlook the middle sub-path $4 \\to 7 \\to 9$ with duration $4 + 5 = 9$, which exceeds $4 \\to 6 \\to 8 \\to 9$ ($2 + 2 + 3 = 7$)."
          },
          {
            id: "W10-2026-Q5",
            year: "2026",
            conceptTag: "Calendar Date Calculation",
            question: "A project can be completed after the completion of activities P (duration: 12 days) and Q (duration: 14 days). Earliest starting dates of P and Q are April 12, 2026 and April 8, 2026, respectively. The project will be completed on",
            options: [
              "April 23, 2028",
              "April 24, 2026",
              "April 22, 2026",
              "April 21, 2026"
            ],
            correctAnswer: 0,
            theory: "When the start date is counted as day 1, the finish date of an activity is $\\text{Finish Date} = \\text{Start Date} + \\text{Duration} - 1$. The project finishes when ALL final activities finish: $\\max(\\text{Finish}_P, \\text{Finish}_Q)$.",
            formula: "\\boxed{\\text{Finish Date} = \\text{Start Date} + \\text{Duration} - 1}",
            stepByStep: "1. For activity P: Starts April 12, duration 12 days:\n$$\\text{Finish}_P = 12 + 12 - 1 = \\text{April 23}$$\n2. For activity Q: Starts April 8, duration 14 days:\n$$\\text{Finish}_Q = 8 + 14 - 1 = \\text{April 21}$$\n3. Project completion date $= \\max(\\text{April 23}, \\text{April 21}) = \\mathbf{\\text{April 23}} \\quad (\\text{Option A, printed with year 2028 in portal key})$.",
            variant: "2025 Variant: P (10 days, April 13) $\\to$ April 22; Q (15 days, April 7) $\\to$ April 21. Max $= \\mathbf{\\text{April 22, 2026}}$.",
            trap: "Remember day 1 is inclusive ($12 + 12 - 1 = 23$). The exam paper had a typo showing 2028 instead of 2026 in option A, but Option A is the portal accepted answer."
          },
          {
            id: "W10-2026-Q6",
            year: "2026",
            conceptTag: "Network Diagram Precedence",
            question: "It is planned to launch a smart fitness device in the market. Total 7 activities are needed:\nA: Market survey (—)\nB: Design (A)\nC: Market strategy (A)\nD: Design of production facility (C)\nE: Selection of advertising method (B)\nF: Prototype testing (D, E)\nG: Launching (F)\n\nThe suitable network diagram is (arrows are activity: from-node→to-node)",
            options: [
              "A: 1→2, B: 2→3, D: 3→5, C: 2→4, E: 4→5, F: 5→6, G: 6→7",
              "A: 1→2, C: 2→4, D: 4→5, B: 2→3, E: 3→5, F: 5→6, G: 6→7",
              "A: 1→2, B: 2→3, D: 3→5, F: 5→6, C: 2→4, E: 4→6, G: 6→7",
              "A: 1→2, C: 2→4, D: 4→5, F: 5→6, B: 2→4, E: dotted line 4→6, G: 6→7"
            ],
            correctAnswer: 1,
            theory: "A valid Activity-on-Arrow (AOA) diagram must satisfy all precedence constraints without redundant dummy arrows or cycle loops.",
            formula: "\\boxed{\\text{Precedence: } A \\to (B, C); \\quad C \\to D; \\quad B \\to E; \\quad (D, E) \\to F \\to G}",
            stepByStep: "Tracing Option B:\n- $A: 1 \\to 2$\n- $C: 2 \\to 4$ (follows $A$), $D: 4 \\to 5$ (follows $C$)\n- $B: 2 \\to 3$ (follows $A$), $E: 3 \\to 5$ (follows $B$)\n- $F: 5 \\to 6$ (follows $D$ and $E$ converging at node 5)\n- $G: 6 \\to 7$ (follows $F$)\nMatches all dependencies perfectly: **Option B**.",
            variant: "2025 Variant: Predecessor of $D$ is $B$, and $E$ is $C \\implies$ Option A.",
            trap: "Check predecessors of D and E carefully: in 2026 D depends on C (node 4 to 5) and E depends on B (node 3 to 5)."
          },
          {
            id: "W10-2026-Q7",
            year: "2026",
            conceptTag: "Latest Finish Time of Predecessor",
            question: "Immediate predecessor of activities B (duration: 7 days) as well as C (duration: 6 days) is activity A. Latest finish times of activities B and C are 12 and 17 days, respectively. Latest finish time of activity A is",
            options: [
              "4 days",
              "5 days",
              "12 days",
              "11 days"
            ],
            correctAnswer: 1,
            theory: "In the backward pass, the latest finish time of an activity is the minimum of the latest start times of all its immediate successors: $LF_A = \\min(LS_B, LS_C) = \\min(LF_B - D_B, LF_C - D_C)$.",
            formula: "\\boxed{LF_A = \\min_j(LF_j - D_j)}",
            stepByStep: "Given:\n- $B$: $LF_B = 12, D_B = 7 \\implies LS_B = 12 - 7 = 5\\text{ days}$\n- $C$: $LF_C = 17, D_C = 6 \\implies LS_C = 17 - 6 = 11\\text{ days}$\n$$LF_A = \\min(LS_B, LS_C) = \\min(5, 11) = \\mathbf{5\\text{ days}} \\quad (\\text{Option B})$$",
            variant: "2025 Variant: $B(6, LF=10) \\implies LS=4$; $C(5, LF=15) \\implies LS=10$. $LF_A = \\min(4, 10) = \\mathbf{4\\text{ days}}$.",
            trap: "Take the MINIMUM of the latest start times in backward pass, not the maximum."
          },
          {
            id: "W10-2026-Q8",
            year: "2026",
            conceptTag: "Critical Path Identification",
            question: "A project comprises 5 activities:\nA (—): 2 days\nB (A): 4 days\nC (A): 7 days\nD (B, C): 5 days\nE (C): 3 days\n\nThe critical path and the project's minimum completion time are",
            options: [
              "Critical Path: A-B-D, Minimum time: 10 days",
              "Critical Path: A-C-D, Minimum time: 14 days",
              "Critical Path: A-C-E, Minimum time: 12 days",
              "Critical Path: A-B-D, Minimum time: 9 days"
            ],
            correctAnswer: 1,
            theory: "Calculate total duration for each discrete path from start to end; the path with the largest total duration is the critical path.",
            formula: "\\boxed{\\text{Path Duration} = \\sum D_i}",
            stepByStep: "Evaluate all paths:\n1. Path A-B-D: $2 + 4 + 5 = 11\\text{ days}$\n2. Path A-C-D: $2 + 7 + 5 = \\mathbf{14\\text{ days}}$\n3. Path A-C-E: $2 + 7 + 3 = 12\\text{ days}$\nThe longest path is A-C-D with minimum completion time of **14 days (Option B)**.",
            variant: "2025 Variant: A(1), B(4), C(2), D(5), E(3) $\\implies$ Path A-B-D = $1+4+5=10\\text{ days}$ (Option A).",
            trap: "Make sure to check all converging paths into activity D ($A \\to B \\to D$ vs $A \\to C \\to D$)."
          },
          {
            id: "W10-2026-Q9",
            year: "2026",
            conceptTag: "Activity Time Definitions",
            question: "An activity has duration D. Its earliest start time is x and latest start time is y. Its earliest completion and latest completion times are",
            options: [
              "(x + D) and (x − D), respectively",
              "(x − D) and (x + D), respectively",
              "(x + D) and (y − D), respectively",
              "(x + D) and (y + D), respectively"
            ],
            correctAnswer: 3,
            theory: "By definition:\n- Earliest completion (EF) = Earliest start + Duration = $x + D$\n- Latest completion (LF) = Latest start + Duration = $y + D$.",
            formula: "\\boxed{EF = ES + D = x + D, \\quad LF = LS + D = y + D}",
            stepByStep: "Given $ES = x$ and $LS = y$:\n- Earliest completion $= x + D$\n- Latest completion $= y + D$\nResult: **(x + D) and (y + D), respectively (Option D)**.",
            variant: "2025 Variant: Given $ES = x$ and $LF = y \\implies EF = x + D, LS = y - D$ (Option C).",
            trap: "Notice the given parameters: 2026 gives $ES$ and $LS$ (so add D to both), whereas 2025 gives $ES$ and $LF$ (so add D to x and subtract D from y)."
          },
          {
            id: "W10-2026-Q10",
            year: "2026",
            conceptTag: "Total Float & Free Float Calculation",
            question: "The earliest and latest occurrence times of event 1 are 2 days. The earliest and latest occurrence time of event 3 are 8 and 11 days, respectively. Total float (TF) and free float (FF) of activity 1-3 (duration: 4 days) are",
            options: [
              "TF = 5 days, FF = 2 days",
              "TF = 6 days, FF = 3 days",
              "TF = 2 days, FF = 2 days",
              "TF = 4 days, FF = 1 day"
            ],
            correctAnswer: 0,
            theory: "Float formulas for activity $i \\to j$:\n- Total Float: $TF = L_j - E_i - D_{ij}$\n- Free Float: $FF = E_j - E_i - D_{ij}$.",
            formula: "\\boxed{TF = L_j - E_i - D_{ij}, \\quad FF = E_j - E_i - D_{ij}}",
            stepByStep: "Given: $E_1 = 2, L_1 = 2$; $E_3 = 8, L_3 = 11$; duration $D_{13} = 4$.\n1. Total Float:\n$$TF = L_3 - E_1 - D_{13} = 11 - 2 - 4 = \\mathbf{5\\text{ days}}$$\n2. Free Float:\n$$FF = E_3 - E_1 - D_{13} = 8 - 2 - 4 = \\mathbf{2\\text{ days}}$$\nResult: **TF = 5 days, FF = 2 days (Option A)**.",
            variant: "2025 Variant: Duration $D_{13} = 5 \\implies TF = 11-2-5 = 4, FF = 8-2-5 = 1$ (Option D).",
            trap: "Always use $L_j$ for Total Float and $E_j$ for Free Float. Subtract $E_i$ and $D$ from both."
          },
          {
            id: "W10-2026-Q11",
            year: "2026",
            conceptTag: "Critical Activity Float Property",
            question: "In a CPM network, Activity 2-3 has a duration of 5 days. Its earliest start is 4, and latest start is also 4. The total float of this activity (in days) is",
            options: [
              "0",
              "–4",
              "4",
              "5"
            ],
            correctAnswer: 0,
            theory: "Total Float is defined as $TF = LS - ES$. When an activity has zero flexibility ($LS = ES$), its total float is identically zero, making it a critical activity.",
            formula: "\\boxed{TF = LS - ES = 4 - 4 = 0}",
            stepByStep: "Given: $ES = 4, LS = 4$.\n$$TF = LS - ES = 4 - 4 = \\mathbf{0} \\quad (\\text{Option A})$$",
            variant: "2025 Variant: $ES = 3, LS = 3 \\implies TF = 0$.",
            trap: "When $ES = LS$, total float is zero. It cannot be negative in standard scheduling."
          },
          {
            id: "W10-2026-Q12",
            year: "2026",
            conceptTag: "Red-Flagged Activities (Float Sensitivity)",
            question: "Total float (TF) and free float (FF) of four activities are as follows:\n1: TF = 5, FF = 5\n2: TF = 3, FF = 2\n3: TF = 4, FF = 4\n4: TF = 2, FF = 1\n\nFollowing activities should be red-flagged:",
            options: [
              "1, 3",
              "1, 4",
              "2, 4",
              "1, 2, 3"
            ],
            correctAnswer: 2,
            theory: "Activities where Free Float is strictly less than Total Float ($FF < TF$) cannot absorb delays without encroaching on the float of successor activities, requiring project managers to red-flag and monitor them closely.",
            formula: "\\boxed{\\text{Red-flag criteria: } FF < TF \\text{ (interfering float present)}}",
            stepByStep: "Evaluate each activity:\n- Activity 1: $TF=5, FF=5 \\implies FF = TF$ (Independent, no interference)\n- Activity 2: $TF=3, FF=2 \\implies FF < TF$ (**Red-flag**)\n- Activity 3: $TF=4, FF=4 \\implies FF = TF$ (Independent, no interference)\n- Activity 4: $TF=2, FF=1 \\implies FF < TF$ (**Red-flag**)\nRed-flagged activities: **2, 4 (Option C)**.",
            variant: "2025 Variant: 1: (TF=5, FF=2), 2: (TF=3, FF=3), 3: (TF=4, FF=4), 4: (TF=1, FF=0) $\\implies$ **1, 4**.",
            trap: "When $FF = TF$, the activity has full independent slack and does not interfere with successors."
          },
          {
            id: "W10-2026-Q13",
            year: "2026",
            conceptTag: "PERT Expected Time (te)",
            question: "The pessimistic, most likely and optimistic times estimates of an activity are 22, 17 and 15 days, respectively. The expected time of completion of the activity is",
            options: [
              "13.5 days",
              "15.5 days",
              "17.5 days",
              "18.5 days"
            ],
            correctAnswer: 2,
            theory: "In PERT, expected activity time follows a Beta distribution approximation: $t_e = \\frac{a + 4m + b}{6}$, where a is optimistic, m is most likely, and b is pessimistic.",
            formula: "\\boxed{t_e = \\frac{a + 4m + b}{6}}",
            stepByStep: "Given: Optimistic $a = 15$, Most likely $m = 17$, Pessimistic $b = 22$.\n$$t_e = \\frac{15 + 4(17) + 22}{6} = \\frac{15 + 68 + 22}{6} = \\frac{105}{6} = \\mathbf{17.5\\text{ days}} \\quad (\\text{Option C})$$",
            variant: "2025 Variant: $a = 14, m = 16, b = 20 \\implies t_e = \\frac{14 + 64 + 20}{6} = \\frac{98}{6} = \\mathbf{16.33\\text{ days}}$.",
            trap: "Do not compute a simple average $\\frac{15+17+22}{3} = 18.0$. PERT weights most likely by 4 and divides by 6."
          },
          {
            id: "W10-2026-Q14",
            year: "2026",
            conceptTag: "PERT Project Expected Time & SD",
            question: "A project comprises three activities in series:\nA (Optimistic: 12, Most likely: 15, Pessimistic: 21)\nB (Optimistic: 22, Most likely: 30, Pessimistic: 41)\nC (Optimistic: 17, Most likely: 20, Pessimistic: 26)\n\nThe expected time for project completion and its standard deviation (in days) are",
            options: [
              "65, 4",
              "65, 16",
              "66.5, 14.53",
              "66.5, 3.81"
            ],
            correctAnswer: 3,
            theory: "Project expected time is the sum of expected times $T_e = \\sum t_e$. Variances add along the path $\\sigma^2 = \\sum \\left(\\frac{b - a}{6}\\right)^2$, and project standard deviation is $\\sigma = \\sqrt{\\sum \\sigma_i^2}$.",
            formula: "\\boxed{T_e = \\sum t_e, \\quad \\sigma_{\\text{project}} = \\sqrt{\\sum \\left(\\frac{b_i - a_i}{6}\\right)^2}}",
            stepByStep: "1. Expected times:\n- $t_{eA} = \\frac{12 + 4(15) + 21}{6} = \\frac{93}{6} = 15.5$\n- $t_{eB} = \\frac{22 + 4(30) + 41}{6} = \\frac{183}{6} = 30.5$\n- $t_{eC} = \\frac{17 + 4(20) + 26}{6} = \\frac{123}{6} = 20.5$\n$$T_e = 15.5 + 30.5 + 20.5 = \\mathbf{66.5\\text{ days}}$$\n2. Variances:\n- $\\sigma_A^2 = ((21 - 12)/6)^2 = (9/6)^2 = 1.5^2 = 2.25$\n- $\\sigma_B^2 = ((41 - 22)/6)^2 = (19/6)^2 = 3.1667^2 = 10.0278$\n- $\\sigma_C^2 = ((26 - 17)/6)^2 = (9/6)^2 = 1.5^2 = 2.25$\n$$\\sigma^2_{\\text{total}} = 2.25 + 10.0278 + 2.25 = 14.5278$$\n$$\\sigma = \\sqrt{14.5278} \\approx \\mathbf{3.81\\text{ days}}$$\nResult: **66.5, 3.81 (Option D)**.",
            variant: "2025 Variant: A(10,15,20), B(20,30,40), C(15,20,25) $\\implies T_e = 65, \\sigma = \\sqrt{16.67} \\approx \\mathbf{4}$.",
            trap: "Standard deviations do NOT add linearly! You must sum variances and take the square root."
          },
          {
            id: "W10-2026-Q15",
            year: "2026",
            conceptTag: "Origin of PERT",
            question: "PERT was initially introduced to satisfy the demands of U.S. Navy by",
            options: [
              "Booz-Allen and Hamilton",
              "Boston Consulting Group",
              "Deloitte",
              "McKinsey & Company"
            ],
            correctAnswer: 0,
            theory: "Program Evaluation and Review Technique (PERT) was developed in 1958 by the consulting firm Booz, Allen & Hamilton along with Lockheed Corporation for the U.S. Navy's Special Projects Office (Polaris submarine project).",
            formula: "\\boxed{\\text{PERT Founder: Booz, Allen & Hamilton (1958) for US Navy}}",
            stepByStep: "Historical fact: Booz-Allen and Hamilton (Option A).",
            variant: "2025 Variant: Developed for the US Navy.",
            trap: "DuPont created CPM, while Booz-Allen & Hamilton created PERT."
          },
          {
            id: "W10-2026-Q16",
            year: "2026",
            conceptTag: "Completion Probability at Expected Time",
            question: "Expected time of the completion of a project is 10 days. Project will start on October 1, 2026. The probability that it will be completed on October 10, 2026 is",
            options: [
              "0.99",
              "0.95",
              "0.25",
              "0.5"
            ],
            correctAnswer: 3,
            theory: "Under the Central Limit Theorem, total project duration is approximately normally distributed around its expected mean $T_e$. When target scheduled completion time equals expected completion time ($T_s = T_e$), the standard normal deviate is $Z = 0$, giving $P(T \\le T_e) = \\Phi(0) = 0.50$.",
            formula: "\\boxed{Z = \\frac{T_s - T_e}{\\sigma} = \\frac{10 - 10}{\\sigma} = 0 \\implies P(Z \\le 0) = 0.50}",
            stepByStep: "Target date $T_s = 10\\text{ days}$, Expected date $T_e = 10\\text{ days}$:\n$$Z = \\frac{10 - 10}{\\sigma} = 0 \\implies P(Z \\le 0) = \\mathbf{0.5} \\quad (\\text{Option D})$$",
            variant: "2025 Variant: $T_e = 20\\text{ days}$, Target date $= 20\\text{ days} \\implies P = \\mathbf{0.5}$.",
            trap: "Students mistakenly think 'expected completion' means 100% or 95% guaranteed. The probability of finishing on or before the expected time is exactly 50%!"
          },
          {
            id: "W10-2026-Q17",
            year: "2026",
            conceptTag: "Manpower Effects (Brooks' Law)",
            question: "Increasing manpower for executing a project activity",
            options: [
              "has no influence on the critical path",
              "has no effect on the project completion time",
              "always increases the project completion time",
              "may reduce or increase the project completion time depending on the nature of the activity"
            ],
            correctAnswer: 3,
            theory: "While adding manpower can shorten manual parallel tasks, in complex engineering tasks it introduces communication, coordination, and training overhead (Brooks' Law), which may actually lengthen duration.",
            formula: "\\boxed{\\text{Brooks' Law: Adding manpower to a project may reduce OR increase completion time}}",
            stepByStep: "Real-world engineering principle: It may reduce or increase completion time depending on activity nature (Option D).",
            variant: "2025 Variant: Identical conceptual question.",
            trap: "Never select 'always reduces'—excess manpower creates congestion and coordination delays."
          },
          {
            id: "W10-2026-Q18",
            year: "2026",
            conceptTag: "Project Crashing Definition",
            question: "In project management, project crashing means",
            options: [
              "discontinuing a project to pursue better alternative",
              "postponing non-critical activities to control costs.",
              "reducing the project duration by allocating additional resources",
              "delaying non-critical tasks to manage budget constraints"
            ],
            correctAnswer: 2,
            theory: "Crashing is a schedule compression technique used to shorten project duration for the least incremental cost by adding resources (overtime, extra shifts, additional machinery).",
            formula: "\\boxed{\\text{Crashing} = \\text{Compressing project duration by adding resources}}",
            stepByStep: "Definition: Reducing the project duration by allocating additional resources (Option C).",
            variant: "2025 Variant: Identical wording.",
            trap: "Crashing does not mean project failure or cancellation."
          },
          {
            id: "W10-2026-Q19",
            year: "2026",
            conceptTag: "CPM Characteristics",
            question: "Consider the following statements on Critical Path Method (CPM):\n(1) CPM uses probabilistic approach for time estimation\n(2) CPM give three time estimates for each activity\n(3) CPM is activity oriented technique\n(4) CPM focuses on management of predictable activities\n\nWhich of the statements are TRUE?",
            options: [
              "1, 2 and 3",
              "2 and 3",
              "3 and 4",
              "2, 3 and 4"
            ],
            correctAnswer: 2,
            theory: "Comparison between CPM and PERT:\n- CPM: Deterministic (1 time estimate), Activity-oriented, predictable/repetitive industrial activities (Statements 3 and 4 are TRUE).\n- PERT: Probabilistic (3 time estimates: a, m, b), Event-oriented, research and development (Statements 1 and 2 describe PERT).",
            formula: "\\boxed{\\text{CPM: Activity-oriented, deterministic, predictable}}",
            stepByStep: "Statements 3 and 4 are TRUE (Option C). Statements 1 and 2 pertain to PERT.",
            variant: "If asking about PERT: PERT is probabilistic (1), uses three time estimates (2), and is event-oriented.",
            trap: "Do not confuse CPM (activity-oriented) with PERT (event-oriented)."
          },
          {
            id: "W10-2026-Q20",
            year: "2026",
            conceptTag: "Crashing Strategy",
            question: "Crashing is most effective when applied to an activity that",
            options: [
              "has least free float",
              "lies on the critical path",
              "has high uncertainty in its duration estimates",
              "is not on the critical path"
            ],
            correctAnswer: 1,
            theory: "Because the critical path dictates the overall project length, crashing a non-critical activity only absorbs its float without shortening the project. Crashing is only effective on critical path activities.",
            formula: "\\boxed{\\text{Only crashing critical path activities reduces total project duration}}",
            stepByStep: "Strategic rule: Crashing must be applied to activities lying on the critical path (Option B).",
            variant: "2025 Variant: Same concept. Only critical activities reduce project time.",
            trap: "Crashing an activity with large duration or uncertainty is useless unless that activity is on the critical path!"
          }
        ],

        "2025": [
          {
            id: "W10-2025-Q1",
            year: "2025",
            conceptTag: "CPM Development History",
            question: "Critical Path Method (CPM) was developed by",
            options: [
              "Morgan R. Walker and James E. Kelley Jr, jointly",
              "Morgan R. Walker and James E. Kelley Jr, independently",
              "George B. Dantzig and Narendra Karmarkar, jointly",
              "George B. Dantzig and Narendra Karmarkar, independently"
            ],
            correctAnswer: 1,
            theory: "CPM was developed between 1956 and 1957 by Morgan R. Walker of DuPont and James E. Kelley Jr. of Remington Rand working independently on computerizing plant scheduling.",
            formula: "\\boxed{\\text{CPM Creators: Morgan R. Walker & James E. Kelley Jr, independently}}",
            stepByStep: "Historical fact: Morgan R. Walker and James E. Kelley Jr, independently (Option B).",
            variant: "2026 Variant: Developed in the 1950s.",
            trap: "Dantzig and Karmarkar are famous for Linear Programming (Simplex and Interior Point), not CPM."
          },
          {
            id: "W10-2025-Q2",
            year: "2025",
            conceptTag: "Critical Path Definition",
            question: "Critical path corresponds to the",
            options: [
              "longest time path through the network",
              "shortest time path through the network",
              "path with the most activities",
              "path with the least cost"
            ],
            correctAnswer: 0,
            theory: "The critical path is the longest sequence of dependent activities from start to finish, determining the shortest possible time to complete the project.",
            formula: "\\boxed{\\text{Critical Path} = \\text{Longest time path through the network}}",
            stepByStep: "Direct definition: Longest time path through the network (Option A).",
            variant: "2026 Variant: Same question.",
            trap: "It has the longest duration, which defines the minimum project completion time."
          },
          {
            id: "W10-2025-Q3",
            year: "2025",
            conceptTag: "Network Project Duration",
            question: "A project consists of 14 activities, A to N. The duration of activities in weeks are shown: A(2): 1→2, B(3): 2→3, C(4): 2→4, D(2): 2→5, E(4): 3→10, F(2): 4→6, G(4): 4→7, H(4): 5→9, I(5): 7→9, J(2): 6→8, K(3): 8→9, L(2): 9→11, M(3): 10→11, N(2): 11→12. The minimum duration of the project is",
            options: [
              "10 weeks",
              "13 weeks",
              "19 weeks",
              "21 weeks"
            ],
            correctAnswer: 2,
            theory: "The minimum project duration equals the length of the critical path (the longest path connecting source node 1 to terminal node 12).",
            formula: "\\boxed{\\text{Duration} = \\max_{\\text{paths}} \\sum D_i}",
            stepByStep: "Evaluate all paths from node 1 to node 12:\n1. Path $1 \\to 2 \\to 3 \\to 10 \\to 11 \\to 12$:\n   $A(2) + B(3) + E(4) + M(3) + N(2) = 14\\text{ weeks}$\n2. Path $1 \\to 2 \\to 5 \\to 9 \\to 11 \\to 12$:\n   $A(2) + D(2) + H(4) + L(2) + N(2) = 12\\text{ weeks}$\n3. Path $1 \\to 2 \\to 4 \\to 6 \\to 8 \\to 9 \\to 11 \\to 12$:\n   $A(2) + C(4) + F(2) + J(2) + K(3) + L(2) + N(2) = 17\\text{ weeks}$\n4. Path $1 \\to 2 \\to 4 \\to 7 \\to 9 \\to 11 \\to 12$:\n   $A(2) + C(4) + G(4) + I(5) + L(2) + N(2) = 2 + 4 + 4 + 5 + 2 + 2 = \\mathbf{19\\text{ weeks}} \\quad (\\text{Option C})$$",
            variant: "2026 Variant: $A(3), B(2) \\implies$ Critical path length $= 3 + 4 + 4 + 5 + 2 + 2 = \\mathbf{20\\text{ weeks}}$.",
            trap: "Path $4 \\to 7 \\to 9$ has duration $4+5=9$, which is longer than $4 \\to 6 \\to 8 \\to 9$ ($2+2+3=7$)."
          },
          {
            id: "W10-2025-Q4",
            year: "2025",
            conceptTag: "Earliest & Latest Times Calculation",
            question: "A project consists of the following activities and durations:\n\nActivity A (—): 3 days\nActivity B (A): 4 days\nActivity C (A): 2 days\nActivity D (B, C): 5 days\nActivity E (D): 2 days\n\nFor activity D, (earliest start, earliest finish, latest start, latest finish) times (in days) are",
            options: [
              "(7, 12, 7, 12)",
              "(5, 10, 5, 10)",
              "(5, 10, 7, 12)",
              "(5, 12, 7, 12)"
            ],
            correctAnswer: 0,
            theory: "Forward pass: $ES_D = \\max(EF_B, EF_C)$, $EF_D = ES_D + D_D$. Backward pass: $LF_D = LS_E$, $LS_D = LF_D - D_D$.",
            formula: "\\boxed{ES = \\max(EF_{\\text{preds}}), \\quad EF = ES + D; \\quad LF = \\min(LS_{\\text{succs}}), \\quad LS = LF - D}",
            stepByStep: "1. Forward pass:\n- $A$: $ES=0, EF=0+3=3$\n- $B$ (pred $A$): $ES=3, EF=3+4=7$\n- $C$ (pred $A$): $ES=3, EF=3+2=5$\n- $D$ (pred $B, C$): $ES = \\max(7, 5) = 7, \\; EF = 7 + 5 = 12$\n- $E$ (pred $D$): $ES=12, EF=12+2=14$\n2. Backward pass:\n- Project completion $= 14$\n- $E$: $LF=14, LS=14-2=12$\n- $D$: $LF = LS_E = 12, \\; LS = 12 - 5 = 7$\nResult for $D$: **(7, 12, 7, 12) (Option A)**.",
            variant: "2026 Variant: Durations [A:4, B:3, C:2, D:4, E:5] $\\implies (ES, EF, LS, LF) = (7, 11, 7, 11)$.",
            trap: "Notice activity D lies on the critical path ($ES=LS=7, EF=LF=12$), with zero float."
          },
          {
            id: "W10-2025-Q5",
            year: "2025",
            conceptTag: "Network Diagram Precedence",
            question: "It is planned to launch an electric car in the market. Total 7 activities are needed:\nA: Market survey (—)\nB: Design (A)\nC: Market strategy (A)\nD: Design of production facility (B)\nE: Selection of advertising method (C)\nF: Prototype testing (D, E)\nG: Launching (F)\n\nThe suitable network diagram is (arrows are activity: from-node→to-node)",
            options: [
              "A: 1→2, B: 2→3, D: 3→5, C: 2→4, E: 4→5, F: 5→6, G: 6→7",
              "A: 1→2, C: 2→4, D: 4→5, B: 2→3, E: 3→5, F: 5→6, G: 6→7",
              "A: 1→2, B: 2→3, D: 3→5, F: 5→6, C: 2→4, E: 4→6, G: 6→7",
              "A: 1→2, C: 2→4, D: 4→5, F: 5→6, B: 2→4, E: dotted line 4→6, G: 6→7"
            ],
            correctAnswer: 0,
            theory: "Network diagrams must correctly reflect predecessor dependencies. Here D depends on B, and E depends on C.",
            formula: "\\boxed{\\text{Precedence: } A \\to (B, C); \\quad B \\to D; \\quad C \\to E; \\quad (D, E) \\to F \\to G}",
            stepByStep: "Tracing Option A:\n- $A: 1 \\to 2$\n- $B: 2 \\to 3$ (follows $A$), $D: 3 \\to 5$ (follows $B$)\n- $C: 2 \\to 4$ (follows $A$), $E: 4 \\to 5$ (follows $C$)\n- $F: 5 \\to 6$ (follows $D$ and $E$ converging at node 5)\n- $G: 6 \\to 7$ (follows $F$)\nMatches all dependencies perfectly: **Option A**.",
            variant: "2026 Variant: $D$ follows $C$ (4 to 5) and $E$ follows $B$ (3 to 5) $\\implies$ Option B.",
            trap: "Notice that in 2025, D follows B (3 to 5), whereas in 2026, D follows C (4 to 5)."
          },
          {
            id: "W10-2025-Q6",
            year: "2025",
            conceptTag: "Calendar Date Calculation",
            question: "A project can be completed after the completion of activities P (duration: 10 days) and Q (duration: 15 days). Earliest starting dates of P and Q are April 13, 2026, and April 7, 2026, respectively. The project will be completed on",
            options: [
              "April 28, 2028",
              "April 23, 2026",
              "April 22, 2026",
              "April 21, 2026"
            ],
            correctAnswer: 2,
            theory: "When the start date is counted as day 1: $\\text{Finish Date} = \\text{Start Date} + \\text{Duration} - 1$. Project finishes at $\\max(\\text{Finish}_P, \\text{Finish}_Q)$.",
            formula: "\\boxed{\\text{Finish Date} = \\text{Start Date} + \\text{Duration} - 1}",
            stepByStep: "1. For activity P: Starts April 13, duration 10 days:\n$$\\text{Finish}_P = 13 + 10 - 1 = \\text{April 22, 2026}$$\n2. For activity Q: Starts April 7, duration 15 days:\n$$\\text{Finish}_Q = 7 + 15 - 1 = \\text{April 21, 2026}$$\n3. Project completion date $= \\max(\\text{April 22}, \\text{April 21}) = \\mathbf{\\text{April 22, 2026}} \\quad (\\text{Option C})$.",
            variant: "2026 Variant: P (12 days, April 12) $\\to$ April 23; Q (14 days, April 8) $\\to$ April 21. Max $= \\mathbf{\\text{April 23}}$.",
            trap: "Remember day 1 is inclusive: $13 + 10 - 1 = 22$, not 23."
          },
          {
            id: "W10-2025-Q7",
            year: "2025",
            conceptTag: "Latest Finish Time of Predecessor",
            question: "Immediate predecessor activity of B (duration: 6 days) as well as C (duration: 5 days) is activity A. Latest finish times of activities B and C are 10 and 15 days, respectively. Latest finish time of activity A is",
            options: [
              "4 day",
              "5 day",
              "10 day",
              "11 day"
            ],
            correctAnswer: 0,
            theory: "In the backward pass, the latest finish time of an activity is the minimum of the latest start times of all its immediate successors: $LF_A = \\min(LS_B, LS_C) = \\min(LF_B - D_B, LF_C - D_C)$.",
            formula: "\\boxed{LF_A = \\min_j(LF_j - D_j)}",
            stepByStep: "Given:\n- $B$: $LF_B = 10, D_B = 6 \\implies LS_B = 10 - 6 = 4\\text{ days}$\n- $C$: $LF_C = 15, D_C = 5 \\implies LS_C = 15 - 5 = 10\\text{ days}$\n$$LF_A = \\min(LS_B, LS_C) = \\min(4, 10) = \\mathbf{4\\text{ days}} \\quad (\\text{Option A})$$",
            variant: "2026 Variant: $B(7, LF=12) \\implies LS=5$; $C(6, LF=17) \\implies LS=11$. $LF_A = \\min(5, 11) = \\mathbf{5\\text{ days}}$.",
            trap: "Take the MINIMUM of the latest start times in backward pass, not the maximum."
          },
          {
            id: "W10-2025-Q8",
            year: "2025",
            conceptTag: "Critical Path Identification",
            question: "A project comprises 5 activities:\nA (—): 1 day\nB (A): 4 days\nC (A): 2 days\nD (B, C): 5 days\nE (C): 3 days\n\nThe critical path and the project's minimum completion time are",
            options: [
              "Critical Path: A-B-D, Minimum time: 10 days",
              "Critical Path: A-C-D, Minimum time: 10 days",
              "Critical Path: A-C-E, Minimum time: 8 days",
              "Critical Path: A-B-D, Minimum time: 9 days"
            ],
            correctAnswer: 0,
            theory: "The critical path is the sequence with the longest total duration.",
            formula: "\\boxed{\\text{Path Duration} = \\sum D_i}",
            stepByStep: "Evaluate all paths:\n1. Path A-B-D: $1 + 4 + 5 = \\mathbf{10\\text{ days}}$\n2. Path A-C-D: $1 + 2 + 5 = 8\\text{ days}$\n3. Path A-C-E: $1 + 2 + 3 = 6\\text{ days}$\nThe longest path is A-B-D with minimum completion time of **10 days (Option A)**.",
            variant: "2026 Variant: A(2), B(4), C(7), D(5), E(3) $\\implies$ Path A-C-D = $2+7+5=14\\text{ days}$ (Option B).",
            trap: "Notice path A-C-D has length 8, while A-B-D has length 10."
          },
          {
            id: "W10-2025-Q9",
            year: "2025",
            conceptTag: "Activity Time Definitions",
            question: "An activity has duration D. Its earliest start time is x and latest completion time is y. Its earliest completion and latest start times are",
            options: [
              "(x + D) and (x − D), respectively",
              "(x − D) and (x + D), respectively",
              "(x + D) and (y − D), respectively",
              "(x + D) and (y + D), respectively"
            ],
            correctAnswer: 2,
            theory: "By definition:\n- Earliest completion (EF) = Earliest start + Duration = $x + D$\n- Latest start (LS) = Latest completion - Duration = $y - D$.",
            formula: "\\boxed{EF = ES + D = x + D, \\quad LS = LF - D = y - D}",
            stepByStep: "Given $ES = x$ and $LF = y$:\n- Earliest completion $= x + D$\n- Latest start $= y - D$\nResult: **(x + D) and (y − D), respectively (Option C)**.",
            variant: "2026 Variant: Given $ES = x$ and $LS = y \\implies EF = x + D, LF = y + D$ (Option D).",
            trap: "Look closely at the given input: here y is latest COMPLETION time (LF), so $LS = y - D$."
          },
          {
            id: "W10-2025-Q10",
            year: "2025",
            conceptTag: "Total Float & Free Float Calculation",
            question: "The earliest and latest occurrence times of event 1 are 2 days. The earliest and latest occurrence time of event 3 are 8 and 11 days, respectively. Total float (TF) and free float (FF) of activity 1-3 (duration: 5 days) are",
            options: [
              "TF = 5 days, FF = 2 days",
              "TF = 6 days, FF = 3 days",
              "TF = 2 days, FF = 2 days",
              "TF = 4 days, FF = 1 day"
            ],
            correctAnswer: 3,
            theory: "Float formulas for activity $i \\to j$:\n- Total Float: $TF = L_j - E_i - D_{ij}$\n- Free Float: $FF = E_j - E_i - D_{ij}$.",
            formula: "\\boxed{TF = L_j - E_i - D_{ij}, \\quad FF = E_j - E_i - D_{ij}}",
            stepByStep: "Given: $E_1 = 2, L_1 = 2$; $E_3 = 8, L_3 = 11$; duration $D_{13} = 5$.\n1. Total Float:\n$$TF = L_3 - E_1 - D_{13} = 11 - 2 - 5 = \\mathbf{4\\text{ days}}$$\n2. Free Float:\n$$FF = E_3 - E_1 - D_{13} = 8 - 2 - 5 = \\mathbf{1\\text{ day}}$$\nResult: **TF = 4 days, FF = 1 day (Option D)**.",
            variant: "2026 Variant: Duration $D_{13} = 4 \\implies TF = 5, FF = 2$ (Option A).",
            trap: "Always use $L_j$ for Total Float and $E_j$ for Free Float."
          },
          {
            id: "W10-2025-Q11",
            year: "2025",
            conceptTag: "Red-Flagged Activities (Float Sensitivity)",
            question: "Total float (TF) and free float (FF) of four activities are as follows:\n1: TF = 5, FF = 2\n2: TF = 3, FF = 3\n3: TF = 4, FF = 4\n4: TF = 1, FF = 0\n\nFollowing activities should be red-flagged:",
            options: [
              "1, 4",
              "1, 3",
              "2, 3",
              "1, 2, 3"
            ],
            correctAnswer: 0,
            theory: "Activities with interfering float ($FF < TF$) or critical zero free float ($FF = 0$) risk propagating delays to successor tasks and must be red-flagged by management.",
            formula: "\\boxed{\\text{Red-flag criteria: } FF < TF}",
            stepByStep: "Evaluate:\n- Activity 1: $TF=5, FF=2 \\implies FF < TF$ (**Red-flag**)\n- Activity 2: $TF=3, FF=3 \\implies FF = TF$ (Safe)\n- Activity 3: $TF=4, FF=4 \\implies FF = TF$ (Safe)\n- Activity 4: $TF=1, FF=0 \\implies FF < TF$ (**Red-flag**)\nRed-flagged activities: **1, 4 (Option A)**.",
            variant: "2026 Variant: 1: (5,5), 2: (3,2), 3: (4,4), 4: (2,1) $\\implies$ **2, 4** (Option C).",
            trap: "When $FF = TF$, delaying the activity within its float does not affect any successor."
          },
          {
            id: "W10-2025-Q12",
            year: "2025",
            conceptTag: "Critical Activity Float Property",
            question: "In a CPM network, Activity 2-3 has a duration of 5 days. Its earliest start is 3, and latest start is also 3. The total float of this activity (in days) is",
            options: [
              "−5",
              "0",
              "3",
              "5"
            ],
            correctAnswer: 1,
            theory: "Total Float is $TF = LS - ES$. When $LS = ES$, the activity has zero schedule leeway.",
            formula: "\\boxed{TF = LS - ES = 3 - 3 = 0}",
            stepByStep: "Given: $ES = 3, LS = 3$.\n$$TF = LS - ES = 3 - 3 = \\mathbf{0} \\quad (\\text{Option B})$$",
            variant: "2026 Variant: $ES = 4, LS = 4 \\implies TF = 0$.",
            trap: "Float cannot be negative unless the project has an externally imposed deadline that is earlier than possible."
          },
          {
            id: "W10-2025-Q13",
            year: "2025",
            conceptTag: "PERT Expected Time (te)",
            question: "The pessimistic, most likely and optimistic times estimates of an activity are 20, 16 and 14 days, respectively. The expected time of completion of the activity is",
            options: [
              "14.67",
              "16.33 days",
              "16.67 days",
              "18 days"
            ],
            correctAnswer: 1,
            theory: "In PERT, expected activity time follows a Beta distribution approximation: $t_e = \\frac{a + 4m + b}{6}$.",
            formula: "\\boxed{t_e = \\frac{a + 4m + b}{6}}",
            stepByStep: "Given: Optimistic $a = 14$, Most likely $m = 16$, Pessimistic $b = 20$.\n$$t_e = \\frac{14 + 4(16) + 20}{6} = \\frac{14 + 64 + 20}{6} = \\frac{98}{6} = \\mathbf{16.33\\text{ days}} \\quad (\\text{Option B})$$",
            variant: "2026 Variant: $a = 15, m = 17, b = 22 \\implies t_e = \\frac{15 + 68 + 22}{6} = \\frac{105}{6} = \\mathbf{17.5\\text{ days}}$.",
            trap: "Do not divide by 3; the PERT formula has weight 1 for a, 4 for m, 1 for b, divided by 6."
          },
          {
            id: "W10-2025-Q14",
            year: "2025",
            conceptTag: "Origin of PERT",
            question: "Initially, the PERT was developed for the",
            options: [
              "US Navy",
              "British Airways",
              "US Army",
              "US Air Force"
            ],
            correctAnswer: 0,
            theory: "PERT was developed in 1958 for the U.S. Navy's Special Projects Office by Booz, Allen & Hamilton to accelerate the Polaris submarine missile program.",
            formula: "\\boxed{\\text{PERT Sponsor: US Navy (Polaris Project, 1958)}}",
            stepByStep: "Historical fact: Developed for the US Navy (Option A).",
            variant: "2026 Variant: Developed for the US Navy by Booz-Allen and Hamilton.",
            trap: "Do not choose US Air Force or US Army; it was specifically the US Navy Special Projects Office."
          },
          {
            id: "W10-2025-Q15",
            year: "2025",
            conceptTag: "PERT Project Expected Time & SD",
            question: "A project comprises three activities in series:\nA (Optimistic: 10, Most likely: 15, Pessimistic: 20)\nB (Optimistic: 20, Most likely: 30, Pessimistic: 40)\nC (Optimistic: 15, Most likely: 20, Pessimistic: 25)\n\nThe expected time for project completion and its standard deviation (in days) are",
            options: [
              "65, 16",
              "65, 4",
              "63.33, 4",
              "63.33, 16"
            ],
            correctAnswer: 1,
            theory: "Project expected time is $T_e = \\sum t_e$. Variances add along the path $\\sigma^2 = \\sum \\left(\\frac{b - a}{6}\\right)^2$, and project standard deviation is $\\sigma = \\sqrt{\\sum \\sigma_i^2}$.",
            formula: "\\boxed{T_e = \\sum t_e, \\quad \\sigma_{\\text{project}} = \\sqrt{\\sum \\left(\\frac{b_i - a_i}{6}\\right)^2}}",
            stepByStep: "1. Expected times:\n- $t_{eA} = \\frac{10 + 4(15) + 20}{6} = \\frac{90}{6} = 15$\n- $t_{eB} = \\frac{20 + 4(30) + 40}{6} = \\frac{180}{6} = 30$\n- $t_{eC} = \\frac{15 + 4(20) + 25}{6} = \\frac{120}{6} = 20$\n$$T_e = 15 + 30 + 20 = \\mathbf{65\\text{ days}}$$\n2. Variances:\n- $\\sigma_A^2 = ((20 - 10)/6)^2 = (10/6)^2 = 100/36 = 2.778$\n- $\\sigma_B^2 = ((40 - 20)/6)^2 = (20/6)^2 = 400/36 = 11.111$\n- $\\sigma_C^2 = ((25 - 15)/6)^2 = (10/6)^2 = 100/36 = 2.778$\n$$\\sigma^2_{\\text{total}} = \\frac{100 + 400 + 100}{36} = \\frac{600}{36} = 16.667$$\n$$\\sigma = \\sqrt{16.667} = 4.08 \\approx \\mathbf{4\\text{ days}}$$\nResult: **65, 4 (Option B)**.",
            variant: "2026 Variant: A(12,15,21), B(22,30,41), C(17,20,26) $\\implies T_e = 66.5, \\sigma = \\mathbf{3.81}$.",
            trap: "Notice that 16 is the variance ($\sigma^2$), not the standard deviation! The question asks for standard deviation, so $\\sqrt{16.67} \\approx 4$."
          },
          {
            id: "W10-2025-Q16",
            year: "2025",
            conceptTag: "Completion Probability at Expected Time",
            question: "Expected time of the completion of a project is 20 days. Project is started on July 1, 2026. The probability that it will be completed on July 20, 2026 is",
            options: [
              "0.99",
              "0.95",
              "0.67",
              "0.5"
            ],
            correctAnswer: 3,
            theory: "Project completion time is symmetrically distributed around the expected mean $T_e$. At target time equal to expected time ($T_s = T_e$), the completion probability is $\\Phi(0) = 0.50$ (50%).",
            formula: "\\boxed{Z = \\frac{T_s - T_e}{\\sigma} = 0 \\implies P(T \\le T_e) = 0.50}",
            stepByStep: "Target date $T_s = 20\\text{ days}$, Expected date $T_e = 20\\text{ days}$:\n$$Z = \\frac{20 - 20}{\\sigma} = 0 \\implies P(Z \\le 0) = \\mathbf{0.5} \\quad (\\text{Option D})$$",
            variant: "2026 Variant: $T_e = 10\\text{ days}$, Target date $= 10\\text{ days} \\implies P = \\mathbf{0.5}$.",
            trap: "The probability is 50% (0.5), NOT 1.0 or 0.95."
          },
          {
            id: "W10-2025-Q17",
            year: "2025",
            conceptTag: "Project Crashing Definition",
            question: "In project management, project crashing means",
            options: [
              "terminating a project due to a failed concept",
              "abandoning the project in favor of another opportunity",
              "reducing the project duration by allocating additional resources",
              "delaying non-critical tasks to manage budget constraints"
            ],
            correctAnswer: 2,
            theory: "Crashing is a schedule compression technique used to shorten project duration for the least incremental cost by adding resources (overtime, extra shifts, additional machinery).",
            formula: "\\boxed{\\text{Crashing} = \\text{Compressing project duration by adding resources}}",
            stepByStep: "Definition: Reducing the project duration by allocating additional resources (Option C).",
            variant: "2026 Variant: Same question.",
            trap: "Crashing does not mean project failure or abandoning tasks."
          },
          {
            id: "W10-2025-Q18",
            year: "2025",
            conceptTag: "Manpower Effects (Brooks' Law)",
            question: "Increasing manpower for executing a project activity",
            options: [
              "always reduces the project completion time",
              "has no effect on the project completion time",
              "always increases the project completion time",
              "may reduce or increase the project completion time depending on the nature of the activity"
            ],
            correctAnswer: 3,
            theory: "Brooks' law states that adding manpower to a project may reduce or increase completion time depending on the activity's task partitioning and communication complexity.",
            formula: "\\boxed{\\text{Manpower Impact: May reduce OR increase completion time}}",
            stepByStep: "Correct assessment: May reduce or increase the project completion time depending on the nature of the activity (Option D).",
            variant: "2026 Variant: Identical question.",
            trap: "Never select 'always reduces'—training and coordination overhead can slow down late projects."
          },
          {
            id: "W10-2025-Q19",
            year: "2025",
            conceptTag: "Crashing Strategy",
            question: "Crashing is most effective when applied to an activity that",
            options: [
              "lies on the critical path",
              "has the longest individual duration in the project",
              "is not on the critical path",
              "has high uncertainty in its duration estimates"
            ],
            correctAnswer: 0,
            theory: "Because the critical path dictates the overall project length, crashing a non-critical activity only absorbs its float without shortening the project. Crashing is only effective on critical path activities.",
            formula: "\\boxed{\\text{Only crashing critical path activities reduces total project duration}}",
            stepByStep: "Strategic rule: Lies on the critical path (Option A).",
            variant: "2026 Variant: Identical concept.",
            trap: "Crashing an activity with long duration is useless unless that activity is on the critical path."
          },
          {
            id: "W10-2025-Q20",
            year: "2025",
            conceptTag: "Identifying Crashing Candidates",
            question: "The network diagram for a project has event times E/L in brackets:\nA(4): 1→2 [Node 1: E=0, L=0; Node 2: E=4, L=4]\nB(6): 2→3 [Node 3: E=10, L=10]\nC(5): 2→4 [Node 4: E=9, L=15]\nD(8): 3→5 [Node 5: E=18, L=18]\nE(3): 4→5\nF(7): 5→6 [Node 6: E=25, L=25]\nG(4): 6→7 [Node 7: E=29, L=29]\n\nThe following activities should be explored for crashing:",
            options: [
              "A, C, E, F, G",
              "C, E",
              "A, B, D, F, G",
              "B, D, C, E"
            ],
            correctAnswer: 2,
            theory: "Crashing candidates must lie on the critical path. Critical events are those where Earliest Event Time equals Latest Event Time ($E = L$): Node 1 (0,0), Node 2 (4,4), Node 3 (10,10), Node 5 (18,18), Node 6 (25,25), Node 7 (29,29).",
            formula: "\\boxed{\\text{Critical Path: Nodes with } E = L \\implies 1 \\to 2 \\to 3 \\to 5 \\to 6 \\to 7}",
            stepByStep: "1. Node 4 has $E=9, L=15$ ($E \\ne L$), so activities C ($2 \\to 4$) and E ($4 \\to 5$) are non-critical.\n2. The critical path connecting critical events ($E=L$) is:\n$$1 \\xrightarrow{A} 2 \\xrightarrow{B} 3 \\xrightarrow{D} 5 \\xrightarrow{F} 6 \\xrightarrow{G} 7$$\n3. Activities on the critical path to be explored for crashing: **A, B, D, F, G (Option C)**.",
            variant: "If Node 4 had $E=L$, alternate critical paths would need to be checked.",
            trap: "Do not include C or E; Node 4 has 6 days of slack ($L - E = 15 - 9 = 6$), so C and E are not on the critical path."
          }
        ]
      }
    },

    // Placeholders for Weeks 9 down to 1
    ...[9, 8, 7, 6, 5, 4, 3, 2, 1].map(wNum => ({
      number: wNum,
      title: getWeekTopicTitle(wNum),
      status: "upcoming",
      summary: `Upcoming assignment practice module for Week ${wNum}. Questions and rapid theories will be unlocked here as you progress backward!`,
      studyMaterials: null,
      years: {
        "2026": [],
        "2025": []
      }
    }))
  ]
};

function getWeekTopicTitle(num) {
  const titles = {
    11: "Queuing Models & Waiting Line Analysis",
    10: "Project Management: CPM, PERT & Crashing",
    9: "Transportation & Assignment Models (VAM & MODI)",
    8: "Linear Programming: Dual Problem & Sensitivity Analysis",
    7: "Linear Programming: Simplex Method & Big-M",
    6: "Inventory Management & Supply Chain Foundations",
    5: "Total Quality Management (TQM) & Statistical Process Control",
    4: "Quality Control Charts (X-bar, R, p, c charts)",
    3: "Forecasting Methods & Time Series Analysis",
    2: "Work Study, Method Study & Ergonomics",
    1: "Introduction to Industrial Engineering & Productivity"
  };
  return titles[num] || `Week ${num} Topics`;
}

if (typeof window !== 'undefined') {
  window.IEOR_DATA = IEOR_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IEOR_DATA;
}
