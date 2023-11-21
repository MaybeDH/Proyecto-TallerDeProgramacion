using Microsoft.AspNetCore.Mvc;
using WebApplication2.Context;
using WebApplication2.Modelssss;

namespace WebApplication2.Controllerssss
{
    [ApiController]
    [Route("[controller]")]
    public class LibrosController : ControllerBase
    {
        private readonly ILogger<LibrosController> _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        public LibrosController(
            ILogger<LibrosController> logger,
            AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }
        //Create: Crear estudiantes
        [Route("")]
        [HttpPost]
        public IActionResult Post(
            [FromBody] Libro libro)
        {
            _aplicacionContexto.Libro.Add(libro);
            _aplicacionContexto.SaveChanges();
            return Ok(libro);
        }
        //READ: Obtener lista de estudiantes
        [Route("")]
        [HttpGet]
        public IEnumerable<Libro> Get()
        {
            return _aplicacionContexto.Libro.ToList();
        }
        //Update: Modificar estudiantes
        [Route("y/id")]
        [HttpPut]
        public IActionResult Put([FromBody] Libro libro)
        {
            _aplicacionContexto.Libro.Update(libro);
            _aplicacionContexto.SaveChanges();
            return Ok(libro);
        }
        //Delete: Eliminar estudiantes
        [Route("y/id")]
        [HttpDelete]
        public IActionResult Delete(int libroID)
        {
            _aplicacionContexto.Libro.Remove(
                _aplicacionContexto.Libro.ToList()
                .Where(x => x.idLibro == libroID)
                .FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(libroID);
        }
    }
}
