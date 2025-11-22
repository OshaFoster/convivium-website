export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-3xl mb-2" style={{ fontFamily: 'var(--font-oooh-baby)' }}>Pachamama Convivium</h3>
            <p className="text-neutral-400 text-sm font-light mb-1">Contact Me</p>
            <a href="mailto:vitality@pachamamaconvivium.org" className="text-neutral-400 hover:text-gold text-sm font-light transition-colors duration-300">
              vitality@pachamamaconvivium.org
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-neutral-400 text-sm font-light">
            <p>&copy; {new Date().getFullYear()} Pachamama Convivium. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
