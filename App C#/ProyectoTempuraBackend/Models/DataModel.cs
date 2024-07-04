using DatabaseWrapper.Core;
using Watson.ORM;
using Watson.ORM.Core;

namespace ProyectoTempura.Models
{
    [Table("datos")]
    public class DatosModel
    {
        [Column("id", true, DataTypes.Int, false)]
        public int Id { get; set; }

        [Column("NumCarro", false, DataTypes.Int, false)]
        public int? NumCarro { get; set; }

        [Column("TotalPersonas", false, DataTypes.Int, false)]
        public int TotalPersonas { get; set; }
        
        [Column("TempCarro", false, DataTypes.Int, 10, 2, false)] 
        public int TempCarro { get; set; }
        
        [Column("PersonasSanas", false, DataTypes.Int, false)]
        public int? PersonasSanas { get; set; }

        [Column("PersonasEnfermas", false, DataTypes.Int, false)]
        public int? PersonasEnfermas { get; set; }
        
        [Column("FechaSalida", false, DataTypes.DateTime, false)]
        public DateTime? FechaSalida { get; set; }
      
        [Column("PesoPromedio", false, DataTypes.Decimal, 10, 2, false)]
        public decimal PesoPromedio { get; set; }
        
        public DatosModel()
        {
        } 
    }
}
