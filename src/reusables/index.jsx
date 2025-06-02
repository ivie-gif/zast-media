// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import Promotion from "../assets/promo.jpg";
// import Transaction from "../assets/transaction.jpg";
// import Sms from "../assets/sms.jpg";
// import ShortCode from "../assets/short-code.jpg";
// import Promotional from "../assets/promotion.jpg";
// import Image6 from "../assets/customImg6.jpg";
// import Image7 from "../assets/customImg7.jpg";
// import Image8 from "../assets/customImg8.jpg";
// import Image9 from "../assets/customImg9.jpg";
// import Image10 from "../assets/customImg10.jpg";
// import Image11 from "../assets/customImg11.jpg";

// export default function WovenImageList() {
//   return (
//     <ImageList sx={{ width: 350, t: 20 }} variant="masonry" cols={3} gap={8}>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
//             src={`${item.img}?w=161&fit=crop&auto=format`}
//             alt={item.title}
//             loading="lazy"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }

// const itemData = [
//   {
//     img: Promotion,
//     title: 'Bed',
//   },
//   {
//     img: Transaction,
//     title: 'Kitchen',
//   },
//   {
//     img: Sms,
//     title: 'Sink',
//   },
//   {
//     img: ShortCode,
//     title: 'Books',
//   },
//   // {
//   //   img: Promotional,
//   //   title: 'Chairs',
//   // },
//   // {
//   //   img: Image6,
//   //   title: 'Candle',
//   // },
//   // {
//   //   img: Image7,
//   //   title: 'Laptop',
//   // },
//   // {
//   //   img: Image8,
//   //   title: 'Laptop',
//   // },
//   // {
//   //   img: Image9,
//   //   title: 'Laptop',
//   // },
// //   {
// //     img: Image10,
// //     title: 'Laptop',
// //   },
// //   {
// //     img: Image11,
// //     title: 'Laptop',
// //   },
 
// ];



import * as React from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';
import Promotion from "../assets/promo.jpg";
import Transaction from "../assets/transaction.jpg";
import Sms from "../assets/sms.jpg";
import ShortCode from "../assets/short-code.jpg";
import Promotional from "../assets/promotion.jpg";
import Image6 from "../assets/customImg6.jpg";
import Image7 from "../assets/customImg7.jpg";
import Image8 from "../assets/customImg8.jpg";
import Image9 from "../assets/customImg9.jpg";
import Image10 from "../assets/customImg10.jpg";
import Image11 from "../assets/customImg11.jpg";

const itemData = [
  { img: Promotion, title: 'Promotion' },
  { img: Transaction, title: 'Transaction' },
  { img: Sms, title: 'Sms' },
  { img: ShortCode, title: 'ShortCode' },
  { img: Promotional, title: 'Promotional' },
  { img: Image6, title: 'Image6' },
  { img: Image7, title: 'Image7' },
  { img: Image8, title: 'Image8' },
  { img: Image9, title: 'Image9' },
  { img: Image10, title: 'Image10' },
  // { img: Image11, title: 'Image11' },
];

export default function WovenImageList() {
  return (
    <ImageList
      cols={3}
      gap={8}
      sx={{
        width: '50%',
        height: '50%',
        overflow: 'hidden',
        m: 0,
        p: 2,
      }}
    >
      {itemData.map((item, index) => (
        <ImageListItem
          key={index}
          sx={{
            width: 90,
            height: 90,
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
