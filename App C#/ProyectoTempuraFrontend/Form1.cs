using ProyectoTempura.Clases;
using ProyectoTempura.Controllers;
using ProyectoTempura.Models;

// TAREAS
// CONECTAR CON BASE DE DATOS SQL
// AGREGAR INPUT DE USUARIO A LAS FUNCIONES QUE LO NECESITAN
// FRAMEWORK GENERAL HECHO. BOTONES CON DESCRIPCIONES COMENTADAS.

namespace ProyectoTempuraFrontend
{
    public partial class Form1 : Form
    {
        private Simulador simulador;

        public Form1()
        {
            InitializeComponent();

            // Inicializa el simulador con la conexión a la base de datos
            simulador = new Simulador();
        }
        private void button1_Click(object sender, EventArgs e) // getAllData
        {

        }

        private void button2_Click(object sender, EventArgs e) // ejemplo. generatedata
        {
            string resultado = simulador.generateData(); // genera datos con el click
            MessageBox.Show(resultado); // muestra mediante mensaje
            // problema es que no esta tomando de o ingresando datos a SQL. arreglar esto
        }

        private void button3_Click(object sender, EventArgs e) // deleteDb
        {

        }

        private void button4_Click(object sender, EventArgs e) // totalPersonasDia
        {

        }

        private void button5_Click(object sender, EventArgs e) // totalPersonasHora
        {

        }

        private void button6_Click(object sender, EventArgs e) // temperaturaCarroDia
        {
            // AGREGAR INPUT DE FECHA O USAR DateTime.Now POR AHORA
        }

        private void button7_Click(object sender, EventArgs e) // temperaturaCarroHora
        {
            // AGREGAR INPUT DE FECHA O USAR DateTime.Now POR AHORA
        }

        private void button8_Click(object sender, EventArgs e) // temperaturaTotalHora
        {
            // AGREGAR INPUT DE FECHA O USAR DateTime.Now POR AHORA
        }

        private void button9_Click(object sender, EventArgs e) // temperaturaTotalDia
        {
            // AGREGAR INPUT DE FECHA O USAR DateTime.Now POR AHORA
        }

        private void button10_Click(object sender, EventArgs e) // getCarro
        {
            // AGREGAR INPUT DE CARRO 
        }

        private void button11_Click(object sender, EventArgs e) // tempMinimaTrenDia
        {
            // AGREGAR INPUT DE FECHA O USAR DateTime.Now POR AHORA
        }

        private void button12_Click(object sender, EventArgs e) // tempMinimaTrenHora
        {
            // AGREGAR INPUT DE FECHA O USAR DateTime.Now POR AHORA
        }

        private void button13_Click(object sender, EventArgs e) // porcentajeSanosCarro
        {

        }

        private void button14_Click(object sender, EventArgs e) // porcentajeEnfermosCarro
        {

        }

        private void button15_Click(object sender, EventArgs e) // porcentajeSanosTren
        {

        }

        private void button16_Click(object sender, EventArgs e) // porcentajeEnfermosTren
        {

        }

        private void button17_Click(object sender, EventArgs e) // tempMaximaTrenDia
        {
            // AGREGAR INPUT DE FECHA O USAR DateTime.Now POR AHORA
        }

        private void button18_Click(object sender, EventArgs e) // promedioPersonas
        {

        }
    }
}