export default function Loading() {
  return (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <div className='text-center'>
        <div className='relative w-24 h-24 mx-auto mb-6'>
          <div className='absolute inset-0 border-4 border-neutral-800 rounded-full'></div>
          <div className='absolute inset-0 border-4 border-yellow-400 rounded-full border-t-transparent animate-spin'></div>
        </div>
        <p className='text-white text-xl font-semibold mb-2'>Loading...</p>
        <p className='text-gray-400'>Dropping those beats</p>
      </div>
    </div>
  )
}
