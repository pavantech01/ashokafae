import React from 'react';
import { Calendar, Gift, Heart, Package, Star, Phone, Cake } from 'lucide-react';

const birthdayImages = [

    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156131/The_Most_Romantic_Birthday_Surprise_Ideas_for_Wife_xm1kei.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156129/Surprise_decoration_organiser_in_hadpsar_ltdexi.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156127/Pretty_in_Pink_l4odmr.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156126/Partycus_Pink_Purple_Balloon_Garland_Double_Stuffed_Lavender_Party_Balloon_Macaron_Light_Pink_Latex_Pastel_Balloons_Arch_Kit_for_Birthday_Baby_Shower_Wedding_Engagement_Princess_Party_Decoration_lrvxco.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156125/Party_ideas___Birthday_decorations_Birthday_party_theme_decorations_Balloon_decorations_pk9tqf.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156124/Majestic_Birthday_Decor_With_Metal_Arch_Sequins_Wall_Column_Stands_Uplights_Pots_Flowers_lbh2mu.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156122/magik_balloons_Home_Decoration_xuqhbj.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156121/Janinus_Rose_Gold_Balloons_Garland_Arch_Kit-_5_12_18_Inch_Rose_Gold_White_Confetti_Birthday_Balloons_Decorations_For_Women_Girls_Princess_Engagement_Wedding_Birthday_Party_decorations_u7tbtq.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156120/Happy_Birthday_Decorations_for_Girls_and_Women_88_Pink_Silver_and_White_Balloon_Arch_Happy_Birthday_Banner_DIY_Tools_for_Balloon_Garland_x3vfa1.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156119/Famzigo_Assorted_Colors_Balloon_Garland_Kit_Party_Decoration_Kits_94_Pieces_-_Walmart_com_maf0tb.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156117/entrance_gate_birthday_lphvjj.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156117/download_2_zihsrb.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156115/d749247a-3c5c-4c37-a881-02c58117c1a7_memdnw.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156114/Champagne_gold_shimmer_wall_n4smf1.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156114/c0c39943-d0d1-4ce1-a37c-07c7da459af1_inatzy.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156112/Burgundy_Gold_Balloons_Garland_cdueak.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156109/birthday_Decor_1_xq8vk0.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156109/Birthday_Surprise_Room_Decoration_at_Home_for_HUSBAND_Romantic_room_decoration_nqi3xg.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156107/Birthday_Celebration_tioghx.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156107/Birthday_Balloon_For_Women_Garland_Kit_Arch_And_Gold_For_Party_Decoration_Neutral_Brown_Boho_Ivory_White_Sand_Gold_rm0b93.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156106/Balloon_Garland_Set_133pcs_Decorations_hlz5qe.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156103/Balloon_Garland_Arch_Kit_140PCS_Macaron_Rainbow_Balloons_Birthday_Party_Background_Decoration_Girl_Baby_Shower_Wedding_Party_Supplies_Pink_Blue_Purple_Balloons_Macaron_36_18_12_5inch_dtmggy.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156103/balloon_arch___balloon_garland___balloons_arches_bwxy5p.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156102/ballons_decoration_ideas_d9m1lm.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156101/a225e4c5-9f99-4e71-ae6b-3bd81cc86068_hijrle.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156100/7479240c-0cbb-45b5-b4c0-e455fb7c113e_nzaw2z.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156100/104Pcs_Pink_And_Gold_Balloons_Arch_Garland_Kit_Baby_Shower_Birthday_Party_Wedding_Decor_q8pwfh.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156099/40_bellas_ideas_de_panel_circular_para_fiestas_ggbwdo.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156098/35a350c8-3ad5-4fa4-b46f-03490a429cd9_rlu59w.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156092/27dc8744-3188-4f65-bf04-0385387f599b_no5btq.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156091/25TH_BIRTHDAY_xrczt6.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743156089/9ba0ad23-bf30-4c64-a848-8f5e25ef55d1_q9wrqf.jpg"
];

function BirthdayParty() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-pink-50">
            {/* Hero Section */}
            <div className="relative h-[400px] min-w-full">
                <img
                    src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80"
                    alt="Wedding Celebration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
                        Create Magical Birthday Memories
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl text-center">
                        Turn your special day into an unforgettable celebration
                        </p>
                        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition duration-300 mt-6 cursor-pointer">
                                Plan Your Party
                            </button>
                    </div>
                </div>
            </div>

            {/* Photo Gallery */}
            <h2 className="text-3xl font-bold text-center mt-8 text-gray-800">
                Birthday Celebration
            </h2>
            {/* Image Gallery Section */}
            <div class="grid grid-cols-2 gap-4 px-4 py-20 bg-gray-50 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {birthdayImages.map((image, index) => (

                    <div className="bg-green-200  rounded-lg shadow-lg">
                        <img
                            src={image} // Replace with your actual image source
                            alt="Baby Shower"
                            className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-md"
                        />
                        <div className="flex justify-between items-center px-2 py-3">
                            <button className="cursor-pointer border-2 border-secondary text-secondary hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg shadow-md">
                                Book Now
                            </button>
                            <Heart className="text-red-500 w-6 h-6 cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Features Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Why Choose Our Birthday Services?
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <Cake className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Custom Themes</h3>
                            <p className="text-gray-600">
                                Personalized party themes for all ages
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Package className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Full Service</h3>
                            <p className="text-gray-600">
                                Complete party planning and setup
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Star className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Entertainment</h3>
                            <p className="text-gray-600">
                                Professional entertainment options
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Gift className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Party Favors</h3>
                            <p className="text-gray-600">
                                Custom party favors and gifts
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800">
                            Ready to Plan Your Birthday?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contact us today to start planning your perfect birthday celebration
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
                                <Phone className="w-5 h-5 mr-2" />
                                Contact Us
                            </button>
                            <button className="flex items-center bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition duration-300">
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

export default BirthdayParty;