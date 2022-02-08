import cardBgImg from './Img/illustration-hero.svg'
import MusicSign from './Img/icon-music.svg'

function App() {
  return (
    <>
      <div className="h-screen  heroBg grid place-items-center">
        <div className="w-10/12 md:w-3/12 rounded-lg bg-white text-">
          <div className="grid justify-items-center">
            <img src={cardBgImg} alt="" className='rounded-t-xl' />
            <div className="py-6 px-4">
              <h2 className="text-3xl font-extrabold py-4 text-center">Order Summary</h2>

              <p className='text-base text-center  text-dBlue'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
              <div className="w-100 grid grid-cols-3 content-center bg-vPaleBlue  my-4 mx-2 py-4 px-4 rounded-xl">
                <div className=" col-span-2 flex flex-row px-2">
                  <img src={MusicSign} alt="" />
                  <div className=" w-8/12 text-center">
                    <h3 className='text-md font-extrabold'>Annual Plan</h3>
                    <p className='text-base text-dBlue'>$59.99/year</p>
                  </div>
                </div>
                <div className="col-span-1 flex items-center justify-end">
                  <a href="/" className='text-brightBlue underline text-sm font-bold hover:no-underline hover:text-brightBlue/50'>Change</a>
                </div>
              </div>

              <a href='/' className="w-100 grid grid-cols-1 content-center bg-brightBlue hover:bg-brightBlue/50  text-white text-center font-semibold  my-2 mx-2 py-3 px-4 rounded-lg shadow-lg shadow-vPaleBlue">Proceed to Payment</a>

              <a href='/' className="w-100 grid grid-cols-1 content-center bg-vPaleBlue text-dBlue text-center font-semibold  my-2 mx-2 py-3 px-4 rounded-lg shadow-lg shadow-vPaleBlue hover:text-black">Cancel Order</a>


            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
