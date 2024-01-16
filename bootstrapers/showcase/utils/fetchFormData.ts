import { gql, useQuery } from '@apollo/client';

const GET_FORMDATA = gql`
  query GETFormData($id:Int!) {
    form(companyId:1084, id:$id) {
        backButtonLabel
        customSubmitPath
        id
        name
        nextButtonLabel
        priority
        submitButtonLabel
        submitRedirectUrl
        formFields {
          id
          invisible
          name
          priority
          required
          title
          type
          choices
        }
    }
  }
`;

const fetchFormData = (formID) => {
  const { loading, error, data } = useQuery(GET_FORMDATA, {
    variables: { id: formID },
  });

  if (loading) {
    return { loading: true, formData: null, error: null };
  }

  if (error) {
    console.error('Error fetching form data:', error);
    return { loading: false, formData: null, error: error };
  }

  const formData = data ? data.form : null;

  return { loading: false, formData: formData, error: null };
};

export default fetchFormData