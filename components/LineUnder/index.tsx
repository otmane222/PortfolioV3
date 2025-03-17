'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

export default function LineUnder({ children }: { children: React.ReactElement }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span 
            className="relative inline-flex cursor- w-fit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            <div className="absolute left-0 bottom-0 w-full h-[2px] overflow-hidden">
                {/* Left Line */}
                <motion.div
                    className="absolute left-1/2 h-full bg-light-bg"
                    animate={{ width: isHovered ? '50%' : '0%' }}
                    initial={{ width: '0%' }}
                    transition={{ duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
                />
                {/* Right Line */}
                <motion.div
                    className="absolute right-1/2 h-full bg-light-bg"
                    animate={{ width: isHovered ? '50%' : '0%' }}
                    initial={{ width: '0%' }}
                    transition={{ duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
                />
            </div>
        </span>
    );
}
