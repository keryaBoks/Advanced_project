import React from 'react';

export interface Sidebaritemtype {
    path: string,
    text: string,
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean,
}
