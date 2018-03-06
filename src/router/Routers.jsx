import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {routes} from './ReactParcel.config.js'

export default (
    <div>
        <BrowserRouter basename={''}>
            <div>
                {renderRoutes(routes)}
            </div>
        </BrowserRouter>
    </div>
)


