@echo off
echo Starting Papier Creations...
echo.
echo [1/2] Starting CMS Backend (Strapi)...
start "Papier CMS" cmd /k "cd backend && npm run develop"
echo.
echo [2/2] Starting Website Frontend...
start "Papier Website" cmd /k "npm run dev"
echo.
echo All services started! 
echo - Admin Panel: http://localhost:1337/admin
echo - Website: http://localhost:5174
echo.
pause
