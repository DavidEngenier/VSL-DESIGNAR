"use client"
import { useState } from 'react'; // Importamos useState para manejar el estado local
import Link from 'next/link'; // Importamos Link de Next.js para navegación entre páginas
import styles from '@/app/css/additional-styles/Navbar.module.css'; // Importamos los estilos del navbar
import Dropdown from '@/components/dropdown'; // Importamos el componente Dropdown

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false); // Estado para manejar la visibilidad del dropdown

  return (
    <nav className={styles.navbar}> {/* Aplicamos la clase CSS del navbar */}
      <ul className={styles.navItems}> {/* Lista de items del navbar */}
        <li className={styles.navItem}>
          <Link href="/">Home</Link> {/* Enlace a la página principal */}
        </li>
        <li 
          className={styles.navItem}
          onMouseEnter={() => setDropdown(true)} // Mostrar dropdown al pasar el mouse
          onMouseLeave={() => setDropdown(false)} // Ocultar dropdown al quitar el mouse
        >
          <span className={styles.navLink}>Services</span> {/* Enlace que muestra el dropdown */}
          {dropdown && <Dropdown />} {/* Condicionalmente renderizamos el dropdown */}
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link> {/* Enlace a la página About */}
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link> {/* Enlace a la página Contact */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; // Exportamos el componente Navbar
