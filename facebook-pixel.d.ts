// facebook-pixel.d.ts
interface FacebookPixel {
  (action: string, ...args: any[]): void;
  callMethod?: (...args: any[]) => void;
  queue?: any[];
  loaded?: boolean;
  version?: string;
  push?: (action: string, ...args: any[]) => void;
}

interface Window {
  fbq?: FacebookPixel;
}
