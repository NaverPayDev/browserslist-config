import { isSupportedUserAgent } from "./userAgentCheck";

describe("isSupportedUserAgent", () => {
  it("should return true for supported user agent", () => {
    const userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36";
    expect(isSupportedUserAgent(userAgent)).toBe(true);
  });

  it("should return false for unsupported user agent", () => {
    const userAgent =
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)";
    expect(isSupportedUserAgent(userAgent)).toBe(false);
  });

  it("should return true for supported iOS Safari version 15 or above", () => {
    const userAgent =
      "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1";
    expect(isSupportedUserAgent(userAgent)).toBe(true);
  });

  it("should return false for unsupported iOS Safari below version 15", () => {
    const userAgent =
      "Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1";
    expect(isSupportedUserAgent(userAgent)).toBe(false);
  });

  it("should return false for empty string", () => {
    expect(isSupportedUserAgent("")).toBe(false);
  });

  it("should return false for unknown user agent", () => {
    const userAgent = "UnknownBrowser/1.0";
    expect(isSupportedUserAgent(userAgent)).toBe(false);
  });
});
