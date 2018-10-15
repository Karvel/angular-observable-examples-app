export interface Company {
  key?: string;
  companyName: string;
  address: string;
  isSelected: boolean;
}

export class Company implements Company {
  key?: string;
  companyName: string;
  address: string;
  isSelected: boolean;

  constructor() {
    this.companyName = '';
    this.address = '';
    this.isSelected = false;
  }
}

/*
  This is an empty array in this commit for the purposes of resetting the company for the tutorial.
  It references keys specific to my existing firebase collection and so was committed as a stub.
*/
export const pristineCompanyList: Company[] = [];
