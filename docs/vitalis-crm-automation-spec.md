# VITALIS HEALTH & PERFORMANCE
## GoHighLevel CRM, Speed-to-Lead Automation & Tracking Layer Specification
**Document Version:** 2.1.0 (Founder Realignment — Primary ICP: Athletes & Longevity Optimization)  
**Prepared By:** Mo Berkane, CRM & Automation Lead (`AutomateScale`)  
**Target Client:** Sergio Enriquez, BSN, RN — Founder, Vitalis Health & Performance  
**Primary ICP:** Athletes, Longevity Seekers & High-Performance Executives (High-LTV Cohort)  
**Core Ascension Target:** $369–$699/mo Performance Memberships & $900/mo 4-Week NAD+ Protocols  
**Market:** Dallas-Fort Worth Metroplex (Concierge Mobile IV Therapy & Cellular Longevity)  
**System Target URL:** `https://www.vitalishealthco.com`  

---

## Executive Summary & Strategic Realignment

```
                                  +---------------------------------------+
                                  |         TRAFFIC INGESTION             |
                                  |  Athletes / Longevity / Exec Wellness |
                                  +-------------------+-------------------+
                                                      |
                                                      v
+-----------------------------------------------------------------------------------------------+
|                                GHL GEOFENCE & PRE-QUALIFIER                                   |
|   1. DFW Core vs Extended Validation  ->  2. RN Hospital Shift Blackout Engine (Mon/Wed/Fri)  |
+---------------------------------------------+-------------------------------------------------+
                                              |
                                              v
+-----------------------------------------------------------------------------------------------+
|                       HIGH-LTV 5-MINUTE SPEED-TO-LEAD ENGINE                                  |
|  <30s Performance SMS  ->  AI Voice Clinical Triage  ->  Fast-Track Protocol Consult / Deposit |
+---------------------------------------------+-------------------------------------------------+
                                              |
                                              v
+-----------------------------------------------------------------------------------------------+
|                     CLINICAL ASCENSION LADDER (MAXIMIZE LTV)                                  |
|  Visit 1 Infusion  ->  T+2h Biomarker Check  ->  T+24h Review  ->  Day 3 Protocol Consult     |
|  ->  Day 7 Fast-Track Performance ($369/$699/mo)  ->  NAD+ 4-Week Induction ($900/mo)         |
+-----------------------------------------------------------------------------------------------+
```

### Core Strategic Design Principles (Post-Founder Kickoff)
1. **Primary ICP Focus:** Shift 80%+ of CRM and automation logic to **Athletes, Biohackers, and Executive Longevity Seekers**. High-LTV recurring protocols take precedence over transactional hangover drips.
2. **Fast-Track Protocol Ascension:** Rather than waiting 30 days to pitch a membership, new leads entering through Athletic and Longevity funnels (`AUD_ATHLETE`, `AUD_WELLNESS_EXEC`) immediately receive 10-Minute Clinical Performance Consultation links and direct access to recurring monthly retainers ($369–$699/mo) and 4-Week NAD+ Induction Retainers ($900/mo).
3. **Nurse Shift Constraints:** Sergio's 3x 12-hour hospital shifts weekly are strictly guarded via 2-way Google Calendar sync, with 45-minute DFW transit buffers between appointments.
4. **Capacity Ceiling & Yield Management:** With a ceiling of **8 drips/week**, revenue optimization is achieved by filling slots with high-ticket recurring members ($369–$699/mo) and NAD+ protocols ($900/mo), maximizing revenue per clinical hour ($300+/hr).
5. **AI Voice Agent Clinical Triage:** The Retell/Bland AI Voice Agent is programmed as a specialized clinical concierge ("Elena") who speaks the language of VO2 recovery, lactate clearance, amino acid saturation, and mitochondrial DNA repair.

---

# 1. GoHighLevel CRM Architecture & Custom Schema

## 1.1 High-LTV Pipeline Architecture

```
PIPELINE 1: CONCIERGE ACQUISITION & PROTOCOL TRIAGE
[New Inbound Lead] ──> [Speed-to-Lead Engaged] ──> [Address Qualified] ──> [Clinical Consult Booked] ──> [Appt / Protocol Confirmed] ──> [Deposit Collected]
        │                       │                        │
        └──> [No-Show Rescue]   └──> [Unqualified/OOR]   └──> [Nurture Sequence]

PIPELINE 2: CLINICAL DELIVERY & BIOMARKER TRACKING
[En Route / In Transit] ──> [Service in Progress] ──> [Infusion Completed] ──> [T+2h Biomarker Check] ──> [T+24h 5-Star Review] ──> [Day 3 Protocol Offer]

PIPELINE 3: RECURRING MEMBERSHIP & NAD+ ASCENSION
[High-LTV Prospect] ──> [Tier 2: Performance ($369/mo)] ──> [Tier 3: Executive ($699/mo)] ──> [NAD+ 4-Week Induction ($900/mo)] ──> [NAD+ Monthly ($450/mo)]
```

