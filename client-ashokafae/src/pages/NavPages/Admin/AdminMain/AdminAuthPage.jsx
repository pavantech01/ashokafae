import { useNavigate } from "react-router-dom";
import { CalendarPlus, PackagePlus, Settings2 } from "lucide-react";

const cards = [
    {
        title: "Add Events",
        icon: <CalendarPlus size={32} />,
        img: "https://st2.depositphotos.com/1635204/7654/i/450/depositphotos_76549817-stock-photo-word-events-on-colorful-wooden.jpg",
        link: "/add-event"
    },
    {
        title: "Add Products",
        icon: <PackagePlus size={32} />,
        img: "https://www.shutterstock.com/image-vector/outline-add-product-vector-icon-600nw-1454270585.jpg",
        link: "/add-product"
    },
    {
        title: "Add Our Services",
        icon: <Settings2 size={32} />,
        img: "https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg",
        link: "/add-service"
    }
];

const AdminAuthPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h4 className="text-3xl font-bold text-center mb-10">Admin Dashboard</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {cards.map(({ title, icon, img, link }) => (
                    <div
                        key={title}
                        className="cursor-pointer group rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105 bg-white"
                        onClick={() => navigate(link)}
                    >
                        <img src={img} alt={title} className="h-48 w-full object-cover" />
                        <div className="p-6 flex items-center gap-4">
                            <div className="text-blue-600">{icon}</div>
                            <div className="text-xl font-semibold">{title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminAuthPage;
