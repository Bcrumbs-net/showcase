import { GraphContent } from '@bcrumbs.net/bc-api';

interface ComponentMainInterface {
  model?: GraphContent;
  isAR: boolean;
  data?: Record<string, string>;
}

export function convertDataModelToDataObject(
  model: GraphContent
): Record<string, string | unknown> {
  if (!model) {
    throw Error(
      'You need to either pass data to the organism component, or a model object'
    );
  }

  return model.data.reduce(
    function (map, obj) {
      map[obj.Key] = obj.Value;
      return map;
    },
    {
      subdata: model.children
        ? convertChildrenModelToDataObject(model)
        : undefined,
    },
  );
}

export function convertChildrenModelToDataObject(
  model: GraphContent
): Record<string, string | unknown>[] {
  return model.children.map((subModel) => {
    let subdata: Record<string, string | unknown>[] = undefined;
    if (subModel.children) {
      subdata = convertChildrenModelToDataObject(subModel);
    }

    return { ...convertDataModelToDataObject(subModel), subdata };
  });
}


const withModelToDataObjProp = (Component: React.FunctionComponent<any>) => {
  function ComponentWithModelToDataObjProp(props: ComponentMainInterface) {
    return (
      <Component
        {...props}
        data={props.data ?? convertDataModelToDataObject(props.model)}
      />
    );
  }

  return ComponentWithModelToDataObjProp;
};

export default withModelToDataObjProp;
