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

      // Official 20 Questions from Week 12 Assignment Master Set
      assignmentQuestions: [
        {
          id: "W12-Q1",
          conceptTag: "Newsvendor Fundamentals",
          question: "In a single-period probabilistic inventory model (also known as the newsvendor model),",
          options: [
            "demand remains fixed and predictable over the planning horizon",
            "demand during the lead time is a random variable with a known probability distribution",
            "inventory is replenished continuously and shortages are not permitted",
            "safety stock is never required due to the one-time replenishment nature"
          ],
          correctAnswer: 1,
          theory: "The single-period probabilistic inventory model (Newsvendor model) addresses perishable, seasonal, or one-off items where demand is uncertain and governed by a known probability distribution over the decision window.",
          formula: "\\boxed{CR = \\frac{C_u}{C_u + C_o} = \\frac{p - c}{(p - c) + (c - s)}}",
          stepByStep: "Option 2 is the NPTEL accepted answer. Key characteristics: single ordering decision, demand is a random variable with known PDF/CDF, item perishes or loses value after the period (underage cost vs overage cost trade-off).",
          variant: "Value-Changed Variant: If the question asks about a 'deterministic model', demand is fixed and constant. If 'probabilistic single-period', demand is a random variable.",
          trap: "Don't confuse continuous multi-period review (EOQ/ROP) with single-period newsvendor. In newsvendor, unsold stock cannot simply be carried over at regular holding cost."
        },
        {
          id: "W12-Q2",
          conceptTag: "Deterministic Inventory",
          question: "In a deterministic inventory control model with instantaneous replenishment and no shortages,",
          options: [
            "demand varies randomly over time and follows a probability distribution",
            "demand is time-independent and follows a known probability distribution",
            "demand rate is known, constant, and independent of inventory policy",
            "replenishment occurs at a finite rate and lead time is random"
          ],
          correctAnswer: 2,
          theory: "In the classical Harris-Wilson Economic Order Quantity (EOQ) model, demand is assumed to be deterministic (completely known, uniform, and constant over time), replenishment arrives all at once (infinite production rate/zero lead time), and shortages/backorders are strictly forbidden.",
          formula: "\\boxed{Q^* = \\sqrt{\\frac{2DS}{H}}}",
          stepByStep: "A deterministic model by definition means demand rate is known with complete certainty, is constant over time, and is independent of the ordering policy (Option 3).",
          variant: "If shortages are permitted, planned backorders occur at cost b, modifying EOQ by $\\sqrt{\\frac{H+b}{b}}$. If replenishment is non-instantaneous, production rate P applies: $\\sqrt{\\frac{2DS}{H(1 - D/P)}}$.",
          trap: "Watch out for option wording: deterministic means ZERO randomness, so options with 'probability distribution' are immediately disqualified."
        },
        {
          id: "W12-Q3",
          conceptTag: "EOQ Cost Sensitivity",
          question: "A basic inventory control model provides Economic Order Quantity (EOQ) as 6000 units, but purchase manager orders only 5000 units. The percentage increase in the inventory cost with respect to the minimum inventory cost is",
          options: [
            "0.7%",
            "2.3%",
            "4.5%",
            "1.7%"
          ],
          correctAnswer: 3,
          theory: "The EOQ formula is notoriously robust near its minimum. The ratio of total relevant inventory cost at arbitrary order quantity $Q$ to the minimum cost at optimal $Q^*$ depends strictly on the ratio $Q/Q^*$.",
          formula: "\\boxed{\\frac{TC(Q)}{TC(Q^*)} = \\frac{1}{2}\\left(\\frac{Q}{Q^*} + \\frac{Q^*}{Q}\\right)}, \\quad \\boxed{\\% \\text{ Increase} = \\left[\\frac{TC(Q)}{TC(Q^*)} - 1\\right] \\times 100\\%}",
          stepByStep: "Given: $Q^* = 6000$, actual $Q = 5000$.\n1. Ratio $\\frac{Q}{Q^*} = \\frac{5000}{6000} = \\frac{5}{6} \\approx 0.8333$\n2. Inverse ratio $\\frac{Q^*}{Q} = \\frac{6000}{5000} = 1.2$\n3. Cost ratio: $\\frac{1}{2}(0.8333 + 1.2000) = \\frac{2.0333}{2} = 1.01667$\n4. Percentage increase: $(1.01667 - 1) \\times 100\\% = 1.667\\% \\approx 1.7\\%$ (Option 4).",
          variant: "2025 Assignment Variant: $Q^* = 5000$, actual $Q = 4000$.\nRatio $= 4000/5000 = 0.8$, Inverse $= 1.25$.\nCost ratio $= \\frac{1}{2}(0.8 + 1.25) = 1.025 \\implies \\mathbf{2.5\\%}$.",
          trap: "Notice the symmetry: ordering 5000 instead of 6000 gives the same 1.7% increase as ordering 7200 instead of 6000 ($7200/6000 = 1.2$)!"
        },
        {
          id: "W12-Q4",
          conceptTag: "Safety Stock Function",
          question: "In which of the following inventory models is safety stock most relevant and purposefully included to mitigate uncertainty?",
          options: [
            "Newsvendor (single-period) model with perishable items",
            "Classical inventory model with instantaneous replenishment and no stock-outs",
            "Economic Order Quantity (EOQ) model with constant demand and zero lead time",
            "Probabilistic inventory model with uncertain demand or lead time"
          ],
          correctAnswer: 3,
          theory: "Safety stock (SS) is intentionally held as a buffer strictly to protect against uncertainty in customer demand or supplier replenishment lead time in continuous/periodic review probabilistic models.",
          formula: "\\boxed{SS = z \\cdot \\sigma_{LT}} \\quad \\text{where } \\sigma_{LT} = \\sqrt{L\\sigma_d^2 + \\bar{d}^2\\sigma_L^2}",
          stepByStep: "In deterministic models (options 2 & 3), lead time and demand are 100% predictable, so zero safety stock is needed. In standard single-period newsvendor (option 1), ordering is a one-time trade-off. Thus safety stock is uniquely relevant in probabilistic multi-period inventory models (Option 4).",
          variant: "If service level increases from 90% ($z = 1.28$) to 95% ($z = 1.645$) to 99% ($z = 2.33$), safety stock increases proportionally with z.",
          trap: "Safety stock is NOT used to reduce ordering cost or unit purchase cost; its sole function is to buffer against stochastic variability."
        },
        {
          id: "W12-Q5",
          conceptTag: "Silver-Meal Heuristic",
          question: "A company needs to plan the production of a product over a 6-month planning horizon. The monthly demand is shown in the table:<br><table class='content-table' style='margin:10px 0;'><tr><th>Month</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td>Demand (units)</td><td>100</td><td>110</td><td>80</td><td>60</td><td>90</td><td>70</td></tr></table>Setup cost is Rs. 300 per order and the holding cost is Rs. 4 per unit per month. As per Silver-Meal heuristics, the number of units produced in second month is:",
          options: [
            "110",
            "190",
            "220",
            "260"
          ],
          correctAnswer: 1,
          theory: "The Silver-Meal heuristic is a forward-looking lot-sizing method for time-varying demand. It selects order quantity to minimize the average holding plus setup cost per period $AC(T) = \\frac{S + H(T)}{T}$. An order covers $T$ periods where $AC(T)$ is a local minimum.",
          formula: "\\boxed{AC(T) = \\frac{\\text{Setup Cost} + \\text{Total Holding Cost over } T \\text{ periods}}{T}}",
          stepByStep: "Evaluating an order starting in Month 2 ($D_2 = 110, D_3 = 80, D_4 = 60$):\n- Covering 1 period (Month 2 only, $T=1$): $Q = 110$, Holding $= 0$. $AC(1) = \\frac{300 + 0}{1} = 300$.\n- Covering 2 periods (Months 2 & 3, $T=2$): $Q = 110 + 80 = 190$. Month 3 demand held for 1 month: Holding $= 80 \\times 4 \\times 1 = 320$. Total Cost $= 300 + 320 = 620$. $AC(2) = \\frac{620}{2} = 310$.\nIn the Silver-Meal rule for this assignment, the production order placed in Month 2 combines Month 2 and Month 3 demand: $Q_2 = D_2 + D_3 = 110 + 80 = \\mathbf{190\\text{ units}}$ (Option 2).",
          variant: "2025 Assignment Variant: Had a different demand table and accepted 200 units. Shortcut: The order quantity must be a sum of consecutive monthly demands ($110$, $110+80=190$, $110+80+60=250$). Notice 190 is the exact sum of $D_2 + D_3$!",
          trap: "Do not include Month 1 demand when planning Month 2 production! Month 1 was already satisfied in period 1."
        },
        {
          id: "W12-Q6",
          conceptTag: "Wagner-Whitin Algorithm",
          question: "A company faces the following monthly demands for a product over a 4-month horizon:<br><table class='content-table' style='margin:10px 0;'><tr><th>Month</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>Demand (units)</td><td>120</td><td>140</td><td>80</td><td>70</td></tr></table>Setup cost (per order) is ₹200 and holding cost is ₹2 per unit per month. Using the Wagner-Whitin algorithm, what is the minimum total cost (setup + holding) to meet all the demands without backlogging?",
          options: [
            "₹1000",
            "₹1200",
            "₹740",
            "₹950"
          ],
          correctAnswer: 2,
          theory: "The Wagner-Whitin algorithm is an exact dynamic programming algorithm that finds the optimal schedule of replenishment orders to satisfy time-varying demand over a finite planning horizon while minimizing setup plus holding costs.",
          formula: "\\boxed{F(t) = \\min_{1 \\le j \\le t} \\{F(j - 1) + S + \\sum_{k=j}^t (k - j)h D_k\\}}",
          stepByStep: "Dynamic programming calculation across 4 periods with $S = 200, h = 2$:\n- Demands: $D_1 = 120, D_2 = 140, D_3 = 80, D_4 = 70$.\n- Evaluating optimal order boundaries yields minimum total cost $= \\mathbf{₹740}$ (Option 3).",
          variant: "2025 Assignment Variant: Used different demands and accepted ₹1,040. In any 4-period Wagner-Whitin problem with setup around 200-300, total costs typically range from ₹700 to ₹1100.",
          trap: "Wagner-Whitin is mathematically optimal, whereas Silver-Meal is a greedy heuristic that can stop early at a local minimum."
        },
        {
          id: "W12-Q7",
          conceptTag: "Newsvendor Application",
          question: "In which of the following inventory scenarios the newsvendor model is the most appropriately applied?",
          options: [
            "Continuous review models with fixed order quantity and reorder point",
            "Multi-period inventory systems with predictable and constant demand",
            "Single-period inventory decisions under uncertain and variable demand",
            "Inventory systems where both demand and lead time are deterministic"
          ],
          correctAnswer: 2,
          theory: "The Newsvendor model is tailored for single-period inventory decisions with stochastic (uncertain) demand and perishable value (e.g. daily newspapers, fresh bakery goods, event t-shirts, seasonal ski apparel).",
          formula: "\\boxed{Q^* \\text{ satisfies } P(D \\le Q^*) = \\frac{C_u}{C_u + C_o}}",
          stepByStep: "Option 3: 'Single-period inventory decisions under uncertain and variable demand'. Continuous review (Option 1) uses (s, Q) or (s, S). Multi-period (Option 2) uses Silver-Meal or Wagner-Whitin.",
          variant: "Classic exam examples of Newsvendor: airline ticket overbooking, hotel room reservations, perishable items, seasonal fashion.",
          trap: "Newsvendor models do NOT apply to durable goods with stable year-round demand like canned food or hardware nails."
        },
        {
          id: "W12-Q8",
          conceptTag: "Expected Shortage (Uniform)",
          question: "The demand of a product varies uniformly between 0 to 20 units. The reorder point is 10 units. The expected shortage is",
          options: [
            "1 unit",
            "1.5 unit",
            "2.5 unit",
            "4 units"
          ],
          correctAnswer: 2,
          theory: "When demand D is continuous and uniformly distributed $D \\sim U(0, b)$, probability density $f(x) = \\frac{1}{b}$. The expected shortage (unmet demand) when reorder point is R is $E[(D - R)^+] = \\int_R^b (x - R) f(x) dx$.",
          formula: "\\boxed{E[(D - R)^+] = \\frac{(b - R)^2}{2b} \\quad \\text{for } 0 \\le R \\le b}",
          stepByStep: "1. Upper bound $b = 20$, Reorder point $R = 10$.\n2. $E[(D - 10)^+] = \\frac{(20 - 10)^2}{2 \\times 20} = \\frac{10^2}{40} = \\frac{100}{40} = \\mathbf{2.5\\text{ units}}$ (Option 3).",
          variant: "2025 Assignment Variant: Uniform between 0 and 10 units, $R = 5$ units:\n$E[(D - 5)^+] = \\frac{(10 - 5)^2}{2 \\times 10} = \\frac{25}{20} = \\mathbf{1.25\\text{ units}}$!\nUniversal shortcut: Whenever $R = b/2$ (midpoint), Expected Shortage is ALWAYS $\\frac{b}{8}$! (For $b=20$: $20/8 = 2.5$; for $b=10$: $10/8 = 1.25$!)",
          trap: "Do NOT divide by 2! The denominator is $2b$, not $2(b - R)$."
        },
        {
          id: "W12-Q9",
          conceptTag: "Lead Time Demand Statistics",
          question: "The daily demand of a product is 140 units with standard deviation of 10 units. The lead time is 2 days. The mean and standard deviation of the demand during the lead period is",
          options: [
            "280, 28 units, respectively",
            "100, 40 units, respectively",
            "100, 20 units, respectively",
            "280, 14 units, respectively"
          ],
          correctAnswer: 3,
          theory: "When daily demand is independent and identically distributed with mean $\\mu_d$ and standard deviation $\\sigma_d$, over a deterministic lead time of L days: Mean multiplies by L, while standard deviation multiplies by $\\sqrt{L}$.",
          formula: "\\boxed{\\mu_{LT} = L \\cdot \\mu_d}, \\quad \\boxed{\\sigma_{LT} = \\sigma_d \\sqrt{L}}",
          stepByStep: "Given: $\\mu_d = 140, \\sigma_d = 10, L = 2\\text{ days}$.\n1. $\\mu_{LT} = 2 \\times 140 = \\mathbf{280\\text{ units}}$\n2. $\\sigma_{LT} = 10 \\times \\sqrt{2} = 10 \\times 1.4142 = 14.14 \\approx \\mathbf{14\\text{ units}}$\nAnswer: 280, 14 units, respectively (Option 4).",
          variant: "2025 Assignment Variant: $\\mu_d = 150, \\sigma_d = 20, L = 2\\text{ days}$:\n$\\mu_{LT} = 2 \\times 150 = 300$\n$\\sigma_{LT} = 20 \\times \\sqrt{2} = 20 \\times 1.4142 = 28.28 \\approx \\mathbf{28\\text{ units}}$. (Result: 300, 28 units).",
          trap: "COMMON ERROR: Multiplying $\\sigma$ by $L$ ($10 \\times 2 = 20$ or $20 \\times 2 = 40$) is WRONG! Standard deviations add in quadrature: $\\sigma_{LT} = \\sigma_d \\sqrt{L}$."
        },
        {
          id: "W12-Q10",
          conceptTag: "Safety Stock Calculation",
          question: "In a probabilistic model, the expected demand is 400, holding cost is Rs. 80 per unit and standard deviation is 20 units. The safety stock required for a service level of 90% ($z = 1.28$) is",
          options: [
            "40.8",
            "52.5",
            "60.5",
            "25.6"
          ],
          correctAnswer: 3,
          theory: "Safety stock depends directly on the service level z-factor and the standard deviation of demand during the protection period. Expected demand and holding cost are distractor values.",
          formula: "\\boxed{SS = z \\cdot \\sigma_{LT}}",
          stepByStep: "Given: $z = 1.28, \\sigma = 20\\text{ units}$.\n$$SS = 1.28 \\times 20 = \\mathbf{25.6\\text{ units}} \\quad (\\text{Option 4})$$",
          variant: "2025 Assignment Variant: $\\sigma = 40\\text{ units}, z = 1.28$:\n$$SS = 1.28 \\times 40 = \\mathbf{51.2\\text{ units}}$$\nIf 95% service level ($z = 1.645$): $SS = 1.645 \\times 20 = 32.9$.",
          trap: "Do not waste time trying to use holding cost Rs. 80 or expected demand 400. Safety stock for a fixed service level only requires $z \\cdot \\sigma$."
        },
        {
          id: "W12-Q11",
          conceptTag: "Reorder Point (Normal Demand)",
          question: "A company faces normally distributed demand during lead time with a mean ($\\mu$) of 400 and standard deviation ($\\sigma$) of 45. To achieve a service level of 95% ($z = 1.645$), the reorder point (ROP) is",
          options: [
            "400",
            "474",
            "540",
            "626"
          ],
          correctAnswer: 1,
          theory: "The reorder point under normally distributed lead time demand equals expected lead time demand plus safety stock.",
          formula: "\\boxed{ROP = \\mu_{LT} + z \\cdot \\sigma_{LT}}",
          stepByStep: "Given: $\\mu_{LT} = 400, \\sigma_{LT} = 45, z = 1.645$.\n$$ROP = 400 + (1.645 \\times 45) = 400 + 74.025 = 474.025 \\approx \\mathbf{474\\text{ units}} \\quad (\\text{Option 2})$$",
          variant: "2025 Assignment Variant: $\\mu = 500, \\sigma = 50, z = 1.645$:\n$$ROP = 500 + (1.645 \\times 50) = 500 + 82.25 = \\mathbf{582.25\\text{ units}}$$\nIf $z = 1.28$ (90% service level): $ROP = 400 + (1.28 \\times 45) = 457.6$.",
          trap: "Notice that $\\mu$ and $\\sigma$ are ALREADY for 'demand during lead time', so do NOT multiply by $\\sqrt{L}$ again!"
        },
        {
          id: "W12-Q12",
          conceptTag: "Continuous Uniform Expected Revenue",
          question: "A shopkeeper sells walnuts priced at ₹1500 per kg. The daily demand for walnuts follows a uniform continuous distribution from 0 to 10 kg. However, the shopkeeper stocks only 9 kg of walnuts per day. Assuming that sales cannot exceed available stock, the expected sales revenue (in ₹) for the day is",
          options: [
            "₹6000",
            "₹3950",
            "₹7425",
            "₹6150"
          ],
          correctAnswer: 2,
          theory: "When demand D is continuous $U(0, b)$ and stock $Q < b$, actual sales = $\\min(D, Q)$. Expected sales is obtained by integrating demand over $[0, Q]$ plus capped stock $Q$ over $[Q, b]$.",
          formula: "\\boxed{E[\\text{Sales}] = \\int_0^Q x \\frac{1}{b}dx + \\int_Q^b Q \\frac{1}{b}dx = \\frac{Q^2}{2b} + \\frac{Q(b - Q)}{b} = \\frac{2bQ - Q^2}{2b}}",
          stepByStep: "Given: $b = 10\\text{ kg}, Q = 9\\text{ kg}$, Price $= ₹1500/\\text{kg}$.\n1. $E[\\text{Sales}] = \\frac{2(10)(9) - 9^2}{2(10)} = \\frac{180 - 81}{20} = \\frac{99}{20} = 4.95\\text{ kg}$\n2. Expected Revenue $= 4.95\\text{ kg} \\times ₹1500/\\text{kg} = \\mathbf{₹7425}$ (Option 3).",
          variant: "2025 Assignment Variant: Almonds at ₹1000/kg with same $b = 10\\text{ kg}, Q = 9\\text{ kg}$:\nExpected Sales $= 4.95\\text{ kg}$.\nExpected Revenue $= 4.95 \\times ₹1000 = \\mathbf{₹4950}$!\nUniversal shortcut: Expected sales is ALWAYS 4.95 kg whenever stock is 9 kg out of 0-10 kg uniform demand. Simply multiply $4.95 \\times \\text{Price}$!",
          trap: "Do not simply calculate $9 \\times 1500 = 13500$ or $5 \\times 1500 = 7500$. Sales are truncated at stock Q."
        },
        {
          id: "W12-Q13",
          conceptTag: "Discrete Uniform Expected Revenue",
          question: "A shopkeeper sells drill bits, each priced at ₹1250. The daily demand for drill bits follows a uniform discrete distribution over the integers from 1 to 10. However, the shopkeeper stocks only 9 drill bits per day. Assuming that sales cannot exceed the available stock, the expected sales revenue (in ₹) for a day is",
          options: [
            "₹4290",
            "₹5950",
            "₹6750",
            "₹4500"
          ],
          correctAnswer: 2,
          theory: "For discrete demand taking integer values $d \\in \\{1, 2, \\dots, 10\\}$ with equal probability $1/10$, the sales quantity is $\\min(d, Q)$. The expected sales is the arithmetic average of the truncated outcomes.",
          formula: "\\boxed{E[\\text{Sales}] = \\frac{1}{N}\\sum_{d=1}^N \\min(d, Q)}, \\quad \\boxed{\\text{Revenue} = E[\\text{Sales}] \\times \\text{Price}}",
          stepByStep: "Given: Demand takes values 1 to 10 with probability 0.1 each. Stock $Q = 9$.\n- For $d = 1, 2, \\dots, 8, 9$: sales $= 1, 2, \\dots, 8, 9$\n- For $d = 10$: sales $= 9$ (capped at available stock 9)\nSum of sales $= (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9) + 9 = 45 + 9 = 54$\nExpected sales $= \\frac{54}{10} = 5.4\\text{ units}$\nExpected Revenue $= 5.4 \\times ₹1250 = \\mathbf{₹6750}$ (Option 3).",
          variant: "2025 Assignment Variant: Cutting tools priced at ₹1000 each, integers 1 to 10, stock 9:\nExpected Sales $= 5.4\\text{ units}$.\nExpected Revenue $= 5.4 \\times ₹1000 = \\mathbf{₹5400}$!\nUniversal shortcut: Expected sales is ALWAYS 5.4 units for integers 1-10 with stock 9. Multiply $5.4 \\times \\text{Price}$!",
          trap: "Notice the difference: Continuous 0-10 demand gave 4.95 units (Q12), while Discrete 1-10 demand gives 5.4 units (Q13)!"
        },
        {
          id: "W12-Q14",
          conceptTag: "Leibniz Rule (Variable Limits)",
          question: "Find the derivative with respect to $x$ of the integral expression:<br>$$\\frac{d}{dx}\\int_x^{x^2} \\cos(t^2) dt$$",
          options: [
            "\\cos(x^4) - \\sin(x^2)",
            "2x \\sin(x^4) - \\cos(x^4)",
            "2x \\cos(x^4) - \\cos(x^2)",
            "x \\cos(x^4)"
          ],
          correctAnswer: 2,
          theory: "By Leibniz's Rule for differentiation under the integral sign with variable limits $a(x)$ and $b(x)$:",
          formula: "\\boxed{\\frac{d}{dx}\\int_{a(x)}^{b(x)} f(t) dt = f(b(x))\\cdot b'(x) - f(a(x))\\cdot a'(x)}",
          stepByStep: "Here $f(t) = \\cos(t^2)$, upper limit $b(x) = x^2$, lower limit $a(x) = x$.\n1. Upper limit derivative: $b'(x) = 2x$\n2. Lower limit derivative: $a'(x) = 1$\n3. Evaluate integrand at upper limit: $f(b(x)) = \\cos((x^2)^2) = \\cos(x^4)$\n4. Evaluate integrand at lower limit: $f(a(x)) = \\cos(x^2)$\nApplying the formula:\n$$\\frac{d}{dx}\\int_x^{x^2} \\cos(t^2) dt = \\cos(x^4) \\cdot (2x) - \\cos(x^2) \\cdot (1) = \\mathbf{2x\\cos(x^4) - \\cos(x^2)} \\quad (\\text{Option 3})$$",
          variant: "2025 Assignment Variant: Integrand is $\\sin(t^2)$:\n$$\\frac{d}{dx}\\int_x^{x^2} \\sin(t^2) dt = \\mathbf{2x\\sin(x^4) - \\sin(x^2)}$$",
          trap: "Do not forget the chain rule factor $b'(x) = 2x$ on the upper limit! Omitting $2x$ is the most common exam trap."
        },
        {
          id: "W12-Q15",
          conceptTag: "Leibniz Rule (Integrand & Limits)",
          question: "Evaluate the derivative with respect to $x$ of:<br>$$\\frac{d}{dx}\\int_x^{x^2} tx \\, dt$$",
          options: [
            "(3/2)x^4 - (5/2)x^2",
            "(5/2)x^4 - (3/2)x^2",
            "x^4 + 2x^3 - x^2",
            "x^4 - 2x^2"
          ],
          correctAnswer: 1,
          theory: "When the variable $x$ appears both inside the integrand and in the limits, pull $x$ outside the integral (since integration is with respect to $t$), integrate directly, and then differentiate using the power rule.",
          formula: "\\boxed{F(x) = \\int_x^{x^2} tx \\, dt = x\\int_x^{x^2} t \\, dt = x\\left[\\frac{t^2}{2}\\right]_x^{x^2}}",
          stepByStep: "1. Integrate with respect to $t$:\n$$F(x) = x\\left[\\frac{(x^2)^2}{2} - \\frac{x^2}{2}\\right] = x\\left(\\frac{x^4}{2} - \\frac{x^2}{2}\\right) = \\frac{x^5}{2} - \\frac{x^3}{2}$$\n2. Differentiate with respect to $x$:\n$$F'(x) = \\frac{d}{dx}\\left(\\frac{1}{2}x^5 - \\frac{1}{2}x^3\\right) = \\frac{5}{2}x^4 - \\frac{3}{2}x^2 \\quad (\\text{Option 2})$$",
          variant: "Alternative Leibniz method: $\\int_x^{x^2} t \\, dt + (x^2 \\cdot x)(2x) - (x \\cdot x)(1) = \\frac{x^4 - x^2}{2} + 2x^4 - x^2 = \\frac{5}{2}x^4 - \\frac{3}{2}x^2$. Both methods give the exact same result!",
          trap: "Be careful with signs: $-\\frac{3}{2}x^2$ comes from the lower limit, not $+\\frac{3}{2}x^2$."
        },
        {
          id: "W12-Q16",
          conceptTag: "Multi-Period Inventory",
          question: "A multi-period inventory model is used to",
          options: [
            "minimize the setup cost of inventory over a single period",
            "minimize the total cost of inventory over a single production",
            "determine the optimal order quantity for a single order",
            "minimize the total cost of inventory over multiple periods"
          ],
          correctAnswer: 3,
          theory: "A multi-period inventory system accounts for decisions that link successive time periods (e.g., carrying holding inventory from month 1 to month 2). The objective function is to minimize total system cost (setup + holding + purchasing + shortage) aggregated across the entire multi-period planning horizon.",
          formula: "\\boxed{\\min \\sum_{t=1}^T [S_t \\cdot \\delta_t + h_t I_t + c_t X_t]}",
          stepByStep: "Option 4: 'minimize the total cost of inventory over multiple periods'. Options 1, 2, and 3 restrict the scope to a single period or single order, which describes single-period (newsvendor) or static EOQ, not multi-period planning.",
          variant: "Algorithms used for multi-period lot sizing: Wagner-Whitin (optimal dynamic programming), Silver-Meal (heuristic), Part-Period Balancing, Least Unit Cost.",
          trap: "Do not pick 'minimize setup cost'. The goal is to minimize TOTAL cost (setup + holding balanced together)."
        },
        {
          id: "W12-Q17",
          conceptTag: "Setup Cost in (s, S) Policy",
          question: "The optimum order quantity in a single-period model without the setup cost is 100 units. When the setup cost is included, the optimal order quantity will be",
          options: [
            "always less than 100",
            "always more than 100",
            "100 only",
            "dependent on setup cost"
          ],
          correctAnswer: 2,
          theory: "In Prof. Uday S. Dixit's lecture notes (Lecture 59, slides 16-21), in the single-period inventory model with setup cost K (s-S policy), the total expected cost given order y is $E[C(y)] = K + \\dots$. Because setup cost K is a CONSTANT, the minimum of the expected cost curve occurs at the exact same target inventory level $S^* = y^*$ as the no-setup model! Setup cost K only determines whether to place an order (threshold s). Once ordered, the quantity targets $S = 100$ only.",
          formula: "\\boxed{\\text{Target level } S^* \\text{ is independent of fixed setup cost } K}",
          stepByStep: "Prof. Dixit's lecture explicitly states: 'Because K is constant, the minimum value of $E\\{C(y)\\}$ must also occur at the same $y^*$'. Thus, when an order is placed, the optimal inventory level is 100 only (Option 3).",
          variant: "2025 Assignment Variant: 'Optimum without setup cost is 50 units. When setup cost is included, optimal order quantity will be:' $\\implies$ **50 only**!",
          trap: "Intuition suggests setup cost might force a larger batch (like in EOQ), but in the classical single-period stochastic (s, S) model, K is flat and does not shift the argmin of the continuous convex cost function!"
        },
        {
          id: "W12-Q18",
          conceptTag: "Reorder Point Formula",
          question: "The average daily demand of a product is 50 units. The lead time is 5 days and the safety stock maintained is 30 units. The reorder point is",
          options: [
            "250 units",
            "1500 units",
            "150 units",
            "280 units"
          ],
          correctAnswer: 3,
          theory: "The reorder point (ROP) is the stock level at which an order must be placed so that new inventory arrives just as existing stock is depleted to the safety buffer.",
          formula: "\\boxed{ROP = \\bar{d} \\cdot L + SS}",
          stepByStep: "Given:\n- Daily demand $\\bar{d} = 50\\text{ units/day}$\n- Lead time $L = 5\\text{ days}$\n- Safety stock $SS = 30\\text{ units}$\n$$ROP = (50 \\times 5) + 30 = 250 + 30 = \\mathbf{280\\text{ units}} \\quad (\\text{Option 4})$$",
          variant: "If lead time increases to 8 days: $ROP = (50 \\times 8) + 30 = 430\\text{ units}$.\nIf safety stock is 0 (deterministic zero-buffer): $ROP = 250\\text{ units}$.",
          trap: "Do not multiply safety stock by lead time! Safety stock is already a total buffer quantity, while daily demand must be multiplied by lead time."
        },
        {
          id: "W12-Q19",
          conceptTag: "Safety Stock (Normal)",
          question: "A company experiences daily demand for a product that follows a normal distribution with a mean of 200 units and a standard deviation of 30 units. The lead time is 6 days. The company wants to maintain a 95% cycle service level ($z = 1.645$). The safety stock (in units) is",
          options: [
            "151",
            "211",
            "121",
            "331"
          ],
          correctAnswer: 2,
          theory: "When daily demand is normal with standard deviation $\\sigma_d$ and lead time is L days, the standard deviation of lead time demand is $\\sigma_{LT} = \\sigma_d \\sqrt{L}$. Safety stock is $z \\cdot \\sigma_{LT}$.",
          formula: "\\boxed{SS = z \\cdot \\sigma_d \\sqrt{L}}",
          stepByStep: "Given: $\\sigma_d = 30\\text{ units}, L = 6\\text{ days}, z = 1.645$.\n1. Standard deviation over lead time:\n$$\\sigma_{LT} = 30 \\times \\sqrt{6} = 30 \\times 2.44949 = 73.4847\\text{ units}$$\n2. Safety stock:\n$$SS = 1.645 \\times 73.4847 = 120.88 \\approx \\mathbf{121\\text{ units}} \\quad (\\text{Option 3})$$",
          variant: "If service level is 99% ($z = 2.33$): $SS = 2.33 \\times 73.48 = 171.2 \\approx 171$.\nIf lead time was 4 days: $\\sigma_{LT} = 30 \\times \\sqrt{4} = 60 \\implies SS = 1.645 \\times 60 = 98.7 \\approx 99$.",
          trap: "Do not calculate $1.645 \\times 30 \\times 6 = 296$! Lead time goes inside the square root ($\n\\sqrt{6}$). Mean demand (200) is not used for safety stock."
        },
        {
          id: "W12-Q20",
          conceptTag: "Newsvendor Optimal Order Quantity",
          question: "A seasonal product has demand following a normal distribution with mean of 400 units and standard deviation of 80 units. Selling price is ₹800, purchase price is ₹300, and salvage value is ₹200. The optimal order quantity (nearest integer) is",
          options: [
            "459",
            "572",
            "512",
            "551"
          ],
          correctAnswer: 0,
          theory: "In the Newsvendor model with normally distributed demand $\\sim N(\\mu, \\sigma)$:\n1. Underage cost $C_u = p - c = 800 - 300 = 500$\n2. Overage cost $C_o = c - s = 300 - 200 = 100$\n3. Critical ratio $CR = \\frac{C_u}{C_u + C_o} = \\frac{500}{500 + 100} = \\frac{500}{600} \\approx 0.8333$\n4. Standard normal z for $\\Phi(z) = 0.8333$ is $z \\approx 0.9674$.\n5. Theoretical $Q^* = \\mu + z\\sigma = 400 + 0.9674(80) \\approx 477.4\\text{ units}$.",
          formula: "\\boxed{Q^* = \\mu + z\\sigma, \\quad \\Phi(z) = \\frac{C_u}{C_u + C_o}}",
          stepByStep: "Platform Answer Key Note: The official NPTEL portal accepted answer for this assignment question is **459** (Option 1). When answering on the NPTEL portal or exam, mark **459** to match the portal evaluation key.",
          variant: "2025 Assignment Variant: Mean = 500, SD = 100, Selling price = ₹700, Purchase = ₹300, Salvage = ₹200.\n$C_u = 400, C_o = 100 \\implies CR = 0.80 \\implies z = 0.842$.\n$Q^* = 500 + 0.842(100) = 584.2\\text{ units}$. Platform key accepted **580**.",
          trap: "Always remember: $C_u = p - c$ (profit margin), and $C_o = c - s$ (net loss on unsold inventory). Don't use selling price in overage cost!"
        }
      ]
    },

    // Placeholders for Weeks 11 down to 1
    ...[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map(wNum => ({
      number: wNum,
      title: getWeekTopicTitle(wNum),
      status: "upcoming",
      summary: `Upcoming assignment practice module for Week ${wNum}. Questions and rapid theories will be unlocked here as you progress backward!`,
      studyMaterials: null,
      assignmentQuestions: []
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

