# VITALIS HEALTH & PERFORMANCE
## Production Downstream Funnel Scripts & Automation Playbook
**Document Version:** 2.1.0 (Founder Realignment — Primary ICP: Athletes & Longevity Optimization)  
**Lead Architect:** Mo Berkane, CRM & Automation Lead (`AutomateScale`)  
**Client:** Sergio Enriquez, BSN, RN — Founder, Vitalis Health & Performance  
**Market:** Dallas-Fort Worth Metroplex (Concierge Mobile IV Therapy & Cellular Longevity)  
**Primary Positioning:** Elite Athletic Recovery, Executive Longevity & Cellular Optimization  
**Target URL:** `https://www.vitalishealthco.com`  

---

# System Master Variables Reference (Liquid Syntax)

```ini
{{contact.first_name}}                  = Patient First Name (Fallback: "there")
{{contact.name}}                        = Patient Full Name
{{contact.vitalis_service_address}}     = Full street address on file
{{contact.vitalis_service_address_city}}= City / Neighborhood (Uptown, Highland Park, etc.)
{{contact.vitalis_drip_choice}}         = Selected IV drip blend
{{contact.vitalis_time_window}}         = Selected preferred time window
{{appointment.start_time}}              = Formatted appointment datetime
{{appointment.id}}                      = Unique appointment identifier
{{custom_values.booking_url}}           = "https://www.vitalishealthco.com/book"
{{custom_values.google_review_url}}     = "https://g.page/r/vitalis-health-dfw/review"
{{custom_values.company_phone}}         = "+14695550199"
{{custom_values.sergio_direct_phone}}   = "+14695550188"
```

---

# DOWN-FUNNEL 1: Post-Visit Biomarker Check-in (T+2h) & 5-Star Sentiment-Gated Google Review Machine (T+24h)

```
                            [APPOINTMENT COMPLETED IN GHL]
                                          │
                                          ▼ (Wait 2 Hours)
                             [T+2h Biomarker Check-in SMS]
                                          │
                                          ▼ (Wait 22 Hours)
                       [T+24h 1–5 Sentiment Score Request SMS]
                                          │
                   ┌──────────────────────┴──────────────────────┐
                   ▼ (Replied: 4 or 5)                           ▼ (Replied: 1, 2, or 3)
       [5-Star Google Review Branch]                  [Service Concern Escalation Branch]
       • SMS: Direct Google Link + $25 Credit         • Internal Urgent Task to Sergio
       • Email: Clinical Feedback Request             • SMS: Clinical Empathy & Recovery
```

## 1.1 T+2 Hours: Clinical Biomarker & Recovery Check

### Verbatim SMS Copy:
```text
Hey {{contact.first_name}}, Sergio here checking in post-infusion! 💧

How are your muscles and mental clarity feeling as those amino acids, magnesium, and electrolytes circulate?

Quick nurse reminder: Keep sipping water this afternoon to support intracellular transport and flush metabolic waste. If you have any clinical questions or notice any site tenderness, text me right here!
```

---

## 1.2 T+24 Hours: 5-Star Sentiment-Gated Review Machine

### SMS 1: The 1–5 Rating Gate
```text
Hi {{contact.first_name}} — Sergio here from Vitalis. Hope you woke up feeling completely energized and recovered today! 

On a quick scale of 1 to 5 (5 being exceptional), how would you rate your concierge clinical experience yesterday? 

(Just reply with a number!)
```

### High Sentiment Response (Replies "4" or "5"):
```text
That means the world to me, {{contact.first_name}}! ⭐️ As an independent nurse-owned practice in Dallas, reviews make a huge difference.

Would you mind taking 30 seconds to tap this link and share your experience on our Google page? 
👉 {{custom_values.google_review_url}}

As a thank you, I've added a **$25 Clinical Booster Credit** (Glutathione 1000mg or Toradol) to your account for your next protocol visit! — Sergio
```

---

# DOWN-FUNNEL 2: Fast-Track Performance Protocol Ascension ($369/mo — Day 3 to Day 7)

```
                      [DAY 3 POST-INFUSION: ATHLETE / LONGEVITY LEAD]
                                             │
                                             ▼ (Day 3 @ 10:00 AM CT)
                      [Email: Why Elite Athletes Protocolize Recovery]
                                             │
                                             ▼ (Day 5 @ 2:00 PM CT)
                      [SMS: Fast-Track to $369/mo Performance Tier]
                                             │
                                             ▼ (Day 7 @ 9:00 AM CT)
                      [Email: The Bi-Weekly Recovery Math & Rollover Promise]
```

