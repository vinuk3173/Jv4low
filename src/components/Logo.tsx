import logo from '../assets/logo.png';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logo} 
        alt="JV 4low Logo" 
        className="h-64 w-auto object-contain brightness-0 invert"
      />
    </div>
  );
}
