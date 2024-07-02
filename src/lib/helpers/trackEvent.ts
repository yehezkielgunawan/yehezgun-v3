// Full Docs: https://umami.is/docs/tracker-functions
type TrackEventArgsType = {
  eventName: string;
  eventData: { [key: string]: string | number };
  url?: string;
  webID?: string;
};

export const trackEvent = ({
  eventName,
  eventData,
  url,
  webID,
}: TrackEventArgsType) => {
  if (window?.umami && typeof window?.umami?.track === "function") {
    window?.umami?.track(eventName, {
      ...eventData,
      url: url || window.location.pathname,
      webID: Number(webID),
    });
  }
};
