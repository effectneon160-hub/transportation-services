import React from 'react';
import { BoxIcon } from 'lucide-react';
interface ServiceCardProps {
  icon: BoxIcon;
  title: string;
  description: string;
}
export function ServiceCard({
  icon: Icon,
  title,
  description
}: ServiceCardProps) {
  return <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-2 border-gray-100 hover:border-yellow-500">
      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-black" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
}