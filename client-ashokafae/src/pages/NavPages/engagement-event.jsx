// import React from 'react';
// import { Heart, Calendar, Package, Star, Phone } from 'lucide-react';

// function EngagementEvent() {

//     const engagementImages = [
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668113/Wedding_Spring_fboig5.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668113/zora_zora3008_-_Profile___Pinterest_pfddhd.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668112/Wedding_Vendors_Services_and_Venues___Inside_Weddings_eb9fnj.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668112/undefined_bhjjf2.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668111/Wedding_Decor_Punjabi_Wedding_Blush_Pink_Rose_Gold_Elegant_Elite_kbjhod.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668108/Top_25_Wedding_Stage_Decoration_Ideas_for_your_2021_Indian_Marriage_t2ho5k.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668108/V_Decors_And_Events___Pondicherry__Wedding___Reception_ve26ki.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668108/Stage_bottom_and_side_flowers_bbbsso.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668108/Wedding_backdrop_sircle_arch_igsrux.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668106/RK_Wedding_Decor_sz2gxq.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668104/Stage_Idea_1_gm6vor.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668104/The_details_are_not_the_design__They_make_the_design_bpmp4x.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668103/Reception_backdrop_cw2tcs.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668101/Stage_decoration_pdzvt8.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668101/Spring_Wedding_wedding_weddingarch_wedding_backdrop_springwedding_summerwedding_qshxcc.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668099/Rustic_yet_chic_backdrop_en1kte.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668099/Punakawan_decoration_im5oho.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668098/Reception_decor_1_mx0sm4.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668096/RECEPTION_ex7d0h.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668094/Reception_Or_engagement_event_mjepfo.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668094/Reception_Or_engagement_event_mjepfo.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668090/Portfolio_of_Just_Rajanish_Fusion_Flowers___Wedding_Decorators_in_Bangalore_-_Wedmegood_v0iwml.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668090/Photo_By_The_Glitttering_Arc_-_Decorators_aaitma.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668090/Pastel_Hues_for_Your_Reception_m1eutm.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668088/Lakeshore_Convention_Centre_Adamson_Estate_Wedding_u2db1p.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668087/Majestic_Gold_White_Wedding_Stage___Indian_D%C3%A9cor_at_Its_Finest_iwiusg.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668087/New_colection_of_arfa_decor_qrjpo7.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668087/La_Primavera_Event_Space_Humber_Arboretum_Afghani-Pakistani_Wedding_lry8z8.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668085/Fairytale_Wedding_Decor_wlzf4y.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668082/Kenza_Creations_j4jyqe.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668081/f983cc1e-cf75-4034-95c5-dd7cdba64c33_rnvcug.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668080/Engagement_Decors_rgosho.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668077/Elegant_and_lush_floral_decor_set_the_stage_for_kmhxrk.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668076/Elegant_stage_ply2gh.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668076/Engagement_Decor_2024_hx8hmi.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668076/Enchanted_-_Suhaag_Garden_gpsbxg.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668076/Elegant_Mandap_with_Floral_Arch_wlqhoo.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668076/ed1ed8c5-49a6-4c99-91ed-c9c7f603ee24_kww6mk.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668072/effbad55-f3bb-4f68-8940-2f0270866e66_xraqx8.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668071/EDK_EVENTS_wccng2.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668069/Download_Wedding_stage_decoration_background_inside_the_building_with_elegant_and_beautiful_flower_decorations_for_free_uinyg9.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668068/ebc7b046-c2da-48e8-a44d-75f87d2509e5_wxkl9w.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668068/e8172a20-a476-444b-b9d3-2eb2578c91c8_n5pvbp.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668068/e6941d92-0e0c-4ddb-bd30-3bdcdbf7cfa3_qmc8oy.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668068/ea3f9d4f-0de0-4c98-888f-23aee703e9da_vof4fu.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668064/e473dfe5-3738-4137-9849-4ae05bf786a3_mcdli4.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668063/e16bc98e-2386-4157-91cb-ebc6ee2ca42f_x3mwjf.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668062/download_38_dld6dc.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668061/download_34_jado7h.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668061/e9f15ab1-43df-4093-8f5c-9322d06e58cf_l0ckwl.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668059/download_39_ujcvzq.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668058/download_41_r59rmv.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668058/download_40_oekprq.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668057/download_36_jojajs.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668053/download_35_s0ggzp.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668053/download_37_qqfzan.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668053/download_29_wmotgk.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668052/download_25_qrej8v.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668050/download_30_vvzt9d.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668050/download_33_gih51i.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668050/download_32_jntrod.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668046/download_18_kcwisv.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668046/download_18_kcwisv.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668046/download_27_l73zci.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668045/download_17_r83mah.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668045/download_24_tl6bdx.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668043/download_26_yiyt3x.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668042/download_19_t2f5bn.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668038/download_16_m0wjy9.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668037/download_22_bicov7.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668037/download_23_euajib.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668033/download_21_eaalzv.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668032/download_20_xwfxrz.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668030/download_15_ikqjgt.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668029/download_13_flr2gg.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668027/download_14_qgyel2.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668025/d3cb4aef-7bd2-4a2f-9944-7250327252b7_hqigsj.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668025/download_12_oavww0.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668025/c945abae-445c-43f9-a9f6-9ce53173645c_g8xiof.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668025/a09bfef2-353f-40f7-bc8b-5555c1999ed7_xayn1n.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668024/Chase_Center_on_the_Riverfront_Delaware_Indian_Wedding___Viha_Vishal_sjmqaq.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668025/a09bfef2-353f-40f7-bc8b-5555c1999ed7_xayn1n.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668024/Chase_Center_on_the_Riverfront_Delaware_Indian_Wedding___Viha_Vishal_sjmqaq.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668020/DIY_-_Unique_way_to_drape_backdrops_part_2_oxkhb0.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668019/Backdrop_kb26le.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668018/betrothal_bride_groom_cnhzkk.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668017/Angela_Amar_-_Nov_4th_txcj0k.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668016/Awaj_Decorators_-Wedding_stage_backdrop_nwsaqi.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668014/a6d3f55f-4efc-45c1-9354-3c36d2c139a1_grvzhm.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668013/a5b61248-e933-4161-8444-06e5a0d67bbe_zqrkk7.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668012/A_Touch_of_Geometric_Gold_Splendour_knntbm.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668011/12071ec7-04e8-41a9-a16a-05ccc3c71808_ref9ps.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668010/2769145c-d6b2-40be-a82c-257182406518_brkm6y.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668008/6565636a-fc98-42fa-913a-d499904fd353_kzejb7.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668007/4662b426-e796-4aac-be83-2a7f145e7925_gl9u7a.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668006/719bb5d3-7493-43a3-9988-a1987ffbbc4c_azyfpn.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668005/98f52498-eb97-4653-9088-910221200707_azgex2.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668003/46d7d050-9d69-4403-9b82-5ddc140b4616_awrww6.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668002/035b6597-177f-423f-9465-cf064dc3b84e_moi5x6.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668001/17_Grand_Stages_for_Wedding___Make_Your_Wedding_Day_Special_hx4wqf.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668001/30d0d168-ae3d-47bb-afae-207fadac7dad_yazhsq.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743668000/034bf7eb-4be4-4827-97f1-5a361afa3be3_uumew8.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743667999/23face84-5062-437d-a092-643791587f8b_iyqh8e.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743667998/3bae7c92-6776-4403-81e2-44b31821dac3_fjg40d.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743667997/20_Beautiful_Indian_Wedding_Stage_Decoration_Ideas_2024_1_e066u2.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743667992/6f92c8de-d31d-4aa3-a6c7-e06711680991_vndbs8.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743667992/9f2e80ce-8ef7-44f0-a6e0-7438473ee49d_ubk9ud.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743667991/2c77d505-7ff5-4744-8094-4f69708b595e_bepnzw.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743667991/directors_of_decors_engagement_bettertogether_1_s89lhx.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743667990/06dbbb9d-385d-4b88-a956-e1903a651213_vf7nwd.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743667988/6a1e321e-0041-4c0c-a9ac-df71638c9d07_piu44w.jpg",
//         "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743667988/1pc_Multipurpose_Photography_Backdrop_Floral_Yellow_Curtains_For_Wedding_Bridal_Shower_Reception_Birthday_Festival_Decorations_Spring_Summer_General_Use_Party_Background_Without_Electricity_dxndwo.jpg"
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
//             {/* Hero Section */}
//             {/* <div className="relative h-[600px]">
//                 <img
//                     src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80"
//                     alt="Engagement Celebration"
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30">
//                     <div className="container mx-auto px-4 h-full flex items-center">
//                         <div className="max-w-2xl text-white">
//                             <h1 className="text-5xl font-bold mb-4">
//                                 Begin Your Forever Story
//                             </h1>
//                             <p className="text-xl mb-8">
//                                 Make your engagement special with our perfectly curated celebration packages
//                             </p>
//                             <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition duration-300">
//                                 Plan Your Engagement
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}

