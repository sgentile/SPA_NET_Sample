Follow below steps:

1) First go to Server Explorer in Visual Studio, check if the ".mdf" Data Connections for this project are connected, if so, right click and delete.

2 )Go to Solution Explorer, click show All Files icon.

3) Go to App_Data, right click and delete all ".mdf" files for this project.

4) Delete Migrations folder by right click and delete.

5) Go to SQL Server Management Studio, make sure the DB for this project is not there, otherwise delete it.

6) Go to Package Manager Console in Visual Studio

input "Enable-Migrations"   Enable-Migrations -ContextTypeName BookService.Models.BookServiceContext
input "Add-Migration init"
input "Update-Database"
7) Run your application

Note: In step 6 part 3, if you get an error "Cannot attach the file...", it is possibly because you didn't delete the database files completely in SQL Server.

(Also, you might have to locally create the BookService.mdf file - create App_Data folder and add it)