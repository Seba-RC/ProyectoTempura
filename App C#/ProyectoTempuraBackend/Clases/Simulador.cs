
using DatabaseWrapper.Core;
using ExpressionTree;
using Newtonsoft.Json;
using ProyectoTempura.Models;
using System.Reflection;
using Watson.ORM.Sqlite;
using Watson.ORM;
using Watson.ORM.Core;
using Microsoft.AspNetCore.Routing.Template;
using System.Linq;

namespace ProyectoTempura.Clases
{
    public class Carro
    {
        public int NumCarro { get; set; }
        public int TotalPersonas { get; set; }
        public int TemperaturaCarro { get; set; }
        public int PersonasSanas { get; set; }
        public int PersonasEnfermas { get; set; }
        public DateTime FechaSalida { get; set; }
        public decimal PesoPromedio { get; set; }
    }
    public class Simulador
    {
        public WatsonORM orm { get; set; }

        protected string[] Carros = { "Carro1", "Carro2", "Carro3", "Carro4", "Carro5", "Carro6", "Carro7", "Carro8" };

                
        public Simulador() {
            DatabaseSettings settings = new DatabaseSettings("./ProyectoTempura.db");
            this.orm = new WatsonORM(settings);
            this.orm.InitializeDatabase();
            this.orm.InitializeTable(typeof(DatosModel));
            // espacio para probar metodos. si necesitan probar generacion de base de datos usen metodos deleteDb() y generateData(). estan anotados para que sea mas facil, solo quiten los //
            // vvv
            deleteDb(); // borra Db
            generateData(); // genera datos (...)
            totalPersonasDia(DateTime.Now);
            totalPersonasHora(DateTime.Now);
            temperaturaCarroDia(1, DateTime.Now);
            temperaturaCarroHora(1, DateTime.Now);
            temperaturaTotalDia(DateTime.Now);
            temperaturaTotalHora(DateTime.Now);
            getCarro(1);
            tempMinimaTrenDia(DateTime.Now);
            tempMinimaTrenHora(DateTime.Now);
            porcentajeSanosCarro(1);
            porcentajeEnfermosCarro(1);
            porcentajeEnfermosTren();
            porcentajeSanosTren();
            tempMaximaTrenDia(DateTime.Now);
            tempMaximaTrenHora(DateTime.Now);
            promedioPersonas();
            // ^^^
        }
        public void Insert(Carro obj)
        {
            DatosModel entidad = new DatosModel { 
                NumCarro = obj.NumCarro,
                TotalPersonas = obj.TotalPersonas,
                TempCarro = obj.TemperaturaCarro,
                PersonasSanas = obj.PersonasSanas,
                PersonasEnfermas = obj.PersonasEnfermas,
                FechaSalida = obj.FechaSalida,
                PesoPromedio = obj.PesoPromedio,
                
            };

            this.orm.Insert<DatosModel>(entidad);
        }

