using Microsoft.AspNetCore.Mvc;
using WebApplication2.Context;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CalificacionesController : ControllerBase
    {
        private readonly ILogger<CalificacionesController> _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        public CalificacionesController(
            ILogger<CalificacionesController> logger,
            AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }
        //Create: Crear estudiantes
        [Route("")]
        [HttpPost]
        public IActionResult Post(
            [FromBody] Calificaciones calificaciones)
        {
            _aplicacionContexto.Calificaciones.Add(calificaciones);
            _aplicacionContexto.SaveChanges();
            return Ok(calificaciones);
        }
        //READ: Obtener lista de estudiantes
        [Route("")]
        [HttpGet]
        public IEnumerable<Calificaciones> Get()
        {
            return _aplicacionContexto.Calificaciones.ToList();
        }
        //Update: Modificar estudiantes
        [Route("r/id")]
        [HttpPut]
        public IActionResult Put([FromBody] Calificaciones calificaciones)
        {
            _aplicacionContexto.Calificaciones.Update(calificaciones);
            _aplicacionContexto.SaveChanges();
            return Ok(calificaciones);
        }
        //Delete: Eliminar estudiantes
        [Route("r/id")]
        [HttpDelete]
        public IActionResult Delete(int calificacionesID)
        {
            _aplicacionContexto.Calificaciones.Remove(
                _aplicacionContexto.Calificaciones.ToList()
                .Where(x => x.idCalificaciones == calificacionesID)
                .FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(calificacionesID);
        }
    }
}
