import React from "react";
import styled from "styled-components";
import ProfileButton from "./ProfileButton";

function Cell8() {
  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  return (
    <div>
      <ProfileButton onClick={handleCancel} color="cancel">
        Cancel
      </ProfileButton>
    </div>
  );
}

export default Cell8;
