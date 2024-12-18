import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
};

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./demo/components/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    ),
            },
            {
                path: 'view',
                data: { breadcrumb: 'View' },
                loadChildren: () =>
                    import('./demo/components/view/view.module').then(
                        (m) => m.ViewModule
                    ),
            },
            {
                path: 'role',
                data: { breadcrumb: 'Role' },
                loadChildren: () =>
                    import('./demo/components/role/role.module').then(
                        (m) => m.RoleModule
                    ),
            },
            {
                path: 'view-role',
                data: { breadcrumb: 'Views-Roles' },
                loadChildren: () =>
                    import('./demo/components/view-role/view-role.module').then(
                        (m) => m.ViewRoleModule
                    ),
            },
            {
                path: 'user',
                data: { breadcrumb: 'Users' },
                loadChildren: () =>
                    import('./demo/components/user/user.module').then(
                        (m) => m.UserModule
                    ),
            },
            {
                path: 'employee',
                data: { breadcrumb: 'Employee' },
                loadChildren: () =>
                    import('./demo/components/employee/employee.module').then(
                        (m) => m.EmployeeModule
                    ),
            },
            {
                path: 'invoice',
                data: { breadcrumb: 'Invoice' },
                loadChildren: () =>
                    import('./demo/components/invoice/invoice.module').then(
                        (m) => m.InvoiceModule
                    ),
            },
            {
                path: 'foreign-invoice',
                data: { breadcrumb: 'Foreign Invoice' },
                loadChildren: () =>
                    import('./demo/components/factura-extranjera/factura-extranjera.module').then(
                        (m) => m.FacturaExtranjeraModule
                    ),
            },
            {
                path: 'uikit',
                data: { breadcrumb: 'UI Kit' },
                loadChildren: () =>
                    import('./demo/components/uikit/uikit.module').then(
                        (m) => m.UIkitModule
                    ),
            },
            {
                path: 'utilities',
                data: { breadcrumb: 'Utilities' },
                loadChildren: () =>
                    import('./demo/components/utilities/utilities.module').then(
                        (m) => m.UtilitiesModule
                    ),
            },
            {
                path: 'pages',
                data: { breadcrumb: 'Pages' },
                loadChildren: () =>
                    import('./demo/components/pages/pages.module').then(
                        (m) => m.PagesModule
                    ),
            },
            {
                path: 'profile',
                data: { breadcrumb: 'User Management' },
                loadChildren: () =>
                    import('./demo/components/profile/profile.module').then(
                        (m) => m.ProfileModule
                    ),
            },
            {
                path: 'documentation',
                data: { breadcrumb: 'Documentation' },
                loadChildren: () =>
                    import(
                        './demo/components/documentation/documentation.module'
                    ).then((m) => m.DocumentationModule),
            },
            {
                path: 'ecommerce',
                data: { breadcrumb: 'E-Commerce' },
                loadChildren: () =>
                    import('./demo/components/ecommerce/ecommerce.module').then(
                        (m) => m.EcommerceModule
                    ),
            },
            {
                path: 'apps',
                data: { breadcrumb: 'Apps' },
                loadChildren: () =>
                    import('./demo/components/apps/apps.module').then(
                        (m) => m.AppsModule
                    ),
            },
        ],
    },
    {
        path: 'auth',
        //redirectTo: 'auth',
        data: { breadcrumb: 'Auth' },
        loadChildren: () =>
            import('./demo/components/auth/auth.module').then(
                (m) => m.AuthModule
            ),
    },
    {
        path: 'notfound',
        loadChildren: () =>
            import('./demo/components/notfound/notfound.module').then(
                (m) => m.NotfoundModule
            ),
    },
    {
        path: 'landing',
        loadChildren: () =>
            import('./demo/components/landing/landing.module').then(
                (m) => m.LandingModule
            ),
    },
    { path: '**', redirectTo: '/notfound' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
