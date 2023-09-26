# Portfolio website

Simple portfolio website created with ReactJS and Vite tool.

Sections:
- About
- Projects
- Contact

All details are stored in `src/config.js`, it can be changed from there to change the user details.

Fetched repositories details are stored in local storage. These details refetched again after 3600 seconds when user visits.

All Repositories are shown as Projects, fetched using the GitHub API using username of the user which is also stored in `src/config.js`