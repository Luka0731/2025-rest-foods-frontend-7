import React from 'react';
import './CategoryCard.css';

const CategoryCard: React.FC<{category: string;}> = ({ category }) => {
    const availableIcons = [
        "appetizer", "bento", "beverage", "breakfast", "coffe", "cookies",
        "curry", "dessert", "egg", "fish", "fruit", "liquor",
        "main", "noodle soup", "side", "takeout", "washoku", "soup"
    ];
    const matchedIcon = availableIcons.find(icon =>
        icon.toLowerCase() === category.toLowerCase()
    );
    const iconPath = matchedIcon
        ? `/assets/icons/${matchedIcon}.png`
        : "/assets/icons/default.png"; 

    return (
        <div className="category-card">
            <img className="icon" src={iconPath} alt="icon" />
            <h2 className="title">{category}</h2>
        </div>
    );
};

export default CategoryCard;
