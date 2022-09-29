// import React, { useRef } from "react";
// import { Box } from "@mui/system";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, EffectFade } from "swiper";

// import "swiper/css";

// const CustomSwiper = () => {
//   const styles = {
//     mySwiper: {
//       width: "100%",
//     },

//     swiperSlide: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     swiperSlideImage: {
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//     },
//   };
//   return (
//     <>
//       <Box className="container">
//         <Swiper
//           modules={[Pagination, Navigation, EffectFade]}
//           navigation
//           speed={800}
//           slidesPerView={1}
//           loop
//           className={styles.mySwiper}
//           spaceBetween={30}
//           loopFillGroupWithBlank={true}
//           pagination={{
//             clickable: true,
//           }}
//           style={styles.mySwiper}
//         >
//           <SwiperSlide style={styles.SwiperSlides}>
//             <img
//               style={styles.swiperSlideImage}
//               src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1d707f4c17a7a8c2ea7b29d1fd0bd065a518ea38_1663443919.gif?x-oss-process=image"
//             />
//           </SwiperSlide>
//           <SwiperSlide style={styles.SwiperSlides}>
//             <img
//               style={styles.swiperSlideImage}
//               src="https://dkstatics-public.digikala.com/digikala-adservice-banners/2be2a332d73ab52b41437354e919453079104e3b_1663664273.jpg?x-oss-process=image/quality,q_95"
//             />
//           </SwiperSlide>
//           <SwiperSlide style={styles.SwiperSlides}>
//             <img
//               style={styles.swiperSlideImage}
//               src="https://dkstatics-public.digikala.com/digikala-adservice-banners/f4f4c8e283eb1dc9debdbad681ca9880bcff5727_1662726815.jpg?x-oss-process=image/quality,q_95"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </Box>
//     </>
//   );
// };

// export default CustomSwiper;

import React from "react";
import { Box } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function CostumSwiper() {
  const styles = {
    mySwiper: {
      width: "100%",
    },

    swiperSlide: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    swiperSlideImage: {
      width: "100%",
      height: "400px",
      objectFit: "cover",
    },
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade]}
        effect={"fade"}
        speed={800}
        style={styles.mySwiper}
      >
        <SwiperSlide component={Box} style={styles.swiperSlide}>
          <img
            style={styles.swiperSlideImage}
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1d707f4c17a7a8c2ea7b29d1fd0bd065a518ea38_1663443919.gif?x-oss-process=image"
          />
        </SwiperSlide>
        <SwiperSlide component={Box} style={styles.swiperSlide}>
          <img
            style={styles.swiperSlideImage}
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/2be2a332d73ab52b41437354e919453079104e3b_1663664273.jpg?x-oss-process=image/quality,q_95"
          />
        </SwiperSlide>
        <SwiperSlide component={Box} style={styles.swiperSlide}>
          <img
            style={styles.swiperSlideImage}
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/f4f4c8e283eb1dc9debdbad681ca9880bcff5727_1662726815.jpg?x-oss-process=image/quality,q_95"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CostumSwiper;
