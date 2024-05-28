"use server";

export const getAgeData = async (firstName) => {
  try {
    // make an api call to get age
    let ageResponse = await fetch(`https://api.agify.io/?name=${firstName}`);
    let ageData = await ageResponse.json();
  
    return ageData.age;
  } catch (error) {
    
    return error.erorr
  }
};

export const getGenderData = async (firstName) => {
  try {
    // make an api call to get gender
    let genderResponse = await fetch(
      `https://api.genderize.io?name=${firstName}`
    );
    let genderData = await genderResponse.json();
  
    return genderData.gender;
  } catch (error) {
    
    return error.erorr;
  }
  
}

export const getCountryData = async (firstName) => {
  try {
    // make an api call to get nationality
    let nationalityResponse = await fetch(
      `https://api.nationalize.io?name=${firstName}`
    );
    let nationalityData = await nationalityResponse.json();

    if (!nationalityData || nationalityData.country.length == 0) {
      return ""
    } else {
      return nationalityData.country[0].country_id;
    }
  } catch (error) {

    return error.erorr;
  }
};