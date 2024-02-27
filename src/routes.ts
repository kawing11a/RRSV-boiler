import React from 'react';

// Container
import _NoMatch from './core/containers/NoMatch';

import HelloWorld from "./helloworld/containers/HelloWorld";
import { BreadcrumbData } from "use-react-router-breadcrumbs";

export interface IRoute {
    icon?: React.FC;
    activeIcon?: React.FC;
    path: string;
    component: React.FC<any>;
    breadcrumb: string | ((props: BreadcrumbData<string>) => JSX.Element);
    props?: any;
}

const pocData: any = {
    data: {
        editorData: null,
    },
    setter: {
        updateEditorData: (value: any) => {
            pocData.data.editorData = value;
        },
    },
};

const routes: IRoute[] = [
    {
        path: '/',
        component: HelloWorld,
        breadcrumb: 'Hello World',
    },
    {
        path: '*',
        component: _NoMatch,
        breadcrumb: 'NoMatch',
    },
];

export default routes;
