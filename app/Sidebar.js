import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Sidebar.module.css';
import { UserOutlined, EditOutlined, LogoutOutlined, ShopOutlined, InfoCircleOutlined } from '@ant-design/icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    router.push('/');
  };

  const goToVendedorRegister = () => {
    router.push('/pageRegVen');
  };

  return (
    <div className={isOpen ? styles.sidebarOpen : styles.sidebarClosed}>
      <div className={styles.header}>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          <div className={styles.menuIcon}>
            <span>&#9776;</span>
          </div>
        </button>
      </div>
      <div className={styles.profileSection}>
        <div className={styles.profilePic}>
          <img src="/imagenes/perfil1.png" alt="Profile" />
        </div>
        <h3 className={styles.username}>{username}</h3>
      </div>
      <ul className={styles.menuItems}>
        <li className={styles.menuItem}>
          <InfoCircleOutlined className={styles.icon} />
          {isOpen && <span>Mi Información</span>}
        </li>
        <li className={styles.menuItem}>
          <EditOutlined className={styles.icon} />
          {isOpen && <span>Editar Perfil</span>}
        </li>
        <li className={styles.menuItem} onClick={goToVendedorRegister}>
          <ShopOutlined className={styles.icon} />
          {isOpen && <span>Modo Vendedor</span>}
        </li>
        <li className={styles.menuItem} onClick={handleLogout}>
          <LogoutOutlined className={styles.icon} />
          {isOpen && <span>Cerrar Sesión</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
