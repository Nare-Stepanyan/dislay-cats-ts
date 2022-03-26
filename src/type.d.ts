interface ICategory {
  id: number;
  name: string;
}
type CategoryState = {
  categories: ICategory[];
};

type CategoryAction = {
  type: string;
  categories: Array<ICategory>;
};

interface IParams {
  limit: number;
  page: number;
  category_ids?: number;
}

interface IImages {
  id: string;
  url: string;
}

type ImagesState = {
  images: IImages[];
};

type ImagesAction = {
  type: string;
  images: IImages[];
};
type InitState = {
  categories: ICategory[];
  images: IImages[];
  category_ids: number;
};

type stateAction = {
  type: string;
  payload: CategoryState | ImagesState | number;
};

type DispatchTypeCategory = (args: CategoryAction) => CategoryAction;
type DispatchTypeImages = (args: ImagesAction) => ImagesAction;
type DispatchTypeCategoryIds = (args: number) => number;

type ReduxTypes = ImageAction | CategoryAction;
