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

export const mockCompanyList: ICompany[] = [
  {
    companyName: 'Quaxo',
    address: '9989 Fulton Terrace',
    isSelected: false,
    color: 'black',
  },
];
