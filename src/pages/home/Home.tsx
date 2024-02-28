import farmaciaLogo from '../../assets/farmacia-logo.png'
// import './Home.css';
function Home() {
    return (
        <>
        <div className="bg-green-100 flex justify-center h-screen">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Venha conosco!</h2>
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Veja as ofertas</button>
              </div>
            </div>
  
            <div className="flex justify-center items-center">
              <img src={farmaciaLogo} alt="" className='w-2/3 h-max' />
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;