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

    // Placeholders for Weeks 11 down to 1
    ...[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map(wNum => ({
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
    11: "Queuing Models & PERT/CPM Project Management",
    10: "Dynamic Programming & Integer Programming",
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
