import { BiPalette } from 'react-icons/bi';
import { MdWeb, MdAutorenew } from 'react-icons/md';
import { GiLipstick } from 'react-icons/gi';
import { FaSuitcaseRolling } from 'react-icons/fa';
import { HiChartBar } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';

import { HOME_PATH } from './../features/home/constants/home.paths';

export const menubar = [
  {
    title: '',
    cate: '',
    items: [
      {
        id: 'id_1',
        navigationTitle: 'Trang chủ',
        path: HOME_PATH.HOME,
        icon: <AiOutlineHome />,
      },
    ],
  },
  {
    title: '',
    cate: 'Các chuyên ngành',
    items: [
      {
        id: 'id_1',
        navigationTitle:'Công nghệ thông tin',
        path: '/cong-nghe-thong-tin/1',
        icon: <MdWeb />,
      },
      {
        id: 'id_2',
        navigationTitle: 'Thiết kế đồ họa',
        path: '/thiet-ke-do-hoa/3',
        icon: <BiPalette />,
      },
      {
        id: 'id_kttd',
        navigationTitle: 'Kinh tế kinh doanh',
        path: '/kinh-te-kinh-doanh/2',
        icon: <HiChartBar />,
      },
      {
        id: 'id_3',
        navigationTitle: 'Mĩ phẩm làm đẹp',
        path: '/my-pham-lam-dep/5',
        icon: <GiLipstick />,
      },
      {
        id: 'id_4',
        navigationTitle: 'Cơ khí tự động hóa',
        path: '/co-khi-tu-dong-hoa/4',
        icon: <MdAutorenew />,
      },
      {
        id: 'id_5',
        navigationTitle: 'Du lịch - Khách sạn - Nhà hàng',
        path: '/du-lich-nha-hang-khach-sạn/6',
        icon: <FaSuitcaseRolling />,
      },
    ],
  },
  {
    title: '',
    cate: '',
    items: [
      {
        id: 'id_1',
        navigationTitle: 'Giới thiệu',
        path: '',
        icon: <BsQuestionCircle />,
      },
    ],
  },
];
