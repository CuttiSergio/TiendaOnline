import { useState } from 'react'
import Header from './components/Header'
import NavbarAdmin from './components/PaginaAdmin/NavbarAdmin'
import DashboardAdmin from './components/PaginaAdmin/DashboardAdmin'
import ListaProductos from './components/PaginaAdmin/ListaProductos'
import AgregarProducto from './components/PaginaAdmin/AgregarProducto'
import DetalleProducto from './components/PaginaAdmin/DetalleProducto'
import ListadoDeUsuarios from './components/PaginaAdmin/ListadoDeUsuarios'
import ListadoDeOrdenes from './components/PaginaAdmin/ListadoDeOrdenes'
import DetalleOrden from './components/PaginaAdmin/DetalleOrden'
import DetalleUsuario from './components/PaginaAdmin/DetalleUsuario'
import ListadoCategorias from './components/PaginaAdmin/ListadoCategorias'
import Footer from './components/Footer'
import PaginaPrincipal from './components/PaginaPrincipal'
import Login from './components/Login'
import Registro from './components/Registro'
import Recuperarcontraseña from './components/RecuperarContraseña'

function App() {
  const [vistaActual, setVistaActual] = useState('principal')

  const cambiarVista = (nuevaVista) => {
    setVistaActual(nuevaVista)
  }

  return (
    <>
      <Header cambiarVista={cambiarVista}/>
      <NavbarAdmin cambiarVista={cambiarVista} />
      {vistaActual === 'principal' && <PaginaPrincipal cambiarVista={cambiarVista} />}
      {vistaActual === 'dashboard' && <DashboardAdmin cambiarVista={cambiarVista} />}
      {vistaActual === 'productos' && <ListaProductos cambiarVista={cambiarVista} />}
      {vistaActual === 'agregar-producto' && <AgregarProducto cambiarVista={cambiarVista} />}
      {vistaActual === 'detalle-producto' && <DetalleProducto cambiarVista={cambiarVista} />}
      {vistaActual === 'usuarios' && <ListadoDeUsuarios cambiarVista={cambiarVista} />}
      {vistaActual === 'ordenes' && <ListadoDeOrdenes cambiarVista={cambiarVista} />}
      {vistaActual === 'categorias' && <ListadoCategorias cambiarVista={cambiarVista} />}
      {vistaActual === 'detalle-orden' && <DetalleOrden cambiarVista={cambiarVista} />}
      {vistaActual === 'detalle-usuario' && <DetalleUsuario cambiarVista={cambiarVista} />}
      {vistaActual === 'login' && <Login cambiarVista={cambiarVista} />}
      {vistaActual === 'registro' && <Registro cambiarVista={cambiarVista} />}
      {vistaActual === 'recuperarcontraseña' && <Recuperarcontraseña cambiarVista={cambiarVista} />}
      <Footer/>
    </>
    
  )
}

export default App