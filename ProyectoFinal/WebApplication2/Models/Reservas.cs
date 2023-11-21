
using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Modelss
{
    public class Reservas
    {
        [Key]
        public int idReservas { get; set; }
        public int idLibro { get; set; }
        public int idUsuario { get; set; }
        public string FechaReserva { get; set; }
        public bool estado { get; set; }
        



    }
}
