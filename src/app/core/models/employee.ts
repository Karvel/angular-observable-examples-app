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

export const mockEmployeeList: IEmployee[] = [
  {
    companyName: 'Divavu',
    firstName: 'Sara-ann',
    lastName: 'Knoles',
    jobTitle: 'Dental Hygienist',
    isActive: false,
  },
  {
    companyName: 'Divavu',
    firstName: 'Maurice',
    lastName: 'Le Floch',
    jobTitle: 'Compensation Analyst',
    isActive: true,
  },
  {
    companyName: 'Divavu',
    firstName: 'Karen',
    lastName: 'Hillett',
    jobTitle: 'Marketing Assistant',
    isActive: true,
  },
  {
    companyName: 'Divavu',
    firstName: 'Brooke',
    lastName: 'Skally',
    jobTitle: 'VP Sales',
    isActive: true,
  },
  {
    companyName: 'Divavu',
    firstName: 'Claudette',
    lastName: 'Grisbrook',
    jobTitle: 'Database Administrator II',
    isActive: false,
  },
  {
    companyName: 'Divavu',
    firstName: 'Mylo',
    lastName: 'Cunah',
    jobTitle: 'Marketing Assistant',
    isActive: true,
  },
  {
    companyName: 'Divavu',
    firstName: 'Aloysia',
    lastName: 'Plowell',
    jobTitle: 'Food Chemist',
    isActive: true,
  },
  {
    companyName: 'Divavu',
    firstName: 'Nelia',
    lastName: 'Saxton',
    jobTitle: 'VP Product Management',
    isActive: true,
  },
  {
    companyName: 'Divavu',
    firstName: 'Joni',
    lastName: 'Flowith',
    jobTitle: 'Research Nurse',
    isActive: true,
  },
  {
    companyName: 'Divavu',
    firstName: 'Kerry',
    lastName: 'Durran',
    jobTitle: 'Marketing Assistant',
    isActive: true,
  },
  {
    companyName: 'Divavu',
    firstName: 'Sib',
    lastName: 'Belamy',
    jobTitle: 'Design Engineer',
    isActive: false,
  },
  {
    companyName: 'Divavu',
    firstName: 'Wylma',
    lastName: 'Lumley',
    jobTitle: 'Media Manager I',
    isActive: true,
  },
  {
    companyName: 'Divavu',
    firstName: 'Nicko',
    lastName: 'Ferronier',
    jobTitle: 'Systems Administrator II',
    isActive: false,
  },
  {
    companyName: 'Divavu',
    firstName: 'Devlin',
    lastName: 'Bower',
    jobTitle: 'Design Engineer',
    isActive: false,
  },
  {
    companyName: 'Divavu',
    firstName: 'Jordon',
    lastName: 'Guilbert',
    jobTitle: 'Graphic Designer',
    isActive: true,
  },
  {
    companyName: 'Divavu',
    firstName: 'Alexandr',
    lastName: 'Wevell',
    jobTitle: 'Developer I',
    isActive: true,
  },
  {
    companyName: 'Divavu',
    firstName: 'Cull',
    lastName: 'Dunbleton',
    jobTitle: 'Editor',
    isActive: false,
  },
  {
    companyName: 'Divavu',
    firstName: 'Marco',
    lastName: 'Compton',
    jobTitle: 'Registered Nurse',
    isActive: false,
  },
  {
    companyName: 'Divavu',
    firstName: 'Jodi',
    lastName: 'Goodee',
    jobTitle: 'Financial Analyst',
    isActive: false,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Caralie',
    lastName: 'Levine',
    jobTitle: 'Web Designer II',
    isActive: false,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Woody',
    lastName: 'Carr',
    jobTitle: 'Community Outreach Specialist',
    isActive: false,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Sybilla',
    lastName: 'Bruyns',
    jobTitle: 'Human Resources Manager',
    isActive: false,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Jeramey',
    lastName: 'Douch',
    jobTitle: 'Business Systems Development Analyst',
    isActive: false,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Theodore',
    lastName: 'McNiff',
    jobTitle: 'Administrative Officer',
    isActive: true,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Clementina',
    lastName: 'Driutti',
    jobTitle: 'Human Resources Manager',
    isActive: true,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Eda',
    lastName: 'Creavin',
    jobTitle: 'General Manager',
    isActive: false,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Konstance',
    lastName: 'MacTrustram',
    jobTitle: 'VP Sales',
    isActive: true,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Huntlee',
    lastName: 'Dewen',
    jobTitle: 'Recruiting Manager',
    isActive: true,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Ritchie',
    lastName: 'Blesdill',
    jobTitle: 'Software Engineer IV',
    isActive: false,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Fred',
    lastName: 'Akram',
    jobTitle: 'Administrative Officer',
    isActive: true,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Graig',
    lastName: 'Hucke',
    jobTitle: 'Environmental Specialist',
    isActive: true,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Hamilton',
    lastName: 'Galley',
    jobTitle: 'Financial Analyst',
    isActive: true,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Selia',
    lastName: 'Glading',
    jobTitle: 'VP Quality Control',
    isActive: false,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Graeme',
    lastName: 'Patey',
    jobTitle: 'Sales Representative',
    isActive: true,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Zeb',
    lastName: 'Jones',
    jobTitle: 'Research Nurse',
    isActive: true,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Keene',
    lastName: 'Dulin',
    jobTitle: 'Biostatistician I',
    isActive: false,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Radcliffe',
    lastName: 'Harman',
    jobTitle: 'Chief Design Engineer',
    isActive: true,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Truman',
    lastName: 'Hauxley',
    jobTitle: 'VP Marketing',
    isActive: true,
  },
  {
    companyName: 'Dabvine',
    firstName: 'Adela',
    lastName: 'Lartice',
    jobTitle: 'Accounting Assistant I',
    isActive: false,
  },
  {
    companyName: 'Feedfire',
    firstName: 'Iseabal',
    lastName: 'Short',
    jobTitle: 'Marketing Manager',
    isActive: false,
  },
  {
    companyName: 'Feedfire',
    firstName: 'Walther',
    lastName: 'Perillo',
    jobTitle: 'Electrical Engineer',
    isActive: true,
  },
  {
    companyName: 'Feedfire',
    firstName: 'Polly',
    lastName: 'McLuckie',
    jobTitle: 'Systems Administrator IV',
    isActive: false,
  },
  {
    companyName: 'Feedfire',
    firstName: 'Rubia',
    lastName: 'Powter',
    jobTitle: 'Project Manager',
    isActive: true,
  },
  {
    companyName: 'Feedfire',
    firstName: 'Dyanne',
    lastName: 'Dunsire',
    jobTitle: 'Cost Accountant',
    isActive: true,
  },
  {
    companyName: 'Feedfire',
    firstName: 'Larry',
    lastName: 'Lauridsen',
    jobTitle: 'Payment Adjustment Coordinator',
    isActive: true,
  },
  {
    companyName: 'Feedfire',
    firstName: 'Milly',
    lastName: 'Gennrich',
    jobTitle: 'Assistant Manager',
    isActive: false,
  },
  {
    companyName: 'Feedfire',
    firstName: 'Tess',
    lastName: 'Cristofolini',
    jobTitle: 'Senior Developer',
    isActive: false,
  },
  {
    companyName: 'Feedfire',
    firstName: 'Bayard',
    lastName: 'Reichert',
    jobTitle: 'Staff Scientist',
    isActive: true,
  },
  {
    companyName: 'Feedfire',
    firstName: 'Nancey',
    lastName: 'Detheridge',
    jobTitle: 'Recruiting Manager',
    isActive: false,
  },
  {
    companyName: 'Feedfire',
    firstName: 'Minna',
    lastName: 'Reglar',
    jobTitle: 'Senior Editor',
    isActive: false,
  },
];
