import {
  BrandsData,
  BtsData,
  CarouselData,
  CreativeHeroImgData,
  CreativeHeroVideoData,
  CreativeWorkData,
  FeaturedReviewData,
  TeamData,
  TestimonialsData,
} from "@/types";

const distributionName = "https://d5st4psppqx3d.cloudfront.net";

// HOME PAGE DATA
export const landingPageData = {
  design: [
    {
      id: "1",
      src: distributionName + "/Landing+Page/Design/cupples_website_ladznn.jpg",
      badge: "Web Design",
      isVideo: false,
    },
    {
      id: "2",
      src: distributionName + "/Landing+Page/Design/3_dISH_1_tp0sxi.mp4",
      thumbnail:
        distributionName + "/Landing+Page/Design/3_dISH_1_tp0sxi_THUMBNAIL.jpg",
      badge: "Reels",
      isVideo: true,
    },
    {
      id: "3",
      src:
        distributionName +
        "/Landing+Page/Design/black_pearl_branding_ypwjz5.jpg",
      badge: "Branding",
      isVideo: false,
    },
    {
      id: "4",
      src:
        distributionName +
        "/Landing+Page/Design/Ikaika_Motivational_Reel_k6l7dy.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Design/Ikaika_Motivational_Reel_k6l7dy_THUMBNAIL.jpg",
      badge: "Reels",
      isVideo: true,
    },
    {
      id: "5",
      src:
        distributionName + "/Landing+Page/Design/peak_performance_sgqk8g.jpg",
      badge: "Social Media",
      isVideo: false,
    },
    {
      id: "6",
      src:
        distributionName + "/Landing+Page/Design/Shareable_Giveaway_hiz45d.jpg",
      badge: "Social Media",
      isVideo: false,
    },
    {
      id: "7",
      src:
        distributionName +
        "/Landing+Page/Design/Oreo_Reel_super_final_rlocdk.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Design/Oreo_Reel_super_final_rlocdk_THUMBNAIL.jpg",
      badge: "Reels",
      isVideo: true,
    },
  ] as Array<CarouselData>,
  creative: [
    {
      id: "8",
      src: distributionName + "/Landing+Page/Creative/Copy_of_V_mjlm08.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      id: "9",
      src:
        distributionName +
        "/Landing+Page/Creative/Rinse_Content_Final_Version_gk9vl8.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Rinse_Content_Final_Version_gk9vl8_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "10",
      src:
        distributionName +
        "/Landing+Page/Creative/Copy_of_No_Ugly_2_vd5xg1.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      id: "11",
      src:
        distributionName +
        "/Landing+Page/Creative/REVISED_Remarkable_Video_Wide_ozrqog.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/REVISED_Remarkable_Video_Wide_ozrqog_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "12",
      src:
        distributionName + "/Landing+Page/Creative/Copy_of_Jarrah_pujknc.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },

    {
      id: "13",
      src:
        distributionName + "/Landing+Page/Creative/Redbull_Zoomed_gfb6hv.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Redbull_Zoomed_gfb6hv_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "14",
      src:
        distributionName +
        "/Landing+Page/Creative/Greenhill_Seltzers_1_bouwy7.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      id: "15",
      src:
        distributionName + "/Landing+Page/Creative/Kiwiblue_Zoomed_jtmk4o.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Kiwiblue_Zoomed_jtmk4o_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "16",
      src:
        distributionName +
        "/Landing+Page/Creative/NEW_PEAQ_Launch_Video_1_vcfcud.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/NEW_PEAQ_Launch_Video_1_vcfcud_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "17",
      src:
        distributionName +
        "/Landing+Page/Creative/EatKinda_-_Freezer_1.5x_vnwdlp.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      id: "18",
      src: distributionName + "/Landing+Page/Creative/Honey_Soy_1x1_zptjyf.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Honey_Soy_1x1_zptjyf_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "19",
      src:
        distributionName +
        "/Landing+Page/Creative/Goju_Content_Reel_dhbmn7.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Goju_Content_Reel_dhbmn7_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "20",
      src:
        distributionName + "/Landing+Page/Creative/Nev_Reel_Final_rdt49z.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Nev_Reel_Final_rdt49z_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
  ] as Array<CarouselData>,
};

// DESIGN PAGE DATA
export const designMarqueeLeftData = [
  {
    id: "1",
    src: distributionName + "/Design/Marquee+Left/peak_performance_sgqk8g.jpg",
    alt: "Peak Performance",
    isVideo: false,
  },
  {
    id: "2",
    src: distributionName + "/Design/Marquee+Left/lokl_gym_branding_b0kavo.jpg",
    alt: "LOKL Gym",
    isVideo: false,
  },
  {
    id: "3",
    src:
      distributionName + "/Design/Marquee+Left/phillipines_website_o0zb9x.jpg",
    alt: "Philippines Travel Website",
    isVideo: false,
  },
  {
    id: "4",
    src: distributionName + "/Design/Marquee+Left/flanzy_branding_tkpepz.jpg",
    alt: "Flanzy Branding",
    isVideo: false,
  },
] satisfies Array<CarouselData>;

export const designMarqueeRightData = [
  {
    id: "1",
    src:
      distributionName + "/Design/Marquee+Right/fire_social_media_r3lqkm.jpg",
    alt: "Fire social media",
    isVideo: false,
  },
  {
    id: "2",
    src:
      distributionName +
      "/Design/Marquee+Right/Tonkotsu_Ramen_on_Fire_Reel_mpqmrp.mp4",
    thumbnail:
      distributionName +
      "/Design/Marquee+Right/Tonkotsu_Ramen_on_Fire_Reel_mpqmrp_THUMBNAIL.jpg",
    alt: "Tonkotsu Ramen on Fire Reel",
    isVideo: true,
  },
  {
    id: "3",
    src:
      distributionName +
      "/Design/Marquee+Right/black_pearl_social_media_oi1slb.jpg",
    alt: "Black Pearl social media",
    isVideo: false,
  },
  {
    id: "4",
    src:
      distributionName +
      "/Design/Marquee+Right/What_they_know_about_steves_reel_ifxohz.mp4",
    thumbnail:
      distributionName +
      "/Design/Marquee+Right/What_they_know_about_steves_reel_ifxohz_THUMBNAIL.jpg",
    alt: "What they know about steves reel",
    isVideo: true,
  },
  {
    id: "5",
    src:
      distributionName +
      "/Design/Marquee+Right/Ikaika_Motivational_Reel_k6l7dy.mp4",
    thumbnail:
      distributionName +
      "/Design/Marquee+Right/Ikaika_Motivational_Reel_k6l7dy_THUMBNAIL.jpg",
    alt: "Ikaika Motivational Reel",
    isVideo: true,
  },
] satisfies Array<CarouselData>;

export const designCarouselData = [
  {
    id: "1",
    src: distributionName + "/Design/Work/edmund_website_gdnyzr.jpg",
    alt: "Edmund Website",
    badge: "Web Design",
    isVideo: false,
  },
  {
    id: "2",
    src: distributionName + "/Design/Work/phillipines_website_o0zb9x.jpg",
    alt: "Philippines Travel Website",
    badge: "Web Design",
    isVideo: false,
  },
  {
    id: "3",
    src: distributionName + "/Design/Work/Ikaika_Motivational_Reel_k6l7dy.mp4",
    thumbnail:
      distributionName +
      "/Design/Work/Ikaika_Motivational_Reel_k6l7dy_THUMBNAIL.jpg",
    alt: "Ikaika Motivational Reel",
    badge: "Reels",
    isVideo: true,
  },
  {
    id: "4",
    src: distributionName + "/Design/Work/black_pearl_branding_ypwjz5.jpg",
    alt: "Black Pearl Cafe Branding",
    badge: "Branding",
    isVideo: false,
  },
  {
    id: "5",
    src: distributionName + "/Design/Work/uptania_branding_pvkykm.jpg",
    alt: "Uptania Branding",
    badge: "Branding",
    isVideo: false,
  },
  {
    id: "6",
    src: distributionName + "/Design/Work/Oreo_Reel_super_final_rlocdk.mp4",
    thumbnail:
      distributionName +
      "/Design/Work/Oreo_Reel_super_final_rlocdk_THUMBNAIL.jpg",
    alt: "Oreo Reel",
    badge: "Reels",
    isVideo: true,
  },
  {
    id: "7",
    src: distributionName + "/Design/Work/steves_black_sox_bpz5uv.jpg",
    alt: "Steve's Tyre Service",
    badge: "Social Media",
    isVideo: false,
  },
  {
    id: "8",
    src: distributionName + "/Design/Work/3_dISH_1_tp0sxi.mp4",
    thumbnail: distributionName + "/Design/Work/3_dISH_1_tp0sxi_THUMBNAIL.jpg",
    alt: "3 Dish",
    badge: "Reels",
    isVideo: true,
  },
  {
    id: "9",
    src: distributionName + "/Design/Work/peak_performance_sgqk8g.jpg",
    alt: "Peak Performance",
    badge: "Social Media",
    isVideo: false,
  },
  {
    id: "10",
    src:
      distributionName +
      "/Design/Work/What_they_know_about_steves_reel_ifxohz.mp4",
    thumbnail:
      distributionName +
      "/Design/Work/What_they_know_about_steves_reel_ifxohz_THUMBNAIL.jpg",
    alt: "What they know about Steve's Reel",
    badge: "Reels",
    isVideo: true,
  },
  {
    id: "11",
    src: distributionName + "/Design/Work/Good_earth_tours_Branding_zjlxmz.jpg",
    alt: "Good Earth Tours Branding",
    badge: "Branding",
    isVideo: false,
  },
  {
    id: "12",
    src: distributionName + "/Design/Work/black_pearl_social_media_oi1slb.jpg",
    alt: "Black Pearl Social Media",
    badge: "Social Media",
    isVideo: false,
  },
  {
    id: "13",
    src: distributionName + "/Design/Work/Shareable_Giveaway_hiz45d.jpg",
    alt: "Black Pearl Shareable Giveaway",
    badge: "Social Media",
    isVideo: false,
  },
] satisfies Array<CarouselData>;

// CREATIVE PAGE DATA
export const creativeHeroData = {
  video: [
    {
      id: "1",
      src:
        distributionName +
        "/Creative/Hero/video/Eatkinda_Draft_6_Latest_Final_1_b2dnri.mp4",
      thumbnail:
        distributionName + "/Creative/Hero/video/EatKinda_TN_yclerg.jpg",
    },
  ] satisfies Array<CreativeHeroVideoData>,
  images: [
    {
      id: "1",
      src:
        distributionName + "/Creative/Hero/EatKinda_-_Freezer_1.5x_vnwdlp.jpg",
      alt: "EatKinda Freezer",
    },
    {
      id: "2",
      src:
        distributionName +
        "/Creative/Hero/EatKinda_-_Available_Woowlorths_Final_1.5x_zfnn1v.jpg",
      alt: "EatKinda available at Woolworths",
    },
  ] satisfies Array<CreativeHeroImgData>,
};

export const creativeWorkData = [
  {
    id: "1",
    srcHighQuality:
      distributionName +
      "/Creative/Work/RemarkableCream/REVISED_Remarkable_Video_Wide_ozrqog.mp4",
    src:
      distributionName +
      "/Creative/Work/RemarkableCream/REVISED_Remarkable_Video_Wide_ozrqog_LOWRES.mp4",
    thumbnail:
      distributionName +
      "/Creative/Work/RemarkableCream/Remarkable_Cream_TN_ouqltl.jpg",
    size: "large",
    client: "Remarkable Cream",
    campaign: "Crafted by nature, perfected by tradition",
  },
  {
    id: "2",
    srcHighQuality:
      distributionName + "/Creative/Work/KiwiBlue/Kiwiblue_Zoomed_jtmk4o.mp4",
    src:
      distributionName +
      "/Creative/Work/KiwiBlue/Kiwiblue_Zoomed_jtmk4o_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/KiwiBlue/Kiwi_Blue_NT_qutbbd.jpg",
    size: "small",
    client: "Kiwi Blue",
    campaign: "Out of the blue",
  },
  {
    id: "3",
    srcHighQuality:
      distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
    src:
      distributionName +
      "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
    size: "small",
    client: "Goju",
    campaign: "Need some pep in your step?",
  },
  {
    id: "4",
    srcHighQuality:
      distributionName +
      "/Creative/Work/Innerbloom/Innerbloom_Zoomed_kozcl5.mp4",
    src:
      distributionName +
      "/Creative/Work/Innerbloom/Innerbloom_Zoomed_kozcl5_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Innerbloom/Innerbloom_TN_r25fo4.jpg",
    size: "small",
    client: "Innerbloom",
    campaign: "My only one",
  },
  {
    id: "9",
    srcHighQuality:
      distributionName +
      "/Creative/Work/Eatkinda/Eatkinda_Draft_6_Latest_Final_1_b2dnri.mp4",
    src:
      distributionName +
      "/Creative/Work/Eatkinda/Eatkinda_Draft_6_Latest_Final_1_b2dnri_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Eatkinda/EatKinda_TN_yclerg.jpg",
    size: "large",
    client: "Eatkinda",
    campaign: "Kinda different, totally delicious",
  },

  {
    id: "10",
    srcHighQuality:
      distributionName + "/Creative/Work/HoneySoy/Honey_Soy_1x1_zptjyf.mp4",
    src:
      distributionName +
      "/Creative/Work/HoneySoy/Honey_Soy_1x1_zptjyf_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/HoneySoy/Honey_Soy_TN_kscrr3.jpg",
    size: "medium",
    client: "Black Pearl",
    campaign: "Glazing perfection",
  },
  {
    id: "11",
    srcHighQuality:
      distributionName + "/Creative/Work/SnowyG/Snowy_G_1x1_fxji0j.mp4",
    src:
      distributionName + "/Creative/Work/SnowyG/Snowy_G_1x1_fxji0j_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/SnowyG/Snowy_G_TN_miougx.jpg",
    size: "medium",
    client: "Black Pearl",
    campaign: "It goes beyond the mayo",
  },
  {
    id: "12",
    srcHighQuality:
      distributionName +
      "/Creative/Work/Rinse/Rinse_Content_Final_Version_gk9vl8.mp4",
    src:
      distributionName +
      "/Creative/Work/Rinse/Rinse_Content_Final_Version_gk9vl8_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Rinse/Rinse_TN_nuwajl.jpg",
    size: "large",
    client: "Rinse Vodka",
    campaign: "Because one is not enough",
  },
  {
    id: "13",
    srcHighQuality:
      distributionName + "/Creative/Work/Redbull/Redbull_Zoomed_gfb6hv.mp4",
    src:
      distributionName +
      "/Creative/Work/Redbull/Redbull_Zoomed_gfb6hv_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Redbull/Redbull_TN_eqmilw.jpg",
    size: "small",
    client: "Red Bull",
    campaign: "The new wings in town",
  },
  {
    id: "14",
    srcHighQuality:
      distributionName + "/Creative/Work/Charlies/Charlie_Zoomed_nuafy8.mp4",
    src:
      distributionName +
      "/Creative/Work/Charlies/Charlie_Zoomed_nuafy8_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Charlies/Charlies_TN_xbihz7.jpg",
    size: "small",
    client: "Charlie's",
    campaign: "Shake up the good stuff!",
  },
  {
    id: "15",
    srcHighQuality:
      distributionName + "/Creative/Work/Live/Live_Content_Reel_npbkph.mp4",
    src:
      distributionName +
      "/Creative/Work/Live/Live_Content_Reel_npbkph_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Live/Live_TN_zvkmkn.jpg",
    size: "small",
    client: "Live+",
    campaign: "Electrified living",
  },
  {
    id: "16",
    srcHighQuality: "/NYXIS.png",
    src: distributionName + "/Creative/Work/Kmart/KMART_KWTA_ultgma.mp4",
    thumbnail: distributionName + "/Creative/Work/Kmart/KMART_TN_fnsr1v.jpg",
    size: "medium",
    client: "KMart",
    campaign: "Wishing tree appeal",
  },
  {
    id: "17",
    srcHighQuality:
      distributionName + "/Creative/Work/Ball/Ball_Animation_1x1_yp7ku1.mp4",
    src:
      distributionName +
      "/Creative/Work/Ball/Ball_Animation_1x1_yp7ku1_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Ball/3D_Ball_TN_nskugx.jpg",
    size: "medium",
    client: "3D Ball",
    campaign: "Infinite alignment",
  },
] satisfies Array<CreativeWorkData>;

export const testimonialsData = [
  {
    id: "1",
    review:
      "Their professionalism and caring attitude really fits into our core values at Steve's, and they have become an awesome fit for us. They have truly gone above and beyond when it comes to promoting our brand and working with us, to ensure that we push out great content.They have enabled our brand over social media to reach heights that we thought were unachievable.",
    name: "Steven Deans",
    role: "Owner of Steve's Tyre Service & Auto Care",
  },
  {
    id: "2",
    review:
      "Excellent team to deal with. They have collaborated with us on a lot of aspects including social media, ads, and a fresh re-brand, this has enabled us to become more recognizable as we aim to further expand to new locations. Most importantly they enjoy what they do.",
    name: "Paul Leang",
    role: "Director of Formosa Pacific Limited",
  },
  {
    id: "3",
    review:
      "Highly recommend this team of young professionals. You can tell they put their heart and passion into their work - it is just quality. They hit deadlines, communication is very efficient and prompt. NYXIS is extremely responsive to feedback and they go above and beyond to deliver value.",
    name: "Keonimana Shigematsu",
    role: "Director of IKAIKA",
  },
  {
    id: "4",
    review:
      "We are thankful for the splendid content, amazing brand identity, and beautifully interactive website. NYXIS has been with us since day one and we continue to find use for their services on an ongoing basis for video ad campaigns. They truly served all our creative needs. Highly Recommended!",
    name: "Aden Fareh",
    role: "Public Relations at Cutly",
  },
  {
    id: "5",
    review:
      "Great company to deal with. Made everything easy to understand, and worked with us around our busy schedule. Always bright, bubbly, friendly, and willing to lend a hand if we got stuck. Not to mention that they customized our website to develop something that truly reflected what we wanted for our business. We have no hesitations in recommending NYXIS.",
    name: "Sean Cupples",
    role: "Director of Cupples Construction",
  },
  {
    id: "6",
    review:
      "We engaged NYXIS for the animation of a corporate project for one of Australia's well-known brands, and it was an absolute pleasure. They comprehended the brief exceptionally well and executed it with precision. The client was extremely satisfied!",
    name: "Arielle Thomas",
    role: "CinemaThom",
  },
] satisfies Array<TestimonialsData>;

// OTHER DATA FOR DESIGN & CREATIVE PAGES
export const featuredReviewData = {
  design: {
    review:
      "Excellent team to deal with. They have collaborated with us on a lot of aspects including social media, ads, and a fresh re-brand, this has enabled us to become more recognizable as we aim to further expand to new locations. Most importantly they enjoy what they do.",
    name: "Paul Leang, Director of Formosa Pacific Limited",
    src: distributionName + "/Design/Feat_Review/Paul_fbfqqr.png",
  } satisfies FeaturedReviewData,
  creative: {
    review:
      "We engaged NYXIS for the animation of a corporate project for one of Australia's well-known brands, and it was an absolute pleasure. They comprehended the brief exceptionally well and executed it with precision. The client was extremely satisfied!",
    name: "Arielle Thomas, CinemaThom",
    src: distributionName + "/Creative/Feat_Review/Arielle_hwmabn.png",
  } satisfies FeaturedReviewData,
};

export const brandsData = {
  design: [
    {
      id: "1",
      brand: "SELF",
      src: "/nyxis.png",
    },
    {
      id: "2",
      brand: "Cutly",
      src: "/images/brandImages/Cutly_logo.svg",
      maxWidth: 110,
      width: "85%",
    },
    {
      id: "3",
      brand: "Juluwarlu",
      src: "/images/brandImages/Juluwarlu_logo.svg",
      maxWidth: 137,
      width: "95%",
    },
    {
      id: "4",
      brand: "Illuminix",
      src: "/images/brandImages/Illuminix_logo.svg",
      maxWidth: 145,
      width: "118%",
    },
  ] satisfies Array<BrandsData>,

  creative: [
    {
      id: "1",
      brand: "Kmart",
      src: "/images/brandImages/Kmart_Australia_logo.svg",
    },
    {
      id: "2",
      brand: "PEAQ",
      src: "/images/brandImages/Peaq_logo.svg",
      maxWidth: 110,
      width: "83%",
    },
    {
      id: "3",
      brand: "Nibblish",
      src: "/images/brandImages/Nibblish_logo.svg",
      maxWidth: 116,
      width: "95%",
    },
    {
      id: "4",
      brand: "Greenhill Seltzers",
      src: "/images/brandImages/Greenhill_logo.svg",
      maxWidth: 125,
    },
  ] satisfies Array<BrandsData>,
};

export const teamData = {
  design: [
    {
      id: "1",
      name: "Reyaham Shrestha",
      src: "/reyaham.jpg",
      placeholder: "/reyaham.jpg",
      position: "Creative Director",
      email: "bhuwanshrestha475@gmail.com",
    },
    {
      id: "2",
      name: "Bishal Bogati",
      src: "/bishal.jpg",
      placeholder: "/bishal.jpg",
      position: "Graphics Designer",
      email: "bogatibishal401@gmail.com",
    },
  ] satisfies Array<TeamData>,
  creative: [
    {
      id: "1",
      name: "Sunbright Thamsuhang",
      src: "/sunbright.jpg",
      placeholder: "/jyoti.jpg",
      position: "Graphics Designer",
      email: "sunbright@gmail.com",
    },
    {
      id: "2",
      name: "Prashant Nepali",
      src: "/prashantnepali.jpg",
      placeholder: "/prashantnepali.jpg",
      position: "Promotional Video | Professional Shoot",
      email: "PVPS@gmail.com",
    },
    {
      id: "3",
      name: "Jyoti Thapa",
      src: "/jyoti.jpg",
      placeholder: "/jyoti.jpg",
      position: "UI UX Expert",
      email: "joti@gmail.com",
    },
  ] satisfies Array<TeamData>,
};

export const btsData = {
  design: [
    {
      id: "1",
      src: "/NYXIS.png",
      placeholder: "/NYXIS.png",
      alt: "LOGO",
      isVideo: false,
    },
  ] satisfies Array<BtsData>,
  creative: [
    {
      id: "1",
      src: "/NYXIS.png",
      placeholder: "/NYXIS.png",
      alt: "LOGO",
      isVideo: false,
    },
  ] satisfies Array<BtsData>,
};
