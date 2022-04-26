### Storybook Generator

Generates storybook stories directly based on the files in the `htmlFiles` directory. Gives a drop and drop solution to create storybook.

### Installing dependencies,

`npm install`

### To start the app locally,

`npm start`

### For building the app,

`npm run build`

### For deploying the app to pcf,

After running the build script, `cf push`

### For adding new files,

- Create a new folder or add to existing folders in `/htmlFiles` folder.
- Run the build script(`npm run build`) and deploy(`cf push`).

### Folder structure

*htmlFiles/\
&ensp;*folder1/\
&emsp;&emsp;*file1.html\
&emsp;&emsp;*file2.html\
&ensp;\*folder2/\
&emsp;&emsp;*file3.html\
&emsp;&emsp;*file4.html
