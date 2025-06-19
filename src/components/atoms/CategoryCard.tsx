import React from 'react';
import './CategoryCard.css';

interface CategoryCardProps {
  icon: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title}) => {
    return (
        <div className="category-card">
            <img className="icon" src={icon} alt="icon" />
            <h2 className="title">{title}</h2>
        </div>
    )
};

export default CategoryCard;
