using System.Web;
using System.Web.Optimization;

namespace BookService
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/angular-ui.css",
                      "~/Content/toaster.css",
                      "~/Content/angular-busy.css",
                      "~/Content/site.css"));

            //new code:
            bundles.Add(new ScriptBundle("~/bundles/ko").Include(
                    "~/Scripts/knockout-{version}.js",
                    "~/Scripts/knockoutapp.js"));

            bundles.Add(new ScriptBundle("~/bundles/ng").Include(                    
                    "~/Scripts/ClassUtility.js",
                    "~/Scripts/lodash.js",
                    "~/Scripts/angular.js",
                    "~/Scripts/angular-resource.js",
                    "~/Scripts/angular-route.js",
                    "~/Scripts/angular-animate.js",
                    "~/Scripts/angular-ui.js",
                    "~/Scripts/angular-ui/ui-bootstrap.js",
                    "~/Scripts/toaster.js",
                    "~/Scripts/angular-busy.js",
                    "~/Scripts/angular-class.js",
                    "~/Scripts/app/app.js",
                    "~/Scripts/app/BaseResourceService.js",                    
                    "~/Scripts/app/books/BookController.js",
                    "~/Scripts/app/books/BookService.js",
                    "~/Scripts/app/authors/AuthorService.js",
                    "~/Scripts/app/genres/GenreService.js"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            
            BundleTable.EnableOptimizations = false;
        }
    }
}