---

## 1.2 Updated Contact Tagging Matrix

Tags use strict standardized conventions: `[CATEGORY]_[Value]`.

| Category | Tag Name | Description / Trigger |
| :--- | :--- | :--- |
| **Audience Pillar** | `AUD_ATHLETE` | Ingested via Athletic Recovery, Hyrox/Marathon, or Gym Partner funnels. |
| | `AUD_WELLNESS_EXEC` | Ingested via Executive Longevity, Biohacking, or Substack funnels. |
| | `AUD_BEAUTY_GLOW` | Ingested via Glutathione / Collagen / Skin Health campaigns. |
| | `AUD_HANGOVER_EVENT` | Transactional hangover / acute event lead. |
| **High-LTV Priority** | `PROSPECT_HIGH_LTV_ATHLETE` | Qualified athlete/crossfit/triathlete seeking weekly/bi-weekly recovery. |
| | `PROSPECT_LONGEVITY_NAD` | Inquired regarding cognitive focus, anti-aging, or NAD+ protocols. |
| **Protocol Selection** | `PROTOCOL_PERFORMANCE_369` | Selected $369/mo Tier 2 Performance Membership (2 Drips + 2 Boosters). |
| | `PROTOCOL_EXECUTIVE_699` | Selected $699/mo Tier 3 Executive Concierge (4 Drips + Unlimited Boosters). |
| | `PROTOCOL_NAD_INDUCTION_900`| Enrolled in 4-Week 250mg–500mg NAD+ Induction Retainer ($900/mo). |
| | `DRIP_SINGLE_TRANSACTIONAL` | Selected one-off drip ($195–$245). |
| **Geofence Status** | `GEO_TIER1_CORE` | Dallas Core (Highland Park, Uptown, Downtown, Preston Hollow - $0 travel fee). |
| | `GEO_TIER2_EXTENDED` | DFW Suburbs (Frisco, Plano, Southlake, McKinney - $50 travel fee or 2+ drips). |
| | `GEO_OUT_OF_AREA` | Outside DFW geofence. Automated polite decline + waitlist. |
| **Clinical Status** | `STATUS_DEPOSIT_PAID` | $50 pre-auth or full protocol pre-payment secured via Stripe. |
| | `MEMBER_ACTIVE_RECURRING` | Active monthly recurring member ($369/$699/mo). |
| | `MEMBER_NAD_ACTIVE` | Active NAD+ protocol subscriber ($900/mo). |

---

# 2. Re-Indexed Speed-to-Lead Engine & AI Voice Agent

## 2.1 Sub-30-Second High-Performance SMS Dispatch

When a lead enters tagged `AUD_ATHLETE` or `AUD_WELLNESS_EXEC`, the workflow dispatches a tailored clinical message offering an immediate **Clinical Performance Consultation** or direct protocol booking:

### Pillar A: Athletic Performance & Recovery (`AUD_ATHLETE`)
```text
Hey {{contact.first_name}}, it's Sergio with Vitalis Health. Saw you're looking for high-performance mobile IV recovery in {{contact.vitalis_service_address_city | default: 'Dallas'}}. 

I'm packing clinical-grade amino blends, Toradol, and high-dose magnesium to flush lactate and accelerate glycogen re-synthesis. 

Are you prepping for a specific race/event, or dialing in your weekly training recovery? 

(Reply here or pick a 10-min consult slot with me: {{custom_values.booking_url}}/athlete-consult)
```

### Pillar B: Executive Longevity & NAD+ (`AUD_WELLNESS_EXEC`)
```text
Hello {{contact.first_name}}, this is Sergio Enriquez, BSN, RN — founder of Vitalis Health & Performance. 

Thank you for inquiring about our concierge cellular longevity and NAD+ protocols in Dallas. I personally deliver all treatments with sterile hospital-grade protocols.

Are you looking to eliminate brain fog and boost mitochondrial output with our 4-Week NAD+ Induction Protocol ($900/mo), or starting with a foundational Myers' infusion? 

Review the protocol or book a consult here: {{custom_values.booking_url}}/nad-consult
```

---

## 2.2 Realigned Retell / Bland AI Voice Agent Prompt (Elena)

