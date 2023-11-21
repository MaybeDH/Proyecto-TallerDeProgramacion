using Microsoft.AspNetCore.Mvc;
using WebApplication2.Context;
using WebApplication2.Modelss;

namespace WebApplication2.Controllerss
{
    [ApiController]
    [Route("[controller]")]
    public class RegistroController : ControllerBase
    {
        private readonly ILogger<RegistroController> _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        public RegistroController(
            ILogger<RegistroController> logger,
            AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }
        //Create: Crear estudiantes
        [Route("")]
        [HttpPost]
        public IActionResult Post(
            [FromBody] Reservas reservas)
        {
            _aplicacionContexto.Reservas.Add(reservas);
            _aplicacionContexto.SaveChanges();
            return Ok(reservas);
        }
        //READ: Obtener lista de estudiantes
        [Route("")]
        [HttpGet]
        public IEnumerable<Reservas> Get()
        {
            return _aplicacionContexto.Reservas.ToList();
        }
        //Update: Modificar estudiantes
        [Route("w/id")]
        [HttpPut]
        public IActionResult Put([FromBody] Reservas reservas)
        {
            _aplicacionContexto.Reservas.Update(reservas);
            _aplicacionContexto.SaveChanges();
            return Ok(reservas);
        }
        //Delete: Eliminar estudiantes
        [Route("w/id")]
        [HttpDelete]
        public IActionResult Delete(int reservasID)
        {
            _aplicacionContexto.Reservas.Remove(
                _aplicacionContexto.Reservas.ToList()
                .Where(x => x.idReservas == reservasID)
                .FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(reservasID);
        }
    }
}

