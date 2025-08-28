'use client';
import { PropsWithChildren, useEffect, useState } from 'react';


import { getTranslation } from '@/i18n';

function App({ children }: PropsWithChildren) {
   
    return (
        <div
           
        >
            { children}
        </div>
    );
}

export default App;
