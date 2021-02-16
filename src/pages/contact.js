import React from 'react';
import { graphql } from 'gatsby';
import { FormiumForm } from '@formium/react';
import { formium } from '../lib/formium';
export default function FeedbackForm({ data }) {
  const [success, setSuccess] = React.useState(false);
  if (success) {
    return <div>Thank you! Your response has been recorded.</div>;
  }
  return (
    <FormiumForm
      data={data.formiumForm}
      onSubmit={async (values) => {
        // Send form values to Formium
        await formium.submitForm('contact-us', values);
        setSuccess(true);
      }}
    />
  );
}
export const query = graphql`
  query MyQuery {
    formiumForm(slug: { eq: "contact-us" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;