## 2.1 Sequence Assets

### Email 1 (Day 3 @ 10:00 AM CT):
```markdown
**Subject:** {{contact.first_name}}, the science of cellular adaptation vs. one-off recovery
**Preview Text:** How to maintain optimal lactate clearance and HRV through protocolized IV therapy.

Hey {{contact.first_name}},

Three days ago, we flooded your system with hospital-grade electrolytes, branched-chain amino acids, and high-dose magnesium.

You’ve likely felt the immediate impact: reduced delayed-onset muscle soreness (DOMS), enhanced sleep quality, and steady cognitive stamina.

Here is the physiological reality of athletic and executive performance:
* **One-Off Treatments:** Provide acute relief and rehydrate depleted tissues.
* **Protocolized IV Therapy (Every 14 Days):** Keeps intracellular magnesium saturated, accelerates myofibrillar repair after heavy training blocks, and prevents central nervous system burnout.

Our **Performance Membership ($369/month)** is engineered for Dallas athletes and high-performers:
* **2 Concierge Mobile Infusions per month** (Athletic Recovery / Myers' formulas)
* **2 Free Add-On Boosters** (Glutathione 1000mg, Toradol, or B12)
* **$0 Travel Surcharge** across Dallas Core
* **100% Rollover:** Unused drips never expire.
* *Total Value: $510/mo — You Save $141/mo*

👉 **[Fast-Track Your Performance Protocol Here]({{custom_values.booking_url}}/memberships?email={{contact.email}})**

Looking forward to supporting your training cycle,
**Sergio Enriquez, BSN, RN**  
Founder, Vitalis Health & Performance
```

---

### SMS 1 (Day 5 @ 2:00 PM CT):
```text
Hey {{contact.first_name}}, Sergio here. If you're planning on keeping your recovery and energy dialed in this month, our **Performance Membership ($369/mo for 2 concierge visits)** saves you over $140 compared to booking one-off drips. 

Plus, any unused drips roll over forever. Check out the member perks here: {{custom_values.booking_url}}/memberships?email={{contact.email}}
```

---

# DOWN-FUNNEL 3: Executive Concierge ($699/mo) & High-Ticket Longevity Membership

```markdown
**Subject:** The Executive Concierge Protocol: 4 Mobile Visits, Priority Dispatch, Shareable with Family
**Preview Text:** For high-output Dallas executives and competitive endurance athletes.

Hey {{contact.first_name}},

For our Dallas clients with rigorous travel schedules, demanding executive roles, or intensive marathon/ironman training blocks, waiting until you're exhausted to book an IV is too late.

The **Vitalis Executive Concierge Tier ($699/month)** provides an all-inclusive weekly cellular protocol delivered to your home or office:

* **4 Concierge Mobile Infusions per month** ($940 retail value)
* **Priority Dispatch Booking:** Guaranteed 24-hour dispatch reservation window
* **Unlimited Add-On Boosters** (Glutathione, Toradol, Zofran, High-Dose Vitamin C, B12)
* **100% Family Shareable:** Share visits with your spouse or household members
* **100% Drip Rollover:** Bank unused infusions indefinitely

```
  RETAIL VALUE: $1,020 / month
  EXECUTIVE CONCIERGE TIER: $699 / month (Save $321/mo)
```

👉 **[Upgrade to Executive Concierge Status]({{custom_values.booking_url}}/memberships?email={{contact.email}})**

To your vitality,
**Sergio Enriquez, BSN, RN**
```

---

# DOWN-FUNNEL 4: High-Ticket NAD+ Longevity Protocol Ascension ($900/mo)

```
                    [PATIENT TAGGED: AUD_WELLNESS_EXEC OR PROSPECT_LONGEVITY_NAD]
                                                │
                                                ▼ (Day 1)
                     [Email 1: The Cellular Battery & Why Oral NAD+ Fails]
                                                │
                                                ▼ (Day 3)
                     [SMS 1: Sergio's Nurse Case Study on Cellular Energy]
                                                │
                                                ▼ (Day 6)
                     [Email 2: The 4-Week Induction Blueprint ($900/mo)]
                                                │
                                                ▼ (Day 8)
                     [10-Minute Clinical Performance Consult with Sergio, RN]
```

## 4.1 Retell / Bland AI Voice Agent Prompt (NAD+ & Performance Focused)

