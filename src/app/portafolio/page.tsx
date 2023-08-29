import React from 'react'
import Typography from '@/components/Typography'
import Image from 'next/image'
const PortafolioPage = () => {
  return (
    <main className=' container px-8 mx-auto lg:gap-8 py-8
    max-w-6xl
    relative
    '
    >

      <section className=' z-20'>
        <h1 className='text-4xl md:text-6xl font-extrabold my-2'>

          <span className='text-blue-600'>#</span>
          Abel Llontop
          <span className='text-blue-600'>.</span>

        </h1>
        <div className='text-lg text-gray-500'>
          Frontend Developer <span className='text-blue-600'> |</span> Backend Developer
          <span className='text-blue-600'> |</span> Data Analyst
        </div>
      </section>
      <section>
        <h2 className=' text-4xl font-extrabold my-4'>About me</h2>
        <Typography>
          💻👨‍💻 Entusiasta, autodidacta y cómodo trabajando en equipo, siempre dispuesto aprender y desenvolverme de la mejor manera posible en nuevas tecnologías. Siempre asumiendo retos que me permitan desarrollarme profesionalmente; responsable y comprometido con mi deber. 💻Actualmente adentrándome en el mundo del analisis de datos!!
        </Typography>
      </section>
      <section>
        <h2 className=' text-4xl font-extrabold my-4'>Skills</h2>
        <Typography>
          Algunos de los lenguajes y tecnologías que conozco y he trabajado
        </Typography>
        <section className='mt-4'>
          <div
            className='grid grid-cols-1 md:grid-cols-2 gap-4'
          >
            <h3 className='text-2xl font-bold'>Frontend</h3>
            <ul className=' list-none flex gap-4 flex-wrap pb-4'>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>
                React
              </li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>
                Nextjs
              </li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>Vue
              </li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>Angular
              </li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>HTML
              </li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>CSS
              </li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>Tailwindcss
              </li>
            </ul>
            <h3 className='text-2xl font-bold '>Backend</h3>
            <ul className=' list-none flex gap-4 flex-wrap pb-4'>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>Nodejs</li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>Express</li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>PHP</li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>Python</li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>Java</li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>Spring</li>
            </ul>
            <h3 className='text-2xl font-bold '>Data Analyst</h3>
            <ul className=' list-none flex gap-4 flex-wrap pb-4'>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>Python</li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>SQL</li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>Power BI</li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>Tableau</li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>Excel</li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>SSAS</li>
              <li className=' px-4 py-2 rounded-md font-medium bg-gray-50 text-gray-900'>SSIS</li>
            </ul>

          </div>

        </section>
      </section>
      <section>
        <h2 className='text-4xl font-extrabold my-4'>Projects</h2>
        <Typography>
          Algunos de mis proyectos personales
        </Typography>
        <section className='mt-4'>
          <article
            className='max-w-[24rem]
            rounded-md
            overflow-hidden

            '
          >
            <Image
              alt='logo'
              className='rounded-md w-full h-50 object-cover'
              src='/captura_rick_and_morty.png'
              width={400}
              height={300}
            />
            <div className='p-4'>
              <h3 className='text-xl font-bold'>
                <span className='text-blue-600 mr-1'>#</span>
                RickAndMorty-React
              </h3>
              <Typography>
                Consumo de la API de rick and morty con Reactjs, aplicando infinite scroll, filtros y selección de favoritos
              </Typography>

            </div>
          </article>

        </section>
      </section>

    </main>
  )
}

export default PortafolioPage
