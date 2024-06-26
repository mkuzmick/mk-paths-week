import { ReactNode } from 'react';

interface CatLineArtProps {
    children: ReactNode;
    height: string;
    width: string;
    color: string;
}
const CatLineArt = ({children, height, width, color}: CatLineArtProps) => {
    return (
        <svg 
            width={width} 
            height={height} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
        >
            <path 
            d="M30 80 Q25 70 35 65 Q45 60 50 65 Q55 60 65 65 Q75 70 70 80 Q65 90 55 85 Q45 80 35 85 Q25 90 30 80
           M50 65 Q50 50 60 45 Q70 50 70 35 Q70 25 60 20 Q50 15 40 20 Q30 25 30 35 Q30 50 40 45 Q50 50 50 65
           M40 25 Q40 20 45 20 Q50 20 50 25
           M55 25 Q55 20 60 20 Q65 20 65 25"
            stroke={color} 
            strokeWidth=".5" 
            fill="none" 
            />
        </svg>
    );
}

export default CatLineArt

