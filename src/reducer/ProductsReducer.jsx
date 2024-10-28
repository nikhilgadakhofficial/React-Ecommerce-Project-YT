const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featurData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featurData,
      };

    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

      case "SET_SIGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

      case "SET_SINGLE_PRODUCT" :
        return {
          ...state,
          isSingleLoading: false,
          singleProduct : action.payload,
        }

        case "SET_SIGLE_LOADING":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }

  
};

export default productReducer;
