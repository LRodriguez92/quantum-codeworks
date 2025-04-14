'use client'

import { useEffect } from 'react'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import * as CookieConsent from 'vanilla-cookieconsent'

export default function CookieConsentComponent() {
  useEffect(() => {
    console.log('CookieConsent component mounting...');
    
    try {
      CookieConsent.run({
        autoShow: true,  // Force the modal to show
        mode: 'opt-in',  // Make sure consent is required
        disablePageInteraction: false,  // Don't block page interaction

        guiOptions: {
          consentModal: {
            layout: 'box',
            position: 'bottom right',
            equalWeightButtons: true,
            flipButtons: false
          },
          preferencesModal: {
            layout: 'box',
            position: 'right',
            equalWeightButtons: true,
            flipButtons: false
          }
        },
        categories: {
          necessary: {
            enabled: true,
            readOnly: true
          },
          analytics: {
            enabled: false,
            readOnly: false,
            autoClear: {
              cookies: [
                { name: /^_ga/ },
                { name: '_gid' }
              ]
            }
          }
        },
        language: {
          default: 'en',
          translations: {
            en: {
              consentModal: {
                title: 'Cookie Preferences',
                description: 'We use cookies to enhance your experience and analyze our website traffic.',
                acceptAllBtn: 'Accept All',
                acceptNecessaryBtn: 'Only Necessary',
                showPreferencesBtn: '<button style="color: #F8F5F0; background: #1E1E1E; padding: 0.5rem 1rem; outline: none; box-shadow: none;">Customize</button>'
              },
              preferencesModal: {
                title: 'Privacy Preferences',
                acceptAllBtn: 'Accept All',
                acceptNecessaryBtn: 'Only Necessary',
                savePreferencesBtn: 'Save Preferences',
                closeIconLabel: 'Close',
                sections: [
                  {
                    title: 'Essential Cookies',
                    description: 'Required for basic site functionality.',
                    linkedCategory: 'necessary'
                  },
                  {
                    title: 'Analytics',
                    description: 'Help us improve our website through anonymous usage data.',
                    linkedCategory: 'analytics'
                  }
                ]
              }
            }
          }
        },
        onFirstConsent: ({cookie}) => {
          console.log('First consent given:', cookie);
        },
        onConsent: ({cookie}) => {
          console.log('Consent updated:', cookie);
        },
        onModalReady: ({modalName}) => {
          console.log('Modal ready:', modalName);
        },
        onModalShow: ({modalName}) => {
          console.log('Modal shown:', modalName);
        },
        onModalHide: ({modalName}) => {
          console.log('Modal hidden:', modalName);
        }
      });

      console.log('CookieConsent initialized successfully');
    } catch (error) {
      console.error('Error initializing CookieConsent:', error);
    }

    return () => {
      // Cleanup if needed
      console.log('CookieConsent component unmounting...');
    };
  }, []);

  return null; // The cookie consent UI is injected automatically
} 