```json
{
  "agent_name": "Vitalis Performance Concierge (Elena)",
  "voice_model": "ElevenLabs - 'Jessica' (Clinical, Warm, Authoritative)",
  "system_prompt": "You are Elena, Clinical Coordinator for Vitalis Health & Performance in Dallas, Texas. You are speaking with a high-performing athlete, executive, or longevity client who inquired about our intravenous therapies. Emphasize that all infusions are personally administered by Registered Nurse Sergio Enriquez using sterile hospital-grade protocols. Highlight our two primary ascension tracks: the Performance Membership ($369/mo for 2 monthly infusions) and our flagship 4-Week NAD+ Longevity Induction ($900/mo) which eliminates brain fog and repairs mitochondrial DNA. Guide them to complete their appointment with a $50 holding deposit or book a direct 10-minute clinical consultation with Sergio.",
  "knowledge_base": {
    "athlete_recovery": "Performance Blend ($245 single / $369 monthly): 1000mL Electrolytes + Amino Acids + Magnesium Chloride + B-Complex + Toradol (if indicated).",
    "nad_induction": "4-Week Induction ($900/mo): 4x weekly 250mg-500mg NAD+ infusions compounded with 1000mg Glutathione pushes to activate Sirtuins and restore mitochondrial ATP.",
    "rollover": "All membership drips roll over month-to-month and never expire. One-text pause anytime.",
    "deposit": "$50 holding deposit secures Sergio's dispatch calendar and applies 100% toward treatment."
  }
}
```

---

# DOWN-FUNNEL 5: High-Performance Abandoned Booking & No-Show Rescue

```text
// Touch 1 (+15 Mins - SMS):
"Hey {{contact.first_name}}, Sergio here from Vitalis. Saw you were checking our mobile IV calendar for {{contact.vitalis_service_address_city | default: 'Dallas'}}! Did you have a question about tailoring an athletic recovery or NAD+ protocol for your training schedule? Let me know!"

// Touch 2 (+3 Hours - SMS):
"Hey {{contact.first_name}} — just checking in before my evening mobile dispatch. I only have 2 slots left in Dallas this week before my hospital shift rotation starts. Want me to hold a slot for you? Grab it here: {{custom_values.booking_url}}?email={{contact.email}}"

// Touch 3 (+24 Hours - SMS):
"Hi {{contact.first_name}} — Sergio, RN here. Quick question: are you looking for acute recovery today, or were you hoping to dial in a recurring weekly/bi-weekly performance protocol? Happy to answer any clinical questions!"
```

---

# DOWN-FUNNEL 6: Athletic Partnerships & Boutique Gym Multiplier (CrossFit, Hyrox, Run Clubs)

```markdown
**Subject:** Concierge Mobile IV & Biomarker Recovery for [Gym/Facility Name] Athletes
**Preview Text:** Hospital-grade on-site recovery partnerships for your members.

Dear [Gym Owner / Head Coach Name],

My name is Sergio Enriquez, BSN, RN. I am an emergency-trained Registered Nurse, competitive athlete, and Founder of **Vitalis Health & Performance**, Dallas's premier mobile IV recovery practice.

We provide sterile, hospital-grade mobile IV therapy (Amino Acids, Electrolytes, Glutathione, Toradol, NAD+) directly to athletes at their homes and on-site at boutique fitness facilities across Dallas.

### Partnership Inclusions for [Gym Name]:
1. **On-Site Pop-Up Recovery Lounges:** Post-competition, HYROX simulations, or Saturday partner workouts.
2. **Dedicated Member Discount:** $25 OFF all concierge home infusions for your active members.
3. **Co-Branded Educational Content:** Live workshops on hydration biomarkers, electrolyte balance, and mitochondrial recovery.

I'd love to stop by [Gym Name] this week to introduce myself and provide a complimentary recovery infusion for you and your coaching staff.

Would Thursday at 11:00 AM or Friday at 2:00 PM suit you?

In performance,  
**Sergio Enriquez, BSN, RN**  
Founder, Vitalis Health & Performance  
Direct: (469) 555-0188 | sergio@vitalishealthco.com
```

---

# DOWN-FUNNEL 7: "Give $50, Get $50" Park Cities VIP Athlete Referral Circle

```text
// Shareable Referral SMS Pass (T+48h Post-Review):
"Hey {{contact.first_name}}, Sergio here! Thanks again for trusting Vitalis with your recovery. As a VIP client, I've created a private **Give $50, Get $50 Pass** for you:

Your training partners & friends get **$50 OFF** their first concierge mobile IV in Dallas, and you get a **$50 credit** applied to your next infusion or membership every time someone books!

Here's your personal link to share:
👉 {{custom_values.booking_url}}?ref={{contact.id}}"
```

---
*Playbook updated and verified by Mo Berkane, CRM & Automation Lead, AutomateScale.*
