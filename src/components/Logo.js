import Image from 'next/image';

export default function Logo({ className = "w-16 h-16" }) {
  return (
    <div className={`${className} rounded-full overflow-hidden relative border border-gold1`}>
      <Image
        src="/images/LOGO2.png"
        alt="Pachamama Convivium Logo"
        fill
        className="object-cover"
        style={{ objectPosition: '50% 25%' }}
      />
    </div>
  );
}
