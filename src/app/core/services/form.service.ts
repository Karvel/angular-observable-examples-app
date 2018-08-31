import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
  constructor() { }

  public serializeObj(object: Object): string {
    let component: string;
    let serializedObject: string = '';

    for (const property in object) {
      if (object.hasOwnProperty(property)) {
        component = `${property}=${encodeURIComponent(object[property])}&`;
        serializedObject = serializedObject + component;
      }
    }

    return serializedObject = serializedObject.substring(0, serializedObject.length - 1);
  }

  public serializeString(string: string): string {
    return encodeURIComponent(string);
  }
}
