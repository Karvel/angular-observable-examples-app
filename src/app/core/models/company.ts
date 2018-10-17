export interface Company {
  key?: string;
  companyName: string;
  address: string;
  isSelected: boolean;
  color: string;
  employeeCount?: number;
}

export class Company implements Company {
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
export const pristineCompanyList: Company[] = [
  {
    key: '-LOdfe-QyrvDqDyb-UtQ',
    companyName: 'Dabvine',
    address: '3 Vidon Pass',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-Un7UmmqWbwXmO',
    companyName: 'Feedfire',
    address: '654 Oak Valley Circle',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-Un7UmmqWbwXmP',
    companyName: 'Trupe',
    address: '74403 Gina Point',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-V5MKC5pTMCSG_',
    companyName: 'Oyondu',
    address: '77 Darwin Terrace',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-V5MKC5pTMCSGa',
    companyName: 'Skinte',
    address: '8 Ilene Way',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-V5MKC5pTMCSGb',
    companyName: 'Nozlet',
    address: '196 Shoshone Street',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-V5MKC5pTMCSGc',
    companyName: 'Bubbletube',
    address: '811 Clemons Way',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-WBJoraHCf3g8o',
    companyName: 'Yamia',
    address: '57854 Golden Leaf Way',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-WBJoraHCf3g8p',
    companyName: 'Jaxnation',
    address: '32 Bunker Hill Crossing',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-WBJoraHCf3g8q',
    companyName: 'Divavu',
    address: '495 Grim Court',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-WBJoraHCf3g8r',
    companyName: 'Voonix',
    address: '6866 Birchwood Terrace',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-WBJoraHCf3g8s',
    companyName: 'Zazio',
    address: '8112 Sauthoff Plaza',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-WBJoraHCf3g8t',
    companyName: 'Skiba',
    address: '62674 Forest Run Point',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-Xq04nNT3hOGov',
    companyName: 'Cogidoo',
    address: '739 Mitchell Avenue',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-YCvafG0xDIv7t',
    companyName: 'Quatz',
    address: '1654 Anniversary Park',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-YCvafG0xDIv7u',
    companyName: 'Topicstorm',
    address: '0 Mandrake Circle',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-YCvafG0xDIv7v',
    companyName: 'Mydeo',
    address: '1 Nobel Hill',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-YCvafG0xDIv7w',
    companyName: 'LiveZ',
    address: '168 Parkside Crossing',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-ZZTtNBMGnDoBd',
    companyName: 'Quaxo',
    address: '9989 Fulton Terrace',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-ZZTtNBMGnDoBe',
    companyName: 'Voomm',
    address: '775 Eliot Road',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-ZZTtNBMGnDoBf',
    companyName: 'Thoughtsphere',
    address: '15754 Duke Trail',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-ZZTtNBMGnDoBg',
    companyName: 'Youtags',
    address: '190 Mcguire Hill',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-ZZTtNBMGnDoBh',
    companyName: 'Oodoo',
    address: '587 Becker Point',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-_fgzi3ovCEUuh',
    companyName: 'Photobug',
    address: '75642 Hoard Circle',
    isSelected: false,
    color: 'black',
  },
  {
    key: '-LOdfe-_fgzi3ovCEUui',
    companyName: 'Mybuzz',
    address: '03455 5th Pass',
    isSelected: false,
    color: 'black',
  },
];

// const foo = [
// 	{
// 		payload: { address: '3 Vidon Pass', companyName: 'Dabvine' },
// 		type: 'value',
// 		prevKey: null,
// 		key: '-LOdfe-QyrvDqDyb-UtQ'
// 	},
// 	{
// 		payload: { address: '654 Oak Valley Circle', companyName: 'Feedfire' },
// 		type: 'value',
// 		prevKey: '-LOdfe-QyrvDqDyb-UtQ',
// 		key: '-LOdfe-Un7UmmqWbwXmO'
// 	},
// 	{
// 		payload: { address: '74403 Gina Point', companyName: 'Trupe' },
// 		type: 'value',
// 		prevKey: '-LOdfe-Un7UmmqWbwXmO',
// 		key: '-LOdfe-Un7UmmqWbwXmP'
// 	},
// 	{
// 		payload: { address: '77 Darwin Terrace', companyName: 'Oyondu' },
// 		type: 'value',
// 		prevKey: '-LOdfe-Un7UmmqWbwXmP',
// 		key: '-LOdfe-V5MKC5pTMCSG_'
// 	},
// 	{
// 		payload: { address: '8 Ilene Way', companyName: 'Skinte' },
// 		type: 'value',
// 		prevKey: '-LOdfe-V5MKC5pTMCSG_',
// 		key: '-LOdfe-V5MKC5pTMCSGa'
// 	},
// 	{
// 		payload: { address: '196 Shoshone Street', companyName: 'Nozlet' },
// 		type: 'value',
// 		prevKey: '-LOdfe-V5MKC5pTMCSGa',
// 		key: '-LOdfe-V5MKC5pTMCSGb'
// 	},
// 	{
// 		payload: { address: '811 Clemons Way', companyName: 'Bubbletube' },
// 		type: 'value',
// 		prevKey: '-LOdfe-V5MKC5pTMCSGb',
// 		key: '-LOdfe-V5MKC5pTMCSGc'
// 	},
// 	{
// 		payload: { address: '57854 Golden Leaf Way', companyName: 'Yamia' },
// 		type: 'value',
// 		prevKey: '-LOdfe-V5MKC5pTMCSGc',
// 		key: '-LOdfe-WBJoraHCf3g8o'
// 	},
// 	{
// 		payload: { address: '32 Bunker Hill Crossing', companyName: 'Jaxnation' },
// 		type: 'value',
// 		prevKey: '-LOdfe-WBJoraHCf3g8o',
// 		key: '-LOdfe-WBJoraHCf3g8p'
// 	},
// 	{
// 		payload: { address: '495 Grim Court', companyName: 'Divavu' },
// 		type: 'value',
// 		prevKey: '-LOdfe-WBJoraHCf3g8p',
// 		key: '-LOdfe-WBJoraHCf3g8q'
// 	},
// 	{
// 		payload: { address: '6866 Birchwood Terrace', companyName: 'Voonix' },
// 		type: 'value',
// 		prevKey: '-LOdfe-WBJoraHCf3g8q',
// 		key: '-LOdfe-WBJoraHCf3g8r'
// 	},
// 	{
// 		payload: { address: '8112 Sauthoff Plaza', companyName: 'Zazio' },
// 		type: 'value',
// 		prevKey: '-LOdfe-WBJoraHCf3g8r',
// 		key: '-LOdfe-WBJoraHCf3g8s'
// 	},
// 	{
// 		payload: { address: '62674 Forest Run Point', companyName: 'Skiba' },
// 		type: 'value',
// 		prevKey: '-LOdfe-WBJoraHCf3g8s',
// 		key: '-LOdfe-WBJoraHCf3g8t'
// 	},
// 	{
// 		payload: { address: '739 Mitchell Avenue', companyName: 'Cogidoo' },
// 		type: 'value',
// 		prevKey: '-LOdfe-WBJoraHCf3g8t',
// 		key: '-LOdfe-Xq04nNT3hOGov'
// 	},
// 	{
// 		payload: { address: '1654 Anniversary Park', companyName: 'Quatz' },
// 		type: 'value',
// 		prevKey: '-LOdfe-Xq04nNT3hOGov',
// 		key: '-LOdfe-YCvafG0xDIv7t'
// 	},
// 	{
// 		payload: { address: '0 Mandrake Circle', companyName: 'Topicstorm' },
// 		type: 'value',
// 		prevKey: '-LOdfe-YCvafG0xDIv7t',
// 		key: '-LOdfe-YCvafG0xDIv7u'
// 	},
// 	{
// 		payload: { address: '1 Nobel Hill', companyName: 'Mydeo' },
// 		type: 'value',
// 		prevKey: '-LOdfe-YCvafG0xDIv7u',
// 		key: '-LOdfe-YCvafG0xDIv7v'
// 	},
// 	{
// 		payload: { address: '168 Parkside Crossing', companyName: 'LiveZ' },
// 		type: 'value',
// 		prevKey: '-LOdfe-YCvafG0xDIv7v',
// 		key: '-LOdfe-YCvafG0xDIv7w'
// 	},
// 	{
// 		payload: { address: '9989 Fulton Terrace', companyName: 'Quaxo' },
// 		type: 'value',
// 		prevKey: '-LOdfe-YCvafG0xDIv7w',
// 		key: '-LOdfe-ZZTtNBMGnDoBd'
// 	},
// 	{
// 		payload: { address: '775 Eliot Road', companyName: 'Voomm' },
// 		type: 'value',
// 		prevKey: '-LOdfe-ZZTtNBMGnDoBd',
// 		key: '-LOdfe-ZZTtNBMGnDoBe'
// 	},
// 	{
// 		payload: { address: '15754 Duke Trail', companyName: 'Thoughtsphere' },
// 		type: 'value',
// 		prevKey: '-LOdfe-ZZTtNBMGnDoBe',
// 		key: '-LOdfe-ZZTtNBMGnDoBf'
// 	},
// 	{
// 		payload: { address: '190 Mcguire Hill', companyName: 'Youtags' },
// 		type: 'value',
// 		prevKey: '-LOdfe-ZZTtNBMGnDoBf',
// 		key: '-LOdfe-ZZTtNBMGnDoBg'
// 	},
// 	{
// 		payload: { address: '587 Becker Point', companyName: 'Oodoo' },
// 		type: 'value',
// 		prevKey: '-LOdfe-ZZTtNBMGnDoBg',
// 		key: '-LOdfe-ZZTtNBMGnDoBh'
// 	},
// 	{
// 		payload: { address: '75642 Hoard Circle', companyName: 'Photobug' },
// 		type: 'value',
// 		prevKey: '-LOdfe-ZZTtNBMGnDoBh',
// 		key: '-LOdfe-_fgzi3ovCEUuh'
// 	},
// 	{
// 		payload: { address: '03455 5th Pass', companyName: 'Mybuzz' },
// 		type: 'value',
// 		prevKey: '-LOdfe-_fgzi3ovCEUuh',
// 		key: '-LOdfe-_fgzi3ovCEUui'
// 	}
// ];
