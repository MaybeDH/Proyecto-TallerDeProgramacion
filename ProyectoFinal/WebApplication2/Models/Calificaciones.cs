using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class Calificaciones
    {
        [Key]
        public int idCalificaciones { get; set; }
        public int idLibro { get; set; }
        public int idUsuario { get; set; }
        public int Calificacion { get; set; }
        public string Resenia { get; set; }
        
        




    }
}
