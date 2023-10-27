import { GraphContent } from "@bcrumbs.net/bc-api";

interface ComponentMainInterface {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
export function convertDataModelToDataObject(
  model: GraphContent
): Record<string, string> {
  return model.data.reduce(function (map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
}

const withModelToDataObjProp = (Component: React.FunctionComponent<any>) => {
  function ComponentWithModelToDataObjProp(props: ComponentMainInterface) {
    const data = convertDataModelToDataObject(props.model);

    return <Component {...props} data={data} />;
  }

  return ComponentWithModelToDataObjProp;
};

export default withModelToDataObjProp;
