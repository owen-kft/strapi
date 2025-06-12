@REM xcopy D:\projects_tryOut\strapi\packages\core\admin\dist D:\projects\kft-cms\node_modules\@strapi\admin\dist /E /I /Y

rmdir D:\projects\kft-cms\kft-patch\strapi-admin-dist-4-25-22 /s /q
xcopy D:\projects_tryOut\strapi\packages\core\admin\dist D:\projects\kft-cms\kft-patch\strapi-admin-dist-4-25-22 /E /I /Y
