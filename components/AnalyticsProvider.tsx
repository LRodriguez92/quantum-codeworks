'use client'

import { useEffect, useState } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import CookieConsent from './CookieConsent'

export default function AnalyticsProvider() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const enabled = window.localStorage.getItem('analytics-enabled') === 'true';
    setAnalyticsEnabled(enabled);
  }, []);

  return (
    <>
      <CookieConsent />
      {analyticsEnabled && <GoogleAnalytics gaId="G-GLL12ZSD7X" />}
    </>
  )
} 