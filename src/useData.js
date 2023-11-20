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
        
      }
    }
  `);

  return {
    projects: data.graphCmsData.projects,
  };
};
