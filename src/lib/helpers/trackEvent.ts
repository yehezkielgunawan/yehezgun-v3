import { UMAMI_WEB_ID } from "@/constants/baseConstants";

// Full Docs: https://umami.is/docs/tracker-functions
type TrackEventArgsType = {
  eventName: string;
  eventData: Record<string, unknown>;
  url?: string;
  webID?: string;
};

export const trackEvent = ({
  eventName,
  eventData,
  url,
  webID = UMAMI_WEB_ID,
}: TrackEventArgsType) => {
  if (window.umami && typeof window.umami.trackEvent === "function") {
    window.umami.trackEvent(
      eventName,
      eventData as unknown as string,
      url,
      webID
    );
  }
};
