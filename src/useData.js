import { useStaticQuery, graphql } from "gatsby";

export const useData = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsData {
        projects {
          id
          title
          url
          slug
          level
          created
          code
        }
        posts {
          id
          title
          slug
          category
          speaker
          intro
        }
      }
    }
  `);

  return {
    projects: data.graphCmsData.projects,
    posts: data.graphCmsData.posts,
  };
};
