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
    companyName: 'Dabvine',
    address: '3 Vidon Pass',
    isSelected: false,
    color: 'black',
  },
  {
    companyName: 'Feedfire',
    address: '654 Oak Valley Circle',
    isSelected: false,
    color: 'black',
  },
  {
    companyName: 'Trupe',
    address: '74403 Gina Point',
    isSelected: false,
    color: 'black',
  },
  {
    companyName: 'Oyondu',
    address: '77 Darwin Terrace',
    isSelected: false,
    color: 'black',
  },
  {
    companyName: 'Skinte',
    address: '8 Ilene Way',
    isSelected: false,
    color: 'black',
  },
  {
    companyName: 'Nozlet',
    address: '196 Shoshone Street',
    isSelected: false,
    color: 'black',
  },
  {
    companyName: 'Bubbletube',
    address: '811 Clemons Way',
    isSelected: false,
    color: 'black',
  },
  {
    companyName: 'Yamia',
    address: '57854 Golden Leaf Way',
    isSelected: false,
    color: 'black',
  },
  {
    companyName: 'Jaxnation',
    address: '32 Bunker Hill Crossing',
    isSelected: false,
    color: 'black',
  },
  {
    companyName: 'Divavu',
    address: '495 Grim Court',
    isSelected: false,
    color: 'black',
  },
];
