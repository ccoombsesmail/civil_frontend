import React from "react";
import SupplementalLinks from "../SupplementalLinks/Index";
import { LinksContainer } from "./Style";

const LinkSection = ({ showLinks, topic }) => {
  if (!showLinks) return null
  return (
    <LinksContainer>
      <SupplementalLinks links={topic?.evidenceLinks} type={"evidence"} />
      <SupplementalLinks links={topic?.furtherReadingLinks} type={"furtherReading"} />
    </LinksContainer>
  );
};


export default LinkSection