//             <div className="relative h-[400px] min-w-full mb-6">
//                 <img
//                     src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80"
//                     alt="Engagement Celebration"
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50">
//                     <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
//                         <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
//                             Begin Your Forever Story
//                         </h1>
//                         <p className="text-xl text-gray-200 max-w-2xl text-center">
//                             Make your engagement special with our perfectly curated celebration packages                        </p>
//                         <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition duration-300 mt-6 cursor-pointer">
//                             Plan Your Engagement
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#007F5F] my-16">
//                 Engagement Celebration Gallery
//             </h2>
//             <div class="grid grid-cols-2 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//                 {engagementImages.map((image, index) => (
//                     <div className="bg-green-200  rounded-lg shadow-lg">
//                         <img
//                             src={image} // Replace with your actual image source
//                             alt="Baby Shower"
//                             className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-md"
//                         />
//                         <div className="flex justify-between items-center px-2 py-3">
//                             <button className="cursor-pointer border-2 border-secondary text-secondary hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg shadow-md">
//                                 Book Now
//                             </button>
//                             <Heart className="text-red-500 w-6 h-6 cursor-pointer" />
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Features Section */}
//             <div className="py-20 bg-white">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//                         Why Choose Our Engagement Services?
//                     </h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         <div className="text-center p-6">
//                             <Heart className="w-12 h-12 text-purple-500 mx-auto mb-4" />
//                             <h3 className="text-xl font-semibold mb-2">Romantic Settings</h3>
//                             <p className="text-gray-600">
//                                 Create the perfect atmosphere for your special moment
//                             </p>
//                         </div>
//                         <div className="text-center p-6">
//                             <Package className="w-12 h-12 text-purple-500 mx-auto mb-4" />
//                             <h3 className="text-xl font-semibold mb-2">Complete Packages</h3>
//                             <p className="text-gray-600">
//                                 Everything you need for a memorable engagement
//                             </p>
//                         </div>
//                         <div className="text-center p-6">
//                             <Star className="w-12 h-12 text-purple-500 mx-auto mb-4" />
//                             <h3 className="text-xl font-semibold mb-2">Expert Planning</h3>
//                             <p className="text-gray-600">
//                                 Professional team to handle every detail
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* Contact Section */}
//             <div className="py-20 bg-white">
//                 <div className="container mx-auto px-4">
//                     <div className="max-w-2xl mx-auto text-center">
//                         <h2 className="text-3xl font-bold mb-8 text-gray-800">
//                             Ready to Plan Your Engagement?
//                         </h2>
//                         <p className="text-gray-600 mb-8">
//                             Contact us today to start planning your perfect engagement celebration
//                         </p>
//                         <div className="flex justify-center space-x-4">
//                             <button className="flex items-center bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300">
//                                 <Phone className="w-5 h-5 mr-2" />
//                                 Contact Us
//                             </button>
//                             <button className="flex items-center bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition duration-300">
//                                 <Calendar className="w-5 h-5 mr-2" />
//                                 Book Consultation
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EngagementEvent;

import React from 'react';
import EventCategoryPage from './EventCategoryPage';
import { Diamond, CalendarHeart, PartyPopper } from 'lucide-react';

const engagementFeatures = [
    {
        icon: Diamond,
        title: 'Sparkling Moments',
        description: 'Capture the magic of your engagement with stunning settings.',
    },
    {
        icon: CalendarHeart,
        title: 'Custom Plans',
        description: 'Tailor-made packages for your unique love story.',
    },
    {
        icon: PartyPopper,
        title: 'Joyful Celebrations',
        description: 'Create lasting memories with friends and family.',
    },
];

export default function EngagementEvent() {
    return (
        <EventCategoryPage
            category="Engagement"
            heroImage="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80"
            title="Begin Your Forever Story"
            subtitle="Make your engagement special with our perfectly curated celebration packages"
            buttonText="Plan Your Engagement"
            featureList={engagementFeatures}
        />
    );
}
