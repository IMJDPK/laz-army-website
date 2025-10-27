export default function LazarusFrequency() {
  return <section id='music' className='rounded-xl border border-neutral-800 p-6 text-center'>
    <h2 className='text-2xl font-bold mb-4'>The Lazarus Frequency</h2>
    <iframe style={{borderRadius:12}} src='https://open.spotify.com/embed/artist/5KZfRaQHfjizCZsoRV9vqA?utm_source=generator' width='100%' height='352' frameBorder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>
    <iframe className='mt-6' width='100%' height='400' src='https://www.youtube.com/embed/8N5kql4jSJc' title='Lazarus - Laz Army Records' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
  </section>
}