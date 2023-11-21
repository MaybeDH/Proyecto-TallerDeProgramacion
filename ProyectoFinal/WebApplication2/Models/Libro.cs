using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Modelssss
{
    public class Libro
    {
        [Key]
        public int idLibro { get; set; }
        public string titulo { get; set; }
        public string autor { get; set; }
        public string genero { get; set; }
        public string fechaPublicacion { get; set; }
        public bool disponibilidad { get; set; }
        public string resumen { get; set; }








    }
}
