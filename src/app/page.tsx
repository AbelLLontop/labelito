import HeaderPost from '@/components/HeaderPost'
import Message from '@/components/Message'
import Typography from '@/components/Typography'
import Link from 'next/link'

export default function Home () {
  return (
    <main>
      <section className='container px-8 xl:max-w-3xl mx-auto'>
        <HeaderPost
          title='Welcome Abel'
          date='Aug 2, 2016'
          author='Last Update'
        />
        <section>
          <Typography>
            Este es un indice resumido del contenido de esta webside
          </Typography>
          <Link href='/blogs'>
            <Typography variant='h2'>
              Blogs
            </Typography>
          </Link>
          <Typography>
            Documentacion de lo que voy aprendiendo en el camino de mi carrera y proyectos personales,
          </Typography>
          <Link href='/blogs/frontend'>
            <Typography variant='h3'>
              Frontend
            </Typography>
          </Link>
          <Typography>
            Blogs sobre Frontend
          </Typography>
          <Link href='/blogs/backend'>
            <Typography variant='h3'>
              Backend
            </Typography>
          </Link>
          <Typography>
            Blogs sobre Backend
          </Typography>
          <Link href='/blogs/data'>
            <Typography variant='h3'>
              Data
            </Typography>
          </Link>
          <Typography>
            Blogs sobre Data
          </Typography>
          <Link href='/portafolio'>
            <Typography variant='h2'>
              Mi Portafolio
            </Typography>
          </Link>
          <Typography>
            En esta seccion podras encontrar mi portafolio de proyectos
          </Typography>
          <Message />
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro suscipit inventore est iste vel excepturi quod odio? Eaque sint a accusamus temporibus culpa, expedita minima. Magni quisquam nihil adipisci.
          </Typography>
          <div className='my-2 w-full h-80 bg-slate-500' />
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro suscipit inventore est iste vel excepturi quod odio? Eaque sint a accusamus temporibus culpa, expedita minima. Magni quisquam nihil adipisci.
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro suscipit inventore est iste vel excepturi quod odio? Eaque sint a accusamus temporibus culpa, expedita minima. Magni quisquam nihil adipisci.
          </Typography>
          <Message />

          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro suscipit inventore est iste vel excepturi quod odio? Eaque sint a accusamus temporibus culpa, expedita minima. Magni quisquam nihil adipisci.
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro suscipit inventore est iste vel excepturi quod odio? Eaque sint a accusamus temporibus culpa, expedita minima. Magni quisquam nihil adipisci.
          </Typography>
        </section>
      </section>
    </main>
  )
}
