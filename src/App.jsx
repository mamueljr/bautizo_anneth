import anneth1 from './assets/images/anneth1.jpg'
import parroquia from './assets/images/parroquia.jpg'
import panchitas from './assets/images/panchitas.jpg'

function App() {
  const eventDate = new Date('2026-05-09T11:00:00')
  const formattedDate = eventDate.toLocaleDateString('es-ES', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  const churchUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.75326156!2d-106.13259033518027!3d28.69596578360774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQxJzU5LjciTiAxMDbCsDA3JzQ5LjEwLkU!5e0!3m2!1ses!2smx"
  const foodUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.89071844!2d-105.998217648044!3d28.65237501932628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzQ5LjYxTiAxMDXCsDA5JzU5LjI1LkU!5e0!3m2!1ses!2smx"
  const whatsapp = "5216142519069"

  const scrollToMaps = () => {
    document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <div className="decoration-top"></div>
          <p className="invitation-text">Estás invitada al</p>
          <h1 className="baby-name">
            Bautizo de 
            <span>Anneth</span>
          </h1>
          <p className="baby-fullname">Rojas Hernández</p>
          <p className="event-type">Mis primeros años de vida</p>

          {/* Subtítulo emotivo */}
          <p className="hero-thanks">
            Damos gracias a Dios por la vida de nuestra hija Anneth
          </p>

          <div className="decoration-bottom"></div>
          
          <button className="scroll-btn" onClick={scrollToMaps} aria-label="Ver ubicaciones">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── FAMILIA / MADRINA ── */}
      <section className="family-section">
        <div className="family-card">
          <div className="family-divider"></div>
          <p className="family-line">
            <span className="family-label">Sus padres</span>
            Emmanuel Rojas y Lucero Hernández
          </p>
          <div className="family-dot">✦</div>
          <p className="family-line">
            <span className="family-label">Su madrina</span>
            Diana Teresa Hernández
          </p>
          <div className="family-divider"></div>
        </div>
      </section>



      {/* ── DETALLES DEL EVENTO ── */}
      <section className="details">
        <div className="detail-card">
          <div className="detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V8.25a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 8.25v10.5M3 18.75a2.25 2.25 0 002.25-2.25M3 12h13.5a2.25 2.25 0 012.25 2.25M3 12a2.25 2.25 0 00-2.25 2.25M3 18.75V12" />
            </svg>
          </div>
          <div className="detail-content">
            <p className="detail-label">Bautizo</p>
            <p className="detail-value">{formattedDate}</p>
            <p className="detail-sub">11:00 AM</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div className="detail-content">
            <p className="detail-label">Iglesia</p>
            <p className="detail-value">Parroquia Señor de la Misericordia</p>
            <p className="detail-sub">Calle San Miguel el Grande No. 3401</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87a3 3 0 00-3 3v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M12 8.25l6.75 2.625M12 8.25l-6.75 2.625" />
            </svg>
          </div>
          <div className="detail-content">
            <p className="detail-label">Recepción</p>
            <p className="detail-value">Panchita's Farm</p>
            <p className="detail-sub">3:00 PM</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div className="detail-content">
            <p className="detail-label">Lugar</p>
            <p className="detail-value">Panchita's Farm</p>
            <p className="detail-sub">C. 87 10003, Aeropuerto</p>
          </div>
        </div>
      </section>

      {/* ── MAPAS ── */}
      <section id="locations" className="locations">

        {/* Iglesia con foto de la parroquia */}
        <div className="location-card">
          <h2 className="location-title">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="18" height="18">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.59 0L21.75 12l-8.954 8.955c-.44.439-1.152.439-1.59 0L12 21.75 2.25 12l8.954-8.955c.44-.439 1.152-.439 1.59 0z" />
            </svg>
            Iglesia
          </h2>

          {/* Foto de la parroquia antes del mapa */}
          <div className="parroquia-photo-wrap">
            <img
              src={parroquia}
              alt="Parroquia Señor de la Misericordia"
              className="parroquia-photo"
              loading="lazy"
            />
          </div>

          <div className="map-container">
            <iframe 
              src={churchUrl}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Iglesia"
            ></iframe>
          </div>
          <div className="address-box">
            <p className="address-text">
              <span className="place-name">Parroquia Señor de la Misericordia</span>
              Calle San Miguel el Grande No. 3401<br />
              Col. Ignacio Allende, C.P. 31124<br />
              Chihuahua, Chihuahua
            </p>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=28.69596578360774,-106.13259033518027"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Cómo llegar
            </a>
          </div>
        </div>

        {/* Recepción */}
        <div className="location-card">
          <h2 className="location-title">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="18" height="18">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.59 0L21.75 12l-8.954 8.955c-.44.439-1.152.439-1.59 0L12 21.75 2.25 12l8.954-8.955c.44-.439 1.152-.439 1.59 0z" />
            </svg>
            Recepción
          </h2>

          {/* Foto de Panchita's Farm antes del mapa */}
          <div className="parroquia-photo-wrap">
            <img
              src={panchitas}
              alt="Panchita's Farm"
              className="parroquia-photo"
              loading="lazy"
            />
          </div>

          <div className="map-container">
            <iframe 
              src={foodUrl}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Recepción"
            ></iframe>
          </div>
          <div className="address-box">
            <p className="address-text">
              <span className="place-name">Panchita's Farm</span>
              C. 87 10003, Aeropuerto<br />
              Chihuahua, Chih. C.P. 31384
            </p>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=28.65237501932628,-105.998217648044"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </section>

      {/* ── CONFIRMAR ASISTENCIA ── */}
      <div className="confirm-wrap">
        <button
          className="confirm-btn"
          id="btn-confirmar"
          onClick={() => window.open(`https://wa.me/${whatsapp}?text=Hola,%20confirmo%20mi%20asistencia%20al%20bautizo%20de%20Anneth`, '_blank')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          Confirmar Asistencia
        </button>
      </div>

      {/* ── FOOTER EMOTIVO ── */}
      <footer className="footer">
        <div className="footer-ornament">✦</div>
        <p className="footer-family">Con cariño, la familia Rojas Hernández</p>
        <p className="footer-message">
          Esperamos contar con tu presencia en este día tan especial
        </p>
        <div className="footer-ornament">✦</div>
      </footer>

    </div>
  )
}

export default App