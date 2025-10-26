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

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {/* Bandcamp */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-gold transition-colors duration-300"
              aria-label="Bandcamp"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
              </svg>
            </a>

            {/* SoundCloud */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-gold transition-colors duration-300"
              aria-label="SoundCloud"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.051 0-.09.04-.099.099l-.135 1.326.135 1.303c.009.058.048.098.099.098.05 0 .09-.04.099-.098l.15-1.303-.15-1.326c-.009-.059-.05-.099-.099-.099m1.786-.225c-.06 0-.105.045-.105.104l-.195 2.179.195 2.131c0 .059.045.104.105.104.061 0 .106-.045.106-.104l.254-2.131-.254-2.179c0-.059-.045-.104-.106-.104m12.125 5.025c3.125 0 5.625-2.5 5.625-5.625S16.187 6.6 13.062 6.6c-.484 0-.953.063-1.406.188-1.031-2.438-3.484-4.188-6.375-4.188-3.781 0-6.844 3.063-6.844 6.844 0 .313.031.625.063.938.031.063.063.125.125.188v.063c-.125.313-.188.656-.188 1 0 1.406 1.125 2.563 2.531 2.563h12.094z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-neutral-400 text-sm font-light">
            <p>&copy; {new Date().getFullYear()} Marie. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
