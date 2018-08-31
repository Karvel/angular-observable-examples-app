export class Utils {
  public static isMobileDevice(): boolean {
      return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
}
