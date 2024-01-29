import { useGetCitiesMutation } from "Services/City_API";

function WithGetCities(OldComponent) {
  function NewComponent({ searchBtnClickFn, changeThemeFn }) {
    const [getCitiesAPI, { data }] = useGetCitiesMutation();

    function callGetCitiesAPI(cityPrefix) {
      getCitiesAPI({ cityPrefix });
    }

    let cityList = [];

    if (data) {
      cityList = [...new Set(data.map((item) => item.city))];
    }

    return (
      <OldComponent
        searchBtnClickFn={searchBtnClickFn}
        changeThemeFn={changeThemeFn}
        cityList={cityList}
        callGetCitiesAPI={callGetCitiesAPI}
      />
    );
  }
  return NewComponent;
}

export default WithGetCities;
