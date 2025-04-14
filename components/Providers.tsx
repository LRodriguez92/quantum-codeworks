'use client'

import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from '@next/third-parties/google'
import { useEffect, useState } from 'react'

export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const enabled = window.localStorage.getItem('analytics-enabled') === 'true';
    setAnalyticsEnabled(enabled);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
      {analyticsEnabled && <GoogleAnalytics gaId="G-GLL12ZSD7X" />}
    </ThemeProvider>
  )
} 