import React from "react"
import { Link } from "gatsby"
import { Container } from "../../styles/MainStyles"
import styled from "styled-components"
import ProjectBox from "./ProjectBox"
import { graphql, StaticQuery } from "gatsby"
import { motion } from "framer-motion"

const Projects = ({ all }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  return (
    <StaticQuery
      query={graphql`
        query AllProjects {
          allSanityProject {
            edges {
              node {
                id
                title
                technologies {
                  name
                }
                projectNumber
                color
                client
                description
                projectType
                image {
                  asset {
                    fluid {
                      src
                    }
                  }
                }
                slug {
                  current
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Container bg="var(--white)" id="projects">
          <Grid>
            <motion.div
              className="grid"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {data.allSanityProject.edges.map((project, index) => {
                const p = project.node
                return (
                  <motion.div key={index} variants={item}>
                    <ProjectBox
                      key={p.id}
                      slug={p.slug.current}
                      title={p.title}
                      topic={p.type}
                      projectType={p.projectType}
                      description={p.description}
                      imgSrc={p?.image?.asset?.fluid}
                      color={p.color}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </Grid>
        </Container>
      )}
    />
  )
}

export default Projects

const Grid = styled.div`
  .grid {
    background: var(--white);
    grid-template-columns: 1fr 1fr;
    margin: 0 5rem;
    display: grid;
    grid-gap: 3.4rem;

    @media (min-width: 1024px) {
      margin: 0 10rem;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 3.4rem;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      margin: 0 2rem;
    }
  }
`
