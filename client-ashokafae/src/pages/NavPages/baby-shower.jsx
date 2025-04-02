import React from "react";
import { Heart, Package, Star, Phone, Calendar } from "lucide-react";

const babyShowerImages = [
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901448/Baby_Shower_Balloons_Decoration_-_3_qtppct.jpg", "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901402/c69eb759-e03f-4ca9-b1b1-a3d3f3d08bd5_htc1jt.jpg", "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901333/76b5f8f4-bafe-47b8-8118-2fc02177f668_w6vpqa.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901282/Baby_Shower_decoration_nzvndp.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901282/Boy_or_girl_baby_shower_gmmuub.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901281/a8d23333-f36d-4590-85db-f31fb8e53eb3_tpsyjn.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901280/Baby_shower_%EF%B8%8F_d2mipj.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901279/Baby_Shower_rufzly.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901278/Baby_Shower_Decor_in_NCR_Delhi_India_ybilob.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901277/Gender_Reveal_Theme_Ideas_And_Alternatives_to_a_Gender_Reveal_-_arnienicola_h8silg.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901275/800b5517-ca60-454d-8064-5346f8ee9c56_xhpmi2.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901274/Baby_shower_decorations_baby_shower_decorations_pune_baby_shower_baby_shower_decorators_in_pune_mfghob.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901273/Baby_shower_decoration_call_7021979252_gbttng.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901271/baby_shower_decorations_cbm9lu.jpg",

    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901269/download_a8lrie.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901268/Holy_Communion_Backdrop_Decor_kxfuak.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901266/Baby_Shower_Decor_skeceo.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901266/Baby_Shower_Decor_skeceo.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901257/BABY_SEQUENCE_zm3hbu.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901257/baby_shiver_flower_decoration_btwhrh.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901256/Baby_shower_Decorations_1_ddqvz2.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901254/5d19bfd6-0698-43dd-be7b-17fe98218d59_b037yb.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901252/balloons_Decoration_agiqdn.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901252/Baby_Shower_Balloons_Decoration_-_1_wrszeq.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901242/c45d803d-4d44-4ad4-a26a-9a596eca266c_caeqkh.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901239/Baby_Shower_Balloons-_elephant_Decoration_-_1_jnyk5t.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901239/Baby_Shower_Balloons-_elephant_Decoration_-_1_jnyk5t.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901232/BABA_EVENTS_Decoration_Packages_Enquiry_cmpc7p.jpg",

    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901172/Baby_shower_decorations_baby_shower_decorations_pune_baby_shower_baby_shower_decorators_in_pune_2_hn62xm.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901166/Baby_shower_planner_in_pune_uezwns.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901161/Best_Birthday_Party_Organiser_in_Pune___Unique_Creative_Themes_c7izmt.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901159/eb086ba0-1233-47a1-85ff-6ff06680821c_isokcz.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901159/dec7bf66-759c-494e-a112-a4f290b030b1_zvmq1k.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901154/Baby_Shower_flower_Decoration_-_4_miq2vc.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901154/Baby_Shower_flower_Decoration_-_4_miq2vc.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901140/Baby_Shower_Balloons-_elephant_Decoration_-_4_gydpvb.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901139/f04c24ec-bbe2-45da-85a2-d40b5daddae8_ilobph.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901136/71bc9161-b39e-47d6-bc54-f36ff79cc47f_dwvh3e.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901135/c8e9b942-b6aa-4355-b671-1aa94851443e_dgkqqr.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901133/Baby_Shower_flower_Decoration_-_2_nmq696.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901133/98978a7f-d6d0-4a4b-8e50-c423064176b7_br8pad.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901130/Baby_Shower_Decoration_in_Pune___Dohale_Jevan_Decoration___Godh_Bharai_2_gzkn5l.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901130/Balloon_Decor_For_Naming_Ceremony_g7ua6d.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901129/Home_ia07vb.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901128/80be1ad1-48ac-4ba2-b920-582305624e07_ivspfq.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901124/1st_Birthday_Home_Setup_mghchu.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901116/Balloon_decoration_9723070163____9723943476_kwtwzv.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901116/Krishna_Theme_Babyshower_Decoration_%EF%B8%8F_qepodt.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901113/Creative_Decor_Ideas_For_an_Outdoor_Wedding_-_Weddingplz_Blog_iuf4nq.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901113/Baby_Shower_Decor______DM_us_for_inquiry_more_idkj9v.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901113/download_4_fdngym.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901111/Elegant_Baby_shower_decorations_1_ye7bev.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901110/68570ffa-3261-418d-915f-30439df96a76_zdayjf.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901110/68570ffa-3261-418d-915f-30439df96a76_zdayjf.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901110/download_5_vandkd.jpg",

];

function BabyShower() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50">
            {/* Banner Section */}
            <div className="relative h-[400px] min-w-full ">
                <img
                    src="https://images.unsplash.com/photo-1616843777726-2b35ac7c4215?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About Us"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                        <h1 className="text-5xl font-light text-center text-white mb-4 font-serif italic">
                        Create Magical Moments for Your Little One
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl text-center">
                        Let us help you celebrate this special occasion with our beautifully curated baby shower packages.
                        </p>
                    </div>
                </div>
            </div>

            {/* Baby Shower Gallery */}
            <div className="bg-white min-h-screen py-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#007F5F] mb-8">
                    Baby Shower Celebration
                </h2>

                {/* Responsive Card Grid */}
                {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5"> */}
                {/* <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8">

                    {images.map((image, index) => (
                        <div key={index} className="bg-green-200 p-4 rounded-lg shadow-lg">
                            <img
                                src={image}
                                alt="Baby Shower"
                                className="w-full h-64 object-cover rounded-md"
                            />
                            <div className="flex justify-between items-center mt-4 px-4">
                                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md">
                                    Book Now
                                </button>
                                <Heart className="text-red-500 w-6 h-6 cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </div> */}
                <div class="grid grid-cols-2 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {babyShowerImages.map((image, index) => (
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

            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Why Choose Our Baby Shower Services?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Personalized Touch</h3>
                            <p className="text-gray-600">
                                Custom themes and decorations tailored to your vision.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Package className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">All-Inclusive Packages</h3>
                            <p className="text-gray-600">
                                Everything you need for the perfect celebration.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
                            <p className="text-gray-600">
                                Experienced team dedicated to your special day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800">
                            Ready to Start Planning?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contact us today to begin planning your perfect baby shower celebration.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center bg-[#ff8484] text-gray-800 px-6 py-3 rounded-full hover:bg-[#ff9292] transition duration-300">
                                <Phone className="w-5 h-5 mr-2 text-black" />
                                Contact Us
                            </button>
                            <button className="flex items-center bg-[#98f5e1] text-gray-800 px-6 py-3 rounded-full hover:bg-[#7de0cc] transition duration-300">
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

export default BabyShower;
