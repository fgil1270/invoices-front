import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Favorites',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/dashboard'],
                    },
                ],
            },
            {
                label: '',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Configuration',
                        icon: 'pi pi-fw pi-cog',
                        items: [
                            {
                                label: 'Views',
                                icon: 'pi pi-fw pi-eye',
                                routerLink: ['/view'],
                            },
                            {
                                label: 'Roles',
                                icon: 'pi pi-fw pi-sitemap',
                                routerLink: ['/role'],
                            },
                            {
                                label: 'Views-Roles',
                                icon: 'pi pi-fw pi-share-alt',
                                routerLink: ['/view-role'],
                            },
                            {
                                label: 'Users',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['/user'],
                            }
                        ]
                    },
                    
                ]
            },
            {
                label: '',
                icon: 'pi pi-fw pi-book',
                items: [
                    {
                        label: 'Catalogues',
                        icon: 'pi pi-fw pi-book',
                        items: [
                            {
                                label: 'Suppliers',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['/catalogues/supplier']
                            },
                            {
                                label: 'Black List',
                                icon: 'pi pi-fw pi-ban',
                                routerLink: ['/catalogues/black-list']
                            },
                            {
                                label: 'Employees',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['/employee']
                            },
                            {
                                label: 'CC',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['/catalogues/cc']
                            },
                            {
                                label: 'Banks',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['/catalogues/bank']
                            },
                            {
                                label: 'Payment Terms',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['/catalogues/payment-term']
                            }
                        ]
                    },
                    
                ]
            },
            {
                label: 'Documents',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'Documents',
                        icon: 'pi pi-fw pi-file',
                        items: [
                            {
                                label: 'Foreign Invoices',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/foreign-invoice']
                            },
                            {
                                label: 'Employee Expenses',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/documents/invoice']
                            },
                            {
                                label: 'Down Payments',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/documents/credit-note']
                            }
                        ]
                    },
                    
                ]
            },
            {
                label: 'Invoices',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'Invoices',
                        icon: 'pi pi-fw pi-file',
                        items: [
                            {
                                label: 'Assign',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/invoice']
                            },
                            {
                                label: 'User Release',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/invoices/invoice']
                            },
                            {
                                label: 'Purchasing',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/invoices/credit-note']
                            },
                            {
                                label: 'Accounting',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/invoices/accounting']
                            },
                            {
                                label: 'GM Release',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/invoices/gm-release']
                            },
                            {
                                label: 'Modify',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/invoices/modify']
                            },
                            {
                                label: 'Upload XML',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/invoices/upload-xml']
                            }
                        ]
                    },
                    
                ]
            },
            {
                label: 'Reports',
                icon: 'pi pi-fw pi-file',

            },

            {
                label: 'Apps',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Blog',
                        icon: 'pi pi-fw pi-comment',
                        items: [
                            {
                                label: 'List',
                                icon: 'pi pi-fw pi-image',
                                routerLink: ['/apps/blog/list'],
                            },
                            {
                                label: 'Detail',
                                icon: 'pi pi-fw pi-list',
                                routerLink: ['/apps/blog/detail'],
                            },
                            {
                                label: 'Edit',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/apps/blog/edit'],
                            },
                        ],
                    },
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/apps/calendar'],
                    },
                    {
                        label: 'Chat',
                        icon: 'pi pi-fw pi-comments',
                        routerLink: ['/apps/chat'],
                    },
                    {
                        label: 'Files',
                        icon: 'pi pi-fw pi-folder',
                        routerLink: ['/apps/files'],
                    },
                    {
                        label: 'Kanban',
                        icon: 'pi pi-fw pi-sliders-v',
                        routerLink: ['/apps/kanban'],
                    },
                    {
                        label: 'Mail',
                        icon: 'pi pi-fw pi-envelope',
                        items: [
                            {
                                label: 'Inbox',
                                icon: 'pi pi-fw pi-inbox',
                                routerLink: ['/apps/mail/inbox'],
                            },
                            {
                                label: 'Compose',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/apps/mail/compose'],
                            },
                            {
                                label: 'Detail',
                                icon: 'pi pi-fw pi-comment',
                                routerLink: ['/apps/mail/detail/1000'],
                            },
                        ],
                    },
                    {
                        label: 'Task List',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/apps/tasklist'],
                    },
                ],
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-fw pi-star-fill',
                items: [
                    {
                        label: 'Form Layout',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/uikit/formlayout'],
                    },
                    {
                        label: 'Input',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/uikit/input'],
                    },
                    {
                        label: 'Float Label',
                        icon: 'pi pi-fw pi-bookmark',
                        routerLink: ['/uikit/floatlabel'],
                    },
                    {
                        label: 'Invalid State',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/uikit/invalidstate'],
                    },
                    {
                        label: 'Button',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/uikit/button'],
                    },
                    {
                        label: 'Table',
                        icon: 'pi pi-fw pi-table',
                        routerLink: ['/uikit/table'],
                    },
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/uikit/list'],
                    },
                    {
                        label: 'Tree',
                        icon: 'pi pi-fw pi-share-alt',
                        routerLink: ['/uikit/tree'],
                    },
                    {
                        label: 'Panel',
                        icon: 'pi pi-fw pi-tablet',
                        routerLink: ['/uikit/panel'],
                    },
                    {
                        label: 'Overlay',
                        icon: 'pi pi-fw pi-clone',
                        routerLink: ['/uikit/overlay'],
                    },
                    {
                        label: 'Media',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/uikit/media'],
                    },
                    {
                        label: 'Menu',
                        icon: 'pi pi-fw pi-bars',
                        routerLink: ['/uikit/menu'],
                        routerLinkActiveOptions: {
                            paths: 'subset',
                            queryParams: 'ignored',
                            matrixParams: 'ignored',
                            fragment: 'ignored',
                        },
                    },
                    {
                        label: 'Message',
                        icon: 'pi pi-fw pi-comment',
                        routerLink: ['/uikit/message'],
                    },
                    {
                        label: 'File',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/uikit/file'],
                    },
                    {
                        label: 'Chart',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/uikit/charts'],
                    },
                    {
                        label: 'Misc',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/uikit/misc'],
                    },
                ],
            },
            {
                label: 'Prime Blocks',
                icon: 'pi pi-fw pi-prime',
                items: [
                    {
                        label: 'Free Blocks',
                        icon: 'pi pi-fw pi-eye',
                        routerLink: ['/blocks'],
                    },
                    {
                        label: 'All Blocks',
                        icon: 'pi pi-fw pi-globe',
                        url: ['https://www.primefaces.org/primeblocks-ng'],
                        target: '_blank',
                    },
                ],
            },
            {
                label: 'Utilities',
                icon: 'pi pi-fw pi-compass',
                items: [
                    {
                        label: 'PrimeIcons',
                        icon: 'pi pi-fw pi-prime',
                        routerLink: ['utilities/icons'],
                    },
                    {
                        label: 'Colors',
                        icon: 'pi pi-fw pi-palette',
                        routerLink: ['utilities/colors'],
                    },
                    {
                        label: 'PrimeFlex',
                        icon: 'pi pi-fw pi-desktop',
                        url: ['https://www.primefaces.org/primeflex/'],
                        target: '_blank',
                    },
             
                ],
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing'],
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login'],
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error'],
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access'],
                            },
                        ],
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud'],
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline'],
                    },
                    {
                        label: 'Invoice',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['/pages/invoice'],
                    },
                    {
                        label: 'Help',
                        icon: 'pi pi-fw pi-question-circle',
                        routerLink: ['/pages/help'],
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound'],
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty'],
                    },
                    {
                        label: 'FAQ',
                        icon: 'pi pi-fw pi-question',
                        routerLink: ['/pages/faq']
                    },
                    {
                        label: 'Contact Us',
                        icon: 'pi pi-fw pi-phone',
                        routerLink: ['/pages/contact']
                    }
                ],
            },
            {
                label: 'E-Commerce',
                icon: 'pi pi-fw pi-wallet',
                items: [
                    {
                        label: 'Product Overview',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['ecommerce/product-overview'],
                    },
                    {
                        label: 'Product List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['ecommerce/product-list'],
                    },
                    {
                        label: 'New Product',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['ecommerce/new-product'],
                    },
                    {
                        label: 'Shopping Cart',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['ecommerce/shopping-cart'],
                    },
                    {
                        label: 'Checkout Form',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['ecommerce/checkout-form'],
                    },
                    {
                        label: 'Order History',
                        icon: 'pi pi-fw pi-history',
                        routerLink: ['ecommerce/order-history'],
                    },
                    {
                        label: 'Order Summary',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['ecommerce/order-summary'],
                    },
                ],
            },
            {
                label: 'User Management',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['profile/list'],
                    },
                    {
                        label: 'Create',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['profile/create'],
                    },
                ],
            },
            {
                label: 'Hierarchy',
                icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 1.1.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 1.1.2',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 1.1.3',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 1.2.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.1.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 2.1.2',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.2.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Start',
                icon: 'pi pi-fw pi-download',
                items: [
                    {
                        label: 'Buy Now',
                        icon: 'pi pi-fw pi-shopping-cart',
                        url: ['https://www.primefaces.org/store'],
                    },
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-info-circle',
                        routerLink: ['/documentation'],
                    },
                ],
            },
        ];
    }
}
