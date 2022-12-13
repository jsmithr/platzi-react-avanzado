import React from 'react'
import { useCategories } from '../../hooks/useCategories'
import { Category } from '../Category'
import { Item, List } from './styles'

export const ListOfCategories = React.memo(() => {
  const { categories, showFixed, loading } = useCategories()

  const renderList = (fixed = false) => {
    return (
      <List fixed={fixed}>
        {
          categories.map((category, i) =>
            <Item key={category.id || i}>
              <Category
                {...category}
                loading={loading.toString()}
                path={`/pet/${category.id}`}
              />
            </Item>)
        }
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
})

/* export const Home = () => {
  const { id } = useParams();

  const HomeComponent = useMemo(() => <Layout title=‘ Tu app de fotos de mascotas’ subtitle=‘ Con petgram puedes encontrar fotos de animales domésticos muy bonitos’>
    <ListOfCategories />
    {id && <ListOfPhotoCards categoryId={parseInt(id)} />}
  </Layout>
    , [id]);

  return HomeComponent;
}
 */
