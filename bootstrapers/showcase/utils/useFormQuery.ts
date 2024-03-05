import { gql, useQuery } from '@apollo/client';

const GET_FORMDATA = gql`
  query GETFormData($id:Int!) {
    form(id:$id) {
        customSubmitPath
        id
        name
        priority
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
        subForms {
          customSubmitPath
          id
          name
          priority
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
  }
`;

const useFormQuery = (formID: string) => {
  const { loading, error, data } = useQuery(GET_FORMDATA, {
    variables: { id: formID },
  });

  return { loading, formData: data ? data.form : null, error };
};

export default useFormQuery;