// // components/MuiSwiperComponent.js
// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import SwiperCore from 'swiper';
// import { Navigation } from 'swiper/modules';
// import { Pagination } from 'swiper/modules';
// // Initialize Swiper modules
// SwiperCore.use([Navigation, Pagination]);

// const MuiSwiperComponent = () => {
//   return (
//     <Box sx={{ width: '100%', maxWidth: 800, margin: 'auto', mt: 5 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Məhsullar
//       </Typography>
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         style={{ paddingBottom: '2rem' }}
//       >
//         <SwiperSlide>
//           <Box textAlign="center">
//             <img src="/images/slide1.png" alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
//             <Typography variant="h6" gutterBottom>
//               DC Power Systems
//             </Typography>
//             <Typography variant="body1">
//               Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable, and flexible DC power systems.
//             </Typography>
//           </Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Box textAlign="center">
//             <img src="/images/slide2.png" alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
//             <Typography variant="h6" gutterBottom>
//               DC Power Systems
//             </Typography>
//             <Typography variant="body1">
//               Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable, and flexible DC power systems.
//             </Typography>
//           </Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Box textAlign="center">
//             <img src="/images/slide3.png" alt="Slide 3" style={{ width: '100%', height: 'auto' }} />
//             <Typography variant="h6" gutterBottom>
//               DC Power Systems
//             </Typography>
//             <Typography variant="body1">
//               Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable, and flexible DC power systems.
//             </Typography>
//           </Box>
//         </SwiperSlide>
//       </Swiper>
//     </Box>
//   );
// };

// export default MuiSwiperComponent;
