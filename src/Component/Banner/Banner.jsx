import BannerImg from '../../assets/BannerImg.jpg'


function Banner(){
   return(
    <div className='w-full h-[25rem] relative'>
        <img 
          src={BannerImg}
          className='w-full h-full'
        />
        <div className='absolute top-10 left-0 right-0 mx-auto w-[20rem] '>
          <div className='flex flex-col gap-4'>
            <div className='font-semibold text-5xl text-white'>
              Crypto Tracker
            </div>
            <div className='font-semibold text-sm text-white text-center'>
              Get All Information Regarding Crypto
            </div>
          </div>
        </div>
    </div>
   );
}

export default Banner;