import Button from "../../../components/Global/Button/Button";
import useMutation from "../../../hooks/useMutation";

const DeleteStudentButton = ({ onSuccess, id }) => {
  const { isLoading, mutate } = useMutation();

  const handleClick = () => {
    mutate(`${process.env.REACT_APP_API_URL}/students/${id}`, {
      method: "DELETE",
      onSuccess: () => {
        onSuccess();
      },
    });
  };

  return (
    <Button color="alert" onClick={handleClick} disabled={isLoading}>
      🗑
    </Button>
  );
};

export default DeleteStudentButton;
