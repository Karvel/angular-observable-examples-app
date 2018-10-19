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

const mockEmployeeList: IEmployee[] = [];
