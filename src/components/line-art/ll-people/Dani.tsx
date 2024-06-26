"use client"

import { ReactNode } from 'react';
import { motion } from "framer-motion";

interface DaniProps {
    children: ReactNode;
}
const Dani = ({children}: DaniProps) => {
    const transition = { duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" };
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="uuid-6d380085-1787-4360-b702-aa938b062a45"
            viewBox="0 0 1953.2 2723"
        >
            <motion.path
            d="M1157.7 1c.3 106.3.7 212.7 1 319l-13 1c-46.8-8.4-86.8 20.5-131 26.9-59.9 2.8-117.2-19.7-176.1-27.5-71.8-6.8-219.2-10.3-228.1 84.6-13.8 65.9-8.1 132.5-8.9 198 5.1-29.1 25.3-54 35-82.5 7-12.2-5.4-25.2-1.9-39.5-2.5-29.9 10.4-56.4 9.9-85 0 12.2.5 32.8 8.1 42.9 15.6 24.8 64.8 61.7 88.9 31.1-28.1 38.2 122.9 12.8 137-3.1 64.4-21.2 94.3-129 150-36.9 45.8 72.6 148.8 66 224 57.9 54.8-5.1 80.5-53.8 106.9-95.8 23.6 54.9 22.4 124 30.3 183.9 3.3 70.5 21.8 140.3 27.8 209-2.4-22.8 12.7-41.6 23.5-60l3.5-1c-1.3-1-3.7-1.8-3.8-3-15.2-66.5-13.5-133.9-20.1-201-6-51.5-20.3-101.6-28.1-153-50.5-30.6-128.9-44.5-192.9-42.9-12.7 0-21.9 10.4-23.3 22.9.7 24.3 60.1 12.2 78.3 13.5 22.3 1.9 79.2-14.8 76.2 20.6-1.9 23.2-15.1 40-30.7 54.5-51 32.4-118.1 26.6-175.5 16.2-74-10.5-53.4-84.1-91.1-85.3-106.6-19.4-169.1 94.2-271 101.5-41.7 2.5-125.3-38.4-80-88 46.5-51.1 161.1-60.4 211-12 36.7 63.1-192.1 93.8-209.9 140.1-62.8 50.9-16.3 132.3-31 199.9.9 66.1-26.3 126.8-44.1 189-2 92-48.2 180.8-20.2 274 2.5 16.1 7.3 32.7 5.1 49 4.9-5.2 9.5-1 15 0 15.5-53.3-.6-114.3 6.5-170 6.9-37 10.2-80.1 38.5-108 10.3-10.1-5-25.4-.5-36.9 6.3-19.7 16.5-36.9 38.5-43.3 26.4-17 51.8-.8 80 2 62.4 6.6 106.2-1.1 99 76.1-6.3-45.3-178.7-68.8-181.5-20.3 32.2 9.2 72.3-4.5 106.5 6.3 102.4 14.8 110.8 125.6 61.8 198.9-15.6 32.2-46.3 60.9-42.8 99.1 2.7 19.7 12.5 25.1 28.7 17.5 29.2-16.8 49.7 25.9 80.5 9.1 9.5-3.7 12.8-10.9 17.7-17.6 21-32.3 27.8 18.5 53.1 8 29.6-14.2 12-54-10.7-67.3-56.4-51.1 28.2-180.8 72.6-220.8 50-42 150.5-7.9 147.6 60.2-28.1-26.6-69.1-49.8-109.4-42.7-16.2-2.6-33.9 27.5-46 35.7.4-13.3 30-38.5 34.1-16 2.8 40.6 60 33.1 67.9 0-20 10.1 8.2 32.7 20 28-43.1 48-91.8-13.9-133 15-33.2 25-43.6-22-44.8-47-2.4-56.1 2.7-133 79.8-134 66.4 1.9 163.3-8 180 76-15.8-28.2-57.4-27-84.9-39.3-27.5-12.5-64-8.5-93-.4-16.6 6.3-37.1 37.5-52.1 11.7 14.2 4.2 37.8 17.3 51.9 8.7 45.9-14.9 97.6-25.1 142.1-2.7 110.4 178.7 193.7 54.9 113-37-25.4-21.5-39.7-57.2-32.5-89.9 25.6-128.4-107.6-213.9-211.7-252.6-90.6-27.4-195.2-24.3-278.9 22.5-122.9 62.5-163.5 226.5-199 348-123.2 123.1-251.8 178.7-250.8 381 1 52.9-.8 107.9-39.2 149-34 44.7-55.6 107.6-46.6 162.9 20.4 180.7 123.9 118.9 163.2 209.1 1.6 6.9 2.1 15.2-4.7 20.9-25.9 37.4 47.7 89.6 81 99 49.7 18.5 131.5-14 130.2-71-6.9-12.7-4.5-31-12.2-44 23.5 55.3 126.5 56.4 141.8-9.6 12.8-38.8-13.5-66.9-23.8-100.5 21.8 25.5 54.8-16.9 55.2-41.9 13.3-46.2-23.6-94.4 8.1-135.8 46.2-71.5 105.5-37.1 71-95.5-4.3-29.9-102.4-43.4-76.4-63.7 110.7-66.1 66.6 5.8 133-33.1 27.7-15.9 39.3 21.8 65.9 24.2 13.1 12.4 45.6 4.6 61.1 1.8.7 8-6.1 6.3-10 6.8-40.4-.8-79.9 16.9-120 4.2-25-12.2-86.6 22.8-45 43 61.6 7.1 121.3-29.8 185-20 57.7.8 257.5 47.2 129 105l119-168c-15.5 2.2-37.8-7.1-49.8 4.1-37.8 153.2-138.6 268.1-302.3 282.4-29.1-1.3-64.3 5.1-87.9-15.5-27.8-20.4-59.9-44-76.1-73.9-18.5-16.3-36.1-34.2-59.9-42.1-78.4-53.1-108.5-154.7-106-245.9-5.5-38 99.6-194.7 39.9-193.9-29.1 19.8 93.2 61.2 130-22.1-5.7 5.8-7.1 6.4-14 2.1-13.7-2.8-8.3-15.7-6-25.1-.5 30.1-53.6 35.5-56.2 4 0-4 1.1-10-5.8-11 7 21.1 10.6 23-10 36-7.4-7.8-26.5-9-38-8 32.3-43.2 86.1-66.2 133.2-23.2 9.7 13.8 33 15.9 36.8 27.2-13-104.5-191.3-89.1-199.9 12-15.8 57.4 1.8 121.2-26.1 175-23.2 23.1-33.1 56.1-26.1 89 22.3 111.1 75.9 224.4 185.1 272 11.6 10.9 27.7 27.5 44 30.1 22.1.8 46 16 67 8.9 5.7 13.6 139.3 340.5 144.9 353 20.4 51.4 100.2 38.9 131.8 3.8 44.4-77.9-20.6-81-79.7-74.8 28.4 6.9 57.7-10.2 85-7.9 21.6 9.1 48.5 10 56.9 35 31.9 62.6 107.6 55.7 167.2 59.8 97.8 5.4 191-28.8 282-58.9 45.7-6.9 93.3-7.4 140-4.9 124.7 2.4 143.5 57.6 122 171 7.7 195.7-205.7 295-375.1 302.5-114 .8-228-3.3-342-5.6-58.7-3.5-119.7-9.5-176.9 6.5-36 17.1-73 52.3-70.4 95-12.1 44.9-30.4 89.1-24.8 136.6 4.6 36.2-2.3 72.1-7 108 10.9 1.4 15.3-293.8 50-232 38 26 110.9-10.8 92.9-60-8.2-24.8-26.7-40.9-54.8-26.9-38.8 32.7 26.2-209.8 17.9-210.2 14.1 61.3-16.8 91.1-70 101-2-6.6-18.2-8.6-19.7-22.1-7.7-24.5-23.5-43.8-38.2-64-36-68.2-117.4-86.7-186-108.1-145.6-60.3-346.1-24.5-410.2 134.1-44.3 87.2-82.8 163.4-73.9 264 17.8-130.9 1-274 25-404 41.8-213.4 37.1-295.4-120.8-455.2-40.3-38.2-11.8-115.6 7.7-159.9 15.6-51.5 77.1-54.6 102.8-96.1 34.9-74.9.7-156 6.2-233.9 4.1-158.4 163.1-232.2 231.8-359.6 25.5-56.5 94.6-129.5 65.3-192.4-10.6-20.2-32.9-25.4-50-9.8C327.5 706.8 433.4 823.2 279 945.7 70 1071.1-4.7 1352.2 112.7 1565.9c7.1 12.9 13.9 27.9 26.8 36.1l10 28c-6.1 8.7-1.9 18 .4 25.9 18.5 62.7 39.1 124.7 58.7 187.1.3 4.1 6.3 9.1 2 12-33.7 17.4-67.1 35.5-92.9 64.1-70.4 70.6-166.4 195.6-86.3 290.1 37.7 38.5 88.3 47.7 136.2 22.7 52.3-20.1 83.3-131.1 85.4-182.8-2.3-66.4-15.4-133.4-43.3-195.2 36.9-15.1 71.3-27.8 108.9-38.8 68-16.4.3 46.1 22.2 119.9 5.9 121.3 212.3 95.6 275.8 37 69.9-97.7 173-91.8 264-27 70.6 46.5 108.9 97.7 105 185 34.1-11.6 76.5 26.2 67.8 61.7-21.8 19.2-25.6 54-61.8 50.2-44.8-10.6-45.2-91.8-7-110.9-13.3-24.1 9.6-51.4-3-73.5 15.6-12.4 19.2-53.4 28.9-73.5 12.1-50.5 53.3-83.6 92.1-111.9 28.7-16.6 66.2-5.1 93-20.1l24-9c16.1 3.5 31.3-5.3 43.9-14.1 19.1-14.7 34.7-33.4 59.1-38.9-10.4-2.9-21.6 51.4-25.8 62-5.3 62.9 131.8 66.1 135.8 2 5 28.8 44.3 44.2 71.1 47.6 31.1 6.7 67.8-13.1 78-42.6 17.2 50.4 77.9 66.2 124 48 22.4-22.4 59.7-40.7 56.6-77 3.2-53.3-72.7-73.2-57.7-127.5 12.5-41.7 44.2-73.5 63.6-111.7 38.6-77.2-57-128.5-63.6-197.8 2-31 4.4-61.8 11.9-92 4.3-52.6 89.7-136.4 14.1-167.9-8.4-2.8-12.8-7.5-12.1-17.1-1.4-48.3 11.2-95.2 8.5-143.1-17.5-67.6-44.4-125.3-125.4-114.9-54.1-.8 2.9-136-24.3-175.9-32.3-72.5-62.9-156.7-143.7-186.1l-6 69c23.4 36.8 25 86.2 32.2 129 20.5 95.3 50.3 188.3 68.8 284.1 30.2 141.9 64.5 290.9 15.5 432.8-36.8 75.6-79.7 170.5-169.4 191.4-80.8-7.8-117.5 75.6-133.8 142.4-10.2 33.4.7 88.6-36.2 104.5-5.3 2.7-9.3 2.3-14.3-1.7-7.2-4.3-18.5-2.8-26.7-5.4-14.5-3.9-19-14.8-12.1-27.9 8.8-18.3 30.9-17.6 45.9-28.1 8.3-5 9.5-11.3 4-18.8-33.4-66 63.7-111.3 68-175.1 14.7-49.4 16.3-98.8-14.7-142.7 52.7-52.2 64.6-87.5 75.8-158.8 19.3-82.1 39.7-175.6 25-260.5 18.5 27.4 4.2 64 6 95-27.4-9.7-16.7-81.4-7-103"
            style={{
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 4,
                
            }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
            />
        </svg>
    );
}

export default Dani