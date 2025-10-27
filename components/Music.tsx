'use client'

interface Video {
  id: string
  videoId: string
  title: string
}

export default function Music() {
  // Official YouTube videos from Lazarus channel
  const videos: Video[] = [
    { id: '1', videoId: 'et1IEh8AtYw', title: 'Video 1' },
    { id: '2', videoId: 'BiMWSfzmrpU', title: 'Video 2' },
    { id: '3', videoId: 'ReoSUfChqCg', title: 'Video 3' },
    { id: '4', videoId: 'c30SEWFWRyQ', title: 'Video 4' },
    { id: '5', videoId: 'd-2UHwp8dl4', title: 'Video 5' },
    { id: '6', videoId: 'pmnjGk2TINE', title: 'Video 6' },
    { id: '7', videoId: 'VHFlPRdeSQ8', title: 'Video 7' },
    { id: '8', videoId: '2LOCu2o8K8Q', title: 'Video 8' },
    { id: '9', videoId: 'Orhjjc5ksro', title: 'Video 9' },
    { id: '10', videoId: 'F9WQ94Gpmuk', title: 'Video 10' },
    { id: '11', videoId: 'XI_VjcfQCsQ', title: 'Video 11' },
    { id: '12', videoId: 'sueBQjjAx84', title: 'Video 12' },
    { id: '13', videoId: 'UBtJS0Rn2mM', title: 'Video 13' },
    { id: '14', videoId: '-lQ9DPzizIA', title: 'Video 14' },
    { id: '15', videoId: 'ocZpL5Azi3s', title: 'Video 15' },
    { id: '16', videoId: 'LHKWL_mbReU', title: 'Video 16' },
    { id: '17', videoId: '2-TX9DZPB8g', title: 'Video 17' },
    { id: '18', videoId: 'MNqyLHDN2l4', title: 'Video 18' },
    { id: '19', videoId: '5ncjRG0f4JI', title: 'Video 19' },
    { id: '20', videoId: 'Hos57HFnrXw', title: 'Video 20' },
    { id: '21', videoId: 'Qce1ZSthklo', title: 'Video 21' },
    { id: '22', videoId: '7tX0erxqjM0', title: 'Video 22' },
  ]

  // Duplicate videos array for seamless loop
  const duplicatedVideos = [...videos, ...videos]

  return (
    <section id="music" className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Visually Appealing Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative line above */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <div className="mx-4">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-fadeInUp">
            Official Music Videos
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light animate-fadeInUp animation-delay-200">
            Experience the visual artistry of Lazarus
          </p>
          
          {/* Decorative line below */}
          <div className="mt-6 flex items-center justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Vertical Scrolling Carousel with Fade Effects */}
        <div className="relative h-[600px] overflow-hidden">
          {/* Top Fade Overlay */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Bottom Fade Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="animate-scroll-vertical-slow space-y-6 py-8">
            {/* Create pairs of videos for 2-column layout */}
            {Array.from({ length: Math.ceil(duplicatedVideos.length / 2) }).map((_, pairIndex) => (
              <div key={`pair-${pairIndex}`} className="grid grid-cols-2 gap-6 px-4">
                {duplicatedVideos.slice(pairIndex * 2, pairIndex * 2 + 2).map((video, index) => (
                  <div
                    key={`${video.id}-${pairIndex}-${index}`}
                    className="group relative overflow-hidden rounded-xl bg-black transition-all duration-300"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                        alt={`Lazarus - ${video.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to hqdefault if maxresdefault doesn't exist
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                      
                      {/* Play Button Overlay */}
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label={`Watch ${video.title} on YouTube`}
                      >
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </a>
                    </div>
                    
                    {/* Video Title */}
                    <div className="p-4">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold hover:text-purple-400 transition-colors"
                      >
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@LazDetroit/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            View All Videos on YouTube
          </a>
        </div>

        {/* Streaming Platforms */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Stream Everywhere
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://open.spotify.com/artist/5KZfRaQHfjizCZsoRV9vqA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
            <a
              href="https://music.apple.com/artist/YOUR_ARTIST_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.455-2.865 2.78-.192.448-.292.925-.363 1.408a10.61 10.61 0 00-.1 1.18c-.01.193-.01.193-.01.383v11.653c0 .194.003.193.01.387.01.4.024.797.09 1.188.245 1.403.875 2.61 2.008 3.532.71.578 1.537.94 2.455 1.1.495.085 1 .106 1.502.116.085.002.168.01.252.01h12.021c.139-.007.28-.01.418-.025.655-.036 1.3-.129 1.93-.328 1.557-.485 2.693-1.437 3.36-2.963.24-.548.36-1.13.428-1.72.05-.424.065-.853.065-1.28V6.254c0-.05-.003-.097-.007-.13zM12.633 4.846c.69.006 1.38-.002 2.07.002.396.002.79.03 1.18.092.363.058.703.175 1.018.37.605.375.938.918 1.028 1.622.048.377.042.754.008 1.13-.07.74-.53 1.24-1.226 1.524-.432.176-.888.205-1.347.2-.965-.01-1.93-.003-2.894-.007-.05 0-.1-.008-.154-.013v-4.92zm-3.95 9.404c0-.626.007-1.25-.002-1.877-.012-.812.227-1.54.767-2.16.603-.692 1.396-1.026 2.328-1.026 1.096 0 2.192-.01 3.288.003.644.006 1.264.15 1.84.49.883.52 1.39 1.29 1.556 2.28.03.176.043.354.043.532.003 3.413.003 6.826 0 10.24 0 .197-.007.395-.025.59-.083.906-.575 1.59-1.44 1.918-.42.158-.862.22-1.313.22-1.057.004-2.113.004-3.17 0-.585 0-1.148-.103-1.68-.352-.84-.396-1.35-1.048-1.57-1.95-.05-.204-.074-.413-.074-.622-.004-2.562-.004-5.123 0-7.685z"/>
              </svg>
              Apple Music
            </a>
            <a
              href="https://soundcloud.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.05 0-.09.04-.099.098L0 14.479l.176 1.318c0 .055.045.094.09.094.05 0 .09-.047.098-.094l.199-1.318-.18-1.328c-.015-.05-.059-.098-.105-.098m1.83-1.229c-.06 0-.113.055-.113.117l-.195 2.516.195 2.453c0 .062.053.117.113.117.06 0 .112-.055.112-.117l.217-2.453-.217-2.516c0-.062-.052-.117-.112-.117m.928-.994c-.065 0-.118.055-.127.121l-.179 3.43.179 3.36c0 .065.062.12.127.12s.118-.055.118-.12l.21-3.36-.21-3.43c0-.066-.053-.12-.118-.12m.974-.993c-.07 0-.127.058-.127.134l-.165 4.39.165 4.334c0 .076.055.133.127.133.07 0 .126-.057.126-.133l.195-4.334-.195-4.39c0-.077-.055-.134-.126-.134m1.016-.993c-.08 0-.139.06-.139.142l-.147 5.358.147 5.334c0 .082.061.142.139.142.08 0 .142-.06.142-.142l.167-5.334-.167-5.358c0-.082-.061-.142-.142-.142m.987-.992c-.085 0-.15.062-.15.148l-.138 6.25.138 6.154c0 .086.065.148.15.148.085 0 .151-.062.151-.148L7.58 14.479l-.13-6.25c0-.086-.066-.148-.151-.148m1.014-.995c-.093 0-.163.068-.163.161l-.124 7.205.124 7.06c0 .094.07.162.163.162.094 0 .165-.068.165-.162l.143-7.06-.143-7.205c0-.093-.071-.161-.165-.161m1.013-.992c-.097 0-.174.07-.174.174l-.113 8.096.113 7.975c0 .105.077.175.174.175.098 0 .175-.07.175-.175l.13-7.975-.13-8.096c0-.103-.077-.174-.175-.174m1.01-.992c-.102 0-.184.074-.184.187l-.104 9.008.104 7.947c0 .112.082.186.184.186.103 0 .184-.074.184-.186l.12-7.947-.12-9.008c0-.113-.081-.187-.184-.187m1.016-.992c-.106 0-.19.076-.19.19l-.096 9.898.096 7.927c0 .116.084.19.19.19.104 0 .19-.074.19-.19l.11-7.927-.11-9.898c0-.114-.086-.19-.19-.19m.94-.913c-.1 0-.18.077-.18.189l-.09 10.812.09 7.961c0 .112.08.189.18.189.1 0 .18-.077.18-.189l.1-7.961-.1-10.812c0-.112-.08-.189-.18-.189m1.008-.992c-.11 0-.197.083-.197.197l-.082 11.804.082 7.927c0 .114.087.198.197.198.11 0 .198-.084.198-.198l.095-7.927-.095-11.804c0-.114-.088-.197-.198-.197m1.016-.991c-.115 0-.206.087-.206.206l-.074 12.795.074 7.929c0 .12.091.207.206.207.116 0 .207-.087.207-.207l.086-7.929-.086-12.795c0-.119-.091-.206-.207-.206m1.009-.993c-.12 0-.214.092-.214.223l-.066 13.769.066 7.949c0 .13.094.223.214.223.121 0 .216-.092.216-.223l.075-7.949-.075-13.769c0-.13-.095-.223-.216-.223m1.015-.992c-.126 0-.223.098-.223.235l-.058 14.74.058 7.956c0 .138.097.235.223.235.126 0 .224-.097.224-.235l.066-7.956-.066-14.74c0-.137-.098-.235-.224-.235m1.01-.991c-.13 0-.232.102-.232.244l-.05 15.697.05 7.958c0 .143.102.243.232.243.13 0 .232-.1.232-.243l.058-7.958-.058-15.697c0-.142-.102-.244-.232-.244m1.012-.992c-.135 0-.24.106-.24.25l-.042 16.674.042 7.958c0 .145.105.25.24.25.136 0 .241-.105.241-.25l.05-7.958-.05-16.674c0-.144-.105-.25-.241-.25"/>
              </svg>
              SoundCloud
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
