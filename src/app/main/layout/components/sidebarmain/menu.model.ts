export interface MenuItem {
  id?: number;
  label?: string;
  icon?: string;
  slug?: string;
  link?: string;
  subItems?: any;
  isTitle?: boolean;
  badge?: any;
  children?: any;
  parentId?: number;
  isLayout?: boolean;
}