```json
{
  "agent_name": "Vitalis Clinical Performance Concierge (Elena)",
  "voice_model": "ElevenLabs - 'Jessica' (Warm, Highly Articulate, Clinical Concierge)",
  "system_prompt": "You are Elena, the Clinical Concierge for Vitalis Health & Performance in Dallas, Texas, founded by Emergency Registered Nurse Sergio Enriquez. Your mission is to triage incoming leads within 60 seconds. Our primary focus is on high-performance athletes, executives, and longevity clients. Emphasize biomarker recovery, rapid lactate clearance, intracellular hydration, and our high-impact 4-Week NAD+ Longevity Induction ($900/mo) and Performance Memberships ($369/mo). Do not treat this as a generic hangover clinic. Position Sergio as a dedicated clinical nurse practitioner delivering white-glove, hospital-grade mobile protocols directly to luxury homes in Highland Park, Uptown, Preston Hollow, and Dallas Core.",
  "clinical_knowledge": {
    "athletic_protocol": "Performance Blend ($245 single / $369 monthly for 2 visits): 1000mL Electrolytes + Amino Acids (L-Glutamine, L-Arginine, L-Carnitine) + Magnesium Chloride + B-Complex + Toradol (if indicated for inflammation).",
    "nad_longevity_protocol": "4-Week Induction ($900/mo): 4x weekly infusions of 250mg-500mg NAD+ + 1000mg Glutathione pushes + Magnesium to activate Sirtuins, repair mitochondrial DNA, and eliminate brain fog.",
    "membership_tiers": "Performance Tier ($369/mo, 2 drips + 2 boosters) and Executive Concierge ($699/mo, 4 drips + unlimited boosters + family shareable). 100% rollover on all unused drips.",
    "deposit": "$50 holding deposit to secure Sergio's dispatch calendar. Applied 100% toward treatment."
  },
  "conversation_flow": [
    "Step 1: Greet lead warmly by first name, identify as Elena calling on behalf of Sergio Enriquez, RN at Vitalis in Dallas.",
    "Step 2: Ask what specific performance or longevity goal they are optimizing for (e.g. marathon training, Hyrox, biohacking, cognitive focus, recovery).",
    "Step 3: Recommend the ideal clinical protocol (Athletic Recovery Blend, Monthly Performance Membership at $369/mo, or the 4-Week NAD+ Reset).",
    "Step 4: Confirm Dallas service address and gate access.",
    "Step 5: Explain that an instant SMS link has just been sent to lock their mobile appointment with a $50 holding deposit or book a 10-min clinical consult with Sergio.",
    "Step 6: Close warmly and update CRM pipeline stage to 'Speed-to-Lead Engaged'."
  ]
}
```

---

# 3. Post-Visit Retention & Fast-Track Ascension Engine

```
                             [FIRST DRIP COMPLETED BY SERGIO]
                                            │
               ┌────────────────────────────┴────────────────────────────┐
               ▼ (T + 2 Hours)                                           ▼ (T + 24 Hours)
   [Biomarker & Recovery SMS]                               [5-Star Review Generator]
               │                                                         │
               ▼ (Day 3 Post-Visit)                                      │
   [Email: "The 30-Day Recovery Architecture"]                           │
               │                                                         │
               ▼ (Day 7 Fast-Track)                                      │
   [SMS & Email: Fast-Track to $369/mo Performance Tier] ────────────────┘
               │
               ▼ (Day 14 High-Ticket Ladder)
   [NAD+ 4-Week Induction Protocol Pitch ($900/mo)]
```

## 3.1 Day 3 Post-Visit: The Performance Architecture Pitch

### Email: "Why Elite Athletes Don't Rely on One-Off Hydration"
```markdown
**Subject:** {{contact.first_name}}, the difference between one-off recovery and cellular adaptation
**Preview Text:** How to protocolize your IV therapy for peak athletic and cognitive output.

Hey {{contact.first_name}},

Three days ago, we delivered a clinical dose of electrolytes, amino acids, and micronutrients directly to your bloodstream.

You’ve likely noticed the immediate benefits: lower muscle soreness, better sleep architecture, and elevated focus.

However, in elite endurance, strength training, and executive performance, **one-off treatments only address acute depletion**. True cellular optimization happens through consistent protocolized loading:

1. **Intracellular Magnesium Saturation:** Prevents muscle cramping and stabilizes resting heart rate (HRV).
2. **Amino Acid Blood Availability:** Accelerates post-workout myofibrillar repair and glycogen synthesis.
3. **Mitochondrial Co-factor Availability:** Keeps ATP production running at max capacity without caffeine dependency.

Our **Performance Membership ($369/mo)** is built specifically for Dallas athletes and high-performers:
* **2 Concierge Mobile Infusions per month** ($470 retail value)
* **2 Free Add-On Boosters** (Glutathione 1000mg, Toradol, or B12)
* **$0 Dallas Travel Fees** + 100% Unused Drip Rollover

👉 **[Fast-Track Your Performance Membership Here]({{custom_values.booking_url}}/memberships?email={{contact.email}})**

To your peak performance,
**Sergio Enriquez, BSN, RN**  
Founder, Vitalis Health & Performance
```

---

# 4. Tracking Layer & Analytics Infrastructure

### CAPI Event Tracking Optimized for High-LTV Retainers:
* `Lead`: Form fill or consult inquiry.
* `Schedule`: 10-Minute Performance Consultation or First Drip Scheduled.
* `Purchase`: $50 Deposit or $245 Full Single Drip.
* `CompleteRegistration` (High-Value Milestone): **$369.00 / $699.00 / $900.00** recurring membership or NAD+ induction contract initiated.

---
*Specification updated and approved for deployment by Mo Berkane, CRM & Automation Lead, AutomateScale.*
