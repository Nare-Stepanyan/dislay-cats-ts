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
  category_ids: null;
}

interface IImages {
  images: [];
  params?: IParams;
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
};

type stateAction = {
  type: string;
  payload: CategoryState | ImagesState;
};
type DispatchTypeCategory = (args: CategoryAction) => CategoryAction;
type DispatchTypeImages = (args: ImagesAction) => ImagesAction;

type ReduxTypes = ImageAction | CategoryAction;
