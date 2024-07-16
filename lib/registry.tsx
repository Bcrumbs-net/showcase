import React, { useState, useEffect } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({
    children,
}: {
    children: React.ReactNode
}) {
    const [styledComponentsStyleSheet, setStyledComponentsStyleSheet] = useState<ServerStyleSheet | null>(null);

    useEffect(() => {
        // Create the ServerStyleSheet only on the server-side
        if (typeof window === 'undefined') {
            const sheet = new ServerStyleSheet();
            setStyledComponentsStyleSheet(sheet);
        }
    }, []);

    useServerInsertedHTML(() => {
        if (styledComponentsStyleSheet) {
            const styles = styledComponentsStyleSheet.getStyleElement();
            styledComponentsStyleSheet.seal();
            return <>{styles}</>;
        }
        return null;
    });

    if (typeof window !== 'undefined' && styledComponentsStyleSheet) {
        return (
            <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
                {children}
            </StyleSheetManager>
        );
    }

    return <>{children}</>;
}