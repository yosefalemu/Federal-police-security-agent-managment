import { Modal, styled, Box } from "@mui/material";
import React from "react";

const EditEmployeeModalContainer = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const EditEmployeeModalWrapper = styled(Box)({
  background: "#fff",
  height: "fit-content",
  borderRadius: "5px",
  padding: "20px",
});

const EditEmployeeModal = ({ editModal, setEditModal }) => {
  return (
    <EditEmployeeModalContainer
      open={editModal}
      onClose={() => setEditModal(false)}
    >
      <EditEmployeeModalWrapper>Test</EditEmployeeModalWrapper>
    </EditEmployeeModalContainer>
  );
};

export default EditEmployeeModal;
