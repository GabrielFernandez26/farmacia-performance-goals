import { Link } from "react-router-dom"

function Navbar() {
  let navbarComponent

  navbarComponent = (<div className='w-full bg-blue-400 text-white flex justify-center py-4'>
    <div className="container flex justify-between text-lg">
      <div className='text-2xl font-bold uppercase'>Farmácia Gen</div>
      <div className='flex gap-4'>
        <Link to='/home' className='hover:underline'>Home</Link>
        <div className='hover:underline'>Produtos</div>
        <Link to='/categorias' className='hover:underline'>Categorias</Link>
      </div>
    </div>
  </div>)

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar