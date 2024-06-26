
const FaceWithHat = ({ width = '200', height = '200', color = 'black', ...props }) => (
    <svg 
      width={width} 
      height={height} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      {...props}
    >
      <path 
        d="M30,70 
           Q35,50 45,50 
           L65,40 
           Q75,35 85,40 
           Q90,45 85,55 
           Q75,80 60,75 
           Q50,70 40,85 
           Q30,100 25,90 
           Q20,80 30,70
           M30,70 Q25,60 15,65 Q10,70 15,75 Q20,80 25,70 
           M45,50 Q50,45 60,45 Q65,45 70,50 
           M50,60 Q55,65 60,60 Q65,55 60,50 Q55,45 50,50 Q45,55 50,60
           M40,20 L60,25 
           Q70,30 80,20 
           L60,15 L40,20 Z" 
        stroke={color} 
        strokeWidth="2" 
        fill="none" 
      />
    </svg>
  );
  
  export default FaceWithHat;