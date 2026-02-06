import { useEffect } from 'react';

const AntiTheft = () => {
    useEffect(() => {
        // 1. Block Right Click
        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        // 2. Block Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+U, etc.)
        const handleKeyDown = (e) => {
            // F12
            if (e.key === 'F12') {
                e.preventDefault();
            }
            // Ctrl+Shift+I (DevTools)
            if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                e.preventDefault();
            }
            // Ctrl+Shift+J (Console)
            if (e.ctrlKey && e.shiftKey && e.key === 'J') {
                e.preventDefault();
            }
            // Ctrl+U (View Source)
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
            }
            // Ctrl+S (Save)
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // 3. CSS Overlay to blocking dragging/selecting images
    return (
        <style>{`
            img, video, canvas {
                pointer-events: none !important;
                -webkit-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
                -webkit-user-drag: none !important;
            }
        `}</style>
    );
};

export default AntiTheft;
