import { useGetCitiesMutation } from "Services/City_API";

function WithGetCities(OldComponent) {
  function NewComponent() {
    const [getCitiesAPI, { data }] = useGetCitiesMutation();

    function callGetCitiesAPIFn(cityPrefix) {
      getCitiesAPI({ cityPrefix });
    }

    let cityList = [];

    if (data) {
      cityList = [...new Set(data.map((item) => item.city))];
    }

    const propsObj = {
      cityList,
      callGetCitiesAPIFn,
    };

    return <OldComponent data={propsObj} />;
  }
  return NewComponent;
}

export default WithGetCities;
