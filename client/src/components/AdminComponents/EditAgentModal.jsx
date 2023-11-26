import { Box, Modal, styled } from "@mui/material";
import React from "react";

const AgentEditModalContainer = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const AgentEditModalWrapper = styled(Box)({
  background: "#fff",
  height: "90vh",
  overflowY: "scroll",
  borderRadius: "5px",
  padding: "20px",
  "&::-webkit-scrollbar": {
    width: "0px",
  },
});

const EditAgentModal = ({ editModal, setEditModal }) => {
  return (
    <AgentEditModalContainer
      open={editModal}
      onClose={() => setEditModal(false)}
    >
      <AgentEditModalWrapper>Test</AgentEditModalWrapper>
    </AgentEditModalContainer>
  );
};

export default EditAgentModal;
