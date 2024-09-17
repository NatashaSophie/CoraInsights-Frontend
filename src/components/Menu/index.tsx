import React from 'react';

import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Menu.module.css';
import Icon, { IconsNames } from '../Icon';

const menuItems: {
  name: string;
  path: string;
  icon: IconsNames;
  activePath?: string;
}[] = [
  {
    name: 'Trilhas',
    path: '/trilhas',
    activePath: '/trilha',
    icon: 'walk',
  },
  {
    name: 'Conquistas',
    path: '/conquistas',
    icon: 'award',
  },
  {
    name: 'Conta',
    path: '/perfil',
    icon: 'user',
  },
];

const Menu: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.MenuContainer}>
      {menuItems.map((menuItem) => (
        <Link href={menuItem.path} key={menuItem.name}>
          <a
            className={classNames({
              [styles.active!]: menuItem.activePath
                ? pathname.includes(menuItem.activePath)
                : pathname.includes(menuItem.path),
            })}
          >
            <Icon name={menuItem.icon} className="stroke-current" />
            <p className="text-current text-xs">{menuItem.name}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
