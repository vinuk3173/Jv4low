import logo from '../assets/logo-full.png';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logo} 
        alt="JV 4low Logo" 
        className="h-14 w-auto object-contain"
      />
    </div>
  );
}
