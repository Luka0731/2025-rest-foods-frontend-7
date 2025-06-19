import React from 'react';
import './CategoryCard.css';

interface CategoryCardProps {
  backgroundImage: string;
  icon: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ backgroundImage, icon, title}) => {
    return (
        <div className="category-card" style={{ '--bg-image': `url(${backgroundImage})` } as React.CSSProperties}>
            <img className="icon" src={icon} alt="icon" />
            <h2 className="title">{title}</h2>
        </div>
    )
};

export default CategoryCard;
