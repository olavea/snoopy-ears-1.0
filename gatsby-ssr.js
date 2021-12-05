// gatsby-ssr.js
import React from "react";

const OusetaScriptComponent = () => {
  return (
    <script
      key="outseta-script"
      id="outseta-script"
      src="https://cdn.outseta.com/outseta.min.js"
      data-options="o_options"
    />
  );
};

const OusetaConfigComponent = () => {
  const config = {
    domain: "queen.outseta.com",
    monitorDom: true,
  };
  return (
    <script
      key="outseta-config"
      id="outseta-config"
      dangerouslySetInnerHTML={{
        __html: `var o_options = ${JSON.stringify(config, null, 2)}`,
      }}
    />
  );
};



// B. Body setHead on body

const onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([OusetaConfigComponent(), OusetaScriptComponent()]);
};

export { onRenderBody };
