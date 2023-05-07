import React from 'react';

interface ICheckbox {
  name: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
}

export default function Checkbox({
  name,
  placeholder,
  required,
  id,
}: ICheckbox) {
  return (
    <div className='flex items-start'>
      <div className='flex h-5 items-center'>
        <input
          id={id}
          aria-describedby={name}
          required={required}
          type='checkbox'
          className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
        />
      </div>
      <div className='ml-3 text-sm'>
        <label htmlFor={name} className='text-gray-500 dark:text-gray-300'>
          {placeholder}
        </label>
      </div>
    </div>
  );
}
