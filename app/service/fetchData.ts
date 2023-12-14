import { request, gql } from 'graphql-request'

export const getData = async () => {

  const query = gql`
    query Mains {
      slugsWebs {
        id  
        slug {
          title
          slug
          id
          slugTitle
        }
        slug2 {
          id
          slug
          title
          slugTitle
        }
        slug3 {
          id
          slug
          title
          slugTitle
        }
        slug4 {
          id
          slug
          title
          slugTitle
        }
        slug5 {
          id
          slug
          title
          slugTitle
        }
      }
      mains {
        title
        description
        id
        slug
        body {
          raw
        }
        foto {
          url(
            transformation: {
              image: { resize: { width: 250, height: 250, fit: crop  } }
            }
          )
        }
        images {
          id
          url(
            transformation: {
              image: { resize: { width: 250, height: 250, fit: crop  } }
            }
          )
        }
        compMap {
          title
          fotoCom {
            url(
              transformation: {
                image: { resize: { width: 250, height: 250, fit: crop  } }
              }
            )
          }
          id
        }
        
      }
      asides {
        title
        id
        description
        body {
          raw
        }
      }
    }
        `

  const result = await request('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clq27w8db4wab01tb5sdfcvi2/master', query)
  return result
}


