using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Modelsss
{
    public class Usuario
    {
        [Key]
        public int idUsuario { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public int ci { get; set; }
        public string email { get; set; }
        public string contracenia { get; set; }
        public string Rol { get; set; }




    }
}
