export interface ICompany {
  key?: string;
  companyName: string;
  address: string;
  isSelected: boolean;
  color: string;
  employeeCount?: number;
}

export class Company implements ICompany {
  key?: string;
  companyName: string;
  address: string;
  isSelected: boolean;
  color: string;
  employeeCount?: number;

  constructor() {
    this.companyName = '';
    this.address = '';
    this.isSelected = false;
    this.color = 'black';
    this.employeeCount = 0;
  }
}

/*
  This is an empty array in this commit for the purposes of resetting the company for the tutorial.
  It references keys specific to my existing firebase collection and so was committed as a stub.
*/
export const pristineCompanyList: ICompany[] = [];
