import { BiMessageDetail } from 'react-icons/bi'

const Message = () => {
  return (
    <div className='p-4 bg-slate-200 dark:bg-gray-800 rounded-sm my-2'>
      <div className='font-semibold flex items-center gap-1 '>

        <BiMessageDetail />
        Message
      </div>
      <p className='dark:text-gray-200'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores laudantium minus voluptatum ducimus itaque voluptatibus sequi expedita autem sit fugiat, a atque, dolorum cupiditate, quam consectetur beatae quidem magnam.
      </p>
    </div>
  )
}

export default Message
