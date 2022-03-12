# pyconkr-web-2022

# how to deployment
1. get the secrets with `update_secrets.sh` 
2. run `zappa update` on `pyconweb2022` folder

# contribution
## before development
you need to install dependencies
```bash

pip install -r requirements.txt

```
## sending pull request
you need to send `pull request` to `main` branch. 

but before sending PR, please check the following:
* you need to check format with `black`
* you need to pass testing command `pytest pyconkr-web-2022`


### how to force `black` on the code
#### vscode
* [black edtor setup for vscode](https://black.readthedocs.io/en/stable/integrations/editors.html#visual-studio-code)
* [blog source written in korea](https://www.daleseo.com/python-black/)

#### pycharm
* [black editor setup for PyCharm/IntelliJ IDEA](https://black.readthedocs.io/en/stable/integrations/editors.html#pycharm-intellij-idea)

### how to run `pytest`
you need to pass tests

```bash
pytest ./pyconkr-web-2022
```
