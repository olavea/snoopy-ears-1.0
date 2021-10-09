const React = require("react");
const { default: Layout } = require("./src/components/Layout");


exports.wrapPageElement = ({ element, props }) => {
     return <Layout {...props }>
          {element}
          <span role="img" alt="vulcan salute emoji, smiling kitty emoji and pirate flag emoji">
               🖖😺🏴‍☠️
          </span>
     </Layout>;
}