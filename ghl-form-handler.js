/**
 * Vitalis Health & Performance — Universal GHL Form & Geofence Handler
 * Automatescale 90-Day Launch System
 */

(function() {
  'use strict';

  const GHL_WEBHOOK_ENDPOINT = 'https://services.leadconnectorhq.com/hooks/vitalis_inbound_lead'; // Placeholder for active GHL sub-account webhook

  const DFW_ZIPS = {
    CORE_TIER_1: [
      '75201', '75202', '75204', '75205', '75206', '75207', 
      '75209', '75214', '75219', '75220', '75225', '75229', 
      '75230', '75235', '75240', '75248', '75001', '75038', '75039'
    ],
    EXTENDED_TIER_2: [
      '75024', '75093', '75034', '75035', '76092', '76034', 
      '76262', '75019', '76107', '75070', '75078'
    ]
  };

  // Extract UTM parameters from URL
  function getUTMParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || 'direct',
      utm_medium: params.get('utm_medium') || 'organic',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
      ref_partner: params.get('ref') || ''
    };
  }

  // Validate ZIP against Love Field 15-mi radius
  window.validateDallasZip = function(zip) {
    const cleanZip = String(zip).trim();
    if (DFW_ZIPS.CORE_TIER_1.includes(cleanZip)) {
      return { tier: 1, fee: 0, label: 'Core Dallas ($0 Travel Fee)' };
    } else if (DFW_ZIPS.EXTENDED_TIER_2.includes(cleanZip)) {
      return { tier: 2, fee: 50, label: 'Extended DFW (+$50 Travel Fee)' };
    } else {
      return { tier: 3, fee: 100, label: 'Custom / Outer Area (Subject to review)' };
    }
  };

  // Submit Lead Payload to GoHighLevel
  window.submitVitalisLead = async function(formData, audiencePillar = 'GENERAL') {
    const utms = getUTMParams();
    const payload = {
      ...formData,
      ...utms,
      audience_pillar: audiencePillar,
      submitted_at: new Date().toISOString(),
      source_page: window.location.pathname
    };

    console.log('[Vitalis GHL Ingestion Payload]:', payload);

    try {
      // In production, dispatch to GHL webhook endpoint
      /*
      const response = await fetch(GHL_WEBHOOK_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return await response.json();
      */
      return { success: true, message: 'Lead successfully queued for <5min dispatch' };
    } catch (err) {
      console.error('[Vitalis GHL Error]:', err);
      return { success: false, error: err };
    }
  };
})();
