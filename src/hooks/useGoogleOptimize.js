import { useEffect, useState } from 'react';

// Usage:
// const Page = useGoogleOptimize('hhWP8gOsTvvT2P_KlFjw', [PageA, PageB])
// return <Page/>
function useGoogleOptimize(experimentId, variants, timeout = Infinity) {
    const [variant, setVariant] = useState(null);

    useEffect(
        () => {
            // Sets a timeout
            let optimizeTimedOut;

            if (timeout !== Infinity) {
                optimizeTimedOut = setTimeout(() => {
                    // Clears the callback just in case this was a network timeout
                    removeCallback();
                    // Defaults to the 'Original'
                    setVariant(0);
                }, timeout);
            }
            // Sets the variant returned by Optimize and clears the timeout check
            const callback = (value) => {
                optimizeTimedOut && clearTimeout(optimizeTimedOut);
                setVariant(Number(value));
            };
            // Documented here:
            // https://support.google.com/optimize/answer/9059383?hl=en
            // @ts-ignore
            gtag('event', 'optimize.callback', {
                name: experimentId,
                callback,
            });

            // Cleans up the optimize callback if the request times out
            const removeCallback = () => {
                optimizeTimedOut && clearTimeout(optimizeTimedOut);
                // @ts-ignore
                gtag('event', 'optimize.callback', {
                    name: experimentId,
                    callback,
                    remove: true,
                });
            };
            // Unregisters the event when the parent is unmounted or the experiment
            // id is changed
            return removeCallback;
        },
        // Only update if the experiment ID changes
        [experimentId, timeout]
    );
    // When testing functions you should use null checks. No special treatment
    // is necessary with React components.
    return variant === null ? null : variants[variant];
}

function gtag() {
    if (typeof window !== 'undefined') {
        if (typeof window.gtag === 'function') {
            // eslint-disable-next-line prefer-rest-params
            window.gtag.apply(null, arguments);
        } else if (Array.isArray(window.dataLayer)) {
            // eslint-disable-next-line prefer-rest-params
            window.dataLayer.push(arguments);
        } else {
            if (
                typeof process !== 'undefined' &&
                process.env.NODE_ENV !== 'production' &&
                !didWarn
            ) {
                didWarn = true;
                console.warn(
                    '[@react-hook/google-optimize] Google Tag Manager was not found on your site. Neither "gtag()" or "dataLayer[]" could be located on the "window". If you are not using Google Tag Manager in dev you can ignore this warning. Otherwise, see the Google Tag Manager dev guide for examples: https://developers.google.com/tag-manager/devguide'
                );
            }
        }
    }
}

let didWarn = false;

// declare global {
//   interface Window {
//     dataLayer
//   }
// }

export default useGoogleOptimize;
