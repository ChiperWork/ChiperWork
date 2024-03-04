#!/usr/bin/python3
import os
from foxcolor import *

os.system('cls')
print(f'{Cores.verde}Iniciando servidor...{Cores.incolor}')
os.system('yarn')
os.system('yarn dev')
os.system('yarn build')
os.system('yarn serve')
os.system('yarn test')
os.system('start http://localhost:3000/')

