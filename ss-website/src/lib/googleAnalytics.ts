export const initGA = (measurementId: string) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', measurementId, {
        page_path: window.location.pathname,
    });
};

export const trackEvent = (eventName: string, eventParams: any) => {
    if (window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
};

declare global {
    interface Window {
        dataLayer: any[];
        gtag: any;
    }
}