        public string generateData()
        {
            Random random = new Random();
            List<Carro> lista = new List<Carro>();
            int peso_min = 50;
            int peso_max = 100;
            float min_temp = 36.1F;
            float max_temp = 39.0F;
            int i = 0;
            foreach (var carroNombre in Carros)
            {
                int personasEnfermas = 0;
                int personasSanas = 0;
                double tempCarro = 0;
                int pesoTotal = 0;
                int totalPersonas = random.Next(1, 201);
                for (int persona = 1; persona <= totalPersonas; persona++)
                {
                    float temperatura = (float)random.NextDouble() * (max_temp - min_temp) + min_temp;
                    int peso = random.Next(peso_min, peso_max + 1);

                    if (temperatura > 37.8)
                    {
                        personasEnfermas++;
                    }
                    else
                    {
                        personasSanas++;
                    }

                    tempCarro += temperatura;
                    pesoTotal += peso;
                }
                decimal temperaturaPromedio = (decimal)Math.Round((tempCarro + 400) / (totalPersonas + 28), 2);
                int roundedTemp = (int)(Math.Round(temperaturaPromedio));
                int pesoPromedio = pesoTotal / totalPersonas;

                Carro carro = new Carro
                {
                    NumCarro = i + 1,
                    TotalPersonas = totalPersonas,
                    TemperaturaCarro = roundedTemp,
                    PersonasSanas = personasSanas,
                    PersonasEnfermas = personasEnfermas,
                    FechaSalida = DateTime.Now,
                    PesoPromedio = pesoPromedio
                };
                lista.Add(carro);
                Insert(carro);
                i++;
            }

            return JsonConvert.SerializeObject(lista);
        }
#pragma warning disable CS8603 // Posible tipo de valor devuelto de referencia nulo
        public string getAllData()
        {
            List<DatosModel> data = orm.SelectMany<DatosModel>();
            Console.WriteLine(JsonConvert.SerializeObject(data));
            return JsonConvert.SerializeObject(data); 
        }
        public string getCarros()
        {
            return JsonConvert.SerializeObject(this.Carros);
        }
        public string deleteDb()
        {
            List<DatosModel> data = orm.SelectMany<DatosModel>();

            foreach (DatosModel item in data)
            {
                orm.Delete<DatosModel>(item);
            }

            return null;
        }
        public int totalPersonasDia(DateTime fecha) // devuelve el total de personas en un dia determinado
        {
            int total = 0;
            List<DatosModel> personas = orm.SelectMany<DatosModel>();
            List<DatosModel> personasFiltradas = personas.FindAll(p => p.FechaSalida.HasValue && p.FechaSalida.Value.Date == fecha.Date); // recorre la lista, buscando donde la fecha sea igual al valor entregado por el usuario
            foreach (DatosModel persona in personasFiltradas) {
                PropertyInfo pi = persona.GetType().GetProperty("TotalPersonas");
                int TotalPersonas = (int)(pi.GetValue(persona, null));
                total += TotalPersonas;
            }
            Console.WriteLine("Total de personas en el dia dado:");
            Console.WriteLine(total);
            return total;
        }
        public int totalPersonasHora(DateTime fecha) // devuelve el total de personas en una hora determinada
        {
            int total = 0;
            List<DatosModel> personas = orm.SelectMany<DatosModel>(); // selecciona toda la base de datos, transforma en lista
            List<DatosModel> personasFiltradas = personas.FindAll(p => p.FechaSalida.HasValue && p.FechaSalida.Value.TimeOfDay == fecha.TimeOfDay); // recorre la lista, buscando donde la fecha sea igual al valor entregado por el usuario
            foreach (DatosModel persona in personasFiltradas)
            {
                PropertyInfo pi = persona.GetType().GetProperty("TotalPersonas");
                int TotalPersonas = (int)(pi.GetValue(persona, null));
                total += TotalPersonas;
            }
            Console.WriteLine("Total de personas en la hora dada:");
            Console.WriteLine(total);
            return total;
        }
        public decimal temperaturaCarroDia(int numCarro, DateTime fecha) // devuelve la temperatura de un carro en un determinado dia
        {
            int temperatura = 0; // inicia el contador de temperatura
            Expr filtro1 = new Expr(
                "NumCarro", OperatorEnum.Equals, numCarro // filtra por carros que tienen el mismo numero de carro determinado
                );
            List<DatosModel> datos = orm.SelectMany<DatosModel>(filtro1).FindAll(p => p.FechaSalida.HasValue && p.FechaSalida.Value.Date == fecha.Date); // usa el filtro
            // ademas de usar el filtro, usamos FindAll para validar que los carros encontrados son del dia que el usuario busca
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("TempCarro"); 
                int Temp = (int)(temp.GetValue(carro, null)); // extrae la temperatura del carro
                temperatura += Temp;
            }
            Console.WriteLine("Temperatura del carro en el dia dado:");
            Console.WriteLine(temperatura);
            return (temperatura);
        }
        public decimal temperaturaCarroHora(int numCarro, DateTime fecha) // devuelve la temperatura de un carro en un determinado dia
        {
            int temperatura = 0; // 
            Expr filtro1 = new Expr(
                "NumCarro", OperatorEnum.Equals, numCarro // filtra por carro que tiene el mismo numero de carro determinado
                );
            List<DatosModel> datos = orm.SelectMany<DatosModel>(filtro1).FindAll(p => p.FechaSalida.HasValue && p.FechaSalida.Value.TimeOfDay== fecha.TimeOfDay); // usa el filtro
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("TempCarro");
                int Temp = (int)(temp.GetValue(carro, null)); // extrae la temperatura del carro
                temperatura += Temp;
                Console.WriteLine();
            }
            Console.WriteLine("Temperatura del carro en la hora dada:");
            Console.WriteLine(temperatura);
            return (temperatura);
        }
        
        public decimal temperaturaTotalHora(DateTime fecha) // devuelve la temperatura promedio del tren en una determinada hora
        {
            int i = 0; // contador de carros. lo usamos para poder dividir y conseguir el promedio
            int temperatura = 0; // inicia el contador de temperatura
            List<DatosModel> datos = orm.SelectMany<DatosModel>().FindAll(p => p.FechaSalida.HasValue && p.FechaSalida.Value.TimeOfDay == fecha.TimeOfDay); // no necesitamos filtro fuera de la fecha; tomamos todo el tren 
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("TempCarro");
                int Temp = (int)(temp.GetValue(carro, null)); // extrae la temperatura del carro
                temperatura += Temp;
                i++;
            }
            Console.WriteLine("Temperatura del tren en la hora dada:");
            Console.WriteLine(temperatura / 8);
            return (temperatura / 8);
        }
        
        public int temperaturaTotalDia(DateTime fecha)
        {
            int i = 0; // contador de carros. lo usamos para poder dividir y conseguir el promedio
            int temperatura = 0; // inicia el contador de temperatura
            List<DatosModel> datos = orm.SelectMany<DatosModel>().FindAll(p => p.FechaSalida.HasValue && p.FechaSalida.Value.Date == fecha.Date); // no necesitamos filtro fuera de la fecha; tomamos todo el tren 
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("TempCarro");
                int Temp = (int)(temp.GetValue(carro, null)); // extrae la temperatura del carro
                temperatura += Temp;
                i++;
            }
            Console.WriteLine("Temperatura del tren en el dia dado:");
            Console.WriteLine(temperatura / i);
            return (temperatura / i);
        }

        public string getCarro(int carro)
        {
            Expr filtro1 = new
            (
                "NumCarro", OperatorEnum.Equals, carro // filtra por carro que tiene el mismo numero de carro determinado
            );
            List<DatosModel> datos = orm.SelectMany<DatosModel>(filtro1);
            Console.WriteLine("Informacion del carro dado:");
            Console.WriteLine(JsonConvert.SerializeObject(datos));
            return JsonConvert.SerializeObject(datos);
        }
        
        public int tempMinimaTrenDia(DateTime fecha)
        {
            int[] temperaturas = new int[8]; // inicia array de temperaturas 
            int i = 0;
            List<DatosModel> datos = orm.SelectMany<DatosModel>().FindAll(p => p.FechaSalida.HasValue && p.FechaSalida.Value.Date == fecha.Date); // extrae datos de tren en fecha ingresada
            foreach(DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("TempCarro");
                int tempval = (int)(temp.GetValue(carro, null));
                temperaturas[i] = tempval; // agrega temperatura en el array donde corresponde
                i++;
            }
            Console.WriteLine("Temperatura minima del tren en el dia dado:");
            Console.WriteLine(temperaturas.Min());
            return temperaturas.Min(); // devuelve la temp. minima

        }

        public int tempMinimaTrenHora(DateTime fecha)
        {
            int[] temperaturas = new int[8];
            int i = 0;
            List<DatosModel> datos = orm.SelectMany<DatosModel>().FindAll(p => p.FechaSalida.HasValue && p.FechaSalida.Value.TimeOfDay == fecha.TimeOfDay);
            foreach(DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("TempCarro");
                int tempval = (int)(temp.GetValue(carro, null));
                temperaturas[i] = tempval;
                i++;
            }
            Console.WriteLine("Temperatura minima del tren en la hora dada:");
            Console.WriteLine(temperaturas.Min());
            return temperaturas.Min(); // devuelve la temp. minima
        }

        public int porcentajeSanosCarro(int Carro)
        {
            int sanos = 0;
            int total = 0;
            double porcentaje;
            Expr filtro1 = new
            (
                "NumCarro", OperatorEnum.Equals, Carro // filtra por carro que tiene el mismo numero de carro determinado
            );
            List<DatosModel> datos = orm.SelectMany<DatosModel>(filtro1);
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("TotalPersonas");
                total += (int)(temp.GetValue(carro, null)); // Extrae la cantidad de personas en el carro
            }
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("PersonasSanas");
                sanos += (int)(temp.GetValue(carro, null)); // Extrae la cantidad de personas sanas en el carro
            }
            if (total > 0)
            {
                porcentaje = ((double)sanos / total) * 100; // calcula el porcentaje
            }
            else
            {
                porcentaje = 0; // evitar division por 0
            }
            porcentaje = (int)porcentaje;
            Console.WriteLine("Porcentaje de sanos en el carro dado:");
            Console.WriteLine(porcentaje);
            return (int)porcentaje; 
        }


        public int porcentajeEnfermosCarro(int Carro)
        {
            int enfermos = 0;
            int total = 0;
            double porcentaje;
            Expr filtro1 = new
           (
               "NumCarro", OperatorEnum.Equals, Carro // filtra por carro que tiene el mismo numero de carro determinado
           );
            List<DatosModel> datos = orm.SelectMany<DatosModel>(filtro1);
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("TotalPersonas");
                total += (int)(temp.GetValue(carro, null)); // Extrae la cantidad de personas en el carro
            }
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("PersonasEnfermas");
                enfermos += (int)(temp.GetValue(carro, null)); // Extrae la cantidad de personas enfermas en el carro
            }
            if (total > 0)
            {
                porcentaje = ((double)enfermos / total) * 100; // calcula el porcentaje
            }
            else
            {
                porcentaje = 0; // evitar division por 0
            }
            porcentaje = (int)porcentaje;
            Console.WriteLine("Porcentaje de enfermos en el carro dado:");
            Console.WriteLine(porcentaje);
            return (int)porcentaje; // devuelve el porcentaje
        }
        
        public int porcentajeEnfermosTren()
        {
            int enfermos = 0;
            int total = 0;
            double porcentaje;

            List<DatosModel> datos = orm.SelectMany<DatosModel>();
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("TotalPersonas");
                total += (int)(temp.GetValue(carro, null)); // Extrae la cantidad de personas en el carro
            }
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("PersonasEnfermas");
                enfermos += (int)(temp.GetValue(carro, null)); // Extrae la cantidad de personas enfermas en el carro
            }
            porcentaje = (((double)enfermos / total) * 100); // calcula el porcentaje
            porcentaje = (int)porcentaje;
            Console.WriteLine("Porcentaje de enfermos en el tren:");
            Console.WriteLine(porcentaje);
            return (int)porcentaje; // devuelve el porcentaje
        }

        public int porcentajeSanosTren()
        {
            int sanos = 0;
            int total = 0;
            double porcentaje = 0;

            List<DatosModel> datos = orm.SelectMany<DatosModel>();
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("TotalPersonas");
                total += (int)(temp.GetValue(carro, null)); // Extrae la cantidad de personas en el carro
            }
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("PersonasSanas");
                sanos += (int)(temp.GetValue(carro, null)); // Extrae la cantidad de personas sanas en el carro
            }
            porcentaje = (((double)sanos / total) * 100); // calcula el porcentaje
            porcentaje = (int)porcentaje;
            Console.WriteLine("Porcentaje de sanos en el tren:");
            Console.WriteLine(porcentaje);
            return (int)porcentaje; // devuelve el porcentaje

        }
        
        public int tempMaximaTrenDia(DateTime fecha)
        {
            int[] temperaturas = new int[8]; // array
            int i = 0;
            List<DatosModel> datos = orm.SelectMany<DatosModel>().FindAll(p => p.FechaSalida.HasValue && p.FechaSalida.Value.Date == fecha.Date); // filtro dia
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("TempCarro");
                int tempval = (int)(temp.GetValue(carro, null));
                temperaturas[i] = tempval;
                i++;
            }
            Console.WriteLine("Temperatura maxima del tren en el dia dado:");
            Console.WriteLine(temperaturas.Max()); 
            return temperaturas.Max(); // devuelve el max. de temperatura en ese dia
        }
        
        public int tempMaximaTrenHora(DateTime fecha)
        {
            int[] temperaturas = new int[8];
            int i = 0;
            List<DatosModel> datos = orm.SelectMany<DatosModel>().FindAll(p => p.FechaSalida.HasValue && p.FechaSalida.Value.TimeOfDay == fecha.TimeOfDay); // filtro hora
            foreach (DatosModel carro in datos)
            {
                PropertyInfo temp = carro.GetType().GetProperty("TempCarro");
                int tempval = (int)(temp.GetValue(carro, null));
                temperaturas[i] = tempval;
                i++;
            }
            Console.WriteLine("Temperatura maxima del tren en la hora dada:");
            Console.WriteLine(temperaturas.Max());
            return temperaturas.Max(); // devuelve el max. de temperatura en esa hora
        }
        
        public int promedioPersonas()
        {
            int total = 0;
            List<DatosModel> datos = orm.SelectMany<DatosModel>();
            foreach (DatosModel persona in datos)
            {
                PropertyInfo pi = persona.GetType().GetProperty("TotalPersonas"); 
                int TotalPersonas = (int)(pi.GetValue(persona, null)); // obtiene el valor de 'totalpersonas' en ese carro
                total += TotalPersonas; // suma
            }
            Console.WriteLine("Promedio de personas por carro en el tren:");
            Console.WriteLine(total / 8);
            return (total / 8); // devolvemos el promedio dividiendo por numero de carros
        }

    }
}

