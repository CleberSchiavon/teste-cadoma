import React from 'react';

interface IOutlinedInput {
  name: string;
  labelName: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
}

export default function OutlinedInput({
  name,
  labelName,
  placeholder,
  required = false,
  type,
  id,
}: IOutlinedInput) {
  return (
    <div>
      <label
        htmlFor={name}
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        {labelName}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
