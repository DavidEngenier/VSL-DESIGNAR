// components/FacebookPixel.tsx
"use client"
// components/FacebookPixel.tsx
import { useEffect } from 'react';
import Head from 'next/head';

const FacebookPixel: React.FC = () => {
  useEffect(() => {
    if (!window.fbq) {
      (function(f: Window, b: Document, e: string, v: string) {
        const n: FacebookPixel = function(...args: any[]) {
          if (n.callMethod) {
            n.callMethod.apply(n, args);
          } else {
            n.queue = n.queue || [];
            n.queue.push(args);
          }
        } as FacebookPixel;

        if (!f.fbq) {
          f.fbq = n;
          n.push = n;
          n.loaded = true;
          n.version = '2.0';
          n.queue = [];

          const t = b.createElement(e) as HTMLScriptElement;
          t.async = true;
          t.src = v;
          const s = b.getElementsByTagName(e)[0];

          if (s && s.parentNode) {
            s.parentNode.insertBefore(t, s);
          }
        }
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    }

    if (typeof window.fbq === 'function') {
      window.fbq('init', '456837497317015');
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <Head>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=456837497317015&ev=PageView&noscript=1"
        />
      </noscript>
    </Head>
  );
};

export default FacebookPixel;
