import React from 'react';

declare module '*.svg' {
    import { FunctionComponent, SVGAttributes } from 'react';

    export default FunctionComponent<SVGAttributes<SVGElement>>;
}
