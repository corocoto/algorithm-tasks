module.exports = {
    verbose: true,
    roots: [
        "<rootDir>"
    ],
    collectCoverageFrom: [
        "src/**/*.{js,ts}",
        "!src/**/*.d.ts"
    ],
    setupFilesAfterEnv: [
        "<rootDir>/jest.setup.js"
    ],
    testMatch: [
        "<rootDir>/**/__tests__/**/*.{js,ts}",
        "<rootDir>/**/*.{spec,test}.{js,ts}"
    ],
    testEnvironment: "jsdom",
    modulePaths: [],
    moduleFileExtensions: [
        "js",
        "ts",
    ],
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ]
}