import { useState } from "react";
import { MenuService, type MenuItem } from "../../services/MenuService";
import { BaseInput } from "../atoms/BaseInput";

interface MenuItemFormProps {
  menuItem?: MenuItem;
  onSuccess: (item: MenuItem) => void;
}

export const MenuItemForm: React.FC<MenuItemFormProps> = ({
  menuItem,
  onSuccess,
}) => {
  const isEditMode = Boolean(menuItem);

  const [formData, setFormData] = useState({
    name: menuItem?.name || "",
    description: menuItem?.description || "",
    price: menuItem?.price || 0,
    category: menuItem?.category || "",
    chefs_choice: menuItem?.chefs_choice || false,
    image_url: menuItem?.image_url || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [target.name]: target.value,
      }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name ist erforderlich.";
    if (!formData.category) newErrors.category = "Kategorie ist erforderlich.";
    if (formData.price <= 0) newErrors.price = "Preis muss größer als 0 sein.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      let result: MenuItem;
      if (isEditMode && menuItem) {
        result = await MenuService.updateMenuItem(menuItem.id, formData);
      } else {
        result = await MenuService.createMenuItem(formData);
      }
      onSuccess(result);
    } catch (err) {
      console.error("Fehler beim Speichern:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md"
    >
      <BaseInput
        label="Name"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <BaseInput
        label="Beschreibung"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        error={errors.description}
        textarea
      />
      <BaseInput
        label="Preis"
        id="price"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        error={errors.price}
      />
      <BaseInput
        label="Kategorie"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        error={errors.category}
      />
      <BaseInput
        label="Bild URL"
        id="image_url"
        name="image_url"
        value={formData.image_url}
        onChange={handleChange}
        error={errors.image_url}
      />
      <div className="mb-4 flex items-center">
        <BaseInput
          label="Chef's Choice"
          id="chefs_choice"
          name="chefs_choice"
          type="checkbox"
          value={formData.chefs_choice}
          checked={formData.chefs_choice}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        {isEditMode ? "Aktualisieren" : "Erstellen"}
      </button>
    </form>
  );
};
