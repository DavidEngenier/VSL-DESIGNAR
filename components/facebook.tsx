// components/FacebookPixel.tsx
"use client"
import { useEffect } from 'react';
import Head from 'next/head';

const FacebookPixel: React.FC = () => {
  useEffect(() => {
    console.log('Loading Facebook Pixel...');
    (function(f: Window, b: Document, e: string, v: string) {
      if (f.fbq) return; // Solo se define fbq si no está ya presente

      const n: FacebookPixel = function(...args: any[]) {
        if (n.callMethod) {
          n.callMethod.apply(n, args);
        } else {
          n.queue = n.queue || [];
          n.queue.push(args);
        }
      } as FacebookPixel;

      // Definición del objeto fbq
      f.fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      
      // Crear y configurar el elemento script
      const t = b.createElement(e) as HTMLScriptElement; // Declarar explícitamente como HTMLScriptElement
      t.async = true;
      t.src = v;
      const s = b.getElementsByTagName(e)[0];

      // Verificar que parentNode no sea null antes de insertar el script
      if (s && s.parentNode) {
        s.parentNode.insertBefore(t, s);
      }
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    if (window.fbq) {
      window.fbq('init', '456837497317015');
      window.fbq('track', 'PageView');
    }

    return () => {
      // Clean up logic if necessary
    };
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
