import browserslist from "browserslist";
import { matchesUA } from "browserslist-useragent";
import config from "./index";

export function isSupportedUserAgent(userAgent: string): boolean {
  const supportedBrowsers = browserslist(config);
  return matchesUA(userAgent, {
    browsers: supportedBrowsers,
    allowHigherVersions: true,
  });
}
