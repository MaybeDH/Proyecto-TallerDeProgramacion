using Microsoft.EntityFrameworkCore;
using WebApplication2.Modelsss;
using WebApplication2.Modelss;
using WebApplication2.Models;
using WebApplication2.Modelssss;
using WebApplication2.Modelsssss;

namespace WebApplication2.Context
{
    public class AplicacionContexto : DbContext
    {
        public AplicacionContexto
            (DbContextOptions<AplicacionContexto> options)
            : base(options) { }


        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Libro> Libro { get; set; }
        public DbSet<Calificaciones> Calificaciones { get; set; }
        public DbSet<Reservas> Reservas { get; set; }
        public DbSet<Prestamos> Prestamos { get; set; }


    }
}
