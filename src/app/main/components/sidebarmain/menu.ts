import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Menú',
    isTitle: true
  },
  {
    id: 2,
    label: 'Dashboard',
    icon: 'fa-solid fa-tachometer-alt',
    slug: 'DashboardMenu',
    link: '/',
    isTitle: false
  },
  {
    id: 3,
    label: 'Usuario',
    icon: 'fa-solid fa-user',
    slug: 'MenuUsuarios',
    subItems: [
      {
        id: 1,
        label: 'Listar Usuarios',
        slug: 'ListarUsuarios',
        link: '/user/list-user',
        icon: '',
        estado: true,
        parentId: 3
      },
      {
        id: 2,
        label: 'Crear Usuario',
        slug: 'CrearUsuario',
        link: '/user/create-user',
        icon: '',
        parentId: 3
      }
    ]
  },
  {
    id: 4,
    label: 'Perfil',
    icon: 'fa-solid fa-user-shield',
    slug: 'MenuPerfiles',
    subItems: [
      {
        id: 1,
        label: 'Listar Perfiles',
        slug: 'ListarPerfiles',
        link: '/role/list-role',
        icon: '',
        parentId: 4
      },
      {
        id: 2,
        label: 'Crear Perfil',
        slug: 'CrearPerfil',
        link: '/role/create-role',
        icon: '',
        parentId: 4
      },
      // {
      //   id: 3,
      //   label: 'Editar Perfil',
      //   slug: 'EditRole',
      //   link: '/role/edit-role',
      //   icon: '',
      //   parentId: 4
      // }
    ]
  },
  {
    id: 5,
    label: 'Permiso',
    icon: 'fa-solid fa-user-lock',
    slug: 'PermissionsMenu',
    subItems: [
      {
        id: 1,
        label: 'Listar Permisos',
        slug: 'ListPermission',
        link: '/permission/list-permission',
        icon: '',
        parentId: 5
      },
      {
        id: 2,
        label: 'Crear Permiso',
        slug: 'CreatePermission',
        link: '/permission/create-permission',
        icon: '',
        parentId: 5
      },
      {
        id: 2,
        label: 'Editar Permiso',
        slug: 'EditPermission',
        link: '/permission/edit-permission',
        icon: '',
        parentId: 5
      }
    ]
  },
  {
    id: 5,
    label: 'Escuela',
    icon: 'fa-solid fa-school',
    slug: 'SchoolsMenu',
    subItems: [
      {
        id: 1,
        label: 'Listar Escuelas',
        slug: 'ListSchool',
        link: '/school/list-school',
        icon: '',
        parentId: 5
      },
      {
        id: 2,
        label: 'Crear Permiso',
        slug: 'CreatePermission',
        link: '/school/create-school',
        icon: '',
        parentId: 5
      },
      {
        id: 2,
        label: 'Editar Permiso',
        slug: 'EditPermission',
        link: '/school/edit-school',
        icon: '',
        parentId: 5
      }
    ]
  },
  {
    id: 6,
    label: 'Componentes',
    icon: 'fa-solid fa-user',
    slug: 'ComponentMenu',
    subItems: [
      {
        id: 1,
        label: 'Listar Componentes',
        slug: 'ListarComponentes',
        link: '/automatic-components/list',
        icon: '',
        estado: true,
        parentId: 6
      }
    ]
  },
  {
    id: 7,
    label: 'Menú',
    icon: 'fa-solid fa-user',
    slug: 'MenuMenus',
    subItems: [
      {
        id: 1,
        label: 'Listar Menús',
        slug: 'ListarMenus',
        link: '/menu/list-menu',
        icon: '',
        estado: true,
        parentId: 7
      }
    ]
  },
  {
    id: 8,
    label: 'Sub-Menú',
    icon: 'fa-solid fa-user',
    slug: 'SubMenusMenu',
    subItems: [
      {
        id: 1,
        label: 'Listar SubMenus',
        slug: 'Listar SubMenus',
        link: '/submenu/list-submenu',
        icon: '',
        estado: true,
        parentId: 8
      }
    ]
  },
];