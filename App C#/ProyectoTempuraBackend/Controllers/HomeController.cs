using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProyectoTempura.Clases;

namespace ProyectoTempura.Controllers
{
    public class HomeController : Controller
    {
        public String Index()
        {
            Simulador sim = new Simulador();
            return sim.getAllData();
        }

        [HttpPost]
        public String Create()
        {
            Simulador sim = new Simulador();
            return sim.generateData();
        }
    }


}
