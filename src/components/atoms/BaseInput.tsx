import React from "react";

interface BaseInputProps {
  id: string;
  name: string;
  value: string | number | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  error?: string;
  label: string;
  textarea?: boolean;
  checked?: boolean;
}

export const BaseInput: React.FC<BaseInputProps> = ({
  id,
  name,
  value,
  onChange,
  type = "text",
  error,
  label,
  textarea = false,
  checked,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value as string}
          onChange={onChange}
          className={`mt-1 block w-full rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} shadow-sm`}
        />
      ) : (
        <input
        id={id}
        name={name}
        type={type}
        {...(type === "checkbox"
            ? { checked: Boolean(checked) }
            : { value: value as string | number })}
        onChange={onChange}
        className={`mt-1 block w-full rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} shadow-sm`}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
