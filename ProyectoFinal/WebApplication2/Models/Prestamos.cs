using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Modelsssss
{
    public class Prestamos
    {
        [Key]
        public int idPrestamos { get; set; }
        public int idLibro { get; set; }
        public int idUsuario { get; set; }
        public string fechaPrestamo { get; set; }
        public string fechaDevolucion { get; set; }
        




    }
}
