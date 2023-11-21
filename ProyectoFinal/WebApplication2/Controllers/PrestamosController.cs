using Microsoft.AspNetCore.Mvc;
using WebApplication2.Context;
using WebApplication2.Modelsssss;

namespace WebApplication2.Controllersssss
{
    [ApiController]
    [Route("[controller]")]
    public class PrestamosController : ControllerBase
    {
        private readonly ILogger<PrestamosController> _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        public PrestamosController(
            ILogger<PrestamosController> logger,
            AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }
        //Create: Crear estudiantes
        [Route("")]
        [HttpPost]
        public IActionResult Post(
            [FromBody] Prestamos prestamos)
        {
            _aplicacionContexto.Prestamos.Add(prestamos);
            _aplicacionContexto.SaveChanges();
            return Ok(prestamos);
        }
        //READ: Obtener lista de estudiantes
        [Route("")]
        [HttpGet]
        public IEnumerable<Prestamos> Get()
        {
            return _aplicacionContexto.Prestamos.ToList();
        }
        //Update: Modificar estudiantes
        [Route("p/id")]
        [HttpPut]
        public IActionResult Put([FromBody] Prestamos prestamos)
        {
            _aplicacionContexto.Prestamos.Update(prestamos);
            _aplicacionContexto.SaveChanges();
            return Ok(prestamos);
        }
        //Delete: Eliminar estudiantes
        [Route("p/id")]
        [HttpDelete]
        public IActionResult Delete(int prestamosID)
        {
            _aplicacionContexto.Prestamos.Remove(
                _aplicacionContexto.Prestamos.ToList()
                .Where(x => x.idPrestamos == prestamosID)
                .FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(prestamosID);
        }
    }
}

