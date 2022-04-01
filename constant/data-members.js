import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import thang from '../assets/thangntn-member.png';
import y from '../assets/ydld-member.jpg';
import thanh from '../assets/thanhnv-member.jpg';
import vi from '../assets/vihtn-member.jpg';
import loc from '../assets/loctlb-member.jpg';
import nam from '../assets/namtp-member.jpg';

const dataMembers = [
  {
    id: 1,
    imgSrc: thang,
    altText: 'Thang Nguyen Tran Nhat',
    title: 'Thang Nguyen Tran Nhat',
    designation: 'Front-end Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <Facebook fontSize="inherit" />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <Twitter fontSize="inherit" />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <Instagram fontSize="inherit" />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: y,
    altText: 'Y Dao Le Duy',
    title: 'Y Dao Le Duy',
    designation: 'Tester Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <Facebook fontSize="inherit" />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <Twitter fontSize="inherit" />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <Instagram fontSize="inherit" />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: thanh,
    altText: 'Thanh Nguyen Van',
    title: 'Thanh Nguyen Van',
    designation: 'Back-end Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <Facebook fontSize="inherit" />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <Twitter fontSize="inherit" />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <Instagram fontSize="inherit" />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: vi,
    altText: 'Vi Ha Thi Ngoc',
    title: 'Vi Ha Thi Ngoc',
    designation: 'Tester Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <Facebook fontSize="inherit" />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <Twitter fontSize="inherit" />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <Instagram fontSize="inherit" />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: loc,
    altText: 'Loc Tran Le Bao',
    title: 'Loc Tran Le Bao',
    designation: 'Front-end Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <Facebook fontSize="inherit" />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <Twitter fontSize="inherit" />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <Instagram fontSize="inherit" />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: nam,
    altText: 'Nam Tu Phuong',
    title: 'Nam Tu Phuong',
    designation: 'Devops Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <Facebook fontSize="inherit" />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <Twitter fontSize="inherit" />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <Instagram fontSize="inherit" />,
      },
    ],
  },
];

export default dataMembers;
