import { Navigate, Route, Routes } from "react-router-dom";
import Container from "../components/Global/Container/Container";
import AuthContainer from "../contexts/AuthContainer";
import AppHeader from "./Header/AppHeader";
import AddStudent from "./Students/AddStudent";
import StudentDetail from "./Students/Detail/StudentDetail";
import StudentsOverview from "./Students/StudentsOverview";

const App = () => {
  return (
    <AuthContainer>
      <AppHeader />
      <Container>
        <Routes>
          <Route path="/students" element={<StudentsOverview />} />
          <Route path="/students/:id/*" element={<StudentDetail />} />
          <Route path="/students/add" element={<AddStudent />} />
          <Route path="/" element={<Navigate to="/students" />} />
        </Routes>
      </Container>
    </AuthContainer>
  );
};

export default App;
