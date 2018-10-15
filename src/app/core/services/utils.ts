export class Utils {
  public static isMobileDevice(): boolean {
      return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  public static convertFirebaseResponseToArray<T>(firebaseResponse: T): object {
    const array: object[] = Object.entries(firebaseResponse).map(entry => Object.assign(entry[1], { id: entry[0] }));
    return array;
  }
}
