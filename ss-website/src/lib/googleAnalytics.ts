// Initialize Google Analytics
export const initGA = (measurementId: string) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag function
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(..._args: any[]) {
        (window as any).dataLayer.push(arguments);
    }
    (window as any).gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', measurementId, {
        page_path: window.location.pathname,
    });
};

// Track custom events
export const trackEvent = (eventName: string, eventParams: any) => {
    const gtag = (window as any).gtag;
    if (gtag) {
        gtag('event', eventName, eventParams);
    }
};

// Extend window type
declare global {
    interface Window {
        dataLayer?: any[];
        gtag?: (...args: any[]) => void;
    }
}
