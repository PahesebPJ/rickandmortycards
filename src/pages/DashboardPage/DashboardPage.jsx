import React from "react";

import CardContainer from "../../components/CardContainer/CardContainer";

//hooks
import useGet from "../../hooks/useGet";

import "./DashboardPage.css";

function DashboardPage() {
  const { data } = useGet("/character");

  return (
    <div className="dashboard-container">
      <h1>Rick and morty characters</h1>
      <CardContainer characters={data} />
    </div>
  );
}

export default DashboardPage;
