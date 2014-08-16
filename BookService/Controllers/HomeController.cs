using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BookService.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index ()
        {
            ViewBag.Title = "Home Page";

            return View();            
        }
        public ActionResult Angular()
        {
            ViewBag.Title = "Angular Home Page";

            return View();
        }

        public ActionResult Knockout()
        {
            ViewBag.Title = "Knockout Home Page";

            return View();
        }
    }
}
