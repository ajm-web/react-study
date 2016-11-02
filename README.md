
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

----------------------------------------------------------------------

* WorkSpaceの作成

https://c9.io にアクセスし、アカウントを登録する。
登録後、WorkSpaceを作成する。
（Choose a templateは「Blank」で問題ありません）

* リポジトリからreact勉強用のモジュールをclone

```bash:command
git clone https://github.com/ajm-web/react-study.git
```

* npm installを実行

```bash:command
cd react-study
npm install
```

* ビルドを実行

```bash:command
npm start
```

コマンド実行後、/react-study/dist/ ディレクトリが作られ、
dist内にビルド後のモジュールが生成

* HelloWorld

/react-study/dist/index.html を右クリックして、
「Run」を選択する。
URLが表示されるので、ページにアクセスする。
ページにHello World!と表示されれば成功