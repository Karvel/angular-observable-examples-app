export interface Employee {
  key?: string;
  companyKey?: string;
  companyName?: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  isFoo?: boolean;
}

export class Employee {
  key?: string;
  companyKey?: string;
  companyName?: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  isFoo?: boolean;

  constructor() {
    this.companyName = '';
    this.firstName = '';
    this.lastName = '';
    this.jobTitle = '';
    this.isFoo = false;
}
}

export const mockEmployeeList: Employee[] = [
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Sara-ann',
    lastName: 'Knoles',
    jobTitle: 'Dental Hygienist',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Maurice',
    lastName: 'Le Floch',
    jobTitle: 'Compensation Analyst',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Karen',
    lastName: 'Hillett',
    jobTitle: 'Marketing Assistant',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Brooke',
    lastName: 'Skally',
    jobTitle: 'VP Sales',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Claudette',
    lastName: 'Grisbrook',
    jobTitle: 'Database Administrator II',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Mylo',
    lastName: 'Cunah',
    jobTitle: 'Marketing Assistant',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Aloysia',
    lastName: 'Plowell',
    jobTitle: 'Food Chemist',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Nelia',
    lastName: 'Saxton',
    jobTitle: 'VP Product Management',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Joni',
    lastName: 'Flowith',
    jobTitle: 'Research Nurse',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Kerry',
    lastName: 'Durran',
    jobTitle: 'Marketing Assistant',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Sib',
    lastName: 'Belamy',
    jobTitle: 'Design Engineer',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Wylma',
    lastName: 'Lumley',
    jobTitle: 'Media Manager I',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Nicko',
    lastName: 'Ferronier',
    jobTitle: 'Systems Administrator II',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Devlin',
    lastName: 'Bower',
    jobTitle: 'Design Engineer',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Jordon',
    lastName: 'Guilbert',
    jobTitle: 'Graphic Designer',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Alexandr',
    lastName: 'Wevell',
    jobTitle: 'Developer I',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Cull',
    lastName: 'Dunbleton',
    jobTitle: 'Editor',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Marco',
    lastName: 'Compton',
    jobTitle: 'Registered Nurse',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8q',
    firstName: 'Jodi',
    lastName: 'Goodee',
    jobTitle: 'Financial Analyst',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Caralie',
    lastName: 'Levine',
    jobTitle: 'Web Designer II',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Woody',
    lastName: 'Carr',
    jobTitle: 'Community Outreach Specialist',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Sybilla',
    lastName: 'Bruyns',
    jobTitle: 'Human Resources Manager',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Jeramey',
    lastName: 'Douch',
    jobTitle: 'Business Systems Development Analyst',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Theodore',
    lastName: 'McNiff',
    jobTitle: 'Administrative Officer',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Clementina',
    lastName: 'Driutti',
    jobTitle: 'Human Resources Manager',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Eda',
    lastName: 'Creavin',
    jobTitle: 'General Manager',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Konstance',
    lastName: 'MacTrustram',
    jobTitle: 'VP Sales',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Huntlee',
    lastName: 'Dewen',
    jobTitle: 'Recruiting Manager',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Ritchie',
    lastName: 'Blesdill',
    jobTitle: 'Software Engineer IV',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Fred',
    lastName: 'Akram',
    jobTitle: 'Administrative Officer',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Graig',
    lastName: 'Hucke',
    jobTitle: 'Environmental Specialist',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Hamilton',
    lastName: 'Galley',
    jobTitle: 'Financial Analyst',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Selia',
    lastName: 'Glading',
    jobTitle: 'VP Quality Control',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Graeme',
    lastName: 'Patey',
    jobTitle: 'Sales Representative',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Zeb',
    lastName: 'Jones',
    jobTitle: 'Research Nurse',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Keene',
    lastName: 'Dulin',
    jobTitle: 'Biostatistician I',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Radcliffe',
    lastName: 'Harman',
    jobTitle: 'Chief Design Engineer',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Truman',
    lastName: 'Hauxley',
    jobTitle: 'VP Marketing',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-ZZTtNBMGnDoBf',
    firstName: 'Adela',
    lastName: 'Lartice',
    jobTitle: 'Accounting Assistant I',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8s',
    firstName: 'Iseabal',
    lastName: 'Short',
    jobTitle: 'Marketing Manager',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8s',
    firstName: 'Walther',
    lastName: 'Perillo',
    jobTitle: 'Electrical Engineer',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8s',
    firstName: 'Polly',
    lastName: 'McLuckie',
    jobTitle: 'Systems Administrator IV',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8s',
    firstName: 'Rubia',
    lastName: 'Powter',
    jobTitle: 'Project Manager',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8s',
    firstName: 'Dyanne',
    lastName: 'Dunsire',
    jobTitle: 'Cost Accountant',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8s',
    firstName: 'Larry',
    lastName: 'Lauridsen',
    jobTitle: 'Payment Adjustment Coordinator',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8s',
    firstName: 'Milly',
    lastName: 'Gennrich',
    jobTitle: 'Assistant Manager',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8s',
    firstName: 'Tess',
    lastName: 'Cristofolini',
    jobTitle: 'Senior Developer',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8s',
    firstName: 'Bayard',
    lastName: 'Reichert',
    jobTitle: 'Staff Scientist',
    isFoo: true,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8s',
    firstName: 'Nancey',
    lastName: 'Detheridge',
    jobTitle: 'Recruiting Manager',
    isFoo: false,
  },
  {
    companyKey: '-LOdfe-WBJoraHCf3g8s',
    firstName: 'Minna',
    lastName: 'Reglar',
    jobTitle: 'Senior Editor',
    isFoo: false,
  },
];
