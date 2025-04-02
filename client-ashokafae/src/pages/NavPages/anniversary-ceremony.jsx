import React from 'react';
import { Calendar, Phone, Heart } from 'lucide-react';

function AnniversaryCeremony() {

    const anniversaryImages = [
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324139/Women_s_Men_s_Clothing_Shop_Online_Fashion_sro8us.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324139/Wedding_stage_1_qkfblt.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324139/White_Gold_Balloons_Garland_Arch_Kit_Chorme_Gold_Metal_Polka_Dot_Latex_Balloons_Wedding_Birthday_Baby_Shower_Party_Decorations_jup7yy.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324139/White_and_Gold_Balloon_Garland_Birthday_Party_Decorations___Wedding___Baby_Shower_Layout_Arch_Set_Gold_and_White_Party_Supplies_dauvc0.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324138/wedding_decors_nt94je.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324138/Wedding_Anniversary_Backdrop_Decor_bpfy4b.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324137/top_balloons_x1mohj.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324130/sara_cutewitch12_-_Profile___Pinterest_pmfhud.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324130/Today_Tomorrow_Always__Celebrating_25th_anniversary_making_their_memories_mesmerizing_beciwx.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324130/Plan_Your_Suprise_Anniversary_with_taji_events_wbgobr.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324129/Over_The_Table_Rod_Stand_with_Clamps_Adjustable_47_-100_Length_Black_Metal_Balloon_Table_Arch_Decoration_for_Wedding_Anniversary_Birthday_Party_Christmas_Supplies__sbc5zp.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324129/Organic_Demi-arch_jjx7fo.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324129/Party_Balloon_Garland_Kit_Party_Decoration_Supplies_for_Birthday_Wedding_Bridal_Anniversary_Decorations_Valentines_Day_Birthday_Party_Deco_wexuum.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324129/Muslim_Nikah_Ceremony_Decoration_Idea_s_gs8ygx.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324129/Nikah_Engagement_Stage_Setup_Idea_Inspo_dbyind.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324129/Mehar_mehar295_-_Profile___Pinterest_vzahjc.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324129/Happy_Anniversary_Decoration_Item_Available_At_Wholesale_Prices_Pune_Hyderabad__eupwfo.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324129/Light_Peach_Sheer_Table_Runner_for_Wedding_Decor_Boho_Party_Bridal_Shower_Home_Table_Decorations_mtk0vw.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324128/fc9310a0-2564-4c21-9cea-481aeeae54cc_cspcmo.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324128/edfa4a29-4dec-4e93-b4bb-3e4cd4ee5ffc_ebm8sz.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324128/Flower_decoration___DIY_Trendy_flower_weddings_decoration_ideas_lkitdt.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324122/ecb83785-9ec6-48f3-be30-b4d122276b92_lzmhfx.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324120/e78cac1c-d597-40a7-8d77-72ca94dd9383_frj483.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324120/download_t1iu3t.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324120/decora%C3%A7%C3%A3o_de_igreja_niqwm0.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324119/DIY_Decor_y1cuku.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324119/da043446-11b7-4df7-bc9d-bbd4943ed27b_tvitxq.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324119/dd66907f-cc56-4b28-a098-657b09694615_kjwwyd.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324119/da3305cc-4ec6-4480-97b4-265248472b1a_qc9brq.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324119/Casamento_kgc7kw.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324119/d54a0c1d-9f30-42b3-a099-246ad7a7246b_l2kexa.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324119/Birthday_Decoration_Ideas_At_Loan_yhv5db.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324118/c846b739-49bf-4346-a950-213285c65de9_gheqyf.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324118/c0bdf6ca-3432-4faf-8920-7bafaed48aad_hjajub.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324118/Burgundy_Gold_Balloons_Garland_zg2x6p.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324118/Anniversary_Surprise_Setup_-_White_Glove_Service_Included_ck6mn8.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324117/Backdrop_curtain_decor_Ideas_vwaou4.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324117/a1791ab0-d089-49c7-a11a-459d30a0dac1_azcqfd.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324117/Anniversary_Decoration_with_LED_and_Ring_bnmzss.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324117/a7449596-f863-49cb-a125-645e7be9134e_lvy68h.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324117/ANNIVERSARY_RING_DECOR_q815fx.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324112/20147903-72bf-45a1-8b00-ca7db40f2a16_yzo5m1.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324111/476537cc-bb8f-4921-818a-baf8d4918e12_rzutf0.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324111/85281a8a-9a92-4ccd-8a23-ff703bac693a_lspc6j.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324111/a29afd93-05c4-4246-94ed-6c06cdc32089_dyq7cx.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324111/79049d75-e0d3-474c-bbaf-15f13ac33b7e_xlefwv.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324111/66004b1a-5127-4b2a-9323-f1f68ed568e4_v2eqtz.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324111/3672ae63-7311-4fe6-b24b-c199da5e46e9_ykxdh9.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324111/099b0616-60a4-444c-9207-2192889ce58e_kzymwt.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324110/3539c326-f0d0-499a-86f7-5f149e188330_ubxzao.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324110/293ebcf6-e717-4949-9179-382eba99a480_kjqugq.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324110/110pcs_Rose_Gold_Balloon_Arch_Kit_Decoration_for_Birthday_Wedding_Party_Garland_-_Etsy_ti0aqh.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324110/49d82075-13c7-4d05-b590-18b55b6b13c3_ocn11k.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324110/7fb2bb78-f314-4b32-8435-6db34085144f_ioyfde.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324110/7d8205a8-dd1a-436c-afff-ad906ad04eb5_mhq2sq.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324109/6c7ebc0d-b59b-4488-bce5-2abab69a98d7_idpimg.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324109/5a57506f-dc9c-4241-98f6-272576658e0a_zct7my.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324109/5f297e64-5930-4b1f-a99a-c36342db77c1_ryyiql.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324109/4fec58e9-ec4c-4e90-90af-7bbed444423a_pptk4h.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324109/8eda6845-c207-4248-845b-0ff5caad7ac1_oinwsc.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324108/9c232861-59d9-4178-964e-782ad315dce8_mzg16i.jpg",
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324108/1b4f856c-c374-47a7-9c09-d82a100a26d9_fieiwg.jpg"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-rose-50">
            {/* Hero Section */}
            <div className="relative h-[400px] min-w-full">
                <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
                    alt="Anniversary Celebration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
                            Celebrate Years of Love
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl text-center">
                            Make your anniversary celebration as special as your journey together
                        </p>
                    </div>
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Our Anniversary Celebrations
                    </h2>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
                                alt="Anniversary Setup"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
                                alt="Romantic Setup"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
                                alt="Celebration Setup"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </div> */}
                    <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {anniversaryImages.map((image, index) => (
                            <div className="bg-pink-100 rounded-lg shadow-lg">
                                <img
                                    src={image}
                                    alt="Anniversary Celebration"
                                    className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-md"
                                />
                                <div className="flex justify-between items-center px-2 py-3">
                                    <button className="cursor-pointer border-2 border-secondary text-secondary hover:bg-red-400 hover:text-white px-4 py-2 rounded-lg shadow-md">
                                        Book Now
                                    </button>
                                    <Heart className="text-red-500 w-6 h-6 cursor-pointer hover:fill-red-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* Contact Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800">
                            Ready to Celebrate Your Love?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contact us today to start planning your perfect anniversary celebration
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition duration-300">
                                <Phone className="w-5 h-5 mr-2" />
                                Contact Us
                            </button>
                            <button className="flex items-center bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition duration-300">
                                <Calendar className="w-5 h-5 mr-2" />
                                Book Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default AnniversaryCeremony;