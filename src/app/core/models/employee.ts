export interface IEmployee {
  key?: string;
  companyKey?: string;
  companyName?: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  isActive?: boolean;
}

export class Employee implements IEmployee {
  key?: string;
  companyKey?: string;
  companyName?: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  isActive?: boolean;

  constructor() {
    this.companyName = '';
    this.firstName = '';
    this.lastName = '';
    this.jobTitle = '';
    this.isActive = false;
  }
}

/*
  This is an empty array in this commit for the purposes of resetting the employees for the tutorial.
  It references keys specific to my existing firebase collection and so was committed as a stub.
*/

export const mockEmployeeList: IEmployee[] = [];
