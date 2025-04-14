// src/components/HeroDashboard.tsx
import { CalendarDays, Package, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
    {
        title: "Add Events",
        icon: <CalendarDays size={40} />,
        route: "/admin/events",
        description: "Create and manage events"
    },
    {
        title: "Add Products",
        icon: <Package size={40} />,
        route: "/admin/products",
        description: "Manage product listings"
    },
    {
        title: "Add Our Services",
        icon: <Settings size={40} />,
        route: "/admin/services",
        description: "Configure and publish services"
    }
];

export default function HeroDashboard() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {cards.map((card, i) => (
                    <Link
                        to={card.route}
                        key={i}
                        className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 border"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="text-blue-600">{card.icon}</div>
                            <div>
                                <h2 className="text-xl font-semibold">{card.title}</h2>
                                <p className="text-sm text-gray-500">{card.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
