import { GraphContent } from "@bcrumbs.net/bc-api";

interface ComponentMainInterface {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
export function convertDataModelToDataObject(model: GraphContent) {
  const data: Record<string, string> = model.data.reduce(function (map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return data;
}

const withModelToDataObjProp = (Component: React.FunctionComponent<any>) => {
  function ComponentWithModelToDataObjProp(props: ComponentMainInterface) {
    const data = props.model.data.reduce(function (map, obj) {
      map[obj.Key] = obj.Value;
      return map;
    }, {});

    return <Component {...props} data={data} />;
  }

  return ComponentWithModelToDataObjProp;
};

export default withModelToDataObjProp;
