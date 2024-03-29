import Form from '@/pages/Form';

export const AppRoutes = {
  form: '/React_FormProduct',
};

interface RouteObject {
  path: string;
  element: React.ComponentType;
}

export const routes: RouteObject[] = [
  {
    path: AppRoutes.form,
    element: Form,
  },
];
