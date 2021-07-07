import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: " http://192.168.43.146:9000/api",
  },
  staging: {
    apiUrl: " https://glacial-crag-65847.herokuapp.com/api",
  },
  prod: {
    apiUrl: " https://glacial-crag-65847.herokuapp.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
