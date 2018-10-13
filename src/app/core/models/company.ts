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

export const newMockCompanyList: Company[] = [];
