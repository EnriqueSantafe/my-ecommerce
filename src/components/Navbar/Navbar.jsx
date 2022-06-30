const Navbar = () => {
  return (
    <>
      <div className='container'>
        <nav className='nav'>
          <div className='nav_brand'>
            <a href='www.mimarca.es' className='nav_link'>Mi Marca</a>
          </div>
          <ul className='nav_list'>
            <li>
              <a href='www.mimarca.es/categoria1' className='nav_link'>Categoría1</a>
            </li>
            <li>
              <a href='www.mimarca.es/categoria2' className='nav_link'>Categoría2</a>
            </li>
            <li>
              <a href='www.mimarca.es/categoria3' className='nav_link'>Categoría3</a>
            </li>
            <li>
              <a href='www.mimarca.es/carrito' className='nav_link'>Carrito</a>
            </li>
            <li>
              <a href='www.mimarca.es/contacto' className='nav_link'>Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar