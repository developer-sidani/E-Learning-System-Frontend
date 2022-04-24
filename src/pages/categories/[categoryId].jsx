import React from 'react'
import { useRouter } from 'next/router'
import { CategoriesCoursesComponent, PageHeader } from '../../components'
import { MainLayout } from '../../layouts'

const topCategories = [
  {
    id: '623e622e079cc03328b019d6',
    title: 'Development',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg 2x',
    route: '/categories/623e622e079cc03328b019d6',
  },
  {
    id: '623e646d079cc03328b019de',
    title: 'Personal Development',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-2x-v2.jpg 2x',
    route: '/categories/623e646d079cc03328b019de',
  },
  {
    id: '623e648a079cc03328b019e4',
    title: 'Design',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-design-2x-v2.jpg 2x',
    route: '/categories/623e648a079cc03328b019e4',
  },
  {
    id: '623e6448079cc03328b019db',
    title: 'Business',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-business-2x-v2.jpg 2x',
    route: '/categories/623e6448079cc03328b019db',
  },
  {
    id: '623e647b079cc03328b019e1',
    title: 'IT & Software',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-2x-v2.jpg 2x',
    route: '/categories/623e647b079cc03328b019e1',
  },
  {
    id: '623e649a079cc03328b019e8',
    title: 'Photography & Video',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-photography-2x-v2.jpg 2x',
    route: '/categories/623e649a079cc03328b019e8',
  },
]

const CategoryId = () => {
  const router = useRouter()
  const { categoryId } = router.query

  // eslint-disable-next-line no-unsafe-optional-chaining
  const { title } = topCategories?.find(x => x?.id === categoryId)

  return (
    <>
    <PageHeader title={`Learn+ | ${title}`} />
      <CategoriesCoursesComponent categoryId={categoryId} title={title} />
    </>

  )
}
CategoryId.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
)
export default CategoryId
