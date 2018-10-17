import { TableColumns } from '../models/table-columns';

export class Utils {
  public static isMobileDevice(): boolean {
      return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  public static convertFirebaseResponseToArray<T>(firebaseResponse: T): object {
    const array: object[] = Object.entries(firebaseResponse).map(entry => Object.assign(entry[1], { id: entry[0] }));
    return array;
  }

  public static filterTableColumns(data: TableColumns[]): string[] {
    const columnIdList: string[] = [];
    data.forEach(datum => {
      if (columnIdList.indexOf(datum.columnId) === -1) {
        columnIdList.push(datum.columnId);
      }
    });

    return columnIdList;
  }
}
