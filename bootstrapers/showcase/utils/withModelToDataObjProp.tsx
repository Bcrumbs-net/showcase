import { GraphContent } from '@bcrumbs.net/bc-api';

interface ComponentMainInterface {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const withModelToDataObjProp = (
  Component: React.FunctionComponent<any>
) => {
  function ComponentWithModelToDataObjProp(props: ComponentMainInterface) {
    const data: Record<string, string> = props.model.data.reduce(function (
      map,
      obj
    ) {
      map[obj.Key] = obj.Value;
      return map;
    },
    {});

    return <Component {...props} data={data} />;
  }

  return ComponentWithModelToDataObjProp;
};

export default withModelToDataObjProp;
