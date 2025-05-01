import React from "react";
import { getCookie } from "../actions";

function page() {
  const cookies_uat = getCookie("m_uat");
  const cookies_auth_status = getCookie("m_auth_status");
  return (
    <div>
      <p>{cookies_uat}</p>
      <p>{cookies_auth_status}</p>
    </div>
  );
}

export default page;
