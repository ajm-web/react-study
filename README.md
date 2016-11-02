
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Hi there! Welcome to Cloud9 IDE!

To get you started, create some files, play with the terminal,
or visit http://docs.c9.io for our documentation.
If you want, you can also go watch some training videos at
http://www.youtube.com/user/c9ide.

Happy coding!
The Cloud9 IDE team

mkdir -m 705 project
cd ./project
git init
        
mkdir -m 705 -p ./src/js/calculator ./src/style ./dist
touch .editorconfig

        root = true
        
        [*]
        charset = utf-8
        indent_style = tab
        indent_size = 2
        end_of_line = lf
        insert_final_newline = true
        trim_trailing_whitespace = true
        
        [*.md]
        trim_trailing_whitespace = false
        
        [package.json]
        indent_style = space
        end_of_line = lf
        
        [.editorconfig]
        end_of_line = lf

.gitignore
package.json
tsconfig.json
tslint.json
typings.json
webpack.config.js

npm install
npm start

git init
git add .
git commit -m "initial commit"