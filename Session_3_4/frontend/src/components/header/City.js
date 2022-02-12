import React, { useState } from "react";

function City({ shahr, click }) {
  return <h3 onClick={click}>City: {shahr}</h3>;
}

export default City;
