import GlobalStyle from "../styles/global";
import styled from "styled-components";
import FormInscriptionProject from "../components/InscriptionProjecto/FormProjectRegister";
import GridProject from "../components/InscriptionProjecto/GridProject";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getProjects = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setProjects(res.data.sort((a, b) => (a.carrera > b.carrera ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, [setProjects]);

  return (
    <>
      <Container>
        <Title>Projectos</Title>
        <FormInscriptionProject onEdit={onEdit} setOnEdit={setOnEdit} getProjects={getProjects} />
        <GridProject setOnEdit={setOnEdit} projects={projects} setProjects={setProjects} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default ProjectsPage;
