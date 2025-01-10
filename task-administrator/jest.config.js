export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|webp|svg|mp4|mp3|wav|ogg|ttf|woff|woff2)$": "<rootDir>/__mocks__/fileMock.js",
    },
    moduleFileExtensions: ["js", "jsx"],
  };
  