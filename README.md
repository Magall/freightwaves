# FreightWaves Senior Frontend Challenge

## Solutions

### Table without <table></table>
As listed on the requirements, should be used flexbox for create a table, so I created a div as container (table) and many others as rows(trs). Then relyed on flexbox to make 1 row on top of another and defined a width in % for the cells (tds), since the requirement was showing only three props. I decided to extract the Table to a component, for better readability and reuse.

### Make table searchable
To make it searchable I just used the Array.filter method and returned as a computed (researchedData). Since the search function would get large I decided to declare an helper for better readabillity. I normalized the strings with a composable (useNormalizeString) this makes the search case insensitive and trim it.

### Edit row on click
For editing the row I decided to create a Modal. In order to reuse it, it is an external component that accepts slots on the body and footer. The Modal component itself provides mostly the styling and placement. letting the responsability of passing the content by slots to whoever use it.

### Edit persist on reload.
Whenever the button save is trigered the new content is updated on the data array, the change is stored on the usersCache Map. If there is already a change on that position the cache will be updated, otherwise  will be create a new entry. I used a map here to be more eficient while tracking changes. In every cacheMap change it's updated on session strorage. When the page is loaded or reloaded the Session Storage content is read and merged with the data received from the api. This is performed by the computed (mergedUsersFromCache).

### Reach API and load
Here I used fetch API and encapsulated it on a composable (useFetch). In order to refetch when there is no searchString typed there is a watcher to trigger the request again.

## Decisions
I tried to type functions and variables the most possible, expect for few ocasions where strictly type it was not a smart move. Also tried to eliminate the most 'magic names and strings', by creation of enums and constants.
The functions were made to be the smallest possible and make just one thing, to increase readability and maintanace, also chose names carefully.
About the components the objective was similar to the functions, small, good naming and have one very defined objective.

## File Structure
For file naming, every vue instance starts with capital letter, every composing with 'use'.
Enums names are uppercase and it's properties capital letter, constant names uppercase and if they are complex types the child props are all lower case.

📦src
 ┣ 📂assets
 ┃ ┗ 📜logo.png
 ┣ 📂components
 ┃ ┣ 📜Modal.vue
 ┃ ┣ 📜Spinner.vue
 ┃ ┗ 📜Table.vue
 ┣ 📂composables
 ┃ ┣ 📜useFetch.ts
 ┃ ┣ 📜useNormalizeString.ts
 ┃ ┗ 📜useUpdateArrayByHash.ts
 ┣ 📜App.vue
 ┣ 📜constants.ts
 ┣ 📜enums.ts
 ┣ 📜env.d.ts
 ┣ 📜interfaces.ts
 ┗ 📜main.ts


### composables
helper functions to reuse in the future 
###### useFetch
Just encapsulate and return the result or error of a request, based on the url parameter. Possible evolution would be use the vue-query lib to handle api calls.
###### useNormalizeString
Returns the received string  trimed and uppercase, it's usefull while comparing strings.
###### useUpdateArrayByHash
Here it's the one who merges a Map and an array based on an id property. Honestly it's the less probable to reuse on the fututre, due the especifc use case but I decided to move here specially for better readabillity of the function that calls it, it's much better have a function call with a meaninfull name than a complicated logic. Keeping functions simple =).

### components
###### Modal
This is the one responsible for provide a ui for changing the data. It emit events to handle close and takes 2 named slots. Holds no logic, only styles and structure to be easily reusable.
###### Table
As the modal holds no logic on it. Just emits an event to the parent know which row was clicked and the data of it. A possible evolution for better reuse would be pass the names of propeties to show as an array and use reflection to get it from the data props.

###### Spinner
this is the one responsible for the loading, very reusable. If this system grows to many screens and requests a possible evolution would be having one instance off it as a singleton on the app file and call id by a pinia "mutation" which would hold the isLoading boolean or an emiter.

### Dependencies
There are just a few dependencies on the app. It's asmall app and I tried to do as many thing as could with my own hands.
- Loadsh 
Used to deep clone complexes types. As JS pass complex types arguments by ref I try to avoid the most of passing references of complex types, since it can led to hard to find bugs.
- Sass
Just used for hierachy selectors. A possible evolution for the app would be declare style constants for spacing, fonts, colors etc.. for style that would be reused in other parts I just used the #app selector and removed the scoped.

### Do you have any questions about the code or docs? Please reach me !

#### rafael.g.magalhaes@proton.me
#### https://www.linkedin.com/in/rafael-magalh%C3%A3es-b679a0b9/
