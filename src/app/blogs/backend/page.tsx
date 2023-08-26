import HeaderPost from '@/components/HeaderPost'
import Message from '@/components/Message'
import PostPageMainContainer from '@/components/PostPageMainContainer'
import Typography from '@/components/Typography'
import { linksBlog } from '@/consts/links'
import { routesPost } from '@/consts/routesPosts'
import getPostMetaData from '@/libs/getPostMetaData'

const BackendPage = async () => {
  const postsMetaData = await getPostMetaData(routesPost.backend)
  if (!postsMetaData) return (<div>no posts</div>)
  return (
    <PostPageMainContainer posts={postsMetaData} linkPost={linksBlog.backend.route}>
      <HeaderPost
        title='Backend Blog'
        date='Aug 2, 2016'
        author='Developer Abel'
      />
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor dolorum, perferendis ipsa exercitationem et consequuntur obcaecati ad quia iusto molestias quasi error sunt totam! Iure non enim provident nulla.
      </Typography>
      <Message />
    </PostPageMainContainer>
  )
}

export default BackendPage
