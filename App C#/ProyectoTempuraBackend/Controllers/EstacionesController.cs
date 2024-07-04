using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProyectoTempura.Clases;

namespace ProyectoTempura.Controllers
{
    public class EstacionesController : Controller
    {

        public string Index()
        {
            Simulador sim = new Simulador();
            return sim.getCarros();
        }
    }
}
