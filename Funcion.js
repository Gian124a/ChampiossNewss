function Boton(){
    let Menu = document.getElementById('Menu');
    let nav = document.getElementById('nav').style.display = 'none';

    if (Menu.style.display === 'none') {
        Menu.style.display = 'initial';
    }
    else{
        Menu.style.display = 'none';
    }
}
function Boton2(){
    let Menu = document.getElementById('Menu').style.display = 'none';
    let nav = document.getElementById('nav');
    if (nav.style.display === 'none') {
        nav.style.display = 'initial';
    }
    else{
        nav.style.display = 'none';
    }
}
function BotonBusqueda(){
    document.getElementById('Fondo').style.display = 'initial';
    document.getElementById('Busqueda').style.display = 'grid';
}
function BotonCerrar(){
    let Fondo = document.getElementById('Fondo');
    let Busqueda = document.getElementById('Busqueda');
    if (Fondo.style.display == 'initial' && Busqueda.style.display == 'grid') {
        Fondo.style.display = 'none';
        Busqueda.style.display = 'none';
    }
}
function Opciones(){
    let Perfil = document.getElementById('Perfil-Datos');
    let Editar = document.getElementById('Ajustes');
    let Configuracion = document.getElementById('Confi');
    document.getElementById('Perfilito').textContent = 'Perfil';

    Perfil.style.display = 'grid';
    Editar.style.display = 'none';
    Configuracion.style.display = 'none';
}
function Opciones2(){
    let Perfil = document.getElementById('Perfil-Datos');
    let Editar = document.getElementById('Ajustes');
    let Configuracion = document.getElementById('Confi');
    document.getElementById('Perfilito').textContent = 'Editar Perfil';

    Perfil.style.display = 'none';
    Editar.style.display = 'grid';
    Configuracion.style.display = 'none';
}
function Opciones3(){
    let Perfil = document.getElementById('Perfil-Datos');
    let Editar = document.getElementById('Ajustes');
    let Configuracion = document.getElementById('Confi');
    document.getElementById('Perfilito').textContent = 'Configuracion';

    Perfil.style.display = 'none';
    Editar.style.display = 'none';
    Configuracion.style.display = 'grid';
}
function Botoncito() {
    const Boton = document.getElementById('Button');
    const Fondo = document.getElementById('Fondo-Boton');
    const Boton2 = document.getElementById('Boton');
    Boton.classList.toggle('Active');
    Boton2.classList.toggle('Active');
}
function CambiarPantalla(pantallaActual, pantallaSiguiente, circuloSiguiente) {
    const pantallaActualElemento = document.getElementById(pantallaActual);
    const pantallaSiguienteElemento = document.getElementById(pantallaSiguiente);
    const circuloSiguienteElemento = document.getElementById(circuloSiguiente);

    circuloSiguienteElemento.style.background = 'gray';
    pantallaActualElemento.style.display = 'none';
    pantallaSiguienteElemento.style.display = 'grid';
}
function DevolverPantalla(pantallaActual, pantallaAtras) {
    const pantallaActualElemento = document.getElementById(pantallaActual);
    const pantallaSiguienteElemento = document.getElementById(pantallaAtras);
    pantallaActualElemento.style.display = 'none';
    pantallaSiguienteElemento.style.display = 'grid';
}
function Datos(Jugadorito, Datosito) {
    const Datos = document.getElementById(Datosito);
    const Jugador = document.getElementById(Jugadorito);
    if (Datos.style.bottom == '-100px') {
        Datos.style.bottom = '15px';
        Jugador.style.bottom = '70px';
    } else {
        Datos.style.bottom = '-100px';
        Jugador.style.bottom = '20px';
    }
}
function scrollToSection(Jugadores) {
    const section = document.getElementById(Jugadores);
    section.scrollIntoView({ behavior: 'smooth' });
}
function ColorEquipo(Equipo_Elegido){
    const Equipo = document.getElementById(Equipo_Elegido);
    var colores = {
        colorBorde1: '#1B49F5',
        background: '#FFFFFF'
    };
    if (Equipo.textContent == 'Real Madrid CF') {
        window.localStorage.setItem('colores', JSON.stringify(colores));

    }
    
}
window.addEventListener('DOMContentLoaded', function() {
    const Borde = document.getElementById('Logros1');
    const Contenedor = document.getElementById('Contenedor-Texto');
    const colorBorde = JSON.parse(window.localStorage.getItem('colores'));
    if (colorBorde) {
        Borde.style.borderColor = colorBorde.colorBorde1;
        Contenedor.style.background = colorBorde.background;

    }
});

