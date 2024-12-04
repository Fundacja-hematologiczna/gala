import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(key);
      if (jsonValue !== null) return JSON.parse(jsonValue);
      return typeof initialValue === 'function' ? initialValue() : initialValue;
    } catch (error) {
      console.error('Error reading localStorage key “' + key + '”: ', error);
      return typeof initialValue === 'function' ? initialValue() : initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage key “' + key + '”: ', error);
    }
  }, [key, value]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        setValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  return [value, setValue];
};

export default useLocalStorage;
