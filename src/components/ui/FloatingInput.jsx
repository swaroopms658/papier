import { useState } from 'react';
import { motion } from 'framer-motion';

const FloatingInput = ({ label, id, type = "text", error, className = "", ...props }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState(props.value || "");

    const handleFocus = () => setFocused(true);
    const handleBlur = (e) => {
        setFocused(false);
        if (props.onBlur) props.onBlur(e);
    };
    const handleChange = (e) => {
        setValue(e.target.value);
        if (props.onChange) props.onChange(e);
    };

    const isActive = focused || value.length > 0;

    return (
        <div className={`relative mb-6 ${className}`}>
            <input
                id={id}
                type={type}
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                className={`
                    block px-4 pb-2.5 pt-5 w-full text-gray-900 bg-gray-50 
                    border border-gray-200 rounded-lg appearance-none 
                    focus:outline-none focus:ring-0 focus:border-[#e62e2e]
                    transition-colors duration-300 peer
                    ${error ? 'border-red-500 bg-red-50' : ''}
                `}
                placeholder=" "
                {...props}
            />
            <label
                htmlFor={id}
                className={`
                    absolute text-gray-500 duration-300 transform 
                    top-4 z-10 origin-[0] left-4 
                    peer-focus:text-[#e62e2e] peer-focus:scale-75 peer-focus:-translate-y-4
                    ${isActive ? 'scale-75 -translate-y-4' : 'scale-100 translate-y-0'}
                    ${error ? 'text-red-500' : ''}
                `}
            >
                {label}
            </label>
            {error && (
                <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 mt-1 block"
                >
                    {error}
                </motion.span>
            )}
        </div>
    );
};

export default FloatingInput;
