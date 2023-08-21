import HeaderPost from '@/components/HeaderPost'
import Message from '@/components/Message'
import Typography from '@/components/Typography'

export default function Home () {
  return (
    <main>
      <section className='container px-8 xl:max-w-3xl mx-auto'>
        <HeaderPost
          title='Welcome Abel'
          date='Aug 2, 2016'
          author='Developer Abel'
        />
        <section>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro suscipit inventore est iste vel excepturi quod odio? Eaque sint a accusamus temporibus culpa, expedita minima. Magni quisquam nihil adipisci.
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro suscipit inventore est iste vel excepturi quod odio? Eaque sint a accusamus temporibus culpa, expedita minima. Magni quisquam nihil adipisci.
          </Typography>
          <Typography variant='h2'>
            Blog
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro suscipit inventore est iste vel excepturi quod odio? Eaque sint a accusamus temporibus culpa, expedita minima. Magni quisquam nihil adipisci.
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro suscipit inventore est iste vel excepturi quod odio? Eaque sint a accusamus temporibus culpa, expedita minima. Magni quisquam nihil adipisci.
          </Typography>
          <Typography variant='h3'>
            Blog
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro suscipit inventore est iste vel excepturi quod odio? Eaque sint a accusamus temporibus culpa, expedita minima. Magni quisquam nihil adipisci.
          </Typography>
          <Typography variant='h3'>
            Blog
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro suscipit inventore est iste vel excepturi quod odio? Eaque sint a accusamus temporibus culpa, expedita minima. Magni quisquam nihil adipisci.